// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const meme = document.createElement("img");
meme.setAttribute(
  "src",
  "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjkxNzE3My9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYwNDExNjkwOH0._9Ltw00lLR-Zc8SZa1tr3p4_g2zDbU0WJ-VN8luLOIQ/img.jpg?width=980"
);

const body = document.querySelector("body");

body.addEventListener("click", showImage);

function showImage() {
  body.appendChild(meme);
  body.removeEventListener("click", showImage);
}
