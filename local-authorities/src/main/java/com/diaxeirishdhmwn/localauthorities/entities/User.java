package com.diaxeirishdhmwn.localauthorities.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import java.util.Date;

@Data
@Entity
@Table(name = "users")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User
{
    @Id
    @SequenceGenerator(name = "seq_generator", sequenceName = "users_id_gen", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "seq_generator")
    private Long id;

    @Version
    @JsonIgnore
    private Integer version;

    private String firstName;
    private String lastName;
    private String email;

    @Temporal(TemporalType.TIMESTAMP)
    private Date emailVerifiedAt;

    private String phoneNumber;
    private String passwordHash;
    private String passwordResetToken;

    @Temporal(TemporalType.TIMESTAMP)
    private Date passwordResetTokenExpiresAt;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastLoginAt;

    private String lastLoginIp;

    public User()
    {
    }

    public User(String firstName, String lastName, String email, String phoneNumber, String passwordHash)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.passwordHash = passwordHash;
    }
}
