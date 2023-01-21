import AllCourses from '../../../../composition/divisions/CoursePage/index';
import { useRouter } from 'next/router';
import useSWR, { mutate }  from 'swr';
import useSWRImmutable from 'swr/immutable';

function checkAndSend (x, y) {
    if (x) {
        return x[y];
    } else {
        return undefined;
    }
}


export default function CoursePage (props) {
    let router = useRouter();
    let { data: user } = useSWR('userdata');

    let { data: userCourseInfo, error, isLoading } = useSWRImmutable(() => (user.usertype != "guest" && !router.isFallback) ? '/api/getUsersCourseInfo' : undefined, async function () {
        // return await fetch('http://localhost:3000/api/getUsersCourseInfo', {
        //   credentials: 'include'
        // }).then(res => res.json())
        return {message: "zor", subscribed: true };
    });

    let status = 0;

    if (router.isFallback) {
        status = 0; /// Full page loading
    } else {
        if (typeof user == "undefined") {
            status = 2;
        } else {
            if (user.usertype == "guest") {
                status = 1; /// Basic guest render userCourseInfo = {};
            } else {
                if (typeof userCourseInfo == "undefined") {
                    status = 2; /// Loading user-specific content
                } else {
                    status = 3; //// Full page render
                }
            }
        }
    }

    return (
            <AllCourses status={status} actions={{}} pagedata={checkAndSend(props, "data")} userdata={userCourseInfo} />
    );
}


export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    // const res = await fetch(`http://localhost:3000/api/getCourse/${params.id}`, {
    //     credentials: 'include'
    // });
    // const data = await res.json();

    return {
        props: {
            data: {
                id: params.id,
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
              }
        }
    }
}