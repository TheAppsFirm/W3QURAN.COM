#!/usr/bin/env node
/**
 * generate-og-image.js
 * Generates a 1200x630 OG image for social sharing previews.
 * Also generates apple-touch-icon (180x180).
 *
 * Run: node scripts/generate-og-image.js
 * Requires: npm install canvas (devDependency)
 */

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');

// ============================================================
// OG IMAGE (1200 x 630)
// ============================================================
function generateOGImage() {
  const W = 1200, H = 630;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Background gradient (deep indigo to purple)
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0f172a');
  bg.addColorStop(0.4, '#1e1b4b');
  bg.addColorStop(0.7, '#581c87');
  bg.addColorStop(1, '#0f172a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Subtle geometric pattern (Seed of Life circles)
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = 1;
  const cx = W / 2, cy = H / 2;
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const px = cx + Math.cos(angle) * 80;
    const py = cy - 40 + Math.sin(angle) * 80;
    ctx.beginPath();
    ctx.arc(px, py, 80, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(cx, cy - 40, 80, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Decorative stars
  ctx.globalAlpha = 0.15;
  const stars = [
    [150, 100, 2], [300, 80, 1.5], [900, 120, 2.5], [1050, 90, 1.8],
    [200, 500, 1.2], [1000, 480, 1.5], [500, 50, 1.8], [700, 560, 1.3],
    [80, 300, 1], [1120, 350, 1.2], [400, 530, 1], [800, 70, 2],
  ];
  for (const [sx, sy, sr] of stars) {
    ctx.fillStyle = '#e0e7ff';
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Mihrab arch (central icon)
  const archX = W / 2;
  const archY = 220;
  const archW = 90;
  const archH = 130;

  // Outer glow
  const glowGrad = ctx.createRadialGradient(archX, archY, 20, archX, archY, 160);
  glowGrad.addColorStop(0, 'rgba(139, 92, 246, 0.25)');
  glowGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
  glowGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(archX - 180, archY - 180, 360, 360);

  // Arch shape
  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(archX - archW, archY + archH);
  ctx.lineTo(archX - archW, archY);
  ctx.arc(archX, archY, archW, Math.PI, 0, false);
  ctx.lineTo(archX + archW, archY + archH);
  ctx.stroke();

  // Inner arch
  const iW = 65, iH = 95;
  ctx.strokeStyle = '#c4b5fd';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(archX - iW, archY + iH);
  ctx.lineTo(archX - iW, archY + 10);
  ctx.arc(archX, archY + 10, iW, Math.PI, 0, false);
  ctx.lineTo(archX + iW, archY + iH);
  ctx.stroke();

  // Light beam from arch center
  const beam = ctx.createLinearGradient(archX, archY - 20, archX, archY + archH);
  beam.addColorStop(0, 'rgba(196, 181, 253, 0.3)');
  beam.addColorStop(1, 'rgba(196, 181, 253, 0)');
  ctx.fillStyle = beam;
  ctx.beginPath();
  ctx.moveTo(archX - 15, archY + 10);
  ctx.lineTo(archX + 15, archY + 10);
  ctx.lineTo(archX + 30, archY + archH);
  ctx.lineTo(archX - 30, archY + archH);
  ctx.closePath();
  ctx.fill();

  // Star at apex
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.arc(archX, archY - archW + 5, 4, 0, Math.PI * 2);
  ctx.fill();
  // Star glow
  const starGlow = ctx.createRadialGradient(archX, archY - archW + 5, 1, archX, archY - archW + 5, 15);
  starGlow.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
  starGlow.addColorStop(1, 'rgba(251, 191, 36, 0)');
  ctx.fillStyle = starGlow;
  ctx.fillRect(archX - 20, archY - archW - 15, 40, 40);

  // "w3Quran" title
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // w3 part
  ctx.font = 'bold 72px "Helvetica Neue", Arial, sans-serif';
  const titleY = 430;
  const textGrad = ctx.createLinearGradient(archX - 200, titleY, archX + 200, titleY);
  textGrad.addColorStop(0, '#a78bfa');
  textGrad.addColorStop(0.5, '#e0e7ff');
  textGrad.addColorStop(1, '#a78bfa');
  ctx.fillStyle = textGrad;
  ctx.fillText('w3Quran', archX, titleY);

  // Tagline
  ctx.font = '28px "Helvetica Neue", Arial, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Interactive Quran Explorer', archX, titleY + 55);

  // Feature pills
  const features = ['114 Surahs', 'Audio', 'Word-by-Word', 'Kids Mode', 'Daily Verse'];
  const pillY = titleY + 110;
  const pillSpacing = 190;
  const startX = archX - ((features.length - 1) * pillSpacing) / 2;

  ctx.font = '16px "Helvetica Neue", Arial, sans-serif';
  features.forEach((feat, i) => {
    const px = startX + i * pillSpacing;

    // Pill background
    const pillW = ctx.measureText(feat).width + 24;
    ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
    roundRect(ctx, px - pillW / 2, pillY - 14, pillW, 28, 14);
    ctx.fill();

    // Pill border
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
    ctx.lineWidth = 1;
    roundRect(ctx, px - pillW / 2, pillY - 14, pillW, 28, 14);
    ctx.stroke();

    // Pill text
    ctx.fillStyle = '#c4b5fd';
    ctx.fillText(feat, px, pillY);
  });

  // Bottom accent line
  const lineGrad = ctx.createLinearGradient(0, H - 4, W, H - 4);
  lineGrad.addColorStop(0, 'rgba(139, 92, 246, 0)');
  lineGrad.addColorStop(0.3, 'rgba(139, 92, 246, 0.6)');
  lineGrad.addColorStop(0.5, 'rgba(167, 139, 250, 0.8)');
  lineGrad.addColorStop(0.7, 'rgba(139, 92, 246, 0.6)');
  lineGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
  ctx.fillStyle = lineGrad;
  ctx.fillRect(0, H - 4, W, 4);

  // Domain watermark
  ctx.font = '14px "Helvetica Neue", Arial, sans-serif';
  ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
  ctx.textAlign = 'right';
  ctx.fillText('w3quran.com', W - 30, H - 20);

  return canvas;
}

// Helper: rounded rectangle
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ============================================================
// APPLE TOUCH ICON (180 x 180)
// ============================================================
function generateAppleTouchIcon() {
  const S = 180;
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');

  // Background
  const bg = ctx.createLinearGradient(0, 0, S, S);
  bg.addColorStop(0, '#10b981');
  bg.addColorStop(0.5, '#06b6d4');
  bg.addColorStop(1, '#8b5cf6');
  ctx.fillStyle = bg;

  // Rounded square
  const r = 36;
  roundRect(ctx, 0, 0, S, S, r);
  ctx.fill();

  // Mihrab arch
  const cx = S / 2, cy = 70;
  const aw = 35, ah = 50;

  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - aw, cy + ah);
  ctx.lineTo(cx - aw, cy);
  ctx.arc(cx, cy, aw, Math.PI, 0, false);
  ctx.lineTo(cx + aw, cy + ah);
  ctx.stroke();

  // Light dot
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.beginPath();
  ctx.arc(cx, cy - aw + 8, 3, 0, Math.PI * 2);
  ctx.fill();

  // "w3" text
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 42px "Helvetica Neue", Arial, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('w3', cx, 148);

  return canvas;
}

// ============================================================
// SAVE FILES
// ============================================================
const ogCanvas = generateOGImage();
const ogBuffer = ogCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(PUBLIC, 'og-image.png'), ogBuffer);
console.log('Created: public/og-image.png (1200x630)');

const iconCanvas = generateAppleTouchIcon();
const iconBuffer = iconCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), iconBuffer);
console.log('Created: public/apple-touch-icon.png (180x180)');
