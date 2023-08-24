const loadComponents = async (id, url) => {
  const res = await fetch(url);
  const text = await res.text();
  return (document.getElementById(id).innerHTML = text);
};

window.onload = async () => {
  loadComponents("hero", "./src/sections/hero.html");
  loadComponents("manage", "./src/sections/manage-team.html");
  loadComponents("qualities","./src/sections/qualities.html");
  loadComponents("partners", "./src/sections/partners.html");
  loadComponents("founders", "./src/sections/founders.html");
  loadComponents("advantages", "./src/sections/advantages.html");
  loadComponents("faq", "./src/sections/faq.html");
  loadComponents("footer", "./src/sections/footer.html");
  await loadComponents("teams", "./src/sections/our-teams.html");
  document.querySelector(".skills").innerHTML = addSkills(skills);
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

const skills = [
  "Typescript",
  "Javascript",
  "React",
  "REST APIs",
  "Redux",
  "test driven development",
  "Data modeling",
  "JWT",
  "CSS",
  "frontend archite",
  "Figma",
  "Next.JS",
  "ORM",
  "Prisma",
  "GraphQL",
  "CI/CD",
  "Scrum Framework",
];

function addSkills(skills) {
  let html = "";
  skills.forEach((skill, index) => {
    if (skill === "test driven development")
      html += `<button class="rounded-3xl bg-white px-4 order-last col-span-2 py-2 sm:mr-3">${skill}</button>`;
    else
      index === 6 && window.innerWidth > 640
        ? (html += `<button class="rounded-3xl bg-white px-4 py-2 sm:mr-3">${skill}</button><br/>`)
        : (html += `<button class="rounded-3xl bg-white px-4 py-2 sm:mr-3">${skill}</button>`);
  });
  return html;
}

window.addEventListener("resize", async () => {
  await loadComponents("teams", "./src/sections/our-teams.html");
  document.querySelector(".skills").innerHTML = addSkills(skills);
});
