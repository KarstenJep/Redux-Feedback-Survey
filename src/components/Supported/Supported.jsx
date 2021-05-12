import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [supported, setSupported] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next', supported);
        if (supported < 1 || supported > 5) {
            alert('Please enter a value from 1-5 before continuing!')
        } else {
        dispatch( {type: 'SUPPORTED', payload: supported});
        history.push('/comments');
        setSupported('');
        }
     }

    return (
        <>
        <form className="form" onSubmit={handleNext}>
            <h2>How well are you being supported?</h2>
            <p>Support?</p>
            <input className="input" type="number" value={supported} 
                    onChange={(event) => setSupported(event.target.value)}/>
            <button className="next" type="submit">Next</button>
        </form>
    </>
    )
}

export default Supported;