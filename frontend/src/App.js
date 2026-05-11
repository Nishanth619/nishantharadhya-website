import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Home from './Home';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import AppTerms from './AppTerms';
import AppPrivacy from './AppPrivacy';
import AppAccountDeletion from './AppAccountDeletion';

function App() {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms/:appId" element={<AppTerms />} />
            <Route path="/privacy/:appId" element={<AppPrivacy />} />
            <Route path="/delete-account/:appId" element={<AppAccountDeletion />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;


