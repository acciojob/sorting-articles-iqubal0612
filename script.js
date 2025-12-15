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

// Remove leading articles ONLY for sorting
function stripArticle(str) {
    return str.replace(/^(a|an|the)\s+/i, '');
}

// Sort alphabetically ignoring articles
bands.sort((a, b) => {
    return stripArticle(a).localeCompare(stripArticle(b));
});

// Render list
const bandList = document.getElementById("band");
bandList.innerHTML = bands
    .map(band => `<li>${band}</li>`)
    .join("");
