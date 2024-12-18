import { useState } from 'react';
import { sculptureList } from './data/data.js';
import Form from './component/Form.js';
import FeedbackForm from './component/FeedbackForm.js';
export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index + 1 == sculptureList.length) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    var sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <Form></Form>
            <FeedbackForm></FeedbackForm>
        </>
    );
}