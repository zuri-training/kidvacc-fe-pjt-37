const quotes = [
    {
      quote: "The lives of millions of children have been saved, millions have the chance of a longer healthier life, a greater chance to learn, to play, to read and write, to move around freely without suffering.",
      author: "Nelson Mandela",
    },
    {
      quote: "Vaccines are the most cost-effective health care interventions there are. A dollar spent on a childhood vaccination not only helps save a life, but greatly reduces spending on future healthcare.",
      author: "Ezekiel Emmanuel",
    },
    {
      quote: "Childhood vaccines are one of the great triumphs of modern medicine. Indeed, parents whose children are vaccinated no longer have to worry about their child's death or disability from whooping cough, polio, diphtheria, hepatitis, or a host of other infections.",
      author: "Ezekiel Emmanuel",
    },
    {
      quote: "Vaccination is one of the best things that has happened to civilization. Empires toppled like sand castles in the wake of diseases we do not give a second thought to today.",
      author: "Jennifer Wright",
    },
    {
      quote: "Vaccines are one of our most important tools for preventing outbreaks and keeping the world safe,” “While most children today are being vaccinated, far too many are left behind. Unacceptably, it’s often those who are most at risk– the poorest, the most marginalized, those touched by conflict or forced from their homes - who are persistently missed.",
      author: "Dr Tedros Adhanom Ghebreyesus"
    },
]

let sliderIndex = 0; // initial value of the Slider Index;

let displayQuote = () => {
  let quoteTextContainer = document.getElementById("quote_text");
  let authorName = document.getElementById("author_name");

  sliderIndex++;
  if ( sliderIndex > quotes.length ) {
    sliderIndex = 1
  }
  quoteTextContainer.textContent = quotes[sliderIndex-1].quote;
  authorName.textContent = quotes[sliderIndex-1].author

  setTimeout(displayQuote, 5000); 
}
displayQuote(); 
// END OF QUOTE SLIDER REGION

// LOGIN OVERLAY
