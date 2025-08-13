import Box from '@mui/material/Box';
import { Container, GridContainer } from './Styles';

import usePhrasesStore from './store/usePhrasesStore';
import useFiltersStore from './store/useFiltersStore';
import type { Phrase } from '../../types/Phrase';
import FiltersBar from './components/FiltersBar';
import { useMemo } from 'react';
import Card from './components/CardPhrase';
import EmptyState from './components/EmptyState';
import ActionsBar from './components/ActionsBar';

const customScroll = {
    '&::-webkit-scrollbar': {
        width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f0f0f0',
    },
}

export default function Phrases() {
    const phrases = usePhrasesStore((s) => s.phrases);
    const searchText = useFiltersStore((s) => s.searchText);
    const filteredPhrases = useMemo(() => phrases?.filter((phrase: Phrase) => phrase.text.toLowerCase().includes(searchText.toLowerCase())), 
        [phrases, searchText]);

    return (
        <Container>
            <ActionsBar />
            <FiltersBar />
            { filteredPhrases?.length === 0 ? (
                <EmptyState />
            ) : (
                <GridContainer>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            rowGap: '16px',
                            columnGap: '16px',
                            alignContent: 'flex-start', // evita que las filas se estiren
                            overflowY: 'auto',
                            flex: 1,
                            minHeight: 0,
                            ...customScroll,
                        }}
                    >
                        {filteredPhrases?.map((phrase: Phrase) => (
                            <Box key={phrase.id} sx={{ flex: '0 1 150px', height: '200px' }} >
                                <Card id={phrase.id}>{phrase.text}</Card>
                            </Box>
                        ))}
                    </Box>
                </GridContainer>
            )}
        </Container>
    );
};