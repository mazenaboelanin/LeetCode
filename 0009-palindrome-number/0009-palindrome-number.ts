function isPalindrome(x: number): boolean {
    const arrayOfNumber = x.toString().split('');
    const reversedArrayOfNumber = x.toString().split('').reverse();
    return arrayOfNumber.toString() === reversedArrayOfNumber.toString();
};