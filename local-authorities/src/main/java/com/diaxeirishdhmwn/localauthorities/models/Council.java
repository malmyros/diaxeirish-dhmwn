package com.diaxeirishdhmwn.localauthorities.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "councils")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Council {

    @Id
    @SequenceGenerator(name = "seq_generator", sequenceName = "council_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "seq_generator")
    private Long id;

    @Version
    @JsonIgnore
    private Integer version;

    private String name;

    private Long regionId;
    private Long districtId;

    public Council() {
    }

    public Council(String name, Long regionId, Long districtId) {
        this.name = name;
        this.regionId = regionId;
        this.districtId = districtId;
    }
}
