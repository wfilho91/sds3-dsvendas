package com.devsuperior.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
}
