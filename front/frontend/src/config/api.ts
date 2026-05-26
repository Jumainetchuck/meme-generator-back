/** Point d'entrée unique (API Gateway) */
export const API_GATEWAY = 'http://localhost:3000';

/** URL absolue pour afficher une image renvoyée par l'API (chemin relatif /api/media/...) */
export function mediaUrl(relativePath: string): string {
  if (relativePath.startsWith('http')) {
    return relativePath;
  }
  return `${API_GATEWAY}${relativePath.startsWith('/') ? '' : '/'}${relativePath}`;
}
