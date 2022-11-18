import CalendarLocale from 'rc-picker/lib/locale/zh_CN';
import { PickerLocale } from '../generatePicker';

// 统一合并为完整的 Locale
const locale: PickerLocale = {
  lang: {
    placeholder: '请选择日期',
    yearPlaceholder: '请选择年份',
    quarterPlaceholder: '请选择季度',
    monthPlaceholder: '请选择月份',
    weekPlaceholder: '请选择周',
    rangePlaceholder: ['开始日期', '结束日期'],
    rangeYearPlaceholder: ['开始年份', '结束年份'],
    rangeMonthPlaceholder: ['开始月份', '结束月份'],
    rangeWeekPlaceholder: ['开始周', '结束周'],
    TimeFormatYMD: '默认',
    TimeFormatYMDHm: '时分',
    TimeFormatYMDHmS: '时分秒',
    ...CalendarLocale,
    ok: '确 定',
  },
  timePickerLocale: {
    placeholder: '请选择时间',
    rangePlaceholder: ['开始时间', '结束时间'],
  },
};

export default locale;
