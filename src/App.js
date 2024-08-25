import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobilesPage from "./pages/Mobiles";
import { loader as mobileListLoader } from "./pages/Mobiles";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import RootLayout from "./pages/Root";
import MobileDetailPage from "./pages/MobileDetail";
import MobilesRootLayout from "./pages/MobilesRootLayout";
import ErrorPage from "./pages/Error";
import { Provider } from "react-redux";
import store from "./store/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "mobiles",
        element: <MobilesRootLayout />,
        children: [
          { index: true, element: <MobilesPage />, loader: mobileListLoader },
          {
            path: ":mobileId",
            element: <MobileDetailPage />,
          },
        ],
      },
    ],
  },
  {
    path: "cart",
    element: <CartPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
