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

const digitalMarketingStarterQuestionSource = String.raw`
အပိုင်း (၁) - အခြေခံသဘောတရားနှင့် မားကက်တင်း Funnel (၁-၁၀)
၁။ Digital Marketing ဆိုတာ ဘာလဲ? (က) ကွန်ပျူတာဖြင့်သာ ပြုလုပ်ရသော ရောင်းဝယ်ရေး (ခ) အင်တာနက်နှင့် ဒစ်ဂျစ်တယ်နည်းပညာများကို အသုံးပြု၍ ထုတ်ကုန်/ဝန်ဆောင်မှုများကို အရောင်းမြှင့်တင်ခြင်း (ဂ) ရုပ်မြင်သံကြားကြော်ငြာများကိုသာ ဦးစားပေးခြင်း (ဃ) စာရွက်စာတမ်းများဖြင့် ကြော်ငြာခြင်း
၂။ Marketing Funnel ရဲ့ ပထမဆုံးအဆင့်က ဘာလဲ? (က) Conversion (ခ) Consideration (ဂ) Awareness (ဃ) Loyalty
၃။ "Inbound Marketing" ဆိုတာ ဘာကိုဆိုလိုတာလဲ? (က) အလိုလိုလာအောင် ဆွဲဆောင်တဲ့ မားကက်တင်း (ခ) ဖုန်းခေါ်ပြီး အရောင်းမြှင့်တင်ခြင်း (ဂ) စာစောင်များ လိုက်ဝေခြင်း (ဃ) အင်တာနက်မသုံးဘဲ ကြော်ငြာခြင်း
၄။ Target Audience ဆိုတာ ဘာလဲ? (က) ကြော်ငြာကို မြင်သမျှလူအားလုံး (ခ) ကြော်ငြာကို စိတ်ဝင်စားနိုင်တဲ့ သီးခြားလူအုပ်စု (ဂ) ကုမ္ပဏီဝန်ထမ်းများ (ဃ) ပြိုင်ဘက်ကုမ္ပဏီများ
၅။ Brand Awareness ဆိုတာ ဘာကိုတိုင်းတာတာလဲ? (က) ရောင်းရငွေ (ခ) လူတွေရဲ့ လုပ်ငန်းအပေါ် သိရှိမှုပမာဏ (ဂ) အမြတ်ငွေ (ဃ) ဝဘ်ဆိုက်ကလစ်နှိပ်သူများ
၆။ Digital Marketing ရဲ့ အဓိက အားသာချက်က ဘာလဲ? (က) ရလဒ်ကို တိုင်းတာနိုင်ခြင်း (ခ) စျေးသက်သာခြင်း (ဂ) လူတိုင်းကို တစ်ပြိုင်နက် ရောက်ရှိနိုင်ခြင်း (ဃ) အထက်ပါ အချက်အားလုံး
၇။ KPI ဆိုတာ ဘာလဲ? (က) Key Performance Indicator (ခ) Key Public Information (ဂ) Key Product Introduction (ဃ) Key Price Index
၈။ Conversion ဆိုတာ ဘာလဲ? (က) လူတွေ ကြော်ငြာကို ကြည့်ခြင်း (ခ) လိုချင်တဲ့ လုပ်ဆောင်ချက်တစ်ခု (ဥပမာ-ဝယ်ယူခြင်း) ကို လုပ်ဆောင်ခြင်း (ဂ) ဝဘ်ဆိုက်ကို လာရောက်ကြည့်ရှုခြင်း (ဃ) Like ပေးခြင်း
၉။ Marketing Plan တစ်ခုမှာ ဘာတွေ အဓိကပါရမလဲ? (က) ပန်းတိုင် (Goal) (ခ) ပရိသတ် (Target Audience) (ဂ) ဘတ်ဂျက်နှင့် အချိန်ကာလ (ဃ) အထက်ပါ အချက်အားလုံး
၁၀။ Customer Journey ဆိုတာ ဘာလဲ? (က) ဝယ်ယူသူဆိုင်သို့ သွားသည့်လမ်း (ခ) ဝယ်ယူသူက ကုန်ပစ္စည်းအကြောင်း စသိကတည်းက ဝယ်ယူပြီးသည်အထိ အဆင့်ဆင့်ဖြတ်သန်းမှု (ဂ) Delivery ပို့သည့်လမ်းကြောင်း (ဃ) ရုံးခန်းမှ အိမ်သို့ ပြန်သည့်အချိန်
အပိုင်း (၂) - SEO နှင့် ဝဘ်ဆိုက် (၁၁-၂၀)
၁၁။ SEO ဆိုတာ ဘာလဲ? (က) Search Engine Optimization (ခ) Social Engine Optimization (ဂ) Search Engine Organization (ဃ) Social Engine Organization
၁၂။ "Keyword" ဆိုတာ ဘာလဲ? (က) ဝဘ်ဆိုက်တစ်ခုရဲ့ လျှို့ဝှက်ချက် (ခ) အသုံးပြုသူတွေ Search Engine မှာ ရိုက်ထည့်ရှာဖွေတဲ့ စကားလုံးများ (ဂ) ကြော်ငြာတစ်ခုရဲ့ ဈေးနှုန်း (ဃ) ဆိုရှယ်မီဒီယာ စာမျက်နှာအမည်
၁၃။ On-page SEO ဆိုတာ ဘာလဲ? (က) ဝဘ်ဆိုက်ပြင်ပက ပြုလုပ်ခြင်း (ခ) ဝဘ်ဆိုက်စာမျက်နှာပေါ်က အကြောင်းအရာ၊ ခေါင်းစဉ်များကို ပြုပြင်ခြင်း (ဂ) Facebook ကြော်ငြာခြင်း (ဃ) Email ပို့ခြင်း
၁၄။ Bounce Rate ဆိုတာ ဘာလဲ? (က) ဝဘ်ဆိုက်ကို လာပြီး ဘာမှမလုပ်ဘဲ ပြန်ထွက်သွားနှုန်း (ခ) ဝဘ်ဆိုက်မှာ ဈေးဝယ်သွားနှုန်း (ဂ) ဝဘ်ဆိုက်ကို လာတဲ့ လူဦးရေ (ဃ) ဝဘ်ဆိုက်မှာ ပိုက်ဆံဖြုန်းသွားနှုန်း
၁၅။ Backlink ဆိုတာ ဘာလဲ? (က) ကိုယ့်ဝဘ်ဆိုက်ကို တခြားဝဘ်ဆိုက်ကနေ ညွှန်းဆိုပေးထားခြင်း (ခ) ကိုယ့်ဝဘ်ဆိုက်ရဲ့ လင့်ခ်အသေ (ဂ) Facebook page link (ဃ) Email link
၁၆။ Mobile-friendly ဝဘ်ဆိုက်ဖြစ်ဖို့ ဘာကြောင့် လိုအပ်တာလဲ? (က) ဖုန်းနဲ့ ကြည့်တဲ့သူ များလာလို့ (ခ) ပိုလှလို့ (ဂ) စျေးသက်သာလို့ (ဃ) အင်တာနက် အမြန်နှုန်း မြန်လို့
၁၇။ Alt Text ကို ဘာအတွက် သုံးသလဲ? (က) စာသားတွေကို အရောင်ခြယ်ဖို့ (ခ) ပုံရိပ်တွေကို ဖော်ပြဖို့ (Search Engine နားလည်အောင်) (ဂ) ဗီဒီယိုတွေကို အမြန်တင်ဖို့ (ဃ) လင့်ခ်တွေ ပျက်သွားမှာစိုးလို့
၁၈။ SEO ရဲ့ အဓိက ရည်ရွယ်ချက်က ဘာလဲ? (က) အခမဲ့ traffic ပိုများများရဖို့ (ခ) Facebook မှာ Like များဖို့ (ဂ) ကြော်ငြာစရိတ် လျှော့ချဖို့ (ဃ) ပိုလှတဲ့ ပုံတွေတင်ဖို့
၁၉။ SERP ဆိုတာ ဘာလဲ? (က) Search Engine Results Page (ခ) Search Engine Review Page (ဂ) Search Engine Ranking Program (ဃ) Search Engine Related Page
၂၀။ Meta Description ရဲ့ အဓိက အလုပ်က ဘာလဲ? (က) ဝဘ်ဆိုက်ရဲ့ ဝင်ပေါက်အဖြစ် လုပ်ဆောင်ပေးခြင်း (ခ) ရှာဖွေမှု ရလဒ်မှာ ကြော်ငြာစာသားအနေနဲ့ ပေါ်လာပြီး လူတွေကို နှိပ်အောင် ဆွဲဆောင်ခြင်း (ဂ) ပုံတွေကို အလိုအလျောက် ပြောင်းပေးခြင်း (ဃ) ဝဘ်ဆိုက်ရဲ့ တည်နေရာကို ပြခြင်း
အပိုင်း (၃) - Content Marketing (၂၁-၃၀)
၂၁။ "Content is King" ဆိုတာ ဘာကိုဆိုလိုတာလဲ? (က) Content တွေက ဈေးကြီးတယ်လို့ ပြောတာ (ခ) အသုံးဝင်တဲ့ အကြောင်းအရာ (Content) က အောင်မြင်ဖို့ အဓိကအချက်လို့ ပြောတာ (ဂ) ဘုရင်တွေအကြောင်းပဲ ရေးရမယ်လို့ ပြောတာ (ဃ) Content မရေးရင် အလုပ်မဖြစ်ဘူးလို့ ပြောတာ
၂၂။ Blog Post တစ်ခုရဲ့ ရည်ရွယ်ချက်က ဘာလဲ? (က) ဗဟုသုတပေးရန်နှင့် အဖြေရှာပေးရန် (ခ) ကုန်ပစ္စည်းကို အတင်းရောင်းရန် (ဂ) ပုံတွေပဲ တင်ရန် (ဃ) သူများအကြောင်း ရေးရန်
၂၃။ Storytelling က မားကက်တင်းမှာ ဘာလို့ အရေးကြီးတာလဲ? (က) လူတွေက အဖြစ်အပျက်တွေကို ပိုမှတ်မိပြီး စိတ်ဝင်စားလို့ (ခ) စာပိုရှည်လို့ (ဂ) အားလုံးက လုပ်နေလို့ (ဃ) စျေးသက်သာလို့
၂၄။ Content Calendar တစ်ခုရဲ့ အကျိုးကျေးဇူးက ဘာလဲ? (က) အကြောင်းအရာတွေကို စနစ်တကျ ကြိုတင်စီစဉ်နိုင်ခြင်း (ခ) အလုပ်ပိုများစေခြင်း (ဂ) ကွန်ပျူတာကို ပိုမြန်စေခြင်း (ဃ) Facebook page ကို ပိတ်ခြင်း
၂၅။ Infographic ဆိုတာ ဘာလဲ? (က) စာသားအများကြီးပါတဲ့ စာရွက် (ခ) ပုံစံ၊ ဂရပ်ဖစ်တွေနဲ့ အချက်အလက်တွေကို အလွယ်တကူ နားလည်အောင် ဖော်ပြခြင်း (ဂ) ဗီဒီယို (ဃ) အသံဖိုင်
၂၆။ Content Marketing မှာ လူတွေရဲ့ "Intent" (ရည်ရွယ်ချက်) ကို ဘာလို့ နားလည်ရမလဲ? (က) သူတို့ လိုချင်တာကို ပေးနိုင်ဖို့ (ခ) သူတို့ကို ဒုက္ခပေးဖို့ (ဂ) သူတို့အကြောင်း သိချင်လို့ (ဃ) အလုပ်လုပ်ရတာ ပျင်းလို့
၂၇။ Content Repurposing ဆိုတာ ဘာလဲ? (က) Content အဟောင်းကို ပုံစံသစ်နဲ့ ပြန်သုံးခြင်း (ခ) Content တွေကို ဖျက်ပစ်ခြင်း (ဂ) Content တွေကို ခိုးကူးခြင်း (ဃ) Content တွေကို ဝယ်ခြင်း
၂၈။ Viral Content ဖြစ်ဖို့အတွက် ဘယ်အချက်က အရေးပါဆုံးလဲ? (က) ပျော်ရွှင်စရာ သို့မဟုတ် အံ့အားသင့်စရာကောင်းခြင်း (ခ) စာသားအရှည်ကြီးဖြစ်ခြင်း (ဂ) ပုံအမည်းရောင်ဖြစ်ခြင်း (ဃ) လူမသိတဲ့ စကားလုံးတွေ သုံးခြင်း
၂၉။ Copywriting ဆိုတာ ဘာလဲ? (က) စာအုပ်ရေးခြင်း (ခ) စိတ်ဝင်စားအောင် ရေးပြီး လုပ်ဆောင်ချက်တစ်ခု (Action) လုပ်လာအောင် ဆွဲဆောင်ရေးသားခြင်း (ဂ) သတင်းစာဖတ်ခြင်း (ဃ) အချက်အလက် စုဆောင်းခြင်း
၃၀။ User Generated Content ဆိုတာ ဘာလဲ? (က) ကုမ္ပဏီက တရားဝင်ရေးတဲ့ စာ (ခ) Customer တွေက ကိုယ့်ကုန်ပစ္စည်းအကြောင်း ပြန်ရေးပေးတဲ့ Content (ဂ) သတင်းစာထဲက စာ (ဃ) ကုမ္ပဏီ CEO ရဲ့ စကား
အပိုင်း (၄) - Social Media Marketing (၃၁-၄၀)
Getty Images
Explore
၃၁။ Organic Reach ဆိုတာ ဘာလဲ? (က) ပိုက်ဆံပေးပြီး ကြော်ငြာတာ (ခ) ကြော်ငြာခ မပေးဘဲ သဘာဝအတိုင်း လူတွေဆီ ရောက်တာ (ဂ) အဖွဲ့လိုက်လုပ်တာ (ဃ) ဗီဒီယိုကြည့်တာ
၃၂။ Engagement Rate ဆိုတာ ဘာလဲ? (က) Like, Comment, Share စတဲ့ လူတွေရဲ့ တုံ့ပြန်မှုနှုန်း (ခ) ကြော်ငြာခ (ဂ) ဝဘ်ဆိုက်လင့်ခ် (ဃ) follower အသစ်အရေအတွက်
၃၃။ Social Proof ဆိုတာ ဘာလဲ? (က) တခြားသူတွေရဲ့ ယုံကြည်မှု (ဥပမာ-Review) ကို ပြပြီး ကိုယ့်ကို ယုံအောင်လုပ်ခြင်း (ခ) Facebook စာမျက်နှာအသစ် (ဂ) လျှို့ဝှက်ချက် (ဃ) ပိုက်ဆံပေးဝယ်တဲ့ Like တွေ
၃၄။ Hashtag ကို ဘာလို့ သုံးတာလဲ? (က) စာပိုလှအောင် (ခ) ခေါင်းစဉ်အလိုက် လူတွေ ရှာတွေ့လွယ်အောင် (ဂ) ကွန်ပျူတာ ပိုမြန်အောင် (ဃ) follower တွေကို ခြောက်လှန့်ဖို့
၃၅။ LinkedIn က ဘယ်လို လုပ်ငန်းအတွက် အကောင်းဆုံးလဲ? (က) အစားအသောက်ဆိုင် (ခ) B2B (Business to Business) နှင့် အလုပ်အကိုင်ရှာဖွေရေး (ဂ) ကလေးကစားစရာ (ဃ) အဝတ်အစား
၃၆။ Social Media မှာ ပုံမှန်တင်ခြင်း (Consistency) ရဲ့ အကျိုးကျေးဇူးက ဘာလဲ? (က) လူတွေက ကိုယ့်ကို မေ့မသွားအောင်လုပ်ခြင်း (ခ) အလုပ်ရှုပ်ခြင်း (ဂ) Facebook ကို ပျော်အောင်လုပ်ခြင်း (ဃ) အင်တာနက် အမြန်နှုန်း တိုးခြင်း
၃၇။ Influencer Marketing ဆိုတာ ဘာလဲ? (က) လူသိများတဲ့သူတွေနဲ့ လက်တွဲပြီး ကြော်ငြာခြင်း (ခ) ကြော်ငြာကို ရပ်လိုက်ခြင်း (ဂ) ဝဘ်ဆိုက်ကို ပိတ်ထားခြင်း (ဃ) အလုပ်သမားခေါ်ခြင်း
၃၈။ Facebook Page နဲ့ Group ဘာကွာလဲ? (က) ဘာမှမကွာဘူး (ခ) Page က တရားဝင်၊ Group က အသိုင်းအဝိုင်း ဆွေးနွေးဖို့ (ဂ) Page က ပိုစျေးကြီးတယ် (ဃ) Group က ပိုကြီးတယ်
၃၉။ Social Media မှာ Video Content တွေ ဘာလို့ လူကြိုက်များသလဲ? (က) ကြည့်ရတာ ပိုလွယ်ပြီး စိတ်ဝင်စားဖို့ကောင်းလို့ (ခ) ပုံတွေထက် ပိုစျေးသက်သာလို့ (ဂ) ကွန်ပျူတာ ပိုမြန်လို့ (ဃ) အကုန်လုံး လုပ်နေလို့
၄၀။ Twitter/X မှာ အရေးကြီးတဲ့ အချက်က ဘာလဲ? (က) စာတိုတိုနဲ့ အချိန်ကိုက် တင်ခြင်း (ခ) စာအရှည်ကြီး ရေးခြင်း (ဂ) ဗီဒီယိုပဲ တင်ခြင်း (ဃ) ပုံအကြီးကြီးတင်ခြင်း
အပိုင်း (၅) - PPC, Analytics နှင့် အနှစ်ချုပ် (၄၁-၅၀)
၄၁။ PPC ဆိုတာ ဘာလဲ? (က) Pay Per Click (ခ) Pay Per Call (ဂ) Pay Per Customer (ဃ) Price Per Click
၄၂။ Google Analytics က ဘာကို တိုင်းတာပေးတာလဲ? (က) ဝဘ်ဆိုက်ကို လာရောက်သူတွေ ဘာတွေလုပ်နေလဲဆိုတာကို တိုင်းတာပေးခြင်း (ခ) Facebook မှာ Like ဘယ်လောက်ရလဲ တိုင်းတာခြင်း (ဂ) ကုမ္ပဏီရဲ့ အမြတ်ကို တိုင်းတာခြင်း (ဃ) အင်တာနက်ဖိုးကို တိုင်းတာခြင်း
၄၃။ A/B Testing ဆိုတာ ဘာလဲ? (က) ကြော်ငြာ ၂ ခုကို ယှဉ်ပြီး ဘယ်တစ်ခုက ပိုကောင်းလဲ စမ်းသပ်ခြင်း (ခ) ကြော်ငြာကို ဖျက်ပစ်ခြင်း (ဂ) ကြော်ငြာခကို တိုးခြင်း (ဃ) ကြော်ငြာအသစ်ကို ဒီအတိုင်းတင်ခြင်း
၄၄။ ROI (Return on Investment) ဆိုတာ ဘာလဲ? (က) ရင်းနှီးမြှုပ်နှံမှုအပေါ် ပြန်ရတဲ့ အမြတ် (ခ) ပိုက်ဆံအိတ် (ဂ) ဘဏ်စာရင်း (ဃ) အသုံးစရိတ်
၄၅။ Remarketing ဆိုတာ ဘာလဲ? (က) တစ်ခါဝင်ဖူးတဲ့သူကို ကြော်ငြာပြန်ပြခြင်း (ခ) ပစ္စည်းအသစ်ရောင်းခြင်း (ဂ) ဝန်ထမ်းခေါ်ခြင်း (ဃ) ဆိုင်ပိတ်ခြင်း
၄၆။ Google Search Ads မှာ "Ad Rank" ကို ဘာတွေက ဆုံးဖြတ်သလဲ? (က) လေလံနှုန်း (Bid) နဲ့ ကြော်ငြာအရည်အသွေး (Quality Score) (ခ) စာရိုက်တဲ့ မြန်နှုန်း (ဂ) ကွန်ပျူတာ အမျိုးအစား (ဃ) ရုံးခန်းတည်နေရာ
၄၇။ CLV (Customer Lifetime Value) ဆိုတာ ဘာလဲ? (က) Customer တစ်ယောက်က သူ့တစ်သက်တာမှာ ကိုယ့်ဆီကနေ ဝယ်မယ့်စုစုပေါင်းတန်ဖိုး (ခ) Customer ရဲ့ အသက်အရွယ် (ဂ) Customer ရဲ့ နေရပ်လိပ်စာ (ဃ) Customer ရဲ့ ဖုန်းနံပါတ်
၄၈။ Display Ads ဆိုတာ ဘာလဲ? (က) ဝဘ်ဆိုက်တွေပေါ်မှာ ပေါ်တဲ့ ပုံစံ (Banner) ကြော်ငြာတွေ (ခ) Google Search မှာ ပေါ်တဲ့ စာသားကြော်ငြာ (ဂ) Email (ဃ) စာစောင်
၄၉။ Digital Marketing မှာ အရေးအကြီးဆုံးအချက်က ဘာလဲ? (က) ပရိသတ်ကို သိခြင်းနှင့် ရလဒ်ကို တိုင်းတာခြင်း (ခ) ပုံလှလှတင်ခြင်း (ဂ) အမြဲတမ်း ပိုက်ဆံသုံးခြင်း (ဃ) အလုပ်လုပ်ရတာ ပျင်းခြင်း
၅၀။ Campaign တစ်ခု မအောင်မြင်ရင် ဘာလုပ်သင့်သလဲ? (က) အချက်အလက်တွေကို ပြန်ကြည့်ပြီး အမှားကို ရှာကာ ပြုပြင်ခြင်း (Optimize) (ခ) ရပ်လိုက်ခြင်း (ဂ) အတင်းဆက်လုပ်ခြင်း (ဃ) ပြိုင်ဘက်ကို အပြစ်တင်ခြင်း
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
  const questionText = line.split("(က)")[0]?.trim();
  const optionParts = line
    .split(/\((?:က|ခ|ဂ|ဃ)\)\s*/)
    .slice(1)
    .map((part) => part.trim())
    .filter(Boolean);

  if (!questionText || optionParts.length === 0) {
    return null;
  }

  return {
    question: questionText,
    options: optionParts,
  };
}

function extractTrailingOptionList(line: string) {
  const match = line.match(/^(.*)\(([^()]+,\s*[^()]+,\s*[^()]+(?:,\s*[^()]+)+)\)\s*$/);

  if (!match) {
    return null;
  }

  return {
    question: match[1]?.trim() ?? line,
    options: match[2]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  };
}

function normalizeQuestionHints(question: string) {
  return normalizeMyanmarDigits(question);
}

function getSelectionMeta(question: string) {
  const normalized = normalizeQuestionHints(question);

  if (
    normalized.includes("နှစ်ခု") ||
    normalized.includes("အဖြေနှစ်ခု") ||
    normalized.includes("နှစ်မျိုး") ||
    normalized.includes("အကျိုးကျေးဇူး နှစ်ခု")
  ) {
    return {
      helperText: "Select 2 answers",
      selectionCount: 2,
      selectionMode: "multiple" as const,
    };
  }

  if (
    normalized.includes("သုံးခု") ||
    normalized.includes("အကျိုးကျေးဇူး (3) ခု") ||
    normalized.includes("မှန်ကန်သော အဖြေ 3 ခု") ||
    normalized.includes("အဆင့်သုံးဆင့်")
  ) {
    return {
      helperText: "Select 3 answers",
      selectionCount: 3,
      selectionMode: "multiple" as const,
    };
  }

  return {
    helperText: undefined,
    selectionCount: undefined,
    selectionMode: "single" as const,
  };
}

function parseDigitalMarketingStarterQuestions(): MockExamQuestion[] {
  const lines = digitalMarketingStarterQuestionSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => line !== "Getty Images" && line !== "Explore");
  const questions: MockExamQuestion[] = [];
  let currentSection = "Digital Marketing Fundamentals";
  let currentQuestionNumber = 0;
  let currentQuestionLines: string[] = [];
  let currentOptions: string[] = [];

  function flushCurrentQuestion() {
    if (currentQuestionLines.length === 0) {
      return;
    }

    const question = currentQuestionLines.join(" ").replaceAll(/\s+/g, " ").trim();

    questions.push({
      id: `digital-marketing-self-check-q${String(currentQuestionNumber || questions.length + 1).padStart(2, "0")}`,
      topic: currentSection,
      question,
      options: currentOptions,
      explanation: `Starter self-check item from ${currentSection}.`,
      ...getSelectionMeta(question),
    });
  }

  for (const line of lines) {
    if (line.startsWith("အပိုင်း")) {
      flushCurrentQuestion();
      currentSection = line;
      currentQuestionNumber = 0;
      currentQuestionLines = [];
      currentOptions = [];
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
        const trailingOptions = extractTrailingOptionList(questionStart.text);

        if (trailingOptions) {
          currentQuestionLines = [trailingOptions.question];
          currentOptions = trailingOptions.options;
        } else {
          currentQuestionLines = [questionStart.text];
        }
      }

      continue;
    }

    if (line.startsWith("(က)") || line.startsWith("(ခ)") || line.startsWith("(ဂ)") || line.startsWith("(ဃ)")) {
      currentOptions.push(
        line
          .replace(/^\((က|ခ|ဂ|ဃ)\)\s*/, "")
          .trim(),
      );
      continue;
    }

    if (line.startsWith("(ရွေးချယ်စရာများ -")) {
      currentOptions = line
        .replace("(ရွေးချယ်စရာများ -", "")
        .replace(")", "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      continue;
    }

    currentOptions.push(line);
  }

  flushCurrentQuestion();

  return questions;
}

export const digitalMarketingStarterQuestionBank = parseDigitalMarketingStarterQuestions();
