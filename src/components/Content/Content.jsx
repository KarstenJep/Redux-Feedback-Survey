function Content() {

    const handleNext = () => {
        console.log('Clicked next');
         history.push('/Supported');
     }

    return (
<div>
    <button className="next" onClick={handleNext}>Next</button>
</div>
    )
}

export default Content;