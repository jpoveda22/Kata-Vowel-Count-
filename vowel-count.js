function getCount(str) {
    str = str.toLowerCase();
    var vowels = 'aeiou';
    var vowelCount = 0;
    for(var i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  var solution = getCount('Agudueuwuooioicjvupdrian');
  console.log(solution);