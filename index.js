//wpec yspn rnhf ciec

const express=require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json())

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kbpatel3019@gmail.com",
        pass:"wpecyspnrnhfciec"
    }
})

const Otp=Math.floor(Math.random()*10000)
app.post("/", (req, res)=>{
    const mail={
        from:"kbpatel3019@gmail.com",
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text,
        html:`<h1>Your OTP is ${Otp}</h1>`
    }
    transport.sendMail(mail,(err,info)=>{
        if(err)
            console.log(err)
        else    
            console.log(info)
    })
    res.send("done")
})
app.get('/:otp', (req, res)=>{
    const {otp}=req.params;
    if(Otp==otp)
    {
        res.send("OTP is currect")
    }
    else {
        res.send("OTP is not currect")
    }
})
app.listen(8090,()=>{
    console.log("listening on 8090")
})