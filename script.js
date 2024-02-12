const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  const menuHovered = navItem.querySelector(".menu-hovered");

  navItem.addEventListener("mouseover", () => {
    menuHovered.classList.remove("hidden");
  });

  navItem.addEventListener("mouseout", () => {
    // Delay hiding the submenu for a smoother experience
    menuHovered.classList.add("hidden");
    // Adjust the delay time as needed
  });
});
