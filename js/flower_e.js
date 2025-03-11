class Flower_e {
    constructor(x, y, size, stemLength, petalColor) {
        this.x = x;
        this.y = window.innerHeight - 150 - stemLength;
        this.size = size;
        this.stemLength = stemLength;
        this.petalColor = petalColor;
    }

    renderFlower() {
        let flowerContainer = document.createElement("div");
        flowerContainer.classList.add("flower_e");
        flowerContainer.style.position = "absolute";
        flowerContainer.style.left = `${this.x}px`;
        flowerContainer.style.top = `${this.y}px`;

        //Create Stem
        let stem = document.createElement("div");
        stem.classList.add("stem");
        stem.style.width = "5px";
        stem.style.height = `${this.stemLength}px`;
        stem.style.backgroundColor = "green";
        stem.style.position = "absolute";
        stem.style.left = "50%";
        stem.style.bottom = `-${this.stemLength}px`;
        stem.style.transform = "translateX(-50%)";
        flowerContainer.appendChild(stem);

        //Create Petals
        let numPetals = Math.floor(Math.random() * 5) + 4;  // Random number between 4 and 8

        for (let i = 0; i < numPetals; i++) {
            let petal = document.createElement("div");
            petal.classList.add("petal");
            petal.style.width = `${this.size*2}px`;
            petal.style.height = `${this.size/4}px`;
            petal.style.backgroundColor = `rgb(${this.petalColor.r}, ${this.petalColor.g}, ${this.petalColor.b})`;
            petal.style.borderRadius = "50%";
            petal.style.position = "absolute";
            petal.style.left = "50%";
            petal.style.top = "50%";
            petal.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
            flowerContainer.appendChild(petal);
        }

        //Center of the Flower
        let center = document.createElement("div");
        center.classList.add("flower-center");
        center.style.width = `${this.size / 3}px`;
        center.style.height = `${this.size / 3}px`;
        center.style.backgroundColor = "#FFFF8F";
        center.style.borderRadius = "50%";
        center.style.position = "absolute";
        center.style.left = "50%";
        center.style.top = "50%";
        center.style.transform = "translate(-50%, -50%)";
        flowerContainer.appendChild(center);

        document.getElementsByTagName("main")[0].appendChild(flowerContainer);

         // Add click event to change color
       flowerContainer.addEventListener("click", () => {
        this.changeColor(flowerContainer);
    });

    document.body.appendChild(flowerContainer);
    }
    
    changeColor(flowerContainer) {
        // Generate new random color
        let newColor = {
            r: Math.floor(Math.random() * 155) + 100,
            g: Math.floor(Math.random() * 155) + 100,
            b: Math.floor(Math.random() * 155) + 100,
        };

        // Update petal colors
        let petals = flowerContainer.getElementsByClassName("petal");
        for (let petal of petals) {
            petal.style.backgroundColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
        }
    }
}