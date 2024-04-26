// tailwind.config.js

module.exports = {
  plugins: [],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Figtree-VariableFont_wght', 'sans'], // 'sans' as a fallback
      },
      colors: {
        linkColor: '#0070F3',
        helperGray: '#393D41',
        inputBorder: '#C2C3C4',
        primary: '#549FF7',
      },
      spacing: {
        91: '91px',
      },
    },
    fontSize: {
      28: '28px',
      14: '14px',
    },
  },
};
