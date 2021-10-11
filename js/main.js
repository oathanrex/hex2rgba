// function below is not yet tested
// function getColorValue(color) {
//   var t = document.createElement('div');
//   t.style.display = 'none';
//   t.style.color = color;
//   document.body.appendChild(t);
//
//   var style = window.getComputedStyle(t, null);
//   var colorValue = style.getPropertyCSSValue('color').getRGBColorValue();
//   document.body.removeChild(t);
//
//   var hex = function(x) {
//     return ('0' + parseInt(x, 10).toString(16)).slice(-2);
//   }
//
//   var hexString = '#';
//   with(colorValue) {
//     hexString += hex(red.cssText) + hex(green.cssText) + hex(blue.cssText);
//   }
//
//   return hexString;
// }
//
//

$(function () {
  var opacity,
  colors = {'aliceblue': '#f0f8ff', 'antiquewhite': '#faebd7', 'aqua': '#00ffff', 'aquamarine': '#7fffd4', 'azure': '#f0ffff', 'beige': '#f5f5dc', 'bisque': '#ffe4c4', 'black': '#000000', 'blanchedalmond': '#ffebcd', 'blue': '#0000ff', 'blueviolet': '#8a2be2', 'brown': '#a52a2a', 'burlywood': '#deb887', 'cadetblue': '#5f9ea0', 'chartreuse': '#7fff00', 'chocolate': '#d2691e', 'coral': '#ff7f50', 'cornflowerblue': '#6495ed', 'cornsilk': '#fff8dc', 'crimson': '#dc143c', 'cyan': '#00ffff', 'darkblue': '#00008b', 'darkcyan': '#008b8b', 'darkgoldenrod': '#b8860b', 'darkgray': '#a9a9a9', 'darkgreen': '#006400', 'darkkhaki': '#bdb76b', 'darkmagenta': '#8b008b', 'darkolivegreen': '#556b2f', 'darkorange': '#ff8c00', 'darkorchid': '#9932cc', 'darkred': '#8b0000', 'darksalmon': '#e9967a', 'darkseagreen': '#8fbc8f', 'darkslateblue': '#483d8b', 'darkslategray': '#2f4f4f', 'darkturquoise': '#00ced1', 'darkviolet': '#9400d3', 'deeppink': '#ff1493', 'deepskyblue': '#00bfff', 'dimgray': '#696969', 'dodgerblue': '#1e90ff', 'firebrick': '#b22222', 'floralwhite': '#fffaf0', 'forestgreen': '#228b22', 'fuchsia': '#ff00ff', 'gainsboro': '#dcdcdc', 'ghostwhite': '#f8f8ff', 'gold': '#ffd700', 'goldenrod': '#daa520', 'gray': '#808080', 'green': '#008000', 'greenyellow': '#adff2f', 'honeydew': '#f0fff0', 'hotpink': '#ff69b4', "indianred ": '#cd5c5c', "indigo ": '#4b0082', 'ivory': '#fffff0', 'khaki': '#f0e68c', 'lavender': '#e6e6fa', 'lavenderblush': '#fff0f5', 'lawngreen': '#7cfc00', 'lemonchiffon': '#fffacd', 'lightblue': '#add8e6', 'lightcoral': '#f08080', 'lightcyan': '#e0ffff', 'lightgoldenrodyellow': '#fafad2', 'lightgrey': '#d3d3d3', 'lightgreen': '#90ee90', 'lightpink': '#ffb6c1', 'lightsalmon': '#ffa07a', 'lightseagreen': '#20b2aa', 'lightskyblue': '#87cefa', 'lightslategray': '#778899', 'lightsteelblue': '#b0c4de', 'lightyellow': '#ffffe0', 'lime': '#00ff00', 'limegreen': '#32cd32', 'linen': '#faf0e6', 'magenta': '#ff00ff', 'maroon': '#800000', 'mediumaquamarine': '#66cdaa', 'mediumblue': '#0000cd', 'mediumorchid': '#ba55d3', 'mediumpurple': '#9370d8', 'mediumseagreen': '#3cb371', 'mediumslateblue': '#7b68ee', 'mediumspringgreen': '#00fa9a', 'mediumturquoise': '#48d1cc', 'mediumvioletred': '#c71585', 'midnightblue': '#191970', 'mintcream': '#f5fffa', 'mistyrose': '#ffe4e1', 'moccasin': '#ffe4b5', 'navajowhite': '#ffdead', 'navy': '#000080', 'oldlace': '#fdf5e6', 'olive': '#808000', 'olivedrab': '#6b8e23', 'orange': '#ffa500', 'orangered': '#ff4500', 'orchid': '#da70d6', 'palegoldenrod': '#eee8aa', 'palegreen': '#98fb98', 'paleturquoise': '#afeeee', 'palevioletred': '#d87093', 'papayawhip': '#ffefd5', 'peachpuff': '#ffdab9', 'peru': '#cd853f', 'pink': '#ffc0cb', 'plum': '#dda0dd', 'powderblue': '#b0e0e6', 'purple': '#800080', 'red': '#ff0000', 'rosybrown': '#bc8f8f', 'royalblue': '#4169e1', 'saddlebrown': '#8b4513', 'salmon': '#fa8072', 'sandybrown': '#f4a460', 'seagreen': '#2e8b57', 'seashell': '#fff5ee', 'sienna': '#a0522d', 'silver': '#c0c0c0', 'skyblue': '#87ceeb', 'slateblue': '#6a5acd', 'slategray': '#708090', 'snow': '#fffafa', 'springgreen': '#00ff7f', 'steelblue': '#4682b4', 'tan': '#d2b48c', 'teal': '#008080', 'thistle': '#d8bfd8', 'tomato': '#ff6347', 'turquoise': '#40e0d0', 'violet': '#ee82ee', 'wheat': '#f5deb3', 'white': '#ffffff', 'whitesmoke': '#f5f5f5', 'yellow': '#ffff00', 'yellowgreen': '#9acd32'};

  $('#slider').slider({
    value: 100,
    min: 0,
    max: 100,
    step:1,
    slide: function(event, ui) {
      $('#opacity').val( ui.value );
      // calculate_color_values(ui.value);
      // calculate_color_values();
    },
    change: function(event, ui) {
      // calculate_color_values(ui.value);
      // calculate_color_values();
    }
  });
  $('#opacity').val( $('#slider').slider("value") );
  $('#opacity').change(function() {
    $('#slider').slider('value', $(this).val());
  });

  // focus on HEX field on page load
  $('#f_hex_value').focus();

  // select input content on click
  $('#f_rgb_for_css, #f_rgba_for_css').click(function() {
    this.select();
  });

  $('.setColor').click(function(e) {
    e.preventDefault();

    $('#f_hex_value').val($(this).text());
  });

  // function for calculating 6 letters hex value
  function calculateFull(hex, opacity) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // set results
    setResults( r, g, b, opacity );

    return false;
  }

  // function for calculating 3 letters hex value
  function calculatePartial(hex, opacity) {
    var r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
    var g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
    var b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);

    // set results
    setResults( r, g, b, opacity );

    return false;
  }

  function setResults ( r, g, b, opacity ) {
    $('#f_r').val( r );
    $('#f_g').val( g );
    $('#f_b').val( b );
    $('#f_rgb_for_css').val('rgb(' + r + ', ' + g + ', ' + b + ')');
    $('#f_rgba_for_css').val('rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity/100 + ')');
  }

  // main function
  function calculate_color_values (opacity) {
    var sent_hex,
    hex;

    // get sent_hex value to lower case and remove spaces
    sent_hex = $('#f_hex_value').val().toLowerCase().replace(' ','');

    // we are doing something with opacity slider
    if (isNaN(opacity)) {
      opacity = $('#slider').slider('value');
    }

    // if sent_hex is a proper color name (check: http://www.w3.org/TR/css3-color/#html4
    // and http://www.w3.org/TR/css3-color/#svg-color for more info)
    if (colors.hasOwnProperty(sent_hex)) {
      // strip # from HEX
      hex = colors[sent_hex].substr(1);
      calculateFull(hex, opacity);

    // if sent_hex is not a proper color name check if it is a proper hex value
    // if not - give an error message
    } else if ( ! sent_hex.match(/^#?([0-9A-Fa-f]){3}\s*$|^#?([0-9A-Fa-f]){6}\s*$/) ) {
      throw 'Invalid HEX value or color name';

    // if sent_hex is a proper hex value calculate rgb and rgba
    } else {

      // strip # from HEX
      hex = ( sent_hex.charAt(0) === "#" ? sent_hex.substr(1) : sent_hex );
      // check if 6 letters are provided
      if (hex.length === 6) {
        calculateFull(hex, opacity);
      }
      else if (hex.length === 3) {
        calculatePartial(hex, opacity);
      }
    }
    return false;
  }

  // call function on btn click
  $('#calculate').click(function(event){
    // preventDefault doesn't exist in IE
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    try {
      calculate_color_values();
    }
    catch (err) {
      $('#f_r, #f_g, #f_b').val('');
      $('#f_rgb_for_css').val(err);
      $('#f_rgba_for_css').val(err);
    }
  });

  // detecting Flash Player version
  // (zclip needs Flash Player 10+)
  var flashPlayerVersion = swfobject.getFlashPlayerVersion().major; // checks the major Flash version

  // set the 'copy to clipboard' buttons
  // if there is Flash version 10+
  if (flashPlayerVersion >= 10) {
    $('#liRGB').append('<a id="copy_rgb">copy rgb<\/a>');
    $('#liRGBA').append('<a id="copy_rgba">copy rgba<\/a>');

    $('a#copy_rgb').zclip( {
      path: 'js/ZeroClipboard.swf',
      copy: function() {
        return $('#f_rgb_for_css').val();
      },
      afterCopy: function() {
        $(this).animate({opacity:0.5}, 200, function() {
          $(this).animate({opacity:1}, 150);
        });
      }
    });

    $('a#copy_rgba').zclip( {
      path: 'js/ZeroClipboard.swf',
      copy: function() {
        return $('#f_rgba_for_css').val();
      },
      afterCopy: function() {
        $(this).animate({opacity:0.5}, 200, function() {
          $(this).animate({opacity:1}, 150);
        });
      }
    });
  }
});
