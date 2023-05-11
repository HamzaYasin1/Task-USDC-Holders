import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    // Set up the BrowserRouter to enable routing
    <BrowserRouter>
      <Switch>
        {/* Define the routes using the Route component */}
        {/* The exact path "/" will render the Main component */}
        <Route exact path="/" component={Main} />
        {/* Add more Route components for additional routes */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
