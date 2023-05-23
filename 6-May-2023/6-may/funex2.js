//How to return the value as  function

function doMaths(choice)
{
    function doSquare(x)
    {
        return x*x
    }

   function doPower(a,b)
   {
     let p = Math.pow(a,b)
     return p
   }

   if(choice == 1)
       return doSquare
   else
   {
       return doPower
   }

   //console.log(doSquare(3))

}//end of doMaths


let v = doMaths(1)  // v will hold the function doSquare
let s = v(12)     // s will hold the return value of doSquare
console.log(s)


let p =doMaths(2)   //p will hold the doPower function
let a = p(4,5)
console.log(a)


function fun(choice)
{
    function dosquare(x)
    {
        return x*x
    }

    function dopower(k,n)
    {
        return Math.pow(k,n)
    }
    if(choice==1)
    {
        return dosquare
    }
else{
    return dopower
}

}


let w=fun(1)
let m=w(12)
console.log(m)

let u=fun(2)
let d=u(2,3)
console.log(d)










