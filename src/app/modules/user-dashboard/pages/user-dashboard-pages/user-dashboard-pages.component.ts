// user-dashboard-pages.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { MenuHeaderService } from 'src/app/shared/components/service/menu-header.service';

@Component({
  selector: 'app-user-dashboard-pages',
  templateUrl: './user-dashboard-pages.component.html',
  styleUrls: ['./user-dashboard-pages.component.css']
})
export class UserDashboardPagesComponent implements OnInit {

  nameComplete: string;
  rol: string;
  idPersona: number;
  modules: any[] = [];
  //----------------------------------------------------------------
  //rutitas de Administrador
  accesosAdminc: any[] = [
    {
      name: "ConfiguracionAd",
      url: "/home/confi",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  accesosAdminP: any[] = [
    {
      name: "ProyectosAd",
      url: "/home/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "JornadaAd",
      url: "/home/jornada/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "EquiposAd",
      url: "/home/equipo",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  accesosAdminI: any[] = [
    {
      name: "InformesAd",
      url: "/home/informes",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosAdminC: any[] = [
    {
      name: "ConveniosAd",
      url: "/home/convenios",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosAdminS: any[] = [
    {
      name: "SegurityAd",
      url: "/home/seguri",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  //----------------------------------------------------------------
  //rutitas de Coordinador PPP (Coordinador Académico):
  accesosAlumnoP: any[] = [
    {
      name: "ProyectosAn",
      url: "/home/programa-proyecto",
    }
  ]
  accesosAlumnoC: any[] = [
    {
      name: "ConveniosAn",
      url: ""
      
    }
  ]
  //----------------------------------------------------------------
  //rutitas de Secretaria

accesosLiderP: any[] = [
  {
    name: "ProyectoL",
    url: "/home/programa-proyecto",
    icon: 'fa-solid fa-bars-progress'

  }
]
accesosLiderI: any[] = [
  {
    name: "InformesL",
    url: "/home/informes",
    icon: 'fa-solid fa-bars-progress'

  }
]
  accesosLiderC: any[] = [
    {
      name: "ConfiguracionL",
      url: ""
    }
  ]


  accesosCordiC: any[] = [
    {
      name: "ConfiguracionAd",
      url: ""
    }
  ]
  accesosCordiP: any[] = [
    {
      name: "ProyectosAd",
      url: "/home/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "JornadaAd",
      url: "/home/jornada/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "EquiposAd",
      url: "/home/equipo",
      icon: 'fa-solid fa-bars-progress'
    }
  ]




  accesosCordiI: any[] = [
    {
      name: "InformesAd",
      url: "/home/informes",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosCordiCn: any[] = [
    {
      name: "ConveniosAd",
      url: ""
    }
  ]





  
    accesosEstudianteProcesos: any[] = [
      {
        name: "Procesos",
        url: "/home/procesosroutes",
        icon: 'fa-solid fa-bars-progress'
      },
      {
        name: "Convenios",
        url: "/home/conveniosconfiroutes",
        icon: 'fa-solid fa-bars-progress'
      },
      {
        name: "Informes",
        url: "/home/informeroutes",
        icon: 'fa-solid fa-bars-progress'
      },
      {
        name: "BandejaEntrada",
        url: "/home/bandejaentradaroutes",
        icon: 'fa-solid fa-bars-progress'
      },
      {
        name: "Configuracion",
        url: "/home/confiroutes",
        icon: 'fa-solid fa-bars-progress'
      }
    ]















  _authService = inject(AuthService)
  _menuHeader = inject(MenuHeaderService)
  _dashboardService = inject(DashboardService)
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.getName()
    this.getModules()
  }

  goToHome(): void {
    this.router.navigate(['/home/inicio']); 
  }


  goToProyecto(): void {
    this.router.navigate(['/home/proyecto']);
  }
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  getName() {
    this.nameComplete = sessionStorage.getItem('nombreCompleto');
    this.rol = sessionStorage.getItem('rol');
    this.idPersona = parseInt(sessionStorage.getItem('id'));
    console.log(this.rol)

  }

  getModules() {
    this._dashboardService.getModules(this.idPersona)
      .subscribe(data => {
        this.modules = data;
        console.log(this.modules)
      })
  }



  redirectToModule(moduleName: string): void {
    console.log(moduleName)
    let rol = sessionStorage.getItem("rol")
    switch (moduleName.toLowerCase()) {


      

      case 'estudiantem':
        if (rol == 'Estudiante') {
          this._menuHeader.sidebar.next(this.accesosEstudianteProcesos)
          this.router.navigate(['/home/procesosroutes']);
        } else if (rol =='Estudiante') {
          this._menuHeader.sidebar.next(this.accesosEstudianteProcesos)
          this.router.navigate(['/home/conveniosconfiroutes']);
        } else if (rol =='Estudiante') {
          this._menuHeader.sidebar.next(this.accesosEstudianteProcesos)
          this.router.navigate(['/home/informeroutes']);
        }
        else if (rol =='Estudiante') {
          this._menuHeader.sidebar.next(this.accesosEstudianteProcesos)
          this.router.navigate(['/home/bandejaentradaroutes']);
        }
        else if (rol =='Estudiante') {
          this._menuHeader.sidebar.next(this.accesosEstudianteProcesos)
          this.router.navigate(['/home/confiroutes']);
        }
        break;

   











      case 'AdministradorM':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminP)
          this.router.navigate(['/home/proyecto']);
        } else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiP)
          this.router.navigate(['/home/proyecto']);
        }
        break;


      case 'CoordinadorM':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminc);
          this.router.navigate(['/home/confi']);
        }  else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiCn)
          this.router.navigate(['/home/confi']);
        }
        break;


      case 'SecretariaM':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminC);
          this.router.navigate(['/home/convenios']);
        } else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiCn)
          this.router.navigate(['/home/convenios']);
        }
        break;



      case 'Supervisor_AcadémicoM':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminS);
          this.router.navigate(['/home/seguri']);
        }
        break;



  
        
      case 'ConfiguracionM':
       ; if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminI)
          this.router.navigate(['/home/informes'])
        } else if (rol == 'lider') {
          this._menuHeader.sidebar.next(this.accesosLiderI)
          this.router.navigate(['/home/informes']);
        }    
         else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiI)
          this.router.navigate(['/home/informes']);
        }       break;




        case 'SeguridadM':
          if (rol == 'Administrador') {
            this._menuHeader.sidebar.next(this.accesosAdminS);
            this.router.navigate(['/home/seguri']);
          }
          break;



      default:
        break;
    }























    
  }


  redirectToAuth(): void {
    this.router.navigate(['/auth']);
  }
}
