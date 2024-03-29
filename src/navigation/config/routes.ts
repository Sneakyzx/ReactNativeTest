const AUTHENTICATE_ROUTE = {
  LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
  REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
};

const APP_ROUTE = {
  MAIN_TAB: '@APP_ROUTE/MAIN_TAB',
};

const HOME_ROUTE = {
  ROOT: '@HOME_ROUTE/ROOT',
  HOME_SCREEN: '@HOME_ROUTE/HOME_SCREEN',
};

const DETAILS_ROUTE = {
  ROOT: '@DETAILS_ROUTE/ROOT',
  DETAILS_SCREEN : '@DETAILS_ROUTE/DETAILS_SCREEN'
};

const ADDNOTE_ROUTE = {
  ROOT: '@ADDNOTE_ROUTE/ROOT',
  ADDNOTE_SCREEN : '@ADDNOTE_ROUTE/ADDNOTE_SCREEN'
};

const NOTE_ROUTE = {
  NOTE_SCREEN : '@NOTE_ROUTE/NOTE_SCREEN',
  ROOT: '@NOTE_ROUTE/ROOT',
};

const TAB_NAVIGATION_ROOT = {
  HOME_ROUTE,
  DETAILS_ROUTE,
  ADDNOTE_ROUTE,
  NOTE_ROUTE,
  AUTHENTICATE_ROUTE
};

export { APP_ROUTE, TAB_NAVIGATION_ROOT, AUTHENTICATE_ROUTE, HOME_ROUTE,  ADDNOTE_ROUTE, NOTE_ROUTE , DETAILS_ROUTE};
