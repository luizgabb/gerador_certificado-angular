import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { CertificadoComponent } from './pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: "",
    component: Certificados
  },
  {
    path: "certificados/novo",
    component: CertificadoForm
  },
  {
    path: "certificados/:id",
    component: CertificadoComponent
  }

];
