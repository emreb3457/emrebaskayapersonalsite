import { Fragment } from 'react';
import './App.css';
import { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cv from './components/pages/Cv';
import ProjectPage from './components/pages/ProjectPage';
import NewProject from './components/pages/NewProjectPage';
import AdminPage from './components/pages/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {

  render() {

    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cv />} exact />

          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }

}

