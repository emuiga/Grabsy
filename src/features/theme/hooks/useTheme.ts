'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  return {
    theme: 'light',
    toggleTheme: () => {},
  };
} 