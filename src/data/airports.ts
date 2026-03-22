export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  feed: string;
}

export const AIRPORTS: Airport[] = [
  { code: "KJFK", name: "John F. Kennedy Intl", city: "New York", country: "US", lat: 40.64, lng: -73.78, feed: "kjfk_gnd_twr" },
  { code: "KLAX", name: "Los Angeles Intl", city: "Los Angeles", country: "US", lat: 33.94, lng: -118.41, feed: "klax_twr" },
  { code: "KORD", name: "O'Hare Intl", city: "Chicago", country: "US", lat: 41.97, lng: -87.91, feed: "kord_twr" },
  { code: "KATL", name: "Hartsfield-Jackson", city: "Atlanta", country: "US", lat: 33.64, lng: -84.43, feed: "katl_twr" },
  { code: "KCLT", name: "Charlotte Douglas", city: "Charlotte", country: "US", lat: 35.21, lng: -80.94, feed: "kclt_twr" },
  { code: "KDFW", name: "Dallas/Fort Worth", city: "Dallas", country: "US", lat: 32.9, lng: -97.04, feed: "kdfw_twr" },
  { code: "KDEN", name: "Denver Intl", city: "Denver", country: "US", lat: 39.86, lng: -104.67, feed: "kden_twr" },
  { code: "KSFO", name: "San Francisco Intl", city: "San Francisco", country: "US", lat: 37.62, lng: -122.38, feed: "ksfo_twr" },
  { code: "KMIA", name: "Miami Intl", city: "Miami", country: "US", lat: 25.8, lng: -80.29, feed: "kmia_twr" },
  { code: "KBOS", name: "Logan Intl", city: "Boston", country: "US", lat: 42.37, lng: -71.02, feed: "kbos_twr" },
  { code: "KSEA", name: "Seattle-Tacoma", city: "Seattle", country: "US", lat: 47.45, lng: -122.31, feed: "ksea_twr" },
  { code: "KEWR", name: "Newark Liberty", city: "Newark", country: "US", lat: 40.69, lng: -74.17, feed: "kewr_twr" },
  { code: "KIAH", name: "George Bush", city: "Houston", country: "US", lat: 29.98, lng: -95.34, feed: "kiah_twr" },
  { code: "KMSP", name: "Minneapolis-St Paul", city: "Minneapolis", country: "US", lat: 44.88, lng: -93.22, feed: "kmsp_twr" },
  { code: "KDTW", name: "Detroit Metro", city: "Detroit", country: "US", lat: 42.21, lng: -83.35, feed: "kdtw_twr" },
  { code: "KPHL", name: "Philadelphia Intl", city: "Philadelphia", country: "US", lat: 39.87, lng: -75.24, feed: "kphl_twr" },
  { code: "KLAS", name: "Harry Reid Intl", city: "Las Vegas", country: "US", lat: 36.08, lng: -115.15, feed: "klas_twr" },
  { code: "KPHX", name: "Phoenix Sky Harbor", city: "Phoenix", country: "US", lat: 33.44, lng: -112.01, feed: "kphx_twr" },
  { code: "KMCO", name: "Orlando Intl", city: "Orlando", country: "US", lat: 28.43, lng: -81.31, feed: "kmco_twr" },
  { code: "EGLL", name: "London Heathrow", city: "London", country: "UK", lat: 51.47, lng: -0.45, feed: "egll_twr" },
  { code: "LFPG", name: "Charles de Gaulle", city: "Paris", country: "FR", lat: 49.01, lng: 2.55, feed: "lfpg_twr" },
  { code: "EDDF", name: "Frankfurt", city: "Frankfurt", country: "DE", lat: 50.04, lng: 8.56, feed: "eddf_twr" },
  { code: "EHAM", name: "Schiphol", city: "Amsterdam", country: "NL", lat: 52.31, lng: 4.76, feed: "eham_twr" },
  { code: "RJTT", name: "Haneda", city: "Tokyo", country: "JP", lat: 35.55, lng: 139.78, feed: "rjtt_twr" },
  { code: "VHHH", name: "Hong Kong Intl", city: "Hong Kong", country: "HK", lat: 22.31, lng: 113.92, feed: "vhhh_twr" },
  { code: "OMDB", name: "Dubai Intl", city: "Dubai", country: "AE", lat: 25.25, lng: 55.36, feed: "omdb_twr" },
  { code: "WSSS", name: "Changi", city: "Singapore", country: "SG", lat: 1.35, lng: 103.99, feed: "wsss_twr" },
  { code: "YSSY", name: "Sydney", city: "Sydney", country: "AU", lat: -33.95, lng: 151.18, feed: "yssy_twr" },
  { code: "SBGR", name: "Guarulhos", city: "São Paulo", country: "BR", lat: -23.44, lng: -46.47, feed: "sbgr_twr" },
  { code: "VIDP", name: "Indira Gandhi", city: "New Delhi", country: "IN", lat: 28.56, lng: 77.1, feed: "vidp_twr" },
  { code: "FAOR", name: "O.R. Tambo", city: "Johannesburg", country: "ZA", lat: -26.14, lng: 28.25, feed: "faor_twr" },
  { code: "LTFM", name: "Istanbul Airport", city: "Istanbul", country: "TR", lat: 41.26, lng: 28.74, feed: "ltfm_twr" },
  { code: "ZBAA", name: "Beijing Capital", city: "Beijing", country: "CN", lat: 40.08, lng: 116.6, feed: "zbaa_twr" },
  { code: "LEMD", name: "Madrid-Barajas", city: "Madrid", country: "ES", lat: 40.47, lng: -3.56, feed: "lemd_twr" },
  { code: "LIRF", name: "Rome Fiumicino", city: "Rome", country: "IT", lat: 41.8, lng: 12.25, feed: "lirf_twr" },
  { code: "KMDW", name: "Midway", city: "Chicago", country: "US", lat: 41.79, lng: -87.75, feed: "kmdw_twr" },
  { code: "KBWI", name: "Baltimore/Washington", city: "Baltimore", country: "US", lat: 39.18, lng: -76.67, feed: "kbwi_twr" },
  { code: "KHOU", name: "Hobby", city: "Houston", country: "US", lat: 29.65, lng: -95.28, feed: "khou_twr" },
  { code: "KFLL", name: "Fort Lauderdale", city: "Fort Lauderdale", country: "US", lat: 26.07, lng: -80.15, feed: "kfll_twr" },
  { code: "KOAK", name: "Oakland Intl", city: "Oakland", country: "US", lat: 37.72, lng: -122.22, feed: "koak_twr" },
];

export const AIRPORT_MAP: Record<string, Airport> = {};
AIRPORTS.forEach((a) => { AIRPORT_MAP[a.code] = a; });

export const MAJOR_AIRPORTS = [
  "KJFK", "KLAX", "KORD", "KATL", "KDFW", "KSFO", "KMIA", "KDEN",
  "EGLL", "LFPG", "EDDF", "RJTT", "OMDB", "WSSS", "YSSY", "VHHH",
];
