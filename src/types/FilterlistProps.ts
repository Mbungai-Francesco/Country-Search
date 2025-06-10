interface FilterlistProps{
    continent: string;
    onChooseContinent: (continent: string) => void;
    filterSearchBarToggle: () => void;
}
export type { FilterlistProps }