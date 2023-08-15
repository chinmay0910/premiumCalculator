# Insurance Premium Calculator
This innovative web application is designed to assist users in calculating insurance premiums for various insurance types and creating visually appealing presentations based on the calculated data. The project is built using a combination of HTML, CSS, JavaScript, MongoDB, Node.js, Express, and the pdf-lib library.

## Features
- **Home Page:** Introduce Advisors to the Website and showcase what can be perform using Website.
- **Get Qoute:**  Gather user-specific data like age, coverage amount, and other relevant parameters required to calculate the insurance premium.
- **Fetching Premium:** Fetch real-time premium form the MongoDB Database as per Selected Inputs. And Display to the Advisor in the form of Comparison .
- **PDF Generation:** Utilize the pdf-lib library to generate professional PDF presentations that Advisors can download and share.

## Technologies Used
- **HTML:** Responsible for structuring the web pages and defining the content's layout.
- **CSS:** Utilized for styling the website, ensuring an attractive and user-friendly design.
- **JavaScript:** Implemented for dynamic user interactions, real-time calculations, and data visualization.
- **Node.js and Express:** Used to build the server-side logic and APIs for data handling and communication.
- **MongoDB:** Employed as the backend database to Fetch Premium as per Inputs and create presentation pdf using data.
- **pdf-lib Library:** Utilized to create professional and customizable PDF presentations dynamically.

## Getting Started
### 1. Clone the repository:
```bash
  git clone https://github.com/chinmay0910/premiumCalculator.git
```
### 2. Install dependencies:
```bash
cd premiumCalculator
npm install
```

### 3. Set up MongoDB:
- Install MongoDB and start the MongoDB server.
```bash
// In Terminal
mongod
```
```bash
// In Another CMD Terminal
mongosh
```
- Update the MongoDB connection URL in the server configuration.

### 4. Run the application:
```bash
node index.js
    or
npm start
```

### 5. Access the website in your browser:
Open `http://localhost:200` in your web browser.

## Demo Screenshot of Website
### 1. Home Page:
![quatationMaker](https://github.com/chinmay0910/premiumCalculator/assets/78205628/afd6b4bf-258a-4259-8786-7522e6ea6a06)

### 2. Get Quote Page:
![QUOTEPAGE](https://github.com/chinmay0910/premiumCalculator/assets/78205628/9ed8177f-7265-4d7e-9049-af4b6ec213a8)

### 3. Enter Inputs:
- Input Name, Family Size, Date of Birth, Sum Assured
![selectFamilySize](https://github.com/chinmay0910/premiumCalculator/assets/78205628/70c28b6b-2fe0-418e-905c-35c16c51afe4)

![allDetails](https://github.com/chinmay0910/premiumCalculator/assets/78205628/90e16530-c2d8-497f-af26-15cdfda58d3a)

### 4. Click Calculate Button:
- Premium Calculation Will be Shown
  ![premiumInfo](https://github.com/chinmay0910/premiumCalculator/assets/78205628/a67bca00-f526-4613-bdb8-b1ce11a6c5dd)

### 5. Click on Download Button:
- It will Output a PDF with all the information of the plan with Premium For Same.
![downloadPDF](https://github.com/chinmay0910/premiumCalculator/assets/78205628/704e2edb-a8d6-490f-92e6-3f19a95a1a30)

## Acknowledgements
I'd like to thank the open-source community for providing the tools and libraries that made this project possible.

##
For any questions or feedback, please contact me at [chinmayrmhatre@gmail.com](mailto:chinmayrmhatre@gmail.com)
