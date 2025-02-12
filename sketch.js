let musicNotes=[];
let noteImage;

function setup() {
  let cnv3=createCanvas(960, 540);
  resizeCanvas(windowWidth, windowHeight);
  cnv3.id('emitNotes');
  //cnv3.parent('');
  noStroke();
  noteImage=loadImage("MusicNotes.png");
  // Spawn one object
  for(let i=0;i<1;i++)
    musicNotes[i] = new Fire();
  rectMode(CENTER);
}

function draw() {
  
  background(100,100,200);
  if(frameCount%20==0)
    {  
    musicNotes.push(new Fire());
    }
  for(let i=0;i<musicNotes.length;i++)
    {
    if(musicNotes[i].o<=0)
      musicNotes.splice(i,1);
    musicNotes[i].display();
    musicNotes[i].move();
    }
  //fill('white');
  //text(myCars.y, 100, 100 ) ;

}




class Fire {

  // constructor
  constructor() {
    this.x= mouseX;
    this.y = mouseY;// initialize your attributes here
    this.r=random(0,300);
    this.g=random(0,300);
    this.b=random(0,100);
    this.o=365;
    this.size=10;
  }

  // methods

  display() {
    fill(this.r,this.g,this.b,this.o);
    rect(this.x-this.size/3, this.y-this.size/2, this.size/2,this.size);
    ellipse(this.x,this.y,this.size,this.size);
    image(noteImage, this.x, this.y, this.size, this.size);
    
  }

  move() {
    this.y = this.y - random(-2,7);
    this.x=this.x+random(-2,2);
    this.size+=random(0.5,2);
  }
  
}