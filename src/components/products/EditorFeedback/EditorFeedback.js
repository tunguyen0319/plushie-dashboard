import React from 'react';

import { IoChatboxEllipsesSharp, IoCheckmarkDoneSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/buttons';
import {EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOption} from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>    
          {
            !status
            ?
            <section>
              <Feedback>
                <IoCheckmarkDoneSharp color='#fb7185' size='10rem' />
                <FeedbackMessage>Completed</FeedbackMessage>
              </Feedback>

              <FeedbackOption>
                <Button 
                  bc="#2c2c2c" 
                  color="white" 
                  padding=".875rem 1.125rem"
                  onClick={()=>{writeCompleted(false)}} 
                  disabled={status} 
                >Add Another Product</Button>
                
                <Button 
                  bc="#fda4af" 
                  color="white" 
                  padding=".875rem 1.125rem"
                  onClick={()=>{navigator('/dashboard')}} 
                >View All Products</Button>
              </FeedbackOption>

            </section>
            : 
            <Feedback>
              <IoChatboxEllipsesSharp color='#fda4af' size='10rem' />
              <FeedbackMessage>Your new product is being uploading..</FeedbackMessage>
            </Feedback>
          }    

        </EditorFeedbackStyles>
  )
}

export default EditorFeedback