import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../shared/services/usuarios.service';

import { ToastrService } from 'ngx-toastr';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-addacuario',
  templateUrl: './addacuario.component.html',
  styleUrls: ['./addacuario.component.scss']
})
export class AddacuarioComponent implements OnInit {
  acuarios: any
  submit: boolean
  forma: FormGroup
  result: boolean
  user_id = { "user_id": "" };
  constructor(private toastr: ToastrService,private usuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
    .subscribe(param => {
      this.user_id.user_id = param['user_id'];
    })

    this.forma = new FormGroup({
      'user_id': new FormControl (this.user_id.user_id),
      'nombreAcuario': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'tipoPez': new FormControl("", [Validators.required, Validators.minLength(5)])
    })

    }

  ngOnInit() {
 
  }

  addAcuario() {
    console.log(this.forma);
    this.submit = true;

    console.log("Insertando");

    console.log(this.forma.value);
    
    this.usuarioService.addAcuario(this.forma.value, 'addAcuario')
      .subscribe(data => {
        if (data.acuarioData) {
          this.result = true;
          this.showSuccess('Acuario creado exitosamente');
        }
        else {
          this.result = false;
          this.showError()
        }
      });
    }

    volver() {
      this.router.navigate(['/detailuser', this.user_id.user_id]);
    }

    showSuccess(text) {
      this.toastr.success(text, 'Felicidades!');
      this.router.navigate(['/detailuser', this.user_id.user_id]);
    }
  
    showError() {
      this.toastr.error('This is not good!', 'Oops!');
    }
  }
