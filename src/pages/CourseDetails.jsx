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
    </>
  );
};

export default CourseDetails;
