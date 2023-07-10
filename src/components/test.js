import React, { useState, useRef, useImperativeHandle } from 'react';
// import JoditEditor from 'jodit-react';

let x = 'em la sinh vien ptit';
let y = 'hihi';
const editt = ({ x, y }) => {
    // const [content = useState(x);
    // const [image, setImage] = useState(y);
    const [ea, setEa] = useState("");
    arr = x.split();
    let tmp = "";
    for (i = 0; i < arr.length; i++) {
        tmp += i + ' ' + y + ' ';
    }
    setEa(tmp);


    return (
        <div>
            <textarea>{ea}</textarea>
            {edit(x, y)}
        </div>
    );
};
export default edit;

