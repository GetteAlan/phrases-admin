import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Phrase } from '../../../types/Phrase';

type PhrasesState = {
    phrases: Phrase[];
    addPhrase: (phrase: string) => void;
    removePhrase: (id: string) => void;
};

const usePhrasesStore = create<PhrasesState>()(
  persist(
    devtools(
      (set) => ({
        phrases: [{id: "1", text: 'Hello'}, {id: "2", text: 'World'}],
        addPhrase: (phrase: string) => set((state) => ({ phrases: [...state.phrases, { id: crypto.randomUUID(), text: phrase }] })),
        removePhrase: (id: string) => set((state) => ({ phrases: state.phrases.filter((p) => p.id !== id) })),
      })      
    ), 
    { name: 'phrases-storage' }
  )
);

export default usePhrasesStore;