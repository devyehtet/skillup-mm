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

const metaMediaBuyingQuestionBankSource = String.raw`
Part 1: Campaign Planning & Strategy (မေးခွန်း ၁ - ၂၀)
၁။ ကုန်ပစ္စည်းအသစ်တစ်ခုကို လူအများကြီး မြင်စေချင်တဲ့အခါ ဘယ် Objective ကို ရွေးရမလဲ?
(A) Awareness (B) Traffic (C) App Promotion (D) Sales
အဖြေ: A
၂။ Campaign Budget Optimization (CBO/Advantage+ Budget) ကို သုံးတဲ့အခါ Budget ကို ဘယ်နေရာမှာ သတ်မှတ်ရသလဲ?
(A) Ad level (B) Ad Set level (C) Campaign level (D) Account level
အဖြေ: C
၃။ "Reach and Frequency" buying type ကို သုံးဖို့ အဓိက အကြောင်းရင်းက ဘာလဲ?
(A) ဈေးအသက်သာဆုံးဖြစ်လို့ (B) လူဘယ်နှစ်ယောက်ဆီ ရောက်မယ်ဆိုတာကို ကြိုတင်ခန့်မှန်းပြီး ထိန်းချုပ်ချင်လို့ (C) Like များများရလို့ (D) App သွင်းစေချင်လို့
အဖြေ: B
၄။ Campaign တစ်ခုရဲ့ ရည်ရွယ်ချက်က "Offline Sales" ဆိုရင် ဘာကို ဆိုလိုတာလဲ?
(A) Website ကနေ ဝယ်တာ (B) ဆိုင်ကို လူကိုယ်တိုင် လာဝယ်တာ (C) ဖုန်းဆက်ဝယ်တာ (D) အွန်လိုင်းကနေ မှာယူတာ
အဖြေ: B
၅။ Bidding Strategy ထဲက "Cost Cap" ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ?
(A) အကန့်အသတ်မရှိ သုံးရန် (B) ပျမ်းမျှ Conversion တစ်ခုစာ ကုန်ကျစရိတ်ကို မိမိသတ်မှတ်ထားတဲ့ ပမာဏထက် မကျော်စေရန် (C) ဈေးအမြင့်ဆုံးပေးရန် (D) အမြဲတမ်း နိုင်ရန်
အဖြေ: B
၆။ A/B Testing လုပ်တဲ့အခါ ဘယ်နှစ်ရက်အထိ အနည်းဆုံး ထားသင့်သလဲ?
(A) ၁ ရက် (B) ၃ ရက်မှ ၁၄ ရက်အတွင်း (C) ၁ လ (D) ၂ လ
အဖြေ: B
၇။ Audience Overlap ဖြစ်ရင် ဘာဖြစ်တတ်သလဲ?
(A) ကြော်ငြာခ ဈေးသက်သာလာခြင်း (B) မိမိရဲ့ Ad Sets အချင်းချင်း လေလံပြိုင်ဆိုင်မှုဖြစ်ပြီး Performance ကျခြင်း (C) Facebook က ဆုပေးခြင်း (D) ပိုပြီး လူမြင်များခြင်း
အဖြေ: B
၈။ Meta Business Suite ရဲ့ အဓိက အသုံးဝင်ပုံက ဘာလဲ?
(A) ပုံပြင်ရန် (B) Facebook နဲ့ Instagram ကို တစ်နေရာတည်းကနေ စီမံခန့်ခွဲရန် (C) Website ဆွဲရန် (D) အီးမေးလ် ပို့ရန်
အဖြေ: B
၉။ TRP (Target Rating Points) buying ကို ဘယ်သူတွေ အဓိက သုံးသလဲ?
(A) အသေးစား လုပ်ငန်းရှင်များ (B) TV ကြော်ငြာနှင့် Digital ကြော်ငြာကို တွဲသုံးချင်သော Brand ကြီးများ (C) ကျောင်းသားများ (D) ပရဟိတ အဖွဲ့များ
အဖြေ: B
၁၀။ "Estimated Action Rate" က ဘာပေါ်မှာ မူတည်သလဲ?
(A) သုံးစွဲသူရဲ့ အတိတ်က အပြုအမူနဲ့ ကြော်ငြာရဲ့ သက်ဆိုင်မှု (B) ဘဏ်စာရင်း (C) ဖုန်းအမျိုးအစား (D) ဓာတ်ပုံ အရွယ်အစား
အဖြေ: A
၁၁ မှ ၂၀ အထိ Key Terms: (၁၁) Auction (၁၂) Pacing (၁၃) Bid Cap (၁၄) Daily Budget vs Lifetime Budget (၁၅) Ad Scheduling (၁၆) Sequential Messaging (၁၇) Media Mix (၁၈) Brand Lift (၁၉) Conversion Lift (၂၀) Reach.

Part 2: Audience & Targeting (မေးခွန်း ၂၁ - ၄၀)
၂၁။ မိမိရဲ့ လက်ရှိ Customer တွေနဲ့ စရိုက်တူတဲ့သူတွေကို ရှာချင်ရင် ဘာသုံးမလဲ?
(A) Core Audience (B) Saved Audience (C) Lookalike Audience (D) Broad Targeting
အဖြေ: C
၂၂။ Custom Audience တစ်ခု တည်ဆောက်ဖို့ အနိမ့်ဆုံး လူဦးရေ ဘယ်လောက်ရှိသင့်သလဲ?
(A) ၁၀ ယောက် (B) ၁၀၀ ယောက် (C) ၁၀၀၀ ယောက် (D) ၁၀၀၀၀ ယောက်
အဖြေ: B (သို့သော် ၁၀၀၀ ကျော်လျှင် ပိုကောင်းသည်)
၂၃။ Lookalike Audience 1% ဆိုတာ ဘာလဲ?
(A) လူအနည်းဆုံး (B) မူရင်း Source နဲ့ အနီးစပ်ဆုံး တူညီသူများ (C) နိုင်ငံခြားသားများ (D) ဝယ်ဖို့ အလားအလာ မရှိသူများ
အဖြေ: B
၂၄။ Website Pixel Event "Add to Cart" က ဘာကို ဆိုလိုတာလဲ?
(A) ပစ္စည်းဝယ်ပြီးသွားခြင်း (B) ပစ္စည်းကို ခြင်းတောင်းထဲ ထည့်ခြင်း (C) Website ကို ကြည့်ရုံကြည့်ခြင်း (D) ဘာမှမလုပ်ခြင်း
အဖြေ: B
၂၅။ Broad Targeting မှာ Meta ရဲ့ Algorithm က ဘာကို အဓိက သုံးသလဲ?
(A) Interest တွေ အများကြီး (B) Machine Learning နှင့် ကန့်သတ်ချက်နည်းသော ပစ်မှတ်ထားမှု (C) Keyword ရှာဖွေမှု (D) ဖုန်းနံပါတ်
အဖြေ: B
၂၆။ "Detailed Targeting Expansion" (Advantage Detailed Targeting) ရဲ့ အလုပ်က ဘာလဲ?
(A) Targeting ကို ကျဉ်းပစ်ခြင်း (B) Conversion ရဖို့ အလားအလာရှိရင် ကိုယ်ရွေးထားတဲ့ Interest ပြင်ပက လူတွေကိုပါ တိုးချဲ့ပြခြင်း (C) ပိုက်ဆံ ချွေတာခြင်း (D) စာသားပြင်ခြင်း
အဖြေ: B
၂၇။ အသက်၊ ကျား/မ၊ တည်နေရာကိုပဲ အခြေခံပြီး Target ထားတာကို ဘာလို့ခေါ်သလဲ?
(A) Custom Audience (B) Core Audience (C) Lookalike Audience (D) Video Audience
အဖြေ: B
၂၈။ Customer Match သုံးဖို့ ဘာလိုအပ်သလဲ?
(A) Customer များ၏ Email သို့မဟုတ် ဖုန်းနံပါတ် (B) Customer များ၏ ဓာတ်ပုံ (C) Website URL (D) Page Like
အဖြေ: A
၂၉။ Audience Overlap Tool ကို ဘယ်မှာ တွေ့နိုင်သလဲ?
(A) Ads Manager (B) Audiences Section (C) Events Manager (D) Commerce Manager
အဖြေ: B
၃၀။ Dynamic Ads ရဲ့ အားသာချက်က ဘာလဲ?
(A) ပုံတစ်ပုံတည်းပြခြင်း (B) Website ပေါ်မှာ ကြည့်သွားတဲ့ ပစ္စည်းအတိအကျကို သုံးစွဲသူကို ပြန်ပြပေးခြင်း (C) အသံပဲ ပါခြင်း (D) အလကားရခြင်း
အဖြေ: B

Part 2 (ဆက်လက်ဖော်ပြချက်): Targeting & Events (မေးခွန်း ၃၁ - ၄၀)
၃၁။ "Standard Events" နဲ့ "Custom Conversions" ရဲ့ အဓိက ကွာခြားချက်က ဘာလဲ? A) Standard Events က Website URL ကိုပဲ သုံးပြီး Custom Conversions က Code ရေးရခြင်း B) Standard Events က Meta က သတ်မှတ်ထားတဲ့ ပုံသေလုပ်ဆောင်ချက်များ (ဥပမာ- Purchase) ဖြစ်ပြီး Custom Conversions က မိမိစိတ်ကြိုက် URL rule များဖြင့် သတ်မှတ်ခြင်း C) Custom Conversions က ဈေးပိုကြီးခြင်း D) ဘာမှမကွာခြားပါ အဖြေ: B
၃၂။ Website မှာ Pixel သုံးသလိုမျိုး Mobile App တွေမှာ အချက်အလက် ခြေရာခံဖို့ ဘာကို သုံးရမလဲ? A) Google Analytics B) Meta SDK (Software Development Kit) C) Cookies D) QR Code အဖြေ: B
၃၃။ "Offline Conversions" ကို ဘယ်လို အခြေအနေမှာ သုံးမလဲ? A) အင်တာနက် ပိတ်ထားချိန် B) ဆိုင်မှာ လူကိုယ်တိုင် လာဝယ်တဲ့ အချက်အလက်တွေကို CRM data ကနေတစ်ဆင့် ကြော်ငြာရလဒ်နဲ့ တိုက်စစ်ချင်တဲ့အခါ C) Website error တက်တဲ့အခါ D) Facebook Page ပျက်သွားတဲ့အခါ အဖြေ: B
၃၄။ "Value-based Lookalike Audience" ဆိုတာ ဘာလဲ? A) လူဦးရေ အများဆုံးကို ရှာခြင်း B) ဝယ်ယူမှုပမာဏ (Value) အများဆုံးရှိတဲ့ Customer တွေနဲ့ ဆင်တူတဲ့သူတွေကို ဦးစားပေးရှာဖွေခြင်း C) ဈေးလျှော့ပေးသူများကို ရှာခြင်း D) အလကား ပစ္စည်းပေးသူများကို ရှာခြင်း အဖြေ: B
၃၅။ နိုင်ငံအများကြီးကို တစ်ပြိုင်နက် Target ထားပြီး Lookalike တည်ဆောက်တာကို ဘာလို့ခေါ်သလဲ? A) Global Targeting B) Multi-country Lookalike Audience C) International Pixel D) Worldwide Reach အဖြေ: B
၃၆။ "Exclusions" (ဖယ်ထုတ်ခြင်း) ကို ဘာကြောင့် သုံးသင့်သလဲ? A) ကြော်ငြာခ ပိုပေးချင်လို့ B) ပစ္စည်းဝယ်ပြီးသားသူတွေကို ကြော်ငြာထပ်မပြဘဲ budget ချွေတာဖို့ C) လူအယောက် ၁၀၀၀ ပြည့်အောင်လုပ်ဖို့ D) အကောင့် အပိတ်ခံရအောင်လုပ်ဖို့ အဖြေ: B
၃၇။ "Retention Window" ဆိုတာ ဘာလဲ? A) ကြော်ငြာပြတဲ့ အချိန် B) လူတစ်ယောက် Website ရောက်ပြီးနောက် ဘယ်နှစ်ရက်အထိ Audience list ထဲမှာ ဆက်ရှိနေမလဲဆိုတဲ့ သတ်မှတ်ချက် C) ကွန်ပျူတာ ဝင်းဒိုး D) ဗီဒီယို ကြာချိန် အဖြေ: B
၃၈။ Lookalike Audience တစ်ခု တည်ဆောက်ဖို့ အသုံးပြုရတဲ့ မူရင်းလူစာရင်းကို ဘာလို့ခေါ်သလဲ? A) Source Audience (သို့မဟုတ်) Seed Audience B) Target Audience C) Cold Audience D) Fake Audience အဖြေ: A
၃၉။ "Interests Targeting" က ဘယ်အပေါ်မှာ အခြေခံတာလဲ? A) လူတွေရဲ့ အသက် B) လူတွေ Like လုပ်ထားတဲ့ Page တွေနဲ့ Facebook ပေါ်က သူတို့ရဲ့ စိတ်ဝင်စားမှု အပြုအမူများ C) သူတို့ရဲ့ ဘဏ်စာရင်း D) ဖုန်းနံပါတ် အဖြေ: B
၄၀။ "Broad Targeting" သုံးတဲ့အခါ ဘယ်အချက်တွေကိုပဲ ကိုယ်တိုင် သတ်မှတ်ပေးဖို့ လိုသလဲ? A) Keywords အားလုံး B) Location, Age, နှင့် Gender C) ဓာတ်ပုံ အရွယ်အစား D) အီးမေးလ် လိပ်စာ အဖြေ: B

Part 3: Creative & Placement (မေးခွန်း ၄၁ - ၆၀)
၄၁။ "Mobile-first Video" အတွက် အကောင်းဆုံး စည်းကမ်းက ဘာလဲ?
(A) ၁ မိနစ်ထက် ရှည်ရမည် (B) ပထမ ၃ စက္ကန့်မှာတင် ဆွဲဆောင်မှုရှိရမည် (C) အသံမပါရပါ (D) နောက်ဆုံးမှ Brand Logo ပြရမည်
အဖြေ: B
၄၂။ Carousel Ad တစ်ခုမှာ ကတ် (Card) အနည်းဆုံး ဘယ်နှစ်ခု ပါရသလဲ?
(A) ၁ ခု (B) ၂ ခု (C) ၅ ခု (D) ၁၀ ခု
အဖြေ: B
၄၃။ Instant Experience (IX) ဆိုတာ ဘာလဲ?
(A) Website အပြင်ဘက်ကို ခေါ်သွားခြင်း (B) Facebook App ထဲမှာတင် ပွင့်လာတဲ့ Full-screen Mobile Landing Page (C) စာတိုပို့ခြင်း (D) ဗီဒီယို ဂိမ်း
အဖြေ: B
၄၄။ "Advantage+ Placements" (Automatic Placements) ဆိုတာ ဘာလဲ?
(A) ကိုယ်တိုင် နေရာရွေးခြင်း (B) Meta ရဲ့ စနစ်က ရလဒ်အကောင်းဆုံးဖြစ်မယ့် နေရာတိုင်းမှာ အလိုအလျောက် ပြသပေးခြင်း (C) Instagram မှာပဲ ပြခြင်း (D) ဈေးအကြီးဆုံးနေရာ ရှာခြင်း
အဖြေ: B
၄၅။ Instagram Reels မှာ ကြော်ငြာပြဖို့ အသင့်တော်ဆုံးက ဘာလဲ?
(A) 9:16 Vertical Video (B) 16:9 Landscape Video (C) Square Photo (D) Text only
အဖြေ: A
၄၆။ Creative Fatigue ကို ဘယ်လို ဖြေရှင်းမလဲ?
(A) Budget တိုးခြင်း (B) Creative (ပုံ သို့မဟုတ် ဗီဒီယို) အသစ် လဲပေးခြင်း (C) Targeting ကို ပိတ်ခြင်း (D) ဘာမှမလုပ်ခြင်း
အဖြေ: B
၄၇။ Collection Ad ရဲ့ အဓိက အစိတ်အပိုင်းက ဘာလဲ?
(A) ပုံတစ်ပုံတည်း (B) အဓိက ဗီဒီယို/ပုံ တစ်ခုနှင့် အောက်တွင် ပစ္စည်းပုံငယ် ၄ ခု (C) စာသားသက်သက် (D) ဖုန်းနံပါတ်
အဖြေ: B
၄၈။ Video View Campaign မှာ "ThruPlay" ဆိုတာ ဘာလဲ?
(A) ၂ စက္ကန့် ကြည့်ခြင်း (B) ၁၅ စက္ကန့်ပြည့်အောင် သို့မဟုတ် အဆုံးထိ ကြည့်ရှုခြင်း (C) ဗီဒီယိုကို Skip လုပ်ခြင်း (D) ဗီဒီယိုကို Share ခြင်း
အဖြေ: B
၄၉။ Headline တစ်ခုရဲ့ အရှည်က ဘယ်လောက်ဆို အကောင်းဆုံးလဲ?
(A) စာလုံး ၄၀ အောက် (B) စာလုံး ၄၀၀ (C) စာလုံး ၄၀၀၀ (D) ၁ လုံးတည်း
အဖြေ: A (တိုပြီး ရှင်းလင်းရမည်)
၅၀။ "Call to Action" ခလုတ်မှာ ဘယ်ဟာက conversion ပိုရလေ့ရှိသလဲ?
(A) No Button (B) Learn More သို့မဟုတ် Shop Now (C) Click Here (D) Hello
အဖြေ: B

Part 3 (ဆက်လက်ဖော်ပြချက်): Creative & Technical (မေးခွန်း ၅၁ - ၆၀)
၅၁။ ဗီဒီယို ဒါမှမဟုတ် ပုံရဲ့ အနံနဲ့ အမြင့် အချိုးအစားကို ဘာလို့ခေါ်သလဲ? A) Resolution B) Aspect Ratio (ဥပမာ- 9:16, 1:1) C) File Size D) Bitrate အဖြေ: B
၅၂။ Video မှာ စာသားတွေ၊ ခလုတ်တွေနဲ့ ဖုံးမသွားစေဖို့ လိုအပ်တဲ့ နေရာလွတ်ကို ဘာလို့ခေါ်သလဲ? A) Dark Zone B) Safe Zone C) White Space D) Margin အဖြေ: B
၅၃။ "Video Captions" (စာတန်းထိုး) ထည့်ခြင်းက ဘာကြောင့် အရေးကြီးတာလဲ? A) ဗီဒီယိုကို လှအောင်လုပ်ဖို့ B) အသံပိတ်ကြည့်နေတဲ့သူတွေ ကြော်ငြာအကြောင်းအရာကို နားလည်စေဖို့ C) နိုင်ငံခြားသားတွေ ကြည့်ဖို့ D) Google မှာ ရှာရလွယ်ဖို့ အဖြေ: B
၅၄။ သုံးစွဲသူဆီက အချက်အလက် (Email/Phone) တွေကို Facebook App ထဲမှာတင် တောင်းယူနိုင်တဲ့ ကြော်ငြာပုံစံက ဘာလဲ? A) Instant Experience B) Lead Forms (Instant Forms) C) Traffic Ads D) Message Ads အဖြေ: B
၅၅။ ကြည့်ရှုသူကို မေးခွန်းမေးပြီး ရွေးချယ်ခိုင်းလို့ရတဲ့ ကြော်ငြာပုံစံက ဘာလဲ? A) Carousel Ads B) Polling Ads C) Video Ads D) Collection Ads အဖြေ: B
၅၆။ App သို့မဟုတ် ဂိမ်းတစ်ခုကို မသွင်းခင် စမ်းကစားကြည့်လို့ရတဲ့ ကြော်ငြာက ဘာလဲ? A) Watchable Ads B) Playable Ads C) Action Ads D) Demo Ads အဖြေ: B
၅၇။ "Dynamic Creative" က ဘာတွေကို စမ်းသပ်ပေးတာလဲ? A) Budget ကို စမ်းသပ်တာ B) ပုံ၊ ဗီဒီယို၊ Headline နဲ့ CTA ခလုတ် အမျိုးမျိုးကို ပေါင်းစပ်ပြီး အကောင်းဆုံးကို ရှာပေးတာ C) ပြိုင်ဘက်ရဲ့ ကြော်ငြာကို စမ်းသပ်တာ D) အကောင့်ကို စမ်းသပ်တာ အဖြေ: B
၅၈။ "Brand Consistency" ဆိုတာ ဘာလဲ? A) ဈေးနှုန်းကို ခဏခဏ ပြောင်းတာ B) ကြော်ငြာအားလုံးမှာ Brand ရဲ့ အရောင်၊ လိုဂိုနဲ့ ပုံစံကို တညီတညွတ်တည်း ဖြစ်အောင် ထိန်းသိမ်းတာ C) တစ်လတစ်ခါ နာမည်ပြောင်းတာ D) ပုံစံအမျိုးမျိုး ပြောင်းလဲတာ အဖြေ: B
၅၉။ သုံးစွဲသူကိုယ်တိုင် ရိုက်ထားတဲ့ ဗီဒီယို ဒါမှမဟုတ် Review တွေကို ကြော်ငြာမှာ သုံးတာကို ဘာလို့ခေါ်သလဲ? A) Professional Content B) User-generated Content (UGC) C) Corporate Video D) Stock Footage အဖြေ: B
၆၀။ ပုံရိပ်ပေါ်မှာ စာသားတွေ၊ စတစ်ကာတွေ ဒါမှမဟုတ် Graphic တွေ ထပ်တင်တာကို ဘာလို့ခေါ်သလဲ? A) Background B) Overlays C) Filters D) Shadows အဖြေ: B

Part 4: Reporting & Optimization (မေးခွန်း ၆၁ - ၈၀)
၆၁။ "Learning Phase" ရဲ့ အဓိပ္ပာယ်က ဘာလဲ?
(A) စာမေးပွဲဖြေခြင်း (B) Meta ရဲ့ Algorithm က Performance အကောင်းဆုံး ဖြစ်အောင် အချက်အလက် စုဆောင်းနေခြင်း (C) Budget ကုန်သွားခြင်း (D) Ad ပိတ်ခံရခြင်း
အဖြေ: B
၆၂။ "Learning Limited" ဖြစ်ရတဲ့ အဓိက အကြောင်းရင်းက ဘာလဲ?
(A) Budget အရမ်းများလွန်းလို့ (B) သတ်မှတ်ထားတဲ့ အချိန်အတွင်း Conversion ၅၀ မပြည့်လို့ (C) ပုံလှလို့ (D) Facebook Error ဖြစ်လို့
အဖြေ: B
၆၃။ Attribution Setting မှာ Default က ဘာလဲ?
(A) 1-day click (B) 7-day click and 1-day view (C) 28-day click (D) No attribution
အဖြေ: B
၆၄။ Conversion API (CAPI) က ဘာအတွက်လဲ?
(A) Website ပိုမြန်ဖို့ (B) Browser မှာရှိတဲ့ Pixel ကို အားဖြည့်ဖို့ Server ကနေ အချက်အလက်ပို့ပေးခြင်း (C) Like များဖို့ (D) Account လုံခြုံရေး
အဖြေ: B
၆၅။ A/B Test မှာ ဘာကို ရှောင်ရမလဲ?
(A) Variable တစ်ခုတည်း ပြောင်းခြင်း (B) Variable တွေ အများကြီး တစ်ပြိုင်နက် ပြောင်းခြင်း (C) Budget အညီအမျှထားခြင်း (D) အချိန် ၁ ပတ်ထားခြင်း
အဖြေ: B
၆၆။ CTR (Click-Through Rate) ကျနေရင် ဘာကို အရင်ပြင်ရမလဲ?
(A) Budget (B) Creative (ပုံ သို့မဟုတ် စာသား) (C) Bank Account (D) Meta Office
အဖြေ: B
၆၇။ "Frequency" က ၅ ဖြစ်နေရင် ဘာကို ဆိုလိုတာလဲ?
(A) လူ ၅ ယောက် မြင်တာ (B) လူတစ်ယောက်ကို ပျမ်းမျှ ၅ ကြိမ် ကြော်ငြာပြနေတာ (C) ၅ ကျပ် ကုန်တာ (D) ၅ ရက် ကြာတာ
အဖြေ: B
၆၈။ Brand Lift Study လုပ်ဖို့ အဓိက လိုအပ်ချက်က ဘာလဲ?
(A) အနည်းဆုံး အသုံးစရိတ် (Minimum Spend) ရှိရမည် (B) Facebook Page ၁ နှစ် ရှိရမည် (C) Website မရှိလည်းရသည် (D) ဘာမှမလိုပါ
အဖြေ: A
၆၉။ ROAS က ၄ ဆိုရင် ဘာကို ဆိုလိုတာလဲ?
(A) ၄ ယောက် ဝယ်တာ (B) ၁ ကျပ် သုံးတိုင်း ၄ ကျပ် ဖိုး ပြန်ရောင်းရတာ (C) ၄ ရက် ပြတာ (D) ၄ ခါ နှိပ်တာ
အဖြေ: B
၇၀။ Ads Reporting မှာ "Breakdown" လုပ်ခြင်းက ဘာကို ကူညီသလဲ?
(A) ကြော်ငြာကို ဖျက်ပစ်ခြင်း (B) အသက်၊ ကျား/မ၊ တည်နေရာအလိုက် ရလဒ်တွေကို ခွဲခြားကြည့်နိုင်ခြင်း (C) Budget တိုးခြင်း (D) အစီရင်ခံစာ ရေးခြင်း
အဖြေ: B
၇၁။ Scaling မှာ "Horizontal Scaling" ဆိုတာ ဘာလဲ?
(A) Budget တိုးခြင်း (B) Audience အသစ်တွေ၊ Ad set အသစ်တွေ ထပ်တိုးခြင်း (C) စာသားပြင်ခြင်း (D) ပုံအကြီးကြီးသုံးခြင်း
အဖြေ: B
၇၂။ Pixel မှာ "Standard Events" မဟုတ်တဲ့ အရာက ဘာလဲ?
(A) View Content (B) Add to Cart (C) Logged into Personal Email (D) Purchase
အဖြေ: C
၇၃။ Meta ရဲ့ Auction မှာ နိုင်ဖို့ ဘာတွေ လိုသလဲ?
(A) Bid + Estimated Action Rates + Ad Quality (B) ပိုက်ဆံ အများဆုံး (C) Like အများဆုံး (D) Website လှဆုံး
အဖြေ: A
၇၄။ Video Ad တစ်ခုမှာ "Hook" ဆိုတာ ဘယ်နေရာလဲ?
(A) နောက်ဆုံး (B) အစပိုင်း ၁-၃ စက္ကန့် (C) အလယ် (D) မရှိပါ
အဖြေ: B
၇၅။ Business Manager ထဲမှာ ဘာတွေ သိမ်းလို့ရသလဲ?
(A) Ad Accounts, Pages, Pixels (B) Personal Photos (C) Movies (D) Games
အဖြေ: A
၇၆။ "Conversion Value" ဆိုတာ ဘာလဲ?
(A) Like ရတဲ့ အရေအတွက် (B) ရောင်းရတဲ့ ပမာဏရဲ့ ငွေကြေးတန်ဖိုး (C) Website ဖွင့်တဲ့ အကြိမ်ရေ (D) စာသား အရေအတွက်
အဖြေ: B
၇၇။ Facebook Page ရဲ့ "Insights" နဲ့ Ads Manager ရဲ့ "Reporting" ဘာကွာလဲ?
(A) Insights က Organic ပိုင်းကို အဓိကပြပြီး Reporting က Paid ads ပိုင်းကို အဓိကပြသည် (B) အတူတူပဲ (C) Insights က ဈေးကြီးသည် (D) Reporting က ဈေးသက်သာသည်
အဖြေ: A
၇၈။ Advantage+ Shopping Campaign ရဲ့ ထူးခြားချက်က ဘာလဲ?
(A) အကုန် Manual လုပ်ရခြင်း (B) AI က Target နဲ့ Creative ကို အလိုအလျောက် အကောင်းဆုံးဖြစ်အောင် လုပ်ပေးခြင်း (C) Video မရခြင်း (D) အလကားရခြင်း
အဖြေ: B
၇၉။ "Click Gap" ဆိုတာ ဘာလဲ?
(A) နှိပ်တာ မြန်ခြင်း (B) ကြော်ငြာကို နှိပ်တဲ့သူနဲ့ တကယ် Website ပေါ်ရောက်လာတဲ့သူကြားက ကွာဟချက် (C) ကြော်ငြာခ (D) Facebook Error
အဖြေ: B
၈၀။ Meta Certification စာမေးပွဲ အောင်မှတ်က ဘယ်လောက်လဲ?
(A) ၅၀၀ / ၁၀၀၀ (B) ၇၀၀ / ၁၀၀၀ (C) ၈၀၀ / ၁၀၀၀ (D) ၉၀၀ / ၁၀၀၀
အဖြေ: B
`;

const keyTermQuestions: NumberedMockExamQuestion[] = [
  {
    questionNumber: 11,
    id: "meta-media-buying-bank-q11",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Meta ads auction ဆိုတာ ဘာကို ဆိုလိုတာလဲ?",
    options: [
      "လူသုံးများတဲ့ page ကို အလိုအလျောက်ရွေးပေးခြင်း",
      "Advertiser တွေကြားမှာ bid, action rate, ad quality ပေါ်မူတည်ပြီး ad delivery ဆုံးဖြတ်တဲ့ real-time process",
      "Ad creative ကို random ပြောင်းပေးခြင်း",
      "Budget ကိုတစ်ခါတည်း အကုန်သုံးပစ်ခြင်း",
    ],
    explanation: "Auction က bid, estimated action rates, နဲ့ ad quality ကိုအခြေခံပြီး ဘယ် ad ကို deliver မလဲ ဆုံးဖြတ်တဲ့ process ပါ။",
    selectionMode: "single",
  },
  {
    questionNumber: 12,
    id: "meta-media-buying-bank-q12",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Meta campaign တွေမှာ pacing ဆိုတာ ဘာလဲ?",
    options: [
      "Creative file size ကိုလျှော့ချခြင်း",
      "Budget ကို campaign schedule အတွင်း balance ဖြစ်အောင် spend လုပ်သွားတဲ့နည်း",
      "Audience overlap ကိုပိတ်ခြင်း",
      "Reporting column အသစ်ထည့်ခြင်း",
    ],
    explanation: "Pacing က budget ကို campaign ကာလအတွင်း ဘယ်လိုဖြန့်ပြီး spend လုပ်မလဲဆိုတာပါ။",
    selectionMode: "single",
  },
  {
    questionNumber: 13,
    id: "meta-media-buying-bank-q13",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Bid Cap ရဲ့ အဓိက ရည်ရွယ်ချက်က ဘာလဲ?",
    options: [
      "Maximum bid ceiling တစ်ခု သတ်မှတ်ပြီး auction ထဲမှာ အဲဒီထက်မကျော်စေခြင်း",
      "Reach ကိုအလိုအလျောက် နှစ်ဆတိုးပေးခြင်း",
      "Frequency ကို zero လုပ်ခြင်း",
      "Pixel events ကိုဖျက်ပစ်ခြင်း",
    ],
    explanation: "Bid Cap က auction ထဲမှာ မိမိပေးချင်တဲ့ bid အမြင့်ဆုံးကို ထိန်းဖို့ သုံးပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 14,
    id: "meta-media-buying-bank-q14",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Daily Budget နဲ့ Lifetime Budget ရဲ့ အဓိက ကွာခြားချက်က ဘာလဲ?",
    options: [
      "Daily Budget က campaign တစ်ခုလုံးအတွက် total spend ကိုဆိုလိုပြီး Lifetime Budget က per day spend ကိုဆိုလိုသည်",
      "Daily Budget က တစ်ရက်လျှင် ပျမ်းမျှ spend amount ကိုသတ်မှတ်ပြီး Lifetime Budget က campaign ကာလတစ်လျှောက် total spend ကိုသတ်မှတ်သည်",
      "Daily Budget ကို scheduling မလုပ်နိုင်ဘူး",
      "Lifetime Budget က audience targeting မလိုဘူး",
    ],
    explanation: "Daily Budget က per-day average spend, Lifetime Budget က campaign schedule တစ်လျှောက် total spend ဖြစ်ပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 15,
    id: "meta-media-buying-bank-q15",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Ad Scheduling ကို ဘာအတွက် သုံးသလဲ?",
    options: [
      "Ad copy ကို auto-translate လုပ်ဖို့",
      "Ads ကို ပြသမယ့် နေ့ရက်နဲ့ အချိန်တွေကို သတ်မှတ်ဖို့",
      "Pixel events တိုးဖို့",
      "Lookalike size ပြောင်းဖို့",
    ],
    explanation: "Ad Scheduling က ads ဘယ်နေ့ ဘယ်အချိန်တွေမှာပဲ run မလဲဆိုတာ ထိန်းချုပ်ဖို့သုံးပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 16,
    id: "meta-media-buying-bank-q16",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Sequential Messaging ဆိုတာ ဘာလဲ?",
    options: [
      "Message တစ်ခုတည်းကို တစ်နေ့လုံး repeat ပြခြင်း",
      "User journey အလိုက် creative/message တွေကို အစဉ်လိုက်ပြသပြီး next action ဆီခေါ်သွားခြင်း",
      "Comment တွေကို order လိုက်ဖတ်ခြင်း",
      "Budget increase schedule တင်ခြင်း",
    ],
    explanation: "Sequential Messaging က awareness ကနေ consideration, conversion ဆီသွားတဲ့ flow အလိုက် message တွေစဉ်လိုက်ပြတာပါ။",
    selectionMode: "single",
  },
  {
    questionNumber: 17,
    id: "meta-media-buying-bank-q17",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Media Mix ဆိုတာ ဘာကို ရည်ညွှန်းသလဲ?",
    options: [
      "Creative text နဲ့ headline ကိုပေါင်းစပ်ခြင်း",
      "Platform, placement, format အမျိုးမျိုးကို ရည်မှန်းချက်အလိုက် ပေါင်းသုံးတဲ့ strategy",
      "Audience list နှစ်ခုကို merge လုပ်ခြင်း",
      "Pixel နဲ့ CAPI ကိုတစ်ခုတည်းလုပ်ခြင်း",
    ],
    explanation: "Media Mix က channels, placements, formats မျိုးစုံကို business goal အလိုက် ပေါင်းသုံးတဲ့ strategy ဖြစ်ပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 18,
    id: "meta-media-buying-bank-q18",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Brand Lift study က ဘာကို တိုင်းတာပေးသလဲ?",
    options: [
      "Website load speed",
      "Ad ကြောင့် brand awareness, ad recall, consideration လို metrics တွေ တိုးလာမှု",
      "Ad account owner အရေအတွက်",
      "Pixel setup ပြည့်စုံမှု",
    ],
    explanation: "Brand Lift က ads ကြောင့် awareness, recall, consideration စတဲ့ brand effect တွေတိုးလားဆိုတာတိုင်းတာပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 19,
    id: "meta-media-buying-bank-q19",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Conversion Lift ဆိုတာ ဘာလဲ?",
    options: [
      "Ads မကြည့်တဲ့ control group နဲ့ နှိုင်းယှဉ်ပြီး ads ကြောင့် additional conversions တိုးလာမှု",
      "CTR တက်လာမှု",
      "Creative score မြင့်လာမှု",
      "Reach ပိုကျယ်လာမှု",
    ],
    explanation: "Conversion Lift က ads run မလုပ်ခဲ့ရင်မဖြစ်နိုင်တဲ့ incremental conversions ကိုတိုင်းတာဖို့သုံးပါတယ်။",
    selectionMode: "single",
  },
  {
    questionNumber: 20,
    id: "meta-media-buying-bank-q20",
    topic: "Part 1: Campaign Planning & Strategy (Key Terms)",
    question: "Reach ဆိုတာ Meta reporting မှာ ဘာကို ဆိုလိုတာလဲ?",
    options: [
      "Total impressions အရေအတွက်",
      "Ad ကိုမြင်ခဲ့တဲ့ unique people အရေအတွက်",
      "Clicks အရေအတွက်",
      "Daily budget amount",
    ],
    explanation: "Reach က ad ကို မြင်ခဲ့တဲ့ unique users အရေအတွက်ကို ဆိုလိုတာပါ။",
    selectionMode: "single",
  },
];

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

function parseMetaMediaBuyingQuestions(): NumberedMockExamQuestion[] {
  const lines = metaMediaBuyingQuestionBankSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questions: NumberedMockExamQuestion[] = [];
  let currentSection = "Meta Certified Media Buying Professional";
  let currentQuestionNumber = 0;
  let currentQuestionLines: string[] = [];
  let currentOptions: string[] = [];

  function flushCurrentQuestion() {
    if (currentQuestionNumber === 0 || currentQuestionLines.length === 0 || currentOptions.length < 4) {
      return;
    }

    questions.push({
      questionNumber: currentQuestionNumber,
      id: `meta-media-buying-bank-q${String(currentQuestionNumber).padStart(2, "0")}`,
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

    if (line.includes("Key Terms:")) {
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

  return [...questions, ...keyTermQuestions].sort((left, right) => left.questionNumber - right.questionNumber);
}

export const metaMediaBuyingQuestionBank = parseMetaMediaBuyingQuestions().map((question) => ({
  id: question.id,
  topic: question.topic,
  question: question.question,
  options: question.options,
  explanation: question.explanation,
  selectionMode: question.selectionMode,
}));
