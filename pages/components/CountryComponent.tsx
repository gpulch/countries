import React from "react";
import { ICountry } from "../";

export interface CountryProps {
  country: ICountry;
}

export default function CountryComponent({ country }: CountryProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src={country.flags.svg}
            alt=""
          />
        </div>
        <div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.name.common}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.capital}
          </div>
          <div className="text-lg leading-6 font-medium text-gray-900">
            {country.region}
          </div>
        </div>
      </div>
    </div>
  );
}
