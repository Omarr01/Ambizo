import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import course from "../models/course.model.js";
import courseRequest from "../models/courseRequest.model.js";

const router = express.Router();

router.get("/checkIfAlreadyRequestedCourse", verifyJWT, async (req, res) => {
    try{
        if(req.User.Type !== 'corporateTrainee') {
            return handleError(res, "Invalid Access")
        }

        const corporateTraineeUsername = req.User.Username;
        const courseId = req.query.courseId;

        const alreadyRequested = await courseRequest.findOne({CorporateTraineeUsername: corporateTraineeUsername, CourseId: courseId})

        res.json({
            isRequested: alreadyRequested
        })
    }
    catch(error){
        handleError(res,error);
    }
});

router.post("/requestCourse", verifyJWT, async (req, res) => {
    try{
        if(req.User.Type !== 'corporateTrainee') {
            return handleError(res, "Invalid Access")
        }

        const corporateTraineeUsername = req.User.Username;
        const courseId = req.query.courseId;
        
        const newCourseRequest = new courseRequest({
            CorporateTraineeUsername: corporateTraineeUsername,
            CourseId: courseId
        });

        await newCourseRequest.save();
        res.status(201).json(newCourseRequest);
    }
    catch(error){
        handleError(res,error);
    }
});

router.put("/cancelRequest", verifyJWT, async (req, res) => {
    try{
        if(req.User.Type !== 'corporateTrainee') {
            return handleError(res, "Invalid Access")
        }

        const corporateTraineeUsername = req.User.Username;
        const courseId = req.query.courseId;

        await courseRequest.findOneAndDelete({CorporateTraineeUsername: corporateTraineeUsername, CourseId: courseId});

        res.json({message: "Request Removed Successfully"});
    }
    catch(error){
        handleError(res,error);
    }
});

function handleError(res, err) {
    return res.status(400).send(err);
}

export default router;