require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req, res) => {
    res.send('Hello, World!');
})
// get a list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is a another joke'
        },
        {
            id:3,
            title:'Another first joke',
            content:'This is a another first joke'
        },
        {
            id:4,
            title:'Another second joke',
            content:'This is a another second joke'
        },
        {
            id:5,
            title:'Another third joke',
            content:'This is a another third joke'
        },
    ]
    res.send(jokes);
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
});
