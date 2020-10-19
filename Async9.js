const dns = require("dns");
const domains = ['wolmers.org', 'jordonjohnsonportfolio.com'];
const ip =[] ;


for(let i=0; i<domains.length; i++)
{
    resolve(domains[i], i);
}

function resolve(domain, index)
{
    dns.resolve(domain, after_resolve);
function after_resolve(err, data)
{
    if(err)
    {
        console.log("'Error Resolving");
    } else {
        ip[index] = data;
        if(ip.length === domains.length)
        {
            output = ip.flat().join('\n');
            console.log(output);
        }
        
    }
}
} 
