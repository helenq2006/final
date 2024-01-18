//read more button
function toggleAdditionalText() {
    var additionalText = document.getElementById('additionalText');
    var readMoreButton = document.querySelector('button');

    if (additionalText.style.display === 'none') {
        additionalText.style.display = 'inline';
        readMoreButton.innerText = 'Read less';
    } else {
        additionalText.style.display = 'none';
        readMoreButton.innerText = 'Read more';
    }
}