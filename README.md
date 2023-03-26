# fmp-geekshubs-fsd-val-ReactDentalClinic

# Welcome to dental clinic frontend app
<p align="center"><img src="./img/headerpict.jpg"/></p> 

<details>
  <summary>Index</summary>
  <ol>
    <li><a href="#about-this-project">About this project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#local-instalation">Local installation</a></li>
    <li><a href="#how-do-we-do-it">How do we do it</a></li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#design">Design</a></li>
    <li><a href="#known-bugs">Known bugs</a></li>
    <li><a href="#future-functionalities">Future funtionalities</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#webgraphy">Webgraphy</a></li>
    <li><a href="#gratitudes">Gratitudes</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About this project
<p align="center">This is the fifth Full Stack Developer Bootcamp's project from GeeksHubs Academy. In this occasion we were asked to develop a frontend to connect our API, in charge of managing the business model of a dental clinic.  
My objective with this project has been that the web has the important functions a clinic might ask for, having in mind the differences with a professional work.   
However, a user can definitely register themselves and log in, book dates and visualise their profile, update it and check their records, where they can see their upcoming dates as well as their past ones.  
The professional staff can access to specific areas depending on their rol as administrator or doctor. In those areas, the doctor is able to check every user and date, in detail. Besides, the administrator, is able to act on those elements, modifying and erasing users' profiles, booking and cancelling dates for any user. 
I believe that the result is a versatile web application in which can be done a good amount of fluid and dynamic actions. 
</p>
  

## Stack
<p>Technologies that has been used:</p>
<div align="center">
    <a href="https://expressjs.com/">
        <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    </a>
    <a href="https://nextjs.org/">
        <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
    </a>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
        <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
    </a>
    <a href="https://jwt.io/">
        <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
    </a>
    <a href="https://www.postman.com/">
        <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
    </a>
    <a href="https://www.mysql.com/">
        <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
    </a>
    <a href="https://www.github.com/">
        <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
    </a>
    <a href="https://git-scm.com/">
        <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
    </a>
    <a href="https://www.docker.com/">
        <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    </a>
    <a href="https://www.sequelize.org/">
        <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
    </a>
</div>


## Local installation

There are various forms of launching this application. The first and easiest is accessing directly to the following link, as the web is already deployed in AWS:

[App link](https://master.djnz6pt819yav.amplifyapp.com/)

The second one is going to the GitHub's directory and download its content. Given that it is a job integrated by backend and frontend, it is necessary to download as well the database, which is located in this direction: 

[Database GitHub](https://github.com/Sierpe515/Copy-BBDD-DentalClinic) 

And follow the next steps:

Steps to make it work on your local computer:
1. Clone the project on your computer with git bash:
 `$git clone 'url-repository'`
2. Install all dependencies with the following command:
 ` $ npm i `
3. Create a .env file following the template .env.example provided and type all credentials. If you cannot get them, change the parameters for your own local database set up running in docker.
4.  Start the server with:
 ``` $ npm run dev ```
5. Connect the repository with the database with the following commands:
 ``` $ npx sequelize-cli db:create ``` 
 ``` $ npx sequelize-cli db:migrate ``` 
 ``` $ npx sequelize-cli db:seed:all ```

The database is ready to operate autonomously once is running thanks to the seeders contained in it, which grant a base to realise the proper actions.  
Once the database is running, we have to do the same with the frontend. That is to say, download the content of this repository and install dependencies. It can be made following this steps: 

Steps to make it work on your local computer:
1. Clone the project on your computer with git bash:
 `$git clone 'url-repository'`
2. Install all dependencies with the following command:
 ` $ npm i `
3.  Start the server with:
 ``` $ npm run dev ```
 

## How do we do it

In order to develop this application, the technologies mention in the part 2, Stack, have been used. But the main and fundamental technologies to keep it up and running are React y Redux. 
In this occasion, we found ourselves before a complete web application. It can be interacting with and also our actions will have effect in the database, whether it is to extract data o send it. 
We are before the most ambitious project we have faced, not only for its complexity, but also for the quantity of hours invested in it. When trying to provide the web with almost every functionality I wish I could include, it is made up of numerous layouts or pages and every single one has a functionality, for show information brought from the backend or request another with real time callings, with the possibility of interfering sending new information, modifying or erasing it. 
Thanks to Redux, the web components have the capability to communicate between themselves, sending information or picking it up from any part of the application, which facilitates working with it without excessive communication with the backend.  
To be able to get the obtained result, the backend has been modified in numerous occasions, in order to be able to grant it various functionalities which were not initially foreseen but were necessary or relevant with the frontend inclusion. For example, with the inclusion of more endpoints or the modifying of models and migrations. 
It is worth mentioning that the use of some React functions like hooks or useEffect which application is fundamental to the functioning of the whole page architecture. 


## Project structure
This project's structure starts in an index.html file which links with the other files. First of all, a file main.jsx which through a react-dom and react-router-dom connects with the rest of files.  After that, in MainApp.jsx, we declare the skeleton that every layout will have, and through the file Body.jsx we declare and link every route of our project. These routes belong to the layouts, which is a folder that can be found in the repository src. 
In the folder app, we found the file store.js which is the principal file of Redux that make it start running, connecting with slice files. 
At the same time we have the components folder, where we store every reusable item that we are going to bring from various layouts or even from everyone. 
At last, the services folder, in which we store the file in charge of communicate with the backend through axios, and helpers, in which the validations file can be found. 



## Design

This web design is simple, according to its necessities, given that it must simulate an accessible environment for users and professionals where the design helps with the users experience.  
Our clinic ambience is mainly inspired in the legendary series “Futurama”, with doctor Zoiberg as the main inspiration. The rest of doctors shown in the application are well known doctors in pop culture. Even though, the application allows the dynamic creation of more doctors. 
Likewise, we offer a wide range of dental health services which can be selected at the moment of picking a date and can be looked up - as well as the doctors - in the services’ dropdown.
 
It has been used a light tonality, with cold tones to be quickly connected with a dental clinic.
Apart from that, images from the previously mentioned character Zoiberg and some from Futurama have been used to decorate the web. In fact, the colour pink or salmon have been used to combine with Zoiberg's skin colour. 



## Known bugs

During this project's development I found several errors, of which one I was not able to resolve before the delivery date. 
The problem being that with a date search function implemented, the input is not transmitting its value to the hook, not searching as a result. In the same vein, the endpoint of the database in charge of this search is capable to recognise the hours but no the dates.


## Future functionalities

If I could devote more time to this project in the future, I would love to implement pagination, both to the backend and frontend. 
Another functionality that I did not introduce due to lack of time, and because the same mechanics already exist with other applied elements, is de appointments updating, for the user end and administrator end.
The hardest task which I have given up trying to implement, is the one that prevents two identical appointments, or two appointments that repeat impossible elements such as same day, same time or same doctor, from being requested. But I would like to apply this function at some point, as it seemed particularly interesting for me to do so.

    

## Licence
This project is belonging to license Creative Commons Legal Code.


## Webgraphy
To achieve the goal we have collected information from:
- [React documentation](https://es.reactjs.org)
- [Redux documentation](https://es.redux.js.org)
- [React-bootstrap documentation](https://react-bootstrap.github.io)
- [Repository GeeksHubs](https://github.com/GeeksHubsAcademy)
- [dental clinic website-vitaldent](https://www.vitaldent.com/es/?gclid=c304c159cd09182a4974a55d1f0295ef&gclsrc=3p.ds&)



## Gratitude
I thank my colleagues and especially to:

- **Dani**  
<a href="https://www.github.com/datata" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

- **Jose**
<a href="https://github.com/JoseMarin" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **Mara**
<a href="https://www.github.com/MaraScampini" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

- **David**  
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

## Contact
- Fernando Martínez Pardo
<a href = "sierpe515@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a><a href="https://www.linkedin.com/in/fernando-mart%C3%ADnez-pardo-61456712a/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a><a href="https://github.com/Sierpe515" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a> 
</p>
