import React from "react";
import { hydrate } from "react-dom";
import Header from "./header";

hydrate(<Header />, document.getElementById("headerCmp"));