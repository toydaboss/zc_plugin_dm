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
    <div className='dm-inputbox-container'>
      <Container>
        <InputContainer>
          {/* preview uploaded file */}
          <img
            key={inputKey || ''}
            style={{
              display: !!attached == false ? 'none' : 'block',
            }}
            src={attached}
            alt='preview attached'
          />
          {/* clear uploaded file */}
          <button
            onClick={clearAttached}
            style={{
              display: !!attached == false ? 'none' : 'block',
            }}
          >
            clear attached
          </button>
          <form>
            {/* hidden attach file */}
            <input
              key={inputKey || ''}
              onChange={attachFile}
              ref={attachRef}
              type='file'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                zIndex: -9999,
              }}
              name=''
              id=''
            />
            {/* <div
              ref={inputRef}
              contentEditable={true}
              style={textStyle}
              rows='2'
              type='text'
              // textInputResize={textInputResize}
              onInput={handleInput}
              className='px-2 p-3'
            >
              <div>Send Message To</div>
            </div> */}
             <textarea
                rows='2'
                type='text'
                value={messageInput}
                // textInputResize={textInputResize}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder='Send Message to '
                className='px-2'
              />
            <ChatInputEditor>
              <LeftChatEditor>
                <Button
                  variant='light'
                  className='shortcut-btn btn-inputfield-box'
                >
                  <BsLightning />
                </Button>
                <Button
                  onClick={e => changeStyle(2)}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <FiBold />
                </Button>
                <Button
                  onClick={(e) => changeStyle(1)}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <BsTypeItalic />
                </Button>
                <Button
                  onClick={alertRandomLink}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <BsLink45Deg />
                </Button>
                <Button
                  onClick={listStyle}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <BsListUl />
                </Button>
              </LeftChatEditor>

              <RightChatEditor>
                <Button
                  onClick={mention}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <FiAtSign />
                </Button>
                <Button
                  onClick={toggleAttach}
                  variant='light'
                  className='btn-inputfield-box'
                >
                  <FiPaperclip />
                </Button>
                <Button
                  type='submit'
                  onClick={sendMessage}
                  onKeyDown={sendMessage}
                  className='send-btn-box btn-inputfield-box'
                  //disabled={!messageInput}
                >
                  <span className='sendMessage'>
                    <IoMdSend />
                  </span>
                  <span className='dm-schedule-message'>
                    <FaAngleDown />
                  </span>
                </Button>
              </RightChatEditor>
            </ChatInputEditor>
          </form>
        </InputContainer>
      </Container>
    </div>
    
  )
}

export default dmBoxInputField