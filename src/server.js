const {app,port} = require("./index");
const connect = require("./configs/db");

app.listen(port, async (req, res) => {
    try{
        await connect();
        console.log(`Listening on port ${port}`);
    }catch(err){
        console.log(err.message);
    }
});