
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import DiscriptionPage from './components/DiscriptionPage';
import PartSelectionPage from './components/PartSelectionPage';
import AssemblyPage from './components/AssemblyPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FinalPage from './components/FinalPage';



function App() {
  return (
    <div>
      <DndProvider  backend={HTML5Backend}>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<DiscriptionPage/>}/>
          <Route path='/parts' element={<PartSelectionPage/>}/>
          <Route path='/assembly' element={<AssemblyPage/>}/>
          <Route path='/finalpage' element={<FinalPage/>}/>
        </Routes>

     </BrowserRouter>
     </DndProvider>
    </div>
  );
}

export default App;
