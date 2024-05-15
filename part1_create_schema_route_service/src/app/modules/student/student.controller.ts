import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student; // student data zeta student name e zabe
    // will call service function to send this data
    const result = await StudentService.createStudentIntoDB(student);

    // send response with a message
    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSinglestudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSinglestudentFromDB(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: "student is get successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllstudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllstudentFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: "students are getting successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllstudents,
  getSinglestudent,
};
