const loadComponents = async (id, url) => {
    const res = await fetch(url);
    const text = await res.text();
    return (document.getElementById(id).innerHTML = text);
  };

  window.onload = () => {
    loadComponents("hero", "./src/sections/hero.html");

  };