package com.pablo.zapatillas.entity.models;

import javax.persistence.*;

@Entity
@Table(name = "compras", schema = "db_zapatillas", catalog = "")
@IdClass(ComprasEntityPK.class)
public class Compras {
    private int idcliente;
    private int idzapatillas;
    private int cantidad;

    @Id
    @Column(name = "idcliente", nullable = false)
    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
    }

    @Id
    @Column(name = "idzapatillas", nullable = false)
    public int getIdzapatillas() {
        return idzapatillas;
    }

    public void setIdzapatillas(int idzapatillas) {
        this.idzapatillas = idzapatillas;
    }

    @Basic
    @Column(name = "cantidad", nullable = false)
    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Compras that = (Compras) o;

        if (idcliente != that.idcliente) return false;
        if (idzapatillas != that.idzapatillas) return false;
        if (cantidad != that.cantidad) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idcliente;
        result = 31 * result + idzapatillas;
        result = 31 * result + cantidad;
        return result;
    }



}
