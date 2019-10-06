import { createContext } from 'react';

const SideNavContext = createContext({});

export const SideNavProvider = SideNavContext.Provider;
export const SideNavConsumer = SideNavContext.Consumer;
export default SideNavContext;
