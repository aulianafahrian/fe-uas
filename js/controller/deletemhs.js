function deleteDataMahasiswa(IDHAPUSmhs) {
    var proyekmahasiswaId = IDHAPUSmhs;
    var target_url = "https://aufa-ulbi.herokuapp.com/proyekmahasiswa/" + proyekmahasiswaId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}