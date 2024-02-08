export const QuoteButton = ({fetchQuote}) => {
    return (
        <button type="button" onClick={fetchQuote} className="quotes-display__btn" id="new-quote">New
            Quote</button>
    )
}