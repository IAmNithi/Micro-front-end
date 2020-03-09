import React from "react";
import { hydrate } from "react-dom";
import AboutMe from "./aboutMe";

hydrate(<AboutMe />, document.getElementById("aboutmeCmp"));