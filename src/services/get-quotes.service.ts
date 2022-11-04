import { QuotesResponseType } from "../types/quotes-response-type";
import { randomNumber } from "./random-utils";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
console.log("API URL", API_URL);

export const getQuotes = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getRandomQuote = async () => {
  try {
    const response: QuotesResponseType = await getQuotes();
    const randomQuote =
      response.quotes[randomNumber(0, response.quotes.length - 1)];
    return await randomQuote;
  } catch (error) {
    throw error;
  }
};
