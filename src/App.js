import './App.scss';

import {QuoteDisplay} from "./components/QuoteDisplay";
import {QuoteButton} from "./components/QuoteButton";
import {QuoteTweet} from "./components/QuoteTweet";

import {useEffect, useState} from "react";
import {fetchQuote} from "./utils/fetchQuote";

const App = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchQuote = async () => {
        setLoading(true)
        setError(null)

        const {error, response} = await fetchQuote()

        if (error) {
            setError(error.message)
        } else {
            setAuthor(response[0].author)
            setQuote(response[0].quote)
        }

        setLoading(false)
    }

    useEffect(() => {
        handleFetchQuote()
    }, [])

    return (
        <div className="quotes-display" id="quote-box">
            <QuoteDisplay quote={quote} author={author} loading={loading}/>
            <div className="quotes-display__actions">
                <QuoteTweet/>
                <QuoteButton handleFetchQuote={handleFetchQuote}/>
            </div>
        </div>
    );
}

export default App;
