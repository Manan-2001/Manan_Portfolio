import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { PGAVRentalSystemComponent } from './pgav-rental-system/pgav-rental-system.component';
import { CafeMochaManiaComponent } from './cafe-mocha-mania/cafe-mocha-mania.component';
import { HealthPlusComponent } from './health-plus/health-plus.component';
import { ExpenseAndExpenditureComponent } from './expense-and-expenditure/expense-and-expenditure.component';
import { EmployeeManagementRestAPIComponent } from './employee-management-rest-api/employee-management-rest-api.component';
import { SportActivityRecognizationComponent } from './sport-activity-recognization/sport-activity-recognization.component';
import { HireFormComponent } from './hire-form/hire-form.component';
import { BudgetBuddyComponent } from './budget-buddy/budget-buddy.component';
import { TutorologyLMSComponent } from './tutorology-lms/tutorology-lms.component';
import { TutorologyofficialComponent } from './tutorologyofficial/tutorologyofficial.component';

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
        path:"Budget_Buddy",
        component:BudgetBuddyComponent
    },
    {
        path:"Cafe_Mocha_Mania",
        component:CafeMochaManiaComponent
    },
    {
        path:"Tutorology_LMS",
        component:TutorologyLMSComponent
    },
    {
        path:"Tutorology_Official_Site",
        component:TutorologyofficialComponent
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
