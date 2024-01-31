const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile(`username.txt`, (err, data) => {
        if (err) {
            console.log(err);
            data = 'No Chat exist!'
        }
        res.send(`${data}
            <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
                <input id="message" name="message" type="text" placeholder="message">
                <input type="hidden" name="username" id="username"> 
                <br>
                <button type="submit">Send</button>
            </form>
        `)
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    fs.writeFile('username.txt', `${req.body.username}: ${req.body.message} `, {flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect('/');
    });
});

module.exports = router;