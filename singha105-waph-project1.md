## **Web Application Programming and Hacking**

### **WAPH Hackathon 1 -- Cross-site Scripting Attacks and Defenses**

**Instructor Name : Dr. Phu Phung**

**Student Name : Arnab Singh**

**Email: singha105@udayton.edu**

![](media/image1.jpg){width="3.2031255468066493in"
height="2.6770833333333335in"}

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**

###  **Overview**

This project was part of the Web Application Programming and Hacking
course aimed at building a professional portfolio website using HTML,
CSS, Bootstrap, JavaScript, and public Web APIs. I developed a
responsive resume website hosted on GitHub Pages. Throughout the
project, I learned how to structure web content, apply dynamic effects,
interact with APIs, and implement user tracking and cookies for
interactivity.\
\
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
\
**General Requirements**

####  **Personal Website on GitHub**

- Created index.html with personal details: name, photo, contact,
  education, experience, skills.

- Used Bootstrap for responsive layout.

- Website deployed successfully on GitHub Pages.

***Screenshot:* Homepage with name visible**.\
![](media/image11.png){width="6.270833333333333in"
height="3.5241141732283463in"}

####  **WAPH Introduction Page**

- Created waph.html to introduce the course and related projects.

- Linked from sidebar or additional section in main page.

***Screenshot:* Page showing WAPH intro and overview of labs/projects.**

![](media/image12.png){width="6.270833333333333in"
height="3.3281255468066493in"}

### **Non-Technical Requirements** 

- **Bootstrap 4.5 is used as the main CSS framework to ensure a
  responsive and professional layout.\**

- **Layout and design are clean, consistent, and recruiter-friendly.\**

- **Google Fonts used:\**

  - **Oswald for headings\**

  - **Open Sans for body text\**

- **Consistent use of font sizes, padding, spacing, and color palette
  across all sections.\**

- **Sidebar is fixed for easy navigation; main content area is
  scrollable and neatly segmented.\**

- **Target audience: Potential employers, professors, and technical
  reviewers.**

### **Technical Requirements -- JavaScript Features** 

####  **JavaScript Features (20 pts total)**

- **Digital Clock\**

  - **Tool: Luxon.js\**

  - **Displays current Ohio (EST) time and updates in real-time\**

  - **Placed under \"Additional Tasks\" section\**

- **Analog Clock\**

  - **Tool: Plain JavaScript with \<canvas\>\**

  - **Custom design, live-rendered clock hands, accurate
    second-by-second motion\**

  - **Also in the \"Additional Tasks\" section**

- **Show/Hide Email\**

  - **Tool: jQuery\**

  - **A button toggles your email visibility, protecting it from spam
    bots\**

  - **Located under your name in the header section\**

- **Dark Mode Toggle\**

  - **Tool: Plain JavaScript\**

  - **Floating moon/sun button in the top-right corner\**

  - **Button remembers theme using localStorage\**

  - **Dark mode also updates colors for sidebar, highlights, and
    progress bars\**

  - **Border color of the button set to yellow for visibility**

**Screenshot 1: Clocks**

![](media/image6.png){width="6.267716535433071in"
height="2.986111111111111in"}

***Digital and Analog clocks built using JavaScript and Luxon***

**Screenshot 2: Show/Hide Email**

![](media/image13.png){width="6.267716535433071in"
height="1.2361111111111112in"}

![](media/image10.png){width="6.267716535433071in"
height="1.2777777777777777in"}

***Email visibility toggled using jQuery***

**Screenshot 3: Dark Mode Active**

![](media/image7.png){width="6.119792213473316in" height="2.4375in"}

![](media/image8.png){width="6.109375546806649in"
height="2.7291666666666665in"}

***Light / Dark mode UI with sidebar and theme toggle button***

### **Public API Integrations (20 pts)**

####  **JokeAPI Integration -- 10 pts**

- Integrated the JokeAPI to **fetch and display a new joke every 60
  seconds**.

- The joke is placed inside a **Bootstrap card** under the "Additional
  Tasks" section.

- The API call uses fetch() and updates the card content dynamically.

- Adds a fun, engaging real-time element to the page.

**Code Snippet Example:**

fetch(\'https://v2.jokeapi.dev/joke/Any\')

**Screenshot 1 - The joke section while a joke is displayed:**

![](media/image2.png){width="6.267716535433071in"
height="1.0555555555555556in"}\
***Live joke fetched using JokeAPI (updates every 60 seconds)\***

- I also integrated the xkcd API to fetch and display the Comic of the
  Day. This comic is automatically updated and displayed as an image. It
  brings a fun visual aspect to the page, making the user experience
  more interactive and enjoyable. Like the joke section, a disclaimer is
  shown here as well.

**Screenshot 2 - The comic of the day section while a comic is
displayed:**

![](media/image9.png){width="6.270833333333333in"
height="1.7181900699912511in"}

***Live comic fetched using xkcd API.***

####  **Weather API Integration -- 10 pts**

- Used **WeatherBit API** to fetch and display **live weather in Dayton,
  OH**.

- Displays temperature and condition inside a styled card under
  "Additional Tasks".

- API is fetched via fetch() and the data is dynamically inserted into
  the page.

- API key used: eb676bdc8fd54856b81184229251906

**Code Snippet Example:**

fetch(\`https://api.weatherapi.com/v1/current.json?key=\${weatherAPIKey}&q=\${city}&aqi=no\`)

**Screenshot - The weather box when the data is visible:**

![](media/image3.png){width="6.267716535433071in"
height="1.1527777777777777in"}\
***Live Dayton weather data powered by WeatherBit API\***

####  **Disclaimer for API Use (Mandatory)**

> **Disclaimer added below APIs**:
>
> *"The content below is generated using third-party public APIs. I am
> not responsible for their accuracy or availability."*

This fulfills the requirement to **clearly state responsibility
disclaimer** for any public data.

###  **Page Tracker (5 pts)**

####  **Google Analytics (Optional Tracker)**

- **Google Analytics** was integrated using gtag.js script inside the
  \<head\> section.

- Tracks visits, sessions, and interactions for the deployed site.

- Set up via Google Analytics Console with proper stream ID (e.g.,
  G-XXXXXXX).

**Screenshot - Google Analytics details** :

![](media/image14.png){width="6.270833333333333in"
height="1.678176946631671in"}\
***Google Analytics Web Stream setup for page tracking\***

### **FlagCounter -- Visible Visitor Counter Widget (5 pts)**

- Embedded a **FlagCounter** widget that shows:

  - Total visitor count

  - Country flags

  - Medium flag size

  - White background

- **Visible directly on the page**, does not require an external
  dashboard to check.

**Screenshot - FlagCounter** :

![](media/image4.png){width="6.267716535433071in"
height="1.5138888888888888in"}\
***Live visitor tracker widget from FlagCounter.com***

#### 

#### 

#### **JavaScript Cookies**

- On first visit: shows "Welcome to my homepage for the first time!"

- On repeat visit: shows "Welcome back! Your last visit was Sunday, June
  23, 2025, 8:30 PM (IST)".

***Screenshot -* Cookie popup message visible :\**
![](media/image5.png){width="6.267716535433071in"
height="1.0833333333333333in"}
