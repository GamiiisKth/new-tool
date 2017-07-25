import React from "react";
import { Route } from "react-router-dom";
import ConsultantNav from "./ConsultantNav";
import Info from "./component/Info";

const ConsultantComponentRoutes = (
  <Route path="/consultant" name="Consultant" component={ConsultantNav}>
    <Route path="/consultant/info" name="Info" component={Info} />
    <Route path="/consultant/podetails" name="podetajles" component={Info} />
    <Route path="/consultant/podetails" name="rfs" component={Info} />
    <Route path="/consultant/podetails" name="rr" component={Info} />
    <Route path="/consultant/podetails" name="onoffboard" component={Info} />
    <Route path="/consultant/podetails" name="workpremit" component={Info} />
  </Route>
);
export default ConsultantComponentRoutes;
