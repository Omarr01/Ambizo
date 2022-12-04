import http from "../http-common"
import httpPost from "../http-common-post";

import countryToCurrency  from 'country-to-currency';

class CourseService {
    getAllCourses(){
        let currencyCode = countryToCurrency[ localStorage.getItem("countryCode") ] || "USD";
        return http.get("/guest/getCourses/?currencyCode=" + currencyCode);
    }

    getFilteredCourses(filterURL) {
        let currencyCode = countryToCurrency[ localStorage.getItem("countryCode") ] || "USD";
        return http.get("guest/getCourses/" + filterURL + "&currencyCode=" + currencyCode);
    }

    getCourse(courseId, traineeUsername) {
        let currencyCode = countryToCurrency[ localStorage.getItem("countryCode") ] || "USD";
        return httpPost.post("/guest/getCourse/" + courseId + "?currencyCode=" + currencyCode, {TraineeUsername: traineeUsername});
    }

    searchCourses(searchTerm){
        let currencyCode = countryToCurrency[ localStorage.getItem("countryCode") ] || "USD";
        return http.get("/guest/searchCourses/" + searchTerm + "?currencyCode=" + currencyCode);
    }

    getExercise(courseId, exerciseNum){
        return http.get("/trainee/getExercise?courseId=" + courseId +"&exerciseNum=" + exerciseNum);
    }

    getSubtitleName(courseId, subtitleNum){
        return http.get("/guest/getSubtitleName?courseId=" + courseId +"&subtitleNum=" + subtitleNum);
    }
}

export default new CourseService();