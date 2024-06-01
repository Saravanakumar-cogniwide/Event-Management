package com.Authentication.Auth.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@Data
@Entity
@Table(name = "event")
public class Event {

    @Id
    private String id;
    private String ownerid;
    private String title;
    private String description;
    private Date date;
    private String location;
    private Integer capacity;
    private Integer noofreg;
    private String time;
    private String img;


    public Event() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(String ownerid) {
        this.ownerid = ownerid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getNoofreg() {
        return noofreg;
    }

    public void setNoofreg(Integer noofreg) {
        this.noofreg = noofreg;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

//    public Integer getPhoneno() {
//        return phoneno;
//    }
//
//    public void setPhoneno(Integer phoneno) {
//        this.phoneno = phoneno;
//    }

    @Override
    public String toString() {
        return "Event{" +
                "id='" + id + '\'' +
                ", ownerid='" + ownerid + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", location='" + location + '\'' +
                ", capacity=" + capacity +
                ", noofreg=" + noofreg +
                ", time='" + time + '\'' +
                ", img='" + img + '\'' +
                '}';
    }
}

