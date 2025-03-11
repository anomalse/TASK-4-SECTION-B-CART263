window.onload = function (){
// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],

    // An array to the individual birds
    birds: [],

    bushes: [],

      // a place to store bees
      beesA: [],
      numBeesA: 5,


    /*bee object */
    beesR: [], // NEW ARRAY FOR BEES
    numBeesR: 5, // How many bees we want

    // How many flowers in the garden
    numFlowers: 20,
    /*grass object */
    grass: {
      // The color of the grass (background)
      grassColor: {
        r: 120,
        g: 180,
        b: 120,
      },
      //the grass element
      grassDiv: document.createElement("div"),
    },
 
    /*sky object */
    sky: {
      // The color of the sky (background)
      skyColor: {
        r: 83,
        g: 154,
        b: 240,
      },
      //the sky element
      skyDiv: document.createElement("div"),
    },
        //Bees
        bees: [],
        numBees: 5,
    //an array to store the individual squirrels
    squirrels: [],
    // How many squirrels in the garden
    numSquirrels: 5,
    numSquirrelsStand: 2,
    numSquirrelsRun: 3,
  };
  // new  sun instancce
  let sun =  new Sun(10,10,{r: 240, g: 206,b: 83})


  const squirrelImages =[
    './images/squirrel_frame1.png',
    './images/squirrel_frame2.png',
    './images/squirrel_frame3.png',
    './images/squirrel_frame4.png'
  
  ];
  
  const squirrelRunImgs =[
    './images/squirrel_run1.png',
    './images/squirrel_run2.png',
    './images/squirrel_run3.png',
    './images/squirrel_run4.png'
  
  
  ]


function setupGarden(){
  
  //an array for the squirrels that stand
  for (let i = 0; i < garden.numSquirrelsStand; i++) {
    // Create variables for our arguments for clarity
    let randomX = Math.random() * (window.innerWidth - 300);
    let randomY = Math.floor(Math.random() * (350)) + 200;
    let size = Math.floor(Math.random() * 300) + 100;

    console.log(size)


  // Create a new squirrel standing using the arguments 
  let squirrelStand = new Squirrel({x:randomX, y:randomY}, size, 'brown', squirrelImages)

  // Add the squirrel standing to the array of squirrels
  garden.squirrels.push(squirrelStand)
  
  }

  //an array for the squirrels that run
  for (let i = 0; i < garden.numSquirrelsRun; i++) {
    // Create variables for our arguments for clarity
    let randomX = Math.random() * (window.innerWidth - 300);
    let randomY = Math.floor(Math.random() * (350)) + 200;
    let size = Math.floor(Math.random() * 300) + 100;

    console.log(size)


  // Create a new squirrel running using the arguments 
  let squirrelRun = new Squirrel({x:randomX, y:randomY}, size, 'brown', squirrelRunImgs)

  // Add the squirrel running to the array of squirrels
  garden.squirrels.push(squirrelRun)

  }


  for (let i = 0; i < garden.numSquirrels; i++) {

    // Render each squirrel in the array of squirrels
    garden.squirrels[i].renderSquirrel();
    // Animate each squirrel in the array of squirrels
    garden.squirrels[i].animateSquirrel();
  }
  

}

setupGarden();

  

  function createAndRenderTheGarden() {
    /* note how we use dot notation....*/
    //sky
    garden.sky.skyDiv.classList.add("sky");
    garden.sky.skyDiv.style.background = `rgb(${garden.sky.skyColor.r},${garden.sky.skyColor.g},${garden.sky.skyColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);
    //sun
    sun.renderSun();

    //grass
    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);


    //Rowan Bees
    // create some bees
    for (let i = 0; i < garden.numBeesR; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * (window.innerHeight - 280); // Keep bees in the grass area
      let size = Math.random() * 20 + 10; // Bees should be small
      let color = {
        r: 255, // Yellow Bees
        g: 200,
        b: 0
      };

      let beeR = new BeeR(x, y, size, color);
      garden.beesR.push(beeR);
    }

    // render and animate the bees
    for (let i = 0; i < garden.numBeesR; i++) {
      garden.beesR[i].renderBee();
      garden.beesR[i].animateBee();
    }
    //Acacia Bees
     // create bees 
     for (let i = 0; i < garden.numBeesA; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * 80;
      let size = Math.random() * 2 + 1;
      let beeColor = {
        r: parseInt(Math.random() * 255),
        g: parseInt(Math.random() * 255),
        b: parseInt(Math.random() * 255),
      };

      // create bee
      let beeA = new BeeA(x, y, size, beeColor);

      // render bee
      beeA.renderBee();

      // add bees to variable (bees list) to potentially use later
      garden.beesA.push(beeA);

      //animate bee
      beeA.animateBee();
    }

       // bush
       garden.grass.grassDiv.addEventListener('click', (event) => {
        let grassBounds = garden.grass.grassDiv.getBoundingClientRect()

        // get mouse position in the grass div
        let x = event.clientX - grassBounds.left;
        let y = event.clientY - grassBounds.top;

        let size = 150;

        let bush = new Bush(x, y, size);

        garden.bushes.push(bush); // adds bushes to bush array

        bush.renderBush();
    })

    let flowerCount = 0; // Initialize flower counter for keeping in mind flower count. 
    //add random flowers
    for (let i = 0; i < garden.numFlowers; i++) {
      let x = Math.random() * window.innerWidth; 
      let y = Math.random() * 120;; // Keep flowers near the grass
      let size = Math.random() * 30 + 10;
      let stemLength = Math.random() * 50 + 20;
      let petalColor = {
          r: Math.floor(Math.random() * 155) + 100,
          g: Math.floor(Math.random() * 155) + 100,
          b: Math.floor(Math.random() * 155) + 100,
      };
  
      // Randomly decide whether to create a Flower or FlowerE
      let flower;
      if (Math.random() < 0.5) {  
          flower = new Flower(x, y, size, stemLength, petalColor);
      } else {
          flower = new Flower_e(x, y, size, stemLength, petalColor);
      }
      garden.flowers.push(flower);
      flowerCount++; // Increment count
      console.log(`Flower ${flowerCount} added: ${flower.constructor.name}`);
  }

  //add exactly 25 Flowers E
for (let i = 0; i < 25; i++) {  
  let x = Math.random() * window.innerWidth; 
  let y = window.innerHeight - 150;
  let size = Math.random() * 30 + 10;
  let stemLength = Math.random() * 50 + 20;
  let petalColor = {
      r: Math.floor(Math.random() * 155) + 100,
      g: Math.floor(Math.random() * 155) + 100,
      b: Math.floor(Math.random() * 155) + 100,
  };

  let flower_e = new Flower_e(x, y, 10, stemLength, petalColor); 
  garden.flowers.push(flower_e);
  flowerCount++; // Increment count
  console.log(`Flower ${flowerCount} added: FlowerE`);
}

// Render all flowers
console.log(`Total flowers in garden: ${flowerCount}`);
for (let flower of garden.flowers) {
  flower.renderFlower();
}

    // //create some flowers
    // for (let i = 0; i < garden.numFlowers; i++) {
    //     // Create variables for our arguments for clarity
    //     let x = Math.random() * (window.innerWidth);
    //     let y = Math.random() * 120;
    //   //   let size = Math.random() * 30 + 10;
    //   //   let stemLength = Math.random() * 50 + 20;
    //   //   let petalColor = {
    //   //     r: parseInt(Math.random() * 155) + 100,
    //   //     g: parseInt(Math.random() * 155) + 100,
    //   //     b: parseInt(Math.random() * 155) + 100,
    //   //   };
  
    //   //   // Create a new flower using the arguments
    //   //   let flower = new Flower(x, y, size, stemLength, petalColor);
    //   //   // Add the flower to the array of flowers
    //   //   garden.flowers.push(flower);
    //   // }

    //   // for (let i = 0; i < garden.numFlowers; i++) {
    //   //   // Add the flower to the array of flowers
    //   //   garden.flowers[i].renderFlower();
    //   // }

       /// Bees

    //Render the bee Images in the sky
    for (let i = 0; i < garden.numBees; i++) {
      // Create variables for our arguments for clarity
      let x = Math.random() * (window.innerWidth);
      let y = Math.random() * 120;
      let imageSize = Math.random() * 100;



      // Create a new bee using the arguments
      let bee = new Bee(x, y, imageSize);
      // Add the bee to the array of bees
      garden.bees.push(bee);
    }

    for (let i = 0; i < garden.bees.length; i++) {
      // Add the bee to the array of bees
      let hueShift = Math.random() * 1000

      garden.bees[i].renderBee(hueShift);
    }

    //Animate the five bees
    for (let i = 0; i < garden.bees.length; i++) {
      // animate the bee array
      garden.bees[i].animateBee();

    }
    //checkbounds on bees
    for (let i = 0; i < garden.bees.length; i++) {
      let skyBoundsX = garden.sky.skyDiv.style.width + "vw";
      let skyBoundsY = garden.sky.skyDiv.style.height + "px";

      garden.bees[i].checkBounds(skyBoundsX, skyBoundsY);



    }



  }
  createAndRenderTheGarden();
  window.addEventListener("keydown", function handleKeyDown(event) {

  event.preventDefault();
  //call the handleKeyDown method of class
  sun.handleKeyDownInSUn(event);

   //add bird
   if (event.key == "Enter") {
    let newBird = new Bird();
    garden.birds.push(newBird);
    console.log(garden.birds);
  }
  //add weed
  if (event.key === " ") {
    
    console.log("you press space bar");
    addWeed();

  }
});


let bird = new Bird(500, 100, 20, 20, "red");
bird.Bird();



let weeds = [];
let WeedSize = 180;

// create weeds
for (let i = 0; i < 3; i++) {
  let weed = new Weed(Math.random() * (window.innerWidth), Math.random() * 120, WeedSize);
  weeds.push(weed);
}

// // add an event listener
// window.addEventListener('keydown', function (event) {
//   if (event.key === " ") {
//     console.log("you press space bar");
//     addWeed();

//   }
// })


// function to add a new weed
function addWeed() {
  let newWeed = new Weed(Math.random() * (window.innerWidth), Math.random() * 120, WeedSize);
  weeds.push(newWeed);

}


}
  

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

/**TEAM B -- SQUIRRELS
 * 1/ Create a  file to hold a  Squirrel Class (i.e. Squirrel.js)
 * 2/ Create the Squirrel Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
 * 4/ Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame() 
 * 5/ In garden.js add 5 new Squirrels to the garden (in an array) - 
 * all different sizes and colors and in different positions and then call the animateSquirrel() method on all the Squirrels
 * 
*/

/** TEAM C -- BUSH
 * 1/ Create a  file to hold a  Bush Class (i.e. Bush.js)
 * 2/ Create the Bush Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderBush() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Bush... (see Sun or Flower for inspiration)
 * 4/ add an mouse click event listener to the grass in the garden - such that wherever the mouse is clicked a bush will be added at that position 
 * 5/ In garden.js add initially one new bush (in an array) - 
 * 6/ Ensure that new bushes can be added to the garden
 * 
*/

/** TEAM D -- WEEDS
 * 1/ Create a  file to hold a  Weed Class (i.e. Weed.js)
 * 2/ Create the Weed Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderWeed() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Weeds... (see Sun or Flower for inspiration)
 * 4/ Add a key event listener (in garden.js) such that when the SPACE bar is pressed - a new weed will be added to the garden.
 * 5/ In garden.js add initially  a couple of weeds (in an array) - 
 * 6/ Ensure that new weeds can be added to the garden.
 * 
*/


/** TEAM E -- ADD A DIFFERENT FLOWER CLASS
 * 1/ Create a  file to hold a  new Flower Class (i.e. Flower_E.js)
 * 2/ Create the Flower_E Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a renderFlower_E() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a new style of Flower... (see Sun or Flower for inspiration)
 * 4/ Add a mouse click event listener to each FlowerE  - such that when you click on it  - it switches color ... (everytime you click it should change color)
 * 5 / In garden.js add 25 new FlowerE objects to the garden (in an array) - different colors (make them quite small) -
 * 
*/

/** TEAM F -- Birds
 * 1/ Create a  file to hold a  Bird Class (i.e. Bird.js)
 * 2/ Create the Bird Class : a constructor which takes a position, size and color as parameters
 * 3/ Create a Bird() method -> which essentially creates a HTML element(s) - could be
 * an image element :) or an svg .... representing a Weeds... (see Sun or Flower for inspiration)
 * 4/ Add a key event listener (in garden.js) such that when the the return Key is pressed - a new bird will be added to the garden.
 * 5/ Create an animateBird() method in the Bird class - which will make a given Bird move around the sky - use the requestAnimationFrame() 
 * 6/ In garden.js add an empty array for the birds
 * 
 * 
*/

