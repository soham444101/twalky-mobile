import { View, Text, BackHandler, ToastAndroid } from 'react-native'
import React, { useEffect, useMemo, useRef } from 'react'
import useWebRTC from '../hooks/useWebRTC.js'
import { useContainerDimensions } from '../hooks/useContainerDiemension.js';
import MeetHeader from '../component/meet/MeetHeader.js';
import MeetFooter from '../component/meet/MeetFooter.js';
import UserView from '../component/meet/UserView.js';
import People from '../component/meet/People.js';
import NoUserList from '../component/meet/NoUserList.js';
import { Colors } from '../utlities/Constant.js';
import { demoParticipant } from "../component/demoPeople.js"
import { getStream, useStreamStore } from '../services/useStream.store.js';
import { RFValue } from 'react-native-responsive-fontsize';
import { goBack, resetAndNavigate } from '../utlities/NavigationUtilities.js';
import { useWS } from '../states/context/WSProvider.js';

const LiveMeetScreen = () => {

  const {
    participants,
    toggleMic,
    toggleVideo,
    switchCamera,
    hangup
  } = useWebRTC();
  const stream = useStreamStore((s) => s.stream);
  const { containerDimensions, onContainerLayout } = useContainerDimensions();
  console.log('====================================');
  console.log("cantanD", containerDimensions);
  console.log('====================================');
  console.log("Stream ", stream);
  console.log('====================================');
  console.log('====================================');
  // const {width ,height}=containerDimensions;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <MeetHeader switchCamera={switchCamera} />
      <View onLayout={onContainerLayout} style={{ flex: 1, marginBottom: RFValue(25) }}>
        {/* <View style={{height:height,width:height ,backgroundColor:"red"}}></View> */}
        {
          containerDimensions && stream && (
            <UserView
              localStream={stream}
              containerDimensions={containerDimensions}
            />
          )
        }
        {participants && participants.length > 0 ? (
          <People
            people={participants}
            containerDimensions={containerDimensions}
          />
        ) : (
          <NoUserList />
        )
        }
      </View>
      <MeetFooter togglemic={toggleMic} togglevideo={toggleVideo} hangup={hangup} />
    </View>
  )
}

export default LiveMeetScreen