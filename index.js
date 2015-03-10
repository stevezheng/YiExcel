var ejsExcel = require("ejsExcel");
var fs = require("fs");
//获得Excel模板的buffer对象
var exlBuf = fs.readFileSync("./yunda.xlsx");

//数据源
var data = {
  sellerName: '周星星'
  , sellerShopName: '演技专卖'
  , sellerAddress: '福建厦门集美区嘉园小区'
  , sellerPhone: '18650180000'
  , sellerAddressId: '360201'
  , buyerPhone: '15650181111'
  , buyerCity: '岳池'
  , buyerId: 'stevezheng'
  , buyerAddress: '四川广安岳池南街小学'
  , buyerAddressId: '324231'
  , buyerName: '郑某某'
};

//用数据源(对象)data渲染Excel模板
ejsExcel.renderExcelCb(exlBuf, data, function(exlBuf2){
  fs.writeFileSync("./yunda_result.xlsx", exlBuf2);
  console.log("快递单生成完成.xlsx");
});

