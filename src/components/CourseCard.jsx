import { Link } from "react-router-dom";

const CourseCard = ({ id, title, description, niveau, image }) => {
  // change la couleur du badge en fonction du niveau
  const getBadgeColor = (niveau) => {
    switch (niveau) {
      case "Débutant":
        return "beginner";
      case "Intermédiaire":
        return "intermediate";
      case "Avancé":
        return "advanced";
      default:
        return "";
    }
  };

  return (
    <article
      className="course-card"
      aria-label={`Cours: ${title}, Niveau: ${niveau}`}
    >
      <span className={`badge ${getBadgeColor(niveau)}`}>{niveau}</span>
      <img src={image} alt={`Cours ${title}`} className="course-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      
      <Link
        className="more-info"
        aria-label={`En savoir plus sur le cours ${title}`}
        to={`/cours/${id}/details`}
      >
        En savoir plus
      </Link>
    </article>
  );
};

export default CourseCard;
