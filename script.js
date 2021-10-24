$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var fade_elements = $(".fade");

  for (var i = 0; i < fade_elements.length; i++) {
    var fade_element = fade_elements[i];

    if ($(fade_element).position().top < pageBottom) {
      $(fade_element).addClass("visible");
    } else {
      $(fade_element).removeClass("visible");
    }
  }
});
