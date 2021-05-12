import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Content() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [content, setContent] = useState(0);
    
    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next', content);
        if (content < 1 || content > 5) {
            alert('Please enter a value from 1-5 before continuing!')
        } else {
        dispatch( {type: 'CONTENT', payload: content});
        history.push('/Supported');
        setContent(0);
        }
     }

    return (
        <>
            <form className="form" onSubmit={handleNext}>
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <input className="input" type="number" placeholder="Enter 1 - 5" value={content} 
                    onChange={(event) => setContent(event.target.value)}/>
                <button className="next" type="submit">Next</button>
            </form>
        </>
    )
}

export default Content;