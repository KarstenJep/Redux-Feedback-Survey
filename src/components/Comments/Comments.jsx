function Comments() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Review');
     }

    return (
            <div>
                <button className="next" onClick={handleNext}>Next</button>
            </div>
     )
}

export default Comments;