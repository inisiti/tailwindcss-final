document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const slides = carousel.querySelectorAll('div');
    let currentIndex = 0;
  
    function updateCarousel() {
      const transformValue = `translateX(-${currentIndex * 100}%)`;
      carousel.style.transform = transformValue;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
  
    // Tambahkan event listener untuk panah navigasi
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    });
  });
  