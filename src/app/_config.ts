// export const loggedInUser = JSON.parse(localStorage.getItem("user"));

// console.log("loggedInUser", loggedInUser);

export function isUserLoggedIn(): boolean {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  return user !== null && token !== null;
}

// if (isUserLoggedIn()) {
//   console.log("User is logged in");
// } else {
//   console.log("User is not logged in");
// }
