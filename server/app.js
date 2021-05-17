let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
http.listen(3000, () => {
    console.log("started on port 3000");
});
// let io = require("socket.io")(http);
// io.on("connection", socket => {
//     socket.on("disconnect", function() {
//     });
//     socket.on("message", message => {
//         io.emit("message",message );
//     });
// });
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("st1", message => {
        io.emit("st1",message );
        console.log(message);
    });
});
// io.on("connection", socket => {
//     socket.on("disconnect", function() {
//     });
//     socket.on("st0", message => {
//         io.emit("st0",message );
//         console.log(message);
//     });
// });
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("st2", message => {
        io.emit("st2",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("st3", message => {
        io.emit("st3",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("i3", message => {
        io.emit("i3",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("i2", message => {
        io.emit("i2",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("i1", message => {
        io.emit("i1",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("id", message => {
        io.emit("id",message );
    });
});

io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("room_id", message => {
        io.emit("room_id",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("id_out", message => {
        io.emit("id_out",message );
    });
});
io.on("connection", socket => {
    socket.on("disconnect", function() {
    });
    socket.on("id_r_out", message => {
        io.emit("id_r_out",message );
    });
});
