
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
    server.listen(process.env.PORT||3000, function()
    {
        var port_connect = $PORT
    	console.log("connected")
        console.log(ip.address())
    });										// Cho socket server (chương trình mạng) lắng nghe ở port 3484
    
    app.get("/", function(req , res)
    {
    	res.render("trangchu")
    })

    io.on("connection",function(socket)
    {
        console.log("đã nhảy dô đây")
        console.log(ip.address())
        console.log("Có người kết nối")
        socket.on("CLIENT-SEND-MODE-RAIN",function()
        {
            io.sockets.emit("SERVER-SEND-RAIN-MODE", {MODE:"Rain",AR:"1"})
        });
        socket.on("CLIENT-SEND-MODE-LOVE", function()
        {
            io.sockets.emit("SERVER-SEND-LOVE-MODE",{MODE:"Love",AR:"2"})
        });
        socket.on("CLIENT-SEND-MODE-PLAN", function()
        {
            io.sockets.emit("SERVER-SEND-PLAN-MODE",{MODE:"Plan",AR:"3"})
        });
        socket.on("CLIENT-SEND-MODE-DOMINO", function()
        {
            io.sockets.emit("SERVER-SEND-DOMINO-MODE",{MODE:"Domino",AR:"4"})
        });
         socket.on("CLIENT-SEND-MODE-OFF", function()
        {
            io.sockets.emit("SERVER-SEND-OFF-MODE",{MODE:"Off",AR:"5"})
        });
        socket.on("CLIENT-SEND-MODE-LAMP", function()
        {

            io.sockets.emit("SERVER-SEND-LAMP-MODE",{MODE:"Lamp", AR:"6"})
            //io.sockets.emit("send_port", port_connect)
            //console.log("con heo con đáng yêu")

        });
       

    })
function ParseJson(jsondata) {
    try {
        return JSON.parse(jsondata);
    } catch (error) {
        return null;
    }
}