console.log(`Step3: Defining actions...`);

export function createCourse(course) {
  return  { type: "CREATE_COURSE", course };
}

export function deleteCourse(courseTitle) {
  return { type: "DELETE_COURSE", payload: courseTitle };
}
