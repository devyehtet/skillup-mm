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

export interface NumberedMockExamQuestion extends MockExamQuestion {
  questionNumber: number;
}

const googleAdsVideoQuestionBankSource = String.raw`
Part 1: Video Ad Formats & Basics (မေးခွန်း ၁ - ၂၀)
၁။ YouTube Masthead ကြော်ငြာရဲ့ အဓိက ထူးခြားချက်က ဘာလဲ? A) ဈေးအသက်သာဆုံးဖြစ်ခြင်း B) YouTube Home Feed ရဲ့ ထိပ်ဆုံးမှာ နေရာယူပြီး အများဆုံးမြင်တွေ့နိုင်ခြင်း C) Search Result မှာပဲ ပေါ်ခြင်း D) အလကား သုံးလို့ရခြင်း
၂။ Bumper Ads ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ? A) ပစ္စည်းရောင်းရန် B) စက္ကန့်အနည်းငယ်အတွင်း Brand message ကို မှတ်မိသွားစေရန် (Awareness) C) Website traffic တက်ရန် D) Email စာရင်းရရန်
၃။ Non-skippable in-stream ads တွေကို ဘယ်လောက်ကြာချိန်အထိ ထားလို့ရသလဲ? A) ၆ စက္ကန့် B) ၁၅ စက္ကန့် (သို့မဟုတ် ၂၀ စက္ကန့်) C) ၃၀ စက္ကန့် D) ၄၅ စက္ကန့်
၄။ Skippable in-stream ads မှာ ကြည့်ရှုသူက ဘယ်နှစ်စက္ကန့်ပြည့်ရင် "Skip" ခလုတ်ကို နှိပ်နိုင်မလဲ? A) ၃ စက္ကန့် B) ၅ စက္ကန့် C) ၁၀ စက္ကန့် D) ၁၅ စက္ကန့်
၅။ Google Video Partners ဆိုတာ ဘာလဲ? A) YouTube ရဲ့ ဝန်ထမ်းများ B) YouTube ပြင်ပရှိ Google နဲ့ ချိတ်ဆက်ထားတဲ့ အရည်အသွေးမြင့် App နဲ့ Website များ C) ပြိုင်ဘက် ကုမ္ပဏီများ D) Facebook နှင့် Instagram
၆။ Outstream ads တွေကို ဘယ် Device တွေမှာပဲ တွေ့နိုင်သလဲ? A) Desktop သီးသန့် B) Mobile နှင့် Tablet များတွင်သာ C) Smart TV များတွင်သာ D) ရေဒီယိုတွင်သာ
၇။ In-feed Video Ads (ယခင် Discovery Ads) တွေက ဘယ်မှာ ပေါ်တာလဲ? A) ဗီဒီယို မစခင်မှာ B) YouTube Search ရလဒ်နဲ့ Watch Next နေရာတွေမှာ C) ဝဘ်ဆိုဒ်တွေရဲ့ အပေါ်ဆုံးမှာ D) Gmail ထဲမှာ
၈။ ဗီဒီယိုကြော်ငြာတစ်ခုကို လူတစ်ယောက်က စက္ကန့် ၃၀ (သို့) အဆုံးထိကြည့်မှ ပိုက်ဆံပေးရတဲ့ စနစ်က ဘာလဲ? A) CPM B) CPV (Cost-per-view) C) CPA D) CPC
၉။ Brand Awareness Campaign တစ်ခုအတွက် အသင့်တော်ဆုံး Bidding က ဘာလဲ? A) Maximize Conversions B) Target CPM (Cost-per-thousand impressions) C) Target ROAS D) Manual CPC
၁၀။ Video Action Campaign (VAC) မှာ အဓိကပါဝင်ရမယ့် အချက်က ဘာလဲ? A) Call-to-Action (CTA) ခလုတ် B) နောက်ခံသီချင်း သီးသန့် C) စာလုံးများများ D) Skip လုပ်လို့မရအောင်လုပ်ခြင်း
(မေးခွန်း ၁၁ - ၂၀ မှာ YouTube Shorts ads၊ Companion banners နဲ့ အခြေခံ terminology တွေ ပါဝင်ပါတယ်။)

Part 2: Targeting & Audiences (မေးခွန်း ၂၁ - ၄၀)
၂၁။ မိမိလုပ်ငန်းနဲ့ သက်ဆိုင်တဲ့ Keyword တွေကို Google မှာ ရှာဖူးတဲ့သူတွေကို YouTube မှာ ကြော်ငြာပြန်ပြချင်ရင် ဘာသုံးမလဲ? A) Custom Intent Audience B) Affinity Audience C) Demographic Targeting D) Topic Targeting
၂၂။ "In-market Audiences" က ဘယ်လိုလူတွေကို ဆိုလိုတာလဲ? A) အားကစား ဝါသနာပါသူများ B) ကုန်ပစ္စည်းတစ်ခုခုကို ဝယ်ယူဖို့ တက်ကြွစွာ ရှာဖွေ/နှိုင်းယှဉ်နေသူများ C) အသက် ၆၀ ကျော်သူများ D) Website ကို ရောက်ဖူးသူများ
၂၃။ အိမ်ထောင်ပြုခါစလူများ သို့မဟုတ် ကောလိပ်ကျောင်းပြီးခါစလူများကို Target ထားတာကို ဘာလို့ခေါ်သလဲ? A) Life Events B) Affinity C) Remarketing D) In-market
၂၄။ "Affinity Audiences" ရဲ့ အဓိက အခြေခံက ဘာလဲ? A) ခေတ္တခဏ စိတ်ဝင်စားမှု B) ရေရှည်ဝါသနာ၊ လူနေမှုပုံစံနဲ့ အလေ့အထများ C) အလုပ်အကိုင် D) နေရပ်လိပ်စာ
၂၅။ မိမိဆီမှာရှိတဲ့ Customer Email List ကို Google Ads ထဲတင်ပြီး Target ထားတာကို ဘာလို့ခေါ်သလဲ? A) Email Marketing B) Customer Match C) Custom Intent D) Similar Audiences
၂၆။ Video Campaign မှာ "Placements" သတ်မှတ်တယ်ဆိုတာ ဘာလဲ? A) ဘယ် Channel သို့မဟုတ် ဘယ် Video ပေါ်မှာ ကြော်ငြာပြမလဲဆိုတာ ရွေးချယ်ခြင်း B) ဗီဒီယိုရဲ့ အရောင်ရွေးခြင်း C) အချိန်ဇယားဆွဲခြင်း D) ပိုက်ဆံပေးချေခြင်း
၂၇။ YouTube ရဲ့ "Detailed Demographics" မှာ ဘာတွေပါသလဲ? A) အသက်၊ ကျား/မ သီးသန့် B) မိဘဖြစ်မှု၊ ပညာရေးအဆင့်၊ အိမ်ပိုင်ဆိုင်မှု စသည်တို့ C) ဖုန်းအမျိုးအစား D) အင်တာနက် Speed
၂၈။ "Ad Sequencing" ဆိုတာ ဘာလဲ? A) ကြော်ငြာတစ်ခုတည်းကို ခဏခဏပြခြင်း B) ကြော်ငြာဗီဒီယို အတိုအရှည် အစဉ်လိုက် (ဥပမာ- သိအောင်အရင်ပြ၊ ပြီးမှ ဝယ်ခိုင်း) ပြသခြင်း C) ဗီဒီယိုကို ဖျက်ခြင်း D) အသံပိတ်ထားခြင်း
၂၉။ Topic Targeting က ဘယ်အပေါ်မှာ အခြေခံသလဲ? A) လူရဲ့ ဝါသနာ B) Website သို့မဟုတ် Video ရဲ့ အကြောင်းအရာ (ဥပမာ- ဟင်းချက်နည်း) C) သုံးစွဲသူရဲ့ အမည် D) Google ရုံးခန်းတည်နေရာ
၃၀။ အကယ်၍ လူတစ်ယောက်က သင့် Website ကို လာကြည့်သွားပေမယ့် ဘာမှမဝယ်သွားရင် သူ့ကို ပြန်ရှာဖို့ ဘာသုံးမလဲ? A) Remarketing B) First-time targeting C) Cold calling D) Broadcast

Part 3: ABCD Framework & Creative Strategy (မေးခွန်း ၄၁ - ၆၀)
၄၁။ Google ရဲ့ ABCD Framework မှာ "B" က ဘာကို ကိုယ်စားပြုသလဲ? A) Budget B) Branding (Brand ကို စောစောနဲ့ ခဏခဏပြရန်) C) Bidding D) Business
၄၂။ Video Ad တစ်ခုမှာ လူတွေရဲ့ စိတ်ဝင်စားမှုကို အစပိုင်းမှာတင် ဖမ်းစားဖို့ (Hook) ကို ဘာလို့ခေါ်သလဲ? A) Attention B) Connection C) Direction D) Ending
၄၃။ "Connection" အပိုင်းမှာ ကြည့်ရှုသူကို ဘယ်လို ဆွဲဆောင်ရမလဲ? A) စာရင်းဇယားတွေ အများကြီးပြရန် B) စိတ်ခံစားမှု (Emotion) သို့မဟုတ် ဟာသ (Humor) ဖြင့် ထိတွေ့စေရန် C) အော်ဟစ်ပြောဆိုရန် D) ဘာမှမပြောဘဲ နေရန်
၄၄။ "Direction" ဆိုတာ ဘာကို ဆိုလိုတာလဲ? A) ဗီဒီယိုရိုက်တဲ့ လမ်းကြောင်း B) Call to Action (ဥပမာ- အခုပဲ ဝယ်လိုက်ပါ၊ Visit site) C) ကားမောင်းတဲ့ လမ်းညွှန် D) အစီအစဉ်ဆွဲခြင်း
၄၅။ YouTube ပေါ်မှာ ကြည့်ရှုသူတွေဟာ အသံ (Sound) ကို ဘယ်လောက်အထိ ဖွင့်ကြည့်လေ့ရှိသလဲ? A) ၁၀% B) ၅၀% C) ၉၅% ကျော် D) လုံးဝ မဖွင့်ကြပါ
၄၆။ Mobile အသုံးပြုသူတွေအတွက် ဗီဒီယိုကို ဘယ်လိုပုံစံ (Ratio) မျိုးတွေပါ ထည့်သွင်းသင့်သလဲ? A) Landscape (16:9) သီးသန့် B) Square (1:1) နှင့် Vertical (9:16) များပါ ထည့်သွင်းရန် C) အဝိုင်းပုံစံ D) အလွန်ရှည်သော ပုံစံ
၄၇။ ဗီဒီယိုကြော်ငြာတစ်ခုမှာ Brand Logo ကို ဘယ်အချိန်မှာ ပြသင့်သလဲ? A) အဆုံးသတ် ၅ စက္ကန့်မှ B) အစပိုင်း ၅ စက္ကန့်အတွင်းမှာတင် စပြသင့်သည် C) လုံးဝ မပြသင့်ပါ D) အလယ်တည့်တည့်မှာတင်ထားရမည်
၄၈။ YouTube Shorts မှာ ကြော်ငြာပြဖို့အတွက် ဗီဒီယိုကြာချိန်က ဘယ်လောက်ဖြစ်ရမလဲ? A) ၁ မိနစ်ထက် ကျော်ရမည် B) စက္ကန့် ၆၀ အောက် Vertical ဗီဒီယို ဖြစ်ရမည် C) ၁ နာရီ ကြာရမည် D) အသံမပါရပါ
၄၉။ Creative တစ်ခုဟာ "Effective" ဖြစ်မဖြစ် ဘယ်မှာ စစ်ဆေးနိုင်သလဲ? A) Creative Analytics (Retention curve) တွင် B) သူငယ်ချင်းကို မေးခြင်းဖြင့် C) အိပ်မက်မက်ခြင်းဖြင့် D) TV သတင်းကြည့်ခြင်းဖြင့်
၅၀။ "Effective Branding" ဖြစ်ဖို့ ဘာလုပ်ရမလဲ? A) Brand အမည်ကို အသံဖြင့်ပါ ထည့်ပြောရန် B) ပုံကို မှိန်ထားရန် C) စာလုံးကို သေးသေးလေးရေးရန် D) ပြိုင်ဘက်အမည်ကို ထည့်သုံးရန်

Part 4: Measurement & Performance (မေးခွန်း ၆၁ - ၈၀)
၆၁။ "Brand Lift" စစ်တမ်းဆိုတာ ဘာလဲ? A) ဝန်ထမ်းတွေရဲ့ စိတ်ဓာတ်ကို တိုင်းတာခြင်း B) ကြော်ငြာကြောင့် Brand ကို လူတွေ ပိုမှတ်မိလာသလား၊ ဝယ်ချင်စိတ် ရှိလာသလားဆိုတာ တိုင်းတာခြင်း C) ပစ္စည်းအလေးချိန် တိုင်းခြင်း D) အခွန်တွက်ခြင်း
၆၂။ Video Action Campaign မှာ အောင်မြင်မှုကို ဘယ်လို တိုင်းတာမလဲ? A) Impressions B) Conversions (Sales or Leads) C) Video length D) Subscriber count
၆၃။ "View-through conversion" (VTC) ဆိုတာ ဘာလဲ? A) ကြော်ငြာကို နှိပ်ပြီး ဝယ်ခြင်း B) ကြော်ငြာကို မြင်လိုက်ပေမယ့် မနှိပ်ဘဲ၊ နောက်မှ တခြားနည်းနဲ့ Website ထဲဝင်ပြီး ဝယ်ယူခြင်း C) ဗီဒီယိုကို ၂ ခါကြည့်ခြင်း D) ဖုန်းဆက်ပြီး ဝယ်ခြင်း
၆၄။ YouTube ရဲ့ "Reach Planner" က ဘာလုပ်ပေးတာလဲ? A) ဗီဒီယို တည်းဖြတ်ပေးခြင်း B) သတ်မှတ်ထားတဲ့ Budget နဲ့ လူဘယ်နှယောက်ဆီ ရောက်နိုင်မလဲဆိုတာ ခန့်မှန်းပေးခြင်း C) သီချင်းရှာပေးခြင်း D) အလုပ်ခေါ်ပေးခြင်း
၆၅။ "Core Audiences" မှာ ဘယ်အချက်က အခြေခံအကျဆုံးလဲ? A) Demographics (Age, Gender) B) Food taste C) Sleeping habits D) Shoe size
၆၆။ "Attribution" ဆိုတာ ဘာလဲ? A) ဝယ်ယူမှုဖြစ်စဉ်မှာ ဘယ်ကြော်ငြာက အလုပ်ဖြစ်ဆုံးလဲဆိုတာ ခွဲဝေတွက်ချက်ခြင်း B) ပိုက်ဆံချေးခြင်း C) ဗီဒီယိုကို Copy ကူးခြင်း D) Account ပိတ်ခြင်း
၆၇။ Brand Consideration တိုးတက်ဖို့အတွက် ဘယ် Metric ကို ကြည့်ရမလဲ? A) View-through rate and Consideration lift B) Number of dislikes C) Computer brand D) Internet provider
၆၈။ Google Ads နဲ့ YouTube Channel ကို ချိတ်ဆက်ခြင်းဖြင့် ဘာရနိုင်သလဲ? A) Remarketing list များ နှင့် Call-to-action overlay များ သုံးနိုင်ခြင်း B) YouTube က ပိုက်ဆံ အလကားပေးခြင်း C) Video တွေကို Google က ဖျက်ပေးခြင်း D) Subscriber ၁ သန်း အလိုအလျောက် ရခြင်း
၆၉။ "Performance Max" campaign ထဲမှာ Video ပါဝင်ပါသလား? A) မပါဝင်ပါ B) မဖြစ်မနေ ပါဝင်ရပါသည် (သို့မဟုတ် Google က အလိုအလျောက် ဖန်တီးပေးပါသည်) C) Search မှာပဲ ပါသည် D) Gmail မှာပဲ ပါသည်
၇၀။ Google ရဲ့ "Video Creative Editor" က ဘာလုပ်ပေးတာလဲ? A) ရှိပြီးသား ပုံတွေ၊ စာသားတွေနဲ့ ဗီဒီယိုကြော်ငြာ အလွယ်တကူ ဖန်တီးပေးခြင်း B) ရုပ်ရှင်ရိုက်ပေးခြင်း C) ကင်မရာ ရောင်းပေးခြင်း D) သရုပ်ဆောင် ရှာပေးခြင်း

Part 4: Measurement & Performance (ဆက်လက်ဖော်ပြချက်)
၇၁။ "Viewability" ဆိုတာ Video Ads မှာ ဘာကို ဆိုလိုတာလဲ? A) ကြော်ငြာကို တစ်စက္ကန့်မျှ ပြသခြင်း B) ကြော်ငြာရဲ့ အနည်းဆုံး ၅၀% ကို မျက်နှာပြင်ပေါ်မှာ ၂ စက္ကန့် (သို့မဟုတ်) ထို့ထက်ပို၍ မြင်တွေ့ရခြင်း C) ဗီဒီယိုကို အဆုံးထိ ကြည့်ခြင်း D) အသံကို အကျယ်ဆုံး ဖွင့်ခြင်း အဖြေ: B
၇၂။ Video Campaign တစ်ခုရဲ့ "Frequency" ဆိုတာ ဘာလဲ? A) ကြော်ငြာကို လူဘယ်နှစ်ယောက် မြင်လဲဆိုတာ B) သတ်မှတ်ထားတဲ့ ကာလတစ်ခုအတွင်း သုံးစွဲသူ တစ်ယောက်တည်းဆီကို ကြော်ငြာ ပျမ်းမျှ ဘယ်နှစ်ကြိမ် ပြသသလဲဆိုတာ C) ဗီဒီယိုရဲ့ အမြန်နှုန်း D) ကြော်ငြာခ ပေးချေရမယ့် အကြိမ်ရေ အဖြေ: B
၇၃။ အောက်ပါတို့အနက် ဘယ်အရာက YouTube ရဲ့ "Advanced Audience" ထဲမှာ မပါဝင်သလဲ? A) Custom Audiences B) Customer Match C) Physical location distance in millimeters (မီလီမီတာ အကွာအဝေး) D) Similar Audiences အဖြေ: C
၇၄။ "Target CPA" bidding ကို သုံးတဲ့အခါ Google ရဲ့ AI က ဘာကို အဓိက လုပ်ပေးတာလဲ? A) ကြော်ငြာကို လူအများဆုံး မြင်အောင်လုပ်ပေးခြင်း B) သင်သတ်မှတ်ထားတဲ့ ကုန်ကျစရိတ်အတွင်းမှာ Conversion (အရောင်း/စာရင်းသွင်းမှု) အများဆုံးရအောင် ဈေးနှုန်းကို ညှိပေးခြင်း C) ဗီဒီယိုကို အလိုအလျောက် တည်းဖြတ်ခြင်း D) ပြိုင်ဘက်တွေကို ဖယ်ထုတ်ခြင်း အဖြေ: B
၇၅။ Google Ads မှာ "Optimization Score" က ၁၀၀% ဖြစ်နေရင် ဘာကို ဆိုလိုတာလဲ? A) ကြော်ငြာက အကောင်းဆုံး အခြေအနေမှာ ရှိနေပြီး Google ရဲ့ အကြံပြုချက်အားလုံးကို အသုံးချထားခြင်း B) ပိုက်ဆံ အကုန်သုံးထားခြင်း C) လူ ၁ သန်း ကြည့်ပြီးခြင်း D) Google က သင့်ကို ဆုပေးခြင်း အဖြေ: A
၇၆။ YouTube "Masthead" ကို ဘယ်လို အခြေအနေမျိုးမှာ သုံးသင့်သလဲ? A) ပစ္စည်းတစ်ခုချင်းစီကို ရောင်းချင်တဲ့အခါ B) ကုန်ပစ္စည်းအသစ်တစ်ခုကို အချိန်တိုအတွင်း တစ်နိုင်ငံလုံး (သို့မဟုတ်) လူအများကြီး သိစေချင်တဲ့အခါ (Massive Reach) C) ပိုက်ဆံ မကုန်ချင်တဲ့အခါ D) Remarketing လုပ်ချင်တဲ့အခါ အဖြေ: B
၇၇။ Video Campaign တစ်ခုမှာ "Placement Exclusion" လုပ်တာဟာ ဘာကို ဆိုလိုတာလဲ? A) မိမိ Brand နဲ့ မကိုက်ညီတဲ့ Channel သို့မဟုတ် Video တွေမှာ ကြော်ငြာမပြအောင် တားဆီးခြင်း B) ကြော်ငြာကို နေရာအနှံ့ ပြခြင်း C) Website ကို ပိတ်ခြင်း D) ကွန်ပျူတာမှာပဲ ပြခြင်း အဖြေ: A
၇၈။ "Engagement" ဆိုတာ Video Ads မှာ ဘာကို ဆိုလိုတာလဲ? A) ဗီဒီယိုကို အသံပိတ်ကြည့်ခြင်း B) ကြော်ငြာထဲက Call-to-action ကို နှိပ်ခြင်း၊ Card တွေကို ကြည့်ခြင်း သို့မဟုတ် ဗီဒီယိုကို ၁၀ စက္ကန့်ထက်ပိုကြည့်ခြင်း C) ဖုန်းကို ပိတ်လိုက်ခြင်း D) Comment ရေးခြင်း အဖြေ: B
၇၉။ Video Action Campaign မှာ "Product Feed" ကို ချိတ်ဆက်လိုက်ရင် ဘာဖြစ်လာမလဲ? A) ဗီဒီယိုကြော်ငြာအောက်မှာ ရောင်းချမယ့် ပစ္စည်းပုံစံလေးတွေ (Shopping cards) ပါလာမယ် B) ဗီဒီယိုက ပိုရှည်သွားမယ် C) ကြော်ငြာက အဖြူအမည်း ဖြစ်သွားမယ် D) ဘာမှ မဖြစ်ပါ အဖြေ: A
၈၀။ Google Ads Video Certification စာမေးပွဲကို ဖြေဆိုဖို့ အချိန် ဘယ်လောက် ပေးထားသလဲ? A) ၃၀ မိနစ် B) ၇၅ မိနစ် (၁ နာရီ ၁၅ မိနစ်) C) ၃ နာရီ D) အချိန်အကန့်အသတ် မရှိပါ အဖြေ: B
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
  return line.replace(/\s*အဖြေ:\s*[A-D]$/u, "").trim();
}

function extractInlineOptions(line: string) {
  const cleanedLine = stripAnswerKey(line);
  const markers = ["A)", "B)", "C)", "D)"] as const;
  const indexes: number[] = [];
  let cursor = 0;

  for (const marker of markers) {
    const markerIndex = cleanedLine.indexOf(marker, cursor);

    if (markerIndex === -1) {
      return null;
    }

    indexes.push(markerIndex);
    cursor = markerIndex + marker.length;
  }

  const question = cleanedLine.slice(0, indexes[0]).trim();

  if (!question) {
    return null;
  }

  const options = markers.map((marker, index) => {
    const start = indexes[index] + marker.length;
    const end = indexes[index + 1] ?? cleanedLine.length;

    return cleanedLine.slice(start, end).trim();
  });

  if (options.some((option) => !option)) {
    return null;
  }

  return { question, options };
}

function parseGoogleAdsVideoQuestions(): NumberedMockExamQuestion[] {
  const lines = googleAdsVideoQuestionBankSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questions: NumberedMockExamQuestion[] = [];
  let currentSection = "Google Ads Video Certification";

  for (const line of lines) {
    if (line.startsWith("Part ")) {
      currentSection = line;
      continue;
    }

    if (line.startsWith("(")) {
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
      id: `google-ads-video-bank-q${String(questionStart.number).padStart(2, "0")}`,
      questionNumber: questionStart.number,
      topic: currentSection,
      question: parsed.question,
      options: parsed.options,
      explanation: `Practice question from ${currentSection}.`,
      selectionMode: "single",
    });
  }

  return questions;
}

export const googleAdsVideoQuestionBank = parseGoogleAdsVideoQuestions();
