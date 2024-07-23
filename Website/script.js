function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadResume() {
    var fileURL = 'assets/my-resume.pdf';

    // Create new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileURL, true);
    xhr.responseType = 'blob'; // Set responseType as blob

    // When the request is successful
    xhr.onload = function() {
        // Create a blob object from the response
        var blob = xhr.response;
        
        // Create a link element, set its href attribute, and trigger a click to download
        var downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'my-resume.pdf'; // Specify the filename
        downloadLink.click();
    };

    // Send the request
    xhr.send();
}