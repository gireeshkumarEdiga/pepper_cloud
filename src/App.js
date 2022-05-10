// import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Create } from './component/Create';
import { Form } from "./component/Form";
import { Edit } from './component/Edit';
import { Id } from './component/Id';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/id" element={<Id />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
