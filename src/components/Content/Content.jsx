function Content() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Supported');
     }

    return (
        <>
        <form>
            <h2>How well are you understanding the content?</h2>
            <p>Understanding?</p>
            <hidden className="input" type="number" />
            <button className="next" onClick={handleNext}>Next</button>
        </form>
    </>
    )
}

export default Content;