# P3-A-Cool Engineering

![mockup](https://github.com/Alansiapk/P3-A-CoolEngineering-React/assets/122661925/1a9d1829-0c22-450a-9a6c-56ebc19d4f7a)

Live demo for customers can be accessed [here](https://phenomenal-choux-91c842.netlify.app/).
* Test Account: 
    * Email: alicetu@gmail.com
    * Password: alicetu123

Live demo for admin/shop owners can be accessed [here](https://acoolengineering-express.onrender.com).
* Test Account: 
    * Email: EricChou@gmail.com
    * Password: Eric123!
## Project Overview 

**Context and Value Proposition**

Most websites either sell only a certain  aircon brand which limits the customer's choice or they sell all kinds of other home appliances.

My website sells different brands of aircon to cater for different brands, categories, applications and features.

## UI/UX 

**1. Strategy**

**Organisation's Goals** 

To establish an e-commerce store that sells a wide range of aircons with different brands, categories, applications and unique features to choose from.

**User** 

- Demographic: New home owner or owner looking for install new set of aircon. They usually want something reliable brand with description of the aircon clearly on website.

- Needs: Search for aircon according to a certain brand, category, application,  and unique features.

- Pain points: most ecommerce stores sell lump aircons together with other home appliances making it hard for users if they are only interested in aircon.

| User Stories | Acceptance Criteria(s) |
| ------------ | ---------------------- |
| I would like to know the name, brand and category of the aircon. | Website allows users to search aircons by name, brand and category. |
| I have a certain budget allocated for the aircon | Website allows users to filter aircons by a minimum and maximum price. |
| I would like to know if the aircon has WIFI control, R32 gas, PM2.5 filters, 3D airflow control, NEA 5 tick for me. | Website allows users to filter aircons by features checkbox option |

**2. Scope** 

**Database**

![ER diagram](https://github.com/Alansiapk/P3-A-CoolEngineering-React/assets/122661925/66b44084-e4f5-4003-823c-ad98580435e8)

Logical Schema

![P3 - schema-diagram](https://github.com/Alansiapk/P3-A-CoolEngineering-React/assets/122661925/7e3b2468-5ffd-454d-b526-51a83033a00a)

**Functional**

* For customers: 
    * Account signup, view profile, login and logout
    * Browse product listing, filter/search products and view details of individual product
    * Add products to cart
    * Cart management (update quantity of products, remove products from cart and checkout/make payment via Stripe)
    * View past orders after purchase

* For admins/shop owners: 
    * Register, login and logout for admin/shop owner
    * Product management (create, read, update, delete)
    * Filter/search for products
    * Orders management (view order details)

**Non-Functional** 

- Application is mobile responsive

**3. Structure** 

**Frontend/Users**

![Frontend](https://github.com/Alansiapk/P3-A-CoolEngineering-React/assets/122661925/f0b43852-8a4c-484d-86d7-a9c597526b26)

Checkout, order details, user profile and logout are only accessible after user has logged in successfully. 

**Backend/Owner**

![Backend](https://github.com/Alansiapk/P3-A-CoolEngineering-React/assets/122661925/a93484d8-e668-4a7d-80b2-cf0851a22d38)

## Technologies Used 

**Frontend**

Technology                                                                                  | Description
------------------------------------------------------------------------------------------  | -----------
[Stripe](https://stripe.com/)                                                               | Payment gateway
[axios](https://github.com/axios/axios)                                                     | Axios as HTTP client to Express server endpoints
[Bootstrap 5](https://github.com/twbs/bootstrap)                                            | Bootstrap is used to create a mobile responsive web application
[ReactJS](https://reactjs.org/)                                                             | ReactJS is a frontend JavaScript framework used for building user interfaces specifically for single-page application
[react-hook-form](https://github.com/react-hook-form/react-hook-form)                       | React-Hook-Form is used to handle and validate forms in the application. 
[react-router-dom](https://github.com/remix-run/react-router)                               | Declarative routing for ReactJS
[react-toastify](https://fkhadra.github.io/react-toastify/introduction)                     | Toast notification for ReactJS

**Backend**

| Technology | Description |
| ------------ | ---------------------- |
| [Express](https://expressjs.com/) | Unopionated framework for routing to project's endpoints |
| [Handlebars](https://github.com/pillarjs/hbs) | Express.js view engine |
| [cors](https://www.npmjs.com/package/cors) | Middleware to enable CORS for Express.js |
| [csurf](https://www.npmjs.com/package/csurf) | Middleware to enable CSRF for Express.js |
| [dotenv](https://github.com/motdotla/dotenv) | Storing configuration in the environment separate from code |
| [express-session](https://www.npmjs.com/package/express-session) | Middleware to create sessions on Express.js |
| [express-flash](https://www.npmjs.com/package/express-flash) | Flash messages middleware |
| [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) | Securely transmitting information between parties as a JSON object |
| [MySQL](https://www.mysql.com/) | Database |
| [db-migrate](https://db-migrate.readthedocs.io/en/latest/) | Database migration framework for Node.js |
| [Knex.js](https://knexjs.org/) | Query builder for PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 and Oracle on Node.js |
| [Bookshelf](https://bookshelfjs.org/) | JavaScript ORM for Node.js, built on the Knex SQL query builder |
| [Caolan forms](https://github.com/caolan/forms) | Create, parse and validate forms in Node.js |
| [Cloudinary](https://cloudinary.com/) | Image hosting service used to upload and store the project's images |
| [Stripe](https://stripe.com/en-sg) | Payment gateway |




