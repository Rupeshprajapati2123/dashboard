import './App.css'
import Accordionn from './Components/accordion';
import Currnet from './Components/currnet';
import DefaultExample from './Components/more'
import Time from './Components/timline/time';
function App() {
  return (
    <div className="App">
      <p className='headdd'>Dashboard</p>
      {/* <More /> */}
      {/* <div style={{width:"57vw",display:"flex",}}> */}
      <div className='ccc'>
      <Time />
      <Currnet />
      </div>
     
      <div className='Appp'>

      <DefaultExample />
      <Accordionn />
      </div>
    </div>
  );
}

export default App;
