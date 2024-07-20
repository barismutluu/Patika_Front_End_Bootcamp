document.addEventListener('DOMContentLoaded', function() {
    // Butonlara tıklama olayını ekleme
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            playSound(button.id);
            animateButton(button.id);
        });
    });

    // Klavye olaylarını dinleme
    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        if ('ASDFGHJKL'.includes(key)) {
            playSound(key);
            animateButton(key);
        }
    });
});

function playSound(key) {
    let sound;
    switch (key) {
        case 'A':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/boom.wav");
            break;
        case 'S':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/clap.wav");
            break;
        case 'D':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/hihat.wav");
            break;
        case 'F':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/kick.wav");
            break;
        case 'G':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/openhat.wav");
            break;
        case 'H':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/ride.wav");
            break;
        case 'J':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/snare.wav");
            break;
        case 'K':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/tink.wav");
            break;
        case 'L':
            sound = new Audio("/Hafta-6/Odev 2 - Javascript Drum Kit/tom.wav");
            break;
    }
    if (sound) {
        sound.play();
    }
}

function animateButton(key) {
    const button = document.getElementById(key);
    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100); // Animasyonun süresi
    }
}
