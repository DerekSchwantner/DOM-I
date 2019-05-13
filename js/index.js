const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Careers",
    "nav-item-8": "DOM",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};
//Selectors

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Updating header & main content code snippet images
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Header
const nav = document.querySelectorAll("nav");
const navItems = document.querySelectorAll("nav a");
//adding 2 nav elements
const newNavItem = document.createElement("a");
const newNavItem2 = document.createElement("a");
document.querySelector("header nav").appendChild(newNavItem);
document.querySelector("header nav").appendChild(newNavItem2);

//CTA
const ctaTxt = document.querySelectorAll(".cta-text h1");
const ctaButton = document.querySelectorAll(".cta-text button");

//Top Content
const leftTitle = document.querySelector(".top-content h4");
const leftPara = document.querySelector(".top-content p");
const topTextTitle = document.querySelectorAll(".top-content h4");
const topPara = document.querySelectorAll(".top-content p");

//Bottom Content
const bottomTitle = document.querySelectorAll(".bottom-content h4");
const bottomParas = document.querySelectorAll(".bottom-content p");

//Contact Section
const contactTitle = document.querySelectorAll(".contact h4");
const contactInfo = document.querySelectorAll(".contact p");

//Footer
const copyright = document.querySelectorAll("footer p");

////////////////////////////////////////////////

//Header
navItems[0].innerText = siteContent["nav"]["nav-item-1"];
navItems[1].innerText = siteContent["nav"]["nav-item-2"];
navItems[2].innerText = siteContent["nav"]["nav-item-3"];
navItems[3].innerText = siteContent["nav"]["nav-item-4"];
navItems[4].innerText = siteContent["nav"]["nav-item-5"];
navItems[5].innerText = siteContent["nav"]["nav-item-6"];
// navItems[6].innerText = siteContent["nav"]["nav-item-7"];
// navItems[7].innerText = siteContent["nav"]["nav-item-8"];
navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

//CTA
ctaTxt[0].innerText = siteContent["cta"]["h1"];
ctaButton[0].innerText = siteContent["cta"]["button"];

//Top Content
leftTitle.innerText = siteContent["main-content"]["features-h4"];
topTextTitle[1].innerText = siteContent["main-content"]["about-h4"];
leftPara.innerText = siteContent["main-content"]["features-content"];
topPara[1].innerText = siteContent["main-content"]["about-content"];

//Bottom Content
bottomTitle[0].innerText = siteContent["main-content"]["services-h4"];
bottomTitle[1].innerText = siteContent["main-content"]["product-h4"];
bottomTitle[2].innerText = siteContent["main-content"]["vision-h4"];
bottomParas[0].innerText = siteContent["main-content"]["services-content"];
bottomParas[1].innerText = siteContent["main-content"]["product-content"];
bottomParas[2].innerText = siteContent["main-content"]["vision-content"];

//Contact
contactTitle[0].innerText = siteContent["contact"]["contact-h4"];
contactInfo[0].innerText = siteContent["contact"]["address"];
contactInfo[1].innerText = siteContent["contact"]["phone"];
contactInfo[2].innerText = siteContent["contact"]["email"];

//Footer
copyright[0].innerText = siteContent["footer"]["copyright"];
