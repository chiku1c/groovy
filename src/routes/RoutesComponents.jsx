import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import { RouteList } from ".";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        {RouteList.map(({ title, path, element: Element }) => (
          <Route key={path} element={<PublicRoute title={title} />}>
            <Route path={path} element={<Element />} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
