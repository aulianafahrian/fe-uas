import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabelmhs, isiTabeldsn } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRowPresensi);
}
export function isiTableMahasiswa(results) {
  results.forEach(isiRowMahasiswa);
}
export function isiTableDosen(results) {
  results.forEach(isiRowDosen);
}

function isiRowPresensi(value) {
  let content = isiTabel
      .replace("#NAMA#", value.biodata_mahasiswa.nama)
      .replace("#NPM#", value.biodata_mahasiswa.npm)
      .replace("#JURUSAN#", value.biodata_mahasiswa.jurusan.nama)
      .replace("#PRODI#", value.biodata_mahasiswa.prodi.nama)
      .replace("#DOSENPEMBIMBING#", value.dosen_pembimbing.nama)
      .replace("#DOSENPENGUJI#", value.dosen_penguji.nama)
      .replace("#JUDUL#", value.judul)
      .replace("#TANGGALSIDANG#", value.tanggal_sidang)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
function isiRowMahasiswa(value) {
  let content = isiTabelmhs
  .replace("#NAMA#", value.nama)
    .replace("#NPM#", value.npm)
    .replace("#JURUSAN#", value.jurusan.nama)
    .replace("#PRODI#", value.prodi.nama)
    .replace("#KELAS#", value.kelas)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
addInner("iniTabelmhs", content);
}

function isiRowDosen(value) {
  let content = isiTabeldsn
      .replace("#NAMA#", value.nama)
      .replace("#NID#", value.nid)
      .replace("#PRODI#", value.prodi.nama)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabeldsn", content);
}
