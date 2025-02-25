// script tombol dropdown saat layar 768 ke bawah menggunakan hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-menu");
    const menu = document.querySelector(".menu");
    const navItems = document.querySelectorAll(".menu li a");

    // menampilkan menu ketika hamburger di klik
    btn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // menu akan hilang setelah link di klik
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
