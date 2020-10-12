import React from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter, Route } from "react-router-dom"
import HomaPage from "./pages/HomePage"
import RepertoarPage from "./pages/RepertoarPage"
import AboutUsPage from "./pages/AboutUsPage"
import RepertoarListMovie from "./pages/RepertoarListMovie"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header-item-app" />
        <div className="body-item-app">
          <Route exact path="/" component={HomaPage} />
          <Route path="/repertoar" component={RepertoarPage} />
          <Route exact path="/aboutUs" component={AboutUsPage} />
          <Route exact path="/listaMovie" component={RepertoarListMovie} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
