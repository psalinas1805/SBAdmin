import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router,ActivatedRoute, Params } from '@angular/router';
import { routerTransition } from '../../router.animations';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detailacuario',
  templateUrl: './detailacuario.component.html',
  styleUrls: ['./detailacuario.component.scss'],
  animations: [routerTransition()]
})
export class DetailacuarioComponent implements OnInit {


  result:boolean
  acuarios
  idacuario
  parametros
  configAcuario
  edit:boolean = true;
  forma: FormGroup;
  valueY
  valueN
  user_id;
  submit: boolean = false;
  
  luzdiamin =  {hour: 10, minute: 30};
  luzdiamax =  {hour: 15, minute: 18};
  
  configInit = {
    user_id: 0,
    idacuario: 0,
    itempmin: 0,
    itempmax: 0,
    iphmin: 0,
    iphmax: 0,
    iluzdiamin: {
      hour:0,
      minute:0
    },
    iluzdiamax: {
      hour:0,
      minute:0
    },
    iluznochemin: {
      hour:0,
      minute:0
    },
    iluznochemax: {
      hour:0,
      minute:0
    },
    iairemin: {
      hour:0,
      minute:0
    },
    iairemax: {
      hour:0,
      minute:0
    },
    ifiltromin: {
      hour:0,
      minute:0
    },
    ifiltromax: {
      hour:0,
      minute:0
    },
    inivelagua: {
      hour:0,
      minute:0
    }
  };
    constructor(private usuarioService: UsuariosService, 
      private router: Router, private activatedRoute: ActivatedRoute,
      public toastr: ToastrService) { 
        
      //this.toastr.setRootViewContainerRef(vcr);
  
      this.activatedRoute.params
      .subscribe( (param :Params)=>{
        this.idacuario= param['idacuario'];  
        this.user_id= param['user_id'];  

        console.log("Recibiendo parametros");
        console.log(this.idacuario);
      })
    console.log("Buscando acuario para id " + this.idacuario);

      this.usuarioService.getAcuarioId('getAcuarioId', this.idacuario)
      .subscribe(data => {
        this.acuarios = data.acuarioData;
        console.log(this.acuarios);
      
      });

      this.usuarioService.getDetailAcuario('getDetailAcuario', this.idacuario)
      .subscribe(data => {
        this.configAcuario = data.acuarioData;
      
        for (let i in this.configAcuario) {
  
          if (this.configAcuario[i].param == "tempmin") {
            this.configInit.itempmin = +this.configAcuario[i].value;
          }
          else if (this.configAcuario[i].param == "tempmax") {
            this.configInit.itempmax = +this.configAcuario[i].value;
          }
          else if (this.configAcuario[i].param == "phmin") {
            this.configInit.iphmin = +this.configAcuario[i].value;
          }
          else if (this.configAcuario[i].param == "phmax") {
            this.configInit.iphmax = +this.configAcuario[i].value;
          }
          else if (this.configAcuario[i].param == "luzdiamin") {
            this.configInit.iluzdiamin.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iluzdiamin.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "luzdiamax") {
            this.configInit.iluzdiamax.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iluzdiamax.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "luznochemin") {
            this.configInit.iluznochemin.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iluznochemin.minute = +this.configAcuario[i].value.substr(3,2);
  
          }
          else if (this.configAcuario[i].param == "luznochemax") {
            this.configInit.iluznochemax.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iluznochemax.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "airemin") {
            this.configInit.iairemin.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iairemin.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "airemax") {
            this.configInit.iairemax.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.iairemax.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "filtromin") {
            this.configInit.ifiltromin.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.ifiltromin.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "filtromax") {
            this.configInit.ifiltromax.hour = +this.configAcuario[i].value.substr(0,2);
            this.configInit.ifiltromax.minute = +this.configAcuario[i].value.substr(3,2);
          }
          else if (this.configAcuario[i].param == "nivelagua") {
            this.configInit.inivelagua = this.configAcuario[i].value;
            if (this.configAcuario[i].value == "Y") {
              this.valueY = true;
              this.valueN = false;
            }
            else {
              this.valueY = false;
              this.valueN = true;
            }
          }
        }
  
       
  
        this.forma = new FormGroup({
          'user_id': new FormControl(this.user_id),
          'idacuario': new FormControl(this.idacuario),
          'tempmin': new FormControl(this.configInit.itempmin),
          'tempmax': new FormControl(this.configInit.itempmax),
          'phmin': new FormControl(this.configInit.iphmin),
          'phmax': new FormControl(this.configInit.iphmax),
          'luzdiamin': new FormControl(this.configInit.iluzdiamin),
          'luzdiamax': new FormControl(this.configInit.iluzdiamax),
          'luznochemin': new FormControl(this.configInit.iluznochemin),
          'luznochemax': new FormControl(this.configInit.iluznochemax),
          'airemin': new FormControl(this.configInit.iairemin),
          'airemax': new FormControl(this.configInit.iairemax),
          'filtromin': new FormControl(this.configInit.ifiltromin),
          'filtromax': new FormControl(this.configInit.ifiltromax)
        });

      });
     
    }
  
    ngOnInit() {
  
    }
  
    editDiv() {
      this.edit = !this.edit;
      console.log(this.configInit.itempmin);
    }
  
    Guardar(){
      console.log("Guardando configuraciones");
      this.submit = true;
      this.edit = !this.edit;
      
      console.log(this.forma.value);
      
      this.usuarioService.setConfigWeb(this.forma.value, 'setConfigWeb')
      .subscribe(data => {
        if (data.exito) {
          this.showSuccess('Configuración guardada exitosamente');
          console.log(this.result);
          
          this.result = true;
          // this.limpiarForma();
        }
        else {
          this.result = false;
        }
      });
      
    }
    showSuccess(text) {
      this.toastr.success(text, 'Felicidades!...');
    }
  
  
    showError() {
      this.toastr.error('This is not good!', 'Oops!');
    }
    showWarning() {
      this.toastr.warning('You are being warned.', 'Alert!');
    }
    showInfo() {
      this.toastr.info('Just some information for you.');
    }
  
    volver(){
      this.router.navigate(['/detailuser',this.user_id])
    }
  }
  

