/* Writing N Files Asynchronously
Allowed Node.js API Functions: fs.writeFile()
Input: Integer n  (0 < n < 100)
Output: n Files
Create a program that asynchronously write n files 01-output.txt up to 99-output.txt to a subdirectory output.  Each file should contain the text "Data-1".  
After each successful write, print a message to console with the filename.  After all n files are finished writing, print an additional message Writing Complete. 
Run the script a few times, the filenames printed should almost never be in order.*/ 

const fs = require('fs'); //we require the fs library to have file systems
const n = 2; //n must be between 0 and 100(not inclusive)
let out_dir = '/Users/jordonjohnson/Desktop/WebCode/' //where out output files go
let filewritten = 0; // stores the number of files written

for(let i=1;i<=n;i++)
    {
        let filename = i.toString() + 'output.txt';
        let path = out_dir + filename; 

        fs.writeFile(path, 'Data-01', after_write);
        function after_write(err)
        {
            if (err){
                console.log('Could not write file');
            }else{
                console.log(path);
                filewritten ++;
                if(filewritten===n)
                {
                    console.log("Finished");
                }
            }

        }

        
    }
    
    

 


