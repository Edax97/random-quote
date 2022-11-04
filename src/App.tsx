import "./App.scss";
import { QuoteContainer } from "./components/quote-container/quote-container.component";
import { useAppStyle } from "./services/app-style.provider";

function App() {
  const appStyle = useAppStyle();

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: appStyle?.color }}
    >
      <QuoteContainer />
    </div>
  );
}

export default App;
