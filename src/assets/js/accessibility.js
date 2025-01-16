menu_icon.addEventListener('keypress', (e) => {
  e.preventDefault()
  const { key } = e
                             // Space
  if(key === 'Enter' || key === ' ') {
    menu_icon.childNodes[1].getAttribute("d") == "M4 6h36M4 12h8m-8 6h36"
    ? menu_icon.childNodes[1].setAttribute("d", "M6 18L18 6M6 6l12 12")
    : menu_icon.childNodes[1].setAttribute("d", "M4 6h36M4 12h8m-8 6h36");

    menu_icon.getAttribute("aria-expanded") == "false" ? menu_icon.setAttribute("aria-expanded", "true") : menu_icon.setAttribute("aria-expanded", "false")

    menu_icon.getAttribute("aria-label") == "open dropdown menu navigation" ? 
    menu_icon.setAttribute("aria-label", "close dropdown menu navigation") : 
    menu_icon.setAttribute("aria-label", "open dropdown menu navigation") 

  if (nav.classList.contains("active-menu")) {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");
    nav.removeAttribute("aria-label", "open dropdown menu navigation")
  } else {
    nav.classList.remove("inactive-menu");
    nav.classList.add("active-menu");
  }
  }
})

submenu_link.addEventListener('keypress', (e) => {
  e.preventDefault()
  const { key } = e
  if(key === 'Enter' || key === ' ') {
    submenu_link.getAttribute("aria-expanded") == "false" ? submenu_link.setAttribute("aria-expanded", "true") : submenu_link.setAttribute("aria-expanded", "false")

    submenu_link.getAttribute("aria-label") == "open pages submenu dropdow" ? 
    submenu_link.setAttribute("aria-label", "close pages submenu dropdow") : 
    submenu_link.setAttribute("aria-label", "open pages submenu dropdow") 

    if (submenu.classList.contains("active-submenu")) {
      submenu.classList.remove("active-submenu");
      submenu.classList.add("inactive-submenu");
    } else {
      submenu.classList.remove("inactive-submenu");
      submenu.classList.add("active-submenu");
    }
  }
});
