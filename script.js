document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek Glow Dinamis pada Tombol Download
const buttons = document.querySelectorAll('.btn-download');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.filter = "brightness(1.5)";
    });
    btn.addEventListener('mouseout', () => {
        btn.style.filter = "brightness(1)";
    });
});
