import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.page.html',
  styleUrls: ['./cliente-update.page.scss'],
})
export class ClienteUpdatePage implements OnInit {

  updateClientes: FormGroup;
  id: any;

  constructor(
    private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.fetchClientes(this.id);
    this.updateClientes = this.formBuilder.group({
      nombre: [""]
    })
  }

  fetchClientes(id){
    console.log("llego")
    this.clientesService.getClienteById(id).subscribe((data)=>{
      this.updateClientes.setValue({
        nombre: data["nombre"]
      });
    });
  }

  onSubmit(){
    if(!this.updateClientes.valid){
      return false;
    } else{
      this.clientesService.updateClientes(this.id, this.updateClientes.value).subscribe(()=>{
        this.updateClientes.reset();
        this.router.navigate(["/cliente-list"]);
      })
      
    }
  }

}
