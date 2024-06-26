package com.Authentication.Auth.service;

import com.Authentication.Auth.ForbiddenException;
import com.Authentication.Auth.Repository.UserPrincipal;
import com.Authentication.Auth.Repository.UserRepo;
import com.Authentication.Auth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;
    private java.util.Collections Collections;

    @Override
    public UserDetails loadUserByUsername(String username){

        User user= repo.findByUsername(username);

         if(user==null){
//             throw new ForbiddenException("Invalid username or password");
               throw new UsernameNotFoundException("no user found");
         }
        return new UserPrincipal(user);
    }
}
