window.onload = function() {
    var colors = document.getElementById('colors');
    var count = 50;
    var c1 = 1, c2 = 1, c3 = 1;
    var hex = 'rgb('+c1+','+c2+','+c3+')';
    hex = rgb2hex(hex);
    var myNum = 123;
    console.log(colors);
    colors.innerHTML = '<p style="background-color:'+ hex +'; color:#fff">'+ hex +'</p>';
    for (var i = 2; i <= count; i++) {
      c1 = Math.round(c1 + (254/count));
      c2 = Math.round(c2 + (254/count));
      c3 = Math.round(c3 + (254/count));

      //console.log(c1);

      hex = 'rgb('+c1+','+c2+','+c3+')';
      hex = rgb2hex(hex);

      //console.log(hex);
      if (c1 < 140) {
        text_color = '#fff';
      } else {
        text_color = '#000';
      }
      colors.innerHTML += '<p style="background-color:'+ hex +'; color:'+ text_color +'">'+ hex +'</p>';
      console.log(text_color);
    };
  }


  var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

  //Function to convert hex format to a rgb color
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hexify(rgb[1]) + hexify(rgb[2]) + hexify(rgb[3]);
  }

  function hexify(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
