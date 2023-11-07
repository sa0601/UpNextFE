import {Outlet} from "react-router-dom"
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;