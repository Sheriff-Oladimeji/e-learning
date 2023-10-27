import Courses from "../../components/courses/Courses";
import { allCourses } from "../../data/courses/courses"
import { useState } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    const filteredCourses = allCourses.filter((course) =>
      course.title.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredCourses);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border  border-gray-500"
      />

     <Courses data={searchResults}/>
    </div>
  );
}

export default Search