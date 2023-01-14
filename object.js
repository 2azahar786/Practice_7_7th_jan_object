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

// console.log(obj1);

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

// part-4

const obj4 =object.create({})
object.defineProperty(obj4, 'book', {
    icon:'📘',
    get: () => '📘',
    enumerable: true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(object.getPrototypeof(obj4));

for (k in obj4){
    // console.log("Value is k:", K);
}

// Part-5

const obj5= {
    comics:'marvel',
    pen:'',
    printComic :function(){
        this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    }

    printaComic: () =>{
        this.pen :'🖊️🗒️'
        console.log(this);
    },
}

console.log(obj5.printcomic().printComic().printComic);
console.log(obj5.printaComic());