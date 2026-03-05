document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noteCards = document.querySelectorAll('.note-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            noteCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalCategory = modal.querySelector('.modal-category');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalFullContent = modal.querySelector('.modal-full-content');
    const modalStats = modal.querySelector('.modal-stats');
    const modalClose = modal.querySelector('.modal-close');

    noteCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('.note-image img');
            const category = this.getAttribute('data-category') || this.querySelector('.category-tag')?.textContent || '';
            const title = this.querySelector('h3').textContent;
            const desc = this.getAttribute('data-desc') || '';
            const fullContent = this.getAttribute('data-full') || desc;
            const stats = this.querySelector('.note-stats')?.innerHTML || '';

            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalCategory.textContent = category;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalDesc.classList.add('clickable');
            modalFullContent.textContent = fullContent;
            modalFullContent.style.display = 'none';
            modalDesc.classList.remove('expanded');
            modalStats.innerHTML = stats;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalDesc.addEventListener('click', function() {
        if (modalFullContent.style.display === 'none') {
            modalFullContent.style.display = 'block';
            modalDesc.classList.add('expanded');
        } else {
            modalFullContent.style.display = 'none';
            modalDesc.classList.remove('expanded');
        }
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    const scrollElements = document.querySelectorAll('.note-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
