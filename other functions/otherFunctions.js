//need to make sure no one puts naughty words in your text?
//filter out whatever you need to, and watch those words
//be replaced by asteriks.
//censor takes two arguments. First, is an arr of words that you will check for.
//the second is the string that you wish to pass through and censor.

function censorBadWords(arr, str) {
  var censored = str.split(' ');
  for(var i = 0; i < censored.length; i++) {
    if(arr.indexOf(censored[i]) > -1) {
      var temp = censored[i].split('');
      var tempArr = [];
      for(var j = 0; j < temp.length; j++) {
        if (j === 0) {
          tempArr.push(temp[j]);
        }
        else {
          tempArr.push('*');
        }
        censored[i] = tempArr.join('');
      }
    }
  }
    return(censored.join(' '));
}
console.log(censorBadWords(['damn', 'shit'], 'damn this shit man'));
