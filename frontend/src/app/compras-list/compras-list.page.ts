import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';
import { Router } from '@angular/router';
import { Compra } from '../models/compra';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.page.html',
  styleUrls: ['./compras-list.page.scss'],
})
export class ComprasListPage implements OnInit {

  Compras: any = [];

  constructor(private comprasService: ComprasService, private router: Router) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.comprasService.getCompras().subscribe((response) =>{
      this.Compras = response;
    })
  }

  delete(idcliente: number, idzapatillas: number){
    if(window.confirm("Are you sure")){
      this.comprasService.deleteCompra(idcliente, idzapatillas).subscribe(()=>{
        this.ionViewDidEnter();
        console.log("Compra deleted!")
      })
    }
  }

}
