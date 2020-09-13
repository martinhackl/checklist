import create from 'zustand';
import type { Checklist } from '../../types/checklist';

type Store = {
  checklists: Checklist[];
};

const useStore = create<Store>((set) => ({
  checklists: [],
}));
