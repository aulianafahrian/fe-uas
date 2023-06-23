export function isiDataDosen(results) {  
    const inputMapping = [
      { id: 'nid', path: '1.Value'},
      { id: 'nama', path: '2.Value' },
      // { id: 'durasi', path: 'biodata.jam_kerja', index: 0, property: 'durasi'  },
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

  
  
