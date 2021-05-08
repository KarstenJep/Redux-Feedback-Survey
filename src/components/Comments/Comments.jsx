import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next');
        dispatch( {type: 'COMMENTS', payload: {comments: comments}});
        history.push('/Review');
        setComments('');
     }

    return (
        <>
        <form className="form" onSubmit={handleNext}>
            <h2>Any comments you want to leave?</h2>
            <p>Comments?</p>
            <input className="input" type="text" value={comments} 
                    onChange={(event) => setComments(event.target.value)}/>
            <button className="next" type="submit">Next</button>
        </form>
    </>
    )
}

export default Comments;