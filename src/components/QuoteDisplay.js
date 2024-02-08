export const QuoteDisplay = ({quote, author}) => {
    return (
        <>
            <p className="quotes-display__quote" id="quote-text">{quote}</p>
            <p className="quotes-display__author" id="author">- {author}</p>
        </>
    )
}