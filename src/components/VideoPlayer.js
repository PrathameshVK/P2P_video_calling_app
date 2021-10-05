import React, {useContext,useState} from 'react'
import styled from 'styled-components'
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SocketContext } from '../context/SocketContext'

function getModalStyle() {
    return {
      top: 20,
      left: 20,
    };
  }

const useStyles = makeStyles(() => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: '#008037',
      borderRadius: '10px',
      padding: '1rem',
      color: 'white'
    },
    margin:{
        marginLeft:'50px'
    },
    copy:{
        color: 'white',
        backgroundColor: 'inherit',
        borderRadius: '50%',
        height: '30px',
        width: '30px'
    }
  }));
  

export default function VideoPlayer() {

    const {
        me,
        name,
        setName,
        leaveCall,
        callUser,
        callAccepted,
        myVideo,
        userVideo,
        callEnded,
        stream,
        call,
        openCam,
        closeCam,
        videoIsEnabled,
        audioIsEnabled
    }=useContext(SocketContext)

    const [open, setOpen] = useState(true);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Call Info</h2>
          <p id="simple-modal-description">
            {me}
            <CopyToClipboard
                text={me}
                className={classes.margin}
            >
                <button className={classes.copy}><FileCopyIcon/></button>
            </CopyToClipboard>
          </p>
        </div>
      );

    return (
            <VideoDiv>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
                    <p>{name || 'name'}</p>
                    <p>{call.name || 'name'}</p>
                    
                        {/*callAccepted && !callEnded &&*/}
                        <RemoteVideo
                        playsInline
                        ref={userVideo}
                        autoPlay
                        />
                    
                <LocalContent>
                    <button id="audio">
                        {
                            audioIsEnabled?<MicIcon/>
                            :<MicOffIcon/>
                        }
                    </button>
                    <button id="video" onClick={
                        videoIsEnabled?closeCam
                        :openCam
                    }>{
                        videoIsEnabled?<VideocamIcon/>
                        :<VideocamOffIcon/>  
                    }</button>
                    <button id="end">
                        <CallEndIcon/>
                    </button>
                    <button id="info" onClick={handleOpen}>
                        <LiveHelpIcon/>
                    </button>
                    {
                        stream &&
                        <LocalVideo
                        playsInline
                        muted
                        ref={myVideo}
                        autoPlay
                        />
                    }
                </LocalContent>
            </VideoDiv>
    )
}

const VideoDiv=styled.div`
    top: 0;
    left: 0;
    background-color: #332f2f;
    height: 100vh;
    width: 100vw;
    position: relative;
`

const RemoteContent=styled.div`
color: white;
    top: 0;
    height: 100%;
    width: 100%;
    position: fixed;
`

const RemoteVideo=styled.video`
 position: absolute;
 left: 0px;
 top: 0px;
    z-index: 80;
    //margin-top: -5vh;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
`

const LocalContent=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    button{
        z-index: 200
    }
    #audio{
        position: fixed;
        bottom: 10vw;
        left: 10vw;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: none;
        box-shadow: 5px 8px 30px gray;
        cursor: pointer;
        background-color: red;
        color: white;
        &:hover{
            opacity: .8
        }
    }
    #video{
        position: fixed;
        bottom: 10vw;
        left: 20vw;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: none;
        box-shadow: 5px 8px 30px gray;
        cursor: pointer;
        background-color: 'red';
        &:hover{
        opacity: .8
        }
    }
    #end{
        position: fixed;
        bottom: 10vw;
        left: 30vw;
        height: 50px;
        color: white;
        width: 50px;
        border-radius: 50%;
        border: none;
        box-shadow: 5px 8px 30px gray;
        cursor: pointer;
        background-color: red;
        &:hover{
        opacity: .8
        }
    }
    #info{
        position: fixed;
        bottom: 10vw;
        left: 40vw;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: none;
        box-shadow: 5px 8px 30px gray;
        cursor: pointer;
        background-color: 'red';
        &:hover{
        opacity: .8
        }
    }
`

const LocalVideo=styled.video`
    z-index: 200;
    position: fixed;
    border-radius: 10px;
    box-shadow: 10px 10px  50px gray;
    height: 40vh;
    width: 25vw;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    object-fit: cover;
`
