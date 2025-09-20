// Generate random motivational quotes
export const getTodayDate = () => {
  return new Date().toLocaleDateString();
};

export const randomQuote = () => {
  const quotes = [
    "Push yourself, because no one else will do it for you.",
    "Small progress each day adds up to big results.",
    "Discipline is the bridge between goals and accomplishment.",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

