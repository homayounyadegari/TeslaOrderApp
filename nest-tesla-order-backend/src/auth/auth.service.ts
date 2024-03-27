/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

/* eslint-disable prettier/prettier */
@Injectable({})

export class AuthService{
    signin(){
        return 'i am signed in';
    };

    signup(){
        return 'i am signed up';
    };
}