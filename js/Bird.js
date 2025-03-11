class Bird {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * 100;
        this.width = Math.random() * 20 + 10;
        this.height = Math.random() * 20 + 10;
        this.color = Math.floor(Math.random() * 360).toString();
        this.vx = Math.random() * 2 + 1;
        this.vy = Math.random() * 2 + 1;
        this.birdDiv = document.createElement('div');
        this.Bird();
        this.self = this

    }

    Bird() {
        this.birdDiv.classList.add("bird");

        this.birdDiv.style.position = 'absolute';
        this.birdDiv.style.width = this.width + 'px';
        this.birdDiv.style.height = this.height + 'px';

        this.birdDiv.style.left = this.x + 'px';
        this.birdDiv.style.top = this.y + 'px';

        // image of the bird from the assets folder
        this.birdDiv.style.backgroundImage = 'url(assets/Eagle-png-transparent-background-free-download.png)';
        this.birdDiv.style.backgroundSize = 'cover';

        this.birdDiv.style.filter = `hue-rotate(${this.color}deg)`


        document.querySelector(".sky").appendChild(this.birdDiv);
        this.animateBird(); // Start movement

    }

    animateBird() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > window.innerWidth || this.x < 0) this.vx *= -1;
        if (this.y > 200 || this.y < 0) this.vy *= -1; // Keep birds in the sky area

        this.birdDiv.style.left = this.x + "px";
        this.birdDiv.style.top = this.y + "px";

        requestAnimationFrame(() => this.animateBird());

    }

}