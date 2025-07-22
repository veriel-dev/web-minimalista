import { Route, Switch } from 'wouter';
import { NotFoundPage } from './screens/NotFoundPage';
import HomePageMatrix from './screens/HomePageMatrix';
import ProjectsPageMatrix from './screens/ProjectsPageMatrix';
import CVComponent from './components/CVComponents';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePageMatrix} />
        <Route path="/projects" component={ProjectsPageMatrix} />
        <Route path="/curriculum-vitae" component={CVComponent} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
