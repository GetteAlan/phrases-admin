import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type FiltersState = {
    searchText: string;
    setSearchText: (text: string) => void
};

const useFiltersStore = create<FiltersState>()(
  devtools(
    persist(
      (set) => ({
        searchText: '',
        setSearchText: (text: string) => set({ searchText: text }),
      }),
      { name: 'filters-storage' }
    )
  )
);

export default useFiltersStore;