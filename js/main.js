document.addEventListener("DOMContentLoaded", function () {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinksA = document.querySelectorAll(".nav-links li a");

    burger.addEventListener("click", () => {
      // Toggle nav menu
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    navLinksA.forEach((navLinkA) =>
      navLinkA.addEventListener("click", () => {
        // Close nav menu on anchor click
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      })
    );
  };
  navSlide();

  const landingCarouselClick = () => {
    const landingItems = document.querySelectorAll(".landing-carousel-item");
    landingItems.forEach((landingItem) =>
      landingItem.addEventListener("click", (e) => {
        e.stopPropagation();
        if (landingItem.classList.contains("new-collection")) {
          alert("Spring 2020 collection page");
        } else if (landingItem.classList.contains("icarus")) {
          if (!e.target.classList.contains("add-to-cart-button")) {
            alert("Product page for Icarus");
          }
        } else if (landingItem.classList.contains("discounts")) {
          alert("Sale page");
        }
      })
    );
  };
  landingCarouselClick();

  // Add event listeners to clicks on product images
  const productClick = () => {
    const productImgs = document.querySelectorAll(".product-carousel-item img");
    productImgs.forEach((productImg) =>
      productImg.addEventListener("click", () => {
        alert("Product page for " + productImg.alt);
      })
    );
  };
  productClick();

  const footerAccordionClick = () => {
    const accordionHeaders = document.querySelectorAll(".accordion");
    accordionHeaders.forEach((accordionHeader) =>
      accordionHeader.addEventListener("click", () => {
        // Toggle accordion menu
        accordionHeader.nextElementSibling.classList.toggle("accordion-active");
      })
    );
  };
  footerAccordionClick();

  // Add event listeners to clicks on footer items
  const footerClick = () => {
    const footerItems = document.querySelectorAll(".footer-category-item");
    footerItems.forEach((footerItem) =>
      footerItem.addEventListener("click", () => {
        alert(footerItem.text + " page");
      })
    );
  };
  footerClick();

  $(".landing-carousel").slick({
    dots: true,
    infinite: true,
    speed: 750,
    fade: true,
    cssEase: "ease-in",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  $(".trending-carousel").slick({
    infinite: true,
    speed: 750,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".arrow-prev-trending"),
    nextArrow: $(".arrow-next-trending"),
  });

  $(".popular-carousel").slick({
    infinite: true,
    speed: 750,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".arrow-prev-popular"),
    nextArrow: $(".arrow-next-popular"),
  });

  const sr = ScrollReveal();

  sr.reveal(".di-img-1", {
    origin: "top",
    distance: "100px",
    duration: 750,
    easing: "ease-out",
    viewFactor: 0.5,
  });

  sr.reveal(".di-img-2", {
    origin: "bottom",
    distance: "100px",
    duration: 750,
    easing: "ease-out",
    viewFactor: 0.5,
  });

  sr.reveal(".di-text", {
    duration: 750,
    easing: "ease-out",
    viewFactor: 0.5,
  });
});
