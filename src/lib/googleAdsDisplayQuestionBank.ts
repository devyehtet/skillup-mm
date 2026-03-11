import type { MockExamQuestion } from "@/types";

const MYANMAR_DIGIT_MAP: Record<string, string> = {
  "၀": "0",
  "၁": "1",
  "၂": "2",
  "၃": "3",
  "၄": "4",
  "၅": "5",
  "၆": "6",
  "၇": "7",
  "၈": "8",
  "၉": "9",
};

const googleAdsDisplayQuestionBankSource = String.raw`
Google Ads Display Certification Practice Test (Part 1)
၁။ Google Display Ads ရဲ့ အဓိက ရည်ရွယ်ချက်က ဘာလဲ? A) Google Search မှာ ရှာဖွေနေသူတွေကို ကြော်ငြာပြရန် B) Website ပေါင်းစုံကို ကြည့်ရှုနေတဲ့ သုံးစွဲသူတွေဆီ မိမိ Brand ရောက်ရှိသွားစေရန် C) App Store မှာ App Download ဆွဲသူတွေကို ရှာရန် D) စာသားသက်သက် (Text-only) ကြော်ငြာများသာ ပြသရန်
၂။ Responsive Display Ads ရဲ့ အားသာချက်က ဘာလဲ? A) ကြော်ငြာပုံစံကို လူကိုယ်တိုင် တစ်ခုချင်းစီ ဆွဲစရာမလိုဘဲ Google က အလိုအလျောက် အရွယ်အစား ညှိပေးခြင်း B) Search Engine မှာပဲ ပေါ်လာခြင်း C) Video ကြော်ငြာများထက် ဈေးကြီးခြင်း D) တီထွင်ဖန်တီးမှု (Creativity) မလိုအပ်ခြင်း
၃။ မိမိ Website ဆီ ရောက်ဖူးထားတဲ့သူတွေကို ကြော်ငြာပြန်ပြတဲ့ နည်းလမ်းကို ဘာလို့ခေါ်သလဲ? A) Affinity Audience B) In-Market Audience C) Remarketing D) Demographic Targeting
၄။ ကားဝယ်ဖို့အတွက် ဝဘ်ဆိုဒ်တွေမှာ တက်ကြွစွာ ရှာဖွေနေတဲ့သူတွေကို Target ထားချင်ရင် ဘယ် Audience အမျိုးအစားကို သုံးသင့်သလဲ? A) In-Market Audience B) Affinity Audience C) Custom Intent D) Demographic
၅။ Brand Awareness (လူသိများစေဖို့) အတွက် အသင့်တော်ဆုံး Bidding Strategy က ဘာလဲ? A) Target CPA B) Maximize Conversions C) Target ROAS D) Target Impression Share (သို့မဟုတ်) Viewable CPM
၆။ Google Display Network (GDN) က ကမ္ဘာတစ်ဝှမ်းက အင်တာနက်အသုံးပြုသူ ဘယ်နှရာခိုင်နှုန်းလောက်ဆီ ရောက်နိုင်သလဲ? A) ၅၀% B) ၇၀% C) ၉၀% ကျော် D) ၁၀၀%
၇။ Smart Display Campaign ရဲ့ အဓိက အစိတ်အပိုင်း ၃ ခုက ဘာတွေလဲ? A) Manual Bidding, Manual Targeting, Manual Creative B) Automated Bidding, Automated Targeting, Automated Creative C) Search Ads, Video Ads, Shopping Ads D) Keywords, Placements, Topics
၈။ Google Ads မှာ "Optimization Score" က ဘာကို ပြသတာလဲ? A) ကြော်ငြာခ ဘယ်လောက် ကုန်သွားပြီလဲဆိုတာ B) Campaign တစ်ခုရဲ့ စွမ်းဆောင်ရည်ကို မြှင့်တင်ဖို့ အကြံပြုချက် (Recommendations) များ C) ပြိုင်ဘက်တွေရဲ့ အဆင့် (Rank) D) Google ရဲ့ ရှယ်ယာဈေးနှုန်း
၉။ Display Ads မှာ "Viewable Impression" လို့ သတ်မှတ်ဖို့အတွက် ဘယ်လို အခြေအနေ ရှိရမလဲ? A) ကြော်ငြာကို တစ်စက္ကန့်မျှ မြင်လိုက်ရုံဖြင့် B) ကြော်ငြာရဲ့ ၅၀% ကို အနည်းဆုံး ၁ စက္ကန့်ကြာ (Video ဆိုရင် ၂ စက္ကန့်) မြင်တွေ့ရခြင်း C) ကြော်ငြာကို တစ်စက္ကန့်အတွင်း ၃ ကြိမ် နှိပ်ခြင်း D) Website ရဲ့ အောက်ဆုံးအထိ Scroll ဆွဲခြင်း
၁၀။ Budget အကန့်အသတ်ရှိပြီး Conversion (အရောင်း) များများရချင်ရင် ဘယ် Bidding ကို သုံးသင့်လဲ? A) Maximize Conversions B) Manual CPC C) Maximize Clicks D) Viewable CPM

Google Ads Display Certification Practice Test (Part 2)
၁၁။ အားကစားဝါသနာပါသူများ သို့မဟုတ် ခရီးသွားဝါသနာပါသူများကဲ့သို့ "လူနေမှုပုံစံ (Lifestyle)" ကို အခြေခံပြီး Target ထားတာကို ဘာလို့ခေါ်သလဲ? A) In-Market Audiences B) Affinity Audiences C) Demographic Targeting D) Custom Intent
၁၂။ Google Display Ads မှာ "Placements" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? A) ကြော်ငြာထဲမှာ သုံးမယ့် ပုံရိပ်များ B) ကြော်ငြာပေါ်လာမယ့် သတ်မှတ်ထားသော Website သို့မဟုတ် YouTube Channel များ C) ကြော်ငြာကို နှိပ်လိုက်ရင် ရောက်သွားမယ့် Landing Page D) ကြော်ငြာရေးသားတဲ့ စာသားနေရာ
၁၃။ "Dynamic Remarketing" က သာမန် Remarketing ထက် ဘာပိုထူးခြားသလဲ? A) ပိုပြီး ဈေးသက်သာခြင်း B) စာသားသက်သက်ပဲ ပြသခြင်း C) သုံးစွဲသူ ကြည့်ရှုသွားဖူးတဲ့ ပစ္စည်းအတိအကျကို ကြော်ငြာထဲမှာ ပြန်ပြပေးခြင်း D) Google Search မှာပဲ ပေါ်လာခြင်း
၁၄။ Responsive Display Ads ဖန်တီးတဲ့အခါ Headline အရှည် (Long Headline) ကို စာလုံးရေ ဘယ်လောက်အထိ ရေးလို့ရသလဲ? A) ၂၅ လုံး B) ၃၀ လုံး C) ၉၀ လုံး D) ၁၅၀ လုံး
၁၅။ "Conversions" များများရအောင် Google ရဲ့ AI ကို အသုံးပြုပြီး အလိုအလျောက် Target ရှာပေးတဲ့ စနစ်က ဘာလဲ? A) Manual Targeting B) Optimized Targeting C) Placement Exclusion D) Negative Keywords
၁၆။ ကြော်ငြာခ ၁ ကျပ် သုံးတိုင်း အရောင်းအမြတ် ဘယ်လောက်ပြန်ရလဲ (ဥပမာ- ၅ ဆ) ဆိုတာကို တိုင်းတာတဲ့ Metric က ဘာလဲ? A) CTR (Click-Through Rate) B) CPC (Cost Per Click) C) ROAS (Return on Ad Spend) D) CPM (Cost Per Mille)
၁၇။ Google Ads မှာ "Similar Audiences" (ယခုအခါ Audience Expansion ဟုခေါ်သည်) ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ? A) လက်ရှိ Customer တွေနဲ့ စရိုက်လက္ခဏာတူညီတဲ့ လူသစ်တွေကို ရှာဖွေပေးရန် B) ပြိုင်ဘက်တွေရဲ့ Customer တွေကို ခိုးယူရန် C) Website ထဲက လူတွေကို ဖယ်ထုတ်ရန် D) အသက် ၆၀ ကျော်သူများကိုသာ ပြရန်
၁၈။ စီးပွားရေးလုပ်ငန်းတစ်ခုက Brand အသစ်တစ်ခုကို မိတ်ဆက်ချင်ပြီး လူအများကြီး မြင်စေချင်ရင် ဘယ် Campaign အမျိုးအစားက အသင့်တော်ဆုံးလဲ? A) Search Campaign B) Display Campaign C) Shopping Campaign D) App Campaign
၁၉။ Display Ad တစ်ခုမှာ လူတွေရဲ့ စိတ်ဝင်စားမှုကို ရဖို့ အရေးကြီးဆုံး အစိတ်အပိုင်းက ဘာလဲ? A) Privacy Policy Link B) အရည်အသွေးမြင့်ပြီး ဆွဲဆောင်မှုရှိသော ပုံရိပ် (High-quality Images) C) ကုမ္ပဏီရဲ့ မှတ်ပုံတင်အမှတ် D) Website ရဲ့ Footer စာသားများ
၂၀။ Google Ads မှာ Performance Planner ကို ဘာအတွက် သုံးသင့်သလဲ? A) ကြော်ငြာပုံ ဒီဇိုင်းဆွဲရန် B) Campaign ရဲ့ ရှေ့လာမယ့်လတွေအတွက် Budget နဲ့ ရလဒ်တွေကို ခန့်မှန်းတွက်ချက်ရန် C) ပြိုင်ဘက်တွေရဲ့ Keywords တွေကို ခိုးကြည့်ရန် D) အကောင့် Password ပြောင်းရန်

Google Ads Display Certification Practice Test (Part 3)
၂၁။ Google Display Ads မှာ "Creative Assets" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? A) ကြော်ငြာအတွက် အသုံးပြုတဲ့ Keywords များ B) ကြော်ငြာမှာ သုံးမယ့် ပုံရိပ် (Images)၊ လိုဂို (Logos)၊ ဗီဒီယို (Videos) နဲ့ စာသား (Headlines) များ C) ကြော်ငြာခ ပေးချေရမယ့် ငွေပမာဏ D) ကြော်ငြာပြသရမယ့် အချိန်ဇယား
၂၂။ Responsive Display Ads မှာ Google က Headline နဲ့ Description တွေကို ဘယ်လို ပေါင်းစပ်ပေးတာလဲ? A) ကြော်ငြာရှင် ရေးထားတဲ့ အစီအစဉ်အတိုင်းပဲ ပြခြင်း B) Machine Learning ကိုသုံးပြီး သုံးသူနဲ့ အကိုက်ညီဆုံးဖြစ်မယ့် ပေါင်းစပ်မှုကို ရှာဖွေပြသခြင်း C) အက္ခရာစဉ် (A-Z) အတိုင်း ပြခြင်း D) စာလုံးရေ အနည်းဆုံး ပေါင်းစပ်မှုကိုသာ ပြခြင်း
၂၃။ "Custom Intent Audiences" ဆိုတာ ဘာလဲ? A) အသက်အရွယ်ကိုသာ သတ်မှတ်ခြင်း B) သတ်မှတ်ထားသော Keyword သို့မဟုတ် URL များကို ရှာဖွေဖူးသူများကို Target ထားခြင်း C) တီဗီကြည့်သူများကို Target ထားခြင်း D) မိမိ Website ထဲက ဝယ်ပြီးသားလူတွေကို ဖယ်ထုတ်ခြင်း
၂၄။ Google Ads ရဲ့ "Display Network" မှာ ပါဝင်တဲ့ Google ရဲ့ ကိုယ်ပိုင် Platform တွေက ဘာတွေလဲ? A) Google Search, Maps, Drive B) YouTube, Gmail, Google Play C) Facebook, Instagram, Twitter D) Amazon, eBay, Alibaba
၂၅။ အောက်ပါတို့အနက် ဘယ်အချက်က "Targeting" မဟုတ်သလဲ? A) Keywords B) Placements C) Automated Bidding D) Topics
၂၆။ "Conversion Tracking" ကို ဘာကြောင့် သတ်မှတ် (Set up) သင့်သလဲ? A) ကြော်ငြာကို ဘယ်နှစ်ယောက် နှိပ်လဲဆိုတာ သိရုံသက်သက်အတွက် B) ဘယ်ကြော်ငြာက အရောင်း (Sales) သို့မဟုတ် Lead (အဆက်အသွယ်) တွေ တကယ်ဖြစ်စေလဲဆိုတာ သိရှိရန် C) Website ရဲ့ Speed ကို မြှင့်တင်ရန် D) Google မှာ ပိုက်ဆံပိုသုံးဖို့အတွက်
၂၇။ Campaign တစ်ခုရဲ့ "Targeting Expansion" (သို့မဟုတ် Optimized Targeting) က ဘာကို ကူညီပေးတာလဲ? A) မိမိသတ်မှတ်ထားတဲ့ Target အပြင် Conversion ရနိုင်ခြေရှိတဲ့ လူအသစ်တွေကိုပါ ရှာဖွေပေးခြင်း B) ကြော်ငြာခကို နေ့ချင်းပြီး ကုန်သွားစေခြင်း C) ပြိုင်ဘက်တွေရဲ့ အကောင့်ကို ပိတ်ပစ်ခြင်း D) စာသားတွေကို အလိုအလျောက် ဘာသာပြန်ပေးခြင်း
၂၈။ Branding လုပ်ချင်တဲ့ စီးပွားရေးလုပ်ငန်းတစ်ခုအတွက် ဘယ် Metric က အရေးကြီးဆုံးလဲ? A) CPC (Cost Per Click) B) Conversions C) Impressions and Reach D) Average Position
၂၉။ Responsive Display Ad တစ်ခုမှာ ပုံရိပ် (Images) ဘယ်နှစ်ပုံအထိ အများဆုံး တင်လို့ရသလဲ? A) ၅ ပုံ B) ၁၀ ပုံ C) ၁၅ ပုံ D) ၂၀ ပုံ
၃၀။ "Frequency Capping" ဆိုတာ ဘာလဲ? A) ကြော်ငြာပြမယ့် နေ့ရက်ကို ကန့်သတ်ခြင်း B) သုံးစွဲသူ တစ်ယောက်တည်းကို မိမိကြော်ငြာ ခဏခဏ မပေါ်လာအောင် အကြိမ်ရေ ကန့်သတ်ခြင်း C) ကြော်ငြာခ တစ်ချက်နှိပ်ရင် ပေးရမယ့် ပမာဏကို ကန့်သတ်ခြင်း D) ပုံရဲ့ အရွယ်အစားကို ကန့်သတ်ခြင်း

Google Ads Display Certification Practice Test (Part 4)
၃၁။ Google Display Ads မှာ Smart Bidding ကို သုံးရခြင်းရဲ့ အဓိက အကျိုးကျေးဇူးက ဘာလဲ? A) ကြော်ငြာခကို အမြဲတမ်း အနည်းဆုံး ဖြစ်စေရန် B) Machine Learning ကိုသုံးပြီး တစ်ချက်နှိပ်တိုင်းမှာ Conversion ရနိုင်ခြေပေါ်မူတည်၍ ဈေးနှုန်း (Bid) ကို အလိုအလျောက် ညှိပေးရန် C) Website ရဲ့ ပုံတွေကို အလိုအလျောက် ပြင်ပေးရန် D) Keywords တွေကို ဖယ်ထုတ်ပေးရန်
၃၂။ "Cost-per-Acquisition (CPA)" ဆိုတာ ဘာလဲ? A) ကြော်ငြာကို တစ်ကြိမ်ပြသခ B) ကြော်ငြာကို တစ်ချက်နှိပ်ခ C) Conversion (ဝယ်ယူမှု သို့မဟုတ် စာရင်းသွင်းမှု) တစ်ခုရရှိရန် ကုန်ကျသော ပျမ်းမျှကုန်ကျစရိတ် D) ဗီဒီယိုကြည့်ရှုခ
၃၃။ Remarketing ကို သုံးတဲ့အခါ "Audience Duration" ဆိုတာ ဘာလဲ? A) ကြော်ငြာတစ်ခုကို ပြသတဲ့ ကြာချိန် B) သုံးစွဲသူတစ်ယောက်က Website ကို ရောက်ပြီးနောက် Remarketing List ထဲမှာ ဘယ်လောက်ကြာကြာ ရှိနေမလဲဆိုတဲ့ သတ်မှတ်ချက် C) ဗီဒီယိုကြော်ငြာတစ်ခုရဲ့ စက္ကန့်အရေအတွက် D) Google က စာမေးပွဲဖြေခွင့်ပေးတဲ့ အချိန်
၃၄။ "Content Exclusions" ဆိုတာ ဘာလဲ? A) မိမိကြော်ငြာကို အသက် ၁၈ နှစ်အောက် မပြရန် B) မိမိ Brand ပုံရိပ်ကို ထိခိုက်စေနိုင်တဲ့ (ဥပမာ- ကြမ်းတမ်းသော သတင်းများ) Content တွေမှာ ကြော်ငြာမပေါ်အောင် တားဆီးခြင်း C) ပုံတွေရဲ့ အရွယ်အစားကို ဖယ်ထုတ်ခြင်း D) စာသားတွေကို ပြင်ဆင်ခြင်း
၃၅။ Google Ads မှာ "Recommendations Page" ရဲ့ အသုံးဝင်ပုံက ဘာလဲ? A) Campaign ရဲ့ စွမ်းဆောင်ရည် တက်လာစေဖို့ Google က ပေးတဲ့ အလိုအလျောက် အကြံပြုချက်များကို ကြည့်နိုင်ခြင်း B) ငွေပေးချေမှုမှတ်တမ်းကို ကြည့်ရန် C) အခြားပြိုင်ဘက်တွေရဲ့ Password ကို ခန့်မှန်းရန် D) Google ဝန်ထမ်းတွေနဲ့ စကားပြောရန်
၃၆။ အောက်ပါတို့အနက် ဘယ်အရာက Display Ad တစ်ခုရဲ့ Performance ကို ဆုံးဖြတ်ပေးတာလဲ? A) CTR, Conversion Rate, ROI B) ဓာတ်ပုံထဲက လူအရေအတွက် C) Website ရဲ့ Domain အမည် အတိုအရှည် D) အသုံးပြုတဲ့ ကွန်ပျူတာ အမျိုးအစား
၃၇။ "View-through Conversion" က ဘယ်လိုအချိန်မှာ ဖြစ်တာလဲ? A) လူတစ်ယောက်က ကြော်ငြာကို နှိပ်ပြီး ဝယ်လိုက်တဲ့အချိန် B) လူတစ်ယောက်က ကြော်ငြာကို မြင်လိုက်ရုံပဲ (မနှိပ်ဘဲ) နောက်မှ တခြားလမ်းကြောင်းကနေ ဝယ်လိုက်တဲ့အချိန် C) လူတစ်ယောက်က ကြော်ငြာကို ၂ ခါ နှိပ်တဲ့အချိန် D) ကြော်ငြာကို Google က ဖျက်လိုက်တဲ့အချိန်
၃၈။ Google Display Ads မှာ "Standard Display Campaign" နဲ့ "Smart Display Campaign" ဘာကွာသလဲ? A) Smart Campaign က Manual ထိန်းချုပ်မှု နည်းပြီး Google ရဲ့ Automation ကို ပိုသုံးခြင်း B) Standard Campaign က ဈေးပိုကြီးခြင်း C) Smart Campaign က စာသားသက်သက်ပဲ ပြခြင်း D) ဘာမှမကွာခြားပါ
၃၉။ အကယ်၍ စီးပွားရေးလုပ်ငန်းတစ်ခုက "Conversion Value" (အရောင်းပမာဏ တန်ဖိုး) ကို အမြင့်ဆုံး ရချင်ရင် ဘယ် Smart Bidding ကို သုံးသင့်သလဲ? A) Maximize Clicks B) Target ROAS (Return on Ad Spend) C) Manual CPC D) Viewable CPM
၄၀။ "Responsive Display Ads" ထဲမှာ Video တွေကို ထည့်သွင်းလို့ ရပါသလား? A) မရပါ B) Google က ခွင့်မပြုပါ C) ရပါသည် (အများဆုံး Video ၅ ခုအထိ ထည့်သွင်းနိုင်သည်) D) YouTube Link မဟုတ်ရင် မရပါ

Google Ads Display Certification Practice Test (Part 5)
၄၁။ Google Display Ads မှာ "Topics Targeting" ဆိုတာ ဘာလဲ? A) သီးခြား Website တစ်ခုတည်းကို ရွေးချယ်ခြင်း B) စာမျက်နှာရဲ့ အကြောင်းအရာ (ဥပမာ- ကျန်းမာရေး၊ နည်းပညာ) ပေါ်မူတည်ပြီး သက်ဆိုင်ရာ Website များစွာမှာ တစ်ပြိုင်နက် ပြသခြင်း C) လူတစ်ယောက်ရဲ့ အမည်ကို ရိုက်ထည့်ခြင်း D) အီးမေးလ် ပို့ခြင်း
၄၂။ Website တစ်ခုမှာ ကြော်ငြာပြဖို့ နေရာလွတ်ရှိနေရင် Google က ဘယ်သူ့ကြော်ငြာပြမလဲဆိုတာကို ဘယ်လိုဆုံးဖြတ်သလဲ? A) အရင်ဆုံး လျှောက်ထားသူကို အရင်ပေးခြင်း B) Real-time Auction (ချက်ချင်း လေလံဆွဲခြင်း) စနစ်ဖြင့် C) မဲနှိုက်ခြင်းဖြင့် D) ကုမ္ပဏီကြီးလေ အရင်ပြလေ စနစ်ဖြင့်
၄၃။ "Custom Affinity Audiences" ဖန်တီးတဲ့အခါ အောက်ပါတို့အနက် ဘယ်အချက်ကို အခြေခံလို့ရသလဲ? A) Interests, URLs, နှင့် Apps B) ဖုန်းနံပါတ် သီးသန့် C) နိုင်ငံသား စိစစ်ရေးကတ် D) ဘဏ်စာရင်း နံပါတ်
၄၄။ Google Ads မှာ "Exclusions" ကို ဘာကြောင့် သုံးသင့်သလဲ? A) မသက်ဆိုင်တဲ့သူတွေကို ကြော်ငြာမပြဘဲ ပိုက်ဆံမဖြုန်းမိစေရန် B) Google ကို အလုပ်ပိုပေးရန် C) ကြော်ငြာကို ပိုပြီး ဈေးကြီးအောင်လုပ်ရန် D) Website ကို ပိတ်ပစ်ရန်
၄၅။ Display Campaign တစ်ခုရဲ့ "Reach" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? A) ကြော်ငြာကို နှိပ်တဲ့ အကြိမ်ရေ B) ကြော်ငြာကို မြင်တွေ့ရတဲ့ သီးခြားလူဦးရေ (Unique users) C) ကြော်ငြာကို ပြင်ဆင်တဲ့ အကြိမ်ရေ D) Website ရဲ့ အမြန်နှုန်း
၄၆။ "Responsive Display Ads" မှာ Description ကို အများဆုံး ဘယ်နှစ်ခုအထိ ထည့်လို့ရသလဲ? A) ၁ ခု B) ၃ ခု C) ၅ ခု D) ၁၀ ခု
၄၇။ အောက်ပါတို့အနက် ဘယ်အရာက Smart Bidding ရဲ့ အစိတ်အပိုင်း မဟုတ်သလဲ? A) Target CPA B) Target ROAS C) Manual CPC D) Maximize Conversion Value
၄၈။ စီးပွားရေးလုပ်ငန်းတစ်ခုက သူတို့ရဲ့ App ကို လူတွေအသုံးများအောင် လုပ်ချင်ရင် ဘယ်လို Display Ad မျိုးကို သုံးသင့်သလဲ? A) App Install Ads B) Search Ads C) Newspaper Ads D) Radio Ads
၄၉။ Display Campaign မှာ "Ad Scheduling" လုပ်ခြင်းဖြင့် ဘာကို ထိန်းချုပ်နိုင်သလဲ? A) ကြော်ငြာပြမယ့် နေ့ရက်နဲ့ အချိန်များကို သတ်မှတ်ခြင်း B) ကြော်ငြာရဲ့ အရောင်ကို ပြောင်းခြင်း C) Google ဝန်ထမ်းတွေရဲ့ အလုပ်ချိန်ကို သတ်မှတ်ခြင်း D) ပြိုင်ဘက်တွေရဲ့ အချိန်ကို ခိုးယူခြင်း
၅၀။ "Keyword Targeting" ကို Display Network မှာ သုံးတဲ့အခါ ဘာဖြစ်လာမလဲ? A) Google Search မှာပဲ ပေါ်လာမယ် B) ထို Keyword နဲ့ သက်ဆိုင်တဲ့ Website စာမျက်နှာတွေမှာ ကြော်ငြာပေါ်လာမယ် C) ကြော်ငြာကို လူတွေ ရှာလို့မရတော့ဘူး D) စာသားတွေ ပျောက်သွားမယ်

Google Ads Display Certification Practice Test (Part 6)
၅၁။ Branding အတွက် အဓိကထားတဲ့ Campaign မှာ ဘယ် Metric ကို အဓိက စောင့်ကြည့်သင့်သလဲ? A) Impression Share B) Conversion Rate C) Bounce Rate D) Sales Volume
၅၂။ "Audience Expansion" (သို့မဟုတ် Optimized Targeting) ကို ပိတ်ထားရင် ဘာဖြစ်မလဲ? A) ကြော်ငြာ လုံးဝ မပြတော့ပါ B) သင်ကိုယ်တိုင် သတ်မှတ်ထားတဲ့ Target ထဲက လူတွေကိုပဲ တိတိကျကျ ပြပါမယ် C) Google က သင့်ကို ဒဏ်ရိုက်ပါမယ် D) Conversion တွေ အလိုအလျောက် တိုးလာပါမယ်
၅၃။ Display Ads မှာ "Asset Reporting" က ဘာကို ပြသတာလဲ? A) ဘယ်ပုံ သို့မဟုတ် ဘယ်စာသားက Performance အကောင်းဆုံးလဲဆိုတာကို ခွဲခြားပြသခြင်း B) ကုမ္ပဏီရဲ့ ပိုင်ဆိုင်မှု စာရင်း C) ဝန်ထမ်းတွေရဲ့ နာမည် D) Google ရဲ့ ရုံးခန်းတည်နေရာ
၅၄။ Google Display Ads ကို ဘယ်နေရာတွေမှာ တွေ့နိုင်သလဲ? A) Google Search Result Page သီးသန့် B) သတင်း Website များ၊ Blog များ၊ YouTube နှင့် Gmail C) အော့ဖ်လိုင်း မဂ္ဂဇင်းများ D) ရုပ်မြင်သံကြား ကြော်ငြာများ
၅၅။ "Click-through Rate (CTR)" ကို ဘယ်လို တွက်ချက်သလဲ? A) (Total Clicks / Total Impressions) x 100 B) (Total Sales / Total Clicks) x 100 C) Total Budget / 12 D) Impressions + Clicks
၅၆။ Google Ads ရဲ့ "Safety Settings" မှာ ဘာတွေ ပါဝင်သလဲ? A) Website ရဲ့ Password ပြောင်းခြင်း B) ကြော်ငြာကို မသင့်တော်သော အကြောင်းအရာများ (ဥပမာ - ဘေးအန္တရာယ်ဖြစ်စေသော အကြောင်းအရာ) ဘေးတွင် မပြရန် တားဆီးခြင်း C) ကွန်ပျူတာကို ဗိုင်းရပ်စ် ကာကွယ်ခြင်း D) ဘဏ်ကတ်ကို သိမ်းဆည်းခြင်း
၅၇။ "Direct Response" Campaign တစ်ခုအတွက် အရေးကြီးဆုံးက ဘာလဲ? A) Brand Logo ကြီးကြီးပြရန် B) ရှင်းလင်းသော Call-to-Action (ဥပမာ- အခုပဲဝယ်ပါ) ပါဝင်ရန် C) ပုံတွေ အများကြီး သုံးရန် D) စာလုံးအလှတွေ သုံးရန်
၅၈။ "Contextual Targeting" က ဘာကို အခြေခံသလဲ? A) လူတစ်ယောက်ရဲ့ အသက် B) Website စာမျက်နှာပေါ်ရှိ အကြောင်းအရာ (Keywords သို့မဟုတ် Topics) C) သုံးစွဲသူရဲ့ အိမ်လိပ်စာ D) ဖုန်းအမျိုးအစား
၅၉။ Display Ads မှာ "In-stream Video" ကို ဘယ်မှာ တွေ့ရတတ်သလဲ? A) YouTube Video တွေရဲ့ အစ၊ အလယ် သို့မဟုတ် အဆုံးမှာ B) သတင်းစာထဲမှာ C) ရေဒီယိုမှာ D) SMS ထဲမှာ
၆၀။ "Google Analytics" နဲ့ Google Ads ကို ချိတ်ဆက်ခြင်းဖြင့် ဘာအကျိုးကျေးဇူး ရသလဲ? A) Website ပေါ်မှာ သုံးစွဲသူတွေ ဘာလုပ်နေလဲဆိုတာကို ပိုမိုအသေးစိတ် သိနိုင်ခြင်း B) Google က ပိုက်ဆံ ပိုပေးခြင်း C) Website ကို အလိုအလျောက် ဒီဇိုင်းဆွဲပေးခြင်း D) အင်တာနက် အခမဲ့ ရခြင်း

Google Ads Display Certification Practice Test (Part 7)
၆၁။ Google Ads မှာ "Auto-tagging" ကို ဘာကြောင့် အသုံးပြုသင့်သလဲ? A) ကြော်ငြာစာသားကို အလိုအလျောက် ပြင်ပေးရန် B) Google Analytics ထဲမှာ Campaign အချက်အလက်တွေကို တိတိကျကျ ခြေရာခံနိုင်ရန် C) ကြော်ငြာပုံတွေကို Tag တွဲရန် D) ပိုက်ဆံ အလိုအလျောက် ပေးချေရန်
၆၂။ "Display Ad" တစ်ခုရဲ့ "Quality Score" ကို ဘယ်အရာတွေက လွှမ်းမိုးသလဲ? A) Click-through Rate (CTR), Ad Relevance, နှင့် Landing Page Experience B) ကုမ္ပဏီရဲ့ သက်တမ်း C) ကြော်ငြာရှင်ရဲ့ နေရပ်လိပ်စာ D) အသုံးပြုထားတဲ့ အရောင်အရေအတွက်
၆၃။ Campaign တစ်ခုမှာ "Conversion Rate" ကျနေရင် အရင်ဆုံး ဘာကို စစ်ဆေးသင့်သလဲ? A) ကြော်ငြာရဲ့ အရွယ်အစား B) Landing Page (ကြော်ငြာနှိပ်ပြီး ရောက်သွားတဲ့ စာမျက်နှာ) သည် သုံးစွဲသူ ရှာဖွေနေသည့်အရာနှင့် ကိုက်ညီမှု ရှိမရှိ C) Google ရဲ့ ရှယ်ယာဈေးနှုန်း D) အင်တာနက် လိုင်းကောင်းမကောင်း
၆၄။ "Lifecycle Stages" အရ အဝယ်ဖြစ်ဖို့ အနီးစပ်ဆုံး လူတွေကို Target ထားချင်ရင် ဘယ် Audience ကို သုံးမလဲ? A) Affinity Audiences B) In-Market Audiences C) Demographic Targeting D) Broad Interest
၆၅။ "First-party data" ဆိုတာ ဘာလဲ? A) Google ဆီက ဝယ်ယူတဲ့ အချက်အလက် B) မိမိလုပ်ငန်းဆီကို သုံးစွဲသူတွေ တိုက်ရိုက်ပေးထားတဲ့ အချက်အလက် (ဥပမာ- Email list) C) ပြိုင်ဘက်တွေဆီက ရတဲ့ အချက်အလက် D) သတင်းစာထဲက အချက်အလက်
၆၆။ "Responsive Display Ads" ရဲ့ အဓိက ရည်ရွယ်ချက်က ဘာလဲ? A) စာသားတွေကိုပဲ ပြသရန် B) Website အမျိုးမျိုးရဲ့ နေရာလွတ်တွေမှာ ကိုက်ညီအောင် Ad format ကို အလိုအလျောက် ပြောင်းလဲပေးရန် C) Video တွေကို ပိတ်ထားရန် D) လူကိုယ်တိုင် ဒီဇိုင်းဆွဲရတာထက် ပိုဈေးကြီးရန်
၆၇။ "View-through Conversion" window ကို ဘယ်နှရက်အထိ သတ်မှတ်လို့ရသလဲ? A) ၁ ရက် မှ ၃၀ ရက်အထိ B) ၁ နာရီသာ C) ၁ နှစ် D) သတ်မှတ်၍ မရပါ
၆၈။ Google Display Ads မှာ "Targeting Expansion" လုပ်ခြင်းရဲ့ အကျိုးကျေးဇူးက ဘာလဲ? A) သင်သတ်မှတ်ထားတဲ့ Audience နဲ့ တူညီတဲ့ စရိုက်ရှိပြီး Conversion ရနိုင်တဲ့ လူသစ်တွေဆီ ရောက်ရှိခြင်း B) ကြော်ငြာခကို ချွေတာခြင်း C) ပုံတွေကို ပိုလှအောင်လုပ်ခြင်း D) စာလုံးပေါင်း အမှားပြင်ပေးခြင်း
၆၉။ "Conversion Value" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? A) Conversion တစ်ခုရဲ့ ငွေကြေးတန်ဖိုး (ဥပမာ- ပစ္စည်းတစ်ခု ရောင်းရလျှင် ရရှိမည့် အမြတ်) B) ကြော်ငြာနှိပ်တဲ့ အကြိမ်ရေ C) ပုံရဲ့ အရည်အသွေး D) Google ကို ပေးရတဲ့ အခွန်
၇၀။ "Location Targeting" မှာ ဘာတွေကို ရွေးချယ်လို့ရသလဲ? A) နိုင်ငံ၊ မြို့၊ သို့မဟုတ် သတ်မှတ်ထားသော နေရာ၏ အချင်းဝက် (Radius) B) အိမ်အမှတ် တစ်ခုချင်းစီ C) ဖုန်းနံပါတ် သီးသန့် D) ကွန်ပျူတာ အမှတ်တံဆိပ်

Google Ads Display Certification Practice Test (Part 8)
၇၁။ "Display Selection" ပါဝင်သော Search Campaign ဆိုသည်မှာ ဘာလဲ? A) Search Ads များကို Google က ပိုလျှံနေသော Display နေရာများတွင်ပါ ပြသပေးခြင်း B) Facebook မှာ ကြော်ငြာပြခြင်း C) ပုံတွေကိုပဲ သုံးပြီး ရှာဖွေခြင်း D) Google Search ကို ပိတ်ထားခြင်း
၇၂။ "Performance Planner" ကို အသုံးပြုခြင်းဖြင့် ဘယ်လို အကြံပြုချက်မျိုး ရနိုင်သလဲ? A) ပုံအသစ်များ ဆွဲရန် B) သတ်မှတ်ထားတဲ့ Budget အတွင်း Conversion အများဆုံးရမည့် နည်းလမ်းများ C) ဝန်ထမ်းအသစ် ခန့်ရန် D) Website domain ပြောင်းရန်
၇၃။ Display Campaign တစ်ခုမှာ "Placement Exclusion" လုပ်ခြင်းက ဘာကို ကူညီသလဲ? A) မိမိကြော်ငြာနှင့် မကိုက်ညီသော Website များတွင် ကြော်ငြာမပေါ်အောင် တားဆီးရန် B) Website အသစ်များ ရှာရန် C) Google Ads အကောင့်ကို ဖျက်ရန် D) ပိုက်ဆံ ပိုသုံးရန်
၇၄။ "Smart Display Campaign" အတွက် အနည်းဆုံး လိုအပ်ချက်က ဘာလဲ? A) ပြီးခဲ့တဲ့ ရက် ၃၀ အတွင်း Search မှာ Conversion ၅၀ (သို့မဟုတ်) Display မှာ ၁၅ ခု ရှိထားရမည် B) Website မရှိရပါ C) ဝန်ထမ်း ၁၀၀ ရှိရမည် D) Google ရဲ့ ရှယ်ယာရှင် ဖြစ်ရမည်
၇၅။ "Attribution Model" ဆိုတာ ဘာလဲ? A) ကြော်ငြာရဲ့ အရောင်ကို ရွေးချယ်ခြင်း B) ဝယ်ယူမှုခရီးစဉ်မှာ ဘယ် Touchpoint (ကြော်ငြာ) က အရေးပါလဲဆိုတာကို ခွဲဝေ သတ်မှတ်ခြင်း C) ဖုန်းခေါ်ဆိုမှုကို ပိတ်ခြင်း D) အီးမေးလ် ပို့ခြင်း
၇၆။ "Dynamic Display Ads" က ဘယ်လုပ်ငန်းအမျိုးအစားအတွက် အသင့်တော်ဆုံးလဲ? A) ပစ္စည်းအမျိုးအစား ထောင်နဲ့ချီရှိတဲ့ E-commerce လုပ်ငန်းများ B) ပစ္စည်းတစ်ခုတည်း ရောင်းတဲ့သူများ C) စာရေးဆရာများ D) အစိုးရရုံးများ
၇၇။ Google Display Ads မှာ ဘယ် "Bid Strategy" က အလိုအလျောက် အလုပ်လုပ်တာလဲ? A) Manual CPC B) Smart Bidding (Target CPA, Target ROAS, etc.) C) Fixed CPM D) အားလုံးသည် Manual ဖြစ်သည်
၇၈။ Campaign တစ်ခုမှာ "Interactions" ဆိုတာ ဘာလဲ? A) Clicks, Views, သို့မဟုတ် Engagement (ကြော်ငြာနှင့် ပတ်သက်သည့် လုပ်ဆောင်ချက်များ) B) ဖုန်းပျက်သွားခြင်း C) Google ကို ဖုန်းဆက်ခြင်း D) Website ကို ဖျက်ခြင်း
၇၉။ "Target ROAS" ကို သုံးဖို့အတွက် ဘာလိုအပ်သလဲ? A) Conversion တွေကို တန်ဖိုး (Value) သတ်မှတ်ထားရန် လိုအပ်သည် B) စာသားများများ ရေးရန် C) ပုံအမည်းရောင် သုံးရန် D) Credit Card ၂ ကတ် ရှိရန်
၈၀။ Google Ads Certification ရဖို့အတွက် စာမေးပွဲမှာ အနည်းဆုံး ဘယ်နှစ်ရာခိုင်နှုန်း ရရမလဲ? A) ၅၀% B) ၇၀% C) ၈၀% D) ၉၀%
`;

function normalizeMyanmarDigits(value: string) {
  return value.replace(/[၀-၉]/g, (digit) => MYANMAR_DIGIT_MAP[digit] ?? digit);
}

function parseQuestionNumber(line: string) {
  const normalized = normalizeMyanmarDigits(line);
  const match = normalized.match(/^(\d+)\။\s*(.*)$/);

  if (!match) {
    return null;
  }

  return {
    number: Number(match[1]),
    text: match[2]?.trim() ?? "",
  };
}

function extractInlineOptions(line: string) {
  const markers = ["A)", "B)", "C)", "D)"] as const;
  const indexes = markers.map((marker, index) => line.indexOf(marker, index === 0 ? 0 : 1));

  if (indexes.some((index) => index === -1)) {
    return null;
  }

  const question = line.slice(0, indexes[0]).trim();

  if (!question) {
    return null;
  }

  const options = markers.map((marker, index) => {
    const start = indexes[index] + marker.length;
    const end = indexes[index + 1] ?? line.length;

    return line.slice(start, end).trim();
  });

  if (options.some((option) => !option)) {
    return null;
  }

  return { question, options };
}

function parseGoogleAdsDisplayQuestions(): MockExamQuestion[] {
  const lines = googleAdsDisplayQuestionBankSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questions: MockExamQuestion[] = [];
  let currentSection = "Google Ads Display Certification Practice Test";

  for (const line of lines) {
    if (line.startsWith("Google Ads Display Certification Practice Test")) {
      currentSection = line;
      continue;
    }

    const questionStart = parseQuestionNumber(line);

    if (!questionStart) {
      continue;
    }

    const parsed = extractInlineOptions(questionStart.text);

    if (!parsed) {
      continue;
    }

    questions.push({
      id: `google-ads-display-bank-q${String(questionStart.number).padStart(2, "0")}`,
      topic: currentSection,
      question: parsed.question,
      options: parsed.options,
      explanation: `Practice question from ${currentSection}.`,
      selectionMode: "single",
    });
  }

  return questions;
}

export const googleAdsDisplayQuestionBank = parseGoogleAdsDisplayQuestions();
