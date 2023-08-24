


const CourseButton = ({onClick , value}) => {
  return (
    <button onClick={onClick} className="py-2 px-3 border border-[#8B919A] text-center">
      {value}
    </button>
  );
}

export default CourseButton