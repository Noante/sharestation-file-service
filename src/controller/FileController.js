const fs = require("fs");
const path = require("path");
const Busboy = require("busboy");

class FileController {

    async saveFile(req, res, next) {

        const busboy = new Busboy({headers: req.headers});

        busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {

            file.on('data', function(data) {
                console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
             });
                   
                
             file.on('end', function() {
               console.log('File [' + fieldname + '] Finished');
             });

            const saveTo = path.join(__dirname, `uploads/${filename}`);
            console.log(saveTo);
            
            file.pipe(fs.createWriteStream(saveTo));

        });

        busboy.on("finish", () => {

            res.writeHead(200, {Connection: "closed"});
            res.end("Upload completo");

        });

        req.pipe(busboy);

    }

}

module.exports = new FileController();