import React from "react";
import NoteWrite from "./components/NoteWrite/NoteWrite";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<NoteWrite />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
