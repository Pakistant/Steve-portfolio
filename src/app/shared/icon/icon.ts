import { Component, input } from '@angular/core';

/**
 * Small dependency-free icon set (stroke-based, 24x24 grid).
 * Rendered inline so the site never depends on an external icon font
 * or network request for something as small as a glyph.
 */
const PATHS: Record<string, string> = {
  code: 'M9 18l-6-6 6-6M15 6l6 6-6 6',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  'shopping-bag': 'M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2',
  tool: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.7 2.7-2.3-2.3 2.7-2.7z',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z',
  mail: 'M4 6h16v12H4V6zM4 6l8 7 8-7',
  phone: 'M6 3h4l1 5-3 2a13 13 0 006 6l2-3 5 1v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z',
  pin: 'M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zM12 13a3 3 0 100-6 3 3 0 000 6z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  external: 'M14 5h5v5M19 5l-9 9M8 5H5v14h14v-3',
  briefcase: 'M4 8h16v11H4V8zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M4 13h16',
  cap: 'M2 9l10-4 10 4-10 4-10-4zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  download: 'M12 3v12M7 11l5 5 5-5M5 21h14',
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6',
  message: 'M4 4h16v13H8l-4 4V4z',
  check: 'M5 13l4 4L19 7',
};

/**
 * Brand marks are filled glyphs (not part of the 24x24 stroke set above),
 * so they get their own small lookup and are rendered with fill instead
 * of stroke.
 */
const BRAND_PATHS: Record<string, string> = {
  github:
    'M12 2C6.48 2 2 6.58 2 12.17c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04a9.3 9.3 0 015 0c1.9-1.31 2.74-1.04 2.74-1.04.56 1.41.21 2.45.1 2.71.65.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0022 12.17C22 6.58 17.52 2 12 2z',
  linkedin:
    'M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM3.3 8.75h3.6V21H3.3V8.75zm6.2 0h3.45v1.68h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.4 4.33 5.53V21h-3.6v-5.35c0-1.28-.02-2.92-1.78-2.92-1.79 0-2.06 1.4-2.06 2.83V21H9.5V8.75z',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    @if (isBrand()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path [attr.d]="path()" />
      </svg>
    } @else {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 24 24"
        fill="none"
        [attr.stroke]="'currentColor'"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path [attr.d]="path()" />
      </svg>
    }
  `,
})
export class Icon {
  name = input.required<string>();
  size = input<number>(20);

  isBrand(): boolean {
    return this.name() in BRAND_PATHS;
  }

  path(): string {
    return BRAND_PATHS[this.name()] ?? PATHS[this.name()] ?? PATHS['code'];
  }
}
