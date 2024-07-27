import { IAllDataItem } from "../types/IAllDataItem";

var countries: IAllDataItem[]

async function fetchAllData(): Promise<IAllDataItem[]> {
    const url = 'https://restcountries.com/v3.1/all?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IAllDataItem[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchAllData().then(data => {
    // console.log(data);
    countries = data
}).catch(error => {
    console.error('Error:', error);
});

export { countries }