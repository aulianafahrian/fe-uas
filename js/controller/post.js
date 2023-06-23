import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOSTdosen, AmbilResponse, urlPOSTmahasiswa} from "../config/url_post.js";


function pushDataDosen(){
    // nid : parseFloat(getValue("nid")),
    let data = {
        nid : getValue("nid"),
        nama : getValue("nama"),
        prodi : {
            nama : "D4 Teknik Informatika",
        }
    }
    postData(urlPOSTdosen, data, AmbilResponse);

}

onClick("buttondosen", pushDataDosen);
