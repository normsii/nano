const swiper1 = new Swiper(".swiper1", {
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  spaceBetween: 10,
  slidesPerView: 1.25,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Pagination
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const swiperPhysician = new Swiper(".swiper-physician", {
  slidesPerView: 1.25,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-physician",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.25,
      spaceBetween: 60,
    },
  },
  // simulateTouch: false,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// modal covered section

// best offer slider

const swiperBestOffer = new Swiper(".swiper-best-offer", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination-bestoffer",
    clickable: true,
  },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// best offer slider

$(document).ready(function () {
  var swiper = new Swiper(".swiper-covered-section", {
    slidesPerView: 1.25,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  $(".swiper-slide").click(function () {
    var target = $(this).data("target");
    $(target).modal("show");
  });
});

// end modal covered section

// marquee effect slides

const marqueeSwiper = new Swiper(".marquee-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

//marquee effect slides

$(document).ready(function () {
  $(".nav-link-tabs").on("click", function () {
    $(".nav-link-tabs").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".nav-link-tabs-slide").on("click", function () {
    $(".nav-link-tabs-slide").removeClass("active");
    $(this).addClass("active");
  });
});

const tabLinks = document.querySelectorAll(".tablink");
const tabHeadings = document.querySelectorAll(".tab-heading");
const contentMapping = {
  "tab-erecto":
    "Nano ErectoMass is a premium male enhancement supplement that is research-backed to give you MASSIVE size, increases stamina, amplifies endurance, and helps you enjoy longer-lasting, more satisfying sex.",
  "tab-ignite":
    "Yes this is Ignite. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "tab-enhancer":
    "This is tab energy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "tab-increaser":
    " Nano Volume Increaser is a 100% drug-free, physician-formulated sperm count increaser supplement that helps you achieve and maintain a shigh amount of sperm.",
  "tab-volume":
    "This is tab volume. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
};

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", function () {
    this.classList.toggle("active");

    const tabId = this.getAttribute("data-tab");
    const tabContent = document.getElementById(tabId);

    updateDisplay();
  });
});

tabHeadings.forEach((heading) => {
  heading.addEventListener("click", function () {
    const contentKey = this.getAttribute("data-content");
    document.getElementById("display").innerText = contentMapping[contentKey];
  });
});

function updateDisplay() {
  let selectedContents = [];
  tabLinks.forEach((tabLink) => {
    if (tabLink.classList.contains("active")) {
      selectedContents.push(contentMapping[tabLink.getAttribute("data-tab")]);
    }
  });
  document.getElementById("display").innerText =
    "" + "\n" + selectedContents.join("\n\n");
}
