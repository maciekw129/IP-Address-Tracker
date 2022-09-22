import { InputProvider } from './context/InputContext';
import Home from './components/templates/Home/Home';

function App() {
  return (
    <>
      <InputProvider>
        <Home />
      </InputProvider>
    </>
  );
}

export default App;
