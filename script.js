const texts = [
    "Use FIANFIRST for a 10% discount",
    "Shop Exclusive Jewellery Now",
    "Free Shipping on All Orders",
    "New Arrivals Just Landed"
];

let index = 0;
const bannerText = document.getElementById("bannerText");

setInterval(() => {
    index = (index + 1) % texts.length;
    bannerText.classList.remove("banner-text");
    void bannerText.offsetWidth;
    bannerText.classList.add("banner-text");
    bannerText.textContent = texts[index];
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeSidebar");

    const toggleSidebar = () => {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);
    closeBtn.addEventListener("click", toggleSidebar);
});





const swiper = new Swiper(".swiper-slider", {
    centeredSlides: true,
    slidesPerView: 1,
    // grabCursor: true,
    // freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },
    speed: 800,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false
            }
        },
        // Desktop: width > 575px
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    },
    // Coverflow effect to enlarge active slide
    //   effect: 'coverflow',
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: false,
    //   },
});

  document.addEventListener('DOMContentLoaded', function () {
    const allJewelleryItem = document.getElementById('allJewelleryItem');

    // Toggle for mobile only
    allJewelleryItem.addEventListener('click', function (e) {
      if (window.innerWidth <= 575) {
        e.preventDefault();
        allJewelleryItem.classList.toggle('active');
      }
    });
  });


  //  / Mega Menu Click for Mobile
// function isTablet() {
//   return window.innerWidth <= 991;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const menuItems = document.querySelectorAll(".mega-menu > ul > li");

//   menuItems.forEach(item => {
//     item.addEventListener("click", (e) => {
//       if (!isTablet()) return;

//       e.preventDefault();

//       // Close other items
//       menuItems.forEach(i => {
//         if (i !== item) i.classList.remove("active");
//       });

//       item.classList.toggle("active");

//       const isActive = item.classList.contains("active");
//       if (isActive) {
//         document.body.classList.add("no-scroll");
//       } else {
//         document.body.classList.remove("no-scroll");
//       }
//     });
//   });

//   // Click outside to close mega menu
//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".mega-menu")) {
//       menuItems.forEach(i => i.classList.remove("active"));
//       document.body.classList.remove("no-scroll");
//     }
//   });
// });


function isMobileView() {
  return window.innerWidth <= 991;
}

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".mega-menu > ul > li");
  let scrollY = 0;

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      if (!isMobileView()) return;

      e.preventDefault();

      const isActive = item.classList.contains("active");

      // Close all other items
      menuItems.forEach(i => i.classList.remove("active"));

      if (!isActive) {
        // Activate current
        item.classList.add("active");

        // Lock scroll
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = '0px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.classList.add("no-scroll");

        // Shift content wrapper to mimic scroll position (optional)
        document.body.setAttribute('data-scroll-y', scrollY);
        document.documentElement.scrollTop = 0;
      } else {
        // Unlock scroll
        item.classList.remove("active");
        document.body.classList.remove("no-scroll");

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';

        // Restore scroll
        const y = document.body.getAttribute('data-scroll-y') || 0;
        window.scrollTo(0, parseInt(y));
        document.body.removeAttribute('data-scroll-y');
      }
    });
  });

  // Optional: close if user taps outside
  document.addEventListener("click", (e) => {
    if (
      isMobileView() &&
      !e.target.closest(".mega-menu > ul > li") &&
      !e.target.closest(".mega-menu > ul > li > ul")
    ) {
      menuItems.forEach(i => i.classList.remove("active"));
      document.body.classList.remove("no-scroll");
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';

      const y = document.body.getAttribute('data-scroll-y') || 0;
      window.scrollTo(0, parseInt(y));
      document.body.removeAttribute('data-scroll-y');
    }
  });
});
