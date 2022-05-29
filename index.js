// Code your solution here
// function findMatching(drivers, string) {
//     const namesMatch = drivers.filter(string => string === 'Bobby')
//       return namesMatch
//     }

// function findMatching(drivers, string) {
//     const namesMatch = drivers.filter(names => names == 'string')
//       return namesMatch
//     }

// function findMatching(drivers, string) {
//     const namesMatch = drivers.filter(Element => Element == string)
//       return namesMatch
//     }

// function findMatching(drivers, string) {
//     const namesMatch = drivers.filter(Element => Element == string.toUppercase || string.toLowercase)
//       return namesMatch
//     }

// function findMatching(drivers, string) {
//     const namesMatch = drivers.filter(Element => Element.toLowercase == string.toLowercase)
//       return namesMatch
//     }

// function fuzzyMatch(drivers, string) {
//     const result = drivers.filter(Element => Element.startsWith() === string.startsWith())
//     return result
//       }

function findMatching(drivers, string) {
    const namesMatch = drivers.filter(Element => Element.toLowerCase() === string.toLowerCase())
      return namesMatch
    }


function fuzzyMatch(drivers, string) {
    const result = drivers.filter(Element => Element.startsWith(string))
    return result
    }
      


function matchName(drivers, string) {
    const found = drivers.filter(Element => Element.name === string)
        return found
    }