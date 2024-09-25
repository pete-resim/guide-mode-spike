// src/fixtures/glossaryTerms.ts

export interface GlossaryTerm {
  key: string;
  title: string;
  content: string;
  categories: string[];
  video_embed_url?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    key: 'system',
    title: 'System',
    content: 'A complete set of integrated robot components, including hardware and software, designed to perform specific tasks or functions within a robotic ecosystem.',
    categories: ['General', 'systems', 'experiences', 'analytics']
  },
  {
    key: 'experience',
    title: 'Experience',
    content: 'A simulated scenario or environment in which a robot system is tested and evaluated under specific conditions.',
    categories: ['General', 'experiences']
  },
  {
    key: 'testSuite',
    title: 'Test Suite',
    content: 'A collection of related test cases grouped together to test a specific functionality or aspect of a robot system. Test suites help organize and streamline the testing process.',
    categories: ['experiences', 'analytics'],
    video_embed_url: 'https://www.loom.com/share/d2430576efb54a3eabe1028e2e6c7467?sid=83d920d6-2523-438b-be35-42015c8a4a6e'
  },
  {
    key: 'tag',
    title: 'Tag',
    content: 'A label or keyword assigned to experiences, tests, or other elements to categorize and organize them, facilitating easier searching, filtering, and grouping of related items.',
    categories: ['experiences', 'analytics']
  },
  {
    key: 'testBatch',
    title: 'Test Batch',
    content: 'A group of tests executed together as part of a single run, often associated with a specific build, version, or set of changes in the robot system.',
    categories: ['analytics']
  },
  {
    key: 'test',
    title: 'Test',
    content: 'A specific procedure or set of steps designed to verify the behavior, functionality, or performance of a particular aspect of a robot system.',
    categories: ['experiences', 'analytics']
  },
  {
    key: 'branch',
    title: 'Branch',
    content: 'A parallel version of the codebase used in version control systems, allowing developers to work on different features or fixes simultaneously without affecting the main codebase.',
    categories: ['analytics']
  },
  {
    key: 'build',
    title: 'Build',
    content: "A specific version of the robot system's software that has been compiled and assembled, ready for testing or deployment. Each build represents a distinct iteration of the system.",
    categories: ['analytics']
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    content: 'A visual interface that displays key information, metrics, and controls related to robot systems, experiences, and analytics in a consolidated and easily digestible format.',
    categories: ['dashboard']
  }
];