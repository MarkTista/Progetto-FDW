export function getUser() {
  return JSON.parse(sessionStorage.getItem("user"));
}
