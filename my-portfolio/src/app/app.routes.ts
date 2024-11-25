import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { ProjectsPageComponent } from './features/project/projects-page/projects-page.component';
import { TimelinePageComponent } from './features/timeline/timeline-page/timeline-page.component';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { AboutmePageComponent } from './features/about/aboutme-page/aboutme-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    { path: 'timeline', component: TimelinePageComponent },
    { path: 'about-me', component: AboutmePageComponent },
    { path: '**', redirectTo: 'home' } // Redirigir a Home para rutas no válidas
];

