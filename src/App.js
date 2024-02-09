import './App.scss';

import {QuoteDisplay} from "./components/QuoteDisplay";
import {QuoteButton} from "./components/QuoteButton";
import {QuoteTweet} from "./components/QuoteTweet";

import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
        this.fetchQuote = this.fetchQuote.bind(this);
    }

    fetchQuote() {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes')
            .then(data => data.json())
            .then(data => {
                if (data && data.length > 0) {
                    this.setState({
                            quote: data[0].quote,
                            author: data[0].author
                        }
                    )
                }
            });
    }

    componentDidMount() {
        this.fetchQuote()
    }

    render() {
        return (
            <div className="quotes-display" id="quote-box">
                <QuoteDisplay quote={this.state.quote} author={this.state.author}/>
                <div className="quotes-display__actions">
                    <QuoteTweet/>
                    <QuoteButton fetchQuote={this.fetchQuote}/>
                </div>
            </div>
        );
    }
}

export default App;
