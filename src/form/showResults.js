const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default (async function showResults(Values) {
  await sleep(500);
  localStorage.setItem("user data", JSON.stringify(Values));
  sessionStorage.setItem("user data", JSON.stringify(Values));
});
