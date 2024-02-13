const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const blogController = require('./controllers/blogController');

app.set('view engine', 'ejs');

// Routes
app.get('/', homeController.getHome);
app.get('/blog/list', blogController.getBlogList);
app.get('/blog/add', blogController.getBlogAdd);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
