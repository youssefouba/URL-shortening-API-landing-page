import React from 'react'
import { useState } from 'react'

const Shortedlink = ({shortlink,originalLink}) => {

  const [linkS,setLinks]=useState(
    {
      copy:false
    }
  );
  const copyLink=()=>{
    navigator.clipboard.writeText(shortlink);
    setLinks({copy:true})
  }
  return (
    <div className="ShLinks">
        <p className="originalLink">{originalLink}</p>
        <div className="links">
            <p>{shortlink}</p>
            <button className={`mainbtn ${linkS.copy?'copiedBtn':'copyBtn'}`} onClick={copyLink}>{linkS.copy?'Copied!':'Copy'}</button>
        </div>
    </div>
  )
}

export default Shortedlink