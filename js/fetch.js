import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTabelProyek, isiTabelMahasiswa, isiTabelDosen, test, test2 } from "./controller/get.js";
import { urlAPIproyek, urlAPImahasiswa, urlAPIdosen, urlAPItest, urlAPItest2 } from "./config/url.js";
get(urlAPIproyek, isiTabelProyek);
get(urlAPImahasiswa, isiTabelMahasiswa);
get(urlAPIdosen, isiTabelDosen);
get(urlAPItest, test);
get(urlAPItest2, test2);
