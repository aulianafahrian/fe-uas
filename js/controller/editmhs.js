export function isiDataMahasiswa(results) {  
    const inputMapping = [
      { id: 'npm', path: '1.Value'},
      { id: 'namamhs', path: '2.Value' },
      { id: 'kelas', path: '3.Value' },
      // { id: 'jurusan', path: '4.Value' },
      // { id: 'prodi', path: '5.Value' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  }

  function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
  }