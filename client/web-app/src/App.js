import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Tabs
import SearchDeliver from "./tabs/SearchDeliver";
import UploadApplication from "./tabs/UploadApplication";
import Register from "./tabs/Register";

// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="" element={<Dashboard />}>
              <Route index element={<SearchDeliver />} />
              <Route path="search-n-deliver" element={<SearchDeliver />} />
              <Route
                path="upload-application"
                element={<UploadApplication />}
              />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
