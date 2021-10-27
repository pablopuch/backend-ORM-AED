package com.pablo.zapatillas.entity.services;

import com.pablo.zapatillas.entity.dao.ICompras;
import com.pablo.zapatillas.entity.models.Compras;
import com.pablo.zapatillas.entity.models.ComprasEntityPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComprasServiceImpl implements  IComprasService{

    @Autowired
    ICompras comprasDao;

    @Override
    public List<Compras> getAll() {
        return (List<Compras>) comprasDao.findAll();
    }

    @Override
    public Optional<Compras> getOne(ComprasEntityPK id) {
        return comprasDao.findById(id);
    }

    @Override
    public void add(Compras compras) {
        comprasDao.save(compras);
    }

    @Override
    public void delete(ComprasEntityPK idCompras) {
        comprasDao.deleteById(idCompras);
    }

}
