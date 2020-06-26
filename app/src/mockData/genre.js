import hiphop from "./hiphop.jpg";
import workout from "./workout.jpg";
import rock from "./rock.jpg";
import chill from "./chill.jpg";

let id = 0;
const incrementID = () => id++;

const genreData = [
  {
    genre: "Hip Hop",
    image: hiphop,
    id: incrementID(),
  },
  {
    genre: "Workout",
    image: workout,
    id: incrementID(),
  },
  {
    genre: "Rock",
    image: rock,
    id: incrementID(),
  },
  {
    genre: "Chill",
    image: chill,
    id: incrementID(),
  },
];

export default genreData;
