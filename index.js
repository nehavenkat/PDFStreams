var pdf = require('pdfkit');
var fs = require('fs');
// Create a document
var myDoc = new pdf ;
// Pipe its output somewhere, like to a file or HTTP response
myDoc.pipe(fs.createWriteStream('node.pdf'));

// Embed a font, set the font size, and render some text
myDoc.font('Times-Roman') 
   .fontSize(25)
   .text("Diego's Birthday", 100, 100)
   .text('Welcome : Neha', 140, 140)
   .underline(100, 100, 160, 27, {color: "#0000FF"})
   .text('Email: neha@striveschool', 170, 170)

   myDoc.end();
   // reference from : https://www.npmjs.com/package/pdfkit