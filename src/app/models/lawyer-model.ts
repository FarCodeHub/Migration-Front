import { LawyerCondition } from "./condition";

export interface LawyerModel {
    id: number,
    fullName: string,
    code: string,
    conditions: LawyerCondition[]
}
