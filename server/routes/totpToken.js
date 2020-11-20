const express = require("express");
const router  = express.Router();
const totp = require('totp-generator');

router.get("/", async (req, res) => {
    const token = totp('JBSWY3DPEHPK3PXP', {algorithm: 'SHA-512'}, {period: 15});
    console.log("token: "+ token + " - " + new Date());
    res.status(200).json({
        message: token + " " + new Date()
    });
});
module.exports = router ;
//var token = totp('JBSWY3DPEHPK3PXP', {digits: 8});
//console.log(token); // prints an 8-digit token

//var token = totp('JBSWY3DPEHPK3PXP', {algorithm: 'SHA-512'});
//console.log(token); // prints a token created using a different algorithm

//var token = totp('JBSWY3DPEHPK3PXP', {period: 60});
//console.log(token); // prints a token using a 60-second epoch interval

//var token = totp('JBSWY3DPEHPK3PXP', {digits: 8, algorithm: 'SHA-512', period: 60});
//console.log(token); // prints a token using all custom settings combined