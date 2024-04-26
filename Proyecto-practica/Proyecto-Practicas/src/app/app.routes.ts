
import { Routes } from '@angular/router';
import { AddPersonaComponent } from './componentes/persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './componentes/persona/edit-persona/edit-persona.component';
import { DeletePersonaComponent } from './componentes/persona/delete-persona/delete-persona.component';
import { ListaPersonaComponent } from './componentes/persona/lista-persona/lista-persona.component';

export const routes: Routes = [
    {path:"add", component: AddPersonaComponent},
    {path:"edit/:id", component: EditPersonaComponent},
    {path:"delete/:id", component: DeletePersonaComponent},
    {path:"", component: ListaPersonaComponent},
    {path:"**", redirectTo:"", pathMatch:"full"}
];
