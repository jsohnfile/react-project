import React from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets"
import './App.css';

function App() {
  return (
    //BEM
      <div className="app">
        <h1>Twitter Clone</h1>

        { /* Sidebar */}
        <Sidebar />

        { /* Feed */}
        <Feed />

        { /* Widgets */}
        <Widgets />


      </div>
  );
}

export default App;
