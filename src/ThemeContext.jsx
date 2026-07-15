import React, { createContext, useContext, useState, useCallback } from 'react';

const getHour = () => new Date().getHours();

export const timeOfDay = (h) => {
  if (h >= 20 || h < 6) return 'night';
  if (h >= 18)          return 'dusk';
  if (h >= 8)           return 'day';
  return 'dawn';
};

const ThemeContext = createContext(null);

export const PREVIEW_MODES = ['auto', 'night', 'dawn', 'day', 'dusk'];

// Per-mode design tokens consumed by Nav, Footer, and BackgroundEffects
export const THEME_TOKENS = {
  night: {
    navBg:        'rgba(1, 11, 26, 0.55)',
    navBorder:    'rgba(255,255,255,0.06)',
    footerBg:     '#010b1a',
    footerBorder: 'rgba(255,255,255,0.05)',
    footerAccent: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.3),transparent)',
    text:         '#f1f5f9',
    textMuted:    '#64748b',
    linkHover:    '#93c5fd',
    activePill:   'rgba(59,130,246,0.12)',
    activeBorder: 'rgba(59,130,246,0.22)',
    activeText:   '#93c5fd',
    socialBg:     'rgba(255,255,255,0.03)',
    socialBorder: 'rgba(255,255,255,0.06)',
    socialHover:  '#60a5fa',
    scrollBg:     'rgba(1,11,26,0.5)',
  },
  dusk: {
    navBg:        'rgba(15, 10, 31, 0.6)',
    navBorder:    'rgba(180,80,40,0.15)',
    footerBg:     '#0f0a1f',
    footerBorder: 'rgba(180,80,40,0.12)',
    footerAccent: 'linear-gradient(90deg,transparent,rgba(200,80,40,0.35),transparent)',
    text:         '#f5e6d0',
    textMuted:    '#9a7060',
    linkHover:    '#f4a26a',
    activePill:   'rgba(200,80,40,0.14)',
    activeBorder: 'rgba(200,100,50,0.28)',
    activeText:   '#f4a26a',
    socialBg:     'rgba(255,150,80,0.04)',
    socialBorder: 'rgba(255,150,80,0.08)',
    socialHover:  '#f4a26a',
    scrollBg:     'rgba(15,10,31,0.55)',
  },
  dawn: {
    navBg:        'rgba(13, 27, 42, 0.55)',
    navBorder:    'rgba(200,140,80,0.14)',
    footerBg:     '#0d1b2a',
    footerBorder: 'rgba(200,140,80,0.1)',
    footerAccent: 'linear-gradient(90deg,transparent,rgba(220,150,80,0.3),transparent)',
    text:         '#f0e8d8',
    textMuted:    '#8a7a68',
    linkHover:    '#f8c87c',
    activePill:   'rgba(220,150,80,0.12)',
    activeBorder: 'rgba(220,150,80,0.25)',
    activeText:   '#f8c87c',
    socialBg:     'rgba(255,200,100,0.04)',
    socialBorder: 'rgba(255,200,100,0.08)',
    socialHover:  '#f8c87c',
    scrollBg:     'rgba(13,27,42,0.5)',
  },
  day: {
    navBg:        'rgba(10, 22, 40, 0.5)',
    navBorder:    'rgba(135,206,235,0.12)',
    footerBg:     '#0a1628',
    footerBorder: 'rgba(135,206,235,0.08)',
    footerAccent: 'linear-gradient(90deg,transparent,rgba(100,180,240,0.3),transparent)',
    text:         '#e0eeff',
    textMuted:    '#5a7a9a',
    linkHover:    '#7dd3fc',
    activePill:   'rgba(100,180,240,0.12)',
    activeBorder: 'rgba(100,180,240,0.25)',
    activeText:   '#7dd3fc',
    socialBg:     'rgba(100,180,255,0.04)',
    socialBorder: 'rgba(100,180,255,0.08)',
    socialHover:  '#7dd3fc',
    scrollBg:     'rgba(10,22,40,0.5)',
  },
};

export function ThemeProvider({ children }) {
  const [previewMode, setPreviewMode] = useState('auto');

  const mode = previewMode === 'auto' ? timeOfDay(getHour()) : previewMode;
  const tokens = THEME_TOKENS[mode];

  const cycleMode = useCallback(() => {
    setPreviewMode((cur) => {
      const idx = PREVIEW_MODES.indexOf(cur);
      return PREVIEW_MODES[(idx + 1) % PREVIEW_MODES.length];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, previewMode, setPreviewMode, tokens, cycleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
