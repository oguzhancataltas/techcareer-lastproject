import React, { Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer-comp.js";
import { Container } from "reactstrap";
import AuthLayout from "./layout/auth-layout.js";

function App() {
  const Home = lazy(() => import("./views/global/home.js"));
  const Movie = lazy(() => import("./views/global/movie"));
  const AboutUs = lazy(() => import("./views/global/about-us"));

  // USERS
  const User = lazy(() => import("./views/user/user.js"));
  const HomeUser = lazy(() => import("./views/user/home-user.js"));
  const AboutUsUser = lazy(() => import("./views/user/about-us-user.js"));
  const MovieUser = lazy(() => import("./views/user/movie-user.js"));
  const WatchMovie = lazy(() => import("./views/user/watch-movie.js"));

  const NotFound = lazy(() => import("./views/404/not-found-page.js"));


  return (
    <>
      <BrowserRouter>
        <Suspense>
          <NavBar />
          <AuthLayout>
            <Container
              style={{ minHeight: "590px", width: "100%", padding: "40px 0" }}
            >
              <Routes>
                <Route exact path={ROUTES.HOME} element={<Home />} />
                <Route exact path={ROUTES.MOVIES} element={<Movie />} />
                <Route exact path={ROUTES.ABOUT_US} element={<AboutUs />} />

                <Route exact path={ROUTES.USER} element={<User />} />
                <Route exact path={ROUTES.HOME_USER} element={<HomeUser />} />
                <Route
                  exact
                  path={ROUTES.ABOUT_US_USER}
                  element={<AboutUsUser />}
                />
                <Route
                  exact
                  path={ROUTES.MOVIES_USER}
                  element={<MovieUser />}
                />
                <Route
                  exact
                  path={ROUTES.WATCH_MOVİES}
                  element={<WatchMovie />}
                />

                <Route exact path={ROUTES.NOT_FOUND} element={<NotFound />} />
              </Routes>
            </Container>
          </AuthLayout>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
