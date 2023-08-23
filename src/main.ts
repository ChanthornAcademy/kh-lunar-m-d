import momentkh from "@thyrith/momentkh";
import moment from "moment";

import plugin from "../types";

import { PluginFunc } from "dayjs";

const toKhDate: PluginFunc<plugin.toKhDate> = (o, c, d) => {
  const proto = c.prototype;
  const date = momentkh(moment);
  proto.toKhDate = function (format?: string) {
    return date(this.format()).toKhDate(format);
  };
  proto.khNewYear = function () {
    return date.getKhNewYearMoment(this.year());
  };
};

export default toKhDate;
