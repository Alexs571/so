/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    // agregá aquí otras rutas donde uses clases tailwind en archivos js, jsx, tsx, etc.
  ],
  safelist: [
    'hidden',
    'block',
    'bg-teal-100',
    'border-teal-500',
    'bg-teal-600',
    'rounded-full',
    'text-teal-700',
    'text-slate-600',
    'text-slate-800',
    // agregá cualquier clase que uses dinámicamente con JS
  ],
  theme: {
    extend: {
      // acá podés extender colores, fuentes, etc.
    },
  },
  plugins: [],
};
