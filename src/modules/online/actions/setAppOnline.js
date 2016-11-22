export const SET_APP_ONLINE = Symbol('@@online/SET_APP_ONLINE');

export function setAppOnline() {
  return {
    type: SET_APP_ONLINE,
  };
}
