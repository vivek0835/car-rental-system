var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

   const app = express()

   app.use(bodyParser.json())
   app.use(express.static('public'))
   app.use(bodyParser.urlencoded({
       extended:true
   }))

   mongoose.connect('mongodb://127.0.0.1:27017/BOOKS',{
       useNewUrlParser: true,
       useUnifiedTopology: true
   });

   var db = mongoose.connection;

   db.on('error',()=>console.log("Error in Connecting to Database"));
   db.once('open',()=>console.log("Connected to Database"))

   app.post("/sign_up",(req,res)=>{
       var name = req.body.name;
       var email = req.body.email;
       var phno = req.body.phno;
       var password = req.body.password;

       var data = {
           "name": name,
           "email" : email,
           "phno": phno,
           "password" : password
       }

       db.collection('users').insertOne(data,(err,collection)=>{
           if(err){
               throw err;
           }
           console.log("Record Inserted Successfully");
       });

       return res.redirect('car.html')

   })


   app.post("/MY_BOOKING",(req,res)=>{
       var name = req.body.name;
       var email = req.body.email;
       var phno = req.body.phno;
       var pickup = req.body.pickup;
       var dropoff = req.body.dropoff;
       var date = req.body.date;
       var car = req.body.car;

       var data = {
           "name": name,
           "email": email,
           "phno": phno,
           "pickup": pickup,
           "dropoff": dropoff,
           "date": date,
           "car": car
       };

       db.collection('booking').insertOne(data,(err,collection)=>{
           if(err){
               throw err;
           }
           console.log("Record Inserted Successfully");
       });

       return res.redirect('thanks.html')

   })

   app.get("/",(req,res)=>{
       res.set({
           "Allow-access-Allow-Origin": '*'
       })
       return res.redirect('index.html');
   }).listen(3001);

console.log("Listening on PORT 3000");


var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

// const app = express() // Remove this line

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/BOOKS',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var username = req.body.username;
    // var email = req.body.email;
    // var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "username": username,
        // "email" : email,
        // "phno": phno,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('Car.html')

})


app.post("/My_Booking",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var pickup = req.body.pickup;
    var dropoff = req.body.dropoff;
    var date = req.body.date;
    // var car = req.body.car;

    var data = {
        "name": name,
        "email": email,
        "phno": phno,
        "pickup": pickup,
        "dropoff": dropoff,
        "date": date,
        // "car": car
    };

    db.collection('booking').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('thanks.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'Car.html'));
      });
      
    return res.redirect('index.html');
}).listen(3001);


console.log("Listening on PORT 3001");