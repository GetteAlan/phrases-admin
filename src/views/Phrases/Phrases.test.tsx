import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Phrases from '../Phrases';
import * as phrasesStore from './store/usePhrasesStore';
import * as filtersStore from './store/useFiltersStore';

describe('Phrases Component', () => {
    it('Should show EmptyState', () => {
        vi.spyOn(phrasesStore, 'default').mockImplementation((selector) => {
            return selector({
                phrases: [],
                addPhrase: vi.fn(),
                removePhrase: vi.fn(),
            });
        });

        vi.spyOn(filtersStore, 'default').mockImplementation((selector) => {
            return selector({
                searchText: '',
                setSearchText: vi.fn(),
            });
        });

        render(<Phrases />);

        const emptyText = screen.getByText(/There are no phrases to visualize here yet./i);
        expect(emptyText).toBeInTheDocument();
    });

    it('Should render cards for each phrase in store', () => {
        const mockPhrases = [
        { id: '1', text: 'Hello' },
        { id: '2', text: 'World' },
        ];

        vi.spyOn(phrasesStore, 'default').mockImplementation((selector) => {
            return selector({
                phrases: mockPhrases,
                addPhrase: vi.fn(),
                removePhrase: vi.fn(),
            });
        });

        render(<Phrases />);

        mockPhrases.forEach((phrase) => {
            expect(screen.getByText(phrase.text)).toBeInTheDocument();
        });

        const emptyState = screen.queryByText(/There are no phrases to visualize here yet./i);
        expect(emptyState).toBeNull();
    });
});
