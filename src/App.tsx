
import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';
import { Route, Switch } from 'wouter';


const App = () => {
  return (
    <>

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/curriculum-vitae" component={CurriculumVitae} />
      </Switch>
    </>
  )
}

export default App
