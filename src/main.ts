import momentkh from "@thyrith/momentkh";
import moment from "moment";
import plugin from "../types";
import { PluginFunc } from "dayjs";

let numberMap = {
  "១": 1,
  "២": 2,
  "៣": 3,
  "៤": 4,
  "៥": 5,
  "៦": 6,
  "៧": 7,
  "៨": 8,
  "៩": 9,
  "០": 0,
};

const toNumber = (number: string) => {
  return number.toString().replace(/[០១២៣៤៥៦៧៨៩]/g, (m) => numberMap[m]);
};

const toKhDateM: PluginFunc<plugin.toKhDate> = (o, c, d) => {
  const proto = c.prototype;
  const date = momentkh(moment);
  proto.toKhDate = function (format?: string) {
    return date(toNumber(this.format())).toKhDate(format);
  };
  proto.khNewYear = function () {
    return date.getKhNewYearMoment(toNumber(this.year()));
  };
};

export default toKhDateM;
