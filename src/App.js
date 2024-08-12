import Weather from "./components/Weather";
import classes from './components/style/style.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Weather/>
    </div>
  );
}

export default App;
