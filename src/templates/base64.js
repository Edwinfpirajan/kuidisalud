var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file, 'base64url');
    // convert binary data to base64 encoded string
    //return Buffer.from(bitmap).toString('base64');
    return bitmap;
}

var base64str = base64_encode('./kuidis-logo.png');
console.log(base64str)

