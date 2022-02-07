import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/quotes'/>} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
      </Routes>
    </div>
  );
}

export default App;
