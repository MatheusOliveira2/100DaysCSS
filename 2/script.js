const content = document.getElementsByClassName("content")[0];

content.addEventListener("click", () => {
  const first = document.getElementsByClassName("one")[0];
  const middle = document.getElementsByClassName("two")[0];
  const last = document.getElementsByClassName("three")[0];
  if (middle.classList.contains("open")) {
    middle.classList.remove("open");
    first.classList.remove("open");
    last.classList.remove("open");

    middle.classList.add("close");
    first.classList.add("close");
    last.classList.add("close");
  } else {
    middle.classList.remove("close");
    first.classList.remove("close");
    last.classList.remove("close");

    middle.classList.add("open");
    first.classList.add("open");
    last.classList.add("open");
  }
});
