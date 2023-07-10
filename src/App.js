
// import homeicon from '../img/home-icon.png';
import './App.css';
import JoditRTE from './components/JoditRTE';



import TextGen from './components/TextGen';
// import ImageGen from './components/mergeT&G';
import AIVideoGen from './components/AIVideo';
// import editt from './components/test';
import Article from './components/Article';
import ArticleTitle from './components/ArticleTitle';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/" exact>

            <TextGen />
          </Route>
          <Route path="/article">
            <Article />
            <AIVideoGen />
          </Route>
          <Route path="/article-title">
            <ArticleTitle />
          </Route>
        </Switch>



      </div >
    </BrowserRouter>
  );
}

export default App;
