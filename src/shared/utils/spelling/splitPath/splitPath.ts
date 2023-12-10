export type SplitPath = [string, string, string | undefined];

export function splitPath(pathname: string): SplitPath {
    return pathname.split('/').filter((el) => !!el) as SplitPath;
}
