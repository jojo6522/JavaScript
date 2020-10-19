/*  Assessment 04 
Personal Hosts File
Allowed Node.js API Functions: fs.readFile(), fs.writeFile(), dns.resolve()
Disallowed: fs.appendFile()
Input: File: domains.txt
Contains one valid domain name on each line
All supplied domains will only have a single IP addresses associated with it.
Output: File hosts.txt
Write a program that reads from a file domains.txt residing in a directory input.  It contains a list of valid domains one on each line, 
resolve each domain found to IP addresses, and save the results into a file hosts.txt residing in a directory output.  
The output format should be ip_address, a tab character (\t), domain_name.
The order in which the results appear does not matter.  (But see Ungraded Additional Question) */

const fs = require("fs");
const dns = require("dns");
const inputfile = '/Users/jordonjohnson/Desktop/WebCode/input.txt';
const outputfile = '/Users/jordonjohnson/Desktop/WebCode/output.txt';
let ip = [];
let returnedstring = '';



fs.readFile(inputfile, "utf8", after_read);

function after_read(err, data)
{
    if(err)
    {
        console.log("Error reading file");
    } else {
        domains = data.split('\n');
        for( let i=0; i<domains.length; i++)
        {

            dns.resolve(domains[i], after_resolve);
            
       }
    }
}

function after_resolve(err, data)
{
    if(err)
    {
        console.log("Error resolving");
        console.log(domains);
    } else {
        ip.push(data[0]);
        if(domains.length === ip.length)
        {
        for (i=0;i<domains.length; i++)
        {
        returnedstring = returnedstring + 'domain: ' + domains[i] + '\tip: ' + ip[i] + '\n';
        
        }
        fs.writeFile(outputfile, returnedstring, after_write);
    }
    }
}



function after_write(err, data)
{
    if(err)
    {
        console.log("Error");
    }else{
        console.log("Write successful");
        

    }
}

