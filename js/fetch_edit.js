import{get} from "https://bukulapak.github.io/api/process.js";
import { isiDataDosen } from "./controller/edit.js";
import { isiDataMahasiswa } from "./controller/editmhs.js";
import { urlFetchDosen, urlFetchMahasiswa } from "./config/url_get_detil.js";

get(urlFetchDosen, isiDataDosen)
get(urlFetchMahasiswa, isiDataMahasiswa)