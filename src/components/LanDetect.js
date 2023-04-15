// len doc document o https://github.com/detectlanguage/detectlanguage-node
import DetectLanguage from "detectlanguage"; //nhớ cài đặt detechlanguage
import React, { useState } from "react";

function LanDetect(props) {
  const detectlanguage = new DetectLanguage("53d53c3058552241759e7232db86ddb5");
  const [textinput, setTextinput] = useState("");
  const detectLan = (text) => {
    detectlanguage.detect(text).then(function (result) {
        if (result.length < 1)
            alert ("chiu, khong phat hien duoc ngon ngu")
        else {
            let detectedLanguage = result.filter(lan => lan.isReliable)[0]
            alert (detectedLanguage.language)
        }
    });
  };
  return (
    <div>
      <h1>Text Gen</h1>
      <textarea value={textinput} onChange={(e) => setTextinput(e.target.value)}/>
      <button onClick={() => detectLan(textinput)}>Detect Language</button>
    </div>
  );
}

export default LanDetect;