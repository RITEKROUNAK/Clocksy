# Clocksy
<!--![hackathon-banner](https://user-images.githubusercontent.com/64047505/197006009-d417f81b-e76a-4ed5-8820-c223ca061b47.jpg)-->

![galaxy-cover-template#1](https://user-images.githubusercontent.com/64047505/197012080-9325f32b-014f-42d2-8a9e-63c07d801391.jpg)

## About

### Participants

| Name            | Github                                         | Discord         |
| --------------- | ---------------------------------------------- | --------------- |
| Pratham Singhal | [@Pratham-19](https://github.com/Pratham-19)   | Pratham#7898    |
| Ritek Rounak    | [@RITEKROUNAK](https://github.com/RITEKROUNAK) | cracker505#5352 |

### Description
This is a Watch Shop storefront powered by using ReactJs paired up with MedusaJs.

### Preview

![1](https://user-images.githubusercontent.com/64047505/197354357-43e82d0f-16ec-4d2e-a30b-450250f81296.jpg)


## Set up Project
Here's how to setup and run the project locally :

### Prerequisites

Here are some pre-requisites that you may require to run the project on your system.

- Medusa CLI (```npm install -g @medusajs/medusa-cli```) .
- Node (https://node.org/).
- ReactJs (https://reactjs.org/).
- Medusa Server [Quickstart](https://docs.medusajs.com/quickstart/quick-start).

### Install Project

Done with the pre-requisites?

Here are the steps to be taken after that :


1. Clone the repository:

```bash
git clone https://github.com/RITEKROUNAK/Clocksy.git
```

2. Change directory :

```bash
cd Clocksy
```
3. Install dependencies :

```bash
cd my-medusa-store
npm install
  or
yarn install
```

4. Start the server

```bash
cd server
medusa develop
```
5. Admin
    1. Clone the repository:
       ```bash
       git clone https://github.com/medusajs/admin
       ```
    1. Go to the admin dir
       ```bash
       cd ../admin
       ```
    1. Install dependencies
       ```bash
       npm install
       ```
       or
       ```bash
       yarn
       ```
    1. Start the admin

       ```bash
       npm run start
       ```

       or

       ```bash
       yarn start
       ```
       
    1. Use the following credentials:

      - email `admin@medusa-test.com`
      - password `supersecret`

6. Change directory , install dependencies and start the store-front

```bash
cd ..
cd my-store-front
npm install
npm run dev
  or
yarn install
yarn dev
```

## Resources

Here are some technologies that were very useful throughout the process :

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [How to Create Services](https://docs.medusajs.com/advanced/backend/services/create-service)
- [Node](https://node.org/)
- [ReactJs](https://reactjs.org/)
