import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        console.log('Clicked next', feeling);
        if (feeling < 1 || feeling > 5) {
            alert('Please enter a value from 1-5 before continuing!')
        } else {
            dispatch( {type:'FEELING', payload: feeling});
            history.push('/content');
            setFeeling(0);
        } 
    }

    return (
        <>
            <form className="form" onSubmit={handleNext}>
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <input className="input" type="number" value={feeling} 
                    onChange={(event) => setFeeling(event.target.value)}/>
                <button className="next" type="submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;