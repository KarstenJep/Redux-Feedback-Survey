function Feeling() {

    const handleNext = () => {
       console.log('Clicked next');
        history.push('/Content');
    }

    return (
<div>
    <button className="next" onClick={handleNext}>Next</button>
</div>
    )
}

export default Feeling;