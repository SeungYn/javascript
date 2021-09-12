// async & await
// clear style of using promise

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('seungyn');
  });
}

const user = fetchUser();
user.then((data) => console.log(data));
console.log(user);
