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

    // MODIF : restauration de la session utilisateur après rechargement (F5)
    const savedUserId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');
    const parsedUserId = savedUserId ? Number(savedUserId) : null;
    const isAuthenticated =
      Boolean(authToken) && parsedUserId !== null && !Number.isNaN(parsedUserId);

    set({
      session: {
        sessionId,
        userId: isAuthenticated ? parsedUserId : null,
        isAuthenticated,
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

    const newSessionId = `guest_${Date.now()}_${Math.random()}`;
    localStorage.setItem('sessionId', newSessionId);

    set({
      session: {
        sessionId: newSessionId,
        userId: null,
        isAuthenticated: false,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
  },
}));