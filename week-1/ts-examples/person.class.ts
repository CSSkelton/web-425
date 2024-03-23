/**
 * title: person.class.ts
 * purpose: Person class, requires first name and last name variables
 * date: 03.23.2024
 * author: Cody Skelton
 * Code derived from Professor Krasso's YouTube video at https://www.youtube.com/watch?v=psk_H7q82Nw&t=4s&ab_channel=RichardKrasso and WEB 425 Exercise 1.4 program requirements
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }
}

let myName = new Person("Cody", "Skelton");
console.log(`My name is: ${myName.firstName} ${myName.lastName}`);