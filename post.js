var http = require('http');
var querystring = require('querystring');
var qs, name, email;

function postexample(req, res) {
    var data1 = '';

    req.on('data', function (chunk) {
        data1 += chunk;
        console.log("Data in String format: " + data1);
    });
    req.on('end', function () {
        qs = querystring.parse(data1);
        console.log("query string : ");
        console.log(qs);
        name = qs['username'];
        email = qs['email'];

        // Updated HTML response with centering and background image
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
        <html>
        <head>
            <style>
                    body{
                        background-color: #f9dbe9;
                       }
                       
                       .img1{
                        filter: blur(3px);
                        width: 950px;
                       }
                       .img2
                       {
                        width: 500px;
                        position: absolute;
                        top: 50%;
                        left: 22%;
                        transform: translate(-50%, -50%);
                       }
                       .pg1 h2{
                        padding-left: 60%;
                        margin-top: -850px;
                       }
                       .img3 h4{
                        position: absolute;
                        top: 5%;
                        left: 5%;
                        transform: translate(-50%, -50%);
                       }
                       .btn2{
                        position: absolute;
                        right: 2%;
                        margin-top: -70px;
                        }
                       .btn3{
                        border-radius: 20px;
                        width: 150px;
                        height: 40px;
                        border: none;
                        background-color: #f9dbe9;
                       }
                       content {
                        background-color: #f9dbe9 ;
        
                    }
                    .content{
                        margin-top: 200px;
                        margin-left: 1200px;
                        background-color:  #fcacd1;
                        width: 500px;
                        height: 200px;
                        padding-top: 65px;
                        padding-left: 40px;
                        border-radius: 40px;
                    }
                    </style>
        </head>
        <body>
            <div class="main">
            
                <div class="div2">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.aKL4uEbZq-7klVJFFYcATAHaHa&pid=Api&P=0&h=180" class="img1">
                    <div class="div2">
                        <img src="https://kpopping.com/documents/1b/2/800/D-DHvJiU8AAbvl6.jpeg" class="img2" style="border-radius: 30px;">
                    </div>
                    <div class="img3">
                        <h4>LISA||RAPPER</h4>
                    </div>
                </div>
                <div class="pg1">
                    <div class="btn2">
                        <button class="btn3"><h5>Contact</h5></button>
                    </div>
                    <h2 style="font-size: 75px;">Hi, Lalisa Manoban's Biography.</h2>
                </div>
                    <div class="center" style="background-color: #f9dbe9">
                        <div class="content">
                            <h1>Hello ${name},</h1>
                            <p style="font-size: 27px;">Your email id ${email} has been registered successfully using post method</p>
                        </div>
                    </div>
        </body>
        </html>
        `);
        res.end();
    });
}

http.createServer(postexample).listen(8000);
console.log("Server started");
