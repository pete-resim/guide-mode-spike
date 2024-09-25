import { useEffect } from 'react';
import { useGlossary } from './GlossaryContext';

export const useGlossaryTerms = (terms: string | string[]) => {
  const { addTerms } = useGlossary();

  useEffect(() => {
    const normalizedTerms = Array.isArray(terms) ? terms : [terms];
    if (normalizedTerms.length > 0) {
      addTerms(normalizedTerms);
    }
  }, [addTerms, terms]);
};