/* ========================= */
/* LOADING SCREEN */
/* ========================= */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.transition =
    "0.5s";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }, 1500);

});

/* ========================= */
/* DARK / LIGHT MODE */
/* ========================= */

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle(
    "light-mode"
  );

  if (
    document.body.classList.contains(
      "light-mode"
    )
  ) {

    themeToggle.textContent = "☀️";

  } else {

    themeToggle.textContent = "🌙";

  }

});

/* ========================= */
/* MOBILE NAVIGATION */
/* ========================= */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");

});

/* CLOSE MENU WHEN CLICKING LINK */

document
.querySelectorAll(".nav-item")
.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("show");

  });

});

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

const typingElement =
document.querySelector(".typing");

const words = [

  "Web Developer",

  "Frontend Builder",

  "IT Support",

  "Database Developer",

  "Pixel Designer"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

  const currentWord =
  words[wordIndex];

  if (!isDeleting) {

    typingElement.textContent =
    currentWord.substring(
      0,
      charIndex++
    );

  } else {

    typingElement.textContent =
    currentWord.substring(
      0,
      charIndex--
    );

  }

  /* WHEN WORD FINISH */

  if (
    !isDeleting &&
    charIndex ===
    currentWord.length + 1
  ) {

    isDeleting = true;

    setTimeout(typeEffect, 1200);

    return;

  }

  /* WHEN DELETE FINISH */

  if (
    isDeleting &&
    charIndex === 0
  ) {

    isDeleting = false;

    wordIndex++;

    if (
      wordIndex >= words.length
    ) {

      wordIndex = 0;

    }

  }

  setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
  );

}

typeEffect();

/* ========================= */
/* SECTION REVEAL ANIMATION */
/* ========================= */

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect()
    .top;

    const revealPoint = 100;

    if (
      revealTop <
      windowHeight - revealPoint
    ) {

      section.classList.add(
        "active"
      );

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* ========================= */
/* ACTIVE NAVIGATION */
/* ========================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-item");

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
      section.offsetTop;

      const sectionHeight =
      section.clientHeight;

      if (
        pageYOffset >=
        sectionTop - 200
      ) {

        current =
        section.getAttribute("id");

      }

    });

    navItems.forEach((link) => {

      link.classList.remove(
        "active"
      );

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);

/* ========================= */
/* STATS COUNTER */
/* ========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter) => {

  const updateCounter = () => {

    const target =
    +counter.getAttribute(
      "data-target"
    );

    const count =
    +counter.innerText;

    const increment =
    Math.ceil(target / 100);

    if (count < target) {

      counter.innerText =
      count + increment;

      setTimeout(
        updateCounter,
        25
      );

    } else {

      counter.innerText =
      target;

    }

  };

  updateCounter();

});

/* ========================= */
/* OPTIONAL CLICK SOUND */
/* ========================= */

const clickSound =
document.getElementById(
  "click-sound"
);

const buttons =
document.querySelectorAll(
  ".pixel-btn"
);

buttons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      if (clickSound) {

        clickSound.currentTime = 0;

        clickSound.play();

      }

    }
  );

});

/* ========================= */
/* CONTACT FORM TEMPLATE */
/* ========================= */

const contactForm =
document.getElementById(
  "contact-form"
);

contactForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    /* FORM DATA */

    const formData = {

      name:
      contactForm.name.value,

      email:
      contactForm.email.value,

      project:
      contactForm.project.value,

      message:
      contactForm.message.value

    };

    console.log(formData);

    /* ========================= */
    /* EMAILJS TEMPLATE */
    /* ========================= */

    /*
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData
    ).then(() => {

      alert("MESSAGE SENT!");

    }).catch((error) => {

      console.log(error);

    });
    */

    /* ========================= */
    /* PHP TEMPLATE */
    /* ========================= */

    /*
    fetch("send.php", {

      method: "POST",

      headers: {
        "Content-Type":
        "application/json"
      },

      body:
      JSON.stringify(formData)

    });
    */

    alert(
      "PROJECT REQUEST SENT!"
    );

    contactForm.reset();

  }
);

/* ========================= */
/* SMOOTH SCROLL */
/* ========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach((anchor) => {

  anchor.addEventListener(
    "click",
    function (e) {

      e.preventDefault();

      document
      .querySelector(
        this.getAttribute("href")
      )
      .scrollIntoView({

        behavior: "smooth"

      });

    }
  );

});

/* ========================= */
/* PARALLAX EFFECT */
/* ========================= */

window.addEventListener(
  "scroll",
  () => {

    const background =
    document.querySelector(
      ".pixel-background"
    );

    let scrollPosition =
    window.pageYOffset;

    background.style.transform =
    `translateY(${
      scrollPosition * 0.2
    }px)`;

  }
);

/* ========================= */
/* CUSTOM CURSOR GLOW */
/* ========================= */

document.addEventListener(
  "mousemove",
  (e) => {

    document.body.style.backgroundPosition =
    `${e.clientX / 50}px ${
      e.clientY / 50
    }px`;

  }
);