
document.getElementById('showContacts').addEventListener('click', function() {
    const hiddenText = document.querySelector('.hidden-text');
    hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
});


function togglePhoneNumber(elementId) {
    const phoneNumber = document.getElementById(elementId);
    phoneNumber.style.display = phoneNumber.style.display === 'none' ? 'block' : 'none';
}


document.getElementById('showNumber1').addEventListener('click', function(event) {
    event.preventDefault();
    togglePhoneNumber('phoneNumber1');
});

document.getElementById('showNumber2').addEventListener('click', function(event) {
    event.preventDefault();
    togglePhoneNumber('phoneNumber2');
});
