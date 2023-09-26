import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routing } from '../pages';
import { store } from "./model";
import "./index.css";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
};
