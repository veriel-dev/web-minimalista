import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';
import { Route, Switch } from 'wouter';
import { NotFoundPage } from './screens/NotFoundPage';
import HomePageMatrix from './screens/HomePageMatrix';
import ProjectsPageMatrix from './screens/ProjectsPageMatrix';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePageMatrix} />
        <Route path="/projects" component={ProjectsPageMatrix} />
        <Route path="/curriculum-vitae" component={CurriculumVitae} />
        <Route path="/old-home" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
