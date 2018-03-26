import { Tag } from "./tag.model";

export class User {
    _id?: String;
    email?:String;
    password?:String;
    tokens?: tokenObject[];
    profile?:{
        fullName?:String;
        descripton?:String;
        intrests?: Tag[];
        achievements?:String;
        expertIn?: Tag[];
        rating?:{
            rating?:number;
            count?:number;
        }
    }
    role?:String[];
}

export interface tokenObject{
    access?:String;
    token?:String;
    _id?:String;
}