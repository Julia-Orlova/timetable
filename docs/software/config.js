module.exports = {
    server:{
        /* if there is a system variable process.env.PORT, then the server is started on this port,
        otherwise (development mode on the local computer) - on port 8080
        */
        port: process.env.PORT || 8080,
        staticPath: "./assets"
    }
}
