
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatePersonCommand } from '../models/create-person-command';
import { CreatePersonLawyerCommand } from '../models/create-person-lawyer-command';
import { CreateUserCommand } from '../models/create-user-command';
import { PersonModel } from '../models/person-model';
import { ServiceResult } from '../models/service-result';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root',
})
export class PersonLawyerService {
    controllerName: String = 'PersonLawyer';
    constructor(private dataService: BaseService) {}

    add(model: CreatePersonLawyerCommand) {
        return this.dataService.postJsonData<ServiceResult<CreatePersonLawyerCommand>>(
            model,
            this.controllerName,
            'Add'
        );
    }
}
