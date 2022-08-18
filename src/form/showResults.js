const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default (async function showResults(Values) {
  await sleep(500);
  console.log(`you are submitted: \n\n${JSON.stringify(Values, null, 2)}`);
});
