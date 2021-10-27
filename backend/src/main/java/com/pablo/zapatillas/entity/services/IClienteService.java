package com.pablo.zapatillas.entity.services;
import java.util.List;
import java.util.Optional;

import com.pablo.zapatillas.entity.models.Cliente;

public interface IClienteService {
	List<Cliente> getAll();
	Optional<Cliente> getOne(long idCliente);
	void add(Cliente cliente);
	void delete (long idCliente);
	void put (Cliente cliente, long idCliente);

}
