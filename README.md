


> 💻 CLONE PROJECT NAME⭐  --> ✨FAMOUS FOOTWEAR💫
<br>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/shikhu51197/backendcruise)
[![Deploy to Cyclic](https://img.shields.io/badge/Deployed_Cyclic_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://lime-silly-goshawk.cyclic.app/)

[![Deployed App Vercel Link](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://cruiserental.vercel.app/)
[![Deployed Admin Vercel Link](https://img.shields.io/badge/Deployed_Admin_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://cruise-rental-admin-panel.vercel.app)  

---

 ![ShopGIF](https://media.giphy.com/media/IzoWwMyCtNyNwuLRWS/giphy.gif) 

> Avis is India's leading mobility Company with services ranging from chauffeur drive and self-drive car rentals, car-Sales, operating lease and fleet management and has been present in the country for over 20 years.This was a collaborative Project which is made by 5 team members within 5 Days.
---


## 🔗 Collaborators Profile Links✨



| Collaborators | Github                                                                                                                                   | Linkedin                                                                                                                                                            | Portfolio                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Shikha Gupta  (Team Lead)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shikhu51197/)| [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shikha-gupta-12a2b5199) |[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shikhu51197.github.io/) | 
| Mandar Deshmukh (Member 1) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DeshmukhMandar3) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mandar-deshmukh-62821b189/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://deshmukhmandar3.github.io/) |
| R Giri Reddy (Member 2) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/geraltyen) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giri-reddy-geralt/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://geraltyen.github.io) |
| Kallol Sarkar (Member 3)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kallol0011) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kallol-sarkar-229000210/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kallol0011.github.io/) |
| Himanshu Sharma (Member 4)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/himanshu7582901182) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/himanshu-sharma7/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://himanshu7582901182.github.io/) |

<br>

💻Unique Project Name & logo :- CRUISE RENTALS🚗

![CRuise (1)-modified](https://user-images.githubusercontent.com/107506646/220362530-270d0d67-df50-44f2-961e-838b22b3e619.png)  

---
## 💫Tech-Stack->

- #### For Frontend :-
   - `HTML5`
  - `CSS3`
  - `JavaScript `
   - `Redux`
  - `ReactJS`
  - `Typescript `
   - `ES6 `

- #### For Backend :-
   - `NodeJS`
   - `ExpressJS`
   - `MongoDB `

- #### For deploy database :- 
   - `cyclic `

- #### For Styling :-  
   - `Chakra UI `
   - `BootStrap `

- #### For live Project : -
   - `Vercel`

![ShopGIF](https://media.giphy.com/media/26BRrcK4dXrxl817q/giphy.gif)

---
## Features ✨:-
---
 | Serial No            | Feature                                                              |
| ----------------- | ------------------------------------------------------------------ |
| 1 | User signup and Login |
| 2 | Products Page with Filter and Sort Functionalities |
| 3 | Dynamic SinglePage & payment feature |
| 4 | Dynamic cart page using userId |
| 5 | Admin Login & Deshboard Page |
| 6 | Homepage & Reservation Page |

---
# Package.json(Dependency)✨:-

 | Serial No            | Backend                      |  Frontend      |
| ----------------- | -------------------|------------------------ |
| 1 | bcrypt |   Chakra-ui , BootStrap|
| 2 | mongoose |  React Router dom |
| 3 | cors |    redux ,react-icons |
| 4 | dotenv |  react redux ,axios |
| 5 | express | typescript |
| 6 | jsonwebtoken | redux thunk |

---

## Flow

```mermaid
graph TD;
    App-->HomePage
    HomePage-->SignUpPage;
    HomePage-->loginPage;
      SignUpPage-->loginPage;
       loginPage-->HomePage;
       HomePage --> ReservationPage
       ReservationPage-->CartPage
       CartPage-->PaymentPage
       HomePage -->CarSales
       CarSales-->SinglePage
       SinglePage --> CartPage
       CartPage-->PaymentPage
       HomePage --> AdminLogin
       AdminLogin-->AdminDeshboard
       AdminLogin -->CarsData
       AdminLogin -->Users
       AdminLogin -->Bookings
       AdminLogin -->Feedback
       AdminLogin -->Profile
       
```

---
## Screenshots 📷
---

# HomePage

![Screenshot (1658)](https://user-images.githubusercontent.com/107506646/221434962-c51516ca-5281-4ef3-928e-31e7a2c88b84.png)


# Signup | Login
![Screenshot (1665)](https://user-images.githubusercontent.com/107506646/221434968-aff151ff-cadb-4e3c-a863-61515a5e5bc7.png)

# ReservationPage

![Screenshot (1659)](https://user-images.githubusercontent.com/107506646/221435011-750a99eb-436d-4971-9a26-6f35568c7b77.png)

# Products | SinglePage

![Screenshot (1660)](https://user-images.githubusercontent.com/107506646/221434990-8c730e12-23e5-4d33-a0f4-bb497f2394de.png)

![Screenshot (1661)](https://user-images.githubusercontent.com/107506646/221434996-33859663-1cd8-40a6-9127-a3be050c9ca2.png)

#  Payment 

![Screenshot (1662)](https://user-images.githubusercontent.com/107506646/221434978-509be1a5-b85a-42a5-9547-27799444ed0b.png)

# Admin & AdminDeshboard
![Screenshot (1663)](https://user-images.githubusercontent.com/107506646/221434971-4569981a-bc54-496a-a2e8-86e7fcdbffff.png)

![Screenshot (1664)](https://user-images.githubusercontent.com/107506646/221434972-7dd12b1f-43dc-4edf-aa23-85559d089c3a.png)

---




<h1 align="center">✨Thank You✨</h1>



















  <h4>Homepage</h4>
 ![Screenshot (836)](https://user-images.githubusercontent.com/107476738/221494412-839eaf83-1675-4837-8a39-3fb7b96a633d.png)


  <p>Footer of the website</p>
 
 
 
 ![Screenshot (833)](https://user-images.githubusercontent.com/107476738/221493347-82b8120d-b589-4145-b7c5-3db3a1f6270d.png)

 
 
  <P>Login form</p>
 
 ![Screenshot (834)](https://user-images.githubusercontent.com/107476738/221493376-fcca3648-d22b-4e23-bcb1-7f1057584010.png)

 
  <p>We have an admin panel in our website</P>
 
 
 
 
 ![Screenshot (835)](https://user-images.githubusercontent.com/107476738/221493394-65ef2b9b-ea64-430e-bbf0-f564ebee4ad8.png)

 
  <p>Sign-up form</p>
 
 
 
 
 ![Screenshot (837)](https://user-images.githubusercontent.com/107476738/221494444-794c503b-d9bc-4be5-a7d9-4462c19e589c.png)

 
  <p>women category</p>
 
 
 
 ![Screenshot (838)](https://user-images.githubusercontent.com/107476738/221494527-35197a27-0e3c-44c6-ba45-6a4dbc5b00dc.png)

  <p>Men category</p>
  ![Screenshot (839)](https://user-images.githubusercontent.com/107476738/221494596-1457dcd9-c042-45e4-bdd1-9636dc588e9a.png)

 
  <hr>
  <h4>Profile Page</h4>
  
<h2>Team Members :</h2>
  <li><a href="https://github.com/pallavijainy">
Pallavi Jain</a></li>
  <li><a href="">Sarfaraj Ahmad Raza</a></li>
  <li><a href="">
Kaushik</a></li>
  <li><a href="">Rajat kaswan</a></li>
  <li><a href="">Ujjawal kumar</a></li>
 <hr><hr>
  
