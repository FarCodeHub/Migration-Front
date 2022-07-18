import { LawyerCondition } from './condition';
import { LawyerModel } from "./lawyer-model";

export interface PersonLawyer {
    personId: number;
    lawyer: LawyerModel;
    lawyerId: number;
    fullName:string;
    personConditions: PersonCondition[]
    lawyerConditionModels:LawyerCondition[]
}



export interface PersonCondition {
    personId: number;
    lawyerConditionId: number;
    title: string;
    isSelected: boolean;
}

