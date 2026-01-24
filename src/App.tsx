import { Route, Switch } from 'wouter';
import { NotFoundPage } from './screens/NotFoundPage';
import HomePageMatrix from './screens/HomePageMatrix';
import ProjectsPageMatrix from './screens/ProjectsPageMatrix';
import ProjectDetailPage from './screens/ProjectDetailPage';
import CVComponent from './components/CVComponents';
import OutlineTestPage from './screens/OutlineTestPage';
import LayoutTestPage from './screens/LayoutTestPage';
import HomePageOutline from './screens/HomePageOutline';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePageMatrix} />
        <Route path="/projects" component={ProjectsPageMatrix} />
        <Route path="/projects/:slug" component={ProjectDetailPage} />
        <Route path="/curriculum-vitae" component={CVComponent} />
        {/* Ruta temporal para verificar Fase 1 */}
        <Route path="/outline-test" component={OutlineTestPage} />
        {/* Ruta temporal para verificar Fase 2 */}
        <Route path="/layout-test" component={LayoutTestPage} />
        {/* Ruta temporal para verificar Fase 3 - Home Outline */}
        <Route path="/outline" component={HomePageOutline} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
