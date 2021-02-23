import React, {useState} from 'react';
import axios from "axios";

function App(){
    
    let text = "";
    function handleChange(event){
        if(event.target.name === "text")
            text = event.target.value;
    }
    const [summary, setSummary] = useState("");
    const [keywords, setKeywords] = useState("");

    const getSummary = () => {
        let url = "http://127.0.0.1:8000/model/?para=" + text;
        axios.get(url).then((response) => {
          setKeywords(response.data.keywords);
          setSummary(response.data.summary);
        });
      };

    return (
        <div>
            <textarea 
                name="text" 
                rows="20" 
                cols="100" 
                placeholder="Enter text..."
                onChange={handleChange}
                required
            ></textarea>
            <br />
            <br />
            <button className="btn" onClick={getSummary}>Summarize</button>
            <br />
            <p>{text.length>0 && <b>Summary:  </b>}{summary}</p>
            <p>{text.length>0 && <b>Keywords: </b>}{keywords}</p>
        </div>
    )
}

export default App;