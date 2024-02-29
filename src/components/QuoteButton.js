export const QuoteButton = ({handleFetchQuote}) => {
    return (
        <button type="button" onClick={handleFetchQuote} className="quotes-display__btn" id="new-quote">New
            Quote</button>
    )
}