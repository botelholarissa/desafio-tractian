import { AppLayout } from './AppLayout';
import { Chart } from './Chart';
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <AppLayout >
        <Chart />
      </ AppLayout >
    </div>
  );
}

export default App;
