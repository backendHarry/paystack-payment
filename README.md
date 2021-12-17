Username = fakeAdmin
password = admin123

# Express session Authentication

## Description

The project is a project based on a minimal e-commerce web store with just a one product but rich in features.
Frontend design (UI/UX) is a chanllenge from [FRONTENDMENTOR](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).
Needed some quick Ui to build with and frontendmentor was the best resource to find, offcourse with the designs, images, e.t.c

## Stacks used for project

The stacks used for the project is the popular MERN(MongoDb, Express, React, Node.js) and my reason for using the stack is because its flexible, good for scalability(using the event loop), and it has a larger community including frameworks, libraries, e.t.c (offcourse, it's JS so yeeeaaa!! LOL).
The project as well uses the Paystack API for handling it's payment with it's Custom Theme(from paystack).

## Starting The project (INTRODUCTION)

For this project, users don't need to register using a register route or a frontend for it. My reason because, its a fun and a project for learning, so no need for the delay, we just head straight to the app features.

1. Add items to cart and
2. click on checkout in the modal(the cart icon).
3. Since user is not logged in to use sessions, a middleware kicks prompting login, which the user will use the custom details i.e fakeAdmin for username and "admin123" for password. Email Can be any email of your choice and it should be legit to get a receipt from paystack pertaining payment made.
4. continue adding to cart and finally click on checkout. 5) This time around , user will be redirected to make payment with paystack's payment page.
5. after payment completion, user is redirected back to app where we will verify payments and ensure payment was really made successfully.

## Tools used

- dotenv
- express
- MongoDB and mongoose
- Passport and Passport-local
- express-session
- connect-mongo
- Bcrypt
- Paystack
- React (using npx create-react-app)
- axios
- e.t.c

## How to run the project

- First make sure Node is installed, simply go to their offcial site and follow the steps for downloading node.
- Check if node is installed by typing the command below to see if a version pops up, if a version does, it means node js is successfully installed.

```bash
npm --version
```

- follow this step to run project server, assumming paystack-payment is the path of the project

```Bash
cd paystack-payment
npm install
npm run dev
```

- for the project frontend

```Bash
cd paystack-payment
cd client
npm install
npm run start
```

```JS
//Happy Coding..
```
