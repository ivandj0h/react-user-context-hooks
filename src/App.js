import React from "react";
import { UsersContextProvider } from "./context";
import Navbar from "./components/navbar/Navbar";
import Jumbotron from "./components/jumbotron/Jumbotron";
import UsersList from "./components/users/UsersList";
import UserDetails from "./components/users/UserDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <div className="users-container">
        <UsersList />
        <UserDetails />
      </div>
    </div>
  );
}

export default App;
