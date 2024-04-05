// Import necessary libraries
const express = require('express');
const fs = require('fs').promises; 

const app = express();

async function fetchDataFromFile(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to read file:', error);
    throw new Error('Failed to fetch data');
  }
}

app.get('/info', async (req, res) => {
  try {
    const data = await fetchDataFromFile('info.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from info.json' });
  }
});

app.get('/data', async (req, res) => {
  try {
const data = await fetchDataFromFile('/my-dashboard/src/api/data.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from data.json' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
