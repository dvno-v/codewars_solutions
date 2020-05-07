function alphabetPosition(text) {
    text = text.split("")
    .map(x => x.toLowerCase())
    .filter(x => {
      return x >= 'a' && x <= 'z'
    })
    .map(x => x.charCodeAt(0) - 96).join(" ");
    return text;
  }

  console.log(alphabetPosition("TTTT aaaa bbb ''''1111`` cc"));