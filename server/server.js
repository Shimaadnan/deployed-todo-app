const PORT=process.env.PORT ?? 8000
const express=require('express')
const cors=require('cors')
const app=express()
const pool=require('./db')
app.use(cors())


app.get('/',(req,res)=>res.send('hi'))
app.get('/todos',async(req,res)=>{
    console.log(req);
    try{
 const todos=await pool.query('SELECT * FROM todos')
 res.json(todos.rows)

    }
catch(err){
 console.error(err);
}
})
// get all the todos
app.get('/todos/:userEmail',async(req,res)=>{
    // console.log(req);
    const {userEmail}=req.params;
    
    try{
         const todos=await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail])
         res.json(todos.rows)
    }
    catch(error){
                   console.error(error);
    }
})

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))