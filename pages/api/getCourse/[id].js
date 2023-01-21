export default async function handler(req, res) {
    let { id } = req.query;
    res.json({
        id: id,
        name: "Introduction to Statistcs",
        Stats: {
          points: 1200,
          skills: 60
        },
        BreadCrumbs: [
          {
            Name: "Math",
            URL: {
              type: "subject",
              id: 0
            }
          }
        ],
        Contributors: [
          {
            Name: "Sarvarbek Xabbibidinov",
            Role: "Main scenario",
            URL: {
              type: "user",
              id: 0
            }
          },
          {
            Name: "Aleksandrov Ruslan",
            Role: "Sound engineer",
            URL: {
              type: "user",
              id: 1
            }
          }
        ],
        Description: "Get a huge of what it is like to analyze a big amount of data. In this course you will learn so many things that you have never knew before. This course is designed for beginners with no prior knowledge of computers",
        Languages: "EN/RU/UZ",
        LastUpdated: "27 February 2022",
        Units: [
          {
            Name: "Linear creativity and equvivalents",
            Stats: {
              points: 300,
              skills: 7
            },
            URL: {
              type: "unit",
              id: 2
            },
            Picture: "theme1.png",
            Topics: [
              {
                Name: "Introduction to regressiona",
                URL: {
                  type: "topic",
                  id: 3,
                  adata: {position: 2}
                }
              }
            ]
          }
        ],
        Preresquites: [
          {
            Name: "Algebra 2",
            Picture: "theme2.png",
            Hashtags: ["Algebra", "Fundamental", "Analytics"],
            URL: {
              type: "course",
              id: 216
            }
          }
        ]
      });
}