function MathsUtil(num1)
{  this.value = num1
    this.cube=()=>{
        console.log("cube=",this.value*this.value*this.value)
    }
}
function MathsProto()
{    this.square=(x)=>{
        console.log("square is ",x*x)
    }
}

function MathsProto2()
{
    this.power=(a,b)=>
    {
        console.log(Math.pow(a,b))
    }
}

//PROTOTYPE chaining -----

MathsProto.prototype = new MathsProto2()
MathsUtil.prototype = new MathsProto()


// let x = new MathsUtil(3)
// x.cube()
// x.square(4)
// x.power(2,3)
// console.log("x=",x)

let y=new MathsProto()
//y.cube(2)
y.square(4)
y.power(2,3)

// let z=new MathsProto2()
// z.cube(4)
// z.square(4)
// z.power(2,3)



// console.log("prototype of x=",Object.getPrototypeOf(x))





