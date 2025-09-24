export function getViewportScrollbarWidth(): number {
    if (typeof window === 'undefined') return 0;
    return Math.max(0, window.innerWidth - document.documentElement.clientWidth);
}

export function lockBodyScroll() {
    const body = document.body;
    if (body.dataset.scrollLock === 'true') return;

    const currentPaddingRight = parseFloat(getComputedStyle(body).paddingRight || '0') || 0;
    const scrollBarWidth = getViewportScrollbarWidth();

    body.dataset.prevPaddingRight = String(currentPaddingRight);

    if (scrollBarWidth > 0) {
        body.style.paddingRight = `${currentPaddingRight + scrollBarWidth}px`;
    }
    body.classList.add('overflow-hidden');
    body.dataset.scrollLock = 'true';
}

export function unlockBodyScroll() {
    const body = document.body;
    if (body.dataset.scrollLock !== 'true') return;

    const prev = parseFloat(body.dataset.prevPaddingRight || '0') || 0;
    if (prev > 0) {
        body.style.paddingRight = `${prev}px`;
    } else {
        body.style.paddingRight = '';
    }

    body.classList.remove('overflow-hidden');
    delete body.dataset.prevPaddingRight;
    delete body.dataset.scrollLock;
}
