
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Condition } from '../models/condition';
import { CreatePersonCommand } from '../models/create-person-command';
import { CreateUserCommand } from '../models/create-user-command';
import { PersonModel } from '../models/person-model';
import { ServiceResult } from '../models/service-result';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root',
})
export class ConditionService {
    controllerName: String = 'Condition';
    constructor(private dataService: BaseService) {}

    getConditionsByLawyerId(id:number) {
      return this.dataService.getDataById<Condition[]>(
        id,
          this.controllerName,
          'GetConditionsByLawyerId'
      ) .pipe(map((result) => result));
  }



}
