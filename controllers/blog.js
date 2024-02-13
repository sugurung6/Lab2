// blogController.js

exports.getBlogList = (req, res) => {
  res.render('blog-list', {
    title: 'Blog List',
    message: 'This page is under construction.'
  });
};

exports.getBlogAdd = (req, res) => {
  res.render('blog-add', {
    title: 'Blog Add',
    message: 'This page is under construction.'
  });
};
