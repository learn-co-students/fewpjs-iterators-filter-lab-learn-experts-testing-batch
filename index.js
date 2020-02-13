// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter(d => d.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(d => d.toLowerCase().startsWith(string.toLowerCase()))
}

const matchName = (drivers, string) => {
    return drivers.filter(d => d.name === string)
}