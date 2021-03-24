import React from 'react';
import { assetsUrl } from '../../constants';
import './style.css';


const LoadingIndicator = (props) => {
   
    return(
        <div className="rotate" style={{width:"100%",height:`${window.innerHeight}px`,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img  src={assetsUrl.concat("performIT-Icon.png")} width="100" height="100" className="rotate centered" />
        </div>
    );
}

export default LoadingIndicator;