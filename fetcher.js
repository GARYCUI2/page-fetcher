const fs = require('fs');
const request = require('request');

const argu = process.argv.splice(2);

const URL = argu[0];//http://www.example.edu/
const downloadLocation = argu[1];//./index.html


request(URL, (error, response, body) => {
  'error:', error; // Print the error if one occurred
  'statusCode:', response && response.statusCode; // Print the response status code if a response was received

  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  try {
    fs.writeFileSync(downloadLocation, body);
    console.log(`Downloaded and saved ${body.length} bytes to ${downloadLocation}`);
  } catch (err) {
    console.error(err);
  }
  
});