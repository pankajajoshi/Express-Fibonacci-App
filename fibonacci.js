const express = require('express');
const router = express.Router();

// Function to check if a number is a perfect square
function isPerfectSquare(number) {
  const squareRoot = Math.sqrt(number);
  return squareRoot === Math.floor(squareRoot);
}

// Function to check if a number is a Fibonacci number
function isFibonacciNumber(number) {
  return (
    isPerfectSquare(5 * Math.pow(number, 2) + 4) ||
    isPerfectSquare(5 * Math.pow(number, 2) - 4)
  );
}

// Route to check if a number is a Fibonacci number
router.get('/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isFibonacciNumber(number)) {
    res.send('<h1>Very good. It is Fibonacci.</h1>');
  } else {
    res.send('<h1>I can tell this is not a Fibonacci number.</h1>');
  }
});

module.exports = router;