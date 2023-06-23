export let urlPOSTproyek = "https://aufa-ulbi.herokuapp.com/proyek"
export let urlPOSTmahasiswa = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa"
export let urlPOSTdosen = "https://aufa-ulbi.herokuapp.com/proyekdosen"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html";
    // window.location.reload(); //reload halaman setelah klik ok pada alert
}