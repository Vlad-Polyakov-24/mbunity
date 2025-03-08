import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IAppStore {
	isMobileNav: boolean;
	set: (newState: Partial<IAppStore>) => void;
}

const appStore = create<IAppStore>()(
	devtools((set) => ({
		isMobileNav: false,
		set: (newState) => set((state) => ({ ...state, ...newState })),
	})),
);

export { appStore };
