// The Every Function

let vals = [2,4,6,8,10];

function isEven(a)
{
    if (a%2==0)
    {
      return a;
    }
}

let answer = vals.every(isEven);
console.log(answer);
