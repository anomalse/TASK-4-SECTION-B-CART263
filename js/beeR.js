/**TEAM A -- BEES
 * 1/ Create a  file to hold a  Bee Class (i.e. Bee.js)
 * 2/ Create the Bee Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderBee() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Bee... (see Sun or Flower for inspiration)
 * 4/ Create an animateBee()method in the Bee class - which will make a given Bee move around the garden - use the requestAnimationFrame() 
 * 5/ In garden.js add 5 new Bees to the garden (in an array) - 
 * all different sizes and colors and in different positions and then call the animateBee() method on all the Bees
 * 
*/

class BeeR {
    constructor(x, y, size, color) {
        // Position and size
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        // Velocity for movement
        this.vx = Math.random() * 2 - 1; // Random speed between -1 and 1
        this.vy = Math.random() * 2 - 1;

        // Create the Bee element
        this.beeDiv = document.createElement("div");

        // Reference to 'this' for event listener
        let self = this;
    }

    renderBee() {
        this.beeDiv.classList.add("beeR");
        this.beeDiv.style.width = this.size + "px";
        this.beeDiv.style.height = this.size + "px";
        this.beeDiv.classList.add("beeR");
        this.beeDiv.style.left = this.x + "px";
        this.beeDiv.style.top = this.y + "px";

        // Add to the DOM inside the garden
        document.getElementsByClassName("grass")[0].appendChild(this.beeDiv);
    }

    animateBee() {
        let self = this;
        function move() {
            // Update position
            self.x += self.vx;
            self.y += self.vy;

            // Keep bee inside the garden bounds
            if (self.x < 0 || self.x > window.innerWidth - self.size) self.vx *= -1;
            if (self.y < 0 || self.y > window.innerHeight - self.size) self.vy *= -1;

            // Update DOM element position
            self.beeDiv.style.left = self.x + "px";
            self.beeDiv.style.top = self.y + "px";

            requestAnimationFrame(move);
        }
        requestAnimationFrame(move);
    }
}