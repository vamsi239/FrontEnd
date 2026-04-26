import { AbstractControl } from "@angular/forms";
import { NgValidationError } from "@angular/forms/signals";

export function UserNameValidator(controls: AbstractControl){
    if(controls.value.toLowerCase() === 'username'){
        return {username : true};
    }
    return null;
}