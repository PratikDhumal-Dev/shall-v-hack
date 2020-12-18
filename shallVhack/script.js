$(function () {
  var text = $(".text");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

AOS.init({
  duration: 1200,
});

$(document).ready(function () {
  new WOW().init();
});

// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});

ocument.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["4 hours.", "4 hours", "4 hours.", "4 hours"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

$(document).ready(function () {
  // Add scrollspy to <body>
  $("body").scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// @path-json can be an object or an array, the first will be loaded directly, the object from the array will be random selected
/* tsParticles.loadJSON(@dom-id, @path-json, @callback (optional)); */

tsParticles
  .loadJSON("tsparticles", "presets/default.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

//or

/* tsParticles.load(@dom-id, @options); */

tsParticles.load("tsparticles", {
  /* options here */
});

//or

/* tsParticles.loadFromArray(@dom-id, @options, @index (optional)); */

tsParticles.loadFromArray("tsparticles", [
  {
    /* options here */
  },
  {
    /* other options here */
  },
]);
//random object

tsParticles.loadFromArray(
  "tsparticles",
  [
    {
      /* options here */
    },
    {
      /* other options here */
    },
  ],
  1
); //the second one
// Important! If the index is not in range 0...<array.length, the index will be ignored.

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */

tsParticles.setOnClickHandler((event, particles) => {
  /* custom on click handler */
});

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();

// pause will stop the animations
particles.pause();

/* ---- tsParticles config ---- */

tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-46156385-1", "cssscript.com");
ga("send", "pageview");

jQuery(document).ready(function ($) {
  var timelines = $(".cd-horizontal-timeline"),
    eventsMinDistance = 60;

  timelines.length > 0 && initTimeline(timelines);

  function initTimeline(timelines) {
    timelines.each(function () {
      var timeline = $(this),
        timelineComponents = {};
      //cache timeline components
      timelineComponents["timelineWrapper"] = timeline.find(".events-wrapper");
      timelineComponents["eventsWrapper"] = timelineComponents[
        "timelineWrapper"
      ].children(".events");
      timelineComponents["fillingLine"] = timelineComponents[
        "eventsWrapper"
      ].children(".filling-line");
      timelineComponents["timelineEvents"] = timelineComponents[
        "eventsWrapper"
      ].find("a");
      timelineComponents["timelineDates"] = parseDate(
        timelineComponents["timelineEvents"]
      );
      timelineComponents["eventsMinLapse"] = minLapse(
        timelineComponents["timelineDates"]
      );
      timelineComponents["timelineNavigation"] = timeline.find(
        ".cd-timeline-navigation"
      );
      timelineComponents["eventsContent"] = timeline.children(
        ".events-content"
      );

      //assign a left postion to the single events along the timeline
      setDatePosition(timelineComponents, eventsMinDistance);
      //assign a width to the timeline
      var timelineTotWidth = setTimelineWidth(
        timelineComponents,
        eventsMinDistance
      );
      //the timeline has been initialize - show it
      timeline.addClass("loaded");

      //detect click on the next arrow
      timelineComponents["timelineNavigation"].on("click", ".next", function (
        event
      ) {
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, "next");
      });
      //detect click on the prev arrow
      timelineComponents["timelineNavigation"].on("click", ".prev", function (
        event
      ) {
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, "prev");
      });
      //detect click on the a single event - show new event content
      timelineComponents["eventsWrapper"].on("click", "a", function (event) {
        event.preventDefault();
        timelineComponents["timelineEvents"].removeClass("selected");
        $(this).addClass("selected");
        updateOlderEvents($(this));
        updateFilling(
          $(this),
          timelineComponents["fillingLine"],
          timelineTotWidth
        );
        updateVisibleContent($(this), timelineComponents["eventsContent"]);
      });

      //on swipe, show next/prev event content
      timelineComponents["eventsContent"].on("swipeleft", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "next");
      });
      timelineComponents["eventsContent"].on("swiperight", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "prev");
      });

      //keyboard navigation
      $(document).keyup(function (event) {
        if (event.which == "37" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "prev");
        } else if (event.which == "39" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "next");
        }
      });
    });
  }

  function updateSlide(timelineComponents, timelineTotWidth, string) {
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(timelineComponents["eventsWrapper"]),
      wrapperWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      );
    //translate the timeline to the left('next')/right('prev')
    string == "next"
      ? translateTimeline(
          timelineComponents,
          translateValue - wrapperWidth + eventsMinDistance,
          wrapperWidth - timelineTotWidth
        )
      : translateTimeline(
          timelineComponents,
          translateValue + wrapperWidth - eventsMinDistance
        );
  }

  function showNewContent(timelineComponents, timelineTotWidth, string) {
    //go from one event to the next/previous one
    var visibleContent = timelineComponents["eventsContent"].find(".selected"),
      newContent =
        string == "next" ? visibleContent.next() : visibleContent.prev();

    if (newContent.length > 0) {
      //if there's a next/prev event - show it
      var selectedDate = timelineComponents["eventsWrapper"].find(".selected"),
        newEvent =
          string == "next"
            ? selectedDate.parent("li").next("li").children("a")
            : selectedDate.parent("li").prev("li").children("a");

      updateFilling(
        newEvent,
        timelineComponents["fillingLine"],
        timelineTotWidth
      );
      updateVisibleContent(newEvent, timelineComponents["eventsContent"]);
      newEvent.addClass("selected");
      selectedDate.removeClass("selected");
      updateOlderEvents(newEvent);
      updateTimelinePosition(
        string,
        newEvent,
        timelineComponents,
        timelineTotWidth
      );
    }
  }

  function updateTimelinePosition(
    string,
    event,
    timelineComponents,
    timelineTotWidth
  ) {
    //translate timeline to the left/right according to the position of the selected event
    var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", "")),
      timelineWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      ),
      timelineTotWidth = Number(
        timelineComponents["eventsWrapper"].css("width").replace("px", "")
      );
    var timelineTranslate = getTranslateValue(
      timelineComponents["eventsWrapper"]
    );

    if (
      (string == "next" && eventLeft > timelineWidth - timelineTranslate) ||
      (string == "prev" && eventLeft < -timelineTranslate)
    ) {
      translateTimeline(
        timelineComponents,
        -eventLeft + timelineWidth / 2,
        timelineWidth - timelineTotWidth
      );
    }
  }

  function translateTimeline(timelineComponents, value, totWidth) {
    var eventsWrapper = timelineComponents["eventsWrapper"].get(0);
    value = value > 0 ? 0 : value; //only negative translate value
    value =
      !(typeof totWidth === "undefined") && value < totWidth ? totWidth : value; //do not translate more than timeline width
    setTransformValue(eventsWrapper, "translateX", value + "px");
    //update navigation arrows visibility
    value == 0
      ? timelineComponents["timelineNavigation"]
          .find(".prev")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".prev")
          .removeClass("inactive");
    value == totWidth
      ? timelineComponents["timelineNavigation"]
          .find(".next")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".next")
          .removeClass("inactive");
  }

  function updateFilling(selectedEvent, filling, totWidth) {
    //change .filling-line length according to the selected event
    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
    eventLeft =
      Number(eventLeft.replace("px", "")) +
      Number(eventWidth.replace("px", "")) / 2;
    var scaleValue = eventLeft / totWidth;
    setTransformValue(filling.get(0), "scaleX", scaleValue);
  }

  function setDatePosition(timelineComponents, min) {
    for (i = 0; i < timelineComponents["timelineDates"].length; i++) {
      var distance = daydiff(
          timelineComponents["timelineDates"][0],
          timelineComponents["timelineDates"][i]
        ),
        distanceNorm =
          Math.round(distance / timelineComponents["eventsMinLapse"]) + 2;
      timelineComponents["timelineEvents"]
        .eq(i)
        .css("left", distanceNorm * min + "px");
    }
  }

  function setTimelineWidth(timelineComponents, width) {
    var timeSpan = daydiff(
        timelineComponents["timelineDates"][0],
        timelineComponents["timelineDates"][
          timelineComponents["timelineDates"].length - 1
        ]
      ),
      timeSpanNorm = timeSpan / timelineComponents["eventsMinLapse"],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm * width;
    timelineComponents["eventsWrapper"].css("width", totalWidth + "px");
    updateFilling(
      timelineComponents["timelineEvents"].eq(0),
      timelineComponents["fillingLine"],
      totalWidth
    );

    return totalWidth;
  }

  function updateVisibleContent(event, eventsContent) {
    var eventDate = event.data("date"),
      visibleContent = eventsContent.find(".selected"),
      selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
      selectedContentHeight = selectedContent.height();

    if (selectedContent.index() > visibleContent.index()) {
      var classEnetering = "selected enter-right",
        classLeaving = "leave-left";
    } else {
      var classEnetering = "selected enter-left",
        classLeaving = "leave-right";
    }

    selectedContent.attr("class", classEnetering);
    visibleContent
      .attr("class", classLeaving)
      .one(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function () {
          visibleContent.removeClass("leave-right leave-left");
          selectedContent.removeClass("enter-left enter-right");
        }
      );
    eventsContent.css("height", selectedContentHeight + "px");
  }

  function updateOlderEvents(event) {
    event
      .parent("li")
      .prevAll("li")
      .children("a")
      .addClass("older-event")
      .end()
      .end()
      .nextAll("li")
      .children("a")
      .removeClass("older-event");
  }

  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate =
        timelineStyle.getPropertyValue("-webkit-transform") ||
        timelineStyle.getPropertyValue("-moz-transform") ||
        timelineStyle.getPropertyValue("-ms-transform") ||
        timelineStyle.getPropertyValue("-o-transform") ||
        timelineStyle.getPropertyValue("transform");

    if (timelineTranslate.indexOf("(") >= 0) {
      var timelineTranslate = timelineTranslate.split("(")[1];
      timelineTranslate = timelineTranslate.split(")")[0];
      timelineTranslate = timelineTranslate.split(",");
      var translateValue = timelineTranslate[4];
    } else {
      var translateValue = 0;
    }

    return Number(translateValue);
  }

  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property + "(" + value + ")";
    element.style["-moz-transform"] = property + "(" + value + ")";
    element.style["-ms-transform"] = property + "(" + value + ")";
    element.style["-o-transform"] = property + "(" + value + ")";
    element.style["transform"] = property + "(" + value + ")";
  }

  //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
  function parseDate(events) {
    var dateArrays = [];
    events.each(function () {
      var dateComp = $(this).data("date").split("/"),
        newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function parseDate2(events) {
    var dateArrays = [];
    events.each(function () {
      var singleDate = $(this),
        dateComp = singleDate.data("date").split("T");
      if (dateComp.length > 1) {
        //both DD/MM/YEAR and time are provided
        var dayComp = dateComp[0].split("/"),
          timeComp = dateComp[1].split(":");
      } else if (dateComp[0].indexOf(":") >= 0) {
        //only time is provide
        var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(":");
      } else {
        //only DD/MM/YEAR
        var dayComp = dateComp[0].split("/"),
          timeComp = ["0", "0"];
      }
      var newDate = new Date(
        dayComp[2],
        dayComp[1] - 1,
        dayComp[0],
        timeComp[0],
        timeComp[1]
      );
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function daydiff(first, second) {
    return Math.round(second - first);
  }

  function minLapse(dates) {
    //determine the minimum distance among events
    var dateDistances = [];
    for (i = 1; i < dates.length; i++) {
      var distance = daydiff(dates[i - 1], dates[i]);
      dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }

  /*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }

  function checkMQ() {
    //check if mobile or desktop device
    return window
      .getComputedStyle(
        document.querySelector(".cd-horizontal-timeline"),
        "::before"
      )
      .getPropertyValue("content")
      .replace(/'/g, "")
      .replace(/"/g, "");
  }
});

jQuery(document).ready(function ($) {
  var timelines = $(".cd-horizontal-timeline"),
    eventsMinDistance = 60;

  timelines.length > 0 && initTimeline(timelines);

  function initTimeline(timelines) {
    timelines.each(function () {
      var timeline = $(this),
        timelineComponents = {};
      //cache timeline components
      timelineComponents["timelineWrapper"] = timeline.find(".events-wrapper");
      timelineComponents["eventsWrapper"] = timelineComponents[
        "timelineWrapper"
      ].children(".events");
      timelineComponents["fillingLine"] = timelineComponents[
        "eventsWrapper"
      ].children(".filling-line");
      timelineComponents["timelineEvents"] = timelineComponents[
        "eventsWrapper"
      ].find("a");
      timelineComponents["timelineDates"] = parseDate(
        timelineComponents["timelineEvents"]
      );
      timelineComponents["eventsMinLapse"] = minLapse(
        timelineComponents["timelineDates"]
      );
      timelineComponents["timelineNavigation"] = timeline.find(
        ".cd-timeline-navigation"
      );
      timelineComponents["eventsContent"] = timeline.children(
        ".events-content"
      );

      //assign a left postion to the single events along the timeline
      setDatePosition(timelineComponents, eventsMinDistance);
      //assign a width to the timeline
      var timelineTotWidth = setTimelineWidth(
        timelineComponents,
        eventsMinDistance
      );
      //the timeline has been initialize - show it
      timeline.addClass("loaded");

      //detect click on the next arrow
      timelineComponents["timelineNavigation"].on("click", ".next", function (
        event
      ) {
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, "next");
      });
      //detect click on the prev arrow
      timelineComponents["timelineNavigation"].on("click", ".prev", function (
        event
      ) {
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, "prev");
      });
      //detect click on the a single event - show new event content
      timelineComponents["eventsWrapper"].on("click", "a", function (event) {
        event.preventDefault();
        timelineComponents["timelineEvents"].removeClass("selected");
        $(this).addClass("selected");
        updateOlderEvents($(this));
        updateFilling(
          $(this),
          timelineComponents["fillingLine"],
          timelineTotWidth
        );
        updateVisibleContent($(this), timelineComponents["eventsContent"]);
      });

      //on swipe, show next/prev event content
      timelineComponents["eventsContent"].on("swipeleft", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "next");
      });
      timelineComponents["eventsContent"].on("swiperight", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "prev");
      });

      //keyboard navigation
      $(document).keyup(function (event) {
        if (event.which == "37" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "prev");
        } else if (event.which == "39" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "next");
        }
      });
    });
  }

  function updateSlide(timelineComponents, timelineTotWidth, string) {
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(timelineComponents["eventsWrapper"]),
      wrapperWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      );
    //translate the timeline to the left('next')/right('prev')
    string == "next"
      ? translateTimeline(
          timelineComponents,
          translateValue - wrapperWidth + eventsMinDistance,
          wrapperWidth - timelineTotWidth
        )
      : translateTimeline(
          timelineComponents,
          translateValue + wrapperWidth - eventsMinDistance
        );
  }

  function showNewContent(timelineComponents, timelineTotWidth, string) {
    //go from one event to the next/previous one
    var visibleContent = timelineComponents["eventsContent"].find(".selected"),
      newContent =
        string == "next" ? visibleContent.next() : visibleContent.prev();

    if (newContent.length > 0) {
      //if there's a next/prev event - show it
      var selectedDate = timelineComponents["eventsWrapper"].find(".selected"),
        newEvent =
          string == "next"
            ? selectedDate.parent("li").next("li").children("a")
            : selectedDate.parent("li").prev("li").children("a");

      updateFilling(
        newEvent,
        timelineComponents["fillingLine"],
        timelineTotWidth
      );
      updateVisibleContent(newEvent, timelineComponents["eventsContent"]);
      newEvent.addClass("selected");
      selectedDate.removeClass("selected");
      updateOlderEvents(newEvent);
      updateTimelinePosition(
        string,
        newEvent,
        timelineComponents,
        timelineTotWidth
      );
    }
  }

  function updateTimelinePosition(
    string,
    event,
    timelineComponents,
    timelineTotWidth
  ) {
    //translate timeline to the left/right according to the position of the selected event
    var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", "")),
      timelineWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      ),
      timelineTotWidth = Number(
        timelineComponents["eventsWrapper"].css("width").replace("px", "")
      );
    var timelineTranslate = getTranslateValue(
      timelineComponents["eventsWrapper"]
    );

    if (
      (string == "next" && eventLeft > timelineWidth - timelineTranslate) ||
      (string == "prev" && eventLeft < -timelineTranslate)
    ) {
      translateTimeline(
        timelineComponents,
        -eventLeft + timelineWidth / 2,
        timelineWidth - timelineTotWidth
      );
    }
  }

  function translateTimeline(timelineComponents, value, totWidth) {
    var eventsWrapper = timelineComponents["eventsWrapper"].get(0);
    value = value > 0 ? 0 : value; //only negative translate value
    value =
      !(typeof totWidth === "undefined") && value < totWidth ? totWidth : value; //do not translate more than timeline width
    setTransformValue(eventsWrapper, "translateX", value + "px");
    //update navigation arrows visibility
    value == 0
      ? timelineComponents["timelineNavigation"]
          .find(".prev")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".prev")
          .removeClass("inactive");
    value == totWidth
      ? timelineComponents["timelineNavigation"]
          .find(".next")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".next")
          .removeClass("inactive");
  }

  function updateFilling(selectedEvent, filling, totWidth) {
    //change .filling-line length according to the selected event
    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
    eventLeft =
      Number(eventLeft.replace("px", "")) +
      Number(eventWidth.replace("px", "")) / 2;
    var scaleValue = eventLeft / totWidth;
    setTransformValue(filling.get(0), "scaleX", scaleValue);
  }

  function setDatePosition(timelineComponents, min) {
    for (i = 0; i < timelineComponents["timelineDates"].length; i++) {
      var distance = daydiff(
          timelineComponents["timelineDates"][0],
          timelineComponents["timelineDates"][i]
        ),
        distanceNorm =
          Math.round(distance / timelineComponents["eventsMinLapse"]) + 2;
      timelineComponents["timelineEvents"]
        .eq(i)
        .css("left", distanceNorm * min + "px");
    }
  }

  function setTimelineWidth(timelineComponents, width) {
    var timeSpan = daydiff(
        timelineComponents["timelineDates"][0],
        timelineComponents["timelineDates"][
          timelineComponents["timelineDates"].length - 1
        ]
      ),
      timeSpanNorm = timeSpan / timelineComponents["eventsMinLapse"],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm * width;
    timelineComponents["eventsWrapper"].css("width", totalWidth + "px");
    updateFilling(
      timelineComponents["timelineEvents"].eq(0),
      timelineComponents["fillingLine"],
      totalWidth
    );

    return totalWidth;
  }

  function updateVisibleContent(event, eventsContent) {
    var eventDate = event.data("date"),
      visibleContent = eventsContent.find(".selected"),
      selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
      selectedContentHeight = selectedContent.height();

    if (selectedContent.index() > visibleContent.index()) {
      var classEnetering = "selected enter-right",
        classLeaving = "leave-left";
    } else {
      var classEnetering = "selected enter-left",
        classLeaving = "leave-right";
    }

    selectedContent.attr("class", classEnetering);
    visibleContent
      .attr("class", classLeaving)
      .one(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function () {
          visibleContent.removeClass("leave-right leave-left");
          selectedContent.removeClass("enter-left enter-right");
        }
      );
    eventsContent.css("height", selectedContentHeight + "px");
  }

  function updateOlderEvents(event) {
    event
      .parent("li")
      .prevAll("li")
      .children("a")
      .addClass("older-event")
      .end()
      .end()
      .nextAll("li")
      .children("a")
      .removeClass("older-event");
  }

  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate =
        timelineStyle.getPropertyValue("-webkit-transform") ||
        timelineStyle.getPropertyValue("-moz-transform") ||
        timelineStyle.getPropertyValue("-ms-transform") ||
        timelineStyle.getPropertyValue("-o-transform") ||
        timelineStyle.getPropertyValue("transform");

    if (timelineTranslate.indexOf("(") >= 0) {
      var timelineTranslate = timelineTranslate.split("(")[1];
      timelineTranslate = timelineTranslate.split(")")[0];
      timelineTranslate = timelineTranslate.split(",");
      var translateValue = timelineTranslate[4];
    } else {
      var translateValue = 0;
    }

    return Number(translateValue);
  }

  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property + "(" + value + ")";
    element.style["-moz-transform"] = property + "(" + value + ")";
    element.style["-ms-transform"] = property + "(" + value + ")";
    element.style["-o-transform"] = property + "(" + value + ")";
    element.style["transform"] = property + "(" + value + ")";
  }

  //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
  function parseDate(events) {
    var dateArrays = [];
    events.each(function () {
      var dateComp = $(this).data("date").split("/"),
        newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function parseDate2(events) {
    var dateArrays = [];
    events.each(function () {
      var singleDate = $(this),
        dateComp = singleDate.data("date").split("T");
      if (dateComp.length > 1) {
        //both DD/MM/YEAR and time are provided
        var dayComp = dateComp[0].split("/"),
          timeComp = dateComp[1].split(":");
      } else if (dateComp[0].indexOf(":") >= 0) {
        //only time is provide
        var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(":");
      } else {
        //only DD/MM/YEAR
        var dayComp = dateComp[0].split("/"),
          timeComp = ["0", "0"];
      }
      var newDate = new Date(
        dayComp[2],
        dayComp[1] - 1,
        dayComp[0],
        timeComp[0],
        timeComp[1]
      );
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function daydiff(first, second) {
    return Math.round(second - first);
  }

  function minLapse(dates) {
    //determine the minimum distance among events
    var dateDistances = [];
    for (i = 1; i < dates.length; i++) {
      var distance = daydiff(dates[i - 1], dates[i]);
      dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }

  /*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }

  function checkMQ() {
    //check if mobile or desktop device
    return window
      .getComputedStyle(
        document.querySelector(".cd-horizontal-timeline"),
        "::before"
      )
      .getPropertyValue("content")
      .replace(/'/g, "")
      .replace(/"/g, "");
  }
});

// Globals
var prefixes =
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var $container = $(".container");
var $timeline = $(".timeline");
var $timelineItem = $(".timeline-item");
var $timelineContent = $(".timeline-content");
var $dropDown = $(".dropdown");
var $hasHovered = true;
var hideOnExit = false;

// mouseenter event handler
$timelineItem.on("mouseenter", function (e) {
  var isSelected = $(this).hasClass("selected");

  if (isSelected === false) {
    var leftPos = $(this).position().left,
      left = leftPos - 88,
      $that = $(this);

    $timelineItem.removeClass("selected");
    $(this).addClass("selected");

    if ($hasHovered === false) {
      // Show Bounce

      // Set Flag
      $hasHovered = true;

      // Show DD Bounce
      showBounce(left);

      // Show DD content Bounce
      showContentBounce($that);
    } else {
      // Follow

      // Change pos of DD to follow
      dropDownFollow(left);

      // Hide previous dd content
      $timelineContent.removeClass("animated fadeIn bounceIn");

      // Show hovered dd content
      $that.find($timelineContent).addClass("animated fadeIn");
    }
  }
});

// mouseleave event handler
$timeline.on("mouseleave", function (e) {
  if (hideOnExit) {
    //   Set Flag
    $hasHovered = false;

    // Hide DD
    hideDropDown();

    // Hide DD content
    $timelineContent.removeClass("animated fadeIn");
  }
});

// Animation end event listener
$dropDown.on(prefixes, function (e) {
  if (e.originalEvent.animationName === "fadeOut") {
    $dropDown.removeAttr("style");
  }
});

/**
 * Private functions that do showing/hiding/animating
 */
function showContentBounce(that) {
  $hasBounced = true;
  that.find(".timeline-content").addClass("animated bounceIn");
}

function showBounce(pos) {
  $dropDown
    .css("left", pos + "px")
    .removeClass("fadeOut")
    .addClass("animated bounceIn");
}

function dropDownFollow(pos) {
  $dropDown.css("left", pos + "px");
}

function hideDropDown() {
  $timelineItem.removeClass("selected");
  $dropDown.removeClass("bounceIn").addClass("fadeOut");
}

/**
 * @description Change Home page slider's arrows active status
 */
function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function () {
  // Scroll products' slider left/right
  let div = $("#cards-container");
  let cardCount = $(div).find(".cards").children(".card").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remove scrollbars
  $("#slide-right-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // If resize action ocurred then update the container width value
  $(window).resize(function () {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {
      console.log(
        `Error occured while trying to get updated slider container width: 
            ${error}`
      );
    }
  });
});

/**
 * @description Change Home page slider's arrows active status
 */
function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function () {
  // Scroll products' slider left/right
  let div = $("#cards-container");
  let cardCount = $(div).find(".cards").children(".card").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remove scrollbars
  $("#slide-right-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // If resize action ocurred then update the container width value
  $(window).resize(function () {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {
      console.log(
        `Error occured while trying to get updated slider container width: 
            ${error}`
      );
    }
  });
});
