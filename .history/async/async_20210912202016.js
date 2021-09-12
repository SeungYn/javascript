// async & await
// clear style of using promise

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('seungyn');
  });
}

const user = fetchUser();
console.log(user);
