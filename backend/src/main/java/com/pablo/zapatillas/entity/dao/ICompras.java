package com.pablo.zapatillas.entity.dao;

import com.pablo.zapatillas.entity.models.Compras;
import com.pablo.zapatillas.entity.models.ComprasEntityPK;
import org.springframework.data.repository.CrudRepository;

public interface ICompras extends CrudRepository <Compras, ComprasEntityPK>{

}
