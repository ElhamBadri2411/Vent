import { useState } from 'react';
import Form from './Form/Form.jsx'

function App() {
  const [currentMessage, setCurrentMessage] = useState(null);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
