interface LocalNames {
  [key: string]: string;
}

interface GeoLocation {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

type GeoLocationResponse = GeoLocation[];

export type { LocalNames, GeoLocation, GeoLocationResponse };
