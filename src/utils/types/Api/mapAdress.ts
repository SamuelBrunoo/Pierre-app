export type GetAddressRes = {
  results: AdressInfo[];
}

export type AdressInfo = {
  address_components: AddressComponent[],
  formatted_address: string,
  geometry: {
    location: {
      lat: number;
      lng: number;
    },
    location_type: string;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      },
      southwest: {
        lat: number;
        lng: number;
      }
    }
  },
  place_id: string;
  types: string[];
}

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
}