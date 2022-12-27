import './App.css';
import './schedule.css'
import './header.css'
import Header from './components/Header'
import GetClassSchedule from './components/GetClassSchedule'

function App() {
  return (
    <div className="App">
      <Header/>
      <GetClassSchedule/>
    </div>
  )
}

export default App;
