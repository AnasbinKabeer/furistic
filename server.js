const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hostname = '0.0.0.0';
const port = 3000;



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




// Connect to MongoDB
mongoose.connect("mongodb+srv://AnasKabeer:anas123@cluster0.odpuvfa.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Define schema and model for the data
const Schema = mongoose.Schema;
const DataSchema = new Schema({
  to_day: String,
  to_date: String,
  to_month: String,
  to_year: String,

  bs1_Per1: String,
  bs1_Per2: String,
  bs1_Per3: String,
  bs1_Per4: String,
  bs1_Per5: String,
  bs1_Per6: String,
  bs1_Per7: String,
  bs1_Per8: String,

  bs2_Per1: String,
  bs2_Per2: String,
  bs2_Per3: String,
  bs2_Per4: String,
  bs2_Per5: String,
  bs2_Per6: String,
  bs2_Per7: String,
  bs2_Per8: String,

  bs3_Per1: String,
  bs3_Per2: String,
  bs3_Per3: String,
  bs3_Per4: String,
  bs3_Per5: String,
  bs3_Per6: String,
  bs3_Per7: String,
  bs3_Per8: String,

  bs4_Per1: String,
  bs4_Per2: String,
  bs4_Per3: String,
  bs4_Per4: String,
  bs4_Per5: String,
  bs4_Per6: String,
  bs4_Per7: String,
  bs4_Per8: String,

  bs5a_Per1: String,
  bs5a_Per2: String,
  bs5a_Per3: String,
  bs5a_Per4: String,
  bs5a_Per5: String,
  bs5a_Per6: String,
  bs5a_Per7: String,
  bs5a_Per8: String,

  bs5b_Per1: String,
  bs5b_Per2: String,
  bs5b_Per3: String,
  bs5b_Per4: String,
  bs5b_Per5: String,
  bs5b_Per6: String,
  bs5b_Per7: String,
  bs5b_Per8: String,




  name: String,
  place: String,
  dropdown1: String,
  age: Number
});
const DataModel = mongoose.model('Data', DataSchema);



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/mg-admin', function (req, res) {
    res.sendFile(__dirname + '/admin.html');
  });
  app.get('/new', function (req, res) {
    res.sendFile(__dirname + '/newindex.html');
  });

  app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === 'mg123') {
      res.redirect('/mg-admin');
    } else {
      res.send('Invalid password');
    }
  });
  
// Handle form submission
app.post('/submit', function (req, res) {
    const data = new DataModel({
  
      to_date: req.body.to_date,
      to_month: req.body.to_month,
      to_year: req.body.to_year,
      to_day: req.body.to_day,
      
      bs1_Per1: req.body.bs1_Per1,
      bs1_Per2: req.body.bs1_Per2,
      bs1_Per3: req.body.bs1_Per3,
      bs1_Per4: req.body.bs1_Per4,
      bs1_Per5: req.body.bs1_Per5,
      bs1_Per6: req.body.bs1_Per6,
      bs1_Per7: req.body.bs1_Per7,
      bs1_Per8: req.body.bs1_Per8,
  
      bs2_Per1: req.body.bs2_Per1,
      bs2_Per2: req.body.bs2_Per2,
      bs2_Per3: req.body.bs2_Per3,
      bs2_Per4: req.body.bs2_Per4,
      bs2_Per5: req.body.bs2_Per5,
      bs2_Per6: req.body.bs2_Per6,
      bs2_Per7: req.body.bs2_Per7,
      bs2_Per8: req.body.bs2_Per8,
      
      bs3_Per1: req.body.bs3_Per1,
      bs3_Per2: req.body.bs3_Per2,
      bs3_Per3: req.body.bs3_Per3,
      bs3_Per4: req.body.bs3_Per4,
      bs3_Per5: req.body.bs3_Per5,
      bs3_Per6: req.body.bs3_Per6,
      bs3_Per7: req.body.bs3_Per7,
      bs3_Per8: req.body.bs3_Per8,
  
      bs4_Per1: req.body.bs4_Per1,
      bs4_Per2: req.body.bs4_Per2,
      bs4_Per3: req.body.bs4_Per3,
      bs4_Per4: req.body.bs4_Per4,
      bs4_Per5: req.body.bs4_Per5,
      bs4_Per6: req.body.bs4_Per6,
      bs4_Per7: req.body.bs4_Per7,
      bs4_Per8: req.body.bs4_Per8,
  
      bs5a_Per1: req.body.bs5a_Per1,
      bs5a_Per2: req.body.bs5a_Per2,
      bs5a_Per3: req.body.bs5a_Per3,
      bs5a_Per4: req.body.bs5a_Per4,
      bs5a_Per5: req.body.bs5a_Per5,
      bs5a_Per6: req.body.bs5a_Per6,
      bs5a_Per7: req.body.bs5a_Per7,
      bs5a_Per8: req.body.bs5a_Per8,
  
      bs5b_Per1: req.body.bs5b_Per1,
      bs5b_Per2: req.body.bs5b_Per2,
      bs5b_Per3: req.body.bs5b_Per3,
      bs5b_Per4: req.body.bs5b_Per4,
      bs5b_Per5: req.body.bs5b_Per5,
      bs5b_Per6: req.body.bs5b_Per6,
      bs5b_Per7: req.body.bs5b_Per7,
      bs5b_Per8: req.body.bs5b_Per8,
  
  
     
  
    })
  
    data.save()
      .then(() => {
        res.sendFile(__dirname + '/index.html');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error saving data to MongoDB');
      });
  });
  


// Retrieve data from MongoDB
app.get('/data', function (req, res) {
    DataModel.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving data from MongoDB');
      });
  });


// Start the server
app.listen(port, hostname, function () {
  console.log('Server is running on http://localhost:3000');
});
