function countSegments(s: string): number {
    return s.trim() === "" ? 0 : s.trim().split(/\s+/).length;
}