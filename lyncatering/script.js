document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. LOGIKA MENU BURGER (NAVBAR MOBILE) ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links');

    // Buka/tutup menu saat icon burger diklik
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Tutup menu otomatis setelah link ditekan (hanya berlaku di HP)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });

    // --- 2. LOGIKA LIGHTBOX (FOTO PERBESAR UNTUK GALERI & TESTIMONI) ---
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close-btn");
    
    // Memilih semua gambar di dalam Galeri DAN Testimoni
    const popupImages = document.querySelectorAll(".gallery-item img, .testimonial-item img");

    // Buka gambar saat diklik
    popupImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            fullImage.src = this.currentSrc || this.src;
            fullImage.alt = this.alt;
        });
    });

    // Tutup gambar dengan klik tombol silang (X)
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Tutup gambar bila klik di luar gambar
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});