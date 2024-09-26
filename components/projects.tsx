interface Project {
  id: number,
  name: string,
  image: string,
  description: string,
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Quiz App",
    image: "./img/quizapp.png",
    description: "A quiz app made with Vue.js (Vue Router), HTML and CSS. The quiz makes API calls to get the questions and answers. Local storage is used to store the players name.",
    link: "https://emmyme.github.io/quiz/"
  },
  {
    id: 2,
    name: "Plantz",
    image: "./img/plantz.png",
    description: "A mock e-commerce website. It is a fullstack application made with Next.js. The server was made using SQLite and the backend was made in Node.js using the Express.js framework. For the frontend I used React with TypeScript.",
    link: "https://github.com/Emmyme/plantz-webshop"
  },
  {
    id: 3,
    name: "Daily Planner",
    image: "./img/dailyplanner.png",
    description: "A daily planner designed in Figma. It was made with Native JavaScript, HTML and CSS. The planner makes API calls to tell you the weather in your chosen location. It also uses local storage to store the to-do list and your recent moods.",
    link: "https://emmyme.github.io/daily-planner/"
  },
  {
    id: 4,
    name: "Old Portfolio",
    image: "./img/portfolio.png",
    description: "My previous portfoliosite was made with Vue.js (Vue Router), HTML and CSS. It was designed in Figma and made responsive using CSS grid and flexbox.",
    link: "https://emmyme.github.io/portfolio/"
  },

]

export default projects;