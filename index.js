const express = require('express');
const app = express();
const PORT = 4000;
const routes = require('./routes/route')
// const produce = require("./producer/producer")
// const consume = require("./consumer/consumer")

app.use(express.json());
app.use('/',routes)



app.listen(PORT,()=>{
    console.log("Server is running on port %o...Please check",PORT);
})

// ***********************************************************************************




// produce().catch((err) => {
// 	console.error("error in producer: ", err)
// })

// start the consumer, and log any errors
// consume().catch((err) => {
// 	console.error("error in consumer: ", err)
// })