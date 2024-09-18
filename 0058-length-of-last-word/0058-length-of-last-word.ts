function lengthOfLastWord(s: string): number {
    const result = s.trim().split(' ');
    return result[result.length-1].length;
};