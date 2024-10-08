export function myFn() {
  console.log("Hello, World!");
  window.addEventListener('message', (event) => {
    console.log("received event", event);
  })
}
