import React from 'react';
import { useLocation } from 'react-router-dom';

export const Question = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  const question = params.get('question') || '';
  const yes = params.get('yes') || '';
  const no = params.get('no') || '';
  const file = params.get('file');

  return (
    <div>
      <div>
        <h3>Question:</h3>
        <p>{question}</p>
      </div>
      <div>
        <h3>Affirmative Situation:</h3>
        <p>{yes}</p>
        {file && (
          <div>
            <h4>Uploaded Image:</h4>
            <img src={file} alt="Uploaded" style={{ maxWidth: '300px', height: 'auto' }} />
          </div>
        )}
      </div>
      <div>
        <h3>Negative Situation:</h3>
        <p>{no}</p>
      </div>
    </div>
  );
};