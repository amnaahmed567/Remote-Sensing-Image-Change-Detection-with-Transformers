Remote Sensing Image Change Detection with Transformers:

This repository contains the implementation of transformer-based models for detecting changes in remote sensing imagery. The project focuses on using advanced deep learning techniques, particularly transformer architectures, to analyze satellite images and identify land cover changes over time, with applications in environmental monitoring, urban expansion tracking, and deforestation detection.

Contibutors:

•	Ayesha Siddiqa

•	Navaal Iqbal 

•	Amna Ahmed 


Overview:

This project employs transformer-based architectures like BIT (Bi-temporal Image Transformer) and ScratchFormer to detect spatial and temporal changes in satellite images. The repository includes implementations, datasets, and evaluation results, particularly focused on the Amazon Rainforest and urban expansion regions.

Requirements:

•	Python 3.x

•	TensorFlow / PyTorch

•	Google Earth Engine

•	Additional libraries: numpy, pandas, matplotlib, sklearn, raster

Introduction:

This project focuses on change detection in remote sensing imagery using transformer-based deep learning models. Remote sensing change detection plays a vital role in tracking environmental changes, such as deforestation, urban expansion, and disaster impact, using satellite images.
The primary objective of this project is to detect meaningful changes between pairs of images taken at different time intervals using transformer models, which have shown immense potential in handling spatio-temporal dependencies in imagery.

The study involves two main phases:

1.	Part I: Application of traditional machine learning models (Random Forest, XGBoost, Decision Trees, etc.) for detecting changes in the Amazon Rainforest.

2.	Part II: Transition to transformer architectures, including the BIT_CD and ScratchFormer models, for advanced change detection, focusing on urban expansion.
________________________________________
Overview of Transformer Architectures:

In Part II, we explored the use of transformer models for change detection, focusing on two architectures: BIT_CD (Bitemporal Image Transformer) and ScratchFormer. These models allow us to automatically generate change maps for detecting significant changes between satellite images over time.

1. BIT_CD Transformer:

The BIT_CD Transformer is designed to handle bitemporal images (images taken at different times) and focus on spatial-temporal changes.

Architecture:

 ![image](https://github.com/user-attachments/assets/e2269922-4742-4446-8c5a-6ce187941716)

•	A transformer-based architecture that processes two images from different times and detects changes using attention mechanisms.

•	Optimized for multispectral remote sensing data and effective at detecting subtle changes in land cover.


2. ScratchFormer:
   
The ScratchFormer was developed from scratch for remote sensing tasks. Unlike models that rely on pre-trained networks, ScratchFormer learns directly from the input images and is simpler in design.

Architecture:

 ![image](https://github.com/user-attachments/assets/9e1716f1-deee-45b6-aaad-ec2940b86e85)

•	Follows the standard transformer design, with encoder layers utilizing self-attention for processing bitemporal images.

•	A simpler yet highly adaptable model suited for detecting urban expansion and environmental changes.

________________________________________
Dataset:

1. Data Collection and Preparation:

For the Amazon Rainforest, satellite imagery was collected from Google Earth Engine (2015-2021). The dataset contained 21.6 million pixel entries, each labeled as either forest, vegetation, urban, or water bodies, with corresponding 5-band values for each pixel.
The file is give in repository as “amazon_rainforest_100m_dataset.csv”

2. Creation of Enhanced Dataset:

For urban expansion detection, a more focused dataset was developed, targeting regions with visible changes over a longer time period (2000-2020). The final dataset included 20 regions with substantial urban growth, including cities in the Middle East, Asia, and China.

Image Collection is from Google Earth Engine.The link is as follow: https://code.earthengine.google.com/622038ae8bfb0f8823c49ddd43b0cf77

Key Regions:

•	Middle East & Asia: Dubai, KSA, Karachi, Lahore, Islamabad, etc.

•	China: Zhenzhou, Tianjin

•	Other Countries: South Korea, Netherlands, and UK regions

Link : https://drive.google.com/drive/folders/1MGKrpQnyjnFdeySJlQTkTtXzDw5H5cVX?usp=drive_link

Description:

•	Folder A contains pre-change.

•	Folder B contains post-change.

•	Labels contains ground truth.

•	List contains all the files names of validation, testing and training names.

________________________________________
Model Training and Results

1. Training on Amazon Rainforest Data:

Traditional machine learning models were applied to detect deforestation in the Amazon Rainforest. The results were as follows:

•	Random Forest Classifier: Achieved the best accuracy (85% on smaller subsets).

•	XGBoost, SVC, Decision Trees: Used for comparison, but results varied due to dataset imbalance.

•	Smaller datasets of 20,000 entries yielded better accuracy (up to 87%) than larger datasets.

2. Training with Transformers on Urban Expansion:

The enhanced dataset was used to train the BIT_CD and ScratchFormer models. The results improved significantly over previous attempts.

•	BIT_CD Transformer:

o	Achieved 75% accuracy after 200 epochs.

o	Detected meaningful changes in urban areas over time.

•	ScratchFormer:

o	Achieved 66% accuracy after 60 epochs.

o	Effectively captured subtle changes between images with a longer time frame.
________________________________________
Conclusion:

This project successfully applied both traditional and transformer-based machine learning models for change detection in remote sensing images. 

The key insights are:

•	Traditional Machine Learning Models:

Performed well in detecting changes in the Amazon Rainforest, with Random Forest achieving the best results.

•	Transformer Models: 

The BIT_CD and ScratchFormer models demonstrated superior performance in detecting urban expansion, leveraging the power of self-attention mechanisms for spatial-temporal analysis.


 BIT_CD: 
 
Achieved an accuracy of 75% after 200 epochs us. 
![image](https://github.com/user-attachments/assets/fdba9373-5caa-4e20-842f-97435cba55fd)

 
•	The transition from Amazon Rainforest detection to urban expansion resulted in improved model accuracy due to the use of well-prepared datasets and extended timeframes for detecting significant changes.
This project highlights the effectiveness of transformer models in detecting subtle yet impactful changes in satellite imagery, making them invaluable tools for environmental monitoring and urbanization studies.
________________________________________
References:

https://github.com/justchenhao/BIT_CD

https://github.com/mustansarfiaz/ScratchFormer

https://paperswithcode.com/paper/efficient-transformer-based-method-for-remote

https://ieeexplore.ieee.org/abstract/document/10489990

