import React from "react";
import "./App.css";

const StoreContext = React.createContext(null);

const GlobalDataFromContext = () => {  
  return (
    <ul>
      <StoreContext.Consumer>      
        {({ fruits }) =>
          fruits.map((fruit) => {
            return <li key={fruit}>{fruit}</li>;
          })
        }
      </StoreContext.Consumer>
    </ul>
  );
};

class App extends React.Component {
  state = {
    fruits: ["Яблоко", "Банан", "Груша"],
  };
  render() {
    return (
      <div className="App">
        <StoreContext.Provider value={this.state}>
          <GlobalDataFromContext />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
