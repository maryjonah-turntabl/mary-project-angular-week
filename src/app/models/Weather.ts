import { WeatherDescription } from "./WeatherDescription";
import { TempDetails } from "./TempDetails";
import { CountryName } from "./CountryName";
import { Coordinates } from "./Coordinates";


export interface Weather {
    name: String;
    dt: number;
    main: TempDetails;
    weather: WeatherDescription[];
    sys: CountryName;
    coord: Coordinates;    
}
