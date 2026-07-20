const fs = require('fs');
let css = fs.readFileSync('social-4-1/style.css', 'utf8');

const additionalCss = \
/* -------------------------------- */
/* SVG 꺾은선그래프 스타일 보완 */
/* -------------------------------- */

.theory-card {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border-top: 4px solid #3498DB;
}

.graph-compare-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-top: 15px;
}

.graph-box {
    background: #F8F9F9;
    border: 1px solid #E5E8E8;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
}

.graph-box.mini-graph {
    flex: 1;
    min-width: 120px;
    padding: 10px;
}

.concept-note {
    background: #E8F8F5;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #1ABC9C;
    margin-top: 15px;
    color: #2C3E50;
}

.concept-note.wave-note {
    background: #FDFEFE;
    border-left: 4px solid #3498DB;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.theory-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    font-size: 0.9rem;
}
.theory-table th, .theory-table td {
    border: 1px solid #BDC3C7;
    padding: 8px;
    text-align: center;
}
.theory-table th {
    background-color: #ECF0F1;
    font-weight: bold;
}

.step-list {
    padding-left: 20px;
    color: #34495E;
    line-height: 1.6;
}
.step-list li {
    margin-bottom: 8px;
}

.flow-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    background: #F4F6F7;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
}

.flow-step {
    background: #3498DB;
    color: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.95rem;
}

.flow-arrow {
    color: #7F8C8D;
    font-size: 1.2rem;
    font-weight: bold;
}
\;

if (!css.includes('.theory-card')) {
    fs.appendFileSync('social-4-1/style.css', additionalCss, 'utf8');
    console.log("Added theory SVG CSS to style.css");
} else {
    console.log("CSS already has .theory-card");
}
