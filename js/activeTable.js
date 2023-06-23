function TampilProyek1() {
  document.getElementById("iniTabelproyek1").style.display = "";
  document.getElementById("iniTabelproyek2").style.display = "none";
  document.getElementById("iniTabelproyek3").style.display = "none";
  document.getElementById("iniTabelMahasiswa").style.display = "none";
  document.getElementById("iniTabelDosen").style.display = "none";
  document.getElementById("text").innerText = "Proyek 1";
}
function TampilProyek2() {
  document.getElementById("iniTabelproyek1").style.display = "none";
  document.getElementById("iniTabelproyek2").style.display = "";
  document.getElementById("iniTabelproyek3").style.display = "none";
  document.getElementById("iniTabelMahasiswa").style.display = "none";
  document.getElementById("iniTabelDosen").style.display = "none";
  document.getElementById("text").innerText = "Proyek 2";
}
function TampilProyek3() {
  document.getElementById("iniTabelproyek1").style.display = "none";
  document.getElementById("iniTabelproyek2").style.display = "none";
  document.getElementById("iniTabelproyek3").style.display = "";
  document.getElementById("iniTabelMahasiswa").style.display = "none";
  document.getElementById("iniTabelDosen").style.display = "none";
  document.getElementById("text").innerText = "Proyek 3";
}
function TampilMahasiswa() {
  document.getElementById("iniTabelproyek1").style.display = "none";
  document.getElementById("iniTabelproyek2").style.display = "none";
  document.getElementById("iniTabelproyek3").style.display = "none";
  document.getElementById("iniTabelMahasiswa").style.display = "";
  document.getElementById("iniTabelDosen").style.display = "none";
  document.getElementById("text").innerText = "Mahasiswa";
}
function TampilDosen() {
  document.getElementById("iniTabelproyek1").style.display = "none";
  document.getElementById("iniTabelproyek2").style.display = "none";
  document.getElementById("iniTabelproyek3").style.display = "none";
  document.getElementById("iniTabelMahasiswa").style.display = "none";
  document.getElementById("iniTabelDosen").style.display = "";
  document.getElementById("text").innerText = "Dosen";
}
