
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatePersonCommand } from '../models/create-person-command';
import { CreateUserCommand } from '../models/create-user-command';
import { LawyerModel } from '../models/lawyer-model';
import { PersonModel } from '../models/person-model';
import { ServiceResult } from '../models/service-result';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root',
})
export class LawyerService {
    controllerName: String = 'Lawyer';
    constructor(private dataService: BaseService) {}

    // add(model: CreatePersonCommand) {
    //     return this.dataService.postJsonData<ServiceResult<CreatePersonCommand>>(
    //         model,
    //         this.controllerName,
    //         'Add'
    //     );
    // }


    getLawyers() {
      return this.dataService.getData<LawyerModel[]>(
          this.controllerName,
          'GetLawyers'
      ) .pipe(map((result) => result));
  }


  isRejected(id:number): Observable<ServiceResult<boolean>> {
    return this.dataService
        .deleteData<ServiceResult<boolean>>(
           id,
            this.controllerName,
            'Delete'
        )
        .pipe(map((result) => result));
}

}
