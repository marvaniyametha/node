let http = require('http');
let fs = require('fs');

const server = http.createServer(
    (req, res) => {
        
        let filePath = "";
        switch(req.url){
            case '/':
                filePath = './index.html';
                break;
            case '/about':
                filePath = './About.html';
                break;
            case '/contact':
                filePath = './Contact.html';
                break;
            default:
                filePath = './notfound.html';
        }
        let data = fs.readFileSync(filePath, 'utf-8');
        res.end(data);
    }
);

server.listen(2211, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server start at http://localhost:2211`);
    }
});