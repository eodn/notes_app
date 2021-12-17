import React from "react";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage"
import WritePage from "./pages/WritePage/WritePage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
