class Bee {

    constructor(x, y, imageSize,) {
        this.y = y;
        this.x = x;
        this.speedX = -1;
        this.speedY = 1.5;
        // this.beeImg =  document.createElement("img");
        this.beeImage = new Image(imageSize, imageSize);
        this.beeImage.src = "images/bee.png";








    }

    renderBee(hueShift) {
        // //sun - IN the sky
        this.beeImage.style.left = this.x + "px";
        this.beeImage.style.top = this.y + "px";
        this.beeImage.classList.add("bee");
        // this.beeImage.style.filter = "hue-rotate(0deg)";
        this.beeImage.style.filter = `hue-rotate(${hueShift}deg)`;
        console.log(this.beeImage.style.filter = `hue-rotate(${hueShift}deg)`);








        // //append to the SKY div

        document.querySelector(".sky").appendChild(this.beeImage);

    }


    checkBounds() {
        let beeMoving = this;
        let skyWidth = document.querySelector(".sky").getBoundingClientRect().width;
        let skyHeight = document.querySelector(".sky").getBoundingClientRect().height;
        if (parseInt(beeMoving.beeImage.style.left) > skyWidth) {
            beeMoving.speedX *= -1;


        }
        else if (parseInt(beeMoving.beeImage.style.left) < 0) {
            beeMoving.speedX *= -1;

        }

        if (parseInt(beeMoving.beeImage.style.top) > skyHeight) {
            beeMoving.speedY *= -1;

        }
        else if (parseInt(beeMoving.beeImage.style.top) < 0) {
            beeMoving.speedY *= -1;
        }

    }

    animateBee() {
        let self = this;
        //move the bee

        let ref = window.requestAnimationFrame(animate);
        function animate() {
            self.beeImage.style.left = parseInt(self.beeImage.style.left) + self.speedX + "px";
            self.beeImage.style.top = parseInt(self.beeImage.style.top) + self.speedY + "px";
            self.checkBounds();
            ref = window.requestAnimationFrame(animate);
        }
    }


}