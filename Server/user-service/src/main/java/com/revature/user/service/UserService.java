package com.revature.user.service;

import com.revature.user.repository.UserRepository;
import com.revature.user.entity.User;
import com.revature.user.VO.ResponseTemplateVO;
import com.revature.user.VO.Department;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    public User saveUser(User user) {
        log.info("Inside saveUser of UserService");
        return userRepository.save(user);
    }

    public ResponseTemplateVO getUserWithDepartment(Long userId) {
        log.info("Inside getUserWithDepartment of UserService");
        ResponseTemplateVO vo = new ResponseTemplateVO();
        User user = userRepository.findByUserId(userId);
        Department department = restTemplate.getForObject("http://DEPARTMENT-SERVICE/departments/" + user.getDepartmentId(), Department.class);

        vo.setUser(user);
        vo.setDepartment(department);

        return vo;
    }

    public User updateUser(Long id, User userObj) {
        User user = userRepository.findByUserId(id);
        user.setFirstName(userObj.getFirstName());
        user.setLastName(userObj.getLastName());
        //etc
        return userRepository.save(user);
    }
}