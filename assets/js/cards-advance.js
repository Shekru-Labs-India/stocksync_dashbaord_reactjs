!function(){let o;o=(isDarkStyle?config.colors_dark:config.colors).headingColor;var e=document.querySelectorAll(".chart-progress"),e=(e&&e.forEach(function(e){var r=config.colors[e.dataset.color],t=e.dataset.series,a=e.dataset.progress_variant||"false",r=(r=r,t=t,{chart:{height:"true"==(a=a)?58:55,width:"true"==a?58:45,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==a?"50%":"30%"},dataLabels:{show:"true"==a,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:"Inter",color:o}},track:{background:config.colors_label.secondary}}},stroke:{lineCap:"round"},colors:[r],grid:{padding:{top:"true"==a?-12:-15,bottom:"true"==a?-17:-15,left:"true"==a?-17:-5,right:-15}},series:[t],labels:"true"==a?[""]:["Progress"]});new ApexCharts(e,r).render()}),document.querySelector("#webVisitors")),r={chart:{height:90,width:160,parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"85%",columnWidth:"35px",startingShape:"rounded",endingShape:"rounded",borderRadius:3,distributed:!0}},colors:[config.colors.primary],grid:{padding:{top:-40,left:-12},yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},series:[{data:[50,40,130,100,75,100,45,35]}],tooltip:{enabled:!1},legend:{show:!1},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}}};null!==e&&new ApexCharts(e,r).render();$(".ratings").rateYo({rating:4,starWidth:"20",spacing:"5px",rtl:isRtl,readOnly:!0});var e=document.querySelector(".credit-card-payment"),r=document.querySelector(".expiry-date-payment"),t=document.querySelectorAll(".cvv-code-payment");e&&new Cleave(e,{creditCard:!0,onCreditCardTypeChanged:function(e){document.querySelector(".card-payment-type").innerHTML=""!=e&&"unknown"!=e?'<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" class="cc-icon-image" height="28"/>':""}}),r&&new Cleave(r,{date:!0,delimiter:"/",datePattern:["m","y"]}),t&&t.forEach(function(e){new Cleave(e,{numeral:!0,numeralPositiveOnly:!0})})}();