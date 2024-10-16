import { coursesData } from "../data/cours";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  return (
    <section
      className="course-list"
      id="courses"
      aria-labelledby="course-list-heading"
    >
      <h1>Nos Cours</h1>
      <div className="courses-container">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            niveau={course.level}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
