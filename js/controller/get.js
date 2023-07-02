import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { TabelProyek, Tabelmahasiswa, Tabeldosen} from "../temp/table.js";

export function isiTabelProyek(results) {
  results.forEach(isiRowProyek);
}
export function isiTabelMahasiswa(results) {
  results.forEach(isiRowMahasiswa);
}
export function isiTabelDosen(results) {
  results.forEach(isiRowDosen);
}

function isiRowProyek(value) {
  if (value.tipe_proyek == "Proyek 1"){
  let content = TabelProyek
      .replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelproyek1", content);
  } else if (value.tipe_proyek == "Proyek 2"){
  let content = TabelProyek
      .replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelproyek2", content);
  } else if (value.tipe_proyek == "Proyek 3"){
  let content = TabelProyek
      .replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#KELAS#", value.biodata_mahasiswa.kelas)
      .replace("#NAMAPARTNER#", value.partner_mahasiswa.nama)
      .replace("#NPMPARTNER#", value.partner_mahasiswa.npm)
      .replace("#KELASPARTNER#", value.partner_mahasiswa.kelas)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#RUANGSIDANG#", value.ruang_sidang)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelproyek3", content);
  }
}

function isiRowMahasiswa(value) {
  let content = Tabelmahasiswa
  .replace("#NAMA#", value.nama)
    .replace("#NPM#", value.npm)
    .replace("#KELAS#", value.kelas)
    .replace("#JURUSAN#", value.jurusan.nama)
    .replace("#PRODI#", value.prodi.nama)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
addInner("iniTabelMahasiswa", content);
}

function isiRowDosen(value) {
  let content = Tabeldosen
      .replace("#NAMA#", value.nama)
      .replace("#NID#", value.nid)
      .replace("#PRODI#", value.prodi.nama)
      .replace("#IDEDIT#", value._id)
      .replace("#IDHAPUS#", value._id)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelDosen", content);
}