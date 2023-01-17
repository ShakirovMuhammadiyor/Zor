import { useState } from 'react';
import dynamic from 'next/dynamic';

import getLayout from '../../getLayout';
import HeadingAndSearchPanel from './fragments/HeadingAndSearchPanel';
import Container from '@mui/material/Container';
import CoursesGrid from './fragments/CoursesGrid';
const SubscribeSnackbar = dynamic(() => import('./fragments/SubscribeSnackbar'));

export default function AllCourses({ data, actions, userdata: subscribedCourses }) {
  const [subjectSelected, selectSubject] = useState(0);

  let didUserdataArrived = typeof subscribedCourses == "undefined";

  return getLayout(
        <>
          <HeadingAndSearchPanel subjects={data.map((x) => x.subject)} subjectSelected={subjectSelected} subjectTabClick={(e, newValue) => {selectSubject(newValue)}} />
          <Container maxWidth="xl" sx={{ paddingTop: 6 }}>
            {data.map((category, index) =>
              <CoursesGrid categoryList={category} 
                subscribedCoursesWihtinCategory={didUserdataArrived ? undefined : (subscribedCourses[category.sid] ? subscribedCourses[category.sid] : {})} 
                isTabActive={subjectSelected == index} 
                subscribe={actions.subscribeToCourse}
              />
            )}
          </Container>
          {(actions.Indicator.state != "none") && <SubscribeSnackbar state={actions.Indicator.state} closeSnackbar={(e, reason) => {reason == "clickaway" ? 1 : actions.Indicate({state: "none"})}} />}
        </>
  , "full");
}
