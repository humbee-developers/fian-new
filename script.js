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
});
function isMobileView() {
  return window.innerWidth <= 991;
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeSidebar");
  const megaMenuWrapper = document.querySelector(".mega-menu-wrapper");
  const megaMenuCloseBtn = document.getElementById("megaMenuCloseBtn");
  const menuItems = document.querySelectorAll(".mega-menu > ul > li");

  const toggleSidebar = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  hamburger?.addEventListener("click", toggleSidebar);
  overlay?.addEventListener("click", toggleSidebar);
  closeBtn?.addEventListener("click", toggleSidebar);

  // ✅ Shared function to fully close mega menu
  function closeMegaMenu() {
    menuItems.forEach(i => i.classList.remove("active"));
    document.body.classList.remove("no-scroll");
    document.body.style.position = '';
    document.body.style.top = '';
    const y = document.body.getAttribute('data-scroll-y') || 0;
    window.scrollTo(0, parseInt(y));
    document.body.removeAttribute('data-scroll-y');
    megaMenuWrapper.classList.remove("show-close-btn");
  }

//  // ✅ Mega Menu Toggle (li click)
// menuItems.forEach(item => {
//   item.addEventListener("click", (e) => {
//     if (!isMobileView()) return;

//     e.preventDefault();

//     const isActive = item.classList.contains("active");

//     // Check if any item is already active
//     const anyActive = [...menuItems].some(i => i.classList.contains("active"));

//     // Remove active from all
//     menuItems.forEach(i => i.classList.remove("active"));

//     if (!isActive) {
//       item.classList.add("active");

//       // Lock scroll
//       const scrollY = window.scrollY;
//       document.body.style.position = 'fixed';
//       document.body.style.top = '0px';
//       document.body.classList.add("no-scroll");
//       document.body.setAttribute('data-scroll-y', scrollY);
//       window.scrollTo(0, 0);

//       // ✅ Always show close button on open
//       megaMenuWrapper.classList.add("show-close-btn");
//     } else {
//       // ✅ If clicking the same item → fully close mega menu
//       closeMegaMenu();
//     }

//     // ✅ If switching between items (not closing all), keep close button visible
//     if (!isActive && anyActive) {
//       megaMenuWrapper.classList.add("show-close-btn");
//     }
//   });
// });
menuItems.forEach(item => {
  item.addEventListener("click", (e) => {
    if (!isMobileView()) return;

    e.preventDefault();

    const isAlreadyActive = item.classList.contains("active");

    // Remove all active classes
    menuItems.forEach(i => i.classList.remove("active"));

    // Always activate the clicked item
    item.classList.add("active");

    // Show close button
    megaMenuWrapper.classList.add("show-close-btn");

    // Lock scroll only if this is the first time opening
    if (!document.body.classList.contains("no-scroll")) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = '0px';
      document.body.classList.add("no-scroll");
      document.body.setAttribute('data-scroll-y', scrollY);
      window.scrollTo(0, 0);
    }
  });
});



 megaMenuCloseBtn?.addEventListener("click", () => {
  menuItems.forEach(i => i.classList.remove("active"));
  document.body.classList.remove("no-scroll");
  document.body.style.position = '';
  document.body.style.top = '';
  const y = document.body.getAttribute('data-scroll-y') || 0;
  window.scrollTo(0, parseInt(y));
  document.body.removeAttribute('data-scroll-y');
  megaMenuWrapper.classList.remove("show-close-btn");
});

});

// function isMobileView() {
//   return window.innerWidth <= 991;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const sidebar = document.getElementById("mobileSidebar");
//   const overlay = document.getElementById("overlay");
//   const closeBtn = document.getElementById("closeSidebar");
//   const megaMenuWrapper = document.querySelector(".mega-menu-wrapper");
//   const megaMenuCloseBtn = document.getElementById("megaMenuCloseBtn");
//   const menuItems = document.querySelectorAll(".mega-menu > ul > li");

//   const toggleSidebar = () => {
//     sidebar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   };

//   hamburger?.addEventListener("click", toggleSidebar);
//   overlay?.addEventListener("click", toggleSidebar);
//   closeBtn?.addEventListener("click", toggleSidebar);

// // Mega Menu Toggle (works for li, a, p, img)
// menuItems.forEach(item => {
//   item.addEventListener("click", (e) => {
//     if (!isMobileView()) return;

//     e.preventDefault();

//     const isActive = item.classList.contains("active");

//     // Remove active from all
//     menuItems.forEach(i => i.classList.remove("active"));

//     if (!isActive) {
//       item.classList.add("active");

//       // Lock scroll
//       const scrollY = window.scrollY;
//       document.body.style.position = 'fixed';
//       document.body.style.top = '0px';
//       document.body.classList.add("no-scroll");
//       document.body.setAttribute('data-scroll-y', scrollY);
//       window.scrollTo(0, 0);

//       // Show close button
//       megaMenuWrapper.classList.add("show-close-btn");
//     } else {
//       // Already active → Close
//       document.body.classList.remove("no-scroll");
//       document.body.style.position = '';
//       document.body.style.top = '';
//       const y = document.body.getAttribute('data-scroll-y') || 0;
//       window.scrollTo(0, parseInt(y));
//       document.body.removeAttribute('data-scroll-y');

//       item.classList.remove("active");
//       megaMenuWrapper.classList.remove("show-close-btn");
//     }
//   });
// });



//   // Close btn inside mega menu
//   megaMenuCloseBtn?.addEventListener("click", () => {
//     menuItems.forEach(i => i.classList.remove("active"));
//     document.body.classList.remove("no-scroll");
//     document.body.style.position = '';
//     document.body.style.top = '';
//     const y = document.body.getAttribute('data-scroll-y') || 0;
//     window.scrollTo(0, parseInt(y));
//     document.body.removeAttribute('data-scroll-y');
//     megaMenuWrapper.classList.remove("show-close-btn");
//   });

//   // Click outside to close (optional)
//   document.addEventListener("click", (e) => {
//     if (
//       isMobileView() &&
//       !e.target.closest(".mega-menu > ul > li") &&
//       !e.target.closest(".mega-menu > ul > li > ul") &&
//       !e.target.closest("#megaMenuCloseBtn")
//     ) {
//       menuItems.forEach(i => i.classList.remove("active"));
//       document.body.classList.remove("no-scroll");
//       document.body.style.position = '';
//       document.body.style.top = '';
//       const y = document.body.getAttribute('data-scroll-y') || 0;
//       window.scrollTo(0, parseInt(y));
//       document.body.removeAttribute('data-scroll-y');
//       megaMenuWrapper.classList.remove("show-close-btn");
//     }
//   });
// });

