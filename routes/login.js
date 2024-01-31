const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
            <form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
                <input id="username" name="username" type="text" placeholder="username">
                <br>
                <button type="submit">Login</button>
            </form>
        `)
})

module.exports = router