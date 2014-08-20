window.onload = function() {
    var colors = document.getElementById('colors');  //Short handing the location we're putting all the shades in
    var count = 50;  //How many shades to create
    var r = 1, g = 1, b = 1;  //Starting points for all the RGB values
    var hex = 'rgb('+r+','+g+','+b+')';
        hex = rgb2hex(hex);  //Convert rgb version to hexidecimal for readability in the code and for display when viewing the page

    // Create the first paragraph so the others can concatenate
    colors.innerHTML = '<p style="background-color:'+ hex +'; color:#fff">'+ hex +'</p>';

    // Loop through the count and append a new shade with its new calculated style
    for (var i = 2; i <= count; i++) {

      // Rounding each value to the nearest integer since the conversion cannot handle decimals
      r = Math.round(r + (254/count));
      g = Math.round(g + (254/count));
      b = Math.round(b + (254/count));

      hex = 'rgb('+r+','+g+','+b+')';
      hex = rgb2hex(hex);

      if (r < 140) {
        text_color = '#fff';
      } else {
        text_color = '#000';
      }
      colors.innerHTML += '<p style="background-color:'+ hex +'; color:'+ text_color +'">'+ hex +'</p>';
    };
  }

  // Array of allowed characters the hexify function uses to check against in the conversion
  var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

  //Function to convert hex format to a rgb color
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hexify(rgb[1]) + hexify(rgb[2]) + hexify(rgb[3]);
  }
  // Check against the hexDigits array
  function hexify(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
