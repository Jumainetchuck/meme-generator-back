// frontend/src/stores/sessionStore.ts

import { create } from 'zustand';

interface Session {
  sessionId: string;
  userId: number | null;
  isAuthenticated: boolean;
  expiresAt: Date;
}

interface SessionStore {
  session: Session | null;
  initializeSession: () => void;
  setAuthenticated: (userId: number, token: string) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  session: null,
  
  initializeSession: () => {
    let sessionId = localStorage.getItem('sessionId');
    
    if (!sessionId) {
      sessionId = `guest_${Date.now()}_${Math.random()}`;
      localStorage.setItem('sessionId', sessionId);
    }
    
    set({
      session: {
        sessionId,
        userId: null,
        isAuthenticated: false,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
  },
  
  setAuthenticated: (userId: number, token: string) => {
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('authToken', token);
    
    set((state) => ({
      session: {
        ...state.session!,
        userId,
        isAuthenticated: true,
      },
    }));
  },
  
  logout: () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    localStorage.removeItem('sessionId');
    
    set({
      session: {
        sessionId: `guest_${Date.now()}_${Math.random()}`,
        userId: null,
        isAuthenticated: false,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
  },
}));