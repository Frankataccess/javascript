console.log("hello");

const myArr = ["Stephen","Matus","Ethan","Frank"]

for(let i = 0 ; i <5; i++){

}

for(let n of myArr){
    console.log(n)
}

console.log(myArr.length);

let text = myArr.toString();

console.log(text);

let name = myArr.pop();

console.log(name);
console.log(myArr);

let name2 = myArr.shift();

console.log(name2)
console.log(myArr)

myArr.push("Caspar");

console.log(myArr);

// objects 

let vw = {
    brand: "volkswagen",
    wheels: 4
}



vw.price = 80000; 

console.log(vw);

vw["color"] = "blue";

console.log(vw.brand);
console.log(vw);

for(let key in vw){
    console.log(vw[key]);
}

//class

class Car {
    constructor(brand, color, wheels, price){
        this.brand = brand;
        this.color = color;
        this.wheels = wheels;
        this.price = price;
    }
    
    hello(){
        console.log(`hello, I'm a ${this.brand}, I'm ${this.color} and I have ${this.wheels} wheels`)
    }
}




const ferrari = new Car("ferrari","red",4,"1000000")

console.log(ferrari)