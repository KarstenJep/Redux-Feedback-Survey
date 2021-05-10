import { useHistory } from 'react-router-dom';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

function Review() {

    const history = useHistory();
    const review = useSelector(store => store);
    console.log(review);

    const handleNext = () => {
        alert('Survey Complete!')  
        history.push('/submission'); 
    }

    return (
        <>
        <div>
            <h2>Review Your Feedback</h2>
        </div>
        <form>
            <p>Feelings: {review.feelingReducer}</p>
            <p>Content: {review.contentReducer}</p>
            <p>Support: {review.supportedReducer}</p>
            <p>Comments: {review.commentsReducer}</p>
            <button className="next" onClick={handleNext}>Submit</button>
        </form>
    </>
     )
}

export default Review;
