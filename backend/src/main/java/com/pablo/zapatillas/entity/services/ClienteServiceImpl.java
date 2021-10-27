package com.pablo.zapatillas.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pablo.zapatillas.entity.dao.IClienteDao;
import com.pablo.zapatillas.entity.models.Cliente;

@Service
public class ClienteServiceImpl implements IClienteService{

	
	@Autowired
	IClienteDao clienteDao;
	
	@Override
	public List<Cliente> getAll(){
		return (List<Cliente>) clienteDao.findAll();
	}
	
	@Override
	public void add(Cliente cliente) {
		clienteDao.save(cliente);
	}

	@Override
	public void delete(long idCliente) {
		clienteDao.deleteById(idCliente);
	}

	@Override
	public void put(Cliente cliente, long idCliente) {
		clienteDao.findById(idCliente).ifPresent((x)->{
			cliente.setId(idCliente);
			clienteDao.save(cliente);
		});
	}
	
	@Override
	public Optional<Cliente> getOne(long idCliente) {
		return clienteDao.findById(idCliente);
	}
	
	
}
