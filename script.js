document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = header.querySelector(".accordion-icon");
    const content = item.querySelector(".accordion-content");

    content.style.height = "0px";

    header.addEventListener("click", () => {
      accordionItems.forEach((item) => {
        if (item !== content.parentElement) {
          const otherContent = item.querySelector(".accordion-content");
          otherContent.classList.remove("active");
          otherContent.style.height = "0px";

          item
            .querySelector(".accordion-icon")
            .classList.replace("icon-minus", "icon-plus");
        }
      });

      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
        icon.classList.replace("icon-plus", "icon-minus");
      } else {
        content.style.height = "0px";
        icon.classList.replace("icon-minus", "icon-plus");
      }
    });
  });
});
