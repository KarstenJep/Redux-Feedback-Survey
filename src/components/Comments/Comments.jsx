function Comments() {

    const handleNext = () => {
        
        history.push('/');
    }

    return (
            <div>
                <button className="next" onClick={handleNext}>Next</button>
            </div>
     )
}

export default Comments;