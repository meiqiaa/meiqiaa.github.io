window.CODES = {
 "billing": {
  "name": "Model rozliczania",
  "cat": "Koszt / rozliczanie",
  "alias": "rozliczanie cena agent rozmowa współbieżność billing saas resolution meiqia",
  "sym": "Gdy ruch ma wyraźne szczyty lub zespół nie ma stałej wielkości, zły model rozliczania od razu zwielokrotnia koszt",
  "l1": "Trzy główne modele: za agenta (najlepszy przy stabilnym zespole, przewidywalny budżet), za rozmowę / wywołanie (elastyczniejszy dla szczytowego e-commerce), za współbieżność (skoncentrowane szczyty). SaaS zwykle za agenta/rok, ~¥800-5000/agent/rok",
  "l2": "Nie cena jednostkowa, lecz czy rozliczanie pasuje do wahań. Rozliczanie za rozwiązanie sprzyja firmom zmiennym, ale może wybuchnąć w szczycie - jeden SaaS zgłosił „podczas 11.11 rachunek za AI był 8x normalny, budżet poza kontrolą”; rozliczanie za wywołanie ma minimum, więc poniżej 10k czatów/dzień wychodzi drożej",
  "tip": "Ruch stabilny → za agenta; zmienny lecz przewidywalny → roczne / agenci progowi; straszne szczyty → pakiet elastyczny na wyprzedaże",
  "scene": "Na wyprzedaży dzienne czaty skaczą z 20k do 350k; rozliczanie za rozmowę / rozwiązanie wybucha, agenci progowi są stabilniejsi"
 },
 "price budget": {
  "name": "Cena i budżet",
  "cat": "Koszt / rozliczanie",
  "alias": "cena ile budżet wycena roczne poziom tanio drogo 1888",
  "sym": "Ustalając budżet i porównując wyceny, najpierw uzgodnij „poziom”, nie porównuj między poziomami",
  "l1": "Trzy poziomy 2026: podstawowy standardowy SaaS ~¥30k-150k/rok (MŚP, -~5-10% vs 2025); personalizacja wzrostu ~¥200k-800k/rok (średnio-duża, łączy ERP / CRM); flagowy agent full-stack ¥1M+/rok (grupy, +~15-20%)",
  "l2": "Luka krajowa vs międzynarodowa jest duża: SaaS międzynarodowy to za agenta/miesiąc (~$115-169/agent/mies.); 100 agentów ~¥1,5-2M/rok, 2-3x krajowego. Meiqia jest progowy za agenta: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agent/rok, z poziomem darmowym na start o niskim progu",
  "tip": "Zablokuj poziom wg skali (MŚP → podstawowy, średnio-duża → wzrost), potem porównuj funkcje i serwis w poziomie; nie skupiaj się na rabacie pierwszego roku",
  "scene": "Dla 100 agentów wzięli najtańszą wycenę; ukryte opłaty się skumulowały, a suma 3-letnia znacznie przekroczyła oczekiwania"
 },
 "hidden cost": {
  "name": "Ukryty koszt / TCO",
  "cat": "Koszt / rozliczanie",
  "alias": "tco ukryty całkowity wdrożenie api skalowanie personalizacja token eksport",
  "sym": "Porównywanie tylko abonamentu to najłatwiejszy sposób uderzenia w „górę lodową” - późniejsze opłaty są większością",
  "l1": "Zakup oprogramowania to tylko widoczny czubek góry lodowej TCO (całkowity koszt posiadania); policz wdrożenie, eksploatację, aktualizacje i straty ryzyka w TCO 3-letnim",
  "l2": "Zimny start bazy wiedzy, etykietowanie/czyszczenie danych, personalizacja, debugowanie interfejsów to często 3-5x opłaty za oprogramowanie - „kupić tanio prawie zawsze znaczy płacić drogo za eksploatację”. Umowa musi określać: cenę jednostkową skalowania w szczycie, opłatę za wywołania API, personalizację za osobodzień, przekroczenie tokenów, opłatę za eksport danych",
  "tip": "Zbuduj model TCO 3-letni i każ dostawcy wyceniać pozycja po pozycji; pilnuj trzech kosztów zmiennych: tokeny, przekroczenie interfejsu, eksport danych",
  "scene": "Firma ze 100 agentami policzyła TCO 3-letni ~¥2,9M, podczas gdy wycena pierwszego roku to tylko ¥800k - luka: wdrożenie / baza wiedzy / interfejsy"
 },
 "free trial": {
  "name": "Plan darmowy / próba / PoC",
  "cat": "Koszt / rozliczanie",
  "alias": "darmowy próba poc test demo doświadczenie 14 dni",
  "sym": "Waliduj realnym ruchem przed podpisem, nie tylko demo handlowca w sali konferencyjnej",
  "l1": "Większość dostawców ma plan darmowy / próbę (Meiqia też); zacznij o niskim progu, uruchom przepływ, potem awansuj; żądaj próby 7-15 dni, by zmierzyć szybkość odpowiedzi przy realnej współbieżności",
  "l2": "Nie daj się olśnić demo - środowiska demo to zwykle idealne zbiory danych, czyste warunki, niska współbieżność (<100 QPS). Wykonaj PoC na 7 dniach własnych logów produkcyjnych (z szumem, dialektem, literówkami); wykonanie zadań kluczowego scenariusza powinno być >70%",
  "tip": "PoC na realnych zanonimizowanych danych, nie na „złotym zbiorze” dostawcy; testuj też wysoką współbieżność, ciągłość przekazania i łagodną degradację przy nieznanych pytaniach",
  "scene": "Demo 100 sesji w sali odpowiadało natychmiast, podpisali na miejscu; na wyprzedaży uderzyli w lawinę opóźnień - demo ich oszukało"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Kanał / integracja",
  "alias": "omnichannel wielokanałowy pulpit agregacja silosy 20 kanałów tożsamość",
  "sym": "Gdy klienci są rozproszeni po web / WeChat / Douyin / Xiaohongshu / aplikacji, a agenci zmieniają systemy i gubią wiadomości",
  "l1": "Sprawdź, czy jeden pulpit przyjmuje web / H5, ekosystem WeChat, Douyin / Xiaohongshu, SDK aplikacji i inne główne punkty styku. Meiqia agreguje 20+ kanałów w jeden pulpit, auto-taguje źródło i scala tożsamość klienta między kanałami (jeden profil, w pełni śledzalny)",
  "l2": "Wg raportu iResearch 2025 o inteligentnej obsłudze ~78% firm zmienia systemy przez silosy kanałów, efektywność odpowiedzi spada ~60%, a odpływ sięga ~38%. Prawdziwy omnichannel wymaga wszystkich trzech - agregacja wiadomości + ujednolicona tożsamość + brak silosów danych; agregacja bez ujednolicenia danych to tylko „skrzynka wiadomości”",
  "tip": "Potwierdź natywne wsparcie głównych kanałów (zwłaszcza DM Douyin / Xiaohongshu) i czy ten sam klient scala się automatycznie między kanałami",
  "scene": "Agenci zmieniają 5-8 backendów dziennie i tracą ~30% czasu; jeden pulpit wyraźnie podnosi efektywność obsługi"
 },
 "wechat": {
  "name": "Integracja WeChat",
  "cat": "Kanał / integracja",
  "alias": "wechat konto oficjalne work wechat mini program channels scrm integracja domena prywatna",
  "sym": "Gdy główni klienci żyją w ekosystemie WeChat (Konto Oficjalne / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia łączy cały ekosystem WeChat: Konto Oficjalne, Work WeChat, Mini Program i DM Channels w jedno przyjęcie; po autoryzacji interfejsu Meiqia w backendzie OA / Mini Program wiadomości synchronizują się same, aktywne w ~3 minuty",
  "l2": "WeChat to nie tylko „odbieranie wiadomości” - patrz na SCRM: zarządzanie kontaktami Work-WeChat, tagowanie, masowy zasięg, skan-by-dodać z auto-tagiem źródła - zamiana czatów publicznych w kontakty prywatne to wartość",
  "tip": "Oddziel potrzeby „obsługa OA” i „SCRM Work-WeChat”; dla prywatnej sprzedaży powtarzalnej skup się na kontaktach / tagach / SOP",
  "scene": "Czaty OA dostają odpowiedź, ale nie zatrzymują ludzi; z SCRM Work-WeChat klienci o wysokiej intencji są zapisywani jako kontakty do ponownej sprzedaży"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kanał / integracja",
  "alias": "douyin xiaohongshu kuaishou dm krótkie wideo publiczne pozyskiwanie social komentarz",
  "sym": "Gdy pozyskujesz przez reklamy Douyin / Xiaohongshu / Kuaishou, a wolumen DM jest wysoki",
  "l1": "Meiqia agreguje DM i zapytania z komentarzy z Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao i innych: powiąż konto firmowe w „Ustawienia - Przyjęcie - Krótkie wideo”, a DM / komentarze synchronizują się do pulpitu do bezpośredniej odpowiedzi",
  "l2": "Polityki API platform krótkiego wideo często się zmieniają (aktualizacje reguł Douyin / Xiaohongshu) - potwierdź, że dostawca szybko się dostosowuje; kluczem pozyskiwania publicznego jest „agregacja DM + karta przechwytywania leadu + auto-popchnięcie do domeny prywatnej”, inaczej leady wyciekają",
  "tip": "Potwierdź synchronizację komentarzy, auto-odpowiedź po słowie kluczowym i karty przechwytywania; spytaj, jak szybko dostosowują się do zmian polityk",
  "scene": "DM konta firmowego Douyin eksplodują ponad możliwości agentów; bot prowadzi użytkowników o wysokiej intencji do zostawienia kontaktu, potem ludzie kontynuują"
 },
 "ai bot": {
  "name": "Bot AI",
  "cat": "AI / możliwości",
  "alias": "ai bot chatbot inteligentna obsługa llm auto-odpowiedź 7x24 agent",
  "sym": "Gdy chcesz, by AI odchylało powtarzalne zapytania i obniżało koszt personelu",
  "l1": "Sprawdź, czy AI robi samoobsługę 7x24, rozpoznawanie intencji, przyjęcie multi-bot na kanał i przekazanie człowiek-AI. Bot AI Meiqia stawia na rozpoznawanie intencji LLM + automatyzację marketingu + orientację na zadanie (zapytanie / rekomendacja); dostawca deklaruje ~80%+ oszczędności personelu (realnie zależy od konfiguracji)",
  "l2": "Najlepsze systemy 2026 przeszły od „rozumieć-szukać-odpowiadać” do pętli czterech kroków „rozumieć-wywołać-wykonać-akumulować”: zapytanie zamówień / zmiana adresu / zwroty w czacie, nie tylko rzucanie linków. Unikaj „kultu modelu” - 90% pytań nie wymaga rozumowania klasy Einsteina, lecz „wykonawcy znającego proces”; integracja waży ~35%, znacznie powyżej parametrów",
  "tip": "Nie porównuj, czy to GPT czy nie, ani parametrów; porównuj „czy łączy CRM / ERP i naprawdę działa”",
  "scene": "CTO opętany „najsilniejszym mózgiem”; model był bystry, ale nie łączył systemów biznesowych - stał się „generatorem przeprosin klasy premium”"
 },
 "knowledge base": {
  "name": "Baza wiedzy / RAG",
  "cat": "AI / możliwości",
  "alias": "baza wiedzy rag graf faq dokumenty wyszukiwanie halucynacja zimny start dokładność",
  "sym": "Gdy boisz się, że AI zmyśla (halucynuje) i musisz podłączyć wiedzę prywatną",
  "l1": "Użyteczność AI opiera się na jakości bazy wiedzy, nie na rozmiarze modelu. Zamień FAQ / podręczniki / zgłoszenia w wiedzę wyszukiwalną (RAG) i przekazuj po progu pewności przy wątpliwości. Meiqia wspiera graf wiedzy i otwarte interfejsy do odpytywania systemów biznesowych",
  "l2": "Jakość bazy wiedzy > liczba parametrów. Surowy ogólny LLM często halucynuje (nie ma twojej wiedzy prywatnej); wobec podręcznika 100k znaków recall i precyzja muszą sięgnąć 85%+. Zimny start bazy wiedzy to ciężka praca - czyszczenie dokumentów / dzielenie QA / etykietowanie intencji - policz w koszcie i harmonogramie",
  "tip": "Każ dostawcy zademonstrować cały proces „od PDF do bazy wiedzy” na miejscu, mierząc czas i początkową dokładność (budowa <3 dni, początek >60%, >75% w tydzień)",
  "scene": "Marka wypuszcza 200 SKU na kwartał; każda ręczna aktualizacja bazy wiedzy trwała 2 tygodnie - po zakończeniu sezon był prawie po wszystkim"
 },
 "intent recognition": {
  "name": "Rozpoznawanie intencji / rozwiązanie",
  "cat": "AI / możliwości",
  "alias": "rozpoznawanie intencji dokładność rozwiązanie fcr deflekcja nps przekazanie wieloturowy",
  "sym": "Gdy oceniasz, czy AI jest naprawdę użyteczne, i ustalasz KPI",
  "l1": "Dokładność rozpoznawania intencji to kluczowy próg użyteczności; czołowi dostawcy deklarują 95%+; sprawdź rozpoznawanie na czatach złożonych / wieloturowych, języku mówionym, literówkach i dialektach",
  "l2": "Nie ubóstwiaj „współczynnika deflekcji / samoobsługi” - najłatwiejsza do manipulacji metryka próżności (ukryj przekazanie, każ powtórzyć, rozłącz przy timeoucie i deflekcja przekracza 95%, wściekając użytkowników). Złoty standard 2026 równoważy FCR (rozwiązanie przy pierwszym kontakcie, cel >65%) i NPS (>30); pilnuj współczynnika przekazania (15-25%) i średnich tur (<5)",
  "tip": "Zmień KPI z „deflekcji” na „FCR + NPS + produktywność agenta”; PoC rozpoznawania na realnych danych z ~20% szumu",
  "scene": "VP obsługi chwalił się podniesieniem deflekcji z 75% do 92%; ceną był 1% wściekłych klientów w kolejce po stronie ludzkiej, zalewających najlepszych agentów"
 },
 "integration": {
  "name": "Integracja / API",
  "cat": "AI / możliwości",
  "alias": "integracja api webhook crm erp łączyć silos danych sdk otwarty interfejs oms",
  "sym": "Gdy obsługa musi łączyć zamówienia / CRM / zgłoszenia, a chcesz uniknąć silosów danych",
  "l1": "Sprawdź bogate standardowe API / Webhooki i czy łączy CRM / ERP / ticketing. Meiqia oferuje otwarte interfejsy do podłączenia własnych systemów biznesowych do zapytań i wywołań",
  "l2": "System obsługi musi być łącznikiem, nie wyspą - bogactwo API, elastyczność Webhooka i kompatybilność z systemami heterogenicznymi / starszymi decydują, czy przetrwa 3 czy 5 lat. Starszy ERP może nie mieć API i wymagać RPA lub bezpośredniego czytania bazy; debugowanie interfejsu pożera czas - umowa ma podać, ile systemów kluczowych dostawca łączy za darmo",
  "tip": "Poproś dostawcę o kolekcję Postman i mapę drogową integracji; ustal liczbę darmowych integracji i opłatę ponad to",
  "scene": "Kupili system kluczowy, potem wtyczki, a w końcu sami skryptowali synchronizację między wtyczkami - całkowity koszt wymknął się spod kontroli"
 },
 "high concurrency": {
  "name": "Wysoka współbieżność / szczyty",
  "cat": "Stabilność / zgodność",
  "alias": "wysoka współbieżność szczyt wyprzedaż stabilność sla przestój skalowanie opóźnienie qps",
  "sym": "Gdy wyprzedaże e-commerce / sprzedaż biletów / nagła burza PR błyskawicznie podbijają ruch",
  "l1": "Skup się na odporności na przeciążenie: ryzyko przestoju, metryki opóźnień, elastyczne skalowanie, SLA i klauzule kompensacji. Deklaracje czołowych dostawców: dostępność ~99,99%, pochłania ~20x ruchu, odpowiedź <280ms",
  "l2": "Systemy bez wyłączników / elastycznego skalowania / inteligentnego limitowania / DR walą się pod obciążeniem; subtelniejsza jest „lawina opóźnień” - degradacja z ~800ms do 15s+, gdy klienci odchodzą w oczekiwaniu. PoC z testem penetracyjnym wysokiego ciśnienia: symuluj 1,5-2x historyczny szczyt, zabij 30% węzłów w połowie testu i obserwuj odzysk (RTO <1 min)",
  "tip": "Nie patrz tylko na szczytowy QPS, ale na dokładność AI w szczycie (wiele spada o 30%+ przy wysokiej współbieżności); system główny na co dzień, pakiety elastyczne na wyprzedaże",
  "scene": "500 QPS zwykle, 50 000 na wyprzedaży - czysty SaaS nie wytrzymuje; chmura hybrydowa z elastycznym skalowaniem plus pakiet szczytowy przeprowadziły to"
 },
 "on-premise compliance": {
  "name": "On-premise / zgodność",
  "cat": "Stabilność / zgodność",
  "alias": "on-premise zgodność mlps poziom 3 iso27001 xinchuang bezpieczeństwo danych wdrożenie dpa vpc",
  "sym": "Gdy finanse / ochrona zdrowia / rząd i inne mocno regulowane przypadki wymagają, by dane pozostały w intranecie",
  "l1": "Przypadki silnej zgodności wymagają wdrożenia on-premise (dane nie opuszczają intranetu to czerwona linia) + MLPS poziom 3 + ISO27001 + ślady audytu + adaptacja Xinchuang; MŚP mogą użyć zgodnego SaaS (potwierdź MLPS L3 / ISO27001 + podpisz DPA)",
  "l2": "Uważaj na mit „izolacja VPC = on-premise” - dane wciąż są pod kontem dostawcy, co regulatorzy odrzucają; wielu dostawców oferuje on-premise tylko na poziomie aplikacji, podczas gdy model zostaje w chmurze. Prawdziwy on-premise trzyma aplikację / bazę / wagi modelu w lokalnej inferencji w centrum danych klienta, z pełnym stosem Xinchuang (krajowe CPU / OS / DB)",
  "tip": "Przy silnej regulacji zablokuj dostawców z on-premise full-stack + Xinchuang + rejestracją algorytmu; wpisz do umowy kompensację, jeśli dostawca spowoduje niezdanie audytu",
  "scene": "Wzięli „izolację VPC” za on-premise; przy kontroli regulacyjnej suwerenności danych nie dało się wyjaśnić i odrzucono"
 }
};
window.LABELS = {"miss": "Brak na liście - spróbuj innego słowa kluczowego lub zobacz pełną tabelę poniżej."};
window.FIELDS = [["sym", "Kiedy ważne"], ["l1", "Kryteria ogólne L1"], ["l2", "Głębsze pułapki L2"], ["tip", "Jak oceniać / wybierać"], ["scene", "Realny przypadek"]];
window.THEAD = ["Wymiar wyboru", "Grupa", "Kryteria ogólne L1", "Głębsze pułapki L2"];
