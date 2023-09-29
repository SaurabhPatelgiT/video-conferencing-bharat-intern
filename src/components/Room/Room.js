import React from 'react'
import {useParams} from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {appid,secret} from '../helper'; 

const Room = () => {

const {roomid} = useParams();



//room  reference

const myLiveStream = async(element)=>{
//generate Kit Token
const appID = appid;
const serverSecret = secret;
const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,  Date.now().toString(), "Saurabh Patel" );

//create instance for live room
const zc = ZegoUIKitPrebuilt.create(kitToken);


//join room function
zc.joinRoom({
    container: element,
    sharedLinks:[
        {
            name:"Copy Link",
            url:`http://localhost:3000/room/${roomid}`
        }
    ],
    scenario:{
        mode:ZegoUIKitPrebuilt.LiveStreaming
    },
    showScreenSharingButton:true

})

}


  return (
    <div>
        <div ref={myLiveStream} />
    </div>
  )
}

export default Room