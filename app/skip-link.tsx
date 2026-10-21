'use client';

import type { MouseEvent } from 'react';

export function SkipLink() {
  function moveToMain(event: MouseEvent<HTMLAnchorElement>) {
    const main = document.querySelector<HTMLElement>('main');
    if (!main) return;
    event.preventDefault();
    if (!main.id) main.id = 'main-content';
    main.tabIndex = -1;
    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: 'start' });
    history.replaceState(null, '', `#${main.id}`);
  }
  return <a className="skip-link" href="#main-content" onClick={moveToMain}>Skip to main content</a>;
}
