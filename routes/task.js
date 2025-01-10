const express = require('express');
const router = express.Router()

router.get('/tasks', (req, res)=>{
    res.send('Hello from Tasks')
})

router.post('/', (req, res)=>{
    
})

module.exports = router;