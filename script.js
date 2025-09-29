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
  closeBtn?.addEventListener("click", toggleSidebar);

  overlay?.addEventListener("click", () => {
    toggleSidebar();
    closeMegaMenu(); // Ensure close button hides
  });

  // ✅ Function to fully close mega menu and hide close button
  function closeMegaMenu() {
    menuItems.forEach(i => i.classList.remove("active"));
    document.body.classList.remove("no-scroll");
    document.body.style.position = '';
    document.body.style.top = '';
    const y = document.body.getAttribute('data-scroll-y') || 0;
    window.scrollTo(0, parseInt(y));
    document.body.removeAttribute('data-scroll-y');
    megaMenuWrapper.classList.remove("show-close-btn"); // ✅ Hide close button
  }

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      if (!isMobileView()) return;

      e.preventDefault();

      // Always activate clicked item
      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Show close button
      megaMenuWrapper.classList.add("show-close-btn");

      // Lock scroll if not already
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

  // ✅ Close button logic
  megaMenuCloseBtn?.addEventListener("click", () => {
    closeMegaMenu();
  });

  // ✅ Detect clicks outside and close mega menu & button
  document.addEventListener("click", (event) => {
    const isClickInsideMegaMenu = megaMenuWrapper.contains(event.target);
    const isClickOnMenuItem = [...menuItems].some(item => item.contains(event.target));
    const isMobile = isMobileView();

    if (isMobile && !isClickInsideMegaMenu && !isClickOnMenuItem) {
      closeMegaMenu(); // ✅ Hide close button here too
    }
  });
});

