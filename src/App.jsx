import "./App.css";
import Header from "./components/Header";
import CourseList from "./pages/CourseList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CourseList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
