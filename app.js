const express = require('express');
const path = require('path');
const taskRouter = require("./routes/tasks");

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON requests
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});