import React, { useEffect } from 'react';
import './bot.css';
import { assetsUrl } from '../../constants';
import { renderChatbot , initiateChatBotUI , DetermineMIC, detectWindowSize, FirstMessageSent} from '../../scripts/chatbot';




const ChatBot = ( props ) => {
   

    useEffect(() => {
        renderChatbot().then(() => {
            initiateChatBotUI();
            DetermineMIC();
            detectWindowSize();
            FirstMessageSent();
          
           
        });
   
    },[]);
    
  
    return (
        <div style={{width:"80%"}}>
  <img id="wrkng" src={assetsUrl.concat("performIT-Icon.png")} width="80" height="80" className="rotate centered" style={{display:"none",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
                   
                    <button  id="startRecognizeOnceAsyncButton_old"
                            style={{ backgroundColor:"transparent",border:"none",textAlign:"center"}}>
                        <a style={{ backgroundColor:"transparent"}}>
                            <i id="recognizer-status" style={{cursor:"pointer"}} title="يمكنك البحث باستخدام الصوت"></i>
                        </a>

                    </button>
                    <button hidden id="speechsdkStartRecognizeOnceAsync_1"
                            style={{ backgroundColor:"transparent",border:"none", textAlign:"center"}}
                     >
                        <a  style={{backgroundColor:"transparent"}}>
                            <i id="speechsdkStartRecognizeOnceAsync" 
                            style={{cursor:"pointer"}}
                               title="يمكنك البحث باستخدام الصوت"></i>
                        </a>
                    </button>
             <div id="webchat" role="main"></div>
                    <div id="voice-bar" style={{ float:"left" }}>
                        <label id="lbl"></label>
                        <form id="demo-form" className="mb-4" noValidate="noValidate">
                            <canvas id="meter" width="100%" height="5"></canvas>
                        </form>
                    </div>
                    <label id="cancelvoice" tooltip="cancel" className="cancellmic">
                        <i className="fas fa-volume-mute"></i>
                    </label>
                    
                    <button id="micButton" className="mic"  >
                        <i className="fas fa-microphone"></i>
                    </button>

                    
               
                    <label className="mic " id="startRecognizeOnceAsyncButton">
                        <i className="fas fa-microphone"></i>
                    </label>
                    <label className="mic_small_mobile " id="startRecognizeOnceAsyncButton" hidden>
                        <i className="fas fa-microphone"></i>
                    </label>
                 
                    </div>
  
    );

}


export default ChatBot;