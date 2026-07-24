const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Replace color variables for a Medical White & Mint theme
css = css.replace(/--bg-color:.*?;/, '--bg-color: #f4f7f6;');
css = css.replace(/--paper-color:.*?;/, '--paper-color: #ffffff;');
css = css.replace(/--text-primary:.*?;/, '--text-primary: #333333;');
css = css.replace(/--text-light:.*?;/, '--text-light: #666666;');
css = css.replace(/--accent:.*?;/, '--accent: #00b4a2;'); // Mint Green
css = css.replace(/--line:.*?;/, '--line: #e2e8f0;');
css = css.replace(/--border:.*?;/, '--border: #cbd5e1;');

// Add simulator specific colors
const simColors = `
/* Simulator Colors */
.sim-container { margin: 20px 0; padding: 20px; border-radius: 12px; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid var(--border); }
.sim-row { display: flex; gap: 10px; margin-bottom: 15px; }
.sim-input { flex: 1; padding: 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 16px; }
.sim-btn { background: var(--accent); color: #fff; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; }
.sim-result { padding: 15px; border-radius: 8px; margin-top: 15px; display: none; font-weight: bold; }
.sim-result.green { display: block; background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
.sim-result.yellow { display: block; background: #fef08a; color: #854d0e; border: 1px solid #fde047; }
.sim-result.red { display: block; background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }

/* Grid for Checkup Items */
.checkup-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; margin-top: 20px; }
.checkup-card { background: #fff; padding: 20px; border-radius: 8px; border: 1px solid var(--border); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.checkup-card:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,180,162,0.15); border-color: var(--accent); }
.checkup-card h3 { margin: 0 0 10px 0; color: var(--accent); font-size: 18px; }
.checkup-card .part { font-size: 12px; background: #e0f2f1; color: #00796b; padding: 3px 8px; border-radius: 20px; display: inline-block; margin-bottom: 10px; }

/* Modal for detail view */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 2000; display: none; justify-content: center; align-items: center; }
.modal-overlay.active { display: flex; }
.modal-content { background: #fff; width: 90%; max-width: 600px; padding: 30px; border-radius: 12px; position: relative; max-height: 80vh; overflow-y: auto; }
.modal-close { position: absolute; top: 15px; right: 15px; font-size: 24px; cursor: pointer; background: none; border: none; color: #666; }
`;

if (!css.includes('.sim-container')) {
    css += '\n' + simColors;
}

fs.writeFileSync('style.css', css, 'utf8');
console.log('Updated style.css for Mint/White Medical theme.');
