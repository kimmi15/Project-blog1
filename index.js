const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const  mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect("mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/kimmi-project1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});