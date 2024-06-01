package com.Authentication.Auth.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "loguser")
public class User {

    @Id
    private String id;
    private String img;
    private String username;
    private String password;
    private List<String> reg = new ArrayList<>();


    public User() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<String> getReg() {
        return reg;
    }

    public void setReg(List<String> reg) {
        this.reg = reg;
    }

    public String getDetails(){
        return getId()+" "+getImg()+" "+getUsername();
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", img='" + img + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", reg=" + reg +
                '}';
    }
}
