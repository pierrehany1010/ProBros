document.getElementById('showContacts').addEventListener('click', function() {
    const hiddenText = document.querySelector('.hidden-text');
    const computedStyle = window.getComputedStyle(hiddenText).display;
    hiddenText.style.display = computedStyle === 'none' ? 'block' : 'none';
});

function togglePhoneNumber(elementId) {
    const phoneNumber = document.getElementById(elementId);
    const computedStyle = window.getComputedStyle(phoneNumber).display;
    phoneNumber.style.display = computedStyle === 'none' ? 'block' : 'none';
}

document.getElementById('showNumber1').addEventListener('click', function(event) {
    event.preventDefault();
    togglePhoneNumber('phoneNumber1');
});

document.getElementById('showNumber2').addEventListener('click', function(event) {
    event.preventDefault();
    togglePhoneNumber('phoneNumber2');
});
