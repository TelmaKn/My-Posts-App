import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />

            {/* <PrivateRoute exact path="/" component={Home} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
