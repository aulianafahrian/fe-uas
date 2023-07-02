import{get} from "https://bukulapak.github.io/api/process.js";
import { isiDataDosen, isiDataMahasiswa, isiDataProyek } from "./controller/edit.js";
// import { isiDataMahasiswa } from "./controller/editmhs.js";
import { urlFetchDosen, urlFetchMahasiswa } from "./config/url_get_detil.js";

get(urlFetchDosen, isiDataDosen)
get(urlFetchMahasiswa, isiDataMahasiswa)
get(urlFetchProyek, isiDataProyek)