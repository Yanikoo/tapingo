/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', '*.js'],
  theme: {
    screens: {
      sl: '420px',
      sm: '640px',
    },
    colors: {
      'custom-gray': '#efeffa', // Фоновый цвет фиолетовый
      'body-gray': '#999999', // Фоновый цвет фиолетовый
      'custom-white': '#ffffff', // Фоновый цвет белый для карточек
      'header-text': '#030027', // Цвет текста заголовков
      'other-text': '#555F7D', // Цвет для других текстов
      'blue-custom': '#0550FF', // Цвет  текста подсказки и обводки
      'card-bg': '#1E2C54', // Активный цвет карточки
      'card-new': '#14B8A6', // Цвет текста на фото новой карточки
      'withe-3': '#EEF0F8', // Светлый цвет текста
      'text-block3': '#33A9FF', // Цвет текста на 3 блоке
      'laling-gray': '#EEF0F8', // Цвет для линейки
    },
    fontFamily: {
      nunito: ['Nunito', 'serif'],
    },
    fontSize: {
      xll: '28px',
      xxl: '16px',
      xl: 'clamp(14px, 2vw + 8px, 16px)',
      lg: '12px',
      ls: '10px',
      // dynamic: ['clamp(14px, 2vw + 8px, 16px)', { lineHeight: '1.5' }], // Добавляем кастомный размер шрифта
    },
    extend: {
      margin: {
        1.75: '7px',
        2.25: '9px',
        3.75: '15px',
        4.25: '17px',
        4.75: '19px',
        2.75: '11px',
        26.75: '107px',
        38: '152px',
      },
    },
  },
  plugins: [],
}
