document.addEventListener('DOMContentLoaded', () => {
    const soundCards = document.querySelectorAll('.sound-card');
    const btnPlayAll = document.getElementById('btn-master-play');
    const btnStopAll = document.getElementById('btn-master-stop');

    let isMasterPlaying = false;

    // Initialize individual sound cards
    soundCards.forEach(card => {
        const audio = card.querySelector('audio');
        const slider = card.querySelector('.volume-slider');
        const icon = card.querySelector('.icon-btn');

        // Set initial volume
        audio.volume = slider.value;

        // Toggle sound via Icon click
        icon.addEventListener('click', () => {
            if (slider.value == 0) {
                // If muted, set to 50% and play
                slider.value = 0.5;
                audio.volume = 0.5;
                card.classList.add('active');
                audio.play().catch(e => console.log(e));
                isMasterPlaying = true;
            } else {
                // Mute
                slider.value = 0;
                audio.volume = 0;
                card.classList.remove('active');
                audio.pause();
            }
        });

        // Volume slider change event
        slider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            audio.volume = vol;
            
            if (vol > 0) {
                card.classList.add('active');
                if (audio.paused) {
                    audio.play().catch(e => console.log(e));
                    isMasterPlaying = true;
                }
            } else {
                card.classList.remove('active');
                audio.pause();
            }
        });
    });

    // Master Play
    btnPlayAll.addEventListener('click', () => {
        isMasterPlaying = true;
        let anyActive = false;

        soundCards.forEach(card => {
            const audio = card.querySelector('audio');
            const slider = card.querySelector('.volume-slider');
            
            if (slider.value > 0) {
                audio.play();
                anyActive = true;
            }
        });

        // If user hits play but no sliders are up, default to rain & fire
        if (!anyActive) {
            const rainSlider = document.querySelector('[data-sound="rain"] .volume-slider');
            const rainAudio = document.querySelector('#audio-rain');
            const fireSlider = document.querySelector('[data-sound="fire"] .volume-slider');
            const fireAudio = document.querySelector('#audio-fire');

            rainSlider.value = 0.4;
            rainAudio.volume = 0.4;
            document.querySelector('[data-sound="rain"]').classList.add('active');
            rainAudio.play();

            fireSlider.value = 0.3;
            fireAudio.volume = 0.3;
            document.querySelector('[data-sound="fire"]').classList.add('active');
            fireAudio.play();
        }
    });

    // Master Stop
    btnStopAll.addEventListener('click', () => {
        isMasterPlaying = false;
        soundCards.forEach(card => {
            const audio = card.querySelector('audio');
            audio.pause();
        });
    });
});
