import { RouterProvider } from "react-router-dom";
import router from "./plugins/router.plugin";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
