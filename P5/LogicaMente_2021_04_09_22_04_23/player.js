class Player {
   constructor(x, y, Xsize, Ysize){
    this.x = x;
    this.y = y;
    this.Xsize = Xsize;
    this.Ysize = Ysize;
    this.gravity = 2;
  }
  
  jump(base){
    if(this.y + 58 == base){
      this.y -= 50;  
    }
  }
   
  move(base, direction){
    if(direction === 'left'){
      this.x -= 1;     
    } else {
      this.x += 1;
    }
    if(this.y <= base -  60){
      this.y += this.gravity;
    }
    
  }
  
  getPositionX(){
    return this.x;
  }
  
  getPositionY(){
    return this.y;
  }
  
  show(){
    rect(this.x, this.y,this.Xsize,this.Ysize);
    fill(100,250,35);
  }
}