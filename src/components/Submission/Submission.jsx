import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Submission() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({ type: 'CLEAR' })
        alert('Survey resetting... one moment please.')
        history.push('/');
    }

    return (
        <>
             <div>
                <h1>Thank You!</h1>
                <button className="next" onClick={handleNext}>Leave New Feedback</button>
            </div>
        </>
    )
}

export default Submission;