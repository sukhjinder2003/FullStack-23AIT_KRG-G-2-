package com.example.secureportal.Repository;

import com.example.secureportal.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User,Long> {

}