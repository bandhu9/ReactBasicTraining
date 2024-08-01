import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
// import About from './components/About';
import Login from "./components/Login";

import Contact from "./components/Contact";
// import SomeComponent from "./components/SomeComponent";
import ImageData from "./components/ImageData";
import Hoc from "./components/SomeComponent";
import UserFormSubmission from "./components/UserFormSubmission";
import Carousel from "./components/Carousel";
import { MultiLanguage } from "./components/MultiLanguage";
import Portal from './components/Portal';
import "./helpers/i18n";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
import UseImperativeHandleComponent from "./components/UseImperativeHandle"
import Batching from "./components/Batching"
import UseTransition from "./components/UseTransition"
import ScrollComponent from "./components/Throttling"
import SearchComponent from "./components/Debouncing";

const About = lazy(() => import("./components//About"));

function App() {
  // console.log('App--->')
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">0. Project routs setup</Link>
              </li>
              <li>
                <Link to="/UserFormSubmission">1. User Form Submission</Link>
              </li>
              <li>
                <Link to="/hoc">2. hoc</Link>
              </li>
              <li>
                <Link to="/about">3. RenderProps with code splitting</Link>
              </li>

              <li>
                <Link to="/images">4. Image Data</Link>
              </li>
              <li>
                <Link to="/carousel">5. Create Carousel</Link>
              </li>
              <li>
                <Link to="/multi-language">6. Multi Language</Link>
              </li>
              <li>
                <Link to="/Portal">7. Portal</Link>
              </li>
              <li>
                <Link to="/ErrorBoundary">8. Error Boundary</Link>
              </li>
              <li>
                <Link to="/UseImperativeHandle">9. UseImperativeHandle Hook</Link>
              </li>
              <li>
                <Link to="/Batching">10. Batching</Link>
              </li>
              <li>
                <Link to="/UseTransition">11. UseTransition</Link>
              </li>
              <li>
                <Link to="/Debouncing">12. Debouncing</Link>
              </li>
              <li>
                <Link to="/Throttling">13. Throttlling</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" Component={Home} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            {/* <Route path="/about" Component={About} /> */}
            <Route path="/contact/" element={<Contact />} />
            <Route path="/images" element={<ImageData />} />
            <Route path="/hoc" Component={Hoc} />
            <Route path="/login" Component={Login} />
            <Route path="/UserFormSubmission" Component={UserFormSubmission} />
            <Route path="/carousel" Component={Carousel} />
            <Route path="/multi-language" Component={MultiLanguage} />
            <Route path="/Portal" Component={Portal} />
            <Route path="/ErrorBoundary" Component={ErrorBoundaryComponent} />
            <Route path="/UseImperativeHandle" Component={UseImperativeHandleComponent} />
            <Route path="/Batching" Component={Batching} />
            <Route path="/UseTransition" Component={UseTransition} />
            <Route path="/Debouncing" Component={SearchComponent} />
            <Route path="/Throttling" Component={ScrollComponent} />

          </Routes>
        </div>
      </Router>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
