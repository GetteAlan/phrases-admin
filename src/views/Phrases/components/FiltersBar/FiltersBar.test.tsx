import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FiltersBar from './FiltersBar';
import { describe, it, expect, vi } from 'vitest';
import * as useFiltersStoreModule from '../../store/useFiltersStore';

const mockSetSearchText = vi.fn();
vi.spyOn(useFiltersStoreModule, 'default').mockImplementation((selector: any) => {
  if (selector.name === 'setSearchText') return mockSetSearchText;
  return '';
});

describe('FiltersBar', () => {
  it('renders input and updates store on typing', async () => {
    render(<FiltersBar />);
    const input = screen.getByPlaceholderText('Search Phrases');

    await userEvent.type(input, 'hello');

    expect(input).toHaveValue('hello');
  });
});