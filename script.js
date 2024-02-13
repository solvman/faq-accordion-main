document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = header.querySelector(".accordion-icon");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        icon.classList.add("icon-minus");
        icon.classList.remove("icon-plus");
      } else {
        icon.classList.add("icon-plus");
        icon.classList.remove("icon-minus");
      }
    });
  });
});
