/* Simple program to read a file using the callback method*/

const fs = require('fs'); //we require the fs library to have file systems

fs.readFile("/Users/jordonjohnson/Desktop/WebCode/1output.txt","utf8", after_read);

function after_read(err,data)
{
    if (err)
    {
        console.log("Cant read file");
    }else{
        console.log("File has been successfully read. The file length is: " + data.length);
    }
}
