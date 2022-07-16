function duplicateEncode(str){

//создаю переменную для хранения string значения, IGNORES регистра
var word = str.toLowerCase();
//создаю переменную для хранения готовой string для возврата после ее циклического прохождения
var unique = '';
//перебираю все буквы в строке
  for (var i = 0; i < word.length; i++) {
//проверяю, нет ли повторяющихся символов
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//каждый символ, который не является ложным, меняю в '('
      unique += '(';
    } else
//каждый символ, который является ложным, меняю в ')'
    unique += ')';
  }
//возвращаю полное string (строковое) значение, где '(' не ложные, а все ')' ложные
  return unique;
}

//тест
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
console.log(duplicateEncode('DrumPads'));
console.log(duplicateEncode('MixArt'));