import React, { useState, useRef, useImperativeHandle } from 'react';
import JoditEditor from 'jodit-react';


const JoditRTE = ({ placeholder, images }) => {
	const editor = useRef(null);
	const [content, setContent] = useState(placeholder);
	const [image, setImage] = useState(images);



	return (
		<div style={{ margin: "20px", padding: "20px" }}>
			<JoditEditor
				ref={editor}
				value={content}

				tabIndex={1} // tabIndex of textarea

				onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons

				onChange={newContent => { }}

			/>

		</div>
	);
};

export default JoditRTE;