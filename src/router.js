import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "./App";
  import { indexLoader, showLoader, moviesLoader, gamesLoader, showsLoader } from "./loaders";
  import Index from "./pages/Index";
  import Show from "./pages/Show";
  import Movie from "./pages/Movie";
  import Game from "./pages/Game";
  import Shows from "./pages/Shows";
  import { createAction, updateAction, deleteAction } from "./actions";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="" element={<Index />} loader={indexLoader} />
          <Route path="movies" element={<Movie />} loader={moviesLoader} />
         <Route path="games" element={<Game />} loader={gamesLoader} />
         <Route path="shows" element={<Shows />} loader={showsLoader} />
          <Route path="post/:id" element={<Show />} loader={showLoader} />
          <Route path="create" action={createAction}/>
          <Route path="update/:id" action={updateAction}/>
          <Route path="delete/:id" action={deleteAction}/>
        </Route>
      </>
    )
  );
  
  export default router;