// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
  return 'seungyn';
}

const user = fetchUser();
user.then(console.log);
