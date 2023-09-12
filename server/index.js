





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SalesModel = require('./models/Sales');
const UserModel =require ("./models/User")
const userRoutes = require('./api/users');
const leadRoutes = require("./api/lead")
const LeadModel = require('./models/Lead')
const FollowModel = require('./models/Follow')
const followRoutes = require("./api/follow")
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/follow', followRoutes);
app.use('/api/lead', leadRoutes);

mongoose.connect("mongodb+srv://Anjali:Anjalivaid1999%40@cluster0.ybufs7a.mongodb.net/Sales?retryWrites=true&w=majority")
app.post('/login',(req,res)=>{
  const {email,password}= req.body
  SalesModel.findOne({email:email})
  .then (user => { 
    if (user){
       if(user.password ===password){
        res.json("Sucess")
       }else{
        res.json("the password is incorrect")
       }
    }else{
      res.json("No record existed")
    }

  })
})


app.use('/api/users', userRoutes);

app.put('/api/users/update/:userId', (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;

  UserModel.findByIdAndUpdate(userId, updatedData, { new: true })
  .then((updatedUser) => {
    res.json(updatedUser);
  })
  .catch((error) => {
    console.error('Error updating user details:', error);
    res.status(500).json({ error: 'Error updating user details' });
  });
});


app.post('/api/users', (req, res) => {
  const userData = req.body;
  UserModel.create(userData)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

// List Users route using UserModel
app.get('/api/users', (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users' });
    });
});

app.post('/api/lead', (req, res) => {
  const leadData = req.body;

  // Validate the data
  if (!leadData.FirstName || !leadData.LastName/*  && !leadData.PhoneNumbers */) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  LeadModel.create(leadData)
    .then((lead) => {
      res.json(lead);
    })
    .catch((error) => {
      console.error('Error creating lead:', error);
      res.status(500).json({ error: 'Error creating lead' });
    });
});



app.get('/api/lead', (req, res) => {
  LeadModel.find({})
    .then((lead) => {
      res.json(lead);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users' });
    });
});



app.post('/api/follow', (req, res) =>{
  const followData = req.body
  FollowModel.create(followData)
  .then((follow) => {
    res.json(follow);
  })
  .catch((error) => {
    console.error('Error creating follow-up:', error);
    res.status(500).json({ error: 'Error creating follow-up' });
  });
})
 


app.get('/api/follow', (req, res) => {
  FollowModel.find({})
    .then((follows) => {
      res.json(follows);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users' });
    });
});



app.post('/register',(req,res)=>{
 SalesModel.create(req.body)
.then(Sales => res.json(Sales))
.catch(err=>res.json(err))
})



app.listen(3001,()=>{
  console.log("server is running")
 })
