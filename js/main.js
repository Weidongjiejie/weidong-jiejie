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

    const xhsProfileUrl = 'https://www.xiaohongshu.com/user/profile/58ec2e436a6a694daa309b21';
    const modal = document.getElementById('modal');
    const desktopMedia = window.matchMedia('(min-width: 1024px)');

    const exactNoteMap = {
        '信任的渡口—一个机器学习老兵的两个时代': 'https://www.xiaohongshu.com/explore/6994b99a000000001a02d59a',
        '微软2026纽约AI Tour': 'https://www.xiaohongshu.com/explore/69718e24000000002200ad4e'
    };

    function buildXhsUrl(card, title) {
        const exactUrl = exactNoteMap[title];
        if (exactUrl) {
            return { url: exactUrl, label: '查看原文 →' };
        }
        const explicit = card.getAttribute('data-xhs-url');
        if (explicit && explicit.trim() && explicit.trim() !== xhsProfileUrl) {
            return { url: explicit.trim(), label: '查看原文 →' };
        }
        const keyword = encodeURIComponent(`${title} 未动姐姐`);
        return { url: `https://www.xiaohongshu.com/search_result?keyword=${keyword}`, label: '去小红书找原文 →' };
    }

    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        const modalFullscreenBtn = modal.querySelector('.modal-fullscreen-btn');
        const modalImage = modal.querySelector('.modal-image');
        const modalCategory = modal.querySelector('.modal-category');
        const modalTitle = modal.querySelector('.modal-title');
        const modalDesc = modal.querySelector('.modal-desc');
        const modalFullContent = modal.querySelector('.modal-full-content');
        const modalStats = modal.querySelector('.modal-stats');
        const modalOriginalLink = modal.querySelector('.modal-original-link');
        const modalClose = modal.querySelector('.modal-close');

        let lastXhsUrl = xhsProfileUrl;

        if (modalOriginalLink) {
            modalOriginalLink.addEventListener('click', function() {
                const url = lastXhsUrl || modalOriginalLink.href || xhsProfileUrl;
                modalOriginalLink.href = url;
            });
        }

        noteCards.forEach(card => {
            card.addEventListener('click', function() {
                const img = this.querySelector('.note-image img');
                const category = this.getAttribute('data-category') || this.querySelector('.category-tag')?.textContent || '';
                const title = this.querySelector('h3').textContent;
                const desc = this.getAttribute('data-desc') || '';
                const fullContent = this.getAttribute('data-full') || desc;
                const stats = this.querySelector('.note-stats')?.innerHTML || '';
                const xhs = buildXhsUrl(this, title);

                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalCategory.textContent = category;
                modalTitle.textContent = title;
                modalDesc.textContent = desc;
                modalDesc.classList.add('clickable');
                modalFullContent.textContent = fullContent;
                if (desktopMedia.matches) {
                    modalFullContent.style.display = 'block';
                    modalDesc.classList.add('expanded');
                    modalContent.classList.add('reading-mode');
                    modal.classList.add('reading-mode');
                } else {
                    modalFullContent.style.display = 'none';
                    modalDesc.classList.remove('expanded');
                    modalContent.classList.remove('reading-mode');
                    modal.classList.remove('reading-mode');
                }
                modalStats.innerHTML = stats;
                lastXhsUrl = xhs.url;
                if (modalOriginalLink) {
                    modalOriginalLink.href = xhs.url;
                    modalOriginalLink.textContent = xhs.label;
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        if (modalFullscreenBtn) {
            modalFullscreenBtn.addEventListener('click', function() {
                const active = modal.classList.toggle('force-fullscreen');
                modalFullscreenBtn.textContent = active ? '退出全屏' : '全屏';
            });
        }

        modalDesc.addEventListener('click', function() {
            if (modalFullContent.style.display === 'none') {
                modalFullContent.style.display = 'block';
                modalDesc.classList.add('expanded');
                modalContent.classList.add('reading-mode');
                modal.classList.add('reading-mode');
            } else {
                modalFullContent.style.display = 'none';
                modalDesc.classList.remove('expanded');
                modalContent.classList.remove('reading-mode');
                modal.classList.remove('reading-mode');
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
            modalContent.classList.remove('reading-mode');
            modal.classList.remove('reading-mode');
            modal.classList.remove('force-fullscreen');
            if (modalFullscreenBtn) {
                modalFullscreenBtn.textContent = '全屏';
            }
            document.body.style.overflow = '';
        }
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

    const backPageBtn = document.getElementById('backPageBtn');
    if (backPageBtn) {
        backPageBtn.addEventListener('click', function() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});
