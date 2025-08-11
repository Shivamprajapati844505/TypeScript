class BottenMaker {
  constructor(
    public name: string,
    public material: string,
    public price: number,
    public color: string
  ) {}
}

let b1 = new BottenMaker("Milton", "steel", 500, "white");

console.log(b1);  



// lengthy way of code
class BottenBuilder{
    public name;
    constructor(name:string){
        this.name = name;
    }
}

let bottel =new BottenBuilder("Bosco")
console.log(bottel);
