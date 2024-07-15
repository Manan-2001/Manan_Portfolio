import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { PGAVRentalSystemComponent } from './pgav-rental-system/pgav-rental-system.component';

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
    
];
