import { Route, Routes } from "react-router-dom";
import { PostPage } from "./PostPage";
import { PostsPage } from "./PostsPage";
import { routes } from "../shared";

export const Routing = () => (
  <Routes>
    <Route path={routes.pages.posts()} element={<PostsPage />} />
    <Route path={routes.pages.post()} element={<PostPage />} />
  </Routes>
);
