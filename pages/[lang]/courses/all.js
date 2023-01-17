import AllCourses from '../../../composition/divisions/AllCourses/default';
import { useState } from 'react';
import useSWR from 'swr';

export async function getStaticPaths() {
    return {
      paths: [{params: { lang: 'en' }}, {params: { lang: 'ru' }}, {params: { lang: 'uz' }}],
      fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.jsonbin.io/v3/b/63c6801edfc68e59d584b4a6`);
    const data = await res.json();

    return {
      props: {
        lang: params.lang,
        data: data
      }
    }
}

const fetcher = () => fetch('http://localhost:4000/courses/getUserData').then(res => res.json())

export default function All (props) {
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/AllCoursesRevalidationCheck");
    // });

    const { data, error, isLoading } = useSWR(`userdata`, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    });

    if (data) {
      console.log(data);
    }

    const [Indicator, Indicate] = useState({ state: "none" });

    const subscribeToCourse = async (courseId) => {
      const res = await fetch("http://localhost:4000/courses/subscribe/212");
      const data = await res.json();
      Indicate(data.message);
    }
    
    return (
      <AllCourses data={props.data} actions={{ subscribeToCourse, Indicator, Indicate }} userdata={{'1': {'212': true }}} />
    )
}