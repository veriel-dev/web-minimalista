import { Route, Switch } from 'wouter';
import HomePagePersona from './screens/HomePagePersona';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePagePersona} />
      <Route>404</Route>
    </Switch>
  );
};

export default App;
