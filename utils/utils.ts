export const getPlural = (quantity: number, words: string[]) => {
    if ((quantity % 10 == 1) && (quantity % 100 != 11)) {
        return words[0];
    }
    if (((quantity % 10 == 2) && (quantity % 100 != 12)) ||
        ((quantity % 10 == 3) && (quantity % 100 != 13)) ||
        ((quantity % 10 == 4) && (quantity % 100 != 14))) {
        return words[1];
    }
    return words[2];
}