'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = Number(req.params.r);

  if (Number.isNaN(r) || r < 0) {
    return res.status(400).json({ error: 'Invalid radius' });
  }

  const result = {
    area: (Math.PI * r * r).toFixed(2),
    circumference: (2 * Math.PI * r).toFixed(2),
  };

  res.json(result);
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  if (Number.isNaN(width) || Number.isNaN(height) || width <= 0 || height <= 0) {
    return res.status(400).json({ error: 'Invalid width or height' });
  }

  res.json({
    area: width * height,
    perimeter: 2 * (width + height),
  });
});

app.get('/math/power/:base/:exponent', (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  if (Number.isNaN(base) || Number.isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const response = {
    result: Math.pow(base, exponent),
  };

  if (req.query.root === 'true') {
    response.root = Math.sqrt(base);
  }

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});