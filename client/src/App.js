import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import reqService from './reqService/req';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Record from './components/Record';
import Form from './components/Form';
import Content from './components/Content';
import Signup from './components/signup';



const App = () => {
  const [newUrl, setUrl] = useState("");
  const [visits, setVisits] = useState(0);
  const [records, setRecords] = useState([]);
  const [history, setHistory] = useState([]);
  const [ip, setIp] = useState("");
  const exitButton = useRef(null);
  const signupPage = useRef(null);

  useEffect(() => {
    reqService.getUserIp().then(res => {
      setIp(res);
      // console.log(res);
    });
  }, []);
  const handleChange = (e) => {
    setUrl(e.target.value);
  }
  const postUrl = (e) => {
    e.preventDefault();
    if(newUrl){
      const urlObj = {
        original: newUrl
      }
    reqService
      .postUrl(urlObj)
        .then(res => {
            setUrl(res.minified);
            setVisits(res.count);
            let record = {
              long: res.original,
              short: res.minified,
              id: res.nano,
              key: new Date()
          }
        setRecords(records.concat(record).reverse());
        reqService.postUser({ip, record}).then(res => res);
       });
    }
    
  }
  const handleKeys = (e) => e.KeyCode === 13 ? postUrl : console.log("Wrong key;");
  const showHistory = () => {
      setUrl(newUrl);
      reqService.getHistory({ ip }).then(res => {
      const appHistory = res.map(rec => <Record key={rec.key} longUrl={rec.long} shortUrl={rec.short}/>)
      setHistory(appHistory);
      if(history){
        exitButton.current.style.display = "block";
      }
    });
  }
  const hideHistory = () => {
    setHistory([]);
    exitButton.current.style.display = "none";

  }
  const clearHistory = () => {
    reqService.clearHistory({ ip });
    setHistory([]);
  }
  const auth = () => {
    signupPage.current.style.display = "flex";
  }
  const hideBar = () => {
    signupPage.current.style.display = "none";
  }
  return (
    <div>
      <NavBar signup={auth}/>
      <section className="service-section">
      <div className="form-bg">
      <Form postUrlF={postUrl} newUrlF={newUrl}
      handleChangeF={handleChange}
      handleKeysF={handleKeys} visitsF={visits} showHistoryF={showHistory}/>
      <div className="url-records d-inline-block">{
        records.map(rec => <Record key={rec.key} longUrl={rec.long} shortUrl={rec.short}/>)
      }</div>
      </div>
      <Content />
      </section>
      <div ref={exitButton} className="history-wrapper">
        <i className="bi bi-x-square" onClick={hideHistory}></i>
        <button onClick={clearHistory } className="btn btn-light"><i className="bi bi-trash-fill"></i>Clear History</button>
      { history }
      </div>
      <section ref={signupPage} className="auth-section">
        <Signup />
        <i className="bi bi-x-square text-dark" onClick={hideBar}></i>
      </section>
    </div>
  );
};

export default App;
