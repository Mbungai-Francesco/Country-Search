interface Continent {
   "continents": string[]
}

// var counties: Continent[]
const counties2: Set<string> = new Set()

async function fetchAllData(): Promise<Continent[]> {
    const url = 'https://restcountries.com/v3.1/all?fields=continents';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Continent[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchAllData().then(data => {
    // console.log(data);
    for (const item of data) {
        for (const country of item.continents) {
            counties2.add(country)
        }
    }
}).catch(error => {
    console.error('Error:', error);
});

export { counties2 }