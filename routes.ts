/**
 * This a an array of routes which are publicly accessible to the users.
 * @type { string[] }
 */
export const publicRoutes = [
  '/',
];

/**
 * This is an array of authentication routes. These are used for authentication and redirect users to settings page.
 * @type { string[] }
 */

export const authRoutes = [
  '/auth/login',
  '/auth/register',
];

/**
 * This is an array of routes which are secured and require authentication by users for them to access these routes.
 * @type { string[] }
 */

export const protectedRoutes = [
  '/settings'
];

export const DEFAULT_LOGIN_REDIRECT = '/settings';

export const authPrefix = '/api/auth';