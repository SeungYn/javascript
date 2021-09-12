// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
  return 'seungyn';
}

const user = fetchUser();
user.then(console.log);

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000);
  return 'Banana';
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function newPickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

newPickFruits().then(console.log);

//3. useful Promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(+));
}