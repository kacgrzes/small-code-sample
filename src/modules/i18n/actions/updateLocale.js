export const UPDATE_LOCALE = Symbol('@@locale/UPDATE_LOCALE');

export const updateLocale = locale => ({
  type: UPDATE_LOCALE,
  locale,
});
