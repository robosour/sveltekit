const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}'), "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@brainandbones/skeleton/tailwind/theme.cjs')],
};
module.exports = config;
