const liH = document.querySelector('nav ul li');
    liH.addEventListener('click', function() {
        alert('Mohon Maaf Atas Tidak Kenyamanannya Karena Website Masih Dalam Pengembangan.');
        alert('Terima Kasih Atas Perhatiannya :)');
    });

const menu = document.querySelector('.list-menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle("slide");
});