function Comments() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Review');
     }

    return (
        <>
        <form>
            <h2>Any comments you want to leave?</h2>
            <p>Comments?</p>
            <hidden className="input" type="text" />
            <button className="next" onClick={handleNext}>Next</button>
        </form>
    </>
     )
}

export default Comments;