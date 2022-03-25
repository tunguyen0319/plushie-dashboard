import styled from 'styled-components';



const EditorFeedbackStyles  = styled.aside`
      width: 80%;
      margin: 4rem auto 0;
      text-align: center;
`;

const FeedbackMessage  = styled.figcaption`
      font-size: 3.5rem;
      font-weight: 100;
      color: #2c2c2c;
      margin-top: 1rem;
`;


const Feedback  = styled.figure`
      
`;


const FeedbackOption  = styled.footer`
      margin-top: 1.5rem;
      button {
          margin: .25rem;
          width: fit-content;
      }
`;



export {EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOption}