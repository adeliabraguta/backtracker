package com.esempla.backtracker.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Label.
 */
@Entity
@Table(name = "label")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Label implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Size(min = 3)
    @Column(name = "label", nullable = false)
    private String label;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "labels")
    @JsonIgnoreProperties(value = { "project", "assignedTo", "labels" }, allowSetters = true)
    private Set<Ticket> tickets = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Label id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLabel() {
        return this.label;
    }

    public Label label(String label) {
        this.setLabel(label);
        return this;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Set<Ticket> getTickets() {
        return this.tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        if (this.tickets != null) {
            this.tickets.forEach(i -> i.removeLabel(this));
        }
        if (tickets != null) {
            tickets.forEach(i -> i.addLabel(this));
        }
        this.tickets = tickets;
    }

    public Label tickets(Set<Ticket> tickets) {
        this.setTickets(tickets);
        return this;
    }

    public Label addTicket(Ticket ticket) {
        this.tickets.add(ticket);
        ticket.getLabels().add(this);
        return this;
    }

    public Label removeTicket(Ticket ticket) {
        this.tickets.remove(ticket);
        ticket.getLabels().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Label)) {
            return false;
        }
        return getId() != null && getId().equals(((Label) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Label{" +
            "id=" + getId() +
            ", label='" + getLabel() + "'" +
            "}";
    }
}
