import './App.css';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { BrowserRouter, Route, Routes  } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            {/* 루트 경로 "/"에 대한 라우트 */}
            <Route path="/" element={<DayList />} />
            {/* 동적 경로 "/day/:day"에 대한 라우트 */}
            <Route path="/day/:day" element={<Day />} />
            <Route path="/create_word" element={<CreateWord />} />
            <Route path="*" element={<EmptyPage />} />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
