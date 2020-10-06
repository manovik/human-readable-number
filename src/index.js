module.exports = 
function toReadable (number) {
  try {
    const zero = 'zero',
          one = 'one',
          two = 'two',
          three = 'three',
          four = 'four',
          five = 'five',
          six = 'six',
          seven = 'seven',
          eight = 'eight',
          nine = 'nine',
          ten = 'ten',
          eleven = 'eleven',
          twelve = 'twelve',
          thirteen = 'thirteen',
          fifteen = 'fifteen',
          twenty = 'twenty',
          thirty = 'thirty',
          forty = 'forty',
          fifty = 'fifty';

    switch(number.toString().length) {
      case 1:
        return spellOneNumber (number);
      case 2:
        return spellTwoNumbers (number);
      case 3:
        if (/\d00/.test(number)) {
          return `${ spellOneNumber( +number.toString()
            .slice(0, 1))} hundred`
        } else 
        if (/\d{3}/.test(number)) {
          let firstPart = spellOneNumber( +number.toString().slice(0, 1)),
              secondPart = spellTwoNumbers( +number.toString().slice(1) );

          return `${ firstPart } hundred ${ secondPart }`;
        }
      default:
        return 'smth went wrong'
    }

    function spellOneNumber (num) {
      let literal = '';

      switch(num) {
        case 1:
          literal = one;
          break;
        case 2:
          literal = two;
          break;
        case 3:
          literal = three;
          break;
        case 4:
          literal = four;
          break;
        case 5:
          literal = five;
          break;
        case 6:
          literal = six;
          break;
        case 7:
          literal = seven;
          break;
        case 8:
          literal = eight;
          break;
        case 9:
          literal = nine;
          break;
        case 0:
          literal = zero;
          break;
        default:
          return 'smth wrong with spellOneNumber function'
      }
      return literal;
    }

    function spellTwoNumbers (num) {
      let literal = '';

      switch(num) {
        case 10:
          literal = ten;
          break;
        case 11:
          literal = eleven;
          break;
        case 12:
          literal = twelve;
          break;
        case 13:
          literal = thirteen;
          break;
        case 14:
          literal = `${four}teen`;
          break;
        case 15:
          literal = fifteen;
          break;
        case 16:
          literal = `${six}teen`;
          break;
        case 17:
          literal = `${seven}teen`;
          break;
        case 18:
          literal = `${eight}een`;
          break;
        case 19:
          literal = `${nine}teen`;
          break;
        case 20:
          literal = twenty;
          break;
        case 30:
          literal = thirty;
          break;
        case 40:
          literal = forty;
          break;
        case 50:
          literal = fifty;
          break;
        case 60:
          literal = `${six}ty`;
          break;
        case 70:
          literal = `${seven}ty`;
          break;
        case 80:
          literal = `${eight}y`;
          break;
        case 90:
          literal = `${nine}ty`;
          break;
        default:

          if (num < 10) {
            literal = `${spellOneNumber( +num.toString().slice(-1))}`
            return literal;

          } else {
          literal = `${ 
              spellTwoNumbers(num - (+num.toString().slice(-1)))
            } ${
              spellOneNumber( +num.toString().slice(-1))
            }`
            return literal;
          }
      }
      return literal;
    }
  } catch (e) {
    throw 'Something went wrong, man!';
  }
}