import React from 'react';
import 'assets/scss/style.scss'
import  { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import LandingPage from 'Pages/LandingPage';

function App() {
    return <div className="App">
        
          <Router>
              <Switch>
             
        <Route exact path="/" component={LandingPage}/>
    
     </Switch>
         </Router>
    
    </div>
}

export default App;