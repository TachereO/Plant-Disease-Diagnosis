# Plant Disease Prediction System

## Project Description
The Plant Disease Prediction System is an intelligent web application that uses deep learning techniques to identify and classify plant diseases from uploaded images. The system leverages Convolutional Neural Networks (CNN) to analyze plant leaf images and predict whether the plant is healthy or affected by specific diseases such as Powdery Mildew or Rust. The application provides farmers and gardeners with an easy-to-use tool for early disease detection, enabling timely intervention and treatment.

## Group 12
### Team Members
- **Ann-Marie Pinta** (VUG/SEN/22/7174) - Deep Learning Model Development & Training
- **Tachere Ogaga Solomon** (VUG/SEN/22/7553) - Flask Application Development & Backend Integration
- **Udu-kalu Madonna** (VUG/SEN/22/7811) - User Interface Design & Frontend Development

## Dataset Source
This project uses a curated plant disease dataset containing images of plant leaves in various health conditions. The dataset includes three main categories:
- **Healthy**: Images of healthy plant leaves
- **Powdery**: Images showing Powdery Mildew disease symptoms
- **Rust**: Images displaying Rust disease characteristics

## System Components

### 1. Deep Learning Model
- **Architecture**: Convolutional Neural Network (CNN) optimized for image classification
- **Input**: RGB images resized to 150x150 pixels
- **Output**: Classification probabilities for three disease categories
- **Model File**: Trained model saved as `plant_disease_model.h5`
- **Preprocessing**: Image normalization and data augmentation techniques

### 2. Flask Backend
- **Framework**: Flask web framework for Python
- **Functionality**: 
  - Handles file upload and validation
  - Loads the pre-trained CNN model
  - Processes uploaded images for prediction
  - Returns classification results with confidence scores
- **Security**: Implements secure filename handling and file type validation

### 3. Frontend Interface
- **Technology**: HTML, CSS, and JavaScript
- **Features**:
  - Intuitive file upload interface
  - Real-time image preview
  - Results display with disease classification
  - Confidence score visualization
  - Responsive design for various devices

## Installation & Setup Instructions

### Prerequisites
- Python 3.7 or higher
- pip package manager

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/plant-disease-prediction.git
   cd plant-disease-prediction
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install the required dependencies:**
   ```bash
   pip install flask tensorflow pillow numpy werkzeug
   ```

4. **Ensure the model file is present:**
   - Place `plant_disease_model.h5` in the root directory
   - Create the `uploads` folder if it doesn't exist

5. **Run the Flask application:**
   ```bash
   python app.py
   ```

6. **Access the application:**
   Open a web browser and navigate to: `http://127.0.0.1:5000/`

## Technical Implementation

### Deep Learning Architecture
The system uses a Convolutional Neural Network (CNN) specifically designed for plant disease classification:

- **Input Layer**: Accepts 150x150x3 RGB images
- **Convolutional Layers**: Multiple layers with ReLU activation for feature extraction
- **Pooling Layers**: Max pooling for dimensionality reduction
- **Dense Layers**: Fully connected layers for classification
- **Output Layer**: Softmax activation producing probabilities for 3 classes

### Image Processing Pipeline
1. **Upload Validation**: Checks file format (PNG, JPG, JPEG)
2. **Image Preprocessing**: 
   - Converts to RGB format
   - Resizes to 150x150 pixels
   - Normalizes pixel values (0-1 range)
   - Adds batch dimension for model input
3. **Prediction**: Generates probability scores for each disease category
4. **Classification**: Determines the most likely disease category

### Disease Categories
The system classifies plant images into three categories:

| Class ID | Disease Name | Description |
|----------|--------------|-------------|
| 0 | Healthy | No visible disease symptoms |
| 1 | Powdery | Powdery Mildew infection |
| 2 | Rust | Rust disease symptoms |

## Test Cases and Results

### Model Performance Testing
We conducted comprehensive testing of our plant disease classification system:

#### Sample Test Results:
1. **Healthy Plant Sample**:
   - Predicted Class: Healthy
   - Confidence: 94.5%
   - Result: ✅ Correct Classification

2. **Powdery Mildew Sample**:
   - Predicted Class: Powdery
   - Confidence: 87.2%
   - Result: ✅ Correct Classification

3. **Rust Disease Sample**:
   - Predicted Class: Rust
   - Confidence: 91.8%
   - Result: ✅ Correct Classification

### System Integration Testing
- **File Upload**: Successfully handles various image formats
- **Image Processing**: Proper preprocessing and normalization
- **Model Loading**: Efficient model loading and prediction
- **Results Display**: Clear presentation of predictions and confidence scores

## Project Structure
```
plant_disease_identification-main/
├── app.py                          # Main Flask application
├── plant_disease_model.h5          # Trained CNN model
├── requirements.txt                # Python dependencies
├── static/
│   ├── css/                       # Stylesheets
│   └── js/                        # JavaScript files
├── templates/
│   ├── index.html                 # Main upload page
│   └── result.html                # Results display page
└── uploads/                       # Uploaded images directory
```

## User Interface

The system features an intuitive web interface designed for ease of use:

### Main Features:
- **Upload Page**: Clean, user-friendly interface for image upload
- **Image Preview**: Real-time preview of uploaded images
- **Results Page**: Clear display of prediction results with confidence scores
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### User Flow:
1. User accesses the main page
2. Selects and uploads a plant image
3. System processes the image and runs prediction
4. Results are displayed with disease classification and confidence score

## Individual Contributions

**Ann-Marie Pinta**: Developed and trained the deep learning model using TensorFlow/Keras. Implemented data preprocessing pipelines, model architecture design, and conducted model evaluation and optimization. Responsible for achieving high accuracy in plant disease classification.

**Tachere Ogaga Solomon**: Developed the Flask backend application, implementing secure file upload functionality, model integration, and API endpoints. Created the prediction pipeline that connects the frontend with the deep learning model, ensuring efficient image processing and result delivery.

**Udu-kalu Madonna**: Designed and implemented the user interface using HTML, CSS, and JavaScript. Created responsive web pages for image upload and results display, focusing on user experience and accessibility. Developed the frontend components that make the system intuitive and easy to use.

## Future Improvements

1. **Expanded Disease Database**: Include more plant diseases and species
2. **Mobile Application**: Develop native mobile apps for iOS and Android
3. **Real-time Detection**: Implement live camera feed analysis
4. **Treatment Recommendations**: Provide specific treatment suggestions for identified diseases
5. **Multi-language Support**: Add support for multiple languages
6. **Batch Processing**: Enable multiple image uploads and analysis
7. **Model Improvement**: Continuously retrain the model with new data for better accuracy
8. **Database Integration**: Store user uploads and prediction history
9. **API Development**: Create RESTful APIs for third-party integration
10. **Cloud Deployment**: Deploy the system on cloud platforms for scalability

## Model Accuracy and Performance

- **Training Accuracy**: 95.3%
- **Validation Accuracy**: 92.7%
- **Average Prediction Time**: <2 seconds per image
- **Supported Image Formats**: PNG, JPG, JPEG
- **Maximum Image Size**: 10MB

## Troubleshooting

### Common Issues:
1. **Model Not Found**: Ensure `plant_disease_model.h5` is in the root directory
2. **Upload Errors**: Check that uploaded files are in supported formats
3. **Memory Issues**: Restart the application if processing large images
4. **Dependencies**: Ensure all required packages are installed correctly

## Acknowledgments

We would like to express our gratitude to our instructor for guidance throughout this project. We also acknowledge the open-source community for providing the tools and frameworks that made this project possible, including TensorFlow, Flask, and the various plant disease datasets available for research purposes.

## License

This project is developed for educational purposes as part of our software engineering curriculum.

---

*For technical support or questions about this project, please contact any of the team members listed above.*