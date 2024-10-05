export const HOST = import.meta.env.VITE_SERVER_URL;
export const AUTH_ROUTES = "/api/admin";
export const DATA_ROUTE = "/api/Data";

export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/create`;
export const GET_ADMIN_INFO_ROUTE = `${AUTH_ROUTES}/adminInfo`;
export const ADMIN_LOGOUT_ROUTE = `${AUTH_ROUTES}/Logout`;
export const ADD_LANDING_PAGE_INFO_ROUTE = `${DATA_ROUTE}/AddLandingPageInfo`;
