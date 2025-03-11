
 class Squirrel {

    constructor(position, size, color, images){
        this.position = position;
        this.size = size;
        this.images = images;
        this.color = color;
        this.htmlElement = document.createElement('img');
        this.currentFrame = 0;
        this.frameRate = 100; 
    }

    renderSquirrel(){


        this.htmlElement.classList.add("squirrel");
        //this.htmlElement.style.position = "absolute";
        this.htmlElement.style.width = `${this.size}px`;
        this.htmlElement.style.height = `${this.size}px`;
        this.htmlElement.style.top = `${this.position.y}px`;
        this.htmlElement.style.left = `${this.position.x}px`;
        
        this.htmlElement.src = this.images[this.currentFrame];
        this.htmlElement.style.transition ='all 5s ease';

        document.body.appendChild(this.htmlElement);
       
    }
   

    animateSquirrel(){
        const moveSquirrel =()=>{
            this.currentFrame = (this.currentFrame+1)%this.images.length;
            this.htmlElement.src = this.images[this.currentFrame];
            this.position.x += Math.random()*0.5-0.25;
            this.position.y += Math.random()*0.5-0.25;

            this.htmlElement.style.top =`${this.position.y}px`;
            this.htmlElement.style.left =`${this.position.x}px`;

           // requestAnimationFrame(moveSquirrel);

        };

       // moveSquirrel();
       setInterval(moveSquirrel, this.frameRate);  // Speed controlled by frameRate
    }


}

