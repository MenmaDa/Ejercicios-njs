import { Routes } from '@angular/router';
import { AddPersonaComponent } from './componentes/Persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './componentes/Persona/edit-persona/edit-persona.component';
import { DeletePersonaComponent } from './componentes/Persona/delete-persona/delete-persona.component';
import { ListPesonaComponent } from './componentes/Persona/list-pesona/list-pesona.component';

export const routes: Routes = [
    {path:"add", component: AddPersonaComponent},
    {path:"edit/:id", component: EditPersonaComponent},
    {path:"delete/:id", component: DeletePersonaComponent},
    {path:"", component: ListPesonaComponent},
    {path:"**", redirectTo:"", pathMatch:'full'}
];