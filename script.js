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
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: false
  },
  speed: 800,

  autoplay: {
    delay: 3000,
    // disableOnInteraction: false
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
// ✅ Mobile Sidebar Only
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeSidebar");

  const setMenuIcon = (isOpen) => {
    try {
      const useEl = hamburger?.querySelector('svg use');
      if (useEl) {
        useEl.setAttribute('href', isOpen ? '#icon-close' : '#icon-menu');
      }
    } catch (e) {
      // ignore
    }
  };

  const toggleSidebar = () => {
    if (!sidebar || !overlay || !hamburger) return;
    const isActive = sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    sidebar.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    hamburger.setAttribute('aria-expanded', String(isActive));
    setMenuIcon(isActive);
    document.body.classList.toggle('no-scroll', isActive);
  };

  hamburger?.addEventListener("click", toggleSidebar);
  closeBtn?.addEventListener("click", toggleSidebar);
  overlay?.addEventListener("click", toggleSidebar);
});



