import { PersonLawyer } from "./person-lawyer";

export interface User{
userName:String;
password:String;
email:String

 personId :number
 status  :number

 personLawyers:PersonLawyer[]

}
