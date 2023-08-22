const loadComponents = async (id, url) => {
  const res = await fetch(url);
  const text = await res.text();
  return (document.getElementById(id).innerHTML = text);
};

window.onload = () => {
  loadComponents("hero", "./src/sections/hero.html");
  loadComponents("manage", "./src/sections/manage-team.html");
  loadComponents("partners", "./src/sections/partners.html");
};

function toggleMenu() {
  const icon = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    icon.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>`;
  } else {
    menu.classList.add("hidden");
    icon.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>`;
  }
}
