export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  arxivUrl?: string;
  doiUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface Patent {
  id: string;
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  grantDate?: string;
  status: 'granted' | 'pending';
  abstract: string;
  tags: string[];
  patentUrl?: string;
}

export interface BookChapter {
  id: string;
  title: string;
  authors: string[];
  bookTitle: string;
  publisher: string;
  year: number;
  chapter: string;
  pages?: string;
  abstract: string;
  tags: string[];
  url?: string;
  isbn?: string;
}

export interface Book {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  year: number;
  isbn: string;
  pages: number;
  description: string;
  tags: string[];
  coverUrl?: string;
  amazonUrl?: string;
  publisherUrl?: string;
}

export interface ResearchData {
  publications: Publication[];
  patents: Patent[];
  bookChapters: BookChapter[];
  books: Book[];
}