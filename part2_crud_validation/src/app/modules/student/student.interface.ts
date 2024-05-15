// from mongoose docs ts part

import { Model } from "mongoose";

// type or interphase 2tai use kora zay
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
  isDeleted: boolean;
};


//** custom instance method diye dekhbo kono user database e ache kina
// step:  1. create type/interface. (StudentMethods)
export type StudentMethods ={
  isUserExists(id:string) : Promise<Student | null>; // type Student pura tai return kore dicche. typescript er function type
}
// step 2. create model (StudentModel)
export type StudentInstanceModel = Model<Student, 
Record<string, never>, StudentMethods>;
// step 3. model e update (student.model e kaj)
// step 4. implimentation (student.model e kaj)