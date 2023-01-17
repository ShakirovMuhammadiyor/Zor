import Grid from '@mui/material/Grid';
import CourseBlock from './CourseBlock';

export default function CoursesGrid({ isTabActive, categoryList, subscribe, subscribedCoursesWihtinCategory }) {
    return (
        <Grid sx={{ display: (isTabActive ? "flex" : "none") }} container spacing={3}>
            {categoryList.courses.map((course) => {
                return (
                    <Grid item key={course.id} xs={4}>
                        <CourseBlock subscribe={subscribe} courseData={course} 
                            isUserSubscribed={typeof subscribedCoursesWihtinCategory == "undefined" ? undefined : (subscribedCoursesWihtinCategory[course.id] ? true : false)}  
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}