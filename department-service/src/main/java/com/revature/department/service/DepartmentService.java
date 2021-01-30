package com.revature.department.service;

import com.revature.department.repository.DepartmentRepository;
import com.revature.department.entity.Department;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public Department saveDepartment(Department department) {
        log.info("Inside the saveDepartment of DepartmentService");
        return departmentRepository.save(department);
    }

    public Department findDepartmentById(Long departmentId) {
        log.info("Inside the saveDepartment of DepartmentService");
        return departmentRepository.findByDepartmentId(departmentId);
    }
}