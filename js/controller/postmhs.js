import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { AmbilResponse, urlPOSTmahasiswa} from "../config/url_post.js";


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
    postData(urlPOSTmahasiswa, data, AmbilResponse);

}

onClick("buttonmahasiswa", pushDataMahasiswa);