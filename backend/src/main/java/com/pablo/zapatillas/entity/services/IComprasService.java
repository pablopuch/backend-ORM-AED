package com.pablo.zapatillas.entity.services;

import com.pablo.zapatillas.entity.models.Compras;
import com.pablo.zapatillas.entity.models.ComprasEntityPK;
import com.pablo.zapatillas.entity.models.Zapatilla;

import java.util.List;
import java.util.Optional;

public interface IComprasService {
    List<Compras> getAll();
    Optional<Compras> getOne(ComprasEntityPK idCompras);
    void add(Compras compras);
    void delete(ComprasEntityPK idCompras);
}
