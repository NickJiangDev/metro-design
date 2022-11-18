import pickerLocale from '../../date-picker/languages/zh-CN';

const cn = {
  ...pickerLocale,
  fastTypeLocale: {
    untilNow: '至今',
    customer: '自定义动态时间',
    unlimited: '不限',
    yesterday: '昨日',
    today: '今日',
    last24Hours: '过去24小时',
    recent30Days: '近30天',
    lastWeek: '上周',
    lastMonth: '上月',
    lastQuarter: '上季度',
    lastYear: '去年',
    thisWeek: '本周',
    thisMonth: '本月',
    thisYear: '本年',
    tomorrow: '明天',
    future24Hours: '未来24小时',
    nextWeek: '下周',
    future7Days: '未来7天',
  },
  filterTypeLocale: {
    include: '包含',
    uninclude: '不包含',
    equal: '等于',
    empty: '为空',
    unempty: '不为空',
    startwith: '开头为',
    endwith: '结尾为',
    eitherof: '为下列之一',
    neitherof: '不为下列之一',
  },
  dateUnitLocale: {
    years: '年',
    month: '月',
    quarter: '季度',
    day: '日',
    week: '周',
    hour: '时',
    minute: '分',
    second: '秒',
    yearsInclude: '自然年',
    quarterInclude: '自然季度',
    monthInclude: '自然月',
    weekInclude: '自然周',
  },
  dateUnitlLocale: {
    years: '包含本年',
    month: '包含本月',
    quarter: '包含本季度',
    day: '包含今日',
    week: '包含本周',
    hour: '包含本小时',
    minute: '包含本分钟',
    second: '包含本秒',
    yearEnd: '年末',
    yearStart: '年初',
    quarterEnd: '季末',
    quarterStart: '季初',
    monthEnd: '月末',
    monthStart: '月初',
    weekEnd: '周末',
    weekStart: '周初',
    yeasterday: '昨天',
    today: '今天',
    tomorrow: '明天',
    now: '此刻',
    onHour: '整点',
    onMinute: '整分',
    onSecond: '整秒',
  },
  filterLocale: {
    labelDynamic: '动态时间筛选',
    after: '未来',
    before: '最近',
    placeholder: '请输入',
    labelStart: '最早',
    labelEnd: '最晚',
    untilNow: '截止到',
    labelFastType: '快速选择',
  },
  numberFilterLocale: {
    delete: '删除',
    cancel: '取消',
    ok: '确定',
    noContent: '无内容',
    addSegment: '添加分段',
    intervalScreening: '区间筛选',
    segmentScreening: '分段筛选',
    between: '之间',
    please: '请在',
  },
};
export type Locale = typeof cn;
export default cn;
