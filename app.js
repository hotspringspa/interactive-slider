jQuery(document).ready(function ($) {
    //check if the .image-container is in the viewport
    //if yes, animate it
    checkPosition($(".image-container"));
    $(window).on("scroll", function () {
      checkPosition($(".image-container"));
    });
  
    //make the .handle element draggable and modify .resize-image width according to its position
    drags(
      $(".handle"),
      $(".resize-image"),
      $(".image-container"),
      $('.image-label[data-type="original"]'),
      $('.image-label[data-type="modified"]')
    );
  
    //upadate images label visibility
    $(window).on("resize", function () {
      updateLabel(
        $('.image-label[data-type="modified"]'),
        $(".resize-image"),
        "left"
      );
      updateLabel(
        $('.image-label[data-type="original"]'),
        $(".resize-image"),
        "right"
      );
    });
  });
  
  function checkPosition(container) {
    if (
      $(window).scrollTop() + $(window).height() * 0.5 >
      container.offset().top
    ) {
      container.addClass("is-visible");
      //you can uncomment the following line if you don't have other events to bind to the window scroll
      // $(window).off('scroll');
    }
  }
  
  //draggable funtionality
  function drags(
    dragElement,
    resizeElement,
    container,
    labelContainer,
    labelResizeElement
  ) {
    dragElement
      .on("mousedown vmousedown", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");
  
        var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
        dragElement
          .parents()
          .on("mousemove vmousemove", function (e) {
            leftValue = e.pageX + xPosition - dragWidth;
  
            //constrain the draggable element to move inside his container
            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
  
            widthValue =
              ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                containerWidth +
              "%";
  
            $(".draggable")
              .css("left", widthValue)
              .on("mouseup vmouseup", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
              });
  
            $(".resizable").css("width", widthValue);
  
            updateLabel(labelResizeElement, resizeElement, "left");
            updateLabel(labelContainer, resizeElement, "right");
          })
          .on("mouseup vmouseup", function (e) {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
          });
        e.preventDefault();
      })
      .on("mouseup vmouseup", function (e) {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
      });
  }
  
  function updateLabel(label, resizeElement, position) {
    if (position == "left") {
      label.offset().left + label.outerWidth() <
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    } else {
      label.offset().left >
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    }
  }
  // 1;
  // 2;
  // 3;
  // 4;
  // 5;
  // 6;
  // 7;
  // 8;
  // 9;
  // 10;
  // 11;
  // 12;
  // 13;
  // 14;
  // 15;
  // 16;
  // 17;
  // 18;
  // 19;
  // 20;
  // 21;
  // 22;
  // 23;
  // 24;
  // 25;
  // 26;
  // 27;
  // 28;
  // 29;
  // 30;
  // 31;
  // 32;
  // 33;
  // 34;
  // 35;
  // 36;
  // 37;
  // 38;
  // 39;
  // 40;
  // 41;
  // 42;
  // 43;
  // 44;
  // 45;
  // 46;
  // 47;
  // 48;
  // 49;
  // 50;
  // 51;
  // 52;
  // 53;
  // 54;
  // 55;
  // 56;
  // 57;
  // 58;
  // 59;
  // 60;
  // 61;
  // 62;
  // 63;
  // 64;
  // 65;
  // 66;
  // 67;
  // 68;
  // 69;
  // 70;
  // 71;
  // 72;
  // 73;
  // 74;
  // 75;
  // 76;
  // 77;
  // 78;
  // 79;
  // 80;
  
  jQuery(document).ready(function ($) {
    //check if the .image-container is in the viewport
    //if yes, animate it
    checkPosition($(".image-container"));
    $(window).on("scroll", function () {
      checkPosition($(".image-container"));
    });
  
    //make the .handle element draggable and modify .resize-image width according to its position
    drags(
      $(".handle"),
      $(".resize-image"),
      $(".image-container"),
      $('.image-label[data-type="original"]'),
      $('.image-label[data-type="modified"]')
    );
  
    //upadate images label visibility
    $(window).on("resize", function () {
      updateLabel(
        $('.image-label[data-type="modified"]'),
        $(".resize-image"),
        "left"
      );
      updateLabel(
        $('.image-label[data-type="original"]'),
        $(".resize-image"),
        "right"
      );
    });
  });
  
  function checkPosition(container) {
    if (
      $(window).scrollTop() + $(window).height() * 0.5 >
      container.offset().top
    ) {
      container.addClass("is-visible");
      //you can uncomment the following line if you don't have other events to bind to the window scroll
      // $(window).off('scroll');
    }
  }
  
  //draggable funtionality
  function drags(
    dragElement,
    resizeElement,
    container,
    labelContainer,
    labelResizeElement
  ) {
    dragElement
      .on("mousedown vmousedown", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");
  
        var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
        dragElement
          .parents()
          .on("mousemove vmousemove", function (e) {
            leftValue = e.pageX + xPosition - dragWidth;
  
            //constrain the draggable element to move inside his container
            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
  
            widthValue =
              ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                containerWidth +
              "%";
  
            $(".draggable")
              .css("left", widthValue)
              .on("mouseup vmouseup", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
              });
  
            $(".resizable").css("width", widthValue);
  
            updateLabel(labelResizeElement, resizeElement, "left");
            updateLabel(labelContainer, resizeElement, "right");
          })
          .on("mouseup vmouseup", function (e) {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
          });
        e.preventDefault();
      })
      .on("mouseup vmouseup", function (e) {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
      });
  }
  
  function updateLabel(label, resizeElement, position) {
    if (position == "left") {
      label.offset().left + label.outerWidth() <
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    } else {
      label.offset().left >
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    }
  }
  