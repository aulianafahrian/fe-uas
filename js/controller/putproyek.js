import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTproyek, AmbilResponse} from "../config/url_put.js";

function pushDataProyek(){
    let data = {
        tipe_proyek: tipe_proyek,
        biodata_mahasiswa: {
            _id: mahasiswaId,
            npm: mahasiswaData.npm,
            nama: mahasiswaData.nama,
            kelas: mahasiswaData.kelas,
            jurusan: {
                nama: mahasiswaData.jurusan.nama,
            },
            prodi: {
                nama: mahasiswaData.prodi.nama,
            },
        },
        partner_mahasiswa: {
            _id: partnerId,
            npm: partnerData.npm,
            nama: partnerData.nama,
            kelas: partnerData.kelas,
            jurusan: {
                nama: partnerData.jurusan.nama,
            },
            prodi: {
                nama: partnerData.prodi.nama,
            },
        },
        dosen_pembimbing: {
            _id: dospemId,
            nama: dospemData.nama,
        },
        dosen_penguji: {
            nama: getValue(),
        },
        judul: judul,
        tanggal_sidang: getValue(),
        ruang_sidang: getValue(),
    }
    putData(urlPUTproyek, data, AmbilResponse);

}

onClick("buttoneditproyek", pushDataProyek);