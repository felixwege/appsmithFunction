export function myFn() {
  console.log("Hello, World!");
  console.log(window);
  window.addEventListener('message', (event) => {
    console.log("received event", event);
  })
}
