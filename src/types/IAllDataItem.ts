interface IAllDataItem {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    borders: string[];
    flags: {
        png: string,
        svg: string
    };
    population: number;
    continents: string[];
    idd: {
        root: string,
        suffixes: string[]
    };
    latlng: number[];
}

export type { IAllDataItem }