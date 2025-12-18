const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// function to remove articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// sort ignoring a, an, the
const sortedBands = bands.sort((a, b) => {
  if (stripArticle(a) > stripArticle(b)) return 1;
  if (stripArticle(a) < stripArticle(b)) return -1;
  return 0;
});

// render list
const ul = document.getElementById("band");

ul.innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");
