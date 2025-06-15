import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomepageComponent } from './main-layout/homepage/homepage.component';
import { GrammarCheckerPageComponent } from './main-layout/grammar-checker-page/grammar-checker-page.component';
import { CorruptionPageComponent } from './main-layout/corruption-page/corruption-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomepageComponent
            }, 
            {
                path: 'grammar-checker', 
                component: GrammarCheckerPageComponent
            }, 
            {
                path: 'corruption',
                component: CorruptionPageComponent
            }
        ]
    }
];
