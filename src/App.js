import './App.scss';
import {QuoteDisplay} from "./components/QuoteDisplay";
import {QuoteButton} from "./components/QuoteButton";
import {QuoteTweet} from "./components/QuoteTweet";

function App() {
    return (
        <div className="quotes-display" id="quote-box">
            <QuoteDisplay/>
            <QuoteTweet/>
            <QuoteButton/>
        </div>
    );
}

export default App;
