export const SET_APP_OFFLINE = Symbol('@@online/SET_APP_OFFLINE');

export function setAppOffline() {
  return {
    type: SET_APP_OFFLINE,
  };
}
