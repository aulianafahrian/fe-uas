function deleteDataProyek(IDHAPUSpryk) {
    var proyekId = IDHAPUSpryk;
    var target_url = "https://aufa-ulbi.herokuapp.com/proyek/" + proyekId;

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