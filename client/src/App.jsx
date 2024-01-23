import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form } from "./utils/viewsExports";
import { NavBar } from "./utils/componentsExports";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "./redux/actions";
import Activities from "./views/Activities/Activities";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";


function App() {
  //  const [count, setCount] = useState(0)
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="App">
      <div>{pathname === "/home" && <NavBar />}</div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
   );
}

export default App;
