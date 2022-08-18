import React from 'react'
import Shortedlink from './Shortedlink'
import { useState,CSSProperties  } from 'react'
import PulseLoader from "react-spinners/PulseLoader";

const Shorten = () => {
  const [allLink,setAllLink]=useState([]);
  const [url,seturl]=useState({urlval:"",valid:true});
  const [loading,setloading]=useState(false);
  const urlValidation=(url)=>{
    const regex=new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return regex.test(url);
  }
  const shortBtn=()=>{
    if(urlValidation(url.urlval)){
      setloading(true);
      const fetchAip=async()=>{
      const res=await fetch(`https://api.shrtco.de/v2/shorten?url=${url.urlval}`)
      const data =await res.json();
      const newShort={
        id:Math.floor(Math.random()*10000)+1,
        originalLink:url.urlval,
        shortLik:data.result.short_link
      }
      console.log(newShort);
      setAllLink([...allLink,newShort]);
      console.log(allLink);
      setloading(false);
    }
    fetchAip();
    }
    else{
      seturl(url=>({...url,valid:false}));
    }
  }

  return (
    <>
    <div className="container">
    <div className="shorten">
      <input className={url.valid?"urlinput":"urlinput erorrborder"} placeholder='Shorten a link here...' onChange={(e)=>seturl({urlval:e.target.value,valid:true})}/>
        <button className="mainbtn Shortenbtn " onClick={shortBtn}>Shorten It!</button>
        {url.valid?<span></span>:<div className="error"><span><i>Please enter a valid URL.</i></span></div>}
    </div>
  </div>
    <div className="resultBackg">
      <div className="container">
      <PulseLoader  className="loading" color={"#2BD0D0"} loading={loading} size={15} />
      {allLink.map((Alink)=>
        <Shortedlink shortlink={Alink.shortLik} key={Alink.id} originalLink={Alink.originalLink}/>
      )}
      </div>
    </div>
    </>
  )
}

export default Shorten