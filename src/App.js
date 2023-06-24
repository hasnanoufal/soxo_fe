import List from './List';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "coffee/:id",
    element: <Details />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
