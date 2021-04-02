window.onload = function() {
    setInterval(randomBackground, 15000);

    function randomBackground() {
        let head = document.querySelector('.head');

        let images = [
            'images/background-1.jpeg',
            'images/background-2.jpeg',
            'images/background.jpg',
        ];

        head.style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
    }
}