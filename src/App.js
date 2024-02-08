import './App.scss';

import {QuoteDisplay} from "./components/QuoteDisplay";
import {QuoteButton} from "./components/QuoteButton";
import {QuoteTweet} from "./components/QuoteTweet";

import {useEffect, useState} from "react";

function App() {
    const [quote, setQuote] = useState({})

    const fetchQuote = async () => {
        let data
        try {
            const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
            data = await response.json();
            if (data && data.length > 0) {
                console.log(data)
                setQuote(data[0]);
            }
        } catch (error) {
            console.error("Error to fetch data:", error);
        }
        return data
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <div className="quotes-display" id="quote-box">
            <QuoteDisplay quote={quote.quote} author={quote.author}/>
            <div className="quotes-display__actions">
                <QuoteTweet/>
                <QuoteButton fetchQuote={fetchQuote}/>
            </div>
        </div>
    );
}

export default App;
