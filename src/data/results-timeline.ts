/** Resultados deportivos por año — usado en ResultsTimeline.astro (orden cronológico 2024 → 2026) */

export type TimelineEvent = {
  title: string;
  /** Distancias por disciplina (texto libre, ej. formato 70.3 o sprint) */
  distance?: string;
  lines: string[];
  /** Resalta la tarjeta (logro clave) */
  featured?: boolean;
};

export type TimelineYear = {
  year: string;
  emoji: string;
  events: TimelineEvent[];
};

export const RESULTS_TIMELINE: TimelineYear[] = [
  {
    year: '2024',
    emoji: '🧩',
    events: [
      {
        title: 'Ironman 70.3 Buenos Aires',
        distance: '1,9 km nadar · 90 km bici · 21,1 km correr (70.3)',
        lines: ['📊 Top 10% masculino', '🚀 Debut en 70.3'],
      },
      {
        title: 'Triatlón La Brava (Short)',
        distance: '750 m · 20 km · 5 km (short)',
        lines: ['🚀 Debut en triatlón'],
      },
      {
        title: 'Hombre de Piedra (Tandil)',
        distance: '8 km · 50 km · 6 km',
        lines: ['🏁 17° categoría'],
      },
    ],
  },
  {
    year: '2025',
    emoji: '⚡',
    events: [
      {
        title: 'Ironman Brasil (Full)',
        distance: '3,8 km nadar · 180 km bici · 42,2 km correr',
        featured: true,
        lines: ['⏱️ Tiempo: 10h05', '🚀 Debut en distancia completa'],
      },
      {
        title: 'Duatlón Punta Mogotes',
        distance: '5 km corrida · 20 km bici · 2,5 km corrida (aprox.)',
        lines: ['🥉 3° general', '🥇 1° categoría'],
      },
      {
        title: 'Triatlón La Brava (Short)',
        distance: '750 m · 20 km · 5 km (short)',
        lines: ['🥇 1° categoría', '🏁 4° general'],
      },
      {
        title: 'Triatlón Short Tandil',
        distance: '750 m · 20 km · 5 km (sprint / short)',
        lines: ['🥈 2° categoría', '🏁 10° general'],
      },
      {
        title: 'Hombre de Piedra (Tandil)',
        distance: '8 km · 50 km · 6 km',
        lines: ['🥉 3° categoría', '🏁 13° general'],
      },
      {
        title: 'TRI Sprint ISS',
        distance: '750 m · 20 km · 5 km (sprint)',
        lines: ['🏁 4° categoría', '🚀 22° general', '🔥 Mejor tiempo en running'],
      },
      {
        title: 'Open Sports 10K',
        distance: '10 km (solo running)',
        lines: ['⏱️ 37:28', '🏁 55° / 1594 atletas', '🥈 9° categoría'],
      },
    ],
  },
  {
    year: '2026',
    emoji: '🔥',
    events: [
      {
        title: 'Ironman 70.3 San Juan',
        distance: '1,9 km nadar · 90 km bici · 21,1 km correr (70.3)',
        featured: true,
        lines: [
          '⏱️ Tiempo: 4h26′',
          '🥈 13° categoría 40–44',
          '🏁 49° general / 900 atletas',
          '✅ Clasificación al Mundial',
        ],
      },
      {
        title: 'Triatlón Short Tandil',
        distance: '750 m · 20 km · 5 km (sprint / short)',
        lines: ['🥇 1° categoría 40–44', '🏁 6° general'],
      },
      {
        title: 'Triatlón La Brava (Short)',
        distance: '750 m · 20 km · 5 km (short)',
        lines: ['🥇 1° categoría 40–44', '🏁 3° general'],
      },
    ],
  },
];
