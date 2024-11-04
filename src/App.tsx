import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import CurriculumVitae from './screens/CurriculumVitaePage';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae/>} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
