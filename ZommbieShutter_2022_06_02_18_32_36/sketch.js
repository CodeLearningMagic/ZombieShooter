let bullets =[];
let zombies =[];

function setup() {
  createCanvas(400, 400);
  
  //Creando enemigos
 for (let i=0; i< 10; i++){
   let zombie={
     x:random(0,width),
     y:random(-800,0)
     
   }
   zombies.push(zombie)
 } 
   } 
  

function draw() {
  background("black");
  
  //Dibujar a los zombies desde el centro 
  rectMode(CENTER);
  
  //Dibujar el jugador 
  fill("white")
  circle(mouseX,height-30,25)
  
  //Dibujamos las balas 
  for (let bullet of bullets){
    bullet.y-=2
    circle(bullet.x,bullet.y,10);
    fill("yellow");
  }
  
  //Dibujando los zombies
  for (let zombie of zombies){
    fill("green");
    zombie.y+=2
    rect(zombie.x,zombie.y,10);
  }
  
  
  /*Creando la colisión de los balas con los zombies */
  
  for (let zombie of zombies){
    
    for (let bullet of bullets){
      if (dist(zombie.x,zombie.y,bullet.x,bullet.y)<10){
        zombies.splice(zombies.indexOf(zombie),1)
        bullets.splice(bullets.indexOf(bullet),1)
        let newZombie={
     x:random(0,width),
     y:random(-800,0)
     
   }
   zombies.push(newZombie)
        
      }
    }
    
  }
  
}


/*Creando las balas con un objeto json al 
presionar el mouse*/

function mousePressed(){
  let bullet ={
    x:mouseX,
    y: height-30
  };
  
  bullets.push(bullet);
  
}