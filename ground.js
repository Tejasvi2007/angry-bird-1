class Ground
{
    constructor()
    {
        var op={isStatic:true}
        this.body=Bodies.rectangle(200,390,400,20,op)
        World.add(world,this.body) 
    }
    display(){
        var P=this.body.position
        rectMode(CENTER)
        fill("brown")
        rect(P.x,P.y,400,20)
    }
}