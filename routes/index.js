var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lless\' C++ reference' });
});

/* GET part 1 */
router.get('/part1', function(req, res){
  res.render('part1', { title: 'Part 1' });
});

module.exports = router;
