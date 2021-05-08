import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Content() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState('')
    
    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next', content);
        dispatch( {type: 'CONTENT', payload: {content: content}});
        history.push('/Supported');
        setContent('');
     }

    return (
        <>
            <form className="form" onSubmit={handleNext}>
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <input className="input" type="number" value={content} 
                    onChange={(event) => setContent(event.target.value)}/>
                <button className="next" type="submit">Next</button>
            </form>
        </>
    )
}

export default Content;