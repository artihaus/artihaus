export const CapitalizeFirst = (capitalize) => {
    if (!capitalize) return capitalize

    capitalize = capitalize
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')

    return capitalize
}