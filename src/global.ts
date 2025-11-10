import { createGlobalStyle } from 'styled-components';

// Global Styles
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  input, button, textarea {
    font-family: inherit;
  }

  #root {
    min-height: 100vh;
  }
`;
