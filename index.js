const express =require('express')
const app =express()
const  port= process.env.PORT || 8080

const dotenv = require('dotenv')
dotenv.config()



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res) => {
  res.send('Hey there EC2 INstance running')
})

app.get('/tshirt',(req,res) =>{
  res.status(200).send({
  "tshirt":"👕",
    "size":"large"
  })
})

app.post('/tshirt/:id',(req,res) =>{
    const {id} = req.params
    const {logo} = req.body

    if(!logo){
        res.status(418).send({message:'we need a logo!'})
        }
        res.send({
            tshirt:`👕 with your ${logo} and ID of ${id}`,
        })
        })

        
app.use((req, res) => {
  res.status(404).send({message: 'Not found'});
});


 app.listen(
          port,
          () =>console.log(`It's alive on http://localhost:${port}`)
      )        


