import React, {createContext, useState, useRef, useEffect} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext=createContext();

const socket=io('http://localhost:5000');

const ContextProvider=({children})=>{

    const [stream, setStream] = useState(null);
    const [videoIsEnabled, setVideoEnabled]=useState(false);
    const [audioIsEnabled, setAudioEnabled]=useState(false);
    const [me, setMe]=useState("");
    const [call, setCall]=useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName]=useState("");
    const myVideo=useRef();
    const userVideo=useRef();
    const connectionRef=useRef();

    function closeCam(){
        setVideoEnabled(false);
        stream.getVideoTracks()[0].enabled =
        !(stream.getVideoTracks()[0].enabled)
        stream.getVideoTracks()[0].stop()
      }
    
    function openCam(){
        navigator.mediaDevices.getUserMedia({
          video: true
        }).then((currentStream)=>{
          setVideoEnabled(true);
          setStream(currentStream);
          myVideo.current.srcObject=currentStream;
        });
        stream.getVideoTracks()[0].enabled =
        !(stream.getVideoTracks()[0].enabled)
    }

    function closeMic(){
        setAudioEnabled(false);
        stream.getAudioTracks()[0].enabled =
        !(stream.getAudioTracks()[0].enabled)
        stream.getAudioTracks()[0].stop()
      }
    
      function openMic(){
        navigator.mediaDevices.getUserMedia({
          audio: true
        }).then((currentStream)=>{
          setAudioEnabled(true);
          setStream(currentStream);
          myVideo.current.srcObject=currentStream;
        });
        stream.getAudioTracks()[0].enabled =
        !(stream.getAudioTracks()[0].enabled)
      }
    

    useEffect(() => {
        const getUserMedia = async () => {
            try {
              const media = await navigator.mediaDevices.getUserMedia({
                  video: true,
                  audio: true
                });
                setStream(media);
                setVideoEnabled(true);
              myVideo.current.srcObject = media;
            } catch (err) {
              console.log(err);
            }
          };
          getUserMedia();
        socket.on('me',(id)=>{
            setMe(id);
        });
        console.log(me);
        socket.on('callUser',({from, name: callerName, signal})=>{
            setCall({
                isRecievingCall: true,
                from,
                name : callerName,
                signal
            })
        });
    }, []);

    const answerCall=()=>{
        setCallAccepted(true);
        const peer=new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        });
        peer.on('signal', (data)=>{
            socket.emit('answerCall', {signal: data, to: call.from});
        });
        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject=currentStream;
        });
        peer.signal(call.signal);
        connectionRef.current=peer;
    }

    const callUser=(id)=>{
        const peer=new Peer({
            initiator: true,
            trickle: false,
            stream
        });
        peer.on('signal', (data)=>{
            socket.emit('callUser', {
                userToCall: id,
                signalData: data,
                from: me,
                name
            });
        });
        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject=currentStream;
        });
        socket.on('callAccepted', (signal)=>{
            setCallAccepted(true);
            peer.signal(signal);
        });
        connectionRef.current=peer;
    }

    const leaveCall=()=>{
        setCallEnded(true);
        connectionRef.current.destroy();
    }

    return(
        <SocketContext.Provider value={{
            call,
            callAccepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
            openCam,
            closeCam,
            videoIsEnabled,
            audioIsEnabled
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext };