function romanToInt(s) {
    const roman =
        { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    const complexRoman = { 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900 };
    if (s.length === 1) {
        if (s in roman) {
            return roman[s]
        } else { return 0; }

    } else if (s.length <= 15) {
        let result = 0;
        const array = s.split('');
        for (let i = 0; i < array.length; i++) {
            if (i === array.length) {
                result += roman[array[i]];
                return result;
            }

            if (array[i] + array[i + 1] in complexRoman) {
                result += complexRoman[array[i] + array[i + 1]];
                i++;
            } else {
                result += roman[array[i]];
            }
        }
        return result;
    } else {
        return 0;
    }
};