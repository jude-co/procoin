import React from "react";
import { Particles } from "react-particles-js";
import ParticleConfig from "./config/particle-config.js";

export default function particles() {
    return <Particles className="full" params={ParticleConfig}></Particles>;
    
}