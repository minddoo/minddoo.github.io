const fs = require('fs');
const path = require('path');

const sites = [
  { name: 'root', path: 'index.html', today: 78, total: 12503 },
  { name: 'wanna-calendar', path: 'wanna-calendar/index.html', today: 61, total: 10532 },
  { name: 'mbti', path: 'mbti/index.html', today: 24, total: 10623 },
  { name: 'health-test', path: 'health-test/index.html', today: 67, total: 20598 },
  { name: 'work-timer', path: 'work-timer/index.html', today: 47, total: 19752 },
  { name: 'hospital-matcher', path: 'hospital-matcher/index.html', today: 98, total: 37562 },
  { name: 'dietary-card', path: 'dietary-card/index.html', today: 39, total: 10035 },
  { name: 'coffee-order', path: 'coffee-order/index.html', today: 82, total: 20076 },
  { name: 'checkup-talk', path: 'checkup-talk/index.html', today: 32, total: 9845 },
  { name: 'calendar', path: 'calendar/index.html', today: 64, total: 4623 },
  { name: 'calculator', path: 'calculator/index.html', today: 27, total: 8645 }
];

function getTemplate(siteName, baseToday, baseTotal) {
  return `
<!-- Visitor Counter -->
<div id="visitor-badge" style="position: fixed; top: 15px; right: 15px; background: rgba(255, 255, 255, 0.95); padding: 5px 10px; border-radius: 8px; font-family: 'Pretendard', sans-serif; font-size: 10px; z-index: 9999; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 1px solid #eaeaea; display: flex; flex-direction: column; align-items: flex-end; pointer-events: none; letter-spacing: 0.2px;">
  <span style="color: #888; font-weight: 600; margin-bottom: 2px; text-transform: uppercase;">Today <span id="v-today" style="color: #ff4757; font-weight: 800; margin-left: 4px;">...</span></span>
  <span style="color: #aaa; font-weight: 500; text-transform: uppercase;">Total <span id="v-total" style="color: #2f3542; font-weight: 700; margin-left: 4px;">...</span></span>
</div>
<script>
(function() {
  const SITE_ID = "minddoo_${siteName}";
  const BASE_TODAY = ${baseToday};
  const BASE_TOTAL = ${baseTotal};
  
  const d = new Date();
  const dateStr = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
  const todayId = SITE_ID + "_" + dateStr;

  function getCount(id, callback) {
    fetch("https://api.counterapi.dev/v1/" + id + "/up")
      .then(res => res.json())
      .then(data => callback(data.count))
      .catch(err => {
        let val = parseInt(localStorage.getItem(id) || "0") + 1;
        localStorage.setItem(id, val);
        callback(val);
      });
  }

  getCount(SITE_ID, function(total) {
    document.getElementById("v-total").innerText = (BASE_TOTAL + total).toLocaleString();
  });
  
  getCount(todayId, function(today) {
    document.getElementById("v-today").innerText = (BASE_TODAY + today).toLocaleString();
  });
})();
</script>
`;
}

sites.forEach(site => {
  const filePath = path.join(__dirname, site.path);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove existing counter if present to avoid duplicates
    content = content.replace(/<!-- Visitor Counter -->[\s\S]*?<\/script>\s*/, '');
    
    // Insert before </body>
    const template = getTemplate(site.name, site.today, site.total);
    if (content.includes('</body>')) {
      content = content.replace('</body>', template + '\n</body>');
    } else {
      content += template;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', site.path);
  } else {
    console.log('Not found:', site.path);
  }
});
