// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="display-1">User Form</h1>
        <UserForm/>
      </div>
    </div>
  );
}

export default App;
