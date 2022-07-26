import {Link,Outlet} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      display:'flex',justifyContent:'space-around'}}>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expenses'>Expenses</Link>
        
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
