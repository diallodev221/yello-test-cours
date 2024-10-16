import { coursesData } from "../data/cours";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const CourseDetails = () => {
  const { id } = useParams();

  const cours = coursesData.find((cours) => cours.id === parseInt(id));

  if (!cours) {
    return <div>Pas encore disponible! </div>;
  }

  return (
    <>
      <Header />
      {/* Details du cours */}
      <section className="course-details">
        <div className="container">
          <div className="course-banner">
            <img src={cours.image} alt="Course Image" className="course-img" />
            <div className="course-info">
              <h1>{cours.title}</h1>
              <span className="badge beginner">{cours.level}</span>
              <p className="course-description">{cours.description}</p>
              <div className="course-meta">
                <span>
                  <strong>Durée:</strong> 1 mois
                </span>
                <span>
                  <strong>Niveau:</strong> {cours.level}
                </span>
              </div>
              <div className="btn">
                <Link to="/" className="enroll-btn">
                  Voir les cours
                </Link>
                <button className="enroll-btn">Enroller maintenant</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-curriculum">
        <div className="container">
          <h2>Course Curriculum</h2>
          <ul>
            <li>
              <strong>Module 1:</strong> Introduction à JavaScript
            </li>
            <li>
              <strong>Module 2:</strong> Types de données et variables
            </li>
            <li>
              <strong>Module 3:</strong> Fonctions et portée
            </li>
            <li>
              <strong>Module 4:</strong> Manipulation du DOM
            </li>
            <li>
              <strong>Module 5:</strong> Fonctionnalités ES6
            </li>
            <li>
              <strong>Module 6:</strong> JavaScript asynchrone
            </li>
            <li>
              <strong>Module 7:</strong> JavaScript dans le navigateur
            </li>
            <li>
              <strong>Module 8:</strong> Concepts avancés
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
