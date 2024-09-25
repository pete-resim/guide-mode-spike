import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordian"
import { glossaryTerms, GlossaryTerm } from './fixtures/glossaryTerms';
import { useGlossary } from './GlossaryContext';
import { X, HelpCircle } from 'lucide-react';
import VideoEmbed from './components/video_embed';  // Import the new VideoEmbed component

const GlossaryToggle: React.FC = () => {
  const { isOpen, setIsOpen } = useGlossary();

  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen)
      }}
      className={`
        fixed z-50 p-2 rounded-full
        transition-all duration-300 ease-in-out top-3 right-4
      `}
      aria-label={isOpen ? 'Close Glossary' : 'Open Glossary'}
    >
      {isOpen ? <X size={24} /> : <HelpCircle size={24} />}
    </button>
  );
};

const GlossaryItemContent: React.FC<{ term: GlossaryTerm }> = ({ term }) => {
  return (
    <div>
      <p>{term.content}</p>
      {term.video_embed_url && (
        <div className="mt-4">
          <VideoEmbed url={term.video_embed_url} />
        </div>
      )}
    </div>
  );
};

const Glossary: React.FC = () => {
  const { terms, isOpen } = useGlossary();
  const visibleTerms = glossaryTerms.filter(term => terms.has(term.key));

  return (
    <>
      {visibleTerms.length > 0 && <GlossaryToggle />}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Glossary</h2>
        <Accordion type="single" collapsible>
          {visibleTerms.map((term) => (
            <AccordionItem key={term.key} value={term.key}>
              <AccordionTrigger>{term.title}</AccordionTrigger>
              <AccordionContent>
                <GlossaryItemContent term={term} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Glossary;