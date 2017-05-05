import React from 'react';
import { Button } from 'semantic-ui-react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch items. {message}</p>
    <Button onClick={onRetry}>Retry</Button>
  </div>
);

export default FetchError;