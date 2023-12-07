# Ego Green

### Project Description
Ego Green is a cross platform mobile-app targeted to those who are interested in monitoring 
their environmental practices and contribution to sustainability. In its initial iteration, 
the goal of the application was to monitor daily sustainability practices by making estimates 
on the client’s carbon footprint – based on input data. As the project progressed, the Ego 
Green application has evolved to now utilize user-inputted receipt data from grocery stores. 
Using the power of Microsoft’s OpenAI API, users will receive a carbon emission output from 
their collective store purchase. The intent of this score is so that users get a better 
understanding of their environmental impact and start taking the steps to reduce their carbon 
footprint for the better. With this app, we aim to give users relevant information and the 
ability to increase their sustainability practices so that they can create a more sustainable 
world for all.

The work from this project is driven by Sustainible, a start-up company that focuses on business 
health. Other than business health, the founder of Sustainible, Talpha Harris, also has a passion 
in environmental health. With Ego Green, she hopes to bridge the gap between the consumer and 
conscious environmental sustainability practices.

### Programming Languages
1. JavaScript
2. TypeScript
3. HTML
4. CSS

### Language Each Part is Written in
1. Nativescript, Node, and Node Express parts are written in JavaScript
2. Angular is written with TypeScript, HTML, and CSS

### Major Modules
1. The *images directory* contains the project logo
2. The *login directory* contains the log-in page component
3. The *models directory* contains the parameter structure of receipts and user information for login
4. The *services directory* contains logic from Firebase that allows users to log into their account

## Accessing the Code
### Instructions for Setting up Locally

Currently, our developers use Visual Studio Code as the integrated development environment that the application runs and is developed on. Developers are able to choose the environment they are familiar with or want to explore. However, we will walk through how to set up your codebase in a way that you can access and maintain it in Visual Studio Code. This is mainly for development purposes (i.e. you, or a technical team of yours, wants to add/edit/delete features). If you don’t plan to code, you will NOT need to complete these items. However, we will invite talpha@sustainible.io or dre@sustainible.io to join and admin the Github organization. You will need this account to access the source code.

### Clone the Repository into a Local Development Platform (e.g., Visual Studio Code)
1. Navigate to the GitHub link for the sustainability tracker. Click on the green “Code” button and copy the HTTPS repo URL.
2. Open a Terminal window 
3. Navigate into the folder where you would like to store the repository using cd commands and if necessary, create a folder (you can also find the folder in the “Finder” application and copy the source path)
4. Open the terminal in Visual Studio Code
5. Type “git clone” into the terminal and then paste the URL into the command line
6. Hit enter and the repository will be locally stored on your machine
7. Alternatively, you can use the Github Desktop Application to avoid using the command line interface

### Set Up/Run Code
1. In the terminal, navigate into the root folder of the directory with the cd command (ex: cd egogreen-node)
2. Run npm install
3. To set up the Node.js module, run the command npm start in the terminal
4. Follow the NativeScript documentation to install the NativeScript command line interface [https://docs.nativescript.org/setup/macos] 
5. To ensure that you have all the dependencies installed properly, run ns doctor
6. To update any components if necessary, run ns install ___ or ns update ____ 
7. To run the application on an emulator on your device, run ns run android or ns run ios 
8. To quit in the terminal, press  Ctrl + C (Windows) or Command + C (Mac)
