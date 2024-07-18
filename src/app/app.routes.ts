import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { PGAVRentalSystemComponent } from './pgav-rental-system/pgav-rental-system.component';
import { CafeMochaManiaComponent } from './cafe-mocha-mania/cafe-mocha-mania.component';
import { HealthPlusComponent } from './health-plus/health-plus.component';
import { ExpenseAndExpenditureComponent } from './expense-and-expenditure/expense-and-expenditure.component';
import { EmployeeManagementRestAPIComponent } from './employee-management-rest-api/employee-management-rest-api.component';
import { SportActivityRecognizationComponent } from './sport-activity-recognization/sport-activity-recognization.component';
import { HireFormComponent } from './hire-form/hire-form.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        component:ProjectComponent
    },
    {
        path:"PGAV_Project",
        component:PGAVRentalSystemComponent
    },
    {
        path:"Cafe_Mocha_Mania",
        component:CafeMochaManiaComponent
    },
    {
        path:"Health_Plus_App",
        component:HealthPlusComponent
    },
    {
        path:"Expense_Expenditure",
        component:ExpenseAndExpenditureComponent
    },
    {
        path:"Employee_Management_Restfull_API",
        component:EmployeeManagementRestAPIComponent
    },
    {
        path:"Sports_Activity_Recognition_System",
        component:SportActivityRecognizationComponent
    }
    
];
