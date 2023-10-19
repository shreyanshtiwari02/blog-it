const express = require("express");

const app = express();

const PORT = 8000;

app.get('/',(req,res)=>{


    return res.json({
        name : "shrey"
    });
})
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

