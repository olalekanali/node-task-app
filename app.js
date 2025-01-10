const express = require('express');
const taskRouter = require("./routes/task");

const app = express();

// middleware
app.use('/tasks', taskRouterRouter)

app.get('/', (req, res)=>{
    res.send('ToDo List Application');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });