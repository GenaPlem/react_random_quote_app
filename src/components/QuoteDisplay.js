export const QuoteDisplay = ({quote, author, isLoading}) => {
    return (
        <div className={`${isLoading ? 'fade-out' : 'fade-in'}`}>
            <p className="quotes-display__quote" id="text">{quote}</p>
            <p className="quotes-display__author" id="author">- {author}</p>
        </div>
    )
}