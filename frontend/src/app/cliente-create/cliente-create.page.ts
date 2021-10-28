import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.page.html',
  styleUrls: ['./cliente-create.page.scss'],
})
export class ClienteCreatePage implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private clientesService: ClientesService
  ) { 
    this.clienteForm = this.formBuilder.group({
      nombre: [""]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.clienteForm.valid) {
      return false;
    } else {
      this.clientesService.createClienteUsingJSON(this.clienteForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.clienteForm.reset();
            this.router.navigate(['/cliente-list']);
          })
        });
    }
  }
}
