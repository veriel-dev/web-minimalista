import { Route, Switch } from 'wouter';
import { NotFoundPage } from './screens/NotFoundPage';
import HomePageMatrix from './screens/HomePageMatrix';
import ProjectsPageMatrix from './screens/ProjectsPageMatrix';
import ProjectDetailPage from './screens/ProjectDetailPage';
import CVComponent from './components/CVComponents';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePageMatrix} />
        <Route path="/projects" component={ProjectsPageMatrix} />
        <Route path="/projects/:slug" component={ProjectDetailPage} />
        <Route path="/curriculum-vitae" component={CVComponent} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
