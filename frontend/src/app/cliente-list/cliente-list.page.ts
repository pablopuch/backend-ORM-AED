import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.page.html',
  styleUrls: ['./cliente-list.page.scss'],
})
export class ClienteListPage implements OnInit {

  Clientes: any = [];

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.clientesService.getClientes().subscribe((response) =>{
      this.Clientes = response;
    })
  }

  delete(clientes, i){
    if(window.confirm("Are you sure")){
      this.clientesService.deleteCliente(clientes.id).subscribe(()=>{
        this.ionViewDidEnter();
        console.log("Cliente deleted!")
      })
    }
  }

}
