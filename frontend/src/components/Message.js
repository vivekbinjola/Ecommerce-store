import React from 'react';
import Alert from 'react-bootstrap/Alert';
const Message = ({ variant, children }) => {
  return (
    <div>
      <Alert
        variant={variant}
        style={{
          margin: '2em auto',
        }}
      >
        {children}
      </Alert>
    </div>
  );
};

// Message.defaultProps = {
//   variant: 'danger',
// };
export default Message;
