const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT =  3000||process.env.PORT;
 

app.use(bodyparser.json());
app.use(cors());



// Rout
// Show Case
app.get( "/" , (req , res)=>{
    res.send('hello')
})


// Updated 
app.put("/" , (req , res) =>{

})

//  Update : ID
app.patch("/" , (req , res) =>{

})


// Deleate
app.delete  ("/" , (req , res) =>{

})







// running
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}  `)
})
