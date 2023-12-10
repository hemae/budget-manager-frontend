export function turnScroll(turn: 'off' | 'on'): void {
    const html = document.querySelector('html');
    if (turn === 'off') html?.classList.add('not-scrollable');
    if (turn === 'on') html?.classList.remove('not-scrollable');
}
