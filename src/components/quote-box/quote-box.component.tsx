import { useAppStyle } from "../../services/app-style.provider";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./quote-box.component.scss";
interface PropsType {
  textQuote: string;
  author: string;
  tweetMessage: string;
  onNewQuote: (arg: any) => any;
}

export const QuoteBox = (props: PropsType) => {
  const appStyle = useAppStyle();

  return (
    <div
      id="quote-box"
      className="card pt-5 pb-4 px-4"
      style={{ color: appStyle?.color }}
    >
      <h1 id="text" className="display-6 fw-bold">
        <FaQuoteLeft /> {" " + props.textQuote}
      </h1>
      <div className="d-flex">
        <h5 id="author" className="ms-auto">
          {props.author}
        </h5>
      </div>
      <div className="d-flex pt-4">
        <a
          id="tweet-quote"
          href={"https://twitter.com/intent/tweet?text=" + props.tweetMessage}
          className="me-auto btn"
          target="__blank"
          style={{ backgroundColor: appStyle?.color, color: "white" }}
        >
          <FaTwitter style={{ fontSize: "1.2rem" }} />
        </a>
        <button
          id="new-quote"
          className="btn"
          style={{ backgroundColor: appStyle?.color, color: "white" }}
          onClick={props.onNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
