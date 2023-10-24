import { createContext } from "react";

interface ISiderbarContext {}

export const SidebarContext = createContext<ISiderbarContext | null>(null);
