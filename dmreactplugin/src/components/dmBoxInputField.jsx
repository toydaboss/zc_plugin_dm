import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { subscribetoChannel } from '@zuri/control';
import { handleCreateRoomMessages } from '../Redux/Actions/dmActions'
import { handlePostRoomMedia } from '../Redux/Actions/dmActions'
import {CommentBox} from '@zuri/zuri-ui'
// import styling
import styled from 'styled-components'
import '../assets/css/dmBoxInput.css'
import axios from 'axios'
// import ApiServices from '../utils/apiServices';

const dmBoxInputField = ({ org_id, room_id }) => {
  return (
    <div>
      <CommentBox org_id={`${org_id}`} room_id = {`${room_id}`}/>
    </div>
    
  )
}

export default dmBoxInputField