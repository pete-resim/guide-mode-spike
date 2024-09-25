import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type GlossaryContextType = {
  addTerms: (terms: string[]) => void;
  terms: Set<string>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

export const GlossaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [terms, setTerms] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTerms(new Set());
    setIsOpen(false);
  }, [location.pathname]);

  const addTerms = useCallback((newTerms: string[]) => {
    setTerms(prevTerms => {
      const updatedTerms = new Set(prevTerms);
      let hasNewTerms = false;
      newTerms.forEach(term => {
        if (!updatedTerms.has(term)) {
          updatedTerms.add(term);
          hasNewTerms = true;
        }
      });
      return hasNewTerms ? updatedTerms : prevTerms;
    });
  }, []);

  const contextValue = React.useMemo(() => ({
    addTerms,
    terms,
    isOpen,
    setIsOpen
  }), [addTerms, terms, isOpen, setIsOpen]);

  return (
    <GlossaryContext.Provider value={contextValue}>
      {children}
    </GlossaryContext.Provider>
  );
};

export const useGlossary = () => {
  const context = useContext(GlossaryContext);
  if (!context) {
    throw new Error('useGlossary must be used within a GlossaryProvider');
  }
  return context;
};