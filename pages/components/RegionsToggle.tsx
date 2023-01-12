import React from "react";
import styles from "../../styles/Home.module.css";
import { ICountry } from "../";

export interface RegionToggleProps {
  regions: string[];
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

  const RegionsToggle: React.FC<RegionToggleProps> = ({
    regions,
    selectedRegion,
    setSelectedRegion
  }) => {
    return (
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region} >
            {region}
          </option>
        ))}
      </select>
    );
  };

export default RegionsToggle;
