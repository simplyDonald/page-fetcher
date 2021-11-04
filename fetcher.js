const request = require('request');
const fs = require('fs');
console.log(`hello`);

let filePath = process.argv[3];
let domain = 'https://' + process.argv[2];



request(domain, (error, response, body) => {
  // console.log(body);
  if(error) {
    console.log(error);
    return
  }
  
  fs.writeFile(filePath,body, err => {
    if(err){
      console.log(err);
      return;
    }
    
    let {size} = fs.statSync(filePath);
    console.log(`Downloaded and saved ${size} bytes to ./index.html`);
    
  });
  
});