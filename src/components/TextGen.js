import { Configuration, OpenAIApi } from "openai"
import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import SyncLoader from "react-spinners/SyncLoader";
import JoditRTE from "./JoditRTE";
import Article from "./Article";
import { setData } from '../actions';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import SaveText from './saveText';
// import SaveToFile from './SaveText';
import Voice from './Voice'

// import { useNavigate } from 'react-router-dom';
import logo from '../img/logoptit.png';

import {
  Link
} from "react-router-dom";
import AIVideoGen from "./AIVideo";
// import { useSelector } from "react-redux";
// import showArticle from "./Article";
// import ArticleRTE from "./Article";
// import { type } from "os";


function TextGen() {
  const [tags, setTags] = useState([])
  const [textoutput, setTextoutput] = useState("");
  const [captionoutput, setCaptionoutput] = useState("")
  const [imageoutput, setImageoutput] = useState("");
  let [loading, setLoading] = useState(false);
  const [showRte, setShowRte] = useState(false);
  const [editAfter, setEditAfter] = useState("");
  const [showArticle, setShowArticle] = useState(false);
  const [show1, setShow1] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // const navigate = useNavigate();
  // const history = useNavigate();
  const [showArticleTitle, setShowArticleTitle] = useState(false);

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }


  let config = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  })
  delete config.baseOptions.headers['User-Agent'];
  let openai = new OpenAIApi(config)

  const genText = async tags => {
    const res = await openai.createChatCompletion({
      model: "gpt-4",
      max_tokens: 200,//700
      messages: [{ role: "user", content: "viết một bài báo giả gồm tiêu đề và nội dung sử dụng những từ khóa sau: " + tags.join(", ") }]
    })
    console.log(res)
    setTextoutput(res.data.choices[0].message.content)
    setLoading(false)
  }

  const genCaption = async tags => {
    const res = await openai.createChatCompletion({
      // model: "gpt-3.5-turbo",
      model: "gpt-4",
      max_tokens: 50,//700
      messages: [{ role: "user", content: "viết 1 câu chú thích cho ảnh sử dụng những từ khóa sau: " + tags.join(", ") }]
    })
    console.log(res)
    setCaptionoutput(res.data.choices[0].message.content)
    setLoading(false)
  }

  const genImage = async tags => {
    const response = await openai.createImage({
      prompt: tags.join(", "),
      n: 3,
      // 3
      size: "256x256",
    })

    console.log(response)
    const imageUrls = response.data.data.map(imageData => imageData.url);
    setImageoutput(imageUrls)
  }

  const genTextAndImage = () => {
    console.log(tags);
    setLoading(true)
    genText(tags);
    genCaption(tags);
    genImage(tags);
  }
  //hien thi edit
  let tmp = textoutput
  let regex = /^(.*?[.!?])(.*)$/;//tach title
  let pattern = /(?<=\.|\?|\!)\s{2}/;//tach 2 cau thanh 1 doan
  // const firstSentence = tmp.match(/^.*?[.!?]/)[0]
  let arr = tmp.split(pattern);
  // let tt = firstTitle + "<br />";//title
  let rs = arr[0] + "<br/>";
  let j = 0;
  for (let i = 1; i < arr.length; i++) {

    if (i < 4 && j < 3) {
      rs += "<p>" + arr[i] + "</p> " + '<br /> <img src="' + imageoutput[j] + '" alt="something" style={{ margin: "10px" }} />' + "<br/>" + captionoutput + "<br/>"
      j++;
    }
    else rs += arr[i];

  }
  const imageoutputs = [];
  imageoutputs[0] = imageoutput[0];
  imageoutputs[1] = imageoutput[1];
  imageoutputs[2] = imageoutput[2];
  const regex1 = /[.!?]\s*[^.!?]*$/;//xoa cau cuoi
  // let rs1 = "";
  // rs1 = tt + "" + rs
  const rs2 = rs.replace(regex1, "");
  const rs3 = tmp.replace(regex1, "")
  // let tt = arr[0];

  const handleDataTransfer = ({ textoutput }) => {
    const data = { foo: textoutput };
    dispatch(setData(data));
    history.push('/article');
    // navigate('/article');
    // history('/article');

  };
  return (
    <div>
      {/* Header  */}
      <div className="header">
        <div className="header-top">
          <div className="wrapper">

            <div className="search">
              <input type="text" placeholder="Nhập nội dung tìm kiếm..." />
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="wrapper">
            <div className="logo">

              <div className="link-info">
                <img id="logoptit" src={logo} alt="" />
                <span className="website-name">Phần mềm hỗ trợ viết báo</span>
                <span>TEAM FAKE NEWS GEN</span>
              </div>
            </div>
            <div className="link-app">
            </div>
          </div>
        </div>
        <div className="navigation">
          <div className="wrapper">

          </div>
        </div>
      </div>
      {/* Body  */}
      <div className="container">
        <div className="wrapper">

          {!show1 && (<div>
            <div className="bodycontent">
              <div className="wr">
                <span className="title-1">Fake News Gen</span>
                <br /><br />
                <span className="title-2">Chủ đề</span>
              </div>
              <div>
                <div className="tags-input-container" style={{ margin: "10px" }}>
                  {tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                      <span className="text">{tag}</span>
                      <span className="close" onClick={() => removeTag(index)}>&times;</span>
                    </div>
                  ))}
                  <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type something..." />
                  <br />
                </div>
                <button className="button-12" onClick={genTextAndImage}>Gen Text and Image</button ><br />
                <div style={{ marginTop: "25px" }}>
                  <SyncLoader
                    color={"red"}
                    loading={loading}
                    size={15}
                  />
                </div>
                <div style={{ overflowY: "auto", padding: "10px" }}>
                  {textoutput && !loading && <TextareaAutosize style={{ width: "75%" }} value={textoutput + '/n' + captionoutput} />}<br />
                  {imageoutput.length > 0 && imageoutput.map(url => (
                    <img key={url} src={url} alt="something" style={{ margin: "10px" }} />
                  ))}
                </div>
              </div>
            </div>


            {/* <!--  End container --> */}


          </div>)}

          {showRte && (<div>
            <JoditRTE placeholder={rs2} images={imageoutput} />
            <SaveText placeholder={textoutput} />
            {/* <SaveToFile placeholder={textoutput} /> */}
            <Voice />
          </div>)}
          {/* {textoutput && !loading && <a href="/"><button className="button-12" onClick={() => setShowRte(!showRte)}>{!showRte ? "Edit the News" : "Back"}</button></a>} */}
          {textoutput && !loading && <button className="button-12" onClick={() => setShowRte(!showRte)}>{!showRte ? "Edit the News" : "Back"}</button>}
          {/* {showArticle && <div> */}
          {/* {showArticle ? showArticle && !showRte : showArticle && !showRte} */}
          {/* <ArticleRTE tags={tags} placeholder={textoutput} images={imageoutput} /> */}
          {/* </div>} */}
          {/* {textoutput && !loading && showRte && <a href="/article"><button className="button-12" onClick={() => Article(textoutput, imageoutput)}> Go to article</button></a>} */}

          {/* {showRte && <a href="/article"><button className="button-12" onClick={() => Article(placeholder = "hoai xinh gai")}> Go to article</button></a>} */}

          {/* {showRte && <button className="button-12" onClick={handleDataTransfer(textoutput)}> go to article</button>}
          {showArticle && <div>
            <Article placeholder={tt} images={imageoutput[0]} />
          </div>} */}

          {showRte && <button className="button-12" onClick={() => setShowArticle(!showArticle)}> {!showArticle ? "preview the article" : setShowRte(false) && setShow1(!setShow1)}</button>}
          {showArticle && (<div>
            <Article placeholder={rs3} images={imageoutputs} caption={captionoutput} />

          </div>)}

        </div>
      </div>
      <div className="footer">
        {/* <footer class="footer"> */}
        <div className="container1 bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Liên hệ</h5>
              {/* <!--headin5_amrc--> */}
              <p className="mb10">Học viện Công nghệ Bưu chính Viễn thông</p>
              <p><i className="fa fa-location-arrow"></i> km10, Nguyễn Trãi, Hà ĐÔng, Hà Nội </p>
              <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
              <p><i className="fa fa fa-envelope"></i> info@example.com  </p>


            </div>


            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Link</h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li><a href="http://webenlance.com">Facebook</a></li>
                <li><a href="http://webenlance.com">Instagram</a></li>
                <li><a href="http://webenlance.com">Zalo</a></li>
              </ul>
              {/* <!--footer_ul_amrc ends here--> */}
            </div>


            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li><a href="http://webenlance.com">Remove Background</a></li>
                <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
                <li><a href="http://webenlance.com">Logo Design</a></li>
              </ul>
              {/* <!--footer_ul_amrc ends here--> */}
            </div>


            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Theo dõi</h5>
              {/* <!--headin5_amrc ends here--> */}

              <ul className="footer_ul2_amrc">
                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy <a href="#"></a></p></li>
                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy <a href="#"></a></p></li>
                <li><a href="#"><i className="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy <a href="#"></a></p></li>
              </ul>
              {/* <!--footer_ul2_amrc ends here--> */}
            </div>
          </div>
        </div>


        <div className="container1">
          <ul className="foote_bottom_ul_amrc">
            {/* <li><a href="http://webenlance.com">Home</a></li>
              <li><a href="http://webenlance.com">About</a></li>
              <li><a href="http://webenlance.com">Services</a></li>
              <li><a href="http://webenlance.com">Pricing</a></li>
              <li><a href="http://webenlance.com">Blog</a></li>
              <li><a href="http://webenlance.com">Contact</a></li> */}
          </ul>
          {/* <!--foote_bottom_ul_amrc ends here--> */}
          <p className="text-center">Copyright @2017 | Designed With by <a href="#">Fake News Gen</a></p>


          {/* <!--social_footer_ul ends here--> */}
        </div>

        {/* </footer> */}
      </div>
      {/* <!--  End footer --> */}

    </div>
  )
}

export default TextGen