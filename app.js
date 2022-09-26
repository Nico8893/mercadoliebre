let express = require("express");
let path = require("path");
let app = express();

let publicFolderPath= path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));
/*app.listen(3000, () => {
    console.log ("El servidor está corriendo")
});*/
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get('/register', function(req,res) {
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo")
});
