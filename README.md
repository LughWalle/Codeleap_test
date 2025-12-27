# CodeLeap Network

This is a simple React project made for the CodeLeap challenge.

The app lets users:
- Login with a username
- Create posts
- Edit their own posts
- Delete their own posts
- See a list of posts with scroll

---

## Live Project

Project running online:
[HERE](https://lughcodeleap.vercel.app/)

---

## Requirements

Before start, you need to have:

- Node.js (version 22 or higher)
- npm or yarn

Check if you have it:

node -v  
npm -v

---

## How to run the project locally

1. Clone the repository
```bash
git clone git@github.com:LughWalle/Codeleap_test.git
```
2. Enter the project folder
```bash
cd codeleap_test
```
3. Install dependencies
```bash
npm install

or

yarn install
```

4. Create .env file and take this line. If you not have API link, you don't create the .env file, just skip this step:

<span style="color: yellow;">*skip this step will show "clear cache" button when using mock api  
why? In the mock api, posts are saved to localStorage  
And we won't your cache to fill with every test.*</spam>
![alt text](./public/image.png)

```bash
VITE_API_URL=URL_API_TEST
```

5. Run the project
```bash
npm run dev

or

yarn dev
```
The project will run at:

http://localhost:5173

---

## Build for production

To generate the production build:
```bash
npm run build

or

yarn build
```
The project will run at:

http://localhost:4173/

---

## Deploy

This project is deployed on Vercel.

### https://lughcodeleap.vercel.app/

---

## Tech Stack

- React
- Vite
- Material UI
- Styled Components
- React Query
- Axios

---
## Decisões Técnicas

- React Query for cache control and async state management
- Lazy loading + Suspense for pages loading
- Skeletons for improving user experience
- styled-components + MUI To ensure visual consistency and scalability

## Author

Made by Lucival dos Santos França Filho
