import { Input, InputAdornment } from '@mui/material';
import Search from '@mui/icons-material/Search';
import debounce from 'lodash/debounce';
import { Container } from './Styles';
import useFiltersStore from '../../store/useFiltersStore';
import { useMemo, useState } from 'react';

export default function FiltersBar() {
    const searchText = useFiltersStore((s) => s.searchText);
    const setSearchText = useFiltersStore((s) => s.setSearchText);
    const [localSearch, setLocalSearch] = useState(searchText);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalSearch(value); 
        debouncedSetSearch(value);
    }

    const debouncedSetSearch = useMemo(() =>
        debounce((value: string) => {
            setSearchText(value);
        }, 500),
        [setSearchText]
    );

    return (
        <Container>
            <Input
                value={localSearch}
                placeholder="Search Phrases" 
                fullWidth 
                onChange={handleOnChange}
                startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }
            />                      
        </Container>
    );
};