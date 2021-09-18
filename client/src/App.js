import { useState } from 'react';
import Form from './Form/Form.jsx'
import  { getMessage } from './api/api.js'

function App() {
  const [currentMessage, setCurrentMessage] = useState(null);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
