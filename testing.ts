
/**
 * Created by Vk on 21/3/2017.
 */
var log=console.log.bind(console);
var items=[1,2,3,4,5,6,7,8,9]
class Hamburger{
  constructor(){
      log("Constructor")

  }
  listToppings(){
    log("List Topppings")
    let increment=[];
    // items.forEach((v)=>{
    //   log(v)
    //   increment.push(v+1)
    // })
    increment=items.map((v)=>v+1)
    log(increment)
  }

}
class Toppings{
  constructor(toppings){
    this.toppings=Array.isArray(toppings) ? toppings :[];
    log(this.toppings);
    let a='Vijay';
    let b='42';
    log(`hello my name is ${a}, and I am ${b} years old`)
  }
  outPutList(){
    this.toppings.forEach((v,i)=>{
      log(v,i+'/'+this.toppings.length)
    })
  }
}


//base class

class Brid{
  constructor(weight,height)
  {
    this.weight=weight;
    this.height=height;

  }
  walk(){
    log('walk')
  }
}

class waterbrids extends Brid{
  constructor(weight,height){
    super(weight,height)
  }
  swim(){
    log('swmming')
  }
}

const myName='pat';
let yourName='jo';
yourName='Vijay';
// myName='Kumar'

let brds=new waterbrids();
brds.swim();
brds.walk();


let myToppings=new Toppings(['cheese','lettuce']);
myToppings.outPutList();

let burger=new Hamburger();
burger.listToppings();
const add=(a,b)=> a+b;

console.log(add(5,6))
// type str=string;
// let cheese:str='Pp';

// interface kicker{
//   kick(speed:number):number;
// }
// interface Puncher{
//   punch(power:number):number;
// }
// type KickPuncher=kicker & Puncher;
//
// function attack(warrior:KickPuncher){
//   warrior.punch(102);
//   warrior.kick(50);
// }



// const addEs6=(numbers) => numbers.reduce((p,c)=>p+c,0);
// log(addEs6(5,6,7))
