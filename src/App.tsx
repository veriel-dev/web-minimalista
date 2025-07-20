import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';
import { Route, Switch } from 'wouter';
import ProjectsPage from './screens/ProjectsPage';
import { NotFoundPage } from './screens/NotFoundPage';
import HomePageMatrix from './screens/HomePageMatrix';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePageMatrix} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/curriculum-vitae" component={CurriculumVitae} />
        <Route path="/old-home" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
