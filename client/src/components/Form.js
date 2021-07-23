import React from 'react';
import '../App.css';

const Form = ({postUrlF, newUrlF, handleChangeF, handleKeysF, visitsF, showHistoryF}) => {

  return (
    <div>
      
      <form onSubmit={postUrlF} className="container bg-dark text-white p-5 rounded">
        
        <input
          id="input-url"
          className="form-control-md input text-white"
          placeholder="https://type_your_url..."
          value={newUrlF}
          onChange={handleChangeF}
        />
        <div className="ml-5 p-2">
          <button type="submit" onKeyUp={handleKeysF} className="btn btn-light ml-1"><i className="bi bi-scissors"></i>Shorten</button>
          <button type="submit" className="btn text-white ml-1 disabled" title="Total clicks for given url."><i className="bi bi-graph-up"></i>TOTAL CLICKS <br/>{visitsF}</button>
          <button type="submit" onClick={showHistoryF} className="btn btn-light ml-1" title="Show app history"><i className="bi bi-clock-history"></i>App History</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
