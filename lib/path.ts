export const basePath = "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}