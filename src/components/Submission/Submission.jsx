function Submission() {

    const handleNext = () => {
        alert('Survey resetting... one moment please.')
        // TODO - Reset survey data
        history.push('/');
    }

    return (
             <div>
                <button className="next" onClick={handleNext}>Leave New Feedback</button>
            </div>
    )
}

export default Submission;