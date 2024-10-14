import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import Homepage from './pages/homepage/Homepage.jsx';

Amplify.configure(outputs);

function App() {
  return <Homepage />;
}

export default App;
