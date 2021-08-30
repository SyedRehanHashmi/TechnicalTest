import './App.css';

import { FetchingDataFromApi } from './DataFetching/FetchDataFromAPi';
import { Home } from './TODO/Home';



function App() {
  return (
    <div className="App">
      <Home/>
      {/* <FetchingDataFromApi/> */}
    </div>
  );
}

export default App;
