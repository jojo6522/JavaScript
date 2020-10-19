const dns = require('dns'); 
const domain = "jordonjohnsonportfolio.com";
let data; // variable to store the returned IP's

dns.resolve(domain, after_resolve);

function after_resolve(err,records)
{
    if (err)
    {
        console.log("Cant read file");
    }else{
        data = records;
        printRecords(data);
    }
}

// calling on the printrecords function to print the stored IPS
// here we get undefined as the contents of data is tied to the call back function, 
//in order to get the values we must nest the function call within the call back
// printRecords(data);

function printRecords(input)
{
    console.log(input);
}
    
    

 
