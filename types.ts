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
};
export type Project = {
  author: string;
  title: string;
  tree: Tree[];
  changelog: string;
};
