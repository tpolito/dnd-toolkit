// This is supposed to be empty

module.exports = {
    theme: {
      extend: {
        colors: {
          'main': '#181D27',
          'primary': '#7BDFF2',
          'secondary': '#7D83FF',
          'tert': '#007FFF',
          'accent': '#FCF7FF'

        },
        fontFamily: {
          'main': ['Fire Sans', 'sans-serif'],
          'secondary': ['Rubik', 'sans-serif'],
          'tert': ['Kreon', 'serif']
        }
      },
      screens: {
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
    variants: {},
    plugins: []
  }