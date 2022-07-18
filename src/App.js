import { useSelector } from "react-redux";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound } from "./components";
import { Home, Auth, Detail, Some, Filtered } from "./pages";



function App() {
  const { authData: user } = useSelector(
    (state) => state.persistedReducer.user
  );
  console.log("is inifinite loop");
  console.log("user", user);
  return (
    <div className="App">
      <Navbar />
      {user !== null ? (
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="auth" element={<Navigate to="/" />} />
            <Route path="movies">
              <Route index element={<Home />} />
              <Route path=":movieId" element={<Detail />} />
              <Route path="search/" element={<Filtered />} />
            </Route>
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
