package com.pablo.zapatillas.entity.models;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class ComprasEntityPK implements Serializable {
    private int idcliente;
    private int idzapatillas;

    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
    }

    public int getIdzapatillas() {
        return idzapatillas;
    }

    public void setIdzapatillas(int idzapatillas) {
        this.idzapatillas = idzapatillas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ComprasEntityPK that = (ComprasEntityPK) o;

        if (idcliente != that.idcliente) return false;
        if (idzapatillas != that.idzapatillas) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idcliente;
        result = 31 * result + idzapatillas;
        return result;
    }

    public ComprasEntityPK() {
    }
}
