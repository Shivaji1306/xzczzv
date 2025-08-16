const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Simple healthcheck
app.get('/_health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
