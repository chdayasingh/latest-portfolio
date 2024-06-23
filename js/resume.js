// import daya from "./daya";

// Code for Mode Switch Button
const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;
const svgG = document.getElementById("logo");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    // Save dark mode preference to local storage or cookie
    localStorage.setItem("mode", "dark");
  } else {
    // Save light mode preference to local storage or cookie
    localStorage.setItem("mode", "light");
  }
});

// DOM populating
document.getElementById("profile").innerText = daya.profile;
document.getElementById("resume-download").setAttribute("href", daya.resume);

const skillContainer = document.getElementById("skills");
for (let skill of daya.skills) {
  const skillItem = document.createElement("li");
  skillItem.innerHTML = skill;
  skillContainer.appendChild(skillItem);
}

const contactContainer = document.getElementById("contacts");
for (let contact in daya.contacts) {
  const contactItem = document.createElement("li");
  const contactTitle = document.createElement("p");
  contactTitle.innerHTML = contact.toUpperCase();
  const contactDetail = document.createElement("a");
  contactDetail.innerText = daya.contacts[contact];
  contactDetail.setAttribute("href", "#");

  contactItem.appendChild(contactTitle);
  contactItem.appendChild(contactDetail);
  contactContainer.appendChild(contactItem);
}

// Check for stored mode preference and apply it on page load
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
}
