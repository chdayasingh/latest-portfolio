const daya = {
  name: {
    first: "Daya",
    middle: "Shankar",
    last: "Chaudhary",
  },
  profile:
    "I am Daya, a passionate MCA student with a background in BSc Computer Science. My primary interests lie in Java and JavaScript, and I am dedicated to becoming a proficient full stack developer. As a tech enthusiast, I am constantly seeking opportunities to expand my knowledge and apply it to real-world projects.",

  education: [
    {
      name: "",
      course: "",
      year: [2022, 2024],
      grade: "A",
    },
    {
      name: "",
      course: "",
      year: [2018, 2021],
      grade: "A",
    },
    {
      name: "",
      course: "",
      year: [2016, 2018],
      grade: "A",
    },
  ],

  projects: [{ title: "", description: "" }, {}, {}],

  contacts: {
    phone: "+91 8595874024",
    email: "dayashankar2001@gmail.com",
    address: "South East Delhi, India",
  },

  links: {
    website: "",
    github: "",
    linkedin: "",
  },

  skills: [
    "DSA with Java",
    "HTML, CSS, JavaScript",
    "React",
    "Node JS",
    "Python",
    "Sql",
    "Git & Github",
  ],
  cerificates: [],
  resume:
    "https://drive.google.com/file/d/1d7TGN5VW6-7eAG7Bp0zGWJoKQISxdCQF/view?usp=drive_link",
};

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

// Check for stored mode preference and apply it on page load
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
}
