package com.example.secureportal.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @GetMapping("/employees")

    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public String viewEmployees(){
        return "Employees visible";
    }

    @GetMapping("/admin/add")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public String addEmployee(){
        return "Employee added";
    }

}