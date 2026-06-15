document.addEventListener('DOMContentLoaded', function(){
    //Carosello
    if(document.querySelector('#armi') != null){
        const immagini = document.getElementsByClassName('slides');
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');
        const dots = document.getElementsByClassName('dot');
        const url = window.location.href;
        const tendina = document.getElementsByClassName('tendina')
        var hash = url.split('#').pop();
        var anchors = ['due-mani', 'lato', 'sciabola', 'striscia'];
        var i = 0

        for(let j = 0; j < hash.length - 1; j++){
            if(hash === anchors[j]){showSlide(i = anchors.indexOf(hash));}
        }

        next.addEventListener('click', () => {
            i++;
            if(i > immagini.length - 1){i = 0;}
            showSlide(i);
        });
        prev.addEventListener('click', () => {
            i--;
            if(i < 0){i = immagini.length - 1;}
            showSlide(i);
        });
        for(let j = 0; j < dots.length; j++){
            tendina[j].addEventListener('click', function(){
                showSlide(i = j);
            });
            dots[j].addEventListener('click', function(){
                showSlide(i = j);
            });
        }

        function showSlide(i){
            for(let j = 0; j < immagini.length; j++){
                immagini[j].classList.add('hidden');
                dots[j].classList.remove('active');
            }
            immagini[i].classList.remove('hidden');
            dots[i].classList.add('active');
        }
    }


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

    /* Chiude il menu quando si clicca sui link anchor
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
    });*/


    //Messaggio inviato
    if(document.querySelector('#contatti') != null){
        input1 = false;
        input2 = false;
        input3 = false;

        document.getElementById("mitt").addEventListener('input', function(e) {
            if(e.target.checkValidity()){
                input1 = true;
            } else {
                input1 = false;
            }
        });

        document.getElementById("email").addEventListener('input', function(e) {
            if(e.target.checkValidity()){
                input2 = true;
            } else {
                input2 = false;
            }
        });

        document.getElementById("messag").addEventListener('input', function(e) {
            if(e.target.checkValidity()){
                input3 = true;
            } else {
                input3 = false;
            }
        });

        document.getElementById('invia').addEventListener('click', function(){
            if(input1 === true && input2 === true && input3 === true){
                document.getElementById('form').classList.toggle('hidden');
                document.getElementById('fatto').classList.toggle('hidden');
                document.getElementById('form').reset();
                input1 = false;
                input2 = false;
                input3 = false;
            }
        });

        document.getElementById('continua').addEventListener('click', function(){
            document.getElementById('form').classList.toggle('hidden');
            document.getElementById('fatto').classList.toggle('hidden');
        });
    }
});
