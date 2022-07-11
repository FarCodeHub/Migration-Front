
import { Injectable } from '@angular/core';
import { CreateUserCommand } from '../models/create-user-command';
import { ServiceResult } from '../models/service-result';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    controllerName: String = 'User';
    constructor(private dataService: BaseService) {}

    add(model: CreateUserCommand) {
        return this.dataService.postJsonData<ServiceResult<CreateUserCommand>>(
            model,
            this.controllerName,
            'Add'
        );
    }

    getUser(user:any): Observable<ServiceResult<User>> {
      return this.dataService
          .getDataByParam<ServiceResult<User>>(
             user,
              this.controllerName,
              'GetUser'
          )
          .pipe(map((result) => result));
  }

}
