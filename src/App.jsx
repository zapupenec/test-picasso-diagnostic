import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostsPage, PostPage } from "./pages";
import "./styles/index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};
