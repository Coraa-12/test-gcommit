// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const name = nameInput.value.trim();
    if (name) {
      alert(`Thanks for submitting, ${name}!`);
    } else {
      alert("Please enter your name.");
    }
  });
});
