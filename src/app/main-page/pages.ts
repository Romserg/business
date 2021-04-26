export interface Page {
  title: string;
  subtitle: string;
  content: string;
}

export interface Pages {
  [key: string]: Page
}
