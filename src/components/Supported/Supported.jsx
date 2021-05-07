function Supported() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Comments');
     }

    return (
        <>
        <form>
            <h2>How well are you being supported?</h2>
            <p>Support?</p>
            <hidden className="input" type="number" />
            <button className="next" onClick={handleNext}>Next</button>
        </form>
    </>
    )
}

export default Supported;