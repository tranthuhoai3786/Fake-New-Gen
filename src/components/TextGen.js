import { Configuration, OpenAIApi } from "openai"
import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

function TextGen() {
  const [textinput, setTextinput] = useState("");
  const [textoutput, setTextoutput] = useState("");

  let config = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  })
  delete config.baseOptions.headers['User-Agent'];
  let openai = new OpenAIApi(config)
  
  const genText = async textinput => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 1500,
      messages: [{role: "user", content: textinput}]
    })
    console.log(res)
    setTextoutput(res.data.choices[0].message.content)
  }

  return (
    <div>
      <h1>input topic</h1>
      <textarea value={textinput} onChange={(e) => setTextinput(e.target.value)}/><br/>
      <button onClick={() => genText(textinput)}>Gen Text</button><br/>
      <TextareaAutosize style={{width: "75%"}} value={textoutput}/>
    </div>  
  )
}

export default TextGen