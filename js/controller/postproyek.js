import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { AmbilResponse, urlPOSTproyek } from "../config/url_post.js";

async function getDataMahasiswa(mahasiswaId) {
    // Fetch mahasiswa data based on the ID (replace with your API endpoint)
    const response = await fetch(`https://aufa-ulbi.herokuapp.com/proyekmahasiswa/${mahasiswaId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch mahasiswa data.");
    }
}

async function getDataPartner(partnerId) {
    // Fetch mahasiswa data based on the ID (replace with your API endpoint)
    const response = await fetch('https://aufa-ulbi.herokuapp.com/proyekmahasiswa/' + partnerId);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch mahasiswa data.");
    }
}

async function getDataDosen(dosenId) {
    // Fetch dosen data based on the ID (replace with your API endpoint)
    const response = await fetch('https://aufa-ulbi.herokuapp.com/proyekdosen/' + dosenId);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch dosen data.");
    }
}

function pushDataProyek() {
    let tipe_proyek = getValue("tipe_proyek");
    let mahasiswaId = getValue("mhs1");
    let partnerId = getValue("mhs2");
    let dospemId = getValue("dospem");
    let judul = getValue("judulproyek");
    // Ambil data mahasiswa, partner dan dosen secara bersamaan
    Promise.all([getDataMahasiswa(mahasiswaId), getDataPartner(partnerId), getDataDosen(dospemId)]).then(([mahasiswaData, partnerData, dospemData]) => {
            // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
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
                    nama: "-",
                },
                judul: judul,
                tanggal_sidang: "-",
                ruang_sidang: "-",
            }
            postData(urlPOSTproyek, data, AmbilResponse);
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("status").textContent = "Failed to fetch data.";
        });
}

onClick("buttonproyek", pushDataProyek);