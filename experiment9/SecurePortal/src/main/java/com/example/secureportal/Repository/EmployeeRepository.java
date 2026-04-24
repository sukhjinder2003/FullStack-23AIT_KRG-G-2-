package com.example.secureportal.Repository;

import com.example.secureportal.Entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository
        extends JpaRepository<Employee,Long>{

    Page<Employee> findAll(Pageable pageable);

}