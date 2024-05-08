/*
**Project: **
- **author**
- title
- **[tree+metadata]**
- changelog 
*/

export type Tree = {
  nodes: string[];
  metadata: string;
  index: number;
};
export type Project = {
  author: string;
  title: string;
  counter: number;
  tree: Tree[];
  changelog: string;
};
