// service e all business logic thakbe
import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async(student: Student) =>{
    const result = await StudentModel.create(student);
    return result;
}

const getAllstudentFromDB = async()=>{
    const result = await StudentModel.find();
    return result;
}

const getSinglestudentFromDB = async(id: string)=>{
    const result = await StudentModel.findOne({id}); // id ta student id
    return result;
}


export const StudentService = {
    createStudentIntoDB,
    getAllstudentFromDB,
    getSinglestudentFromDB,
}
