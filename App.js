import Header from "./Header.js";
import Body from "./Body.js";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { children } from "react";
import VedioContainer from "./VedioContainer.js";
import WatchPage from "./WatchPage.js";
import Error from "./Error.js";
import { Provider } from "react-redux";
import Store from "./Store.js";
import Shorts from "./Shorts.js"


const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <VedioContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },

      {
          path:"shorts",
          element: <Shorts />
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Header />

        <RouterProvider router={approuter} />

        {/* <Body /> */}
      </Provider>
    </div>
  );
}

export default App;

/***
 *  Header
 *     Logo and burger button
 *     Search bar
 *     user and Notifaction
 *
 * Body
 *   Side Container
 *     Buttons
 *
 *   Body Conatiner
 *     Button Crousal
 *     Vedio Conatiner
 *        Vedio cards
 *
 *
 *
 */
