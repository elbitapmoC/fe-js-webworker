for (let i = 0; i < 3000000000; i++) {
  i + 1;
}

addEventListener("message", (e) => {
  console.log(e);
});

console.log("Slow operation finished.");
