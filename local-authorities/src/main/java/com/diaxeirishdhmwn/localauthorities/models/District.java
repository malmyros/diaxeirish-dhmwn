package com.diaxeirishdhmwn.localauthorities.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "districts")
@JsonIgnoreProperties(ignoreUnknown = true)
public class District {

    @Id
    @SequenceGenerator(name = "seq_generator", sequenceName = "district_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "seq_generator")
    private Long id;

    @Version
    @JsonIgnore
    private Integer version;

    private String name;

    public District() {
    }

    public District(String name) {
        this.name = name;
    }
}
