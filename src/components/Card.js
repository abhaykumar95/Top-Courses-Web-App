import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const { course, likedCourses, setLikedCourses } = props;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // Course already liked, remove it
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // Course not liked yet, add it
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.title} // ✅ alt attribute added
          className="w-full h-auto"
        />

        <div className="flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] absolute right-2 bottom-1">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? `${course.description.substr(0, 100)}...`
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
