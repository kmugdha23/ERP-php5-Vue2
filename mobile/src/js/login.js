$(function () {
  const defaultLocation = 'China-中国-86';
  const defaultTimer = 60;
  const locations = [
    "Angola-安哥拉-0244",
    "Afghanistan-阿富汗-93",
    "Albania-阿尔巴尼亚-335",
    "Algeria-阿尔及利亚-213",
    "Andorra-安道尔共和国-376",
    "Anguilla-安圭拉岛-1254",
    "Antigua and Barbuda-安提瓜和巴布达-1268",
    "Argentina-阿根廷-54",
    "Armenia-亚美尼亚-374",
    "Ascension-阿森松-247",
    "Australia-澳大利亚-61",
    "Austria-奥地利-43",
    "Azerbaijan-阿塞拜疆-994",
    "Bahamas-巴哈马-1242",
    "Bahrain-巴林-973",
    "Bangladesh-孟加拉国-880",
    "Barbados-巴巴多斯-1246",
    "Belarus-白俄罗斯-375",
    "Belgium-比利时-32",
    "Belize-伯利兹-501",
    "Benin-贝宁-229",
    "Bermuda Is-百慕大群岛-1441",
    "Bolivia-玻利维亚-591",
    "Botswana-博茨瓦纳-267",
    "Brazil-巴西-55",
    "Brunei-文莱-673",
    "Bulgaria-保加利亚-359",
    "Burkina Faso-布基纳法索-226",
    "Burma-缅甸-95",
    "Burundi-布隆迪-257",
    "Cameroon-喀麦隆-237",
    "Canada-加拿大-1",
    "Cayman Is-开曼群岛-1345",
    "Central African Republic-中非共和国-236",
    "Chad-乍得-235",
    "Chile-智利-56",
    "China-中国-86",
    "Colombia-哥伦比亚-57",
    "Congo-刚果-242",
    "Cook Is-库克群岛-682",
    "Costa Rica-哥斯达黎加-506",
    "Cuba-古巴-53",
    "Cyprus-塞浦路斯-357",
    "Czech Republic-捷克-420",
    "Denmark-丹麦-45",
    "Djibouti-吉布提-253",
    "Dominica Rep-多米尼加共和国-1890",
    "Ecuador-厄瓜多尔-593",
    "Egypt-埃及-20",
    "EI Salvador-萨尔瓦多-503",
    "Estonia-爱沙尼亚-372",
    "Ethiopia-埃塞俄比亚-251",
    "Fiji-斐济-679",
    "Finland-芬兰-358",
    "France-法国-33",
    "French Guiana-法属圭亚那-594",
    "French Polynesia-法属玻利尼西亚-689",
    "Gabon-加蓬-241",
    "Gambia-冈比亚-220",
    "Georgia-格鲁吉亚-995",
    "Germany-德国-49",
    "Ghana-加纳-233",
    "Gibraltar-直布罗陀-350",
    "Greece-希腊-30",
    "Grenada-格林纳达-1809",
    "Guam-关岛-1671",
    "Guatemala-危地马拉-502",
    "Guinea-几内亚-224",
    "Guyana-圭亚那-592",
    "Haiti-海地-509",
    "Honduras-洪都拉斯-504",
    "Hongkong-香港-852",
    "Hungary-匈牙利-36",
    "Iceland-冰岛-354",
    "India-印度-91",
    "Indonesia-印度尼西亚-62",
    "Iran-伊朗-98",
    "Iraq-伊拉克-964",
    "Ireland-爱尔兰-353",
    "Israel-以色列-972",
    "Italy-意大利-39",
    "Ivory Coast-科特迪瓦-225",
    "Jamaica-牙买加-1876",
    "Japan-日本-81",
    "Jordan-约旦-962",
    "Kampuchea (Cambodia )-柬埔寨-855",
    "Kazakstan-哈萨克斯坦-327",
    "Kenya-肯尼亚-254",
    "Korea-韩国-82",
    "Kuwait-科威特-965",
    "Kyrgyzstan-吉尔吉斯坦-331",
    "Laos-老挝-856",
    "Latvia-拉脱维亚-371",
    "Lebanon-黎巴嫩-961",
    "Lesotho-莱索托-266",
    "Liberia-利比里亚-231",
    "Libya-利比亚-218",
    "Liechtenstein-列支敦士登--423",
    "Lithuania-立陶宛-370",
    "Luxembourg-卢森堡-352",
    "Macao-澳门-853",
    "Madagascar-马达加斯加-261",
    "Malawi-马拉维-265",
    "Malaysia-马来西亚-60",
    "Maldives-马尔代夫-960",
    "Mali-马里-223",
    "Malta-马耳他-356",
    "Mariana Is-马里亚那群岛-1670",
    "Martinique-马提尼克-596",
    "Mauritius-毛里求斯-230",
    "Mexico-墨西哥-52",
    "Moldova-摩尔多瓦-373",
    "Monaco-摩纳哥-377",
    "Mongolia-蒙古-976",
    "Montserrat Is-蒙特塞拉特岛-1664",
    "Morocco-摩洛哥-212",
    "Mozambique-莫桑比克-258",
    "Namibia-纳米比亚-264",
    "Nauru-瑙鲁-674",
    "Nepal-尼泊尔-977",
    "Netheriands Antilles-荷属安的列斯-599",
    "Netherlands-荷兰-31",
    "New Zealand-新西兰-64",
    "Nicaragua-尼加拉瓜-505",
    "Niger-尼日尔-227",
    "Nigeria-尼日利亚-234",
    "North Korea-朝鲜-850",
    "Norway-挪威-47",
    "Oman-阿曼-968",
    "Pakistan-巴基斯坦-92",
    "Panama-巴拿马-507",
    "Papua New Cuinea-巴布亚新几内亚-675",
    "Paraguay-巴拉圭-595",
    "Peru-秘鲁-51",
    "Philippines-菲律宾-63",
    "Poland-波兰-48",
    "Portugal-葡萄牙-351",
    "Puerto Rico-波多黎各-1787",
    "Qatar-卡塔尔-974",
    "Reunion-留尼旺-262",
    "Romania-罗马尼亚-40",
    "Russia-俄罗斯-7",
    "Saint Lueia-圣卢西亚-1758",
    "Saint Vincent-圣文森特岛-1784",
    "Samoa Eastern-东萨摩亚(美)-684",
    "Samoa Western-西萨摩亚-685",
    "San Marino-圣马力诺-378",
    "Sao Tome and Principe-圣多美和普林西比-239",
    "Saudi Arabia-沙特阿拉伯-966",
    "Senegal-塞内加尔-221",
    "Seychelles-塞舌尔-248",
    "Sierra Leone-塞拉利昂-232",
    "Singapore-新加坡-65",
    "Slovakia-斯洛伐克-421",
    "Slovenia-斯洛文尼亚-386",
    "Solomon Is-所罗门群岛-677",
    "Somali-索马里-252",
    "South Africa-南非-27",
    "Spain-西班牙-34",
    "SriLanka-斯里兰卡-94",
    "St.Lucia-圣卢西亚-1758",
    "St.Vincent-圣文森特-1784",
    "Sudan-苏丹-249",
    "Suriname-苏里南-597",
    "Swaziland-斯威士兰-268",
    "Sweden-瑞典-46",
    "Switzerland-瑞士-41",
    "Syria-叙利亚-963",
    "Taiwan-台湾省-886",
    "Tajikstan-塔吉克斯坦-992",
    "Tanzania-坦桑尼亚-255",
    "Thailand-泰国-66",
    "Togo-多哥-228",
    "Tonga-汤加-676",
    "Trinidad and Tobago-特立尼达和多巴哥-1809",
    "Tunisia-突尼斯-216",
    "Turkey-土耳其-90",
    "Turkmenistan-土库曼斯坦-993",
    "Uganda-乌干达-256",
    "Ukraine-乌克兰-380",
    "United Arab Emirates-阿拉伯联合酋长国-971",
    "United Kiongdom-英国-44",
    "United States of America-美国-1",
    "Uruguay-乌拉圭-598",
    "Uzbekistan-乌兹别克斯坦-233",
    "Venezuela-委内瑞拉-58",
    "Vietnam-越南-84",
    "Yemen-也门-967",
    "Yugoslavia-南斯拉夫-381",
    "Zimbabwe-津巴布韦-263",
    "Zaire-扎伊尔-243",
    "Zambia-赞比亚-260"
  ];
  const locationPickerToolbarTemplate =
    `<header class="bar bar-nav">
        <button class="button button-link pull-right close-picker">确定</button>
        <h1 class="title">所在地区</h1>
    </header>`;
  const locationPicker = $("#location-picker");
  const phoneNumber = $("#phone-number");

  const validateLi = $("#validate-li");
  const validateTimer = $('#validate-timer');
  const validateCode = $('#validate-code');
  const nextButton = $("#next-button");
  let targetCode = '123456';


  locationPicker.picker({
    toolbarTemplate: locationPickerToolbarTemplate,
    cols: [
      {
        textAlign: 'center',
        values: locations
      }
    ]
  });


  function isLegalChinaMobileNumber(phone) {
    // phone: String
    let chinaReg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
    if (phone === '' || phone.length !== 11 || !chinaReg.test(phone)) {
      // console.log("手机号码不能为空");
      return false;
    } else {
      return true;
    }
  }

  // bind click event
  nextButton.on('click', function (e) {
    validateTimer.val('test');
    console.log('location: ' + locationPicker.val());
    console.log('phone: ' + phoneNumber.val());
    let locationCodes = locationPicker.val().split('-');
    let codeNo = Number(locationCodes.pop());
    if (codeNo === 86) {
      // China
      if (!isLegalChinaMobileNumber(phoneNumber.val())) {
        // illegal
        $.alert('请输入正确的手机号码', '错误!');
      } else {
        // display validate li
        let timeCount = defaultTimer;
        validateLi.removeClass('hidden-li');
        nextButton.html('重新发送验证码');
        nextButton.addClass('disabled');
        // bind timer event
        let timerClock = setInterval(doTimerLoop, 1000); //一秒执行一次
        function doTimerLoop() {
          timeCount--;
          if (timeCount >= 0) {
            validateTimer.html(timeCount);
          } else {
            clearInterval(timerClock);
            nextButton.removeClass('disabled');
          }
        }

        // watch validate input
        validateCode.on('input propertychange', function () {
          // console.log('validate code: ' + validateCode.val());
          // check code
          if (validateCode.val() === targetCode) {
            $.alert('验证成功');
            console.log('validate code: ' + validateCode.val());
            // set cookie
            $.fn.cookie('phoneNumber', phoneNumber.val());
            $.fn.cookie('locationPicker', locationPicker.val());
            // link to identity register page
            location.href = './register.html';
          }
        });
        $.alert('已向' + phoneNumber.val() + '发送验证码，请注意查收', '成功!');
      }
    }
  });
});