/* Simple code utilizing callbacks to resolve domain name*/

const dns = require('dns'); 
const domain = "jordonjohnsonportfolio.com";

dns.resolve(domain, after_resolve);

function after_resolve(err,data)
{
    if (err)
    {
        console.log("Cant read file");
    }else{
        console.log("IP: " + data);
    }
}
