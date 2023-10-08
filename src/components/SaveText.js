import React, { useState, useRef, useImperativeHandle } from 'react';
import JoditEditor from 'jodit-react';
import { saveAs } from 'file-saver';

const SaveText = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState(placeholder);
    // const [image, setImage] = useState(images);
    const text2save = placeholder;
    const blob = new Blob([text2save], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'article.txt');

    return (
        <div>
            {/* {text2save} */}
        </div>
    )
};

export default SaveText;