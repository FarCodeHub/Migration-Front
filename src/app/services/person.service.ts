
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatePersonCommand } from '../models/create-person-command';
import { CreateUserCommand } from '../models/create-user-command';
import { ServiceResult } from '../models/service-result';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root',
})
export class PersonService {
    controllerName: String = 'Person';
    constructor(private dataService: BaseService) {}

    add(model: CreatePersonCommand) {
        return this.dataService.postJsonData<ServiceResult<CreatePersonCommand>>(
            model,
            this.controllerName,
            'Add'
        );
    }



}
