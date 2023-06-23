//dapatkan parameter dari url
const urlParams = new URLSearchParams(window.location.search);
const proyekdosenId = urlParams.get('proyekdosenId');
const proyekmahasiswaId = urlParams.get('proyekmahasiswaId');

export let urlFetchDosen = 'https://aufa-ulbi.herokuapp.com/proyekdosen/' + proyekdosenId;
export let urlFetchMahasiswa = 'https://aufa-ulbi.herokuapp.com/proyekmahasiswa/' + proyekmahasiswaId;
