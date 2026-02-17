let express=require('express');
let bodyparser=require('body-parser');
let app=express();

let path=require('path');
app.set('view engine','ejs');
app.set('view',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));
app.get('/regisnodeter',(req,res)=>{
    res.render('index1');
})

app.get('/submit',(res,req)=>{
    console.log(req.query);
    res.send("user register successfully..")
})

// app.post('/register',(req,res)=>{
//     console.log(res.body);
//     res.send("use registered succesfully..");
// })



app.listen(3000,()=>{
    console.log("app is running at port 3000");
})
