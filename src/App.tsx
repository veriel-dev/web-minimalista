
import { Switch, Route } from "wouter";
import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';


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
