function Supported() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Comments');
     }

    return (
            <div>
                <button className="next" onClick={handleNext}>Next</button>
            </div>
    )
}

export default Supported;