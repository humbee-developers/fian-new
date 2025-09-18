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





// function isMobileView() {
//   return window.innerWidth <= 991;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const menuItems = document.querySelectorAll(".mega-menu > ul > li");
//   const wrapper = document.getElementById("mainContentWrapper");
//   let scrollY = 0;

//   menuItems.forEach(item => {
//     item.addEventListener("click", (e) => {
//       if (!isMobileView()) return;

//       e.preventDefault();

//       const isActive = item.classList.contains("active");

//       // Close all others
//       menuItems.forEach(i => i.classList.remove("active"));

//       if (!isActive) {
//         item.classList.add("active");

//         // Save scroll position
//         scrollY = window.scrollY;
//         document.body.style.top = `-${scrollY}px`;
//         document.body.classList.add("no-scroll");

//       } else {
//         item.classList.remove("active");

//         // Restore scroll
//         document.body.classList.remove("no-scroll");
//         const y = parseInt(document.body.style.top || '0') * -1;
//         document.body.style.top = '';
//         window.scrollTo(0, y);
//       }
//     });
//   });

//   // Optional: close on outside tap
//   document.addEventListener("click", (e) => {
//     if (
//       isMobileView() &&
//       !e.target.closest(".mega-menu > ul > li") &&
//       !e.target.closest(".mega-menu > ul > li > ul")
//     ) {
//       menuItems.forEach(i => i.classList.remove("active"));
//       const y = parseInt(document.body.style.top || '0') * -1;
//       document.body.classList.remove("no-scroll");
//       document.body.style.top = '';
//       window.scrollTo(0, y);
//     }
//   });
// });

// const disableBodyScroll = () => {
//   const scrollY = window.scrollY || document.documentElement.scrollTop;
  
//   // Save scroll position
//   document.body.setAttribute('data-scroll-y', scrollY);

//   // Lock body
//   document.body.style.position = 'fixed';
//   document.body.style.top = `-${scrollY}px`;
//   document.body.style.left = '0';
//   document.body.style.right = '0';
//   document.body.style.width = '100%';
//   document.body.classList.add('no-scroll');

//   // Force scrollTop 0 for iOS
//   window.scrollTo(0, 0);
// };

// const enableBodyScroll = () => {
//   const scrollY = document.body.getAttribute('data-scroll-y') || '0';
//   document.body.style.position = '';
//   document.body.style.top = '';
//   document.body.style.left = '';
//   document.body.style.right = '';
//   document.body.style.width = '';
//   document.body.classList.remove('no-scroll');

//   // Restore scroll position
//   window.scrollTo(0, parseInt(scrollY));
//   document.body.removeAttribute('data-scroll-y');
// };


// document.addEventListener("DOMContentLoaded", () => {
//   const menuItems = document.querySelectorAll(".mega-menu > ul > li");

//   menuItems.forEach(item => {
//     item.addEventListener("click", (e) => {
//       if (!isMobileView()) return;
//       e.preventDefault();

//       const isActive = item.classList.contains("active");

//       // Close all other items first
//       menuItems.forEach(i => {
//         if (i !== item) i.classList.remove("active");
//       });

//       if (!isActive) {
//         // Open clicked item
//         item.classList.add("active");
//         disableBodyScroll(); // lock body scroll
//       } else {
//         // Close clicked item
//         item.classList.remove("active");
//         enableBodyScroll(); // unlock body scroll
//       }
//     });
//   });

//   // Click outside to close all
//   document.addEventListener("click", (e) => {
//     if (
//       isMobileView() &&
//       !e.target.closest(".mega-menu > ul > li") &&
//       !e.target.closest(".mega-menu-wrapper")
//     ) {
//       menuItems.forEach(i => i.classList.remove("active"));
//       enableBodyScroll();
//     }
//   });
// });
