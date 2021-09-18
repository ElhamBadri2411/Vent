import ViewMessage from './components/ViewMessage.jsx'
import Form from './Form/Form.jsx'
import { Paper } from "@mui/material";

function App() {
  return (
    <div align="center">
      <Paper>
        <Form />
        <ViewMessage />
      </Paper>
    </div>
  );
}

export default App;
