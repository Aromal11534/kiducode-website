import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from the Astro dist folder
app.use(express.static(join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
