class Tree{
    constructor(x,y){ //properties
        var options = {
            friction:1.0,
            isStatic: true

        }
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width*8,this.height*10);
        pop()
    }
}