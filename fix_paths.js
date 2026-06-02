import fs from 'fs';

// 1. Fix assets.js
const assetsPath = 'src/Experience/Utils/assets.js';
let assetsContent = fs.readFileSync(assetsPath, 'utf8');

// Replace all occurrences of path: "/..." with path: "..."
// E.g. path: "/models/Room.glb" -> path: "models/Room.glb"
assetsContent = assetsContent.replace(/path:\s*"\/([^"]*)"/g, 'path: "$1"');
fs.writeFileSync(assetsPath, assetsContent, 'utf8');
console.log('Fixed assets.js paths successfully!');

// 2. Fix index.html
const htmlPath = 'index.html';
let htmlContent = fs.readFileSync(htmlPath, 'utf8');
htmlContent = htmlContent.replace(/src="\/images\/S\.jpeg"/g, 'src="images/S.jpeg"');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('Fixed index.html paths successfully!');

// 3. Fix Raycaster.js (music src)
const raycasterPath = 'src/Experience/Raycaster.js';
let raycasterContent = fs.readFileSync(raycasterPath, 'utf8');
raycasterContent = raycasterContent.replace(/src:\s*\["\/audio\/music\/Married_Life\.mp3"\]/g, 'src: ["audio/music/Married_Life.mp3"]');
fs.writeFileSync(raycasterPath, raycasterContent, 'utf8');
console.log('Fixed Raycaster.js paths successfully!');
