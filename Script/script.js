// Apre il menu media
document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Non chiude il menu mobile da dentro
document.querySelector('.menu').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Non chiude il menu se si clicca sul tasto menu
document.getElementById('burger').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Chiude il menu mobile
document.addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('active');
});