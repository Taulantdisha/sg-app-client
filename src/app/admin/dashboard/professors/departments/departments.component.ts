import {Component, ViewEncapsulation, OnInit, Output , EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfessorsService} from "../../../../common/services/professors.service";
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'professor-departments',
    encapsulation: ViewEncapsulation.None,
    directives: [DROPDOWN_DIRECTIVES],
    template: require('./departments.template.html'),
})
export class AdminProfessorDepartments implements OnInit{
    departments:Array<String>;
    @Output() filteredDept = new EventEmitter<string>();

    
    
    constructor(private _profService:ProfessorsService, private _route:ActivatedRoute) {
       
    }


    ngOnInit() {
        this._profService.departments().then(res => { this.departments = res;})
    }

    selectItem(department:string) {
        this.filteredDept.emit(department);

    }






}
