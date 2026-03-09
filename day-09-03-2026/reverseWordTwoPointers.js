function reverseWords(str) {

  let result = "";
  let end = str.length - 1;

  while (end >= 0) {

    if (str[end] === " ") {
      end--;
      continue;
    }

    let start = end;

    while (start >= 0 && str[start] !== " ") {
      start--;
    }

    result += str.substring(start + 1, end + 1) + " ";

    end = start - 1;
  }

  return result.trim();
}

console.log(reverseWords("I Love js"))