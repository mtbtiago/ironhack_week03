// In each exercise we will print in the console the result.

var sites = ["Google", "Yahoo", "Facebook", "Microsoft", "Apple"];

// The position of "Microsoft" in the array
var idx = $.inArray("Microsoft", sites)
console.log('idx', idx);

// If "LinkedIn" is in the sites array
var idx = $.inArray("LinkedIn", sites) >= 0;
console.log('idx', idx);

// The name of the companies each name in one line
$.each(sites, function(idx, item) {
  console.log('item ', item);
});

var pow2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

// The pow of 2 that is 64
var idx = $.inArray(64, pow2);
console.log('idx ', idx);

// The first 10 pow of 2
var result = $.each(pow2, function(idx, item) {
  console.log(item, "=  2^", idx);
})

// Double the value of each element of the array
var result = $.map(pow2, function(item) {
  return item * 2;
});

// Sum the value of all of numbers of the array
var result = 0;
$.each(pow2, function(item) {
  result += item;
});
console.log('result ', result);

// I want to get the values given by the user but the defalut values in the 
// others
var defaultConfig = {
  left: 10,
  top: 20,
  rigth: 30,
  bottom: 40
};

var myFunction = function(config) {
  return $.extend(defaultConfig, config);
};

console.log(myFunction({
  left: 20,
  top: 30
}));