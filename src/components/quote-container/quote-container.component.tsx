import { useEffect, useState } from "react";
import { useAppStyle } from "../../services/app-style.provider";
import { getRandomQuote } from "../../services/get-quotes.service";
import { QuoteType } from "../../types/quote-type";
import { QuoteBox } from "../quote-box/quote-box.component";

const initialQuote: QuoteType = {
  author: "",
  quote: "",
};

export const QuoteContainer = () => {
  const [quote, setQuote] = useState(initialQuote);
  const appStyle = useAppStyle();

  useEffect(() => {
    getRandomQuote().then((response: QuoteType) => setQuote(response));
  }, []);

  const onNewQuote = () => {
    getRandomQuote().then((response: QuoteType) => setQuote(response));
    appStyle?.setColor();
  };

  return (
    <div className="">
      <QuoteBox
        textQuote={quote.quote}
        author={quote.author}
        tweetMessage={`"${quote.quote}". ${quote.author}`}
        onNewQuote={onNewQuote}
      />
    </div>
  );
};
