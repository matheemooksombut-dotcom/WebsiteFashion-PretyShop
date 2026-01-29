const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT =  3000||process.env.PORT;
 

app.use(bodyparser.json());
app.use(cors());





// TestRout
app.get( "/" , (req , res)=>{
    res.send('hello')
})






// running
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}  `)
})
