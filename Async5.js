/* continuation Passing style, writing synchronous code asynchronously */

const fs = require("fs");
const dir = '/Users/jordonjohnson/Desktop/WebCode/';
let fileindex = 1;
let n=9;
let path;

write(fileindex);
function write(index)
{
    path = dir + index + "output.txt";
    fs.writeFile(path,"Data-2", after_write);
}

function after_write(err, data)
{
    if(err)
    {
        console.log("Error");
    }else{
        console.log(path);
        fileindex ++;
        if(fileindex == n+1){return};
        write(fileindex);
    }
}
