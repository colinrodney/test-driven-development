const express = require(`express`);
const app = express()
const serverPort = 5501;

function createServer(){
    app.listen(serverPort, () =>{
        console.log(`server up @ port ${serverPort}`)
    })
}

app.get(`/`, (req, res) =>{
    res.send(`Get`)
})

app.post(`/register`, (req,res) =>{
    res.send(`post`)
})
createServer()