const liH = document.querySelector('ul li');
    liH.addEventListener('click', function() {
        alert('Mohon Maaf Atas Tidak Kenyamanannya Karena Website Masih Dalam Pengembangan.');
        alert('Terima Kasih Atas Perhatiannya :)');
    });

const menu = document.querySelector('.list-menu input');
const nav = document.querySelector('.navigasi ul');

menu.addEventListener('click', function() {
    nav.classList.toggle("slide");
});


