import { Route, Switch } from 'wouter';
import HomePagePersona from './screens/HomePagePersona';
import NotFoundPagePersona from './screens/NotFoundPagePersona';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePagePersona} />
      <Route component={NotFoundPagePersona} />
    </Switch>
  );
};

export default App;
