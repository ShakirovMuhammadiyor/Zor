import AllCourses from '../../../composition/divisions/AllCourses/default';
import { useState, useEffect } from 'react';
import useSWR, { mutate }  from 'swr';
import useSWRImmutable from 'swr/immutable';

export default function All (props) {
    let { data: user } = useSWR('userdata');
    const [Indicator, Indicate] = useState({ state: "none" });

    let { data: subscribedCourses, error, isLoading } = useSWRImmutable(() => user.usertype != "guest" ? '/api/userSubscribedCourses' : undefined, async function () {
      // return await fetch('http://localhost:3000/api/UsersSubscribedCourses', {
      //   credentials: 'include'
      // }).then(res => res.json())
      return [{}];
    })

    function cIndicate (x) {
      Indicate({state: x});
      return;
    }

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/AllCoursesRevalidationCheck");
    // });

    const subscribeToCourse = async (action, courseId) => {
      if (user) {
        if (user.usertype == "guest") {
          cIndicate("not_signed");
        } else {
          if (action !== -1 && action !== 1) {
            cIndicate("bad_user");
            return;
          }

          mutate('/api/userSubscribedCourses', await fetch(`http://localhost:3000/api/subscribe/${courseId}?action=${action}`).then(res => res.json()), {
            populateCache: (newData, existingData) => {
              if (newData) {
                if (newData.status == 1) {
                  if (newData.action == 0) {
                    cIndicate("limit");
                  } else if (newData.action == 1) {
                    if (!existingData[newData.sid]) {
                      existingData[newData.sid] = {};
                    } 
                    existingData[newData.sid][newData.cid] = true;
                    cIndicate("done");
                    console.log(existingData);
                  } else if (newData.action == -1) {
                    console.log("Entered");
                    delete existingData[newData.sid][newData.cid];
                    cIndicate("done");
                  }
                } else {
                  if (newData.status == -11) {
                    cIndicate("bad_user");
                  } else {
                    cIndicate("error");
                  }
                }
              } else {
                cIndicate("error");
              }
              
              return existingData;
            },
            revalidate: false
          })
        }
      } else {
        cIndicate("error");
      }
    }
    
    return (
      <AllCourses data={props.data} actions={{ subscribeToCourse, Indicator, Indicate }} userdata={subscribedCourses} />
    )
}





export async function getStaticPaths() {
  return {
    paths: [{params: { lang: 'en' }}, {params: { lang: 'ru' }}, {params: { lang: 'uz' }}],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`http://localhost:3000/api/getAllCourses?lang=${params.lang}`, {
  //   credentials: 'include'
  // });
  // const data = await res.json();

  return {
    props: {
      data: [
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
    ]
    }
  }
}