import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-compras-create',
  templateUrl: './compras-create.page.html',
  styleUrls: ['./compras-create.page.scss'],
})
export class ComprasCreatePage implements OnInit {

  compraForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private comprasService:  ComprasService   
  ) {
    this.compraForm = this.formBuilder.group({
      idcliente: "",
      idzapatillas:"",
      cantidad: ""
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.compraForm.valid) {
      return false;
    } else {
      this.comprasService.createCompraUsingJSON(this.compraForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.compraForm.reset();
            this.router.navigate(['/compras-list']);
          })
        });
    }
  }

}
