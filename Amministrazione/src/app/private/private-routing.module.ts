import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'activate-user',
    loadChildren: () => import('./activate-user/activate-user.module').then( m => m.ActivateUserPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'need',
    loadChildren: () => import('./need/need.module').then( m => m.NeedPageModule)
  },
  {
    path: 'service-management',
    loadChildren: () => import('./service-management/service-management.module').then( m => m.ServiceManagementPageModule)
  },
  {
    path: 'order-management',
    loadChildren: () => import('./order-management/order-management.module').then( m => m.OrderManagementPageModule)
  },
  {
    path: 'add-ente',
    loadChildren: () => import('./add-ente/add-ente.module').then( m => m.AddEntePageModule)
  },
  {
    path: 'add-impresa',
    loadChildren: () => import('./add-impresa/add-impresa.module').then( m => m.AddImpresaPageModule)
  },
  {
    path: 'activate-impresa',
    loadChildren: () => import('./activate-impresa/activate-impresa.module').then( m => m.ActivateImpresaPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
