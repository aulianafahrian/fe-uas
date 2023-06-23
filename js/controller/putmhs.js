import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTmahasiswa, AmbilResponse} from "../config/url_put.js";

function pushDataMahasiswa(){
    let data = {
        npm : getValue("npm"),
        nama : getValue("namamhs"),
        kelas : getValue("kelas"),
        jurusan : {
            nama :"Teknik Informatika",
        },
        prodi : {
            nama : "D4 Teknik Informatika",
        }
    }
    putData(urlPUTmahasiswa, data, AmbilResponse);

}

onClick("buttonmahasiswa", pushDataMahasiswa);