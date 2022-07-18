import { LawyerModel } from "./lawyer-model";
import { PersonCondition, PersonLawyer } from "./person-lawyer";

export interface CreatePersonLawyerCommand {
personLawyers:PersonLawyer[]
}
