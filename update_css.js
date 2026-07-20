const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const newCSS = `

/* Hamburger Menu & Drawer */
.hamburger-btn {
    display: none;
    font-size: 28px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--accent);
    padding: 5px;
}

.drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.drawer-overlay.active {
    opacity: 1;
    visibility: visible;
}

.drawer-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100vh;
    background: var(--paper-color);
    z-index: 1001;
    transition: right 0.3s ease;
    padding: 30px 20px;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.drawer-menu.active {
    right: 0;
}

.drawer-close {
    font-size: 28px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--accent);
    float: right;
    margin-bottom: 20px;
}

.drawer-nav {
    clear: both;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.drawer-nav h3 {
    font-size: 14px;
    color: var(--text-light);
    margin-top: 20px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.drawer-nav a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 500;
    padding: 8px 10px;
    border-radius: 6px;
    transition: background 0.2s;
}

.drawer-nav a:hover, .drawer-nav a.active {
    background: var(--line);
    color: var(--accent);
    font-weight: 700;
}

@media (max-width: 900px) {
    .nav-links, .mobile-nav {
        display: none !important;
    }
    .hamburger-btn {
        display: block;
    }
}
@media (min-width: 901px) {
    .hamburger-btn {
        display: block; /* We'll use hamburger on PC too as requested */
    }
    .nav-links, .mobile-nav {
        display: none !important;
    }
}

/* Replies (Nested Comments) */
.reply-btn {
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 13px;
    cursor: pointer;
    margin-top: 10px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.reply-btn:hover {
    color: var(--accent);
}

.reply-box {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px dashed var(--border);
    display: none;
}

.reply-box.active {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.nested-comments {
    margin-top: 15px;
    padding-left: 20px;
    border-left: 2px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Dictionary Search */
.search-container {
    margin-bottom: 30px;
    position: relative;
}

.search-input {
    width: 100%;
    padding: 15px 20px;
    font-size: 18px;
    border: 2px solid var(--accent);
    border-radius: 30px;
    outline: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    transition: box-shadow 0.2s;
}

.search-input:focus {
    box-shadow: 0 6px 15px rgba(15, 23, 42, 0.15);
}

.search-results {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.dict-card {
    background: var(--paper-color);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.dict-card h3 {
    margin-top: 0;
    color: var(--accent);
    font-size: 20px;
    border-bottom: 1px solid var(--line);
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.dict-card p {
    margin-bottom: 0;
    color: var(--text-primary);
}
`;

if (!css.includes('.hamburger-btn')) {
    fs.writeFileSync('style.css', css + newCSS, 'utf8');
    console.log('Appended hamburger and dictionary CSS.');
} else {
    console.log('CSS already contains hamburger styles.');
}
