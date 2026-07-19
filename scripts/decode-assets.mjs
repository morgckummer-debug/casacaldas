// Decodes base64-text WebP files back to binary.
// Necessary because the git proxy blocks large binary pushes,
// causing images to be stored as base64 text in the repo.
// This runs before dev/build so Vite always gets proper binary.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const assetsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/assets');

for (const file of fs.readdirSync(assetsDir)) {
  const filepath = path.join(assetsDir, file);
  const content = fs.readFileSync(filepath);

  if (file.endsWith('.webp')) {
    // Binary WebP starts with "RIFF" (0x52 0x49 0x46 0x46)
    // Base64-encoded WebP starts with "UklG"
    if (content[0] === 0x55 && content[1] === 0x6b) {
      const binary = Buffer.from(content.toString('utf8').trim(), 'base64');
      fs.writeFileSync(filepath, binary);
      console.log(`decode-assets: ${file} (${content.length}B text → ${binary.length}B binary)`);
    }
  } else if (file.endsWith('.png')) {
    // Binary PNG starts with 0x89 0x50 ("‰P")
    // Base64-encoded PNG starts with "iVBO"
    if (content[0] === 0x69 && content[1] === 0x56) {
      const binary = Buffer.from(content.toString('utf8').trim(), 'base64');
      fs.writeFileSync(filepath, binary);
      console.log(`decode-assets: ${file} (${content.length}B text → ${binary.length}B binary)`);
    }
  }
}
