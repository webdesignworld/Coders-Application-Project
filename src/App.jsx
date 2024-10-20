import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChallengesPage from "./pages/ChallengesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    <Route path='/challenges' element={<ChallengesPage/>}/>
      {/* <Route path="/signin" element={<SignInPage />} /> */}
      {/* <Route path="/signup" element={<SignUp />} />  */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
