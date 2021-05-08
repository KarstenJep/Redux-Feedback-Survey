import { useHistory } from 'react-router-dom';

function Review() {

    const history = useHistory();

    const handleNext = () => {
        alert('Survey Complete!')
        // axio POST
         // // TODO - Reset survey data
        // axios.post(`/feedback`, {
        //                             feeling: feeling, 
        //                             understanding: understanding, 
        //                             support: support,
        //                             comments: comments,
        //                             flagged: flagged })
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
            <p>Feelings: {feelings}</p>
            <p>Understanding: {Understanding}</p>
            <p>Support: {Support}</p>
            <p>Comments: {Comments}</p>
            <button className="next" onClick={handleNext}>Submit</button>
        </form>
    </>
     )
}

export default Review;
