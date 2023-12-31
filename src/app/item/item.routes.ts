import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ItemsComponent } from "./items.component";
import { AuthGuard } from "../auth-guard.service";


const listRoutes: Routes = [
  { path: "", component: ItemsComponent, canActivate: [AuthGuard] },
];
//export const listRouting: ModuleWithProviders = RouterModule.forChild(listRoutes);