# blockchainkyc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
对于期货数据，一直在寻找互联网上能够获得的比较好的数据源，最近发现了“新浪期货瑚数
据源，可以提供一分钟的期货K线数据。

http://hq.sinajs.cnDist=TICKER

对于国内期货连续，Ticker为正常TickedjO个0，比如豆一，TickeiA为AO，白银AGO
http://hq.sinajs.cn/list=AO
http://hq.sinajs.cnDist=AGO

新浪期货上面的显示的数据就是根据这些一分钟的数据}并出来的。
数据问题：
1分钟的K线截片数据，不是根据TicI谳出来的，和实际行情软件中的数据存在差异，数据精度
不高。

实时数据
【例子】
http://hq.sinajs.cn/list= MO
豆粕连续MO
返回值如下：
var hq_str_MO=’豆粕连续，14595 8.317 0.319 0.3145.317 8.3153.3154, 3154.3162.3169,1325.
223.1371608,1611074，连，豆粕，2013-06-28';

查看http://finance.sina.com.cn/f utures/qu otes/MO.shtml页面，发期醛孙潍如下
最新价：3154开盘价：3170最高价：3190最』氏价：3145
结算价：3162昨结算：3169持仓呈：1371608成交呈：1611074
买价：3153卖价：3154买呈：1325卖呈：223
jXAI字符串由许多数旗掺镶疑__—起，不同含义的赞d居用逗号隔开了，按照茌U事员的思路，顺序
号从0开始。
0：豆粕连续，名字
1：145958，不明数字（难道是数据提供商代码？）
2：3170，开盘价
3：3190，最高价
4：3145，昌低价
5：3178，昨日收盘价（2013年6月27日）
6：3153，要价，即“要}一“报价
7：3154，卖价，即“卖}一”报价
8：3154，最多骱，即收盎价
9：3162，结算价
10：3169，昨结算
11：1325，买呈
12：223，卖呈
13：1371608，持仓呈
14：1611074，成交呈
15：连，大连商品交易所简称
16：豆粕，品种名简称
17：2013-06-28，日期


新浪期货数据备品种代码（商品连续）如下
RBO螺纹钢
AGO白银
AUO黄金
CUO沪铜
ALO沪铝
ZNO沪锌
PBO沪铅
RUO橡胶
FUO燃油
WRO线材
AO大豆
MO豆|粕
YO豆油
JO焦炭
CO玉米
LO乙烯
PO棕油
vo PVC
RSO菜籽
RMO妄粥
FGO玻璃
CFO棉花
WSO强麦
ERO籼稻
MEO甲醇
ROO菜油
TAO甲酸

CFF RE IF1307股菲溯货好荡涨砗珊指连≥卖
品种名+0(数字0)，代表品种连续，如果是其他月份，请使用品种名+YYYMM
例如豆粕2013年09月，M1309
http://hq.sinajs.cn/list=M1309


历史数据
新浪期货数据备品种代码（商品连续）如下
RBO螺纹钢
AGO白银
AUO黄金
CUO沪铜
ALO沪铝
ZNO沪锌
PBO沪铅
RUO橡胶
FUO燃油
WRO线材
AO大豆
MO豆|粕
YO豆{由
J0焦炭
CO玉米
LO乙烯
PO棕油
vo PVC
RSO蓁籽
RMO妄湘
FGO玻璃
CFO棉花
WSO强麦
ERO籼稻
MEO甲醇
ROO菜油
TAO甲酸


商品期货
http://stock2.finance.sina.com.cn/f utures/a pi/j son.p h p/ln d exService.g etlnnerFutures
MiniKLineXm?symboI=CODE
例子
http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine5m?symbol=M0
5分钟：
http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine5m?symbol=M0
15分钟：
http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine15m?symbol=M0
30分钟：
http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine30m?symbol=M0
60分钟
http://stock2.finance.sina.com.cn/futures/api/json.php/IndexService.getInnerFuturesMiniKLine60m?symbol=M0
```
