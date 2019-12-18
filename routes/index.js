var express = require('express');
var router = express.Router();

const firstPayment = 396379.80; // ПЛ1
const S = 78.6; // S

var total; // Інв.1
var payed = firstPayment; // С1
var price1m2 = 16810; // Б
var k; // K1
var unpayed; // К
var s1; // S1
var n = 0; // n
var course; // КУРСn

function calcTotal() {
  return payed + calcP();
}

function calcP() {
    return calcUnPayed() * price1m2 * calcK();
}

function calcK() {
  return 1.0;
}

// К
function calcUnPayed() {
    return S - (calcS1());
}

// S1
function calcS1() {
    return firstPayment / price1m2;
}

function calc

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: calcUnPayed() });
});

module.exports = router;
