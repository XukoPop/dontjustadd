document.getElementById('currentYear').textContent = new Date().getFullYear();

const typingAnimation = () => {
    const addElement = document.querySelector('.add-line-through');
    addElement.textContent = "add";
};

document.addEventListener('DOMContentLoaded', typingAnimation);


const copyLinkButton = document.getElementById('copyLink');
const copyMessage = document.getElementById('copyMessage');

copyLinkButton.addEventListener('click', () => {
    const url = window.location.href;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => {
                showCopyMessage();
            })
            .catch(() => {
                fallbackCopyToClipboard(url);
            });
    } else {

        fallbackCopyToClipboard(url);
    }
});

function fallbackCopyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);
    
    showCopyMessage();
}

function showCopyMessage() {
    copyMessage.style.display = 'inline';
    
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 3000);
}