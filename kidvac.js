const slide = [
    {
        text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        text:
        "It's important for children to be vaccinated so that they have the opportunity to become adults.― Brad McKay, Fake Medicine"
        
    },
    {
        text:
        "Vaccines save lives; fear endangers them. It's a simple message parents need to keep hearing.Jeffrey Kluger"
 
    },
    {
        text:
      "Vaccines are a miracle; they're fantastic. Anything that makes people hesitate to give their children these vaccines according to the recommended schedule creates risk. Risk for the children who don't get vaccinated and risk for children, some of whom don't have an immune system, so they're benefiting from the fact that the community protection means the disease doesn't get to them. Bill Gates",
    }
];

const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  currentItem++;
  const item = slide[currentItem];
  info.textContent = item.text;
  setInterval(currentItem);
});

// show person based on item
function showText(e) {
    const item = slide[e];
    info.textContent = item.text;
  }

  // show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > slide.length - 1) {
      currentItem = 0;
    }
    showText(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = slide.length - 1;
    }
    showText(currentItem);
  });

  setInterval(function() {
    $("#info").html(slide[currentItem]);
    info.textContent = item.text;
    if (currentItem == slide.length)
    currentItem=0;
    else
    currentItem++;
}, 1 * 1000);


