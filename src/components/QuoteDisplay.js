export const QuoteDisplay = ({quote, author, loading}) => {
    return (
        <div className={`${loading ? 'fade-out' : 'fade-in'}`}>
            <p className="quotes-display__quote" id="text">{quote}</p>
            <p className="quotes-display__author" id="author">- {author}</p>
        </div>
    )
}