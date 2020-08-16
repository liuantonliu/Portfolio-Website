//404page
! function(a) {
    var b = a(window),
      c = a(".error-404 i"),
      d = c.not(".blank"),
      e = d.length,
      f = null,
      g = 0;
    d.attr("data-delay", function() {
      return Math.floor(Math.random() * e);
    }), 
    b.on("load", function() {
      d.each(function() {
        var b = a(this),
          d = parseInt(b.data("delay"), 10);
        f = setTimeout(function() {
          g++, b.stop().animate({
            opacity: 1
          }, 600), g === e && (clearTimeout(f), setTimeout(function() {
            c.each(function(b) {
              "blank nf" === this.className && this.setAttribute("data-delay", b);
              var c = a(this),
                d = parseInt(c.data("delay"), 10);
              setTimeout(function() {
                c.hasClass("nf") ? c.addClass("nf-text").stop().animate({
                  opacity: 1
                }, 800) : c.stop().animate({
                  opacity: .02
                }, 800);
              }, 5 * d); //changed value here
            });
          }, 3e3));
        }, 5 * d); //changed value here
      });
    });
  }(jQuery);