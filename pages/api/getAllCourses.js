export default async function handler(req, res) {
    res.json([
        {
          sid: 0,
          subject: "Algebra",
          courses: [{
            id: 0,
            name: "College Algebra",
            picture: "theme.png", //// folder structure
            unitsCount: 1,
            EstimatedTime: "49 min",
            Hashtags: ["Algebra", "Fundamental", "Course"],
            URL: "/en/courses/course/0",
            Contributors: [{uid: 0, name: "Ruslan", picture: "user.jpg"}, {uid: 1, name: "Sarvarbek", picture: "user.jpg"}] 
          }]
        }
    ])
}