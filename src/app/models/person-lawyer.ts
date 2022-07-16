import { LawyerCondition } from './condition';
import { LawyerModel } from "./lawyer-model";

export interface PersonLawyer {
    personId: number;
    lawyer: LawyerModel;
    conditions: PersonCondition[]
}

export interface PersonCondition {
    personId: number;
    lawyerConditionId: number;
    title: string;
    isSelected: boolean;
}

