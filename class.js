class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `${this.nama} bekerja sebagai ${this.jabatan} dan memiliki penghasilan sebesar Rp.${this.gaji}`;
    }
}

const karyawan1 = new Karyawan("ren","ceo",12000000);
console.log(karyawan1.getInformation());