package com.Authentication.Auth.Repository;

import com.Authentication.Auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,String> {

    User findByUsername(String username);

    Optional<User> findById(String id);

    void deleteById(String id);

}
