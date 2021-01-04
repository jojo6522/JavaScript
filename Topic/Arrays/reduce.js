// The Reduce Function

//Simplest Example
let vals = [1,2,3,4,5];
function sum(a,b){
    return a+ b;
}
//prints 15
let ans = vals.reduce(sum);
console.log(ans);

//Condensing the code
let vals = [1,2,3,4,5];
let ans = vals.reduce((a,b) =>  a+ b);
console.log(ans);



// Reduce can take two arguments, if a second argument is provided it will be used as the start value
// If a second argument was not provided, the first element in the array is used to start

let vals = [1,2,3,4,5];
function sum(a,b){
    return a+ b;
}
// prints 25
let ans = vals.reduce(sum, 10);
console.log(ans);

// Find the minimum and maximum using reduce
function findMax(a,b)
{
    if(a>b)
    {
        return a;
    }else{
        return b;
    }
}

console.log(vals.reduce(findMax));

// Condensing the findMax function
// This time when converting to an arrow function we keep the curly brackets 
// As we have more than one line of code
let answer = vals.reduce((a,b) =>    
{
    if(a>b)
    {
        return a;
    }else{
        return b;
    }
});
console.log(answer);

// Further condensing the code using ternary operator
// The function passed to reduce reads, if a is greater than b, then return  else return b.

let answer = vals.reduce((a,b) =>  a>b ? a:b );
console.log(answer);
