import { Route, Switch } from 'wouter';
import HomePageOutline from './screens/HomePageOutline';
import ProjectsPageOutline from './screens/ProjectsPageOutline';
import ProjectDetailPageOutline from './screens/ProjectDetailPageOutline';
import CVPageOutline from './screens/CVPageOutline';
import NotFoundPageOutline from './screens/NotFoundPageOutline';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePageOutline} />
      <Route path="/projects" component={ProjectsPageOutline} />
      <Route path="/projects/:slug" component={ProjectDetailPageOutline} />
      <Route path="/curriculum-vitae" component={CVPageOutline} />
      <Route path="*" component={NotFoundPageOutline} />
    </Switch>
  );
};

export default App;
