export interface Category {
  id: string;
  name: string;
  tag: string;
  color: string;
  textColor: string;
}

export const categories: Category[] = [
  { id: "javascript", name: "JavaScript", tag: "javascript", color: "#f7df1e", textColor: "#000" },
  { id: "typescript", name: "TypeScript", tag: "typescript", color: "#3178c6", textColor: "#fff" },
  { id: "git", name: "Git", tag: "git", color: "#f1502f", textColor: "#fff" },
  { id: "clean-code", name: "Clean code", tag: "clean code", color: "#6c757d", textColor: "#fff" },
  { id: "ia", name: "IA", tag: "ia", color: "#00bfff", textColor: "#000" },
  { id: "web", name: "Desarrollo Web", tag: "desarrollo web", color: "#e44d26", textColor: "#fff" },
  { id: "angular", name: "Angular", tag: "angular", color: "#dd1b16", textColor: "#fff" },
  { id: "react", name: "React", tag: "react", color: "#61dafb", textColor: "#000" },
  { id: "svelte", name: "Svelte", tag: "svelte", color: "#ff3e00", textColor: "#fff" },
  { id: "vue", name: "Vue", tag: "vue", color: "#42b883", textColor: "#000" },
  { id: "astro", name: "Astro", tag: "astro", color: "#ff5c00", textColor: "#fff" },
  { id: "nodejs", name: "Node.js", tag: "nodejs", color: "#8cc84b", textColor: "#000" },
  { id: "csharp", name: "Net C#", tag: "netcsharp", color: "#db03fc", textColor: "#fff" },
  { id: "rust", name: "Rust", tag: "rust", color: "#dea584", textColor: "#000" },
  { id: "soft-skills", name: "Soft skills", tag: "soft skills", color: "#f9c74f", textColor: "#000" },
  { id: "docs", name: "Documentación de Software", tag: "documentación de software", color: "#f94144", textColor: "#fff" },
  { id: "algorithms", name: "Algoritmos y Estructuras de Datos", tag: "algoritmos y estructuras de datos", color: "#577590", textColor: "#fff" },
  { id: "architecture", name: "Arquitectura de Software", tag: "arquitectura", color: "#43aa8b", textColor: "#000" },
  { id: "fundamentals", name: "Fundamentos de programación", tag: "fundamentos", color: "#f3722c", textColor: "#000" },
  { id: "design-patterns", name: "Patrones de diseño", tag: "patrones de diseño", color: "#b388eb", textColor: "#000" },
  { id: "java", name: "Java", tag: "java", color: "#f89820", textColor: "#000" },
];

const categoriesByTag = new Map(categories.map((category) => [category.tag, category]));

export function getPostCategories(tags: string[] = []): Category[] {
  return tags.flatMap((tag) => categoriesByTag.get(tag.toLowerCase()) ?? []);
}
