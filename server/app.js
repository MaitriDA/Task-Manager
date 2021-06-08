const express=require('express');
const app=express();

middleware();
app.get('/',(req,res)=>{
    res.send('Hello from home page');
});

app.get('/login',(req,res)=>{
    res.send('Hello from login page');
});

app.get('/register',(req,res)=>{
    res.send('Hello from register page');
});

app.listen(3003,()=>{
    console.log('Server running on port number 3000');
})