"use strict";

var SERVER = 'https://vast-earth-2490.herokuapp.com';


function toggleChecked(item) {
  if (item.data("checked") === true) {
    item.css("background-color", "#FFF");
    item.data("checked", false);
  } else {
    item.css("background-color", "grey");
    item.data("checked", true);
  }
}

$("#btn_select_all").click(function(e) {
  if ($(this).text() === "Select all") {
    $(this).text("Unselect all");
  } else {
    $(this).text("Select all");
  };
  $("#emails .checked").each(function(idx) {
    toggleChecked($(this));
  })
});

$("#btn_send_to_trash").click(function(e) {
  $("#emails .checked").each(function(idx) {
    var email = $(this);
    if (email.data("checked") === true) {
      email.parent().remove();
    }
  })
});

// delegate: similar to bind, but delegate persist for existing and new items
// sub-items of class .checked will inherit "click" event
$("#email_list").delegate(".checked", "click", function(e) {
  toggleChecked($(this));
});

$('#btn_compose').click(function() {
  $("#blank-email").show().animate({
    bottom: "39px"
  }, 'fast');
});


$("#blank-close").click(function() {
  $("#blank-email").hide();
})

$("#btn_send_email").click(function() {
  var dataInputs = $("#new_email").serialize();

  $.post(SERVER + '/email', dataInputs, function(data) {
    $("#blank-email").hide();
    showStatus("email send!", "#5DC9B8");
  });
});

$("#btn_cancel_email").click(function() {
  $("#blank-email").hide();
  showStatus("email deleted!", "#FB1718");
});

function showStatus(msg, color) {
  $("#status").text(msg).css("background-color", color);
  $("#status").show().delay(2000).fadeOut('slow');
}

$("#btn_update").click(function() {
  checkEmails("/email/new");
  checkLabels();
});

function checkEmails(params) {
  $.ajax({
    url: SERVER + params,
    type: "get",
    data: '',
    dataType: "json",
    beforeSend: beforeSendFunction,
    success: successEmailsFunction,
    error: errorFunction,
    complete: completeFunction
  });
}

function checkLabels() {
  $.ajax({
    url: SERVER + "/labels",
    type: "get",
    data: '',
    dataType: "json",
    beforeSend: beforeSendFunction,
    success: successLabelsFunction,
    error: errorFunction,
    complete: completeFunction
  });
}

function beforeSendFunction() {
  showStatus("Updating ...", "#337AB7");
  $("body").addClass("loading");
}

function successEmailsFunction(data) {
  $.each(data, function(id, item) {
    $("#emails").prepend(buildEmail(id, item));
  });
  showStatus("Received " + Object.keys(data).length + " emails", "#5DC9B8");
}

function successLabelsFunction(data) {
  var count = 0;
  $.each(data, function(id, item) {
    if ($("#tags_list #" + id).length === 0) {
      $("#tags_list").prepend(buildTag(id, item));
      count++;
    }
  });
  showStatus("Received " + count + " tags", "#5DC9B8");
}

function buildEmail(id, item) {
  return '<li data-id="' + id + '" class="email">' +
    '  <div class="checked" data-checked="false"></div>' +
    '  <div class="starred" data-starred="' + item.starred + '"></div>' +
    '  <div class="from">' + item.from + '</div>' +
    '  <div class="subject">' + item.subject + '</div>' +
    '  <div class="preview">' + item.preview + '</div>' +
    '</li>';
}

function buildTag(id, item) {
  return '<button id="' + id + '" type="button" class="btn btn-default btn-sm btn_section btn_tag">' +
    capitalize(id) + '</button>';
}

function errorFunction() {
  showStatus("Something is wrong!", "#FB1718");
}

function completeFunction() {
  $("body").removeClass("loading");
}

// ToDo tags or labels are dynamic
$("#tags_list").delegate(".btn_tag", "click", function() {
  checkEmails("/labels/" + $(this).text().toLowerCase());
});

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}