class Ground {
    constructor(x,y,w,h)
{
    let options={
        isStatic:true
    }
    
    this.w=w
    this.h=h
    this.x=x
    this.y=y
    this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
}

show(){
    var pos = this.body.position
    push()
    translate (pos.x,pos.y)
    rectMode(CENTER)
    strokeWeight(4)
    fill (255,255,0)
    rect(0,0,this.w,this.h)
    pop()
}
}