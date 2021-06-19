import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IconsPageComponent } from './components';
import { ChartsPageComponent, MapPageComponent } from './containers';
import { ProjectComponent } from './components/project/project.component';
import { RegionPageComponent } from './components/Region-page/Region-page.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'region',
    component: RegionPageComponent
  },
  {
    path: 'icons',
    component: IconsPageComponent
  },
  {
    path: 'charts',
    component: ChartsPageComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UiElementsRoutingModule {
}
