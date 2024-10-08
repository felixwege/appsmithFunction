export function myFn() {
  console.log("Hello, World!");
  window.addEventListener('event', (event) => {
    console.log("received event", event);
  })
}
