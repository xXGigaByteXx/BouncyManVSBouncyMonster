class Person {
    constructor(x,y,width,height) {
      var options = {
          'restitution' : 2,
          'friction': 1,
          'density':0.05//,
          //isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Monster-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image, -(this.width / 2), -(this.height / 2), this.width, this.height);
      imageMode(CENTER);
      //fill("lightblue");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  