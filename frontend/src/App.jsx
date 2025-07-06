// /App.js
import { PipelineToolbar } from './Toolbar.jsx';
import { PipelineUI } from './UI.jsx';
import { SubmitButton } from '/src/Submit';

const App = () => {
  return (
    <>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </>
  );
};

export default App;