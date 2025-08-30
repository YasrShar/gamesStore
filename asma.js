    <script>
        // بيانات أسماء الله الحسنى الكاملة
        const asmaData = [
            { id: 1, arabic: "الله", english: "Allah", meaning: "الاسم الأعظم الجامع لجميع الأسماء الحسنى", description: "هو الاسم الأعظم الذي تفرد به الحق سبحانه وخص به نفسه، وجعله أول أسمائه وأضاف كلها إليه، ولم يطلق على غيره في الحقيقة." },
            { id: 2, arabic: "الرحمن", english: "Ar-Rahman", meaning: "ذو الرحمة الواسعة", description: "الذي وسعت رحمته كل شيء، وهو اسم مختص بالله تعالى لا يطلق على غيره. ورحمته عامة تشمل جميع الخلائق في الدنيا." },
            { id: 3, arabic: "الرحيم", english: "Ar-Raheem", meaning: "الرحيم بالمؤمنين", description: "الذي يرحم عباده المؤمنين رحمة خاصة، ويتولاهم برحمته في الدنيا والآخرة. وهي رحمة خاصة بأهل طاعته وولايته." },
            { id: 4, arabic: "الملك", english: "Al-Malik", meaning: "المالك لكل شيء", description: "الذي له الملك التام، ملك الدنيا والآخرة، وهو المالك المطلق لجميع الموجودات، يتصرف فيها كيف يشاء." },
            { id: 5, arabic: "القدوس", english: "Al-Quddus", meaning: "المنزه عن كل نقص", description: "المنزه عن كل عيب ونقص، المطهر من كل آفة، المقدس الذي تقدسه الملائكة وتنزهه عن كل ما لا يليق بجلاله." },
            { id: 6, arabic: "السلام", english: "As-Salaam", meaning: "السالم من كل عيب", description: "السالم من جميع العيوب والنقائص، البريء من كل آفة، والذي يسلم أولياؤه من عذابه." },
            { id: 7, arabic: "المؤمن", english: "Al-Mu'min", meaning: "المصدق لرسله بالمعجزات", description: "الذي صدق رسله بالمعجزات، والذي يؤمن أولياءه من عذابه، والمؤمن لهم الجزاء الحسن." },
            { id: 8, arabic: "المهيمن", english: "Al-Muhaymin", meaning: "الرقيب الحافظ", description: "الرقيب على كل شيء، الحافظ له، المطلع على خفايا الأمور وخبايا الصدور، الشاهد على كل نجوى." },
            { id: 9, arabic: "العزيز", english: "Al-Azeez", meaning: "القوي الغالب", description: "الذي عز فلا يرام، وغلب فلا يضام، عزيز الجناب لا يحتاج إلى أحد، ولا يمكن الوصول إليه بسوء." },
            { id: 10, arabic: "الجبار", english: "Al-Jabbar", meaning: "القاهر العظيم", description: "الذي يجبر المكسور ويغني الفقير، والقاهر العظيم الذي خضعت له الرقاب، وذلت له الصعاب." },
            { id: 11, arabic: "المتكبر", english: "Al-Mutakabbir", meaning: "المتعالي عن صفات الخلق", description: "المتعالي عن صفات الخلق، المتكبر على عتاة خلقه بالقهر والغلبة. وهو الذي له الكبرياء والعظمة." },
            { id: 12, arabic: "الخالق", english: "Al-Khaaliq", meaning: "المبدع لكل شيء", description: "الذي أوجد الأشياء من العدم إلى الوجود، وأبدعها بقدرته وحكمته، خلق كل شيء بمقدار." },
            { id: 13, arabic: "البارئ", english: "Al-Bari'", meaning: "المبدع المصور", description: "الذي برأ النسم، وأنشأ الأشياء، وطورها من حال إلى حال حتى بلغت ما قدر لها." },
            { id: 14, arabic: "المصور", english: "Al-Musawwir", meaning: "الذي يصور المخلوقات", description: "الذي صور جميع الموجودات ورتبها، فأعطى كل شيء منها صورة خاصة وهيئة مفردة يتميز بها." },
            { id: 15, arabic: "الغفار", english: "Al-Ghaffaar", meaning: "كثير المغفرة", description: "كثير المغفرة، الذي يستر ذنوب عباده ويغفرها لهم، ولا يزال يغفر الذنب تلو الذنب لمن استغفره." },
            { id: 16, arabic: "القهار", english: "Al-Qahhaar", meaning: "الغالب الذي قهر كل شيء", description: "الذي قهر الخلق بسلطانه وقدرته وعزته، وخضع له كل شيء، ودان له كل موجود." },
            { id: 17, arabic: "الوهاب", english: "Al-Wahhaab", meaning: "كثير العطاء", description: "كثير الهبة، دائم العطاء، الذي يجود على عباده بالنعم الظاهرة والباطنة من غير استحقاق منهم." },
            { id: 18, arabic: "الرزاق", english: "Ar-Razzaaq", meaning: "الذي يرزق الخلائق", description: "الذي يرزق جميع خلقه، يوصل إليهم أقواتهم وما يحتاجون إليه في معاشهم ومعادهم." },
            { id: 19, arabic: "الفتاح", english: "Al-Fattaah", meaning: "الذي يفتح أبواب الرحمة", description: "الذي يفتح المغاليق، ويسهل الصعاب، ويفتح بين عباده بالحق، وهو الذي يفتح القلوب للإيمان." },
            { id: 20, arabic: "العليم", english: "Al-'Aleem", meaning: "الذي يعلم كل شيء", description: "الذي أحاط علمه بجميع الأشياء ظاهرها وباطنها، دقيقها وجليلها، على أتم الوجوه." },
            { id: 21, arabic: "القابض", english: "Al-Qaabid", meaning: "الذي يقبض الأرواح", description: "الذي يقبض الأرواح عند الموت، ويقبض الأرزاق بالتضييق على من يشاء من عباده بحكمته." },
            { id: 22, arabic: "الباسط", english: "Al-Baasit", meaning: "الذي يبسط الرزق", description: "الذي يبسط الرزق لمن يشاء من عباده، ويوسع عليهم في أقواتهم بجوده وكرمه." },
            { id: 23, arabic: "الخافض", english: "Al-Khaafid", meaning: "الذي يخفض من يشاء", description: "الذي يخفض الجبارين والمتكبرين والظالمين، ويضع الأمور في مواضعها." },
            { id: 24, arabic: "الرافع", english: "Ar-Raafi'", meaning: "الذي يرفع من يشاء", description: "الذي يرفع أولياءه بالطاعة والهداية، ويرفع مقامات المؤمنين في الدنيا والآخرة." },
            { id: 25, arabic: "المعز", english: "Al-Mu'izz", meaning: "الذي يعز من يشاء", description: "الذي يعز من والاه واتبع رضاه، ويمنحه القوة والغلبة والشرف." },
            { id: 26, arabic: "المذل", english: "Al-Mudhill", meaning: "الذي يذل من يشاء", description: "الذي يذل أعداءه ومن عصاه، ويسلبهم القوة والمنعة، فيصيرون أذلاء صاغرين." },
            { id: 27, arabic: "السميع", english: "As-Samee'", meaning: "الذي يسمع كل شيء", description: "الذي وسع سمعه جميع الأصوات، فلا تختلط عليه ولا تشتبه عليه مهما كثرت واختلفت." },
            { id: 28, arabic: "البصير", english: "Al-Baseer", meaning: "الذي يرى كل شيء", description: "الذي يرى الأشياء كلها ظاهرها وباطنها، لا تخفى عليه خافية، يرى دبيب النملة السوداء على الصخرة." },
            { id: 29, arabic: "الحكم", english: "Al-Hakam", meaning: "الحاكم العادل", description: "الذي يحكم بين خلقه بالعدل، لا يظلم أحداً، وإليه يرجع الحكم في كل الأمور." },
            { id: 30, arabic: "العدل", english: "Al-'Adl", meaning: "المنزه عن الظلم", description: "الذي لا يظلم أحداً، ولا يضع الأشياء إلا في مواضعها، يعطي كل ذي حق حقه." },
            { id: 31, arabic: "اللطيف", english: "Al-Lateef", meaning: "الرقيق الرحيم", description: "الذي يعلم دقائق الأمور وخفاياها، واللطيف بعباده الذي يريد بهم الخير." },
            { id: 32, arabic: "الخبير", english: "Al-Khabeer", meaning: "العليم بخفايا الأمور", description: "الذي لا تخفى عليه خافية، يعلم السرائر والضمائر وخبايا النفوس." },
            { id: 33, arabic: "الحليم", english: "Al-Haleem", meaning: "الصبور الذي لا يعجل بالعقوبة", description: "الذي لا يستفزه غضب، ولا يستخفه جهل جاهل، يمهل ولا يهمل." },
            { id: 34, arabic: "العظيم", english: "Al-'Azeem", meaning: "ذو العظمة والجلال", description: "الذي لا تحيط العقول بكماله، ولا الأوهام بجلاله، ولا الألباب بعظمته." },
            { id: 35, arabic: "الغفور", english: "Al-Ghafoor", meaning: "الساتر للذنوب", description: "الذي يغفر الذنوب مهما كثرت وعظمت لمن تاب وأناب، ويستر عيوب عباده." },
            { id: 36, arabic: "الشكور", english: "Ash-Shakoor", meaning: "الذي يجازي بالقليل الكثير", description: "الذي يشكر عباده على طاعتهم مهما قلت، ويجازيهم عليها أضعافاً مضاعفة." },
            { id: 37, arabic: "العلي", english: "Al-'Ali", meaning: "المتعالي عن كل شيء", description: "الذي علا بذاته وقدره وقهره، فهو العلي بذاته العلي بصفاته العلي بقهره." },
            { id: 38, arabic: "الكبير", english: "Al-Kabeer", meaning: "العظيم الشأن", description: "الذي كبر عن أن تدركه العقول، وعظم عن أن تتصوره القلوب." },
            { id: 39, arabic: "الحفيظ", english: "Al-Hafeez", meaning: "الحافظ لكل شيء", description: "الذي يحفظ على عباده أعمالهم وأرزاقهم، ويحفظ عليهم ما أودعهم." },
            { id: 40, arabic: "المقيت", english: "Al-Muqeet", meaning: "الذي يعطي القوت", description: "الذي يعطي كل مخلوق قوته وما يحتاجه، ويوصل إلى كل موجود ما به قوامه وصلاحه." },
            { id: 41, arabic: "الحسيب", english: "Al-Haseeb", meaning: "الذي يحاسب العباد", description: "الكافي عباده المتوكلين عليه، والذي يحاسب العباد على أعمالهم، فهو سريع الحساب." },
            { id: 42, arabic: "الجليل", english: "Al-Jaleel", meaning: "العظيم الشأن", description: "الذي له صفات الجلال والإكرام والعظمة والكبرياء، المستحق للتعظيم والإجلال." },
            { id: 43, arabic: "الكريم", english: "Al-Kareem", meaning: "الجواد المعطي", description: "الكثير الخير، الجواد المعطي الذي لا ينفد عطاؤه، ويعطي بلا سؤال." },
            { id: 44, arabic: "الرقيب", english: "Ar-Raqeeb", meaning: "المطلع المراقب", description: "الذي يراقب أحوال العباد، ويحيط بجميع أعمالهم، لا تخفى عليه خافية من أمورهم." },
            { id: 45, arabic: "المجيب", english: "Al-Mujeeb", meaning: "الذي يجيب دعوة الداعي", description: "الذي يجيب دعوة المضطر إذا دعاه، ويجيب المؤمنين ويستجيب لهم، قريب مجيب." },
            { id: 46, arabic: "الواسع", english: "Al-Waasi'", meaning: "الواسع الصفات والرحمة", description: "الذي وسع كل شيء رحمة وعلماً وقدرة، ووسعت قدرته جميع الأشياء." },
            { id: 47, arabic: "الحكيم", english: "Al-Hakeem", meaning: "الذي له الحكمة البالغة", description: "الذي له الحكمة التامة في خلقه وأمره، يضع الأشياء في مواضعها اللائقة بها." },
            { id: 48, arabic: "الودود", english: "Al-Wadood", meaning: "المحب لعباده المحبوب إليهم", description: "الذي يحب عباده الصالحين ويحبونه، يتودد إلى عباده بنعمه وإحسانه." },
            { id: 49, arabic: "المجيد", english: "Al-Majeed", meaning: "العظيم المجد", description: "الذي له المجد الكامل والشرف التام، والعز الذي لا يضام، والكمال الذي لا يدانى." },
            { id: 50, arabic: "الباعث", english: "Al-Baa'ith", meaning: "الذي يبعث الموتى", description: "الذي يبعث الموتى يوم القيامة، ويبعث الرسل إلى الأمم، ويبعث الهمم للطاعات." },
            { id: 51, arabic: "الشهيد", english: "Ash-Shaheed", meaning: "الذي لا يغيب عنه شيء", description: "الذي يشهد كل شيء ولا يغيب عنه شيء، الشاهد على كل نجوى وكل عمل." },
            { id: 52, arabic: "الحق", english: "Al-Haqq", meaning: "الثابت الذي لا شك فيه", description: "الثابت الذي لا يزول، والموجود الحقيقي، الذي وجوده من لوازم ذاته." },
            { id: 53, arabic: "الوكيل", english: "Al-Wakeel", meaning: "الكافي الذي يتوكل عليه", description: "الذي يتوكل عليه العباد في أمورهم، وهو كافيهم، والقائم بأمر من توكل عليه." },
            { id: 54, arabic: "القوي", english: "Al-Qawiyy", meaning: "الشديد القدرة", description: "الذي لا يضعف ولا يعجز، شديد القوة، بالغ القدرة، لا يلحقه ضعف ولا وهن." },
            { id: 55, arabic: "المتين", english: "Al-Mateen", meaning: "القوي الثابت", description: "الذي اشتدت قوته، وثبتت قدرته، وهو القوي الذي لا تنقطع قوته ولا تنفد قدرته." },
            { id: 56, arabic: "الولي", english: "Al-Waliyy", meaning: "الناصر والمحب", description: "الذي يتولى عباده المؤمنين بالحفظ والنصرة والتوفيق، وهو وليهم في الدنيا والآخرة." },
            { id: 57, arabic: "الحميد", english: "Al-Hameed", meaning: "المستحق للحمد والثناء", description: "المحمود على كل حال، الذي له الحمد كله، أوله وآخره، ظاهره وباطنه." },
            { id: 58, arabic: "المحصي", english: "Al-Muhsee", meaning: "الذي أحصى كل شيء", description: "الذي أحصى كل شيء عدداً، لا يفوته شيء ولا يعزب عنه شيء، أحصى أعمال العباد." },
            { id: 59, arabic: "المبدئ", english: "Al-Mubdi'", meaning: "الذي يبدأ الخلق", description: "الذي بدأ خلق كل شيء، وأوجده من العدم، وهو الذي يبدئ الخلق ثم يعيده." },
            { id: 60, arabic: "المعيد", english: "Al-Mu'eed", meaning: "الذي يعيد الخلق", description: "الذي يعيد الخلق بعد موتهم للبعث والجزاء، وهو الذي يعيد كل شيء إلى ما كان عليه." },
            { id: 61, arabic: "المحيي", english: "Al-Muhyee", meaning: "الذي يحيي الموتى", description: "الذي يحيي الموتى، ويحيي النفوس بالهداية، ويحيي الأرض بعد موتها." },
            { id: 62, arabic: "المميت", english: "Al-Mumeet", meaning: "الذي يميت الأحياء", description: "الذي بيده الموت والحياة، يميت من يشاء ويحيي من يشاء، وإليه ترجع الأمور." },
            { id: 63, arabic: "الحي", english: "Al-Hayy", meaning: "دائم الحياة", description: "الذي له الحياة الكاملة الأبدية، لا يموت ولا يفنى، حي لا يموت." },
            { id: 64, arabic: "القيوم", english: "Al-Qayyoom", meaning: "القائم بنفسه المقيم لغيره", description: "القائم بنفسه، لا يحتاج إلى غيره، والمقيم لجميع الموجودات، القائم على كل نفس بما كسبت." },
            { id: 65, arabic: "الواجد", english: "Al-Waajid", meaning: "الذي لا يفقد شيئاً", description: "الذي لا يعوزه شيء، ولا يفقد شيئاً، واجد كل ما يريده، غني عن جميع خلقه." },
            { id: 66, arabic: "الماجد", english: "Al-Maajid", meaning: "النبيل الكريم", description: "الذي له المجد والشرف والنبل والكرم، العالي القدر، الرفيع الشأن." },
            { id: 67, arabic: "الواحد", english: "Al-Waahid", meaning: "المنفرد في ذاته وصفاته", description: "الذي لا شريك له في ألوهيته وربوبيته وأسمائه وصفاته، المنفرد بالخلق والتدبير." },
            { id: 68, arabic: "الأحد", english: "Al-Ahad", meaning: "الذي لا يتجزأ ولا ينقسم", description: "الذي تفرد بجميع الكمالات، ولا يقبل القسمة ولا التجزؤ، المنزه عن الأجزاء والأعضاء." },
            { id: 69, arabic: "الصمد", english: "As-Samad", meaning: "السيد الذي تصمد إليه الخلائق", description: "السيد الذي تقصده الخلائق في حوائجها، والذي لا جوف له، الباقي بعد خلقه." },
            { id: 70, arabic: "القادر", english: "Al-Qaadir", meaning: "الذي له القدرة التامة", description: "الذي له القدرة الكاملة، لا يعجزه شيء، ولا يمتنع عليه شيء، قادر على كل شيء." },
            { id: 71, arabic: "المقتدر", english: "Al-Muqtadir", meaning: "الذي له القدرة البالغة", description: "البالغ القدرة، الذي يفعل ما يريد كما يريد، لا يلحقه عجز ولا تعب في تنفيذ أي أمر." },
            { id: 72, arabic: "المقدم", english: "Al-Muqaddim", meaning: "الذي يقدم ما يشاء", description: "الذي يقدم الأشياء ويضعها في مقدمة ما شاء من خلقه، ويقدم من يشاء من عباده." },
            { id: 73, arabic: "المؤخر", english: "Al-Mu'akhkhir", meaning: "الذي يؤخر ما يشاء", description: "الذي يؤخر الأشياء عن أوقاتها لحكمة يعلمها، ويؤخر من يشاء من خلقه عن المراتب العالية." },
            { id: 74, arabic: "الأول", english: "Al-Awwal", meaning: "الذي ليس قبله شيء", description: "الذي لا بداية لوجوده، فهو الأول الذي ليس قبله شيء، وهو أول كل شيء ومبدؤه." },
            { id: 75, arabic: "الآخر", english: "Al-Aakhir", meaning: "الذي ليس بعده شيء", description: "الذي لا نهاية لوجوده، فهو الآخر الذي ليس بعده شيء، وهو آخر كل شيء ومنتهاه." },
            { id: 76, arabic: "الظاهر", english: "Az-Zaahir", meaning: "الذي ظهر فوق كل شيء", description: "الذي علا فوق كل شيء، وظهرت آثاره في مخلوقاته، فلا شيء أظهر منه سبحانه وتعالى." },
            { id: 77, arabic: "الباطن", english: "Al-Baatin", meaning: "الذي احتجب عن الأبصار", description: "الذي احتجب عن أبصار خلقه وعقولهم، فلا تدركه الأبصار وهو يدرك الأبصار." },
            { id: 78, arabic: "الوالي", english: "Al-Waali", meaning: "المالك المتصرف", description: "المالك للأشياء، المتولي لها، المتصرف فيها، والحاكم عليها، يدبرها كما يشاء." },
            { id: 79, arabic: "المتعالي", english: "Al-Muta'aali", meaning: "الذي جل عن صفات الخلق", description: "الذي تعالى وترفع عن صفات النقص، وعن كل ما لا يليق بجلاله من صفات المخلوقين." },
            { id: 80, arabic: "البر", english: "Al-Barr", meaning: "المحسن إلى خلقه", description: "الذي عم بره جميع خلقه، فأسبغ عليهم النعم، وأجزل لهم العطايا، وهو البار الرحيم." },
            { id: 81, arabic: "التواب", english: "At-Tawwaab", meaning: "الذي يقبل التوبة من عباده", description: "الذي يقبل توبة التائبين مهما كثرت ذنوبهم وعظمت، ويرجع عليهم بالمغفرة والرحمة." },
            { id: 82, arabic: "المنتقم", english: "Al-Muntaqim", meaning: "الذي ينتقم من أعدائه", description: "الذي ينتقم من الذين ظلموا واعتدوا وأفسدوا، ولا يفلت من عدالته ظالم." },
            { id: 83, arabic: "العفو", english: "Al-'Afuww", meaning: "الذي يمحو السيئات", description: "الذي يعفو عن عباده ويمحو سيئاتهم، ويتجاوز عن ذنوبهم، وهو أحق بالعفو والمغفرة." },
            { id: 84, arabic: "الرؤوف", english: "Ar-Ra'oof", meaning: "الذي رأف بالعباد", description: "الذي رحم عباده رحمة عظيمة، ورأف بهم أشد الرأفة، فهو أرحم بهم من الوالدة بولدها." },
            { id: 85, arabic: "مالك الملك", english: "Maalik-ul-Mulk", meaning: "الذي له ملك كل شيء", description: "المالك لجميع الأملاك، له ملك السموات والأرض وما فيهن، يؤتي الملك من يشاء." },
            { id: 86, arabic: "ذو الجلال والإكرام", english: "Dhul-Jalaal-wal-Ikraam", meaning: "صاحب العظمة والكرم", description: "الذي اجتمع له الجلال والجمال والكمال، فهو أهل أن يجل ويعظم، وأهل أن يكرم ويحبب." },
            { id: 87, arabic: "المقسط", english: "Al-Muqsit", meaning: "العادل في أحكامه", description: "الذي يقضي بالحق والعدل، ولا يظلم أحداً، ويأخذ للمظلوم من الظالم." },
            { id: 88, arabic: "الجامع", english: "Al-Jaami'", meaning: "الذي يجمع الخلائق", description: "الذي يجمع الأشياء المتفرقة، ويؤلف بين المختلفات، ويجمع الناس ليوم القيامة للحساب والجزاء." },
            { id: 89, arabic: "الغني", english: "Al-Ghaniyy", meaning: "المستغني عن كل أحد", description: "الذي لا يحتاج إلى أحد في شيء، وكل أحد محتاج إليه، فهو الغني الحميد." },
            { id: 90, arabic: "المغني", english: "Al-Mughnee", meaning: "الذي يغني عباده", description: "الذي يغني من يشاء من عباده، ويكفيهم ما أهمهم، ويجعلهم في غنى عما سواه." },
            { id: 91, arabic: "المانع", english: "Al-Maani'", meaning: "الذي يمنع ما أراد منعه", description: "الذي يمنع ما أراد منعه، لا يمنع ما أعطى ولا يعطي ما منع، وهو على كل شيء قدير." },
            { id: 92, arabic: "الضار", english: "Ad-Daarr", meaning: "الذي يقدر الضر على من يشاء", description: "الذي بيده الضر والنفع، لا يأتي الضر إلا بإذنه وتقديره، وهو الحكيم في تقديره." },
            { id: 93, arabic: "النافع", english: "An-Naafi'", meaning: "الذي يقدر النفع لمن يشاء", description: "الذي ينفع من يشاء من عباده، وبيده النفع والضر، وهو النافع لمن أطاعه واتبع هداه." },
            { id: 94, arabic: "النور", english: "An-Noor", meaning: "الذي أنار بنوره كل شيء", description: "الذي أنار السموات والأرض بنوره، ونور قلوب المؤمنين بالهداية والإيمان." },
            { id: 95, arabic: "الهادي", english: "Al-Haadi", meaning: "الذي يهدي عباده", description: "الذي يهدي من يشاء إلى صراطه المستقيم، ويدل عباده على طريق الخير والرشاد." },
            { id: 96, arabic: "البديع", english: "Al-Badee'", meaning: "الخالق المبدع", description: "الذي أبدع خلق السموات والأرض، وخلق كل شيء على غير مثال سابق، فهو المبدع الخلاق." },
            { id: 97, arabic: "الباقي", english: "Al-Baaqi", meaning: "الدائم الذي لا يفنى", description: "الذي لا يزول ولا يفنى، دائم الوجود، لا يلحقه فناء ولا نقص، وهو الحي الذي لا يموت." },
            { id: 98, arabic: "الوارث", english: "Al-Waarith", meaning: "الذي يرث كل شيء", description: "الذي يبقى بعد فناء خلقه، فيرث الأرض ومن عليها، وإليه ترجع الأمور، وهو خير الوارثين." },
            { id: 99, arabic: "الرشيد", english: "Ar-Rasheed", meaning: "الذي أرشد الخلق إلى مصالحهم", description: "الذي أرشد الخلق إلى ما يصلحهم، وهداهم إلى طريق الحق، وهو الراشد في تدبير الأمور." }
        ];

        // المتغيرات العامة
        let currentIndex = 0;
        let filteredData = [...asmaData];
        let favorites = [];

        // تهيئة التطبيق
        function initializeApp() {
            createFloatingParticles();
            renderNames();
            updateCounter();
            loadFavorites();
        }

        // إنشاء الجسيمات المتحركة
        function createFloatingParticles() {
            const container = document.querySelector('.floating-particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        // عرض الأسماء
        function renderNames() {
            const grid = document.getElementById('namesGrid');
            grid.innerHTML = '';
            
            if (filteredData.length === 0) {
                grid.innerHTML = `
                    <div class="no-results">
                        <h3>لا توجد نتائج</h3>
                        <p>لم يتم العثور على أي اسم يطابق البحث</p>
                    </div>
                `;
                return;
            }
            
            filteredData.forEach((name, index) => {
                const isFavorite = favorites.includes(name.id);
                const card = document.createElement('div');
                card.className = `name-card ${currentIndex === index ? 'active' : ''}`;
                
                card.innerHTML = `
                    <div class="name-header">
                        <div class="name-number">${name.id}</div>
                        <button class="play-btn" onclick="playName(${index})" title="استمع للاسم">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="arabic-name">${name.arabic}</div>
                    <div class="english-name">${name.english}</div>
                    <div class="meaning">${name.meaning}</div>
                    <div class="description">${name.description}</div>
                    <div class="actions">
                        <button class="action-btn" onclick="copyName(${index})" title="نسخ النص">📋 نسخ</button>
                        <button class="action-btn" onclick="toggleFavorite(${index})" title="${isFavorite ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}">
                            ${isFavorite ? '❤️ مفضل' : '🤍 مفضلة'}
                        </button>
                        <button class="action-btn" onclick="shareText(${index})" title="مشاركة">📤 مشاركة</button>
                    </div>
                `;
                
                card.addEventListener('click', (e) => {
                    if (!e.target.closest('button')) {
                        selectName(index);
                    }
                });
                
                grid.appendChild(card);
            });
        }

        // اختيار اسم معين
        function selectName(index) {
            currentIndex = index;
            updateActiveCard();
            scrollToCard(index);
        }

        // تحديث البطاقة النشطة
        function updateActiveCard() {
            document.querySelectorAll('.name-card').forEach((card, idx) => {
                card.classList.toggle('active', idx === currentIndex);
            });
        }

        // التمرير للبطاقة
        function scrollToCard(index) {
            const cards = document.querySelectorAll('.name-card');
            if (cards[index]) {
                cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // تشغيل الاسم
        function playName(index) {
            currentIndex = index;
            updateActiveCard();
            const name = filteredData[index];
            showToast(`🔊 ${name.arabic}`);
            
            // محاكاة تشغيل الصوت
            try {
                const audio = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audio.createOscillator();
                const gainNode = audio.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audio.destination);
                
                oscillator.frequency.setValueAtTime(600, audio.currentTime);
                gainNode.gain.setValueAtTime(0.1, audio.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audio.currentTime + 0.5);
                
                oscillator.start();
                oscillator.stop(audio.currentTime + 0.5);
            } catch (e) {
                console.log('Audio not supported');
            }
        }

        // البحث في الأسماء
        function searchNames(query) {
            if (!query.trim()) {
                filteredData = [...asmaData];
            } else {
                const searchTerm = query.toLowerCase().trim();
                filteredData = asmaData.filter(name => 
                    name.arabic.includes(query) || 
                    name.english.toLowerCase().includes(searchTerm) ||
                    name.meaning.includes(query) ||
                    name.description.includes(query) ||
                    name.id.toString().includes(searchTerm)
                );
            }
            
            currentIndex = 0;
            renderNames();
            updateCounter();
        }

        // عرض جميع الأسماء
        function showAll() {
            filteredData = [...asmaData];
            currentIndex = 0;
            renderNames();
            updateCounter();
            updateControlButtons(0);
            document.querySelector('.search-input').value = '';
        }

        // عرض المفضلة
        function showFavorites() {
            if (favorites.length === 0) {
                showToast('لا توجد أسماء مفضلة بعد! أضف بعض الأسماء أولاً');
                return;
            }
            filteredData = asmaData.filter(name => favorites.includes(name.id));
            currentIndex = 0;
            renderNames();
            updateCounter();
            updateControlButtons(1);
        }

        // اسم عشوائي
        function randomName() {
            const randomIndex = Math.floor(Math.random() * asmaData.length);
            const randomName = asmaData[randomIndex];
            filteredData = [randomName];
            currentIndex = 0;
            renderNames();
            updateCounter();
            updateControlButtons(2);
            showToast(`🎲 ${randomName.arabic}`);
        }

        // مسح المفضلة
        function resetFavorites() {
            if (favorites.length === 0) {
                showToast('لا توجد مفضلة لحذفها');
                return;
            }
            
            if (confirm('هل تريد حذف جميع الأسماء المفضلة؟')) {
                favorites = [];
                saveFavorites();
                renderNames();
                showToast('✅ تم حذف جميع المفضلة');
                updateControlButtons(3);
            }
        }

        // تحديث أزرار التحكم
        function updateControlButtons(activeIndex) {
            document.querySelectorAll('.control-btn').forEach((btn, idx) => {
                btn.classList.toggle('active', idx === activeIndex);
            });
        }

        // إضافة/إزالة من المفضلة
        function toggleFavorite(index) {
            const nameId = filteredData[index].id;
            const favIndex = favorites.indexOf(nameId);
            
            if (favIndex > -1) {
                favorites.splice(favIndex, 1);
                showToast('💔 تم إزالة من المفضلة');
            } else {
                favorites.push(nameId);
                showToast('❤️ تم إضافة للمفضلة');
            }
            
            saveFavorites();
            renderNames();
        }

        // نسخ النص
        function copyName(index) {
            const name = filteredData[index];
            const text = `${name.arabic} - ${name.meaning}\n\n${name.description}`;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast('📋 تم النسخ بنجاح');
                }).catch(() => {
                    fallbackCopyText(text);
                });
            } else {
                fallbackCopyText(text);
            }
        }

        // نسخ احتياطي
        function fallbackCopyText(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                showToast('📋 تم النسخ بنجاح');
            } catch (err) {
                showToast('❌ فشل في النسخ');
            }
            
            document.body.removeChild(textArea);
        }

        // مشاركة النص
        function shareText(index) {
            const name = filteredData[index];
            const text = `${name.arabic} - ${name.meaning}\n\n${name.description}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'أسماء الله الحسنى',
                    text: text,
                    url: window.location.href
                }).then(() => {
                    showToast('📤 تم المشاركة');
                }).catch(() => {
                    copyName(index);
                });
            } else {
                copyName(index);
            }
        }

        // عرض رسالة مؤقتة
        function showToast(message) {
            const existingToast = document.querySelector('.toast');
            if (existingToast) {
                existingToast.remove();
            }

            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                if (toast && toast.parentNode) {
                    toast.remove();
                }
            }, 3000);
        }

        // تحديث العداد
        function updateCounter() {
            const counter = document.getElementById('nameCounter');
            counter.textContent = `${filteredData.length} اسماً`;
            
            if (filteredData.length === 99) {
                counter.style.background = 'linear-gradient(135deg, #00c851, #00a839)';
            } else if (filteredData.length === 0) {
                counter.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
            } else {
                counter.style.background = 'rgba(255, 255, 255, 0.2)';
            }
        }

        // حفظ المفضلة
        function saveFavorites() {
            try {
                localStorage.setItem('asma_favorites', JSON.stringify(favorites));
            } catch (e) {
                console.log('Unable to save favorites');
            }
        }

        // تحميل المفضلة
        function loadFavorites() {
            try {
                const saved = localStorage.getItem('asma_favorites');
                if (saved) {
                    favorites = JSON.parse(saved);
                }
            } catch (e) {
                favorites = [];
            }
        }

        // الرجوع للخلف
        function goBack() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                showToast('لا يمكن الرجوع للخلف');
            }
        }

        // اختصارات لوحة المفاتيح
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    if (currentIndex < filteredData.length - 1) {
                        selectName(currentIndex + 1);
                    }
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentIndex > 0) {
                        selectName(currentIndex - 1);
                    }
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (filteredData[currentIndex]) {
                        playName(currentIndex);
                    }
                    break;
                case 'c':
                case 'C':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (filteredData[currentIndex]) {
                            copyName(currentIndex);
                        }
                    }
                    break;
                case 'f':
                case 'F':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        document.querySelector('.search-input').focus();
                    }
                    break;
                case 'r':
                case 'R':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        randomName();
                    }
                    break;
                case 'Escape':
                    document.querySelector('.search-input').value = '';
                    searchNames('');
                    break;
            }
        });

        // دعم اللمس للأجهزة المحمولة
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        });

        document.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            const swipeDistance = touchStartY - touchEndY;
            const swipeThreshold = 50;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0 && currentIndex < filteredData.length - 1) {
                    selectName(currentIndex + 1);
                } else if (swipeDistance < 0 && currentIndex > 0) {
                    selectName(currentIndex - 1);
                }
            }
        });

        // تحسين البحث مع تأخير
        let searchTimeout;
        const originalSearchNames = searchNames;
        searchNames = function(query) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                originalSearchNames(query);
            }, 300);
        };

        // رسالة ترحيب
        function showWelcomeMessage() {
            setTimeout(() => {
                showToast('🌟 أهلاً بك في أسماء الله الحسنى');
            }, 1000);
        }

        // تهيئة التطبيق عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            initializeApp();
            showWelcomeMessage();
        });

        // إضافة مؤشر التحميل
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            showToast('✅ تم تحميل جميع الأسماء بنجاح');
        });

        // معلومات التطبيق
        console.log('🌟 أسماء الله الحسنى - تطبيق تفاعلي');
        console.log('📱 الاختصارات:');
        console.log('   • الأسهم: التنقل');
        console.log('   • مسافة/Enter: تشغيل');
        console.log('   • Ctrl+C: نسخ');
        console.log('   • Ctrl+F: بحث');
        console.log('   • Ctrl+R: عشوائي');
        console.log('   • Escape: إلغاء البحث');

    </script>
