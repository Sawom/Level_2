// service e all business logic thakbe
import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async(studentData: Student) =>{
    // const result = await StudentModel.create(studentData); // build in static method
    // instance use korle uporer line ta katte hoy cz oita static method

    // step 4. implimentation update
    const student = new StudentModel(studentData); // create an  Instance 
    if(await student.isUserExists(studentData.id)){
        throw new Error('user has already exists');
    }
    const result = await student.save(); // built in instance method
    return result;
}

const getAllstudentFromDB = async()=>{
    const result = await StudentModel.find();
    return result;
}

const getSinglestudentFromDB = async(id: string)=>{
    // const result = await StudentModel.findOne({id}); // id ta student id
    // aggregate o caile kora zay
    const result1 = await StudentModel.aggregate([{$match: {id:id}}])
    return result1;
}

// delete
const deleteStudentFromDB = async(id: string)=>{
    const result = await StudentModel.updateOne({id} ,
        {isDeleted: true}); // id ta student id
    return result;
}

export const StudentService = {
    createStudentIntoDB,
    getAllstudentFromDB,
    getSinglestudentFromDB,
    deleteStudentFromDB,
}
