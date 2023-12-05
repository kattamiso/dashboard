import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countriesData from "./package.json";

const WorldMap = () => (
  <ComposableMap>
    <Geographies geography={countriesData}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export default WorldMap;
