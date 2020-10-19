/* Resolves domain names taken froma txt file and prints the ip to the console*/

const fs= require("fs");
const dns = require("dns");
const inputfile = '/Users/jordonjohnson/Desktop/WebCode/input.txt';


fs.readFile(inputfile, "utf8", after_read);

function after_read(err, data)
{
    if(err)
    {
        console.log("'Error Reading: " + inputfile);
    } else {
        domains = data.split('\n');
        for( let i = 0; i<domains.length; i++)
        {
            /
            resolve(domains[i]);
        }
    }
}
function resolve (domain)
{
dns.resolve(domain,after_resolve);
function after_resolve(err, data)
{
    if (err)
    {
        console.log("Failed to resolve", domain)
    } else{
        console.log(domain + "   "+ data + '\n');
    }
}

}





























