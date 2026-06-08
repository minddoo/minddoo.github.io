document.addEventListener('DOMContentLoaded', () => {
    const packageList = document.getElementById('package-list');
    const filterType = document.getElementById('filter-type');
    const filterFocus = document.getElementById('filter-focus');
    const btnSearch = document.getElementById('btn-search');

    const modal = document.getElementById('cta-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnCancelModal = document.getElementById('btn-cancel-modal');

    // Initial render
    renderPackages(packages);

    // Search button event
    btnSearch.addEventListener('click', () => {
        const type = filterType.value;
        const focus = filterFocus.value;

        const filtered = packages.filter(p => {
            const matchType = type === 'all' || p.type.includes(type);
            const matchFocus = focus === 'all' || p.tags.includes(focus) || p.features.some(f => f.includes(focus));
            return matchType && matchFocus;
        });

        renderPackages(filtered);
    });

    // Render function
    function renderPackages(data) {
        packageList.innerHTML = '';
        
        if (data.length === 0) {
            packageList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666;">No packages found matching your criteria.</p>';
            return;
        }

        data.forEach(pkg => {
            const card = document.createElement('div');
            card.className = 'package-card';
            
            const tagsHTML = pkg.tags.map(t => 
                `<span class="badge ${t === 'VIP' || t === 'VVIP' ? 'badge-vip' : ''}">${t}</span>`
            ).join('');

            const featuresHTML = pkg.features.map(f => `<li>${f}</li>`).join('');

            card.innerHTML = `
                <div class="card-header">
                    <div class="hospital-name">${pkg.hospitalName}</div>
                    <h3 class="package-title">${pkg.title}</h3>
                    <div class="tags">${tagsHTML}</div>
                </div>
                <div class="card-body">
                    <p style="color: #666; margin-bottom: 15px; font-size: 0.9rem;">⏱ Duration: ${pkg.duration}</p>
                    <ul class="feature-list">
                        ${featuresHTML}
                    </ul>
                </div>
                <div class="card-footer">
                    <div class="price">${pkg.price}</div>
                    <button class="btn-primary btn-book" data-id="${pkg.id}">Inquire</button>
                </div>
            `;
            packageList.appendChild(card);
        });

        // Add event listeners to newly created book buttons
        document.querySelectorAll('.btn-book').forEach(btn => {
            btn.addEventListener('click', openModal);
        });
    }

    // Modal Logic
    function openModal() {
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);
    
    // Close modal on clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
