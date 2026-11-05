// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const HEADER_BRAND = '';
export const SITE_TITLE = 'Francisco Sempé | Triatleta Amateur';
export const SITE_DESCRIPTION =
  'Triatleta amateur de Mar del Plata, categoría 40–44. Participó del IRONMAN 70.3 World Championship en Niza 2026 con un tiempo de 5:15:32.';
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

/** Editar con tu correo real */
export const CONTACT_EMAIL = 'fransempe@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/fransempe/';

/** Número internacional sin + (Argentina) — https://api.whatsapp.com / wa.me */
export const WHATSAPP_PHONE = '542235369926';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export type Photo = {
  /** Base del archivo en `public/optimized/` (ver scripts/optimize-images.mjs) */
  name: string;
  width: number;
  height: number;
  /** Anchos generados para ese archivo */
  widths: number[];
  alt: string;
};

export const PHOTOS = {
  finishNice: {
    name: 'finish-nice',
    width: 3200,
    height: 2133,
    widths: [800, 1600, 2400],
    alt: 'Francisco Sempé con los brazos en alto en la meta del Mundial IRONMAN 70.3 de Niza; el tablero marca 05:15:32',
  },
  bikeNice: {
    name: 'bike-nice',
    width: 3200,
    height: 2133,
    widths: [800, 1600, 2400],
    alt: 'Mundial de Niza: ciclismo, tomando una curva con la bici de contrarreloj',
  },
  bikeNice2: {
    name: 'bike-nice-2',
    width: 2133,
    height: 3200,
    widths: [800, 1600],
    alt: 'Mundial de Niza: ciclismo, en plena subida',
  },
  runNice: {
    name: 'run-nice',
    width: 2133,
    height: 3200,
    widths: [800, 1600],
    alt: 'Mundial de Niza: corriendo frente al Hotel Negresco',
  },
  runNice2: {
    name: 'run-nice-2',
    width: 3200,
    height: 2133,
    widths: [800, 1600, 2400],
    alt: 'Mundial de Niza: corriendo junto a las vallas del campeonato',
  },
  swim: { name: 'swim', width: 3200, height: 2134, widths: [800, 1600, 2400], alt: 'Natación: salida del agua' },
  bike: { name: 'bike', width: 3200, height: 2134, widths: [800, 1600, 2400], alt: 'Ciclismo' },
  run: { name: 'run', width: 2127, height: 1369, widths: [800, 1600], alt: 'Running' },
  finish: {
    name: 'finish',
    width: 2127,
    height: 3200,
    widths: [800, 1600],
    alt: 'Llegada a meta en el IRONMAN 70.3 San Juan',
  },
  profile: { name: 'profile-fs', width: 2300, height: 3450, widths: [800, 1600], alt: 'Francisco Sempé corriendo' },
} satisfies Record<string, Photo>;

/** Galería (orden triatlón: swim → bike → run → finisher) */
export const CAROUSEL_IMAGES: Photo[] = [
  PHOTOS.swim,
  PHOTOS.bike,
  PHOTOS.bikeNice,
  PHOTOS.bikeNice2,
  PHOTOS.run,
  PHOTOS.runNice,
  PHOTOS.runNice2,
  PHOTOS.finish,
  PHOTOS.finishNice,
];
