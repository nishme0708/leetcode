/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let set = new Set(wordList);
  if (!set.has(endWord)) return 0;
  let queue = [[beginWord, 1]];
  while (queue.length) {
    debugger;
    let [word, level] = queue.shift();
    if (word == endWord) return level;
    for (let index = 0; index < word.length; index++) {
      let char = word[index];
      for (let i = 0; i < 26; i++) {
        let changeChar = String.fromCharCode(97 + i);
        if (changeChar == char) continue;
        let matchWord =
          word.substring(0, index) + changeChar + word.substring(index + 1);
        if (set.has(matchWord)) {
          queue.push([matchWord, level + 1]);
          set.delete(matchWord);
        }
      }
    }
  }
  return 0;
};