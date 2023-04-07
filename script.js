// Slider

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.querySelectorAll(".slider-item");

  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
};

showSlide(slideIndex);

// Modal
const modalContent = [
  {
    title: "dummy",
    desc: "dummy",
  },
  {
    title: "Project 1",
    desc: "This is an image for project 1",
  },
  {
    title: "Project 2",
    desc: "This is an image for Project 2",
  },
  {
    title: "Project 3",
    desc: "This is an image for Project 3",
  },
  {
    title: "Ninja Ken",
    desc: "ini gambar Ninja Ken",
  },
  {
    title: "Guru Domba",
    desc: "ini gambar Guru Domba",
  },
  {
    title: "Ninja Ken",
    desc: "ini gambar Ninja Ken ketika senang",
  },
  {
    title: "Guru Domba",
    desc: "Ini gambar Guru Domba ketika terbang",
  },
];

// Logic untuk menampilkan modal
const images = document.querySelectorAll(".img");

const modal = document.getElementsByClassName("modal-wrapper");

const showModal = (src) => {
  const imgProject = document.getElementById("img-project");
  modal[0].style.display = "block";
  imgProject.src = `./src/${src}.png`;
  imgProject.width = "100%";

  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");

  switch (src) {
    case 1:
      modalTitle.innerHTML = `${modalContent[1].title}`;
      modalDesc.innerHTML = `${modalContent[1].desc}`;
      break;
    case 2:
      modalTitle.innerHTML = `${modalContent[2].title}`;
      modalDesc.innerHTML = `${modalContent[2].desc}`;
      break;
    case 3:
      modalTitle.innerHTML = `${modalContent[3].title}`;
      modalDesc.innerHTML = `${modalContent[3].desc}`;
      break;
    case 4:
      modalTitle.innerHTML = `${modalContent[4].title}`;
      modalDesc.innerHTML = `${modalContent[4].desc}`;
      break;
    case 5:
      modalTitle.innerHTML = `${modalContent[5].title}`;
      modalDesc.innerHTML = `${modalContent[5].desc}`;
      break;
    case 6:
      modalTitle.innerHTML = `${modalContent[6].title}`;
      modalDesc.innerHTML = `${modalContent[6].desc}`;
      break;
    case 7:
      modalTitle.innerHTML = `${modalContent[7].title}`;
      modalDesc.innerHTML = `${modalContent[7].desc}`;
      break;
  }
};

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     modal[0].style.display = "block";
//   });
// });

const modalCloseButton = document.getElementById("closeModalIcon");

modalCloseButton.addEventListener("click", () => {
  modal[0].style.display = "none";
});

// Accordion FAQ
const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    const panel = document.getElementsByClassName("panel");
    if (panel[i].style.display == "") {
      panel[i].style.display = "block";
    } else if (panel[i].style.display == "block") {
      panel[i].style.display = "none";
    } else if (panel[i].style.display == "none") {
      panel[i].style.display = "block";
    }
  });
}
