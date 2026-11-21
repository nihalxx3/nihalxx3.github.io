// Mobile navigation for the standalone HTML pages.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  toggle.addEventListener("click", () => {
    const opening = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", opening);
    toggle.setAttribute("aria-expanded", String(opening));
    toggle.setAttribute(
      "aria-label",
      opening ? "Close navigation menu" : "Open navigation menu",
    );
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target))
      closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
});

// Facebook-style Research See More / See Less

document.addEventListener("DOMContentLoaded", function () {
  const researchCards = document.querySelectorAll(".research-card");

  researchCards.forEach((card) => {
    const preview = card.querySelector(".research-preview");
    const details = card.querySelector(".research-details");
    const fullText = details?.querySelector(".research-full p:last-child");

    if (!preview || !details || !fullText) return;

    // Save original descriptions
    const shortDescription = preview.textContent.trim();
    const completeDescription = fullText.textContent.trim();

    let expanded = false;

    // Create text container
    const textSpan = document.createElement("span");

    // Create See more button
    const toggleButton = document.createElement("button");

    toggleButton.type = "button";
    toggleButton.className = "research-more-btn";

    // Hide the previous expandable block
    details.hidden = true;

    // Replace preview with expandable inline text
    preview.replaceChildren(
      textSpan,
      document.createTextNode(" "),
      toggleButton,
    );

    function updateDescription() {
      textSpan.textContent = expanded ? completeDescription : shortDescription;

      toggleButton.textContent = expanded ? "See less" : "See more";

      toggleButton.setAttribute("aria-expanded", String(expanded));
    }

    toggleButton.addEventListener("click", function () {
      expanded = !expanded;

      updateDescription();
    });

    updateDescription();
  });
});
