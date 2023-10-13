import { v4 as uuidv4 } from "uuid";

export const colors = ["#00ff0d", "#e45c1c", "#1cace4", "yellow"];

export const NotesData = [
  {
    id: uuidv4(),
    content: "Learn TypeScript and NextJS",
    date: new Date(),
    color: "#e45c1c",
  },
  {
    id: uuidv4(),
    content: "Learn ASP.NET core MVC and ASP.NET core Web API",
    date: new Date(),
    color: "yellow",
  },
  {
    id: uuidv4(),
    content: "Learn Csharp: Entity Framework and Build project react js",
    date: new Date(),
    color: "#1cace4",
  },
  {
    id: uuidv4(),
    content: "Deadline homework English EOP",
    date: new Date(),
    color: "#00ff0d",
  },
];
