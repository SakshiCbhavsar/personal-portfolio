import React from 'react';

const Download_CV = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const docDownload = document.createElement("a");
    docDownload.href = url;
    docDownload.setAttribute("download", fileName);
    document.body.appendChild(docDownload);
    docDownload.click();
    document.body.removeChild(docDownload);
  };

  const handleClick = () => {
    const url = process.env.PUBLIC_URL + '/SAKSHI BHAVASAR_DevResume-1.pdf';
    console.log(url); 
    downloadFileAtURL(url);
  };

  return (
    <div id='downloadCv'>
      <button className="tagline" onClick={handleClick}>
        Download CV
      </button>
    </div>
  );
};

export default Download_CV;
