import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [supported, setSupported] = useState('')

    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next', supported);
        dispatch( {type: 'SUPPORTED', payload: supported});
         history.push('/Comments');
         // setFeeling('');
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