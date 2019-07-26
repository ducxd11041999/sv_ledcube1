
   	const PORT = 3000								//Đặt địa chỉ Port được mở ra để tạo ra chương trình mạng Socket Server
   var express = require("express");
	var app = express();
	app.use(express.static("./public"));
	var server = require("http").Server(app);
	var io = require("socket.io")(server);
	app.set("view engine","ejs");
	app.set("views","./views" )
	var ip = require("ip")

						//#Phải khởi tạo io sau khi tạo app!
    server.listen(3000, function()
    {
    	console.log("connected")

    });										// Cho socket server (chương trình mạng) lắng nghe ở port 3484
    
    app.get("/", function(req , res)
    {
    	res.render("trangchu")
    })

    io.on("connection",function(socket)
    {
        console.log(ip.address())
        console.log("Có người kết nối")
        socket.on("CLIENT-SEND-MODE-RAIN",function()
        {
            io.sockets.emit("SERVER-SEND-RAIN-MODE", {MODE:"Rain"})
        });
        socket.on("CLIENT-SEND-MODE-LOVE", function()
        {
            io.sockets.emit("SERVER-SEND-LOVE-MODE",{MODE:"Love"})
        });
        socket.on("CLIENT-SEND-MODE-PLAN", function()
        {
            io.sockets.emit("SERVER-SEND-PLAN-MODE",{MODE:"Plan"})
        });
        socket.on("CLIENT-SEND-MODE-DOMINO", function()
        {
            io.sockets.emit("SERVER-SEND-DOMINO-MODE",{MODE:"Domino"})
        });
         socket.on("CLIENT-SEND-MODE-OFF", function()
        {
            io.sockets.emit("SERVER-SEND-OFF-MODE",{MODE:"Off"})
        });
        socket.on("CLIENT-SEND-MODE-LAMP", function()
        {
            io.sockets.emit("SERVER-SEND-LAMP-MODE",{MODE:"Lamp"})
        });

    })