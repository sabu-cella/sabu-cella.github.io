// Apre il menu media
document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Non chiude il menu mobile quando si clicca su link attivi o Armi
document.getElementById('Armi').addEventListener('click', function(e) {
    e.stopPropagation();
});

document.querySelector('.active').addEventListener('click', function(e) {
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

// Chiude il menu quando si clicca su i link anchor
document.getElementById('due-mani').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('active');
});

document.getElementById('lato').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('active');
});

document.getElementById('sciabola').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('active');
});

document.getElementById('striscia').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('active');
});
