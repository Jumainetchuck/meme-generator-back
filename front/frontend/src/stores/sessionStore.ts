import { create } from 'zustand';

interface Session {
  sessionId: string;
  userId: number | null;
  firstName?: string;
  lastName?: string;
  email?: string;
  isAuthenticated: boolean;
  expiresAt: Date;
}

interface SessionStore {
  session: Session | null;
  initializeSession: () => void;
  setAuthenticated: (userId: number, token: string, firstName?: string, lastName?: string, email?: string) => void;
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

    const savedUserId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    
    const parsedUserId = savedUserId ? Number(savedUserId) : null;
    const isAuthenticated =
      Boolean(authToken) && parsedUserId !== null && !Number.isNaN(parsedUserId);

    set({
      session: {
        sessionId,
        userId: isAuthenticated ? parsedUserId : null,
        firstName: isAuthenticated ? firstName || undefined : undefined,
        lastName: isAuthenticated ? lastName || undefined : undefined,
        email: isAuthenticated ? email || undefined : undefined,
        isAuthenticated,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
  },

  setAuthenticated: (userId: number, token: string, firstName?: string, lastName?: string, email?: string) => {
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('authToken', token);
    if (firstName) localStorage.setItem('firstName', firstName);
    if (lastName) localStorage.setItem('lastName', lastName);
    if (email) localStorage.setItem('email', email);

    set((state) => ({
      session: {
        ...state.session!,
        userId,
        firstName,
        lastName,
        email,
        isAuthenticated: true,
      },
    }));
  },

  logout: () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
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

// import { create } from 'zustand';

// interface Session {
//   sessionId: string;
//   userId: number | null;
//   isAuthenticated: boolean;
//   expiresAt: Date;
// }

// interface SessionStore {
//   session: Session | null;
//   initializeSession: () => void;
//   setAuthenticated: (userId: number, token: string) => void;
//   logout: () => void;
// }

// export const useSessionStore = create<SessionStore>((set) => ({
//   session: null,

//   initializeSession: () => {
//     let sessionId = localStorage.getItem('sessionId');

//     if (!sessionId) {
//       sessionId = `guest_${Date.now()}_${Math.random()}`;
//       localStorage.setItem('sessionId', sessionId);
//     }

//     // MODIF : restauration de la session utilisateur après rechargement (F5)
//     const savedUserId = localStorage.getItem('userId');
//     const authToken = localStorage.getItem('authToken');
//     const parsedUserId = savedUserId ? Number(savedUserId) : null;
//     const isAuthenticated =
//       Boolean(authToken) && parsedUserId !== null && !Number.isNaN(parsedUserId);

//     set({
//       session: {
//         sessionId,
//         userId: isAuthenticated ? parsedUserId : null,
//         isAuthenticated,
//         expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
//       },
//     });
//   },

//   setAuthenticated: (userId: number, token: string) => {
//     localStorage.setItem('userId', userId.toString());
//     localStorage.setItem('authToken', token);

//     set((state) => ({
//       session: {
//         ...state.session!,
//         userId,
//         isAuthenticated: true,
//       },
//     }));
//   },

//   logout: () => {
//     localStorage.removeItem('userId');
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('sessionId');

//     const newSessionId = `guest_${Date.now()}_${Math.random()}`;
//     localStorage.setItem('sessionId', newSessionId);

//     set({
//       session: {
//         sessionId: newSessionId,
//         userId: null,
//         isAuthenticated: false,
//         expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
//       },
//     });
//   },
// }));