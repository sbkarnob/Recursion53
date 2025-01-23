const courses = {
  A: [
    { name: "Data Structures and Algorithms II", code: "CSE 207", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Data Structures and Algorithms II Lab", code: "CSE 208", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design", code: "CSE 209", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design Lab", code: "CSE 210", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems", code: "CSE 211", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems Lab", code: "CSE 212", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Probability and Statistics", code: "MTH 203", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Engineering Economics", code: "ECN (CSE) 201", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
  ],

  B: [
    { name: "Data Structures and Algorithms II", code: "CSE 207", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Data Structures and Algorithms II Lab", code: "CSE 208", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design", code: "CSE 209", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design Lab", code: "CSE 210", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems", code: "CSE 211", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems Lab", code: "CSE 212", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Probability and Statistics", code: "MTH 203", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Engineering Economics", code: "ECN (CSE) 201", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
  ],

  C: [
    { name: "Data Structures and Algorithms II", code: "CSE 207", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Data Structures and Algorithms II Lab", code: "CSE 208", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design", code: "CSE 209", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design Lab", code: "CSE 210", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems", code: "CSE 211", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems Lab", code: "CSE 212", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Probability and Statistics", code: "MTH 203", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Engineering Economics", code: "ECN (CSE) 201", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
  ],

  D: [
    { name: "Data Structures and Algorithms II", code: "CSE 207", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Data Structures and Algorithms II Lab", code: "CSE 208", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design", code: "CSE 209", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Digital Logic Design Lab", code: "CSE 210", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems", code: "CSE 211", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Database Systems Lab", code: "CSE 212", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Probability and Statistics", code: "MTH 203", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
    { name: "Engineering Economics", code: "ECN (CSE) 201", teacher: "Coming Soon", mid: "Coming Soon", final: "Coming Soon", link: "https://google.com/" },
  ],
  
   

  };
  
  function showSection(section) {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";
  
    if (courses[section]) {
      let tableHTML = `
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      `;
  
      courses[section].forEach((course, index) => {
        tableHTML += `
          <tr>
            <td>${course.name}</td>
            <td>${course.code}</td>
            <td>${course.teacher}</td>
            <td><button onclick="viewDetails('${section}', ${index})">View Details</button></td>
          </tr>
        `;
      });
  
      tableHTML += `
          </tbody>
        </table>
      `;
  
      container.innerHTML = tableHTML;
    } else {
      container.innerHTML = "<p>No courses available for this section.</p>";
    }
  }
  
  function viewDetails(section, index) {
    const course = courses[section][index];
  
    
    const detailsPage = `
      <html>
      <head>
        <title>${course.name} - Details</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <h1>Course Details</h1>
        <table>
          <tr>
            <th>Course Name</th>
            <td>${course.name}</td>
          </tr>
          <tr>
            <th>Course Code</th>
            <td>${course.code}</td>
          </tr>
          <tr>
            <th>Instructor</th>
            <td>${course.teacher}</td>
          </tr>
          <tr>
            <th>Midterm Syllabus</th>
            <td>${course.mid}</td>
          </tr>
          <tr>
            <th>Final Syllabus</th>
            <td>${course.final}</td>
          </tr>
          <tr>
            <th>Resource Link</th>
            <td><a href="${course.link}" target="_blank">Click here</a></td>
          </tr>
        </table>
      </body>
      </html>
    `;
  
    const newTab = window.open();
    newTab.document.write(detailsPage);
    newTab.document.close();
  }

  

  // Ensure the skip link works properly
document.addEventListener("DOMContentLoaded", function () {
  const skipLink = document.querySelector(".skip-to-content");

  if (skipLink) {
    skipLink.addEventListener("click", function (event) {
      event.preventDefault();

      const mainContent = document.getElementById("main-content");

      if (mainContent) {
        mainContent.setAttribute("tabindex", "-1"); // Make it focusable
        mainContent.focus();
        mainContent.removeAttribute("tabindex"); // Remove tabindex after focus
      }
    });
  }
});