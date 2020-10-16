const express = require("express");
const router  = express.Router();

var users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20},
	{id: 3, name: "User1", email: "user1.2@gmail.com", age: 25}
];

router .get("/", async (req, res) => {
	res.status(200).json({
		message: 'Welcome to User',
		obj: JSON.stringify(users)
    });
});

router .post("/user", async (req, res) => {});
router .get("/user/:id", async  (req, res) => {});
router .put("/user/:id", async  (req, res) => {});


module.exports = router ;