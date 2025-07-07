import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import router
import { BrowserRouter } from 'react-router-dom';

// Import Search Context
import SearchProvider from './contexts/SearchContext.tsx';

// Import Theme context
import ThemeProvider from './contexts/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
