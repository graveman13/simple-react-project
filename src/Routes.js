import { Route, Switch } from "react-router-dom"

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Description from "./pages/Description/Description";
import Movies from "./pages/Movies/Movies";
import DescriptionSub from "./pages/Description/DescriptionSub/DescriptionSub";
import NotFound from "./pages/NotFound/NotFound";
import MovieItem from "./components/MovieItem";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/movie/:id_movie" component={MovieItem} />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            <Route exact path="/menu" component={Description} />
            <Route exact path="/menu/:id_sub" component={DescriptionSub} />

            <Route component={NotFound} />
        </Switch>
    )
}
export default Routes;