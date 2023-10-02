document.addEventListener("DOMContentLoaded", function () {
  const assistant = document.getElementById("assistant");
  const hoverIcon = document.getElementById("hover-icon");
  const buttons = document.querySelectorAll("button");

  function moveToElement(element) {
    const elementRect = element.getBoundingClientRect();
    assistant.style.left = `${elementRect.left - 10}px`;
    assistant.style.top = `${elementRect.top + 30}px`;
  }

  function showExplanation(element) {
    const explanation = element.getAttribute("data-content");
    alert(explanation);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      moveToElement(button);
      showExplanation(button);
    });
  });

  hoverIcon.addEventListener("click", function () {
    alert("Hover over elements to get explanations!");
  });

  //3d effects
  document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;
    assistant.style.transform = `rotateX(${mouseY * 360}deg) rotateY(${
      mouseX * 360
    }deg)`;
  });
});
