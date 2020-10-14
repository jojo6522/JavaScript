/* Write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.*/


function countChar(word, char)
{
    let count = 0;
    for(let i= 0; i<word.length; i++)
    {
        if(word[i]==char)
        {
            count ++;
        }
    }
    return count;
}

console.log(countChar('BOBS BURGER', 'R'));
