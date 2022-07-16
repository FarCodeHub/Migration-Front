import { Condition } from "./condition";

export interface LawyerModel {
  id:number,
  fullName:string,
  code:string,
  conditions:Condition[]
}
