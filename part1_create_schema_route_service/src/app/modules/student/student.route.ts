import  express  from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

// will call controller
router.post('/create-student', StudentController.createStudent )

router.get('/', StudentController.getAllstudents);

router.get('/:studentId', StudentController.getSinglestudent);

export const StudentRoutes = router;