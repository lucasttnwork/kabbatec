const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from kabbatec-slides/dist
app.use('/estrategia', serveStatic(path.join(__dirname, 'kabbatec-slides', 'dist'), {
  index: ['index.html']
}));

// Serve images globally to support both /images/* and /estrategia/images/* paths
app.use('/images', serveStatic(path.join(__dirname, 'kabbatec-slides', 'dist', 'images')));

// Fallback to serve index.html for SPA routing on /estrategia route
app.get('/estrategia/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'kabbatec-slides', 'dist', 'index.html'));
});

// Root route redirect to estrategia
app.get('/', (req, res) => {
  res.redirect('/estrategia');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Proposta Kabatec - Slides Estratégicos' });
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`📊 Slides disponíveis em: http://localhost:${port}/estrategia`);
});
