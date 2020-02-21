import { Injectable } from '@angular/core';
import { Department } from 'src/app/shared/models/department.interface';
import { Outcome } from 'src/app/shared/models/outcome.enum';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departments: Department[] = [
    {
      name: 'Frontend',
      departmentText: 'Brukeropplevelse og digitale flater er en kul plass!',
      personSrc: 'Frontend.jpg',
      personText: 'Jeg liker frontend! "Martin eller noe, 31"',
      departmentOutcome: Outcome.Frontend
    },
    {
      name: 'Data Science',
      departmentText: 'Brukeropplevelse og digitale flater er en kul plass!',
      personSrc: 'DataScience.jpg',
      personText: 'Jeg liker frontend! "Martin eller noe, 31"',
      departmentOutcome: Outcome.DataScience
    },
    {
      name: 'Design and or UX',
      departmentText: 'Brukeropplevelse og digitale flater er en kul plass!',
      personSrc: 'DesignAndUx.jpg',
      personText: 'Jeg liker frontend! "Martin eller noe, 31"',
      departmentOutcome: Outcome.DesignAndUx
    },
    {
      name: 'Java',
      departmentText: 'Brukeropplevelse og digitale flater er en kul plass!',
      personSrc: 'Java.jpg',
      personText: 'Jeg liker frontend! "Martin eller noe, 31"',
      departmentOutcome: Outcome.Java
    },
    {
      name: 'Microsoft',
      departmentText: 'Brukeropplevelse og digitale flater er en kul plass!',
      personSrc: 'dotNet.jpg',
      personText: 'Jeg liker frontend! "Martin eller noe, 31"',
      departmentOutcome: Outcome.dotNet
    },
  ];

constructor() { }

}
