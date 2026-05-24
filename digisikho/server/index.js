const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const APPS = [
  {
    id: 'whatsapp', name: 'WhatsApp', category: 'Communication', categoryHi: 'बातचीत',
    descHi: 'Message, Call और Video Call सीखें', badge: 'सबसे Popular',
    color: '#25D366', bgColor: '#dcfce7',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png',
    videos: [
      { id:'v1', label:'WhatsApp चलाना सीखें', titleHi:'Whatsapp Chalana Kaise Sikhe - Full Hindi Tutorial', youtubeId:'WH0kqbuHWtM', duration:'10:25', descHi:'WhatsApp का पूरा इस्तेमाल शुरुआत से सीखें' },
      { id:'v2', label:'WhatsApp Tips Hindi', titleHi:'WhatsApp Tutorial for Beginners in Hindi - All Tips', youtubeId:'d3VWmsb0ZXA', duration:'8:12', descHi:'WhatsApp के सभी features हिंदी में' },
      { id:'v3', label:'WhatsApp Call सीखें', titleHi:'WhatsApp Hindi Me Kaise Chalaye', youtubeId:'j5BVHq0vbFw', duration:'7:45', descHi:'Call और message करना सीखें' }
    ],
    steps: [
      { en:'Open WhatsApp - find the green icon on your phone', hi:'अपने phone में हरा WhatsApp icon ढूंढें और खोलें' },
      { en:'Tap "Agree and Continue"', hi:'"Agree and Continue" पर tap करें' },
      { en:'Enter your mobile number', hi:'अपना mobile number डालें' },
      { en:'Enter the 6-digit OTP received on SMS', hi:'SMS पर आया 6 अंकों का OTP डालें' },
      { en:'Type your name and tap Next', hi:'अपना नाम लिखें और Next tap करें' },
      { en:'Tap "Chats" at the bottom of screen', hi:'नीचे "Chats" पर tap करें' },
      { en:'Tap pencil icon to write new message', hi:'नया message लिखने के लिए ✏️ icon tap करें' },
      { en:'Type message and tap the blue send button', hi:'Message लिखें और नीले ➤ button से भेजें' }
    ],
    tip: { icon:'💡', title:'याद रखें', body:'हरा ✅ = message पहुँचा। दो नीले ✔✔ = message पढ़ा गया। Internet बंद हो तो message नहीं जाएगा।' },
    warning: { icon:'⚠️', title:'सावधानी', body:'WhatsApp पर OTP, PIN या Bank details किसी को मत बताएं - यह fraud हो सकता है।' },
    faqs: [
      { q:'WhatsApp free है?', a:'हाँ बिल्कुल free है! बस internet चाहिए। Call और message दोनों मुफ्त।' },
      { q:'गलत message delete कैसे करें?', a:'Message पर देर तक press करें, Delete चुनें, फिर Delete for Everyone।' },
      { q:'Video call कैसे करें?', a:'Chat खोलें, ऊपर 📹 icon tap करें, Video call शुरू हो जाएगी।' }
    ]
  },
  {
    id: 'phonepay', name: 'PhonePe', category: 'Payment', categoryHi: 'पेमेंट',
    descHi: 'पैसे भेजना, Recharge और Bill Pay सीखें', badge: '',
    color: '#5f259f', bgColor: '#ede9fe',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/120px-PhonePe_Logo.svg.png',
    videos: [
      { id:'v1', label:'PhonePe पूरा सीखें', titleHi:'PhonePe Kaise Use Kare 2024 - फोनेपे चलाना सीखें', youtubeId:'T8BJag0KzOM', duration:'9:15', descHi:'PhonePe का पूरा तरीका हिंदी में' },
      { id:'v2', label:'पैसे भेजें', titleHi:'PhonePe se Paise Kaise Bheje - Step by Step Guide', youtubeId:'ilCcu5EURAg', duration:'8:30', descHi:'Step by step पैसे भेजना सीखें' },
      { id:'v3', label:'Complete Guide', titleHi:'How to use PhonePe Complete Hindi Guide', youtubeId:'FXtv9jY7WqQ', duration:'12:00', descHi:'PhonePe की पूरी जानकारी' }
    ],
    steps: [
      { en:'Open PhonePe - the purple icon', hi:'बैंगनी रंग का PhonePe icon खोलें' },
      { en:'Enter your Bank-linked mobile number', hi:'वो number डालें जो Bank से जुड़ा है' },
      { en:'Enter OTP to verify', hi:'Number पर आया OTP डालें' },
      { en:'Select your Bank from the list', hi:'List में से अपना Bank select करें' },
      { en:'Set your UPI PIN - 4 or 6 digits, keep it secret!', hi:'4 या 6 अंकों का UPI PIN set करें - गुप्त रखें' },
      { en:'To send money, tap "Send Money"', hi:'पैसे भेजने के लिए "Send Money" tap करें' },
      { en:'Enter receiver number and amount', hi:'जिसे भेजना है उसका number और amount डालें' },
      { en:'Enter UPI PIN to confirm - payment done!', hi:'UPI PIN डालें - payment हो जाएगी ✅' }
    ],
    tip: { icon:'💡', title:'सुझाव', body:'पहली बार ₹1 से practice करें। Successful होने के बाद बड़ी amount भेजें।' },
    warning: { icon:'🚨', title:'बहुत ज़रूरी', body:'UPI PIN किसी को भी मत बताएं - बेटे-बेटी को भी नहीं। Phone पर PIN माँगने वाला 100% FRAUD है।' },
    faqs: [
      { q:'UPI PIN क्या है?', a:'4-6 अंकों का secret password है। ATM PIN की तरह गुप्त रखें - किसी को न बताएं।' },
      { q:'गलत payment हो गई तो?', a:'PhonePe helpline 080-68727374 पर तुरंत call करें।' },
      { q:'Bill pay कर सकते हैं?', a:'हाँ! Electricity, gas, water सब bills PhonePe से भर सकते हैं।' }
    ]
  },
  {
    id: 'paytm', name: 'Paytm', category: 'Payment', categoryHi: 'पेमेंट',
    descHi: 'Bill Pay, Recharge और Shopping सीखें', badge: '',
    color: '#002970', bgColor: '#dbeafe',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png',
    videos: [
      { id:'v1', label:'Paytm Account बनाएं', titleHi:'New Paytm Account Kaise Banaye 2024 - Hindi Tutorial', youtubeId:'Y167nmF2RXI', duration:'8:10', descHi:'Paytm account बनाना और setup करना' },
      { id:'v2', label:'Recharge करें', titleHi:'Paytm se Mobile Recharge Kaise Kare 2024', youtubeId:'DVF9DhRRd-U', duration:'5:50', descHi:'Mobile recharge करना step by step' }
    ],
    steps: [
      { en:'Open Paytm - the blue icon', hi:'नीले रंग का Paytm icon खोलें' },
      { en:'Sign up with your mobile number', hi:'Mobile number से Sign Up करें' },
      { en:'Enter OTP to verify', hi:'OTP डालकर verify करें' },
      { en:'For recharge: tap Mobile Recharge on home screen', hi:'Recharge के लिए home screen पर Mobile Recharge tap करें' },
      { en:'Enter mobile number and choose a plan', hi:'Number डालें और plan चुनें' },
      { en:'Choose payment method - UPI, Card or Wallet', hi:'Payment method चुनें - UPI, Card या Wallet' },
      { en:'Confirm with PIN - recharge successful!', hi:'PIN डालें - Recharge हो जाएगा! ✅' }
    ],
    tip: { icon:'💡', title:'जानकारी', body:'Recharge के बाद SMS और notification आएगा। 10 मिनट में नहीं आए तो Paytm helpline call करें।' },
    warning: null,
    faqs: [
      { q:'Paytm Wallet क्या है?', a:'Digital purse है जिसमें पैसे रखकर छोटी payments कर सकते हैं।' },
      { q:'Train ticket book होती है?', a:'हाँ! Paytm में Train Tickets option है। Station और date डालकर ticket लें।' }
    ]
  },
  {
    id: 'instagram', name: 'Instagram', category: 'Social Media', categoryHi: 'सोशल मीडिया',
    descHi: 'Photos, Videos और Family की updates देखें', badge: '',
    color: '#E1306C', bgColor: '#fce7f3',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/120px-Instagram_icon.png',
    videos: [
      { id:'v1', label:'Instagram चलाना सीखें', titleHi:'Instagram Kaise Chalaye 2024 - Full Hindi Guide', youtubeId:'vOPNXC1JDXE', duration:'10:05', descHi:'Instagram का पूरा तरीका हिंदी में' },
      { id:'v2', label:'Beginners Tutorial', titleHi:'Instagram Kaise Chalaye - How to use Instagram in Hindi', youtubeId:'kwXRmQ3r9o8', duration:'9:30', descHi:'Instagram शुरुआत से सीखें' }
    ],
    steps: [
      { en:'Open Instagram - colorful camera icon', hi:'रंगीन camera icon वाला Instagram खोलें' },
      { en:'Sign up with mobile number or email', hi:'Mobile number या email से Sign Up करें' },
      { en:'Verify with OTP', hi:'OTP डालकर verify करें' },
      { en:'Scroll down slowly to see photos and videos', hi:'धीरे-धीरे नीचे scroll करें - photos और videos दिखेंगी' },
      { en:'Double-tap a photo to Like it', hi:'Photo पर दो बार tap करें - ❤️ Like मिलेगा' },
      { en:'Tap search icon to find family by name', hi:'🔍 tap करके परिवार का नाम खोजें' },
      { en:'Tap Follow to see their posts regularly', hi:'"Follow" tap करें - उनकी posts दिखती रहेंगी' }
    ],
    tip: { icon:'💡', title:'परिवार से जुड़ें', body:'बच्चों और नाती-पोतों को Follow करें - उनकी सभी photos और videos यहाँ दिखेंगी!' },
    warning: { icon:'⚠️', title:'सावधानी', body:'अनजान लोगों को Follow मत करें। Settings में जाकर Private Account on करें।' },
    faqs: [
      { q:'Instagram free है?', a:'हाँ बिल्कुल free है!' },
      { q:'Reel क्या होता है?', a:'15-60 second के छोटे मज़ेदार videos। Home screen scroll करने पर दिखते हैं।' }
    ]
  },
  {
    id: 'youtube', name: 'YouTube', category: 'Entertainment', categoryHi: 'मनोरंजन',
    descHi: 'Bhajans, News और मनपसंद Videos देखें', badge: '',
    color: '#FF0000', bgColor: '#fee2e2',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png',
    videos: [
      { id:'v1', label:'YouTube चलाना सीखें', titleHi:'YouTube Kaise Use Kare - Hindi Tutorial for Beginners', youtubeId:'tEBMoNFkWRc', duration:'11:20', descHi:'YouTube search करना और videos देखना सीखें' },
      { id:'v2', label:'Hindi Videos खोजें', titleHi:'YouTube Par Hindi Videos Kaise Dekhe - Complete Guide', youtubeId:'pBKxq1RBOag', duration:'8:00', descHi:'Bhajan, News, Serials - सब हिंदी में' }
    ],
    steps: [
      { en:'Open YouTube - red play button icon', hi:'लाल रंग का YouTube icon खोलें' },
      { en:'Tap the search bar at the top of screen', hi:'ऊपर 🔍 search bar tap करें' },
      { en:'Type what you want to watch', hi:'जो देखना हो वो लिखें - जैसे Bhajan या Ramayan' },
      { en:'Tap any video from search results to play', hi:'कोई भी video tap करें - चलने लगेगी' },
      { en:'Tap screen once to see play and pause buttons', hi:'Screen पर एक बार tap करें - controls दिखेंगे' },
      { en:'Tap pause to stop, tap play to continue', hi:'⏸ से रोकें, ▶ से फिर चालू करें' }
    ],
    tip: { icon:'💡', title:'Hindi Content के लिए', body:'"Ramayan Hindi", "Bhajan Hindi", "Aaj Tak News" - ऐसे search करें। हिंदी में लाखों videos मुफ्त हैं!' },
    warning: null,
    faqs: [
      { q:'YouTube free है?', a:'हाँ! ज़्यादातर videos free हैं। बीच में Ads आते हैं - Skip का option होता है।' },
      { q:'Video रुक-रुक कर चले तो?', a:'Internet slow है। WiFi के पास जाएं या थोड़ी देर रुककर फिर play करें।' }
    ]
  },
  {
    id: 'googlemaps', name: 'Google Maps', category: 'Navigation', categoryHi: 'नेविगेशन',
    descHi: 'रास्ता खोजें, Hospital और Market ढूंढें', badge: '',
    color: '#4285F4', bgColor: '#fef9c3',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/120px-Google_Maps_Logo_2020.svg.png',
    videos: [
      { id:'v1', label:'Maps से रास्ता खोजें', titleHi:'Google Maps Hindi Mein - गूगल मैप हिंदी में पूरी जानकारी', youtubeId:'yUutBucx-GE', duration:'8:30', descHi:'Google Maps पर रास्ता खोजना सीखें' },
      { id:'v2', label:'Maps Tutorial', titleHi:'How to Use Google Maps - गूगल मैप कैसे इस्तेमाल करे', youtubeId:'Gen_L2ot0hg', duration:'7:10', descHi:'Maps पर location और directions देखना' }
    ],
    steps: [
      { en:'Open Google Maps - the colourful pin icon', hi:'Google Maps का pin जैसा icon खोलें' },
      { en:'Allow location permission - tap Allow', hi:'Location permission माँगे तो Allow tap करें' },
      { en:'Tap search bar and type your destination', hi:'Search bar में जाने की जगह का नाम लिखें' },
      { en:'Tap the correct place from the list', hi:'List में से सही जगह tap करें' },
      { en:'Tap Directions to see the route on map', hi:'"Directions" tap करें - रास्ता map पर दिखेगा' },
      { en:'Tap Start - phone will guide you turn by turn!', hi:'"Start" tap करें - phone बोलता जाएगा कहाँ मुड़ना है' }
    ],
    tip: { icon:'💡', title:'Offline भी काम करता है', body:'Maps में area download करें - बिना internet के भी रास्ता दिखेगा। Settings में Offline Maps option है।' },
    warning: null,
    faqs: [
      { q:'Hindi में directions मिलेंगी?', a:'हाँ! Settings, Navigation settings, Voice में Hindi select करें।' },
      { q:'Hospital कैसे खोजें?', a:'"Hospital near me" लिखकर search करें - नज़दीकी hospitals दिखेंगे।' }
    ]
  },
  {
    id: 'gpay', name: 'Google Pay', category: 'Payment', categoryHi: 'पेमेंट',
    descHi: 'Google Pay से safe और fast payment करें', badge: '',
    color: '#1A73E8', bgColor: '#e8f0fe',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/120px-Google_Pay_Logo.svg.png',
    videos: [
      { id:'v1', label:'Google Pay Setup करें', titleHi:'How to Use Google Pay in Hindi 2024 - Full Tutorial', youtubeId:'Y75FPmICrL8', duration:'7:30', descHi:'Google Pay setup और use करना सीखें' }
    ],
    steps: [
      { en:'Open Google Pay - colourful G Pay icon', hi:'रंगीन G Pay icon वाला Google Pay खोलें' },
      { en:'Sign in with your Google account', hi:'Google account से sign in करें' },
      { en:'Add your Bank account', hi:'अपना Bank account add करें' },
      { en:'Set your UPI PIN and remember it', hi:'UPI PIN set करें और याद रखें' },
      { en:'Tap New Payment to pay someone', hi:'"New Payment" tap करें - QR scan या UPI ID डालें' },
      { en:'Enter amount and confirm with UPI PIN', hi:'Amount डालें और UPI PIN से confirm करें' }
    ],
    tip: { icon:'💡', title:'Cashback मिलता है!', body:'Google Pay में cashback और scratch cards मिलते हैं। Regular use करने पर extra rewards मिलते हैं।' },
    warning: { icon:'⚠️', title:'QR Code सावधानी', body:'QR scan से पहले दुकान का नाम ज़रूर check करें। Receive करने के लिए कभी PIN नहीं डालते।' },
    faqs: [
      { q:'GPay और PhonePe में क्या फर्क है?', a:'दोनों UPI apps हैं और दोनों safe हैं। GPay Google का है, PhonePe Walmart का।' }
    ]
  },
  {
    id: 'truecaller', name: 'Truecaller', category: 'Communication', categoryHi: 'बातचीत',
    descHi: 'Spam और fraud calls पहचानें और block करें', badge: '',
    color: '#0099FF', bgColor: '#e0f2fe',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Truecaller_logo.svg/120px-Truecaller_logo.svg.png',
    videos: [
      { id:'v1', label:'Truecaller 2024 Tutorial', titleHi:'Truecaller Kaise Use Kare 2024 - Hindi Tutorial', youtubeId:'g3R0miROYH8', duration:'6:15', descHi:'Truecaller से spam calls पहचानें और block करें' },
      { id:'v2', label:'Spam Calls Block करें', titleHi:'Truecaller App Kaise Use Kare - Spam Block Hindi', youtubeId:'DoBBxK5dENk', duration:'5:20', descHi:'Fraud calls से कैसे बचें - पूरी जानकारी' }
    ],
    steps: [
      { en:'Open Truecaller - blue icon', hi:'नीले रंग का Truecaller icon खोलें' },
      { en:'Register with your mobile number', hi:'Mobile number से register करें' },
      { en:'When unknown number calls - Truecaller shows caller name', hi:'अनजान call आए तो Truecaller उसका नाम दिखाएगा' },
      { en:'SPAM written in red = do NOT answer the call!', hi:'लाल रंग में SPAM लिखा दिखे तो call मत उठाएं' },
      { en:'To block a number: tap it then tap Block', hi:'Block करने के लिए number tap करें फिर Block tap करें' }
    ],
    tip: { icon:'💡', title:'Fraud से बचाव', body:'FRAUD या SPAM लिखा दिखे तो तुरंत call काट दें। Bank कभी OTP phone पर नहीं माँगता।' },
    warning: null,
    faqs: [
      { q:'Truecaller free है?', a:'हाँ basic features बिल्कुल free हैं - spam पहचानना और block करना सब free।' }
    ]
  },
  {
    id: 'digilocker', name: 'DigiLocker', category: 'Government', categoryHi: 'सरकारी',
    descHi: 'Aadhar, PAN जैसे Documents हमेशा साथ रखें', badge: '',
    color: '#1e40af', bgColor: '#fef3c7',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/DigiLocker_Logo.png/120px-DigiLocker_Logo.png',
    videos: [
      { id:'v1', label:'DigiLocker 2024', titleHi:'DigiLocker Account Kaise Banaye 2024 - HumsafarTech Hindi', youtubeId:'-dodFLDg08Q', duration:'9:00', descHi:'DigiLocker account बनाना और documents रखना' },
      { id:'v2', label:'Documents रखना सीखें', titleHi:'Digilocker App Kaise Use Kare - Aadhar PAN Hindi', youtubeId:'cn57mv2Zlxw', duration:'8:15', descHi:'Aadhar और PAN DigiLocker में रखना सीखें' }
    ],
    steps: [
      { en:'Open DigiLocker - government blue icon', hi:'सरकारी DigiLocker icon खोलें' },
      { en:'Sign up with your Aadhar-linked mobile number', hi:'Aadhar से जुड़े mobile number से Sign Up करें' },
      { en:'Set your username and password', hi:'Username और password set करें' },
      { en:'Tap Search Documents to find your Aadhar card', hi:'"Search Documents" tap करें - Aadhar card मिलेगा' },
      { en:'Your documents are valid everywhere - no originals needed!', hi:'Documents हर जगह valid हैं - original की ज़रूरत नहीं!' }
    ],
    tip: { icon:'💡', title:'बड़ा फायदा', body:'DigiLocker में Aadhar, PAN, Driving Licence - सब रखें। Bank, hospital, office - सब जगह accept होते हैं।' },
    warning: null,
    faqs: [
      { q:'DigiLocker safe है?', a:'हाँ यह भारत सरकार का official app है। 100% valid और secure।' }
    ]
  }
];

app.get('/api/apps', (req, res) => {
  const { category } = req.query;
  let result = APPS.map(a => ({
    id:a.id, name:a.name, category:a.category, categoryHi:a.categoryHi,
    descHi:a.descHi, badge:a.badge, color:a.color, bgColor:a.bgColor, iconUrl:a.iconUrl
  }));
  if (category && category !== 'all') result = result.filter(a => a.category === category);
  res.json(result);
});

app.get('/api/apps/:id', (req, res) => {
  const found = APPS.find(a => a.id === req.params.id);
  if (!found) return res.status(404).json({ error: 'Not found' });
  res.json(found);
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = 5000;
app.listen(PORT, () => console.log('DigiSikho running at http://localhost:' + PORT));