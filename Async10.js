/* Program to compress file and store the compressed data in a file */

const fs = require("fs");
const zlib = require("zlib");
const outputfile = "/Users/jordonjohnson/Desktop/WebCode/output.txt";
const contents = "Writing something random here....................................... My name is Jordon johnson ...........   I live in new york .........I love new york";

zlib.deflate(contents, after_compress);

function after_compress(err, data)
{
    if (err)
    {
        console.log("Could not compress");
    } else {
        write(data);
    }
}


function write(buffer)
{
    fs.writeFile(outputfile, buffer, after_write);
function after_write(err)
{
    
    if(err)
    {
        console.log("Error");
    }else {
        console.log ("File written successfully");
        console.log (" Original file: " + contents.length);
        console.log(" Compressed File: " + buffer.length);
    }
}
}
