





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SalesModel = require('./models/Sales');
const UserModel =require ("./models/User")
const userRoutes = require('./api/users');
const leadRoutes = require("./api/lead")
const LeadModel = require('./models/Lead')
const FollowModel = require('./models/Follow')
const followRoutes = require("./api/follow");
const TimesheetModel = require('./models/Timesheet');
const timesheetRoutes = require('./api/timesheet')
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


app.use(express.json())
app.use(cors())
app.use('/api/follow', followRoutes);
app.use('/api/lead', leadRoutes);
app.use('/api/timesheet',timesheetRoutes);
mongoose.connect("mongodb+srv://Anjali:Anjalivaid1999%40@cluster0.ybufs7a.mongodb.net/Sales?retryWrites=true&w=majority",{useNewUrlParser: true,
useUnifiedTopology: true})
// app.post('/login',async(req,res)=>{
//   const {email,password}= req.body
//   SalesModel.findOne({email:email})
//   .then (user => {          
//     if (user){
//        if(user.password ===password){
//         res.json("Sucess")
//        }else{
  
//         res.json("the password is incorrect")
//        }
//     }else{
//       res.json("No record existed")
//     }

//   })
// })

// ... (other imports)

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const sales = await SalesModel.findOne({ email });
    if (!sales) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, sales.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ salesId: sales._id }, 'your_secret_key'); // Replace with your own secret key
    sales.tokens = sales.tokens.concat({ token });
    await sales.save();

    res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/dashboard', (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your own secret key

    // Here, you can fetch the user based on the decoded token
    // and perform actions related to the dashboard.

    res.json({ success: true, message: 'Access to dashboard granted' });
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
});

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
  const { name, email } = req.body;
  const newUser = { id: totalUsers++, name, email };
  users.push(newUser);
  const pageSize = 10; // Assuming 10 users per page
  const newPage = Math.ceil(totalUsers / pageSize);
  const userData = req.body;
  totalUsers++;
  UserModel.create(userData)
  
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });

  res.status(201).json({ message: 'User added successfully', page: newPage });
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
  LeadModel.find({ })
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

app.post('/api/timesheet', (req, res) => {
  console.log('Received Timesheet Request:', req.body); 
  const timesheetData = req.body;
  timesheetData._id = new mongoose.Types.ObjectId(); 
  TimesheetModel.create(timesheetData)
  
    .then((timesheet) => {
      res.json(timesheet);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

// List Users route using UserModel
app.get('/api/timesheet', (req, res) => {
  TimesheetModel.find({})
    .then((timesheet) => {
      res.json(timesheet);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Error fetching users' });
    });
});

// Example route for handling logout

app.post('/logout', (req, res) => {
  const { username } = req.body;
  if (loggedInUsers.has(username)) {
    loggedInUsers.delete(username);
    res.json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ message: 'User is not logged in' });
  }
});



app.post('/register',(req,res)=>{
 SalesModel.create(req.body)
.then(Sales => res.json(Sales))
.catch(err=>res.json(err))
})

app.post('/search', (req, res) => {
  const { query } = req.body;
  // Implement your search logic here
  console.log('Search query:', query);
  res.json({ message: 'Search completed', query });
});


app.listen(3001,()=>{
  console.log("server is running")
 })
 let totalUsers = 0; // Variable to track the total number of users

 