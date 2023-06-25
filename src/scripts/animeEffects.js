import anime from 'animejs/lib/anime.es.js'

export default {
    traceSVG(path, length) {
        console.log(path, length)
        anime({
            target: path,
            strokeDashoffset: [length, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            direction: 'alternate',
            loop: true
        });
    }
}