document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const uploadForm = document.getElementById('upload-form');
    const resultContainer = document.getElementById('result-container');
    const uploadedImg = document.getElementById('uploaded-img');
    const cameraButton = document.getElementById('camera-button');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImg.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(uploadForm);

        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            resultContainer.innerHTML = `
                <h2>Prediction: ${data.prediction}</h2>
                <p>Confidence: ${data.confidence}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
    });

    // Camera button click event
    cameraButton.addEventListener('click', function() {
        const constraints = {
            video: true
        };

        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            const video = document.createElement('video');
            video.srcObject = mediaStream;
            video.autoplay = true;

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            video.addEventListener('loadedmetadata', function() {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(function(blob) {
                    const file = new File([blob], 'captured_image.jpg', { type: 'image/jpeg' });
                    const reader = new FileReader();

                    reader.onload = function(e) {
                        uploadedImg.src = e.target.result;
                    };

                    reader.readAsDataURL(file);
                }, 'image/jpeg');
            });

            resultContainer.appendChild(video);
        })
        .catch(function(error) {
            console.error('Error accessing the camera:', error);
        });
    });
});
