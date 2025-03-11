class Bush {
    constructor(x, y, size) {
        this.bush;
        this.x = x;
        this.y = y;
        this.size = size;
        this.bushImg = "../assets/images/bush.svg";
    }

    renderBush() {
        this.bush = document.createElement('img');
        this.bush.setAttribute('src', this.bushImg);
        this.bush.style.position = 'absolute';
        this.bush.style.left = this.x + 'px';
        this.bush.style.top = this.y + 'px';
        this.bush.style.width = this.size + 'px';
        this.bush.style.height = this.size + 'px';

        document.querySelector(".grass").appendChild(this.bush);
    }
}