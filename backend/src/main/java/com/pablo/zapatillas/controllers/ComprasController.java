package com.pablo.zapatillas.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pablo.zapatillas.entity.models.Compras;
import com.pablo.zapatillas.entity.models.ComprasEntityPK;
import com.pablo.zapatillas.entity.services.ComprasServiceImpl;
import com.pablo.zapatillas.entity.services.IComprasService;
import com.pablo.zapatillas.entity.services.IZapatillaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class ComprasController {

    @Autowired
    ComprasServiceImpl comprasService;

    @GetMapping("/compras")
    public List<Compras> getAll() {
        return comprasService.getAll();
    }

    @GetMapping("/compras/{idCliente}/{idZapatilla}")
    Compras getOne(@PathVariable("idZapatilla") int idZapatilla, @PathVariable("idCliente") int idCliente){
        ComprasEntityPK comprasPk = new ComprasEntityPK();
        comprasPk.setIdzapatillas(idZapatilla);
        comprasPk.setIdcliente(idCliente);
        Optional<Compras> b = comprasService.getOne(comprasPk);
        if(b.isPresent()){
            return b.get();
        }
        return b.get();
    }

    
    
    @PostMapping("/compras")
    void add(Compras compras){
        comprasService.add(compras);
    }

    @PostMapping(value="/compras", consumes = "aplication/json")
    void addUsingJson(@RequestBody String compraSting){
        ObjectMapper om = new ObjectMapper();
        try {
            Compras compras = om.readValue(compraSting, Compras.class);
            comprasService.add(compras);
        } catch (JsonMappingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
       
    
    @DeleteMapping("/compras/{idCliente}/{idZapatilla}")
    void delete(@PathVariable("idZapatilla") int idZapatilla, @PathVariable("idCliente") int idCliente){
        ComprasEntityPK comprasPk = new ComprasEntityPK();
        comprasPk.setIdzapatillas(idZapatilla);
        comprasPk.setIdcliente(idCliente);
        comprasService.delete(comprasPk);
    }
}
