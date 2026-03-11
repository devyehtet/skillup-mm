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

interface NumberedMockExamQuestion extends MockExamQuestion {
  questionNumber: number;
}

const metaMediaPlanningQuestionBankSource = String.raw`
Part 1: Forecaster & Campaign Planner Basics (မေးခွန်း ၁ - ၂၀)
၁။ Meta Campaign Planner ရဲ့ အဓိက ရည်ရွယ်ချက်က ဘာလဲ? (A) ကြော်ငြာစာသားရေးရန် (B) Reach နှင့် Frequency Campaign များအတွက် Budget နှင့် ရလဒ်များကို ကြိုတင်ခန့်မှန်း (Draft) ရန် (C) Ad account ပိတ်ရန် (D) Like များများရအောင်လုပ်ရန် အဖြေ: B
၂။ Forecasting Tool ကို သုံးပြီး ဘာကို ခန့်မှန်းလို့ရသလဲ? (A) ပြိုင်ဘက်၏ Budget (B) သတ်မှတ်ထားသော Budget အလိုက် ရရှိနိုင်မယ့် Reach နှင့် Impressions (C) Facebook ရဲ့ ရှယ်ယာဈေး (D) သုံးစွဲသူ၏ အိမ်လိပ်စာ အဖြေ: B
၃။ Campaign Planner မှာ Draft Plan တစ်ခုကို ဘယ်နှစ်ယောက်အထိ Share လို့ရသလဲ? (A) ကိုယ်တိုင်သာကြည့်ရသည် (B) Link ရှိသူ မည်သူမဆို သို့မဟုတ် လုပ်ဖော်ကိုင်ဖက်များ (C) Facebook ဝန်ထမ်းများသာ (D) ၁ ယောက်သာ အဖြေ: B
၄။ Forecasting Tool မှာ "Inventory Filter" ဆိုတာ ဘာလဲ? (A) ကုန်ပစ္စည်းစာရင်း (B) ကြော်ငြာပြသမည့် Content အမျိုးအစား (Standard, Full, Limited) ကို ရွေးချယ်ခြင်း (C) ပိုက်ဆံအိတ် (D) Website error အဖြေ: B
၅။ Campaign Planner ကို ဘယ် Buying Type အတွက် အဓိက သုံးသလဲ? (A) Auction (B) Reach and Frequency (C) TRP (D) CBO အဖြေ: B

Part 1 (ဆက်လက်ဖော်ပြချက်): Forecaster & Campaign Planner Basics (မေးခွန်း ၆ - ၂၀)
၆။ Campaign Planner မှာ Plan တစ်ခုကို Version အမျိုးမျိုး (ဥပမာ - Version A, Version B) ခွဲဆွဲရခြင်းရဲ့ အဓိက အကျိုးကျေးဇူးက ဘာလဲ? (A) ပိုက်ဆံ ပိုရရန် (B) မတူညီတဲ့ Budget နဲ့ Targeting တွေကြားက ရလဒ်ကွာခြားချက်ကို ယှဉ်ကြည့်နိုင်ရန် (C) Facebook Page ကို အလှဆင်ရန် (D) သူငယ်ချင်းတွေကို ပြရန် အဖြေ: B
၇။ "Reach and Frequency" buying ကို သုံးပြီး Forecast လုပ်တဲ့အခါ Meta က ဘာကို အာမခံ (Guarantee) ပေးသလဲ? (A) ပစ္စည်း အကုန်ရောင်းရမည်ဟု (B) သတ်မှတ်ထားတဲ့ စရိတ်အတွင်းမှာ သတ်မှတ်ထားတဲ့ လူဦးရေဆီကို ရောက်ရှိစေရန် (C) Like ၁ သန်း ရမည်ဟု (D) ဘာမှ အာမခံ မပေးပါ အဖြေ: B
၈။ Campaign Planner ထဲက Draft Plan တစ်ခုကို Ads Manager ထဲကို တိုက်ရိုက် ပို့လွှတ် (Export) လို့ ရပါသလား? (A) မရပါ (B) ရပါသည်၊ Draft ကို Campaign အဖြစ် တိုက်ရိုက် ပြောင်းလဲနိုင်သည် (C) Google Ads ထဲပဲ ပို့လို့ရသည် (D) Email နဲ့ပဲ ပို့လို့ရသည် အဖြေ: B
၉။ Forecasting လုပ်တဲ့အခါ "Audience Saturation" (လူနာနေခြင်း) ဆိုတာ ဘာလဲ? (A) လူတွေ အများကြီး ရှိနေခြင်း (B) သတ်မှတ်ထားတဲ့ Audience ထဲမှာ ကြော်ငြာကို လူတိုင်း မြင်ဖူးသွားလို့ အသစ်ထပ်တိုးဖို့ ခက်ခဲသွားခြင်း (C) အင်တာနက် ပိတ်သွားခြင်း (D) စာသား မှားနေခြင်း အဖြေ: B
၁၀။ "Placement" တွေအားလုံးကို ရွေးချယ်ပြီး Forecast လုပ်ရင် ဘာဖြစ်လာနိုင်သလဲ? (A) Reach ပိုနည်းသွားမည် (B) Meta က ရလဒ်အကောင်းဆုံး နေရာတွေမှာ ညှိပြပေးမှာဖြစ်လို့ Reach ပိုကျယ်လာပြီး CPM သက်သာနိုင်သည် (C) ဈေးနှုန်း အလွန်ကြီးသွားမည် (D) ကြော်ငြာ ပြလို့ မရတော့ပါ အဖြေ: B
၁၁။ Campaign Planner မှာ "Frequency Cap" ဆိုတာ ဘာလဲ? (A) ကြော်ငြာပြသမည့် နေ့ရက်များ (B) လူတစ်ယောက်ကို ကြော်ငြာ ဘယ်နှစ်ကြိမ်ထက် ပိုမပြရဘူးဆိုတဲ့ ကန့်သတ်ချက် (C) ပိုက်ဆံ ပမာဏ (D) ဗီဒီယို ကြာချိန် အဖြေ: B
၁၂။ "Estimated Daily Results" မှာ ပြသတဲ့ ဂဏန်းတွေက အမြဲတမ်း ၁၀၀% မှန်ကန်ပါသလား? (A) အမြဲတမ်း မှန်ပါသည် (B) မဟုတ်ပါ၊ အတိတ်က အချက်အလက်တွေအပေါ် အခြေခံထားတဲ့ ခန့်မှန်းချက်သာ ဖြစ်သည် (C) Facebook က အာမခံသည် (D) ပိုက်ဆံ ပိုပေးရင် မှန်သည် အဖြေ: B
၁၃။ "Market Competition" (ပြိုင်ဆိုင်မှု) က Forecast အပေါ် ဘယ်လို သက်ရောက်သလဲ? (A) ပြိုင်ဘက်များရင် ကြော်ငြာခ ဈေးတက်ပြီး ရလဒ် လျော့နည်းသွားနိုင်သည် (B) ဘာမှ မဖြစ်ပါ (C) ဈေးနှုန်း သက်သာလာမည် (D) လူ ပိုမြင်ရမည် အဖြေ: A
၁၄။ Campaign Planner မှာ Plan တစ်ခုကို Share လုပ်ဖို့ ဘာလိုအပ်သလဲ? (A) Password ပေးရန် (B) Shareable Link ကို ယူပြီး ပို့ပေးရန် (C) Facebook ရုံးကို ဖုန်းဆက်ရန် (D) အိမ်လိပ်စာ ပေးရန် အဖြေ: B
၁၅။ "Purchase Prediction" ဆိုတာ ဘာလဲ? (A) ပစ္စည်းဝယ်ခြင်း (B) Reach and Frequency buying အတွက် Meta က ကြိုတင်တွက်ချက်ထားတဲ့ ခန့်မှန်းချက် (C) ဈေးရောင်းခြင်း (D) စာရင်းကိုင်ခြင်း အဖြေ: B
၁၆။ Media Plan တစ်ခုကို CSV အနေနဲ့ ဒေါင်းလုဒ်ဆွဲလို့ ရပါသလား? (A) မရပါ (B) ရပါသည်၊ Spreadsheet နဲ့ ပြန်ကြည့်နိုင်သည် (C) ဓာတ်ပုံပဲ ရသည် (D) စာအုပ်ပဲ ရသည် အဖြေ: B
၁၇။ "Inventory Filter" ထဲက "Full Inventory" ကို ရွေးရင် ဘာဖြစ်မလဲ? (A) ကြော်ငြာကို နေရာအစုံမှာ ပြသမည် (Sensitive content များ အပါအဝင်) (B) ကြော်ငြာကို လုံးဝ မပြတော့ပါ (C) ဈေးနှုန်း သက်သာမည် (D) ပုံတွေပဲ ပြမည် အဖြေ: A
၁၈။ "Reach Curve" (ဂရပ်မျဉ်း) က ဘာကို ပြတာလဲ? (A) ပိုက်ဆံ ကုန်နှုန်း (B) Budget တိုးလာတာနဲ့အမျှ လူဘယ်လောက် ပိုရောက်ရှိနိုင်မလဲဆိုတဲ့ အချိုးအစား (C) ဗီဒီယို ကြည့်နှုန်း (D) Like ပမာဏ အဖြေ: B
၁၉။ Campaign Planner ကို သုံးဖို့အတွက် Business Manager မှာ ဘာ Role ရှိဖို့ လိုသလဲ? (A) ဘာမှ မလိုပါ (B) Ad Account ကို ကိုင်တွယ်ခွင့်ရှိတဲ့ Admin သို့မဟုတ် Advertiser role ရှိရမည် (C) Like ပေးသူ ဖြစ်ရမည် (D) သူငယ်ချင်း ဖြစ်ရမည် အဖြေ: B
၂၀။ "Targeting Expansion" ကို ဖွင့်ထားရင် Forecast မှာ ဘာပြောင်းလဲမလဲ? (A) Reach နည်းသွားမည် (B) Conversion ရနိုင်တဲ့ လူသစ်တွေဆီ Meta က တိုးချဲ့ပြသမှာဖြစ်လို့ Reach ပိုများလာနိုင်သည် (C) ဈေးကြီးသွားမည် (D) စာသားတွေ ပျောက်သွားမည် အဖြေ: B

Part 2: Audience & Reach Forecasting (မေးခွန်း ၂၁ - ၄၀)
၂၁။ "Estimated Daily Results" ဆိုတာ ဘာလဲ? (A) ပြီးခဲ့တဲ့လက ရလဒ် (B) မိမိသတ်မှတ်ထားတဲ့ Budget နှင့် Target အပေါ်မူတည်ပြီး တစ်ရက်ကို ရရှိနိုင်မယ့် ခန့်မှန်းရလဒ် (C) အမြဲတမ်း မှန်ကန်နေမယ့် ကိန်းဂဏန်း (D) လကုန်မှ ပြသမည့်ဂဏန်း အဖြေ: B
၂၂။ Audience Size ကျဉ်းသွားရင် Forecast ရလဒ်မှာ ဘာဖြစ်သွားမလဲ? (A) Reach ပိုများလာမည် (B) Reach နည်းသွားပြီး CPM (စရိတ်) တက်လာနိုင်သည် (C) ဘာမှမဖြစ်ပါ (D) Budget သက်သာသွားမည် အဖြေ: B
၂၃။ "Frequency Cap" ကို ပြောင်းလဲလိုက်ရင် Reach အပေါ် ဘယ်လို သက်ရောက်မလဲ? (A) Frequency Cap နည်းသွားရင် Reach ပိုကျယ်လာနိုင်သည် (B) Reach နည်းသွားမည် (C) Budget တိုးလာမည် (D) ဘာမှမဖြစ်ပါ အဖြေ: A
၂၄။ Campaign Planner မှာ Audience တစ်ခုထက်ပိုပြီး နှိုင်းယှဉ်လို့ ရပါသလား? (A) မရပါ (B) ရပါသည် (Versions များခွဲ၍ နှိုင်းယှဉ်နိုင်သည်) (C) ၁ ခုပဲ ရသည် (D) ၅ ခုပဲ ရသည် အဖြေ: B
၂၅။ Forecasting လုပ်တဲ့အခါ "Seasonality" က ဘာကြောင့် အရေးကြီးတာလဲ? (A) ရာသီဥတု သိချင်လို့ (B) ပွဲတော်ရက်များ (ဥပမာ- သင်္ကြန်၊ Christmas) တွင် ကြော်ငြာခ ဈေးတက်တတ်သောကြောင့် (C) အင်္ကျီရောင်းချင်လို့ (D) ပိတ်ရက်ရချင်လို့ အဖြေ: B
ဟုတ်ကဲ့ပါ၊ Meta Campaign Planner (Forecasting) အတွက် ကျန်ရှိနေတဲ့ မေးခွန်း (၂၆) ကနေ (၄၀) အထိကို အသေးစိတ် ထပ်မံဖြည့်စွက်ပေးလိုက်ပါတယ်။ ဒီအပိုင်းမှာ Placement ရွေးချယ်မှုနဲ့ Audience Size က ခန့်မှန်းချက်တွေအပေါ် ဘယ်လိုသက်ရောက်မှုရှိလဲဆိုတာကို အဓိကထားထားပါတယ်။

Part 2 (ဆက်လက်ဖော်ပြချက်): Placement & Audience Forecasting (မေးခွန်း ၂၆ - ၄၀)
၂၆။ Campaign Planner မှာ Placement တစ်ခုချင်းစီ (ဥပမာ- Instagram Stories သီးသန့်) ကို ရွေးချယ်ပြီး ခန့်မှန်းချက် ထုတ်လို့ရပါသလား? (A) မရပါ၊ အကုန်လုံးပဲ ရသည် (B) ရပါသည်၊ Manual Placement ရွေးချယ်ပြီး ခန့်မှန်းချက်ကို ကြည့်နိုင်သည် (C) Facebook Feed တစ်ခုတည်းသာ ရသည် (D) Video Placement သာ ရသည် အဖြေ: B
၂၇။ "Automatic Placements" (Advantage+ Placements) ကို ရွေးချယ်ခြင်းက Forecast ရလဒ်အပေါ် ဘယ်လိုသက်ရောက်သလဲ? (A) ဈေးနှုန်းပိုကြီးသွားမည် (B) ရရှိနိုင်တဲ့နေရာ (Inventory) ပိုများသွားတဲ့အတွက် Reach ပိုများပြီး CPM (စရိတ်) ပိုသက်သာနိုင်သည် (C) ကြော်ငြာကို လူကြည့်နည်းသွားမည် (D) Facebook က ပိုက်ဆံ ပိုဖြတ်မည် အဖြေ: B
၂၈။ Audience တစ်ခုရဲ့ "Saturation" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? (A) လူအသစ်တွေ အများကြီးရှိနေခြင်း (B) သတ်မှတ်ထားတဲ့ Audience ထဲက လူအများစုဟာ ကြော်ငြာကို မြင်ပြီးသားဖြစ်နေလို့ နောက်ထပ် Reach တက်ဖို့ ခက်ခဲသွားတဲ့အခြေအနေ (C) အင်တာနက် လိုင်းကျခြင်း (D) Website ပျက်ခြင်း အဖြေ: B
၂၉။ Campaign Planner မှာ Plan တစ်ခုကို "Version" တွေခွဲပြီး ဆွဲရခြင်းရဲ့ အဓိက အကျိုးကျေးဇူးက ဘာလဲ? (A) ပိုက်ဆံ ပိုရရန် (B) မတူညီတဲ့ Budget၊ Audience သို့မဟုတ် Placement တွေရဲ့ ရလဒ်ကို ယှဉ်ကြည့်နိုင်ရန် (C) Ad အများကြီး တပြိုင်နက်တင်ရန် (D) သူငယ်ချင်းတွေကို ပြရန် အဖြေ: B
၃၀။ "Impressions" နဲ့ "Reach" ရဲ့ ကွာခြားချက်ကို Forecasting မှာ ဘယ်လိုပြသလဲ? (A) အတူတူပဲ ဖြစ်သည် (B) Reach က လူဦးရေကို ပြပြီး Impressions က ကြော်ငြာပြသတဲ့ စုစုပေါင်း အကြိမ်ရေကို ပြသည် (C) Impressions က ဈေးပိုကြီးသည် (D) Reach က ဈေးပိုကြီးသည် အဖြေ: B
၃၁။ Forecasting Tool မှာ "Narrow Targeting" (ဥပမာ- Interest အများကြီးသုံးခြင်း) က ဘာဖြစ်စေနိုင်သလဲ? (A) Reach ပိုကျယ်လာမည် (B) ပစ်မှတ်လူဦးရေ နည်းသွားပြီး CPM စရိတ် မြင့်တက်လာနိုင်သည် (C) ကြော်ငြာကို လူတိုင်းမြင်ရမည် (D) အလကား ပြခွင့်ရမည် အဖြေ: B
၃၂။ "Placement Efficiency" ဆိုတာ ဘာလဲ? (A) ဘယ်နေရာမှာ ကြော်ငြာပြရင် စရိတ်အသက်သာဆုံးနဲ့ ရလဒ်အကောင်းဆုံးရမလဲဆိုတာ (B) စာသား အမှားပြင်ခြင်း (C) ဗီဒီယို တည်းဖြတ်ခြင်း (D) Like ပမာဏ အဖြေ: A
၃၃။ Campaign Planner မှာ နိုင်ငံအလိုက် (Location) ခွဲပြီး ခန့်မှန်းချက် ထုတ်လို့ ရပါသလား? (A) မရပါ (B) ရပါသည်၊ နိုင်ငံ သို့မဟုတ် မြို့အလိုက် တိတိကျကျ ခန့်မှန်းနိုင်သည် (C) တစ်ကမ္ဘာလုံးအတွက်ပဲ ရသည် (D) အာရှတိုက်အတွက်ပဲ ရသည် အဖြေ: B
၃၄။ "Audience Network" ကို Placement မှာ ထည့်သွင်းလိုက်ရင် Forecast မှာ ဘာပြောင်းလဲမလဲ? (A) Facebook ထဲက လူတွေပဲ မြင်ရမည် (B) YouTube မှာ ပေါ်လာမည် (C) Facebook ပြင်ပရှိ Apps နဲ့ Website တွေဆီပါ ရောက်ရှိသွားမှာဖြစ်လို့ Reach ပိုများလာမည် (D) ပိုက်ဆံ ပိုကုန်မည် အဖြေ: C
၃၅။ Forecasting လုပ်တဲ့အခါ "Lookalike Audience" ရဲ့ ရာခိုင်နှုန်း (1% vs 10%) က ဘယ်လိုကွာသလဲ? (A) 1% က လူဦးရေ ပိုနည်းပြီး ပိုတိကျသလို၊ 10% က လူဦးရေ ပိုများပြီး Reach ပိုကျယ်သည် (B) 10% က ပိုတိကျသည် (C) 1% က ဈေးပိုကြီးသည် (D) အတူတူပဲ ဖြစ်သည် အဖြေ: A
၃၆။ "Frequency" ကို တစ်ဦးလျှင် ၂ ကြိမ် (Frequency Cap = 2) လို့ သတ်မှတ်လိုက်ရင် ခန့်မှန်းချက်မှာ ဘာဖြစ်မလဲ? (A) Impressions အရေအတွက်ဟာ Reach ရဲ့ နှစ်ဆ ဖြစ်လာမည် (B) Reach က Impressions ထက် များသွားမည် (C) လူတိုင်း ကြော်ငြာကို ၁ ခါပဲ မြင်ရမည် (D) ပိုက်ဆံ လုံးဝ မကုန်တော့ပါ အဖြေ: A
၃၇။ Campaign Planner မှာ "Estimated Conversion" ကို ခန့်မှန်းဖို့ ဘာလိုအပ်သလဲ? (A) Website URL သီးသန့် (B) အရင်က Conversion Data တွေ ရှိထားဖို့ လိုအပ်သည် (C) ပုံလှလှလေးတွေ (D) Facebook Page Follower ၁ သန်း အဖြေ: B
၃၈။ Forecasting မှာ "CPM" ဆိုတာ ဘာလဲ? (A) ကြော်ငြာကို တစ်ချက်နှိပ်ခ (B) ကြော်ငြာအကြိမ်ရေ ၁၀၀၀ ပြသဖို့ ကုန်ကျမယ့် ပျမ်းမျှစရိတ် (C) တစ်လစာ ကုန်ကျစရိတ် (D) ဗီဒီယို တစ်ခါကြည့်ခ အဖြေ: B
၃၉။ "Targeting Expansion" ကို ဖွင့်လိုက်ရင် Forecast Reach ဘာဖြစ်မလဲ? (A) နည်းသွားမည် (B) Meta ရဲ့ စနစ်က ရလဒ်ရနိုင်မယ့် လူတွေကို ထပ်တိုးရှာပေးမှာဖြစ်လို့ Reach တက်လာနိုင်သည် (C) အဝိုင်းပုံဖြစ်သွားမည် (D) စာသားတွေ ပျောက်သွားမည် အဖြေ: B
၄၀။ Campaign Planner ထဲက ရလဒ်ဇယား (Graph) ကို ဘယ်လို ဒေါင်းလုဒ်ဆွဲလို့ရသလဲ? (A) ရုပ်ရှင်အဖြစ် (B) CSV သို့မဟုတ် PDF အနေဖြင့် ဒေါင်းလုဒ်ဆွဲနိုင်သည် (C) စာအုပ်အဖြစ်ပဲ ရသည် (D) ဒေါင်းလုဒ်ဆွဲလို့ မရပါ အဖြေ: B

Part 3: Budgeting & Optimization Planning (မေးခွန်း ၄၁ - ၆၀)
၄၁။ "Spend Curve" က ဘာကို ပြသတာလဲ? (A) ပိုက်ဆံကုန်သွားတဲ့ ပုံ (B) Budget တိုးလိုက်ရင် Reach ဘယ်လောက်အထိ တက်လာမလဲဆိုတဲ့ အချိုးအစား (C) ဗီဒီယို ကြည့်ရှုနှုန်း (D) စာသား အရှည် အဖြေ: B
၄၂။ Campaign Planner ထဲက Plan တစ်ခုကို Ads Manager ထဲ တိုက်ရိုက် ဝယ်ယူ (Purchase) လို့ ရပါသလား? (A) မရပါ (B) ရပါသည် (C) Account အသစ်ပဲ ရသည် (D) Email ပို့မှ ရသည် အဖြေ: B
၄၃။ "Cost-per-thousand people reached" ဆိုတာ ဘာလဲ? (A) CPM (B) CPP (Cost per point) (C) CPC (D) CPA အဖြေ: B
၄၄။ Budget ကို Lifetime ကနေ Daily ပြောင်းလိုက်ရင် Forecast ပြောင်းပါသလား? (A) မပြောင်းပါ (B) ပြောင်းလဲနိုင်သည် (Delivery စနစ် ကွာခြားသွားနိုင်သောကြောင့်) (C) ပိုက်ဆံ ပိုကုန်မည် (D) Ad ပိတ်သွားမည် အဖြေ: B
၄၅။ Auction Buying အတွက် Forecasting ကို ဘယ်မှာ ကြည့်ရသလဲ? (A) Campaign Planner (B) Ads Manager ရှိ Ad Set အဆင့်ရှိ "Estimated Daily Results" တွင် (C) Facebook Page တွင် (D) Google တွင် အဖြေ: B

Part 3 (ဆက်လက်ဖော်ပြချက်): Budgeting & Optimization Planning (မေးခွန်း ၄၆ - ၆၀)
၄၆။ Campaign Budget Optimization (CBO) ကို သုံးပြီး Forecast လုပ်တဲ့အခါ Meta က Budget ကို ဘယ်လိုခွဲဝေပေးသလဲ? (A) Ad Set အားလုံးကို အညီအမျှ ခွဲပေးခြင်း (B) Performance အကောင်းဆုံးဖြစ်မယ့် Ad Set တွေဆီကို Budget ပိုပြီး စီးဆင်းစေခြင်း (C) ပထမဆုံး စတင်တဲ့ Ad Set ကိုပဲ အကုန်ပေးခြင်း (D) နာမည်အရှည်ဆုံး Ad Set ကို ဦးစားပေးခြင်း အဖြေ: B
၄၇။ "Advantage+ Campaign Budget" (ယခင် CBO) ကို Planning မှာ သုံးခြင်းအားဖြင့် ဘာကို တိုင်းတာနိုင်သလဲ? (A) စာလုံးပေါင်း အမှားများ (B) မတူညီတဲ့ Ad Set Targeting တွေကြားမှာ Budget ဘယ်လို ထိရောက်စွာ အလုပ်လုပ်မလဲဆိုတာ (C) Facebook Page ရဲ့ အရောင် (D) ဝန်ထမ်းအရေအတွက် အဖြေ: B
၄၈။ "Spend Cap" (အသုံးစရိတ် ကန့်သတ်ချက်) ကို Plan ထဲမှာ ထည့်သွင်းလိုက်ရင် Forecast ရလဒ်မှာ ဘာပြောင်းလဲမလဲ? (A) Reach ပိုများလာမည် (B) သတ်မှတ်ထားတဲ့ Budget ထက် ပိုမသုံးအောင် ကန့်သတ်ထားတဲ့အတွက် Reach မှာ အကန့်အသတ် ရှိသွားမည် (C) ကြော်ငြာခ အလကားရမည် (D) Facebook က ပိုက်ဆံ ပြန်အမ်းမည် အဖြေ: B
၄၉။ "Daily Budget" (နေ့စဉ်သုံးစရိတ်) နဲ့ Forecast လုပ်ခြင်းရဲ့ အားသာချက်က ဘာလဲ? (A) ပိုက်ဆံ ပိုကုန်ခြင်း (B) နေ့စဉ် ရရှိနိုင်မယ့် ရလဒ် (Daily Reach) ကို ပုံမှန်ရှိအောင် ထိန်းညှိပြီး ခန့်မှန်းနိုင်ခြင်း (C) တစ်လစာလုံးအတွက် တပြိုင်နက် သုံးခြင်း (D) ဘာမှမထူးခြားပါ အဖြေ: B
၅၀။ "Lifetime Budget" ကို Plan မှာ သုံးတဲ့အခါ Meta က ဘယ်လို ခန့်မှန်းပေးသလဲ? (A) နေ့တိုင်း အတူတူပဲ သုံးမည်ဟု ခန့်မှန်းခြင်း (B) Campaign ကာလတစ်ခုလုံးအတွင်း အခွင့်အလမ်း အကောင်းဆုံးရမယ့် နေ့တွေမှာ ပိုသုံးပြီး ရလဒ်ကောင်းအောင် ခန့်မှန်းပေးခြင်း (C) ပထမဆုံးနေ့မှာတင် အကုန်သုံးခြင်း (D) နောက်ဆုံးနေ့မှ သုံးခြင်း အဖြေ: B
၅၁။ "Cost-per-Result Goal" (Bid Strategy) တစ်ခုကို Plan မှာ ထည့်လိုက်ရင် Forecasting မှာ ဘာသတိပေးချက် တက်လာနိုင်သလဲ? (A) သင်ပေးတဲ့ဈေး (Bid) နည်းလွန်းရင် ကြော်ငြာပြသမှု (Delivery) နည်းသွားနိုင်ကြောင်း (B) ပိုက်ဆံ ပိုရမည့်အကြောင်း (C) Website မြန်လာမည့်အကြောင်း (D) Facebook က ကျေးဇူးတင်ကြောင်း အဖြေ: A
၅၂။ Forecasting မှာ "Efficiency" ကို ဘယ်လို တိုင်းတာသလဲ? (A) ကြော်ငြာ အရှည် (B) ကုန်ကျစရိတ် (Cost) နှင့် ရလဒ် (Results) အချိုးအစား (ဥပမာ- CPA သို့မဟုတ် CPM သက်သာမှု) (C) Like အရေအတွက် (D) Share အရေအတွက် အဖြေ: B
၅၃။ "Learning Phase" ကာလအတွင်းမှာ Forecast ရလဒ်တွေက ဘာဖြစ်တတ်သလဲ? (A) အရမ်း တိကျနေခြင်း (B) ရလဒ်တွေက မတည်ငြိမ်ဘဲ ပြောင်းလဲမှု (Fluctuation) ရှိနိုင်ခြင်း (C) ကြော်ငြာခ အလွန်သက်သာခြင်း (D) အမြဲတမ်း ဈေးကြီးနေခြင်း အဖြေ: B
၅၄။ Campaign Planner ထဲမှာ Budget ကို ၂ ဆ တိုးလိုက်ရင် Reach ကရော ၂ ဆ အတိအကျ တက်လာပါသလား? (A) အမြဲတမ်း ၂ ဆ အတိအကျ တက်သည် (B) အမြဲတမ်း မဟုတ်ပါ (Diminishing Returns ကြောင့် Budget များလေ Reach တိုးနှုန်း နည်းသွားလေ ဖြစ်နိုင်သည်) (C) Reach က နည်းသွားမည် (D) Budget က တိုးမရပါ အဖြေ: B
၅၅။ "Conversion Forecasting" လုပ်ဖို့အတွက် Pixel မှာ အနည်းဆုံး အချက်အလက် ဘယ်လောက်ရှိဖို့ Meta က အကြံပြုသလဲ? (A) ၁ ခု (B) ပြီးခဲ့တဲ့ ရက် ၃၀ အတွင်း အနည်းဆုံး Conversion ၅၀ ခန့် ရှိထားမှ ခန့်မှန်းချက် ပိုတိကျမည် (C) ၁ သန်း (D) မလိုပါ အဖြေ: B
၅၆။ "Ad Delivery" ကို Plan ထဲမှာ "Accelerated" (အမြန်) လို့ ရွေးလို့ရပါသလား? (A) အမြဲတမ်း ရသည် (B) အချို့သော Buying Type (ဥပမာ- Auction with Bid Cap) တွေမှာသာ ရနိုင်ပြီး ခန့်မှန်းချက်ကို ပြောင်းလဲစေသည် (C) မရပါ (D) Video အတွက်ပဲ ရသည် အဖြေ: B
၅၇။ "Budget Distribution" ဆိုတာ Forecasting မှာ ဘာကို ပြောတာလဲ? (A) ပိုက်ဆံ ဝေငှခြင်း (B) Campaign တစ်ခုရဲ့ ကာလအတွင်းမှာ ငွေကြေးကို ဘယ်လို ခွဲဝေသုံးစွဲသွားမလဲဆိုတဲ့ ပုံစံ (C) ဘဏ်စာရင်း ခွဲခြင်း (D) စာရင်းစစ်ခြင်း အဖြေ: B
၅၈။ Campaign Planner ထဲမှာ Plan တစ်ခုကို "Shared" လုပ်လိုက်ရင် တစ်ဖက်လူက ဘာတွေ ပြင်လို့ရသလဲ? (A) ဘာမှ ပြင်လို့မရပါ (B) Plan ကို ကြည့်ရှုနိုင်ပြီး လိုအပ်ရင် Version အသစ်တစ်ခုအနေနဲ့ ပုံတူပွား (Copy) ပြီး ပြင်ဆင်နိုင်သည် (C) ပိုင်ရှင်ရဲ့ Budget ကို ပြင်နိုင်သည် (D) Account ကို ပိတ်နိုင်သည် အဖြေ: B
၅၉။ "Attribution Setting" (ဥပမာ- 7-day click) ကို ပြောင်းလဲခြင်းက Forecast Conversions ပေါ် သက်ရောက်ပါသလား? (A) မသက်ရောက်ပါ (B) သက်ရောက်ပါသည် (ဝယ်ယူမှုကို တိုင်းတာမယ့် ကာလ ကွာခြားသွားတဲ့အတွက် ခန့်မှန်းချက် ပြောင်းလဲနိုင်သည်) (C) ပိုက်ဆံ ပိုကုန်မည် (D) ပုံစံ ပျက်သွားမည် အဖြေ: B
၆၀။ Campaign Planner မှာ "Multiple Campaigns" တွေကို ပေါင်းပြီး Media Plan တစ်ခုတည်းအနေနဲ့ ခန့်မှန်းလို့ ရပါသလား? (A) မရပါ (B) ရပါသည်၊ Campaign အများကြီးကို စုစည်းပြီး စုစုပေါင်း Reach နဲ့ Budget ကို ခန့်မှန်းနိုင်သည် (C) ၁ ခုပဲ ရသည် (D) အလကားပဲ ရသည် အဖြေ: B

Part 4: Advanced Scenarios & Tools (မေးခွန်း ၆၁ - ၈၀)
၆၁။ Plan တစ်ခုမှာ "Placement" အားလုံးကို ရွေးလိုက်ရင် Reach ဘာဖြစ်မလဲ? (A) Reach နည်းသွားမည် (B) Reach အများဆုံး ရရှိနိုင်မည် (C) ဈေးကြီးသွားမည် (D) Error တက်မည် အဖြေ: B
၆၂။ "TRP Buying" ဆိုတာ ဘာကို ခန့်မှန်းတာလဲ? (A) Website traffic (B) TV screen များတွင် ကြော်ငြာပြသမှုနှင့် Digital Reach ကို နှိုင်းယှဉ်တွက်ချက်ခြင်း (C) Radio (D) Print media အဖြေ: B
၆၃။ Campaign Planner မှာ "Status" က ဘာတွေကို ပြသလဲ? (A) အိပ်နေသည် (B) Draft, Shared, သို့မဟုတ် Purchased (C) Deleted (D) Offline အဖြေ: B
၆၄။ Forecasting လုပ်တဲ့အခါ "Historical Data" က ဘာကို ဆိုလိုတာလဲ? (A) ရှေးဟောင်းရာဇဝင် (B) အရင်က လုပ်ခဲ့ဖူးတဲ့ Campaign တွေရဲ့ ရလဒ်အပေါ်မူတည်ပြီး ခန့်မှန်းခြင်း (C) အနာဂတ် (D) သူငယ်ချင်း အချက်အလက် အဖြေ: B
၆၅။ "Purchase Prediction" ဆိုတာ ဘာလဲ? (A) ပစ္စည်းဝယ်ခြင်း (B) Reach and Frequency buying အတွက် Meta က ကြိုတင် အာမခံပေးထားတဲ့ ခန့်မှန်းချက် (C) ဈေးရောင်းခြင်း (D) စာရင်းကိုင်ခြင်း အဖြေ: B
၆၆။ Ad Set တစ်ခုကို ဥပမာပေးပြီး ပုံတူပွား (Duplicate) လုပ်ကာ ခန့်မှန်းချက် ထုတ်လို့ ရပါသလား? (A) မရပါ (B) ရပါသည် (C) ၁ ကြိမ်ပဲ ရသည် (D) ပိုက်ဆံပေးရသည် အဖြေ: B
၆၇။ "Delivery Variance" ဆိုတာ ဘာလဲ? (A) ပစ္စည်းပို့ခ (B) ခန့်မှန်းချက်နဲ့ တကယ့်လက်တွေ့ ရလဒ်ကြား ကွာဟနိုင်ခြေ (C) ကားမောင်းခြင်း (D) Facebook error အဖြေ: B
၆၈။ Campaign Planner ကို သုံးဖို့ ဘာလိုအပ်သလဲ? (A) Personal Profile (B) Business Manager (Meta Business Suite) နှင့် ချိတ်ဆက်ထားသော Ad Account (C) Credit Card အသစ် (D) Website အဖြေ: B
၆၉။ "Market Conditions" က Forecast ကို ဘယ်လို ထိခိုက်လဲ? (A) ပြိုင်ဘက်တွေ များလာရင် ကြော်ငြာခ ဈေးတက်ပြီး Reach နည်းသွားနိုင်သည် (B) ဘာမှမဖြစ်ပါ (C) ဈေးကျမည် (D) Facebook ပိတ်သွားမည် အဖြေ: A
၇၀။ "Optimal Frequency" ဆိုတာ ဘာလဲ? (A) အများဆုံးပြခြင်း (B) Brand ကို မှတ်မိဖို့အတွက် အသင့်တော်ဆုံး ကြော်ငြာပြသမှု အကြိမ်ရေ ခန့်မှန်းချက် (C) ၁ ကြိမ်ပဲ ပြခြင်း (D) နေ့တိုင်းပြခြင်း အဖြေ: B

Part 4 (ဆက်လက်ဖော်ပြချက်): Advanced Concepts & Final Prep (မေးခွန်း ၇၁ - ၈၀)
၇၁။ Forecasting မှာ "Multi-versioning" ဆိုတာ ဘာလဲ?
(A) တစ်ခါတည်း အကုန်ဝယ်ခြင်း
(B) Plan တစ်ခုတည်းမှာပဲ မတူညီတဲ့ Budget (သို့မဟုတ်) Targeting တွေနဲ့ Version ပေါင်းများစွာ ဖန်တီးပြီး ဘယ်ဟာ အကောင်းဆုံးလဲ နှိုင်းယှဉ်ခြင်း
(C) ဖုန်းအမျိုးမျိုးမှာ ပြခြင်း
(D) ဗီဒီယိုကို အခါခါကြည့်ခြင်း
အဖြေ: B
၇၂။ Campaign Planner ကနေ "Export to CSV" လုပ်လိုက်ရင် ဘာအချက်အလက်တွေ ပါလာမလဲ?
(A) Ad ပုံရိပ်များ
(B) ခန့်မှန်းထားတဲ့ Reach, Frequency, Impressions, Spend နဲ့ CPM ကဲ့သို့သော ကိန်းဂဏန်း အချက်အလက်များ
(C) ပြိုင်ဘက်တွေရဲ့ အမည်များ
(D) Facebook ရဲ့ Code များ
အဖြေ: B
၇၃။ "Campaign Duration" (ကာလ) ကို တိုးလိုက်ရင် Forecasting Reach အပေါ် ဘယ်လို သက်ရောက်မလဲ?
(A) Reach နည်းသွားမည်
(B) Budget တူညီနေပါက Frequency တက်လာနိုင်ပြီး၊ လူသစ်တွေဆီ ထပ်မံရောက်ရှိဖို့ အခွင့်အလမ်း ပိုများလာနိုင်သည်
(C) ကြော်ငြာခ အလကားရမည်
(D) ဘာမှမဖြစ်ပါ
အဖြေ: B
၇၄။ "Audience Saturation" ဖြစ်နေတဲ့ Plan တစ်ခုကို ဘယ်လို ပြင်ဆင်မလဲ?
(A) Budget ထပ်တိုးခြင်း
(B) Target Audience ကို ပိုကျယ်အောင် ချဲ့ခြင်း (သို့မဟုတ်) Creative အသစ်လဲခြင်းဖြင့် Reach အသစ်ပြန်ရအောင်လုပ်ခြင်း
(C) Ad ကို ပိတ်လိုက်ခြင်း
(D) အင်တာနက် လိုင်းချိန်းခြင်း
အဖြေ: B
၇၅။ "Ad Recall Lift Projection" ဆိုတာ ဘာကို ခန့်မှန်းတာလဲ?
(A) ပစ္စည်းဝယ်မယ့်သူ
(B) ကြော်ငြာကို မြင်ပြီး ၂ ရက်အတွင်း ဘယ်နှယောက်က ပြန်မှတ်မိနေမလဲဆိုတဲ့ ခန့်မှန်းချက် (Awareness Objective အတွက်)
(C) Like ပမာဏ
(D) Share ပမာဏ
အဖြေ: B
၇၆။ Forecasting မှာ "Reach vs Impressions Gap" ကြီးမားနေရင် ဘာကို ဆိုလိုတာလဲ?
(A) လူတိုင်း ကြော်ငြာကို ၁ ကြိမ်ပဲ မြင်ရခြင်း
(B) လူတစ်ယောက်တည်းကို ကြော်ငြာ ခဏခဏ ပြသနေခြင်း (High Frequency)
(C) ကြော်ငြာကို ဘယ်သူမှ မမြင်ခြင်း
(D) Website error ဖြစ်ခြင်း
အဖြေ: B
၇၇။ "Baseline Performance" ဆိုတာ ခန့်မှန်းချက်တွေမှာ ဘာအတွက် သုံးတာလဲ?
(A) အရင်က ရခဲ့တဲ့ ပျမ်းမျှရလဒ်တွေကို အခြေခံပြီး နောင်လာမယ့် Campaign တွေအတွက် စံနှုန်းသတ်မှတ်ရန်
(B) အသစ်စတင်ရန်
(C) ပိုက်ဆံကုန်ရန်
(D) ပုံဆွဲရန်
အဖြေ: A
၇၈။ Campaign Planner မှာ "Frequency Distribution" က ဘာကို ပြသလဲ?
(A) ပိုက်ဆံ ဘယ်မှာ သုံးလဲဆိုတာ
(B) လူဘယ်နှစ်ရာခိုင်နှုန်းက ကြော်ငြာကို ၁ ကြိမ်မြင်လဲ၊ ဘယ်နှစ်ရာခိုင်နှုန်းက ၂ ကြိမ်မြင်လဲ စသဖြင့် ခွဲခြားပြသခြင်း
(C) တစ်ပတ်အတွင်း နေ့ရက်များ
(D) Facebook Page အမျိုးအစား
အဖြေ: B
၇၉။ Planning လုပ်တဲ့အခါ "Audience Insight" ကို ဘာကြောင့် ထည့်သွင်းစဉ်းစားသင့်သလဲ?
(A) အပျော်ဖတ်ရန်
(B) မိမိ Target ထားတဲ့လူတွေရဲ့ အပြုအမူနဲ့ ကိုက်ညီတဲ့ Placement နဲ့ အချိန်ကို ခန့်မှန်းနိုင်ဖို့
(C) Facebook ကုမ္ပဏီကို သိချင်လို့
(D) ဖုန်းနံပါတ် ရှာဖို့
အဖြေ: B
၈၀။ Meta Blueprint Certification မှာ Performance Planning နဲ့ ပတ်သက်ပြီး အဓိက ဘာကို စစ်ဆေးတာလဲ?
(A) ပုံလှလှ ဆွဲတတ်ခြင်း
(B) စီးပွားရေး ရည်မှန်းချက်အပေါ် မူတည်ပြီး Budget နဲ့ Audience ကို ထိရောက်စွာ ခန့်မှန်းစီမံနိုင်ခြင်း
(C) အမြန် ရိုက်တတ်ခြင်း
(D) Facebook ကို နေ့တိုင်း သုံးခြင်း
အဖြေ: B
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

function stripAnswerKey(line: string) {
  return line.replace(/\s*အဖြေ:\s*[A-D](?:\s*\([^)]*\))?$/u, "").trim();
}

function getOptionMarkers(line: string) {
  const markers: { end: number; letter: string; start: number }[] = [];
  const regex = /(^|\s)(?:\(([A-D])\)|([A-D])\))\s*/gu;

  for (const match of line.matchAll(regex)) {
    const prefix = match[1] ?? "";
    const letter = match[2] ?? match[3];

    if (!letter || match.index === undefined) {
      continue;
    }

    markers.push({
      letter,
      start: match.index + prefix.length,
      end: match.index + match[0].length,
    });
  }

  return markers;
}

function extractInlineOptions(line: string) {
  const cleanedLine = stripAnswerKey(line);
  const allMarkers = getOptionMarkers(cleanedLine);
  const expected = ["A", "B", "C", "D"];
  const markers: typeof allMarkers = [];
  let searchIndex = 0;

  for (const letter of expected) {
    const marker = allMarkers.find((item, index) => index >= searchIndex && item.letter === letter);

    if (!marker) {
      return null;
    }

    markers.push(marker);
    searchIndex = allMarkers.indexOf(marker) + 1;
  }

  const question = cleanedLine.slice(0, markers[0].start).trim();

  if (!question) {
    return null;
  }

  const options = markers.map((marker, index) => {
    const end = markers[index + 1]?.start ?? cleanedLine.length;

    return cleanedLine.slice(marker.end, end).trim();
  });

  if (options.some((option) => !option)) {
    return null;
  }

  return { question, options };
}

function extractInlineOptionBlock(line: string) {
  const cleanedLine = stripAnswerKey(line);
  const markers = getOptionMarkers(cleanedLine);

  if (markers.length < 4) {
    return null;
  }

  const expected = ["A", "B", "C", "D"];

  if (!expected.every((letter, index) => markers[index]?.letter === letter)) {
    return null;
  }

  const options = markers.slice(0, 4).map((marker, index) => {
    const end = markers[index + 1]?.start ?? cleanedLine.length;

    return cleanedLine.slice(marker.end, end).trim();
  });

  if (options.some((option) => !option)) {
    return null;
  }

  return options;
}

function extractOptionLine(line: string) {
  const cleanedLine = stripAnswerKey(line);
  const match = cleanedLine.match(/^(?:\(([A-D])\)|([A-D])\))\s*(.*)$/u);

  if (!match) {
    return null;
  }

  return match[3]?.trim() ?? "";
}

function parseMetaMediaPlanningQuestions(): NumberedMockExamQuestion[] {
  const lines = metaMediaPlanningQuestionBankSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questions: NumberedMockExamQuestion[] = [];
  let currentSection = "Meta Certified Media Planning Professional";
  let currentQuestionNumber = 0;
  let currentQuestionLines: string[] = [];
  let currentOptions: string[] = [];

  function flushCurrentQuestion() {
    if (currentQuestionNumber === 0 || currentQuestionLines.length === 0 || currentOptions.length < 4) {
      return;
    }

    questions.push({
      questionNumber: currentQuestionNumber,
      id: `meta-media-planning-bank-q${String(currentQuestionNumber).padStart(2, "0")}`,
      topic: currentSection,
      question: currentQuestionLines.join(" ").replaceAll(/\s+/g, " ").trim(),
      options: currentOptions.map((option) => option.replaceAll(/\s+/g, " ").trim()),
      explanation: `Practice question from ${currentSection}.`,
      selectionMode: "single",
    });
  }

  for (const line of lines) {
    if (line.startsWith("Part ")) {
      flushCurrentQuestion();
      currentSection = line;
      currentQuestionNumber = 0;
      currentQuestionLines = [];
      currentOptions = [];
      continue;
    }

    if (line.startsWith("ဟုတ်ကဲ့")) {
      continue;
    }

    if (line.startsWith("အဖြေ:")) {
      continue;
    }

    const questionStart = parseQuestionNumber(line);

    if (questionStart) {
      flushCurrentQuestion();
      currentQuestionNumber = questionStart.number;
      currentQuestionLines = [];
      currentOptions = [];

      const inline = extractInlineOptions(questionStart.text);

      if (inline) {
        currentQuestionLines = [inline.question];
        currentOptions = inline.options;
      } else {
        currentQuestionLines = [stripAnswerKey(questionStart.text)];
      }

      continue;
    }

    const optionBlock = extractInlineOptionBlock(line);

    if (optionBlock) {
      currentOptions = optionBlock;
      continue;
    }

    const optionLine = extractOptionLine(line);

    if (optionLine) {
      currentOptions.push(optionLine);
      continue;
    }

    if (currentQuestionNumber > 0 && currentOptions.length === 0) {
      currentQuestionLines.push(stripAnswerKey(line));
    }
  }

  flushCurrentQuestion();

  return questions.sort((left, right) => left.questionNumber - right.questionNumber);
}

export const metaMediaPlanningQuestionBank = parseMetaMediaPlanningQuestions().map((question) => ({
  id: question.id,
  topic: question.topic,
  question: question.question,
  options: question.options,
  explanation: question.explanation,
  selectionMode: question.selectionMode,
}));
