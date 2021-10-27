package com.pablo.zapatillas.entity.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.pablo.zapatillas.entity.models.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

}
