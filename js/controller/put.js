import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTdosen, AmbilResponse} from "../config/url_put.js";


function pushDataDosen(){
    let data = {
        nid : getValue("nid"),
        nama : getValue("nama"),
        prodi : {
            nama : "D4 Teknik Informatika",
        }
    }
    putData(urlPUTdosen, data, AmbilResponse);

}

onClick("buttondosen", pushDataDosen);

