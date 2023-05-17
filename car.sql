-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 16 2023 г., 13:10
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `car`
--

-- --------------------------------------------------------

--
-- Структура таблицы `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `text` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `car`
--

INSERT INTO `car` (`id`, `name`, `text`, `date`) VALUES
(1, 'CHEVROLET TRACKER MY23', 'Bu haydovchi o\'rindig\'ining qulayligi, ergonomikasining oshishi.\nTashqi tomondan Chevrolet Tracker o’zining  qat’iyatli qarashga ega faralari, “ikki qavatli” radiator panjarasi va figurali bamperli zamonaviy va uyg’un dizayni bilan ajralib turadi. Panoramali lyuk salonda kenglik va erkinlik tuyg’usini yaratadi. Panaram lyuk tufayli salon yanada yorug’lik bilan to’ladi. Chevrolet Tracker bilan qayerga yo’lga otlangan bo’lmang, Siz va sizning hamrohingiz uchun tanlagan yo’lingizda ideal hamroh bo’ladi. \nLED yoritgichli kunduzgi chiroqlar zamonaviylik va xavfsizlikni yanada oshiradi. Chevrolet Tracker intereri sizni zamonaviy dizayn bilan qarshi oladi. Old konsolda haydovchi uchun kerak bo’lgan barcha boshqaruv regulyatorlarini o’z ichiga olgan katta display joylashgan. Avtomobil uchun charm qoplamali multi-rul eng yaxshi funksional qo’shimcha bo’ldi. Paranam lyuk intererni yanada yorqin qildi. Chevrolet Tracker interyeri zamonaviy talablarga muvofiq rasmiylashtirilgan.\nUnda o’zgacha esda qolarli dizayn elementlari emas, shunchaki qulay, oddiy va ixcham. Barcha o\'rindiqlar umumiy kontseptsiya va sport dizayniga tayanib yaratilgan. Ikki xil rangli klassik ranglar hamda Ikki materialning kombinatsiyasi interyerning dinamik uslubini yaratgan. Maksimal qulaylikni ta\'minlash uchun bo\'shliqlar optimallashtirilgan.', '2023-05-10 23:11:07'),
(2, 'CHEVROLET ONIX', 'Ko’zga yaqqol tashlanuvchi dizayn detallari barchaning e’tiborini o’ziga tortishi aniq. Tashqi ko’rinish, ichki qulaylik hamda havfsizlik funksiyalarini ideal ravishda bir joyga to’plagan, aynan siz kutgan avtomobil siz uchun eng zarur, eng qadrli hamda eng sevimli “do’stingizga” aylanishi tabiiy. LED kunduzi ishlaydigan chiroqlar, projektor uslubidagi faralar va LED orqa chiroqlar bilan yo\'llaringizni yoqing. Bundan tashqari, oqshom sensori orqali faralarni avtomatik yoritish funktsiyasi bilan xavfsizligingizni oshiring. \nNafaqat hafvsizlik va dadil ko’rinish, sig’imlilik darajasining yuqoriligi ham alohida ta’kinlanishi kerak bo’lgan jihati deb aytish mumkin. Qayerga ketayotgan bo’lsangiz ham o’zingiz va atrofdagilaringiz uchun eng yaxshi taassurotlarni olishingizga ishonamiz.\nChevrolet Onix ning ichki qismi silliq chiziqlar va engil elementlar tufayli avtomobilning kengligini ta\'kidlaydi va kenglik hissi yaratadi-bularning barchasi avtomobilning kengroq platformasi orqali amalga oshiriladi. Avtomobil jihozlarining boricha ergonomik paneli modelni idrok etishni yaxshilaydi va havodor tuyg\'uga hissa qo\'shadi, tekstura naqshlari esa chuqurlik qo\'shadi. Chevrolet Onix avtomobilida uning boshqaruvini qulay va yoqimli qiladigan barcha qismlar mavjud. Chevrolet Onix displey ekranlari yuqori texnologiyali avtomobil dizaynining Markaziy qismidir va intuitiv boshqaruvga ega 8 dyuymli o\'yin-kulgi ekrani premium va boshqaruv qulayligini oshiradi.', '2023-05-10 23:13:07'),
(4, 'CHEVROLET MALIBU XL', 'Chevrolet Malibu XL ning yangi avlodi ustida ishlagan dizaynerlar, modelning tashqi ko‘rinishiga ko‘proq agressivlik baxsh etishga intilgan. Yangi modeli avvalgi avlodlaridan farqli ravishda tashqi ko‘rinishining mutlaqo yangi shakliga ega. Bukiluvchan va egiluvchan chiziqlar borligi tufayli sedanning qiyofasi yanada ko‘proq jo‘shqinlikka ega bo‘lib, o‘ta yoqimli shakliga ega. Malibu ning oson tanib olish mumkin bo‘lgan firmaviy ikkitalik radiator panjarasi endilikda torroq shakldagi asosiy svetodiodli optika bilan jihozlangan. Kuzovning yon tomonlaridagi relefli bezaklari va orqa qismi ko‘p jihatdan Impala sedan modeliga o‘xshash, umuman olganda esa kuzovning ko‘pchilik elementlari afsonaviy Camaro modeliga o‘xshaydi, lekin bu faqat tashqi o‘xshashlikdir. Bunda kuzovning ayrim detallarini puxta ishlab chiqish hisobiga, a’lo aerodinamik ko‘rsatkichlarga erishishga muvaffaq bo‘ldik. O‘zbekiston bozorida avtomobil 4 xil rangda taklif qilinadi (oq marvarid, oq-kulrang, to‘q kulrang va qora ranglar).', '2023-05-11 22:36:49');

-- --------------------------------------------------------

--
-- Структура таблицы `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `phone1` varchar(20) NOT NULL,
  `phone2` varchar(20) NOT NULL,
  `email1` varchar(20) NOT NULL,
  `telegram` varchar(32) NOT NULL,
  `instagram` text NOT NULL,
  `facebook` text NOT NULL,
  `youtube` text NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `mainImage` varchar(20) DEFAULT NULL,
  `aboutImage` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone1`, `phone2`, `email1`, `telegram`, `instagram`, `facebook`, `youtube`, `title`, `text`, `mainImage`, `aboutImage`) VALUES
(1, 'Xorazm viloyati Urganch shahar Tinchlik ko\'chasi 4-uy', '+998999878797', '+998999878797', 'test@test.uz', 'https://t.me/213123123', 'https://instagram.com/213123123', 'https://facebook.com/213123123', 'https://youtube.com/213123123', 'Avtomobil do\'konimizga Xush kelibsiz!', 'Oson va qulay transport vositalarini qidirayotganlarga - Bizning korxonamiz sizga yordam berish uchun tayyor. Avtomobillarni ijaraga berish xizmatimiz bilan, tez va oson yo\'l bilan murakkabliklardan ozod bo\'ling. Bizning keng xil avtomobillarimiz, sifatli xizmatimiz va raqobatbardosh narxlarimiz sizni zavqlandiradi.\nSafar, sayohat yoki ishga yo\'lingizni osonlashtirish uchun bizning korxonamiz sizga eng yaxshi transport vositasini taklif qiladi. Har bir avtomobil xavfsizlik va ishonchlilik standartlariga javob beradi, shuningdek yangi va qulay ko\'rish imkoniyatlari bilan ta\'minlanadi.', '71174349.jpg', '866784170.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `imageName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `image`
--

INSERT INTO `image` (`id`, `car_id`, `imageName`) VALUES
(10, 1, '972746153.jpg'),
(11, 4, '726723932.png'),
(12, 4, '189778721.png'),
(13, 4, '131312092.png'),
(14, 2, '185855895.png'),
(15, 2, '408759403.png'),
(16, 2, '192985113.png'),
(17, 1, '677010292.png'),
(18, 1, '397352573.png'),
(19, 1, '717521250.png'),
(20, 1, '124709821.png');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `car_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `name`, `phone`, `car_id`, `message`, `date`) VALUES
(17, 'amudaryo', '+998930939200', 2, '', '2023-05-13 14:01:33'),
(18, 'amudaryo', '+998930939200', 4, '', '2023-05-13 14:01:48'),
(19, 'amudaryo', '+998930939200', 2, '', '2023-05-13 14:05:00'),
(20, 'amudaryo', '+998930939200', 0, 'asdasdsa', '2023-05-13 14:05:11'),
(21, 'amudaryo', '+998930939200', 4, '', '2023-05-13 14:28:57');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'admin', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `car_id` (`car_id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
