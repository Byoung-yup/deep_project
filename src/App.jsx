import { RouterProvider } from "react-router-dom";
import router from "./shared/Router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
