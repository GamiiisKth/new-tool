import React, {Component} from "react";
import {NavLink} from "react-router-dom";

require("./tabsLayout.css");
export default class ConsultantNav extends Component {
    render() {
        const {location} = this.props;
        const infoClass = location.pathname.match("/consultant/info")
            ? "active"
            : "";
        const poDetailsClass = location.pathname.match("/consultant/poDetails")
            ? "active"
            : "";
        const rfsClass = location.pathname.match("/consultant/rfs") ? "active" : "";
        const rrClass = location.pathname.match("/consultant/rr") ? "active" : "";
        const onOffBoardClass = location.pathname.match("/consultant/onOffBoard")
            ? "active"
            : "";
        const workPermitClass = location.pathname.match("/consultant/workPermit")
            ? "active"
            : "";

        return (
            <div>
                <ul className="nav nav-tabs tabs-3 transparent " role="tablist">

                    <li className="nav-item" id="border">
                        <NavLink
                            className="nav-link" to={"/consultant/info"} activeClassName={infoClass}>
                            <i className="fa fa-info-circle"/> Info
                        </NavLink>
                    </li>

                    <li className="nav-item" id="border">
                        <NavLink className="nav-link" to={""} activeClassName={poDetailsClass}>
                            <i className="fa fa-bar-chart"/> Po Details
                        </NavLink>
                    </li>

                    <li className="nav-item" id="border">
                        <NavLink className="nav-link" to={""} activeClassName={rfsClass}>
                            <i className="fa fa-exchange"/> RFS
                        </NavLink>
                    </li>
                    <li className="nav-item" id="border">
                        <NavLink className="nav-link" to={""} activeClassName={rrClass}>
                            <i className="fa fa-question-circle"/> RR
                        </NavLink>
                    </li>

                    <li className="nav-item" id="border">
                        <NavLink className="nav-link" to={""}
                            activeClassName={onOffBoardClass}
                        >
                            <i className="fa fa-plane"/> ON/OFF board
                        </NavLink>
                    </li>
                    <li className="nav-item" id="border">
                        <NavLink
                            className="nav-link"
                            to={""}
                            activeClassName={workPermitClass}
                        >
                            <i className="fa fa-firefox"/> Work premit
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
