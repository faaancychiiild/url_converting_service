import React from 'react';
import '../App.css';
const Record = ({longUrl, shortUrl, copyHandle, copyUrlF, getRequest}) => {

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(shortUrl);
    e.target.blur();
    e.target.style.color = "#f5322d";
    setTimeout(() => {
        e.target.style.color = "#000";
      }, 500)
  };
  return (
    <div className="record-wrapper">
      <i className="bi bi-clock-history text-info"></i>
      <span className="url text-info">{longUrl.substring(0, 40) + '...'}</span>
      <a className="url" title={"shortened URL for " + longUrl} href={shortUrl} rel="noreferrer" target="_blank">{shortUrl}</a>
      <button className="btn btn-copy" onClick={ copyToClipboard }><i className="bi bi-clipboard"></i>Copy</button>
    </div>
  );
}
export default Record;
