const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    let num=req.header('x-forwarded-for')
    res.send(`${num}`)
    console.log(num)
})


app.listen(3000)