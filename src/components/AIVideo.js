import { Configuration, OpenAIApi } from "openai"
import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import SyncLoader from "react-spinners/SyncLoader";
import JoditRTE from "./JoditRTE";

const AIVideoGen = ({ placeholder, images }) => {
    const [tags, setTags] = useState([])
    const [textoutput, setTextoutput] = useState("");
    const [imageoutput, setImageoutput] = useState("");
    let [loading, setLoading] = useState(false);
    const [showRte, setShowRte] = useState(false);
    // let mydata = "";
    // let mydata1 = "";
    // let mydata2 = "";
    let config = new Configuration({
        apiKey: process.env.EALI_API
    })
    delete config.baseOptions.headers['User-Agent'];
    let openai = new OpenAIApi(config)
    let response = "";
    let videoUrl = "";


    let tmp = placeholder
    let pattern = /(?<=\.|\?|\!)\s{2}/;//tách 2 câu thành 1 đoạn
    let arr = tmp.split(pattern);
    let rs = "";
    const regex = /[.!?]\s*[^.!?]*$/;//xóa câu cuối
    const rs1 = rs.replace(regex, "");
    let tt = arr[0];
    let tt1 = arr[1];
    const texttoai = "AI video\n\nphan 1\n\n" + tt + "\n\nphan2\n\n" + tt;

    // tạo video từ text, storyboard (hoặc tạo video rỗng bằng cách bỏ param from)
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer I3fmNzXi4WDYfHQov9AKhlpSVDFDhj0p'
        },
        body: JSON.stringify({
            templateId: '6499b58f9c00d04cf4634e34', //6499b58f9c00d04cf4634e34
            from: texttoai
            // from: "AI hoai xinh\n\n gioi thieu\n\n Ngay lập tức, thông tin này đã khiến mạng xã hội Việt Nam bùng nổ. Người hâm mộ bàn tán rôm rả và chắc chắn Born Pink sẽ là 1 trong những sự kiện hoành tráng và đáng nhớ nhất trong năm nay tại mảnh đất hình chữ S\n\nLợi ích\n\n Ngay lập tức, thông tin này đã khiến mạng xã hội Việt Nam bùng nổ. Người hâm mộ bàn tán rôm rả và chắc chắn Born Pink sẽ là 1 trong những sự kiện hoành tráng và đáng nhớ nhất trong năm nay tại mảnh đất hình chữ S"
        })
    };

    fetch('https://apis.elai.io/api/v1/story/text', options)
        .then(response => response.json())
        .then(data => {
            const mydata = data;
            console.log(mydata);
            //convert to slide
            const options2 = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer I3fmNzXi4WDYfHQov9AKhlpSVDFDhj0p'
                },
                body: JSON.stringify({ fixWithGpt: true })
            };
            let f = "https://apis.elai.io/api/v1/story/generate-slides/" + mydata["_id"]
            fetch(f, options2)
                .then(response => response.json())
                .then(data1 => {
                    const mydata1 = data1;
                    console.log(mydata1);
                    // render video
                    // const options1 = {
                    //     method: 'POST',
                    //     headers: {
                    //         accept: 'application/json',
                    //         Authorization: 'Bearer I3fmNzXi4WDYfHQov9AKhlpSVDFDhj0p'
                    //     }
                    // };
                    // let f1 = "https://apis.elai.io/api/v1/videos/render/" + mydata1["_id"]
                    // fetch(f1, options1)
                    //     .then(response => response.json())
                    //     .then(data2 => {
                    //         const mydata2 = data2;

                    //         videoUrl = "https://app.elai.io/preview/" + mydata1["_id"]
                    //         console.log(videoUrl)
                    //     }

                    //     )
                    //     .catch(err => console.error(err));

                })
                .catch(err => console.error(err));

        })
        .catch(err => console.error(err));











    return (
        <div>
            {/* <video controls>
            <source src={videoUrl} type="video/mp4" />
             Thẻ <source> để cung cấp các định dạng video khác nhau (nếu có) 
            </video> */}
        </div>
    )
}
export default AIVideoGen

// AI hoai xinh\n\n gioi thieu\n\n Ngay lập tức, thông tin này đã khiến mạng xã hội Việt Nam bùng nổ. Người hâm mộ bàn tán rôm rả và chắc chắn Born Pink sẽ là 1 trong những sự kiện hoành tráng và đáng nhớ nhất trong năm nay tại mảnh đất hình chữ S\n\nLợi ích\n\n Ngay lập tức, thông tin này đã khiến mạng xã hội Việt Nam bùng nổ. Người hâm mộ bàn tán rôm rả và chắc chắn Born Pink sẽ là 1 trong những sự kiện hoành tráng và đáng nhớ nhất trong năm nay tại mảnh đất hình chữ S