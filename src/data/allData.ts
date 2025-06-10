import { IAllDataItem } from "../types/IAllDataItem";

export async function fetchAllData(): Promise<IAllDataItem[]> {
    const url = 'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,flags,latlng';
    
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