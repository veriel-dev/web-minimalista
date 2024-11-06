
import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';
import { Route, Switch } from 'wouter';
import ProjectsPage from './screens/ProjectsPage';


const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/curriculum-vitae" component={CurriculumVitae} />
      </Switch>
    </>
  )
}

export default App
