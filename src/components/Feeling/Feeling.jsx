function Feeling() {

    const handleNext = () => {
       console.log('Clicked next');
        history.push('/Content');
    }

    return (
        <>
            <form>
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <hidden className="input" type="number" />
                <button className="next" onClick={handleNext}>Next</button>
            </form>
        </>
    )
}

export default Feeling;