// Function para seleccionar elementos
const selectElement = (s) => document.querySelector(s);
const selectElementById = (id) => document.getElementById(id);
// toggle
function toggleClass(el, className) {
  if (!el) {
    return;
  }

  if (el.classList.contains(className)) {
    el.classList.remove(className);

    return;
  }

  el.classList.add(className);
}
