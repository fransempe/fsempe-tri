// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const HEADER_BRAND = '';
export const SITE_TITLE = 'Francisco Sempé | Triatleta Amateur';
export const SITE_DESCRIPTION =
  'Triatleta amateur de Mar del Plata, categoría 40–44. Clasificado al IRONMAN 70.3 World Championship Niza 2026.';
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

/** Editar con tu correo real */
export const CONTACT_EMAIL = 'fransempe@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/fransempe/';

/** Número internacional sin + (Argentina) — https://api.whatsapp.com / wa.me */
export const WHATSAPP_PHONE = '542235369926';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

/** Galería: archivos en `public/` (orden triatlón: swim → bike → run → finisher) */
export const CAROUSEL_IMAGES: { src: string; alt: string }[] = [
  { src: '/swim.JPG', alt: 'Natación' },
  { src: '/bike.JPG', alt: 'Ciclismo' },
  { src: '/run.JPG', alt: 'Running' },
  { src: '/finish.JPG', alt: 'Llegada a meta (finisher)' },
];
