// Menu Database
const menuDB = [
    { id: 'c1', category: '커피 (HOT)', name: '핫 아메리카노' },
    { id: 'c2', category: '커피 (HOT)', name: '핫 카페라떼' },
    { id: 'c3', category: '커피 (HOT)', name: '핫 바닐라라떼' },
    { id: 'c4', category: '커피 (HOT)', name: '핫 카라멜마끼아또' },
    
    { id: 'c5', category: '커피 (ICED)', name: '아이스 아메리카노' },
    { id: 'c6', category: '커피 (ICED)', name: '아이스 카페라떼' },
    { id: 'c7', category: '커피 (ICED)', name: '아이스 바닐라라떼' },
    { id: 'c8', category: '커피 (ICED)', name: '아이스 연유라떼 (돌체)' },
    { id: 'c9', category: '커피 (ICED)', name: '아이스 콜드브루' },
    
    { id: 'n1', category: '논커피/티', name: '복숭아 아이스티' },
    { id: 'n2', category: '논커피/티', name: '아이스 초코라떼' },
    { id: 'n3', category: '논커피/티', name: '핫 초코라떼' },
    { id: 'n4', category: '논커피/티', name: '아이스 녹차라떼' },
    { id: 'n5', category: '논커피/티', name: '따뜻한 캐모마일' },
    { id: 'n6', category: '논커피/티', name: '아이스 얼그레이' },
    
    { id: 's1', category: '스무디/에이드', name: '딸기 요거트 스무디' },
    { id: 's2', category: '스무디/에이드', name: '플레인 요거트 스무디' },
    { id: 's3', category: '스무디/에이드', name: '청포도 에이드' },
    { id: 's4', category: '스무디/에이드', name: '자몽 에이드' },
    { id: 's5', category: '스무디/에이드', name: '레몬 에이드' }
];

// State
let orders = {}; // { id: quantity, 'custom-1': quantity }
let customMenus = []; // { id: 'custom-1', name: '...' }
let customIdCounter = 1;
let activeCategory = '커피 (ICED)';

// Categories
const categories = [...new Set(menuDB.map(m => m.category))];

// DOM Elements
const tabsContainer = document.getElementById('category-tabs');
const menuListContainer = document.getElementById('menu-list');
const floatingBar = document.getElementById('floating-bar');
const floatingTotal = document.getElementById('floating-total-count');
const modal = document.getElementById('summary-modal');
const summaryList = document.getElementById('summary-list');
const modalTotal = document.getElementById('modal-total-count');
const inputCustom = document.getElementById('custom-menu-input');
const btnAddCustom = document.getElementById('btn-add-custom');
const toast = document.getElementById('toast');

// Initialize
function init() {
    renderTabs();
    renderMenuList();
    updateFloatingBar();
}

// Render Tabs
function renderTabs() {
    tabsContainer.innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat === activeCategory ? 'active' : ''}" onclick="changeCategory('${cat}')">
            ${cat}
        </button>
    `).join('');
}

// Change Category
window.changeCategory = function(cat) {
    activeCategory = cat;
    renderTabs();
    renderMenuList();
}

// Get all menus including customs
function getAllMenus() {
    return [...menuDB, ...customMenus];
}

// Render Menu List
function renderMenuList() {
    // Get menus for current category + all custom menus
    const visibleMenus = getAllMenus().filter(m => m.category === activeCategory || m.isCustom);
    
    // Sort custom menus to top or bottom? Let's put custom menus at the bottom of the list.
    const standardMenus = visibleMenus.filter(m => !m.isCustom);
    const customMenusToShow = visibleMenus.filter(m => m.isCustom);
    const menusToRender = [...standardMenus, ...customMenusToShow];

    menuListContainer.innerHTML = menusToRender.map(menu => {
        const qty = orders[menu.id] || 0;
        return `
            <div class="menu-item ${qty > 0 ? 'active' : ''}">
                <div class="menu-info">
                    <div class="menu-name">${menu.name}</div>
                </div>
                <div class="quantity-control">
                    <button class="btn-qty" onclick="updateQty('${menu.id}', -1)">-</button>
                    <span class="qty-count">${qty}</span>
                    <button class="btn-qty plus" onclick="updateQty('${menu.id}', 1)">+</button>
                </div>
            </div>
        `;
    }).join('');
}

// Update Quantity
window.updateQty = function(id, change) {
    const currentQty = orders[id] || 0;
    const newQty = currentQty + change;
    
    if (newQty < 0) return;
    
    if (newQty === 0) {
        delete orders[id];
    } else {
        orders[id] = newQty;
    }
    
    renderMenuList();
    updateFloatingBar();
    if (modal.classList.contains('active')) {
        renderSummaryList();
    }
}

// Update Floating Bar
function updateFloatingBar() {
    const totalQty = Object.values(orders).reduce((sum, qty) => sum + qty, 0);
    floatingTotal.innerText = totalQty;
    
    if (totalQty > 0) {
        floatingBar.classList.add('visible');
    } else {
        floatingBar.classList.remove('visible');
    }
}

// Add Custom Menu
btnAddCustom.addEventListener('click', () => {
    const val = inputCustom.value.trim();
    if (!val) return;
    
    const newId = 'custom-' + customIdCounter++;
    customMenus.push({
        id: newId,
        category: '직접 추가',
        name: val,
        isCustom: true
    });
    
    // Automatically add 1 to the new custom menu
    orders[newId] = 1;
    inputCustom.value = '';
    
    renderMenuList();
    updateFloatingBar();
});

// Modal Operations
window.openSummaryModal = function() {
    renderSummaryList();
    modal.classList.add('active');
}

window.closeSummaryModal = function() {
    modal.classList.remove('active');
}

// Close modal on click outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeSummaryModal();
    }
});

// Render Summary List inside Modal
function renderSummaryList() {
    const allMenus = getAllMenus();
    const orderedItems = Object.keys(orders).map(id => {
        const menu = allMenus.find(m => m.id === id);
        return {
            name: menu.name,
            qty: orders[id]
        };
    }).filter(item => item.qty > 0);
    
    const totalQty = orderedItems.reduce((sum, item) => sum + item.qty, 0);
    modalTotal.innerText = totalQty + '잔';
    
    if (orderedItems.length === 0) {
        summaryList.innerHTML = '<div style="text-align:center; padding: 20px; color: #999;">주문 내역이 없습니다.</div>';
        return;
    }
    
    summaryList.innerHTML = orderedItems.map(item => `
        <div class="summary-item">
            <span class="sum-name">${item.name}</span>
            <span class="sum-qty">${item.qty}잔</span>
        </div>
    `).join('');
}

// Reset Orders
window.resetOrders = function() {
    if(confirm('주문 내역을 모두 초기화하시겠습니까?')) {
        orders = {};
        // Optional: clear custom menus too? Let's keep them in case they need it again.
        closeSummaryModal();
        renderMenuList();
        updateFloatingBar();
    }
}

// Copy to Clipboard
window.copyToClipboard = function() {
    const allMenus = getAllMenus();
    const orderedItems = Object.keys(orders).map(id => {
        const menu = allMenus.find(m => m.id === id);
        return { name: menu.name, qty: orders[id] };
    }).filter(item => item.qty > 0);
    
    if (orderedItems.length === 0) return;
    
    const totalQty = orderedItems.reduce((sum, item) => sum + item.qty, 0);
    
    let textToCopy = '[커피 주문 취합]\n';
    orderedItems.forEach(item => {
        textToCopy += `- ${item.name} ${item.qty}잔\n`;
    });
    textToCopy += `\n총 ${totalQty}잔`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast();
        closeSummaryModal();
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Start
init();
