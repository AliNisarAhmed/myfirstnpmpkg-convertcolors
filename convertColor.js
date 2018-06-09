// **Question 3**: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

// // TEST Cases

// console.log('\nQuestion 3: Convert Colors');

// console.log('Test Case # 1')

// console.log('Answer: ', convertColor("#994cf5"));  //returns rgb(15, 35, 69)

// console.log('Test Case # 2') 

// console.log('Answer: ', convertColor("rgb(15, 35, 69)"));

function convertColor(str) {

  function convertToDeci(hex) {
    let deci = 0;
    for(let i = 0; i < hex.length; i++) {
      deci += Math.pow(16, hex.length - 1 - i) * hexTable[hex[i]];
    }
    return deci;
  }

  function convertToHexa(str) {
    let deci = Number(str);

    let quotient = Math.floor(deci / 16);
    quotient = Object.keys(hexTable).find(key => hexTable[key] === quotient )
    let remainder = deci % 16;
    remainder = Object.keys(hexTable).find(key => hexTable[key] === remainder);
    
    return `${quotient}${remainder}`
  }


  const hexTable = {
    '0' : 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14, 
    F: 15,
  }

  const hexRegEx = /#(\w\w)(\w\w)(\w\w)/;

  const rgbRegex = /^rgb\((\w+), (\w+), (\w+)\)/;

  if(hexRegEx.test(str)) {

    let temp = str.toUpperCase();

    let [sym, color1, color2, color3] = temp.match(hexRegEx);
    
    return `rgb(${convertToDeci(color1)}, ${convertToDeci(color2)}, ${convertToDeci(color3)})`;

  } else if (rgbRegex.test(str)) {

    let [sym, color1, color2, color3] = str.match(rgbRegex);

    return `#${convertToHexa(color1)}${convertToHexa(color2)}${convertToHexa(color3)}`;
  }
}

export default convertColor;