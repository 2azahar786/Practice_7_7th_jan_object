const object = {
    rpcket :'🚀',
    home:'🏡'
}

// string, number, bigint, boolean, null, undefine, symbol

const obj1={
    rockect:'🚀',
    fuel:2,
    config:{
        name:'mars'
    }
}

obj1.fuel=200
obj1['year']=2000

console.log(obj1);

// console.log(object);

// Part-2
const obj2 = new object() //constructor
obj2.redbook= '📕'
obj2.bluebook = '📘'
obj2.myvalue ='1 black book'

// console.log(obj2);

// part-3

const power={
    fly:true,
    cordinate:Math.random()+2
}
// console.log(power);

const obj3=object.create(power)

// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(object.getprototypeof(obj3));