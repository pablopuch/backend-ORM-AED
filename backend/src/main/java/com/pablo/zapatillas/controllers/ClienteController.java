package com.pablo.zapatillas.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pablo.zapatillas.entity.models.Cliente;
import com.pablo.zapatillas.entity.services.IClienteService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin (origins = "http://localhost:8100")
@RestController
public class ClienteController {
	
	@Autowired
	IClienteService clienteService;
	
	@GetMapping("/clientes")
	public List<Cliente> getAll(){
		return clienteService.getAll();
	}
	
	@GetMapping("/clientes/{id}")
	Cliente getOne(@PathVariable("id") long id) {
		Optional<Cliente> b = clienteService.getOne(id);
		if(b.isPresent()) {
			return b.get();
		};
		return null;
	}
	
	@PostMapping("/clientes")
	void add(Cliente cliente) {
		System.out.println(cliente.getNombre());
		clienteService.add(cliente);
	}
	
	@PostMapping(value="/clientes", consumes="application/json")
	void addUsingJson(@RequestBody String clienteString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Cliente cliente = om.readValue(clienteString, Cliente.class);
			clienteService.add(cliente);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PutMapping("/clientes/{id}")
	void put(Cliente cliente, @PathVariable("id") long id) {
		System.out.println(cliente.getNombre());
		clienteService.put(cliente, id);
	}
	
	@DeleteMapping("/clientes/{id}")
	void delete(@PathVariable("id") long id) {
		clienteService.delete(id);
	}
	

}
