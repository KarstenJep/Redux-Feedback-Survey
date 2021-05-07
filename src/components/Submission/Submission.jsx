function Submission() {

    const handleNext = () => {
        alert('Survey resetting... one moment please.')
        history.push('/');
    }

    return (
        <>
            <div>
                <p><h2>Feedback!</h2></p>
            </div>
             <div>
                <p><h2>Thank You!</h2></p>
                <button className="next" onClick={handleNext}>Leave New Feedback</button>
            </div>
        </>
    )
}

export default Submission;