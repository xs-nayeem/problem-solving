
/**
 * Grading Students problem solution
 * Status: Accepted.
 */


 function gradingStudents(grades) {
    let arr = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] >= 38) {
        let diff = (Math.ceil(grades[i] / 5) * 5) - grades[i];
        if (diff < 3 && diff > 0 ) {
          if (diff === 2) {
            arr.push(grades[i] + 2);
          } else if (diff == 1) {
            arr.push(grades[i] + 1);
          } 
        } else {
          arr.push(grades[i])
        } 
      } else {
        arr.push(grades[i]);
      }
    }
    return arr;
  }
  let t = gradingStudents([
    36, 6, 98, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 98, 50,
    41, 5, 3, 28, 34, 0,
  ]);
  console.log(t);
  