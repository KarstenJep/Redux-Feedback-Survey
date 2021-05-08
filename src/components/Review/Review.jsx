import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Review() {

    const history = useHistory();
    const feelings = useSelector(store => store.feelingsReducer)
    const content = useSelector(store => store.contentReducer)
    const supported = useSelector(store => store.supportedReducer)
    const comments = useSelector(store => store.commentsReducer)

    const handleNext = () => {
        alert('Survey Complete!')
        // axio POST
         // // TODO - Reset survey data
        // axios.post(`/feedback`, {
        //                             feeling: feeling, 
        //                             understanding: understanding, 
        //                             support: support,
        //                             comments: comments,
        //                              })
        //     .then( (response) => {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });   
            history.push('/Submission'); 
    }

    return (
        <>
        <div>
            <h2>Review Your Feedback</h2>
        </div>
        <form>
            <p>Feelings: {feelings.feelings}</p>
            <p>Content: {content.content}</p>
            <p>Support: {supported.supported}</p>
            <p>Comments: {comments.comments}</p>
            <button className="next" onClick={handleNext}>Submit</button>
        </form>
    </>
     )
}

export default Review;
