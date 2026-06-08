document.addEventListener('DOMContentLoaded', () => {
    const hospitalList = document.getElementById('hospital-list');
    const modal = document.getElementById('cta-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnCancelModal = document.getElementById('btn-cancel-modal');

    // Initial render
    renderHospitals(hospitals);

    // Render function
    function renderHospitals(data) {
        hospitalList.innerHTML = '';
        
        data.forEach(hospital => {
            const card = document.createElement('div');
            card.className = 'package-card';
            
            card.innerHTML = `
                <div class="card-header">
                    <h3 class="package-title" style="margin-bottom: 5px;">${hospital.name}</h3>
                </div>
                <div class="card-body">
                    <p style="color: #666; font-size: 0.95rem; line-height: 1.5;">${hospital.description}</p>
                </div>
                <div class="card-footer" style="flex-direction: column; gap: 10px;">
                    <div style="display: flex; gap: 10px; width: 100%;">
                        <a href="${hospital.officialUrl}" target="_blank" class="btn-secondary" style="flex: 1; text-align: center; text-decoration: none; padding: 12px 0; font-size: 0.95rem; font-weight: 600;">🌐 Official Website</a>
                        <button class="btn-primary btn-book" data-id="${hospital.id}" style="flex: 1; padding: 12px 0; font-size: 0.95rem;">🤝 Book via Checkit</button>
                    </div>
                </div>
            `;
            hospitalList.appendChild(card);
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
