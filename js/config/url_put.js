const urlParams = new URLSearchParams(window.location.search);
const proyekId = urlParams.get('proyekId');
const proyekdosenId = urlParams.get('proyekdosenId');
const proyekmahasiswaId = urlParams.get('proyekmahasiswaId');

export let urlPUTproyek = "https://aufa-ulbi.herokuapp.com/proyek/" + proyekId;
export let urlPUTdosen = "https://aufa-ulbi.herokuapp.com/proyekdosen/" + proyekdosenId;
export let urlPUTmahasiswa = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa/" + proyekmahasiswaId;

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "index.html";
}