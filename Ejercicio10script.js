function max(a, b) {
      return a > b ? a : b;
    }

    function showMax() {
      let a = parseFloat(document.getElementById("max1").value);
      let b = parseFloat(document.getElementById("max2").value);
      document.getElementById("maxResult").innerHTML = "Max: " + max(a, b);
    }

    function maxOfThree(a, b, c) {
      return Math.max(a, b, c);
    }

    function showMaxOfThree() {
      let a = parseFloat(document.getElementById("max3a").value);
      let b = parseFloat(document.getElementById("max3b").value);
      let c = parseFloat(document.getElementById("max3c").value);
      document.getElementById("max3Result").innerHTML = "Max: " + maxOfThree(a, b, c);
    }

    function isVowel(ch) {
      return 'aeiouAEIOU'.includes(ch);
    }

    function checkVowel() {
      let ch = document.getElementById("vowelChar").value;
      document.getElementById("vowelResult").innerHTML = isVowel(ch) ? "It is a vowel." : "Not a vowel.";
    }

    function translate() {
      let text = document.getElementById("rovarInput").value;
      let result = '';
      for (let ch of text) {
        if (isVowel(ch) || !ch.match(/[a-z]/i)) {
          result += ch;
        } else {
          result += ch + 'o' + ch;
        }
      }
      document.getElementById("rovarResult").innerHTML = result;
    }

    function sum(arr) {
      return arr.reduce((a, b) => a + b, 0);
    }

    function multiply(arr) {
      return arr.reduce((a, b) => a * b, 1);
    }

    function showSum() {
      let arr = document.getElementById("arrayInput").value.split(',').map(Number);
      document.getElementById("sumResult").innerHTML = "Sum: " + sum(arr);
    }

    function showMultiply() {
      let arr = document.getElementById("arrayInput").value.split(',').map(Number);
      document.getElementById("multiplyResult").innerHTML = "Product: " + multiply(arr);
    }

    function reverse(str) {
      return str.split('').reverse().join('');
    }

    function reverseStr() {
      let str = document.getElementById("reverseInput").value;
      document.getElementById("reverseResult").innerHTML = reverse(str);
    }

    function sortWords() {
      let words = document.getElementById("sortWordsInput").value.split(',');
      document.getElementById("sortResult").innerHTML = words.sort().join(', ');
    }

    function findLongestWord() {
      let words = document.getElementById("longestWordsInput").value.split(',');
      let maxLen = Math.max(...words.map(w => w.length));
      document.getElementById("longestResult").innerHTML = "Longest word length: " + maxLen;
    }

    function filterLongWords() {
      let words = document.getElementById("filterWordsInput").value.split(',');
      let minLen = parseInt(document.getElementById("wordLength").value);
      let filtered = words.filter(w => w.length > minLen);
      document.getElementById("filterResult").innerHTML = filtered.join(', ');
    }

    function charFreq() {
      let str = document.getElementById("freqInput").value;
      let freq = {};
      for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
      }
      document.getElementById("freqResult").innerHTML = JSON.stringify(freq);
    }