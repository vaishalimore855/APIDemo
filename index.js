    const express = require ("express")
    const response = require ("express")
    //initialize port
    const port = process.env.port ||5000
    //appp initialization
    const app = express();

    //get method
    app.get('/getCurrentMonth',(req,res)=>{
        const monthName =["january","february","march","april","may","june","july","August","september","october","november","December"];
        
        const d = new Date();
        return res.end(`current month is :${monthName[d.getMonth()]}`)
    })
    //port listening
    app.listen(port,()=>{
        console.log(`listening on port:${port}`)    
    })