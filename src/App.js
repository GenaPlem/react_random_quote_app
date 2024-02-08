import './App.scss';

import {QuoteDisplay} from "./components/QuoteDisplay";
import {QuoteButton} from "./components/QuoteButton";
import {QuoteTweet} from "./components/QuoteTweet";

import {useEffect, useState} from "react";

function App() {
    const [quote, setQuote] = useState({})

    return (
        <div className="quotes-display" id="quote-box">
            <QuoteDisplay/>
            <div className="quotes-display__actions">
                <QuoteTweet/>
                <QuoteButton/>
            </div>
        </div>
    );
}

export default App;
