const slow = document.querySelector(".slow");
const hello = document.querySelector(".hello");

slow.addEventListener("click", slowOperation);
hello.addEventListener("click", sayHello);

function slowOperation() {
  const worker = new Worker("worker.js");
  branchedOperation();
}

function branchedOperation() {
  const worker = new Worker("offlimits.js");
}

function sayHello() {
  console.log('Bugs Bunny: "Helloooo, nurse!"');
}
