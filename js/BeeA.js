/**TEAM A -- BEES
 * 1/ Create a  file to hold a  Bee Class (i.e. Bee.js)
 * 2/ Create the Bee Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderBee() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Bee... (see Bee or Flower for inspiration)
 * 4/ Create an animateBee()method in the Bee class - which will make a given Bee move around the garden - use the requestAnimationFrame() 
 * 5/ In garden.js add 5 new Bees to the garden (in an array) - 
 * all different sizes and colors and in different positions and then call the animateBee() method on all the Bees
 * 
*/

class BeeA {
    constructor(x, y, size, beeColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.beeColor = beeColor;

        // bee img | source: https://www.cleanpng.com/png-bee-bravest-warriors-cartoon-hangover-frederator-s-4766383/download-png.html
        this.beeImg = document.createElement("img")

        // bee velocity for animation
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }

    // render method
    renderBee() {
        this.beeImg.classList.add("bee");
        this.beeImg.src = "images/beeA.png";

        // bee height and width
        this.beeImg.style.height = (50 / this.size) + "px";
        this.beeImg.style.width = (80 / this.size) + "px";

        // position element (css), set z-index
        this.beeImg.style.position = 'absolute';
        this.beeImg.style.zIndex = '999'; // set z-index: on top (of flowers)
        // x,y placement on grass 
        this.beeImg.style.left = this.x + "px";
        this.beeImg.style.top = this.y + "px";

        // append to the grass container
        document.querySelector(".grass").appendChild(this.beeImg);

        this.aniRef = null; // store the requestAnimationFrame ID
    }

    // * Animate Bee * //
    animateBee() {
        let self = this;
        function animate() {
            // Convert bee current left/top to numbers
            let left = parseFloat(self.beeImg.style.left);
            let top = parseFloat(self.beeImg.style.top);

            // Update position by speedX/Y
            left += self.speedX;
            top += self.speedY;

            // boundary checking
            let grass = document.querySelector(".grass");
            let grassWidth = grass.offsetWidth;
            let grassHeight = grass.offsetHeight;
            let beeWidth = parseInt(self.beeImg.style.width);   // 80
            let beeHeight = parseInt(self.beeImg.style.height); // 50
            // if out of bounds horizontally, reverse speed
            if (left < 0 || left + beeWidth > grassWidth) {
                self.speedX *= -1;
            }
            // if out of bounds vertically, reverse speed
            if (top < 0 || top + beeHeight > grassHeight) {
                self.speedY *= -1;
            }

            // Update bee's position in the DOM
            self.beeImg.style.left = left + "px";
            self.beeImg.style.top = top + "px";

            // call requestAnimationFrame  (and store the ID of the next animation frame)
            self.aniRef = requestAnimationFrame(animate);
        }

        // Call animate() once to start (and store ID)
        this.aniRef = requestAnimationFrame(animate);


    }
}