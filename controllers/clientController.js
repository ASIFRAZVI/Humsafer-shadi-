const client=require('../models/client')
// expenseController.js

// Create a new expense
exports.createclient = async (req, res) => {
  try {
    const { name ,email,phnumber,religion,age,image, gender } = req.body;
    const client1= new client({  name ,email,phnumber,religion,age,image, gender });
    await client1.save();
    res.redirect("/successfull")
  }catch (error) {
   // console.log(error)
    res.render('error1')
  }
};

// Get all expenses
exports.getclients = async (req, res) => {
  try {
   const clients = await client.find();
    res.json(clients);
  } catch (error) {
    res.render('error1')
  }
};

// // Delete an expense
// exports.deleteexpence = async (req, res) => {
//     try {
//       const expenceId = req.params.id;
//       const deletedexpence = await expence.findByIdAndDelete(expenceId);
//       if (!deletedexpence) {
//         return res.status(404).json({ error: 'Expense not found.' });
//       }
//       //res.render('homepage')
//     } catch (error) {
//       console.log(error);
  
//     }
//   };
  

