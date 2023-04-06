let express=require('express')

const app=express()
const ai=fetch('https://unpkg.com/ml5@latest/dist/ml5.min.js').then(req=>req.text).then(data=>console.log(data))

app.get('/',(req,res)=>{
    res.send(`${ai}`)
    console.log(ai)
})

app.listen(3000)