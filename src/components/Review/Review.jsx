function Review() {

    const handleNext = () => {
        alert('Survey Complete!')
        // axio POST
        history.push('/Submission');

    }

    return (
            <div>
                <button className="next" onClick={handleNext}>Submit</button>
            </div>
        )
}

export default Review;
