import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateGameDescriptionColumn1704262102610
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    UPDATE game
    SET description = 'This 5x3 colorful slot game is stacked with fruit symbols, traditional sevens which are wild symbols, and stars that are scatter symbols. Bet on 20 lines to win over x1000 in this extremely generous 97.21% RTP slot. Fruitful spins and lucky wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:BoomingFruits20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Absolute slot of choice of all classic slots lovers! The 5x3 slot is simple and straightforward, where nothing distracts you from pure gambling experience. This colorful slot game is stacked with classic fruit symbols, so you don''t need to check the payable - you know the game, it''s time to enjoy and win! \r\nExtremely low min. bet makes this game totally affordable for all slot lovers. High volatility, 243 lines, x4500 max exposure, and generous 96,98% RTP will fascinate even an exclusive player. Fruitful spins and lucky wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:BoomingFruits243'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This classic 3x3 slot is simple and straightforward, where nothing distracts you from the pure gambling experience. This high volatility slot game is stacked with classic symbols, so you don''t need to check the payable - you know the game, it''s time to enjoy and win! \r\nExtremely low min. bet makes this game totally affordable for all slot lovers. 27 lines with x243 max exposure and generous 97,03% RTP will fascinate even an exclusive player. Let''s bring some lucky spins & wins!'
    WHERE identifier = '1spin4win:BoomingFruits27'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This colorful slot game is stacked with fruit symbols, traditional sevens which are wild symbols, and stars that are scatter symbols. In this 5x4 slot, 40 lines are available for your perfect combination, which will bring you up to x797 of your bet. Fruitful spins and lucky wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:BoomingFruits40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This colorful slot game has 4 reels stacked with fruit symbols and one extra reel with multipliers. Bet on 81 ways to get some juicy wins, which will be multiplied up to x3. All in all your winnings can reach up to x3600 of your bet with just one spin. Fruitful spins and lucky wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:BoomingFruits81x'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Apart from brimming with fruit symbols and the traditional sevens, this 243-ways slot also possesses a gold coin symbol with various values. Collect 3+ coins on the screen in any position and win values of coins will be added to the win of the game. The classic seven is the highest paying of the symbols, but all symbols give great wins if you are on a good stake. Though there is no wild symbol, but this video slot has additional Bonus Game feature -  3, 4 or 5 scatters will trigger 7, 10 and 15 free spins accordingly. Lucky spins and fruitful wins!'
    WHERE identifier = '1spin4win:CashAndSpins243'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This classic style game with traditional symbols offers you a variation of fixed paylines of your choice: 20, 40, 60, 80 or 100. The classic seven is the highest paying symbol, moreover it is a wild symbol that can substitute any symbol except coins. By the way, there is a coin feature offering you extra winnings when three or more coins appear on any position and adding their values to your total win. Another interesting feature to mention is Cash+ when just by adding extra 50% to you bet doubles your chances to win coins. Fruitful combos and good luck for you!'
    WHERE identifier = '1spin4win:CashnFruits100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Apart from brimming with fruit symbols and the traditional sevens, this 243-ways slot also possesses a gold coin symbol with various values. Collect 3+ coins on the screen in any position and win values of coins will be added to the win of the game.\r\nIn this fancy 5x3 classic fruit slot players should select their bet prior to spinning the reels. There is a range of fixed bets below the reels and clicking "Start” initiates the game and the "Au­top­lay" button spins the reels a number of times without interruption. In this game, your lucky spin will bring you up to x1000 of your bet. Extremely low min. bet makes this game totally affordable for all slot lovers. Fruitful combos and good luck for you!'
    WHERE identifier = '1spin4win:CashnFruits243'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The 5x3 diamond slot has simple and straightforward mechanics, where nothing distracts you from pure gambling experience. This shiny slot game is stacked with precious gems, but the most desired gem is ruby seven! \r\nExtremely low min. bet makes this game totally affordable for all slot lovers. High volatility, 243 lines, x2700 max exposure, and generous 96,94% RTP will fascinate even an exclusive player. Shiny spins and lucky wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:DiamondLuck243'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This is the 100-line version of the Lucky Bells series, however this classic style game with traditional symbols offers you a variation of fixed paylines of your choice: 20, 40, 60, 80 or 100. The game is centered around different fruits, but the most anticipated symbol is a Bell can appear on reels 2,3 and 4, which plays as expanded wild and substitutes all symbols on the same reel, except Star scatters. The game is pretty straightforward and has really generous RTP of 96.8% and brings so much fun due to its sophisticated math models.'
    WHERE identifier = '1spin4win:Lucky100Bells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic style game with traditional symbols. Feel the atmosphere of old slot machines without leaving your home. This is the 20-line version of the Lucky Bells series. The game is centered around different fruits, but the most anticipated symbol is a Bell can appear on reels 2,3 and 4, which plays as expanded wild and substitutes all symbols on the same reel, except Star scatters. The game is pretty straightforward and has really generous RTP of 97.2% and brings so much fun for those who enjoy classic slots with sophisticated math models.'
    WHERE identifier = '1spin4win:Lucky20Bells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This classic 3×3 slot is simple and straightforward, where nothing distracts you from the pure gambling experience. This medium volatility slot game is stacked with classic symbols and star scatters, so you don''t need to check the payable – you know the game, it''s time to enjoy and win! \r\nJust 5 lines and  x204 max exposure, but a generous 97,09% RTP will fascinate even an exclusive player. Nine same fruit symbols will double your win. Let''s bring some lucky spins & wins!'
    WHERE identifier = '1spin4win:Lucky3Cherries'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit video slots continue to add to casino lists: meeet Lucky 5 Bells is a colorful fruit online slot with 5 fixed paylines and 5x3 reel set. The game is centered around different fruits some of these are oranges, plums, grapes, cherries and lemons, but the highest paying symbols are watermelon, horseshoe and sevens. The most anticipated sybol is a Bell can appear on reels 2,3 and 4, which plays as expanded wild and substitutes all symbols on the same reel, except Star scatters. The game is pretty straightforward and has really generous RTP of 97.2% and brings so much fun for those who enjoy classic slots with sophisticated math models. Give it a try and let the Bells be with you!'
    WHERE identifier = '1spin4win:Lucky5Bells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Crown 20 is a grateful traditional 20-payline video slot with a generous 97,5% RTP. Players should select their bet prior to spinning the reels. There is a range of fixed bets below the reels and clicking "Start” initiates the game and the "Au­top­lay" button spins the reels a number of times without interruption. In this 5x3 slot, your lucky spin will bring you up to x730 of your bet. Wilds and scatters will help you to get the winning combos. '
    WHERE identifier = '1spin4win:LuckyCrown20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Crown 81x is a grateful 81-payline video slot with a generous 97,3% RTP.  This regal slot game has 4 reels stacked with royal attributes and A,K,Q and J symbols, plus one extra reel with multipliers. Bet on 81 ways to get some noble wins, which will be multiplied up to x3. All in all your winnings can reach up to x3600 of your bet with just one spin. Lucky spins and generous wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:LuckyCrown81x'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Crown Spins is a grateful 243 pay ways video slot with extremely generous RTP - 97.4%. There is plenty of fun to be had whilst playing this game, there are so many different options available to gain yourself a win. The Lucky Crown is the highest paying of the symbols, but all symbols give great wins if you are on a good stake. This themed online slot has additional Bonus Game -  3, 4 or 5 scatters will trigger 10, 15 and 25 free spins accordingly. But there is more to come! This slot has also coin feature offering you extra winnings when three or more coins appear on any position and adding their values to your total win. Lucky spins and generous wins for all the true classic gamblers!'
    WHERE identifier = '1spin4win:LuckyCrownSpins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Lady Bug is played on five reels with three rows and ten win lines. It combines fortune-themed design with a classic bonus feature and super high variance to very playable effect. You can benefit from it if you have patience to win a special bonus round, triggered by at least 3 scatter symbols on the same screen. Lucky Lady Bug bonus round is legendary among slot machines players, because it can retrigger and supply you with more and more free spins and moreover, it multiplies all your winnings by 3 during bonus round.'
    WHERE identifier = '1spin4win:LuckyLadyBug'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wins pay from left to right on 20 fixed paylines.The highest paying symbol is a tribal leader can multiply your bet x1000 if five of them will fill the line. Overall max exposure of this game is even higher - be ready to win x1500 of your bet! The other most desired symbol is a golden temple which is an expanding wild symbol and can appear on reels 2,3 and 4 substituting all the symbols on the same reel to complete your What''s more catchy, this themed online slot has additional Bonus Game -  3, 4 or 5 scatters will trigger 7, 12 and 20 free spins accordingly.'
    WHERE identifier = '1spin4win:LuckyTribe20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Queen of Diamonds is truly generous with 97,5 % RTP and your lucky spin will bring you up to x730 of your bet. Wilds and scatters will help you to get the winning combos. There is a range of fixed bets below the reels and clicking "Start” initiates the game and the "Au­top­lay" button spins the reels a number of times without interruption. Let the diamonds bring you luck!'
    WHERE identifier = '1spin4win:QueenOfDiamonds20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic style game with traditional symbols and 20 fixed paylines.The highest paying symbol is a classic seven which can multiply your bet x5000 if five of them will fill the paying line. The other most desired symbol is a golden bell which is an expanding wild symbol and can appear on reels 2,3 and 4 substituting all the symbols on the same reel to complete your What''s more catchy, this iconic slot has additional Bonus Game -  3, 4 or 5 scatters will trigger 7, 12 and 20 free spins accordingly. Have fun and enjoy the perfect maths for true gamblers!'
    WHERE identifier = '1spin4win:WildnLuck20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aliens & Pyramids is our newest game title in the Adventure category. We, of course, could leave you like that without a high-quality slot dedicated to Egypt and the Pyramids that would take the brain out of its innermost mystical meaning. Welcome! It is with this slot that we open the superb series of these outstanding gaming titles. It is no secret that it is pyramidal slots that are among the most popular, evoke vivid gaming feelings and bring the most brain-explosive gaming titles. The philosophy of this slot will probably remind you of classic films from the 90s, when the popular topic of new discoveries in the Egyptian Pyramids was successfully intertwined with old assumptions and guesses. Some of them have long suspected the unearthly origin of such monumental structures, but we know the truth for sure! That is why we offer you a truly unearthly gameplay, mind-blowing winnings, space game features and also something that reveals the secret of the gambling universe. Intrigued? Aliens & Pyramids is a classic slot with a layout, a comfortable, but not extreme Return to Player value, as well as a very mild Hit Rate value, allowing you to fully enjoy both the gameplay and the special benefits and features. But excuse me! What are these benefits? An alien pharaoh may come to you, at the moment turning into an expanding wild, flying saucers will not leave you indifferent, and in particular, if three visit you at once, then you can expect 12 free spins! During the current spin of free spins, each alien gives new free spins! Admiration and more! The most important thing is that each alien landed will open and replace all symbols with symbols with higher payouts until you have only the most expensive symbols on wheels at all and complete cosmic gambling happiness comes! Don''t forget to double your winnings in the classic double game with a light hand too!Overall, Aliens and Pyramids is a game with the highest profit potential. You will just truly flow and enjoy how winntertaining, delightful and exciting the pastime can be. Aliens & Pyramids is the latest addition to our award-winning collection of Adventure slots. Liked it? Wait for the updates, more Adventure titles are on the way!'
    WHERE identifier = '5men:AliensPyramids'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Boiling Hot is the newest slot game title released by Five Men Gaming studio. It is a very classical, beloved and traditional 3 reels and 3 rows slot game with hot fruits, ready to please your gaming feelings and designed for the very core classic players.Boiling Hot is another addition to Five Men Game online gaming studio portfolio of classic games. With 5 paylines, low to middle volatility and average of 95.2% Retrun-to-Player value, Boiling Hot presents traditional gaming at its finest.The game is already present with all of our gaming partners and aggregators. Are you in today for the Fruits? Check Boling Hot out !'
    WHERE identifier = '5men:BoilingHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Book of Domination is the newest addition to our portfolio of slots, this time covering highly sensitive and super bright topic of domination, love, subordination and further popular modern culture subjects related to this very well-known topic. We are bringing the concentrated plot of domination in an exciting game of slot!  Normally we would rather call it a 18+ game, but in fact have we covered and hidden everything, that does not belong to gambling, however, left everything important as well! Handcuffs, bumps, lashes, latex, leather masks, chastity belt and uncompromising dominas, this is HELL of a slot! 3 scatter symbols trigger 10 free games with randomly selected special expanding symbols covering the whole reel and giving you a chance to win 5131 times of your initial bet!Book of Domination is a 5 reels to 3 rows grid game with an average Return-to-Player value of almost 95%, HIGH volatility and your beloved features. You can expect SCATTER symbol of mysterious Book of Domination, accompanied by classic gamble feature and some tasty freespins! Book of Domination is the latest addition to our portfolio of sexy slots, which is rapidly expanding. Stay tuned for more releases very soon!'
    WHERE identifier = '5men:BookofDomination'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Book of Ulugh Beg is the latest addition to our portfolio of slot Games, presenting classic and well designed game, suitable for majority of classic player. The famous Timurid sultan, astronomer and mathematician is well-known for his findings and discoveries in the field of trigonometry, spherical geometry and other exact sciences, but also, and in the first line, in the astronomy. Ulugh Beg worked his life for identifying how stars and sun affects our lives, and how we can extract benefits from this knowledge! We have turned the mysterious plot surrounding Ulugh Beg into an exciting game of slot! You should be ready to play and try your luck with magic Ulugh Beg discoveries!The Games is 5 reels to 3 rows with High volatility and average Return-to-Player value of 94% and 10 paylines. The games has SCATTER and a special expanding symbol, both presented by desired the Book of Ulugh Beg itself, many classic symbols and the Maestro Ulugh Beg himself. The Game also has classic gambling feature allowing you to multiply your winnings by placing correct card picks. Book of Ulugh Beg is copyright slot title from Five Men Gaming studio presenting atmospheric gameplay and exclusive features. Do you have a lucky hand? Try It out with Ulugh Beg!'
    WHERE identifier = '5men:BookofUlughBeg'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Five Men online Gaming studio is proudly presenting a brand new, exclusive slot title, covered with tons of mystery, magic, scarcity, pure gambling, and special, described by many as wonder and dramatic at once, Chernobyl zone, full of huge prizes and crazy undertakings!Globally recognized as one of the world''s greatest ecological, environmental, and social disasters, Chernobyl tragedy has had a huge impact on popular culture. Not only it had given birth to many classic plots and literary heroes, but it also created endless fantasy novels, stories, movies, and discussions. Recently, Chernobyl tragedy was also not able to escape current political clashes and turmoils, with the movies, discussions, and propaganda coming forth and around. What is so dramatic and important about these events, that made everybody talk about it again? Well, one way or another, we have turned the whole saga into a brand new game of slot!CHERNOBYL is a brand new slot presented on classic 5 reels to 3 rows grid, with 10 paylines and average Return-to-Player value of 94,04%. The game is set as a slot with HIGH volatility and expected hit rate at 36,03%, allowing players to expect pretty well-balanced returns and adjusted risk ratios. The game has some exciting features, that will allow you to enjoy the steady gambling process. A Scatter symbol is presented by the famous 4th block of a nuclear station, also being WILD. You can enjoy the classic gambling feature, and also be ready for the special expanding symbol, radiation, expanding through the other symbols, just as quick as the real one!Chernobyl is the latest addition to Five Men Games'' portfolio of HORROR slots. We are aimed to quickly expand this vertical with new titles to be released soon. Stay tuned and subscribe for our news for the latest updates!'
    WHERE identifier = '5men:Chernobyl'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Christmas Queen is a brand new, just released, perfect Christmas gift slot for its unimaginable delight. We are thrilled to take you to a wonderful holiday atmosphere, with an attractive Christmas Queen, incredible wins and super addictive gameplay. Are you ready to surrender to the Christmas Queen?Christmas Queen is a new, fresh and beautiful online slot title from the online gaming studio Five Men Gaming. In addition to delighting our lovely audience of loyal players with a Christmas-themed slot, we''ve included a ton of your favorite features. This game is an extended 5 x 4 slot layout, good game volatility and a very comfortable Return-to-Player value for players. In addition, as already mentioned, the game has an additional classic bonus feature that allows you to significantly multiply your winnings. The game has as many as four! Delightful symbols, catching which in full growth you have all the prospects to receive your huge cash gift in just a couple of seconds! These symbols are : Champagne with salad, so close to the common people, already satisfied with the drunken festive gnome, your lucky deer and the intriguing Queen, the Christmas Queen herself. Intrigued?You must be! In addition to all that has been said, this game has forty (40!). Pay lines, a stacked symbol and an unimaginable hit rate! We have tried to maximize the celebration in your home! Every second spin is actually a winning one!'
    WHERE identifier = '5men:ChristmasQueen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indeed, Democracy has undergone a lot of trials in the outgoing years. To tell the truth, many do not even believe if it exists at all? Let''s be honest. For many, the very word and concept Democracy has become more of a joke and a meme. We have developed these sentiments and show you Democracy as it is. The most real, profitable and adrenaline casino!The Democracy slot is the result of the media buzz and media waves that swept past us this wonderful years. In our newest online slot, we have reflected all the delights that modern Democracy literally endows its users with. Here are the longed-for backs, and the expectation of victory, and beautiful clownish symbols, and high expectations, and tears of defeat, and mirage of victories. And of course, the US dollar! Democracy is a slot with an extended 5-4 layout (you must have a choice!). In addition to intriguing spins, you can expect comfortable game volatility values, and a delightful RTP value. Wild chicken will substitute all the symbols and our special democratically dollar beasts can drop three times! And then, before you start spinning 10 Free Spins, you must first choose your favorite political party! In particular, the political donkey party or the political elephant party. Next comes the calculation of the number of very important elephants or donkeys, according to the formula one symbol appeared anywhere on the reels equals one vote. In the end, if there are more votes for the party you have chosen, then you get another +10 Free Spins! Thus, the number of free spins is infinite, you just need to vote correctly! Sounds like democracy, doesn''t it? Additionally, you can expect a pre-election atmosphere as well as addicting classic gameplay!We tried to make this slot as close as possible to the pre-election process, so loved by the masses. The Democracy Online Slot is the newest addition to our line of Life slots. Are you ready to support Democracy?'
    WHERE identifier = '5men:Democracy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The idea of creating this juicy and delightful online slot Drunken Rabbit was partially inspired by the classic, familiar and familiar game titles of classic video game consoles such as SEGA. The Drunken Rabbit is a wonderful combination of classic images from our childhood, such as fairy elves, as well as hilarious, plot-defining characters, such as Drunken Rabbit himself. The Drunken Rabbit will not leave you indifferent, believe me!Drunken Rabbit is an online slot available in the classic 5x3 layout, with a high game volatility value, an amazing, very pleasant and comfortable Return-to-Player value, as well as a lot of your favourite game features. What does a rabbit need? Right! A real gambling carrot! Well, let''s not hide it. Gamblers themselves need it, but under different types. In this slot, the magic carrot is the symbol of WILD. The Drunk Rabbit appears randomly and starts throwing out the carrots, which means that you can expect random wilds rain! Replaces all symbols except the most important, POT WITH CARROTS! Try to catch this symbol to please the bunny and also to please yourself! Remember, the more you please your rabbit, the more chances you have for the highest wins! Three pots with carrots trigger amazing Free Spins, while additional golden pots give another 60 Freespins! Is it a drunk dream? Well, it is not! The classic double feature is also here to probably give you some sobering effect after wild games with Rabbit!Drunken Rabbit is the latest addition to our line of Adventure slots. You can expect more slots from this category very soon. Until then, please enjoy this adorable drunken and kind bunny game! Holidays season is the one to enjoy on full scale, and we are here to give the best from our collection! Enjoy!'
    WHERE identifier = '5men:DrunkRabbit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'These Fruits are really special. Take it seriously. Electro Fruits online slot by Five Men Games brings you classic, yet very exciting gaming experience. Fruits can be classic, hot, 3d, fiery, sexy and attractive on numerous different ways, but ours are special. Why? Because we are presenting very core of gambling, Fruits accompanied by high energy tricks and style.  Electron Fruits is an online slot game by Five Men Gaming Studio played at 5 reels to 3 rows and despite being pretty HIGH in terms of your gaming feelings, it presents LOW volatility, so be sure that this slot is emotional and extrovert players! With an average Return-to-player value of 95% Electro Fruits is here to bring you stable gaming experience. Electro Fruits online gaming slots has 10 paylines and red / black card gambling feature, allowing you to win additionally and risk in accordance with your personal preferences.   Electro Fruits online gambling slot is one of the so-called classic Fruit slots from our wide portfolio of games. Check out some of our other Fruit slots in game catalogue and get some inspiration!Are you ready to push the electro gaming button?'
    WHERE identifier = '5men:ElectroFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'El Presidente is the newest addition to our portfolio of Life slots, featuring real live plots and events, turned into incredible full-scale game of online slot. This time we bring you a languid world of incomparable Latin America with a really cool and famously twisted plot. What would you imagine if someone tells you that now you belong to a closed circle of ordinary Latin America''s dictator? You name it! Trading variety of weapons, drugs, cleaning dirty money, a fashionable lifestyle, diamonds, untidy women, intrigues, secret services, dirty and clean politics, OH! Is not it too much? For the gambling certainly not! El Presidente is a 5 reels to 3 rows slot game with PRESIDENTE himself watching all your spins straight from the screen, having 30 paylines and solid Return-to-Player (RTP) value of almost 95%. It is a medium volatility game with expected hit rate value of around 20% with Freespins and Stacked Symbol available at your fun service! Groups of wilds and grops of scatters appearing on reels 2, 3 and 4 are also there to please your gambling feelings and multiply your winnings! Are you ready to accept the challenge and take on the El Presidente adventure?'
    WHERE identifier = '5men:ElPresidente'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Euphoria Fruits is our newest addition to our most beautiful and supremely delightful line of high quality slots. This game will amaze you with its psychedelic environment, time-slowing atmosphere, interesting features, groovy graphics and mushroom sounds, and, of course, the highest values of unimaginable profit!Euphoria Fruits is based on animated and highly addictive, driven by hippies world, environment, inspired by the dirty hairy 60s. Free your mind by playing with our wild fruits and raise your best feelings! We, in our miraculous game and slot studio, Five Men Gaming, have decided to take a daring step  to combine these two truly exciting entities, incredible acid fun and gambling, and present to your attention this daring gaming title! Get ready to immerse yourself in a barefoot party style with all its sharp and vivid emotions, skilfully and devilishly mixed with the original gambling gameplay!Euphoria Fruits is a classic slot in your favourite 5x3 or 6x3 layout, with five paylines, low volatility very comfortable for respectable players, stunning gameplay and a special extra reel chip, which is basically an additional reel, that spins your profits in the same phantasmagoric and euphoric style, in which the game itself is mad!'
    WHERE identifier = '5men:EuphoriaFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mango for the breakfast, passion fruit for the brunch? In today''s closed world its important to feel cool again, and the coolest you can feel is by refreshing some best shots of your memory, feelings, mental states and tastes!With EXOTIC FRUITS online slot from 5men.games you are teleported to the wild nature yet again, with all of the most motley exotic fruits mixing together to bring you luck today.Exotic Fruits is a new engaging slot from Five Men Games online gaming studio, presenting classic 5x3 grid, and some tasty symbols for your attention. The game presents highly dynamic gameplay with expected average Return-to-Player (RTP) value of 95,00%. While playing Exotic Fruits you can expect HIT RATE value at an average of 25,7%, meaning that while playing Exotic Fruits you can expect to stop on a winning combination in almost quarter of all the times.   Exotic Fruits is middle Volatility game designed for your maximum relaxation and fun. This is not the game where you are forced to risk too much, nor you will be eventually bored. The game was released on 12th of February 2020 and has already gained strong interest from players across the globe.Are you taking the shot?'
    WHERE identifier = '5men:ExoticFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our new exclusive Fruithead slot is made in the standard and well-known 5 x 3 layout, and is an aggressive, highly dynamic and very fun slot with a number of benefits and familiar gaming features. You can expect wonderful gameplay and interface, exciting features and overal incredible gambling experience.Have you watched retro cartoons of 1930-s? Their unforgettable charm and amazing characters served as a forerunner for the script and graphics of Fruithead slot. This is not about going crazy. It''s about classical hand drawn animation, gamification, and keeping up with current trends. Players need fun at its fullest and we are ready to give it to you! Get ready to play with lucrative fruits and try to catch the lucky smiling seven. It is this coveted symbol that can bring you an incredible multiplication of your winnings! The Fruithead slot is available for playing on all mobile devices, and, among other things, offers, as already mentioned, the function of adjacent pays. Also do not forget to play the classic version of the side-game that allows you to double your profit!The Fruit Head is the newest and latest addition to our Fruit Slots catalog. You can play almost every type of fruit slots imaginable! A Fruithead gracefully complements this lovely list. Are you ready to play?'
    WHERE identifier = '5men:Fruithead'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you, too, start a hearty meal with the right appetisers, properly served and complementing the meal? Well, if not, then Five Men Gaming game studio is ready to serve them for you right now! Our wonderful new Fruits''n''Appetisers slot is ready to delight you with delicious spins and the highest wins!Fruits''n''Appetizers is a slot in an extended 5 x 4 game layout, offering you wonderful wondrous in-game fruits & cheese, specially selected for your special taste. Hunt for three high-end vino sevens. Are you ready to accept it? This Fruit Slot have comfortable volatility and excellent return to player (RTP) value, as well as a very peculiar, one might even say outgoing, Hit Rate value. Sounds intriguing? Fruits''n''Appetisers offers you 40 paylines! And up to 1200x your maximum winnings, as well as your beloved double game.'
    WHERE identifier = '5men:FruitsnAppetizers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruity Boobs is a 5 reel 5 winning lines game by Five Men Games. This game will bring you to a real men world with authentic interests and real excitement. Fruity Boobs has no bonus features except for a STAR-boobs scatter symbol but you can make huge wins on almost all 5 symbol combinations. The number of winning lines is set at 5 and cannot be changed.The game is a medium volatility game - you will find that 5 reels with 5 bet lines with only 7 symbols (excluding the scatter) gives you a very high percentage of wins. The highest paying symbol is Boobs 7, if you land five 7 Boobs lady symbols on a winning line at max bet, you will win a generous 1,000 times your stake coins and four symbols will give you 200 times your stake. Fruity Boobs is available on mobile devices such as smart phones and tablets running android and IOS (iPhone and iPad). Enjoy the amazing game for extended play time and maybe you''ll get a decent sized win.'
    WHERE identifier = '5men:FruityBoobs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There is no limit to our admiration! Shambala, as you know from ancient occult texts, is a secret underground world, which hides a world of wonders, secrets of ancient civilizations, and of course, gambling truth with a lot of exciting game features and delightful gameplay!Shambala captures the imagination so much that even the roughest totalitarian regimes equipped entire expeditions to find this secret ancient world and learn all its wonders! Shambala is a world of Atlanteans and ancient stone cities, Vimana flying saucers and meditating yogis, secrets of the gaming universe and delightful prizes! The most important thing is the fact of finding the secret Shambala near Mount Kailash, a trully sacred place!The Gateway to Shambala is an extended slot game in a 5 to 4 layout with a ton of great gaming features. If you catch 3 Mount Kailash symbols, you can expect up to 20 free spins. Each new Mount Kailash gives new Free Spins. The secret gates of Shambala is the symbol of the Wild. Wilds caught in the free spins spin multiply your winnings by 2x or 3x.The Gateway to Shambala is the latest addition to game titles to our intriguing lineup of Mystic games. Do you like mysticism? Mystic slots have long been one of the most popular and most played gaming titles in the gambling world. Keep in mind that with the release of this excellent slot we did not just open the secret gates of Shambala! We are opening a whole pipeline of this kind of cellular titles! Get ready to plunge headlong into the enchanting world of rare and mysterious slots from Five Men Games!'
    WHERE identifier = '5men:GatesofShambala'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Kamasutra online gambling slot is the newest addition to Five Men''s Game titles portfolio.  This game is our unique concept, featuring legendary ancient Indian text, dedicated to love and emotions. Adult themed slot takes into exciting world old Indian art of love, raising deep emotions, but not however breaching anything.It is a 5 reels and 3 rows game with Return-to-Player value averaging 95,1% . You can expect relatively high volatility and rather high emotions gaming with Kamasutra, but be sure it will be fully overcompensated by exciting animation of symbols, WILDs and static WILDs. Those Macho WILDS can create their own winning combinations alone, please refer to the game info rules for more details. All symbols are animation of emotional love, yet again we have to underline, that its just on the level, not going beyond!The graphics at Kamasutra are pretty high quality, mainly defined by the nature and the theme of the game. If you are in the mood for mystic and love connection, this slot is definitely something for you!'
    WHERE identifier = '5men:Kamasutra'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Five Men Games presents brand new slot, Kawai Queen. We are bringing you to the world of pure anime style Japanese CUTENESS with all of its exciting, funny, mysterious and magic features! Kawaii Queen is challenging you to play with girls, CAKES, some pretty crazy symbols and tons of gaming excitement. The very definition of the Kawaii is coming from the classic novel The Tale of Genji, where it was first describe as pitable qualities. Do you actually hold some? In modern general terms it brings pitability to all live aspects, from handwriting to merchandise and dressing. And we are here to turn those qualities into lucky lines, symbols and special features!   Kawaii Queen is the the brand new slot game from Five Men Games, 5 reels to 3 rows game with an average Return-to-Player value of 94% and Medium volatility. Playing Kawaii Queen you can expect the slot Hit Ratio of around 33,1%, making it a good game for medium risk-adjusted players. Kawaii Queen has SCATTER presented by huge CAKE, tasty Wild symbol, as well as Gamble Feature, offering you to multiply your winnings hitting the lucky card. Kawaii Queen is another addition to our portfolio of unique themed games with copyright design and advanced features. Kawaii Queen commands you to try this slot out!'
    WHERE identifier = '5men:KawaiiQueen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Five Men Games online gaming studio has recently released a new slot Kuponovka.While it is rather complicated to guess the topic of the game from the first look, it becomes obvious with first spins, this is a gangster themed game. And for citizens of certain country, it is more than obvious. This slot is about wild privatisation of state-owned property in the early nineties somewhere in the middle of Europe, on the ashes of freshly collapsed communist country. Sounds intriguing, doesn''t it? As you can see, the artwork reflects the gangster theme well with a backdrop of common socialistic flat, inspired from the late 1980s and a mobster/politician looking at you with provocative winning offerings. While you spin, you will benefit from era-valid music and the classic Five Men Games slot sounds. This slot looks stunning and original, but can it pay?This slot has a setup of 5 reels by 3 rows which includes 25 pay lines and a set RTP of 97.2%. All these statistics are pretty normal for Five Men Games slots. Kuponovka has Bonus symbol of pyramid of cards, which awards up to 15 Free Games with expanding wild, and wild being one famous factory (which was essentially sold during privatisation). Remember, that time it was all pretty much about wild numbers and wild profits and we are recreating that charm in order for you to feel apart. Kuponovka slot is very impressive visually with highly detailed graphics and well-made art which represents the slot theme fully, also offering low to middle volatility. This slot is available on all sites with Five Men Games games. While playing Kuponovka, remember, that real life events occurred almost 30 years ago, gave birth to many modern US dollar billionaires. Kuponovka can''t do that. But what it definitely can, is give you astonishing gaming experience, and also fat winnings. Are you ready to take a shot?'
    WHERE identifier = '5men:Kuponovka'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Camgirl''s Charm is the newest slot title from Five Men Games online gaming studio, taking you into modern atmosphere of live web streaming, live online money making and intense luck, that awaits you with our lovely Lucky Lady.Turned into iGaming slot, live camera streaming offers you some exciting features and extensive long-term gameplay. What is modern era all about? Video, streaming, live engagement, fun and adrenaline! We are bringing you the charm Lady posing and acting as a modern day streamer with all the necessary anthurage, from surrounding cameras and coin donates, up to special tricks, very familiar to every modern streamer!The game is set as HIGH volatility game, so you can be sure not to get bored with our Lucky Lady! The average hit rate is set around 33,95% and average Return-to-Player value of 96%. Lucky Camgirl''s Sharm, as already mentioned, offers you extensive toolset. Be ready to play with the SCATTER symbol, being CRYSTAL BALL, capable of starting up to 15 Free Games and hitting up to x3 Multiplier. WILD is presented by the Lucky Camgirl herself, who substitutes all symbols except scatter and also doubles the win when substituting. Lucky Camgirl''s Charm is our next addition to the series of unique oriented slots. Are you ready to try your luck?'
    WHERE identifier = '5men:LuckyCamgirlsCharm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Janusz is themed on the classic Polish meme and lucky opportunities to win huge prizes accompanied by classic average Polish man environment.Beloved country, Poland has become a real sensation in the recent years in terms of gambling, and especially online gambling. Five Men Games online slot reflects the market reality and presents you the tailor-made title, specially aimed at Polish players.Lucky Janusz is easy to play and features symbols that all players, especially polish ones, will be familiar with. Icons include traditional for polish players symbols like local consumer basket or traditional symbols. You can see how much you could win by checking out the pay table sitting above the reels. Visually, Lucky Janusz is rather nicely done - a classical cartoon meme design and stylistic reels. The game has a Wild and Scatter symbols, watch out also for the animated BEER symbol, which once won on reels 1,3 and 5 (only), starts 15 FREE GAMES with Bonus symbol of another beer! Lucky Janusz has a Return-to-player value of 95,23% and modest volatility - be sure to enjoy the game for the long term!As you can see, there''s plenty of action on offer with Lucky Janusz here, and you won''t be waiting long to trigger an extra. If you like plenty of variety in your play, then you should find much to like here with this game'
    WHERE identifier = '5men:LuckyJanusz'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monkey Mines is our newest addition to portfolio of unique, stylishly covered slot games. Play with the monkeys in the wild jungle to mine some shining coins with the help of special features and beloved WILD, a strict supervisor lady and SCATTER, rocks full of treasuries, symbols. You can win Free Spins if you handle the monkeys correctly, and you can multiply freshly mined gold as quick as the blink of an eye as well!  The brand new slot game from Five Men Games, Monkey Mines, is a 5 reels to 4 rows game with an average Return-to-Player value of 93% and Medium volatility. While trying to win big with Monkey Mines you can expect the slot Hit Ratio of around 33,15%, making it a good game for medium risk-adjusted players. However, be careful playing with the monkeys! This game with its unique atmosphere, branded design and solidly engineered features can make you fall in love with it for countless hours? Is that what you are seeking for? Take your chance now!'
    WHERE identifier = '5men:MonkeyMines'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Great Northern War was a long-lasting, twenty years long multi combat military conflict between the coalition of Northern European countries and the might Swedish Kingdom, that ended in 1721.Five Men Games online gaming studio brings you up the combative plot featuring some of the greatest Northern War heroes, costal, sea and land assaults. Get ready to explore sick symbols, heavy earns and exciting realistic atmosphere of the 18th century. The great Swedish Kingdom has lost its status of the super power, and as a result allowed newly born Russian Empire to take over and open the sea window to Europe. The slot is set as extended 5 reels to 4 rows greed with High volatility and adjusted hit rate values, reaching average RTP of almost 95% and very well balanced gameplay. Like any other high volatility slot, you can expect BIG emotions from Northern War, and once you are ready to become a winner, be sure that rewards will be skyhigh UP TO 5154 times of your bet! 3 Fortress symbols trigger 10 bonus game with 10 freespins and special expanding symbol.The Great Northern War is another gaming title from Five Men Gaming online studio portfolio of historic games, featuring special events in a trully exciting gambling style!  Are you ready?'
    WHERE identifier = '5men:NorthernWar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pivnice, or dubbed from Czech Republic is a brand-new special slot game from Five Men Gaming studio. Beer pub, as we all know it, is a sacred place for many, fulfilled with variety of bright emotions. However, Czech PIVNICE, is super special place, and at all means a super special game. Pivnice has 5 reels and 50 paylines. Playable across desktop, mobile and tablet devices, you are taken to a Czech beer bar atmosphere where you''ll benefit from a Free Games with Moving Wilds feature where famous Czech Kozel serves as WILD, being accompanied by legendary good soldier Shveik.  Experience true Czech atmosphere with beery symbols  A, K, Q, J, 10 and 9 as well as lovely Czech servant girl KRASAVICE. PIVNICE is set with Return-tp-Player value of 95,3% and provides solid returns and long-term exciting gameplay. Pivnice is a medium volatility game which has the potential to give you big wins in the Free Games with Moving Wilds feature due to the expanded wilds that move the portfolio of Five Men''s Game studio unique themed games. Check our full catalog '
    WHERE identifier = '5men:Pivnice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pixel Fruits 2D is another exciting slot game from Five Men Gaming, a newest addition to our portfolio of Fruit Games, this time targeting the very deep and core nature of every person who lived through the nineties, the nature of 2d Gaming. Everybody remembers means of SEGA MEGA drive, as well as lovely DENDY games. Needless to say, that people spent days and days trying to make it with some adventure or action game, without any sort of savings! The game, the passion, the dedication, the absolute impossibility to pause the process, and the incredible, almost genetic based addiction. Does that ring a Bell? Five Men Games Pixel Fruits is here to rebuild all this emotions in classy style. Pixel Fruits 2D is 5 reels to 3 rows 5 paylines pretty simplified game with an average Return-to-Player value of 93% and lovely hit rate of 15,4%. The game is considered as Medium volatility, allowing you to enjoy the gameplay for as much time as needed. The Game has SCATTER symbol presented by the Golden Star and a lovely gamble feature, bringing you back to your childhood memories. Pixel Fruits is one of the original, yet classic themed oriented game, designed to diversify and please your gaming feelings. Take the challenge and try it out!'
    WHERE identifier = '5men:PixelFruits2D'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Another 18+ exclusive slot title from Five Men Games is here, and be sure, that this one will get you, as it''s really, really a hot game! Pussy Cats is our newest slot title designed especially for wider audience, and specifically getting serious attention from younger generation and Asian players as well. You are being challenged by Pussy Cat girls, asking you to play some gamble games with them. Are you ready to break their charm and convince them?Pussy Cats is our special slot title, plotting around a concept of elegant kitty ladies, inviting you to play and try your luck. We are bringing you to the fantasy worlds of whales, cats and combinations of body parts. Be sure, that with Pussy Cats you are going to experience really high gaming feelings, and remember this slot is also set to give exceptional returns!  Pussy Cats is a 5 reels to 3 rows game with medium volatility and average Return-to-Player value of 94%. The Game has all your beloved features, such as playful SCATTER presented by tickling stick, and WILD being really WILD lady, provocating you to take the action.Pussy Cats online slot is something unique from our wide portfolio of games. Take your chance right now and have fun playing with the Pussy Cats !'
    WHERE identifier = '5men:PussyCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruits of the Renaissance is a new exclusive online slot from Five Men Games, proudly joining our wide collection of vibrant fruit slots. This intriguing slot comes in a classic 5x3 layout, along with a number of delightful and beloved features.What is the Renaissance? Revival, style, class, idea, level, and most importantly - excellent taste. It is this associative array that we had in mind when developing this truly pleasing eye of an esthete, the most delightful slot. What is closer to you, dear player? The foundations of the foundations of the new style of the Italian school of Sandro Botticelli? Or, perhaps, the subtle intellectual game of Van Gogh''s post-impressionism? Well, we put it all together! In our picturesque Renaissance Fruits slot, you can truly indulge your deepest wild gambling desires across their entire crazy scale! Play neat or wild, fast or leisurely. The Renaissance Fruit will satisfy all your gaming needs!The game is presented as a slot with a decent and acceptable RTP value, as well as your lucky Lute symbol. If you''ve caught Lute, get ready for some extra cash! A golden shimmering scatter is also waiting for you to multiply your winnings. Renaissance Fruit is a low volatility slot, which means you can expect high wins once in a given period. Are you ready to be cultivated and inspired? Launch Fruits of the Renaissance now!'
    WHERE identifier = '5men:RenaissanceFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Koh-i-noor or Mountain of light is worlds biggest cut diamonds set with long and exciting history and from our perspective, of course, with unmatched magic and though iGaming sharm, which we are happily presenting to your attention as our brand new slot!Mined in India, the current part of British Crown Jewels is sacred legend in India, and long-term object of desire. With Five Men Games game mechanics, it is now possible to return it!Return of the Koh-i-noor is a 5 reel, 20 payline slot from Five Men Games that can be played on all devices. This real story inspired game is all about adjacent wilds that form giant wilds that take over 2 reels entirely for huge wins.Set in the very heart of India, this legendary themed game looks great and has a soft feel to it. With a classic atmosphere soundtrack, this game is all about the giant crown inside clam wild symbol  when 2 or more land adjacent to 1 another (i.e. next to each other), they will then form a giant wild symbol that takes over the entire reel it''s on.Return of the koh-i-noor is a 5 reels to 3 rows game with middle to high volatility, and exciting long-term gameplay. This slot is a next update to our exclusive portfolio of unique historical oriented plot titles. Be sure to see more of them in the nearest future.'
    WHERE identifier = '5men:ReturnoftheKohinoor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Five Men Game online gaming studio proudly presents a brand new slot, So Serious Joker. Funny, mystery and super classy is here to take care of your gaming excitement, and you should definitely think of accepting the call! Do you think you can beat Joker? So Serious Joker is 5 reels to 5 rows well designed slot game with 40 paylines and some exciting features you have to take notes of. The Game has both Scatter and Wild symbols, with Scatter being presented by Golden Start and WILD being the tricky Mister Joker himself.  Gamble feature with Joker tricking you into guessing the right card is here as well. All players can also combine lots of line, line-bet and coin denominations to suit their tastes and make the perfect spin-stake and it''s a perfect game to play on your laptop either at home or anywhere else you fancy a game. Are you ready to measure your strength with the Joker? Go ahead and show us!'
    WHERE identifier = '5men:SoSeriousJoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Taras Bulba is a new, long-awaited exclusive online slot from Five Men Gaming, that takes you to the wonderful and risky world of the Cossacks. What have you heard about the Cossacks and Taras Bulba? The legendary hero, desperately fighting for his lands, he will bring you dashing attacks, crazy adventures, incredible emotions, and cool winnings. This slot is specially made with an eye to a specific audience, and in particular to the audience of players from the CIS. Although other players can also fully enjoy the excellent gaming interface, gameplay and gambling emotions that this special slot serves for you on a silver tray.Taras Bulba slot is a 5 x 3 game with a number of characters you know very well. 5th reel is a special reel with GORILKA multipliers (appear on reel 5 and multiply the respective line win by the value shown). Three or more scatter symbols in any position on the reels triggers twelve free games with additional multipliers. Every win is increased by the multipliers on the fifth reel up to 20 times during the free spins. Are you ready to embark on a dashing journey with Taras?Taras Bulba is our newest slot that falls under the Fiction category. In the near future, we will release even more exciting slots on a variety of topics. Be also ready to read reviews about the Taras Bulba slot on the tarst sites of our partners! Let''s hit the road!'
    WHERE identifier = '5men:TarasBulba'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gambling is fun? And online gambling is fun and trolling! Modern internet time spending does not exist without the sharp, poisonous and painful trolling. Five Men Games TROLOSLOSTS brings you new level of trolling, gambling fun and Entertainment.  Troloslots is exciting new gaming title from Five Men Games online gaming studio. Game is set at 5 reels to 3 rows grid and presents low to middle gaming volatility. Be sure, that game will last some time and get you incredible gambling feelings, as risk settings will not allow you to overgamble !  The troloslosts online gambling slot presents average Return-to-Player value of 95,42%, making it a  game to play and enjoy variety of spins. Troloslots has 10 paylines, each of them will make you laugh and smile hardly, as you will be winning in a true style.Troloslots has a lovely classic gambling feature, allowing you to pick red or black card in order to multiply your winnings. Funny TROLL faces will play with you and your nerves once gamble feature is activated, make sure to accept the challenge! Get ready to deal with trolls all over the place! Sarcasm, fun, smiles, laughs and other wonders from the world of anonymous internet communication is combined with exceptional gambling experience. Its up to you now to discover the trolls lucky charm !'
    WHERE identifier = '5men:Troloslots'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'WOLAND online gambling slot is the newest title from Five Men Games featuring some famous literary stories and unleashing its magical and deep power into the world of iGaming. It''s being widely recognised, that MAGIC slots belong to some of the most popular titles across different countries and players profiles. WOLAND is a 5men.games -powered video slot with 5 reels, 3 rows and 25 paylines. It can be played on desktop, mobile and tablet devices. Get ready to engage into the world of DEVIL, magic creatures, sensational tricks and deep mystery atmosphere of the game.Despite the exclusive graphics, it comes with a classy-style magic soundtrack. The game is accompanied by lovely WILD, being famous Queen Margarita, and the SCATTER, being Master himself. Master also starts Woland''s Gang Feature, allowing you to pick red or black to win some additional coins.Queen Margo, once there, substitutes for Woland, the Cat, Daemon and grotesquely dressed valet as well. If all those personalities do not ring the bell, don''t worry, spinning them around will be immense fun! Woland is a low to medium volatility slot game and the big wins will almost certainly come in the Woland''s gang feature as extra wild symbols can really boost your winnings. WOLAND continues our line of exclusive, copyright games featuring well-known plots and historical events. Stay tuned for more!'
    WHERE identifier = '5men:Woland'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit slots are the most popular slot machines among players all over the world. And thats a fact! Games in the style of fruit cocktail can be found in the TOP slot machines in any online casino. But even classics cannot stand still. It is changing, improving and modernizing, trying to meet the desires and needs of the modern player. The graphics quality is growing, the parameters and characteristics of the game are changing, the mathematics is improving, and the gameplay is becoming more and more intuitive and simple. The main thing that has not changed for more than 100 years is the bright fruit symbols that playfully appear on the reels. And new symbols are added to them - not less vivid and interesting symbols with their own features. That is how the spectacular original slot from Belatra Games "20 SUPER STARS” was born! Welco'
    WHERE identifier = 'belatra:20SuperStars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If there are slots in the gaming world that all players know about, then these are definitely fruit slots. Once they used to be mechanical one-armed bandits that operated not only in casinos, but also in many other places throughout the USA. Precious cherries and lemons gathered in a line and brought a chewing gum as a win to a player. Oh yes, it was a chewing gum that was given to the winner as a prize during the ban on gambling activities in the US.Over the time, not only the prize in the form of a simple chewing gum was replaced with real money, but also slot machines switched from mechanical to electronic format, they received colorful graphics and a lot of various bonuses. But the fruit theme is eternal, it is still popular and beloved among players. BELATRA''s slot machine "500 Juicy Fruits” is modern classics. Favorite symbols in a new stylistic solution - the original bright design will not let players get bored in this gamin'
    WHERE identifier = 'belatra:500JuicyFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Parallel worlds, thousands of universes that eist simultaneously with our reality - it may seem fascinating to one person and frightening to another one ... But one thing is clear: there are practically no indifferent people to these topics. You are also captured by stories that begin with the words: Somewhere in a parallel universe ..., aren''t you? In this case, "Anotherland” video slot is specially for you! And the attraction "7 days” makes the game even more int'
    WHERE identifier = 'belatra:7DaysAnotherland'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Spanish Armada occupies a very special place not only in the history of Spain, but also in the world history. People gave it many names - Invincible, Great and Glorious. This is a truly important and significant part of the world history. BELATRA Company has created its own unique game that vividly and colorfully tells us about a challenging battle between the English and the Spanish fleets. This video slot quickly gained popularity among players from all over the world. And now we would like to bring to your attention the updated version of this game - with an attraction 7 days!'
    WHERE identifier = 'belatra:7DaysTheSpanishArmada'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Online Bingo game is actively gaining popularity among online casino players. Intuitive interface, simple rules, a game idea different from classic online slots - what else does the game need to become the favorite one among many online casino users? Well, maybe an unepected design!'
    WHERE identifier = 'belatra:88Bingo88'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indescribable flavor of the mysterious East, incredible treasures and a fierce firedrake ... Do you think this happens only in movies? Have another guess coming! To make sure that such amazing adventures are closer than it seems, we invite all gaming fans to the new Belatra Games online slot - 88 DRAGONS BOUNTY. On the way to the dragon''s cave, you will be collecting beautiful symbols of the East - and the more gold artifacts you manage to collect, the more treasures you will see! Are you ready to win? Well, then let''s go! And may good fortune always keep your company!'
    WHERE identifier = 'belatra:88DragonsTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We continue to introduce you new online slots from BELATRA, which you can play for free on our website.Today we will talk about really hot game - Africa Gold. Online slot Africa Gold is an ecellent combination of bright design, thematic soundtrack, accurate mathematics and an intuitive interface design. In addition this game offers free spins and risk-games. All players can play online for free and without registration.'
    WHERE identifier = 'belatra:AfricaGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Africa is one of the most amazing and truly mysterious continents. At first glance, it may seem that there is nothing but endless sandy deserts. But if dig deeper, then you can find huge deposits of gold and diamonds that are waiting for them to be finally mined! This is eactly what we suggest you do in the new online game from Belatra Games AFRICA GOLD 2. And don''t be afraid of the locals! They are very friendly and always ready to help with your search activities! Are you ready for the search?'
    WHERE identifier = 'belatra:AfricaGoldII'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We cannot imagine a modern casino or gaming club without a roulette. During its 200-year history, the roulette has become the most popular gambling game in the world, the most interesting and dynamic game that leaves all card games behind.Video roulettes developed by BELATRA have gained popularity among players long ago and are confidently competing with many slot games! On our website you can play roulette online absolutely free and without registration or SMS! You can play not just a roulette, but American Roulette!'
    WHERE identifier = 'belatra:AmericanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chase! Do you know detective story without this action?Do you want to feel like someone who is running - welcome to the online slot An Escape From Alcatraz. Now you can easily play this slot machine for free and without registration. Many players love BELATRA''s slot Alcatra'
    WHERE identifier = 'belatra:AnEscapeFromAlcatraz'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A fairy tale about beautiful Belle and terrible Beast, the master of an incredible castle, is one of those stories that are beloved by more than one generation. This lovely and romantic fairy tale has different versions, it was adapted to many cartoons and movies, and theatrical performances on this theme run all over the world - from France to Broadway. BELATRA Company decided to make a new step in development of this magical story – we created an online video slot based on the fairy talBeauty and the Beast!'
    WHERE identifier = 'belatra:BeautyBeast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Soccer is one of the most popular sports in the world. People play it in small yards and in huge stadiums, millions of fans watch soccer games in the stands, in sports bars or at home on TV. Plenty of bets are made every day – fans are trying to guess the score, the difference between the goals scored and missed and the time when a certain player may receive a red card ...You also love soccer, but you don''t know which team to bet on? Don''t hesitate and choose "Bingo Soccer” from Belatra Games. There is no need to painfully choose what team to cheer for – just place your bet and try to catch the balls with the right numbers! Multilanguage of this online bingo will allow all the people in the world to enjoy this game - among 14 languages of the world everyone will find a suitable one. Besides, this slot also features a super jackpot "The Wheel of Fortune”, and if you decide to play the bingo game online, for free and without registration, you will get a great chance to w'
    WHERE identifier = 'belatra:BingoSoccer'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The history about of the Blue Beard is a real classic of fairytale tales. Numerous collections of fairy tales, translated into all languages of the world, can not do without a plot about Blue Beard. By this story, a dozen films have been shot, and theatrical productions of various genres invariably gather complete halls. And now the fairy tale about Blue beard appeared in a new format - an online video slot!'
    WHERE identifier = 'belatra:BlueBeard'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hundreds and even thousands of years separate the modern world from one of the most important and largest civilizations in world history - Ancient Egypt. This civilization gave the world fantastic architecture and a lot of scientific knowledge, works of literature and art and, of course, writing. We have survived not only scrolls describing the life of that time, but whole books with predictions and prophecies. We suggest you to find one of these books in the new online slot from Belatra Games - BOOK OF DOOM! And only a select few will have a unique chance to open this book. And read the prophecy left to us by the divine priests!'
    WHERE identifier = 'belatra:BookofDoom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'People say, New York is a city of contrasts. This is absolute truth. New York is also a city of temptations, a city of crazy rhythm and pacifying jazz, a city of seething passions and leisurely walks along the bright streets... New York is diverse, but it''s invariably bewitching and attractive! Would you like to find yourself in this amazing city? Then welcome to the new BELATRA online slot "New Yor'
    WHERE identifier = 'belatra:buybonusNewYork'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Many years have passed since the end of the world was predicted by the Mayan Calendar. But something went wrong, and the end of the world was postponed. Well, all the better for us! Thus, we can afford to live joyously, merrily and the way we want, traveling around the world, discovering new beautiful countries and cities... But if you don''t feel like eploring the modern world, and would better prefer to have a look at the life of one of the oldest civilizations, then this spectacular and colorful online BELATRA slot #BuyBonus of Maya is eactly what you need! The Mayans are waiting for you in their amazing world'
    WHERE identifier = 'belatra:buyBonusofMaya'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spring is coming! And with it the opening of a new season in bright amusement parks. Delicious ice cream in waffle cone, funny clowns with balls, crisp popcorn and dizzy rides are waiting for everyone who wants to rela and have fun. And, of course, the main attraction in any park has always been and will be the Carousel...BELATRA invites you to its own amusement park - a positive and colorful video slot Carousel. 100 lines, drums of different heights (4 or 5 symbols), bonus games - you will be very interesting! international game Carousel translated into 11 languages of the world. You have a great opportunity to play online for free and without registering in the slot machine BELATRA on our website. If you want to play BELATRA slot machines for real money, then you will easily find this game in various online casinos.'
    WHERE identifier = 'belatra:Carousel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cabarets and casinos, prohibition and control, mafia and tough gangster wars...Romantic of Chicago of 1930-s is breathtaking and mesmerizes imagination to present day. With the game Chicago Bang, Bang! you will feel yourself real gangstars, feel the pulse of that times and get a really gangster win! '
    WHERE identifier = 'belatra:Chicagobangbang'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Christmas is the most magical holiday of the year. And the pre-Christmas bustle is undoubtedly the most pleasant of all. Shopping for gifts, decorating the Christmas tree, walking around the festive city gazing at beautifully decorated shop windows. And, of course, at such a fabulous time, everyone is waiting for a miracle. And it will definitely happen! The main thing is to believe in him! For Christmas miracles, we invite you to the new themed online slot Christmas Jackpot, look for the most beautiful showcase and come visit us! You can be sure there will be enough Christmas miracles for everyone!Even if it is not very snowy outside the window and you cannot recharge with a festive mood, the online slot machine Christmas Jackpot will help you. Beautiful, bright, magical and intuitive, this slot is eactly what you need to create a Christmas mood. Here everyone can choose a convenient language (and the game has been translated into as many as 14 world languages!) And play online for free and without registration - this is the version of the game available on our website. It is as easy as possible to play online without SMS and downloading on the site free-slot.belatragames.com! And if you want to play online for real money, then look for the online slot Christmas Jackpot on the sites of our partners!'
    WHERE identifier = 'belatra:ChristmasJackpot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you know who the diggers are? To answer this question, you need to dig deeper. In every sense of the word. Diggers are people who eplore everything that is underground: natural dungeons formed over the years and abandoned underground objects of artificial origin. But just wandering through the dungeons is boring. It is much more interesting to look for treasures! And believe me, in order to get into the dungeons, you don''t even have to leave the house. BELATRA and personally our charismatic digger invite you on an eciting journey to the new Crystals Digger cascade online slot!Outwardly, this game is similar to the very popular games now, where you need to collect crystals of the same type. Due to the cascading principle, Crystals Digger online slot machine has a similar gameplay. Falling on the reels, the same symbols disappear, the remaining ones fall down, and the empty spaces are occupied by new symbols. And this happens as long as there are winning combinations. The features of this online slot are bonus games, winnings multiplier, CraftBonus and Wheel of Fortune. In addition, the game is traditionally translated into 14 languages of the world and allows you to search for crystals in almost any part of the planet!Intrigued? Do you want to play Crystals Digger Belatra slot machine online for free without registration, SMS and download? You can launch the game on our website and test your luck right now. Or you can find this game on our partners'' websites and play for real money in Crystals Digger online in many online casinos around the world!'
    WHERE identifier = 'belatra:CrystalsDigger'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The lands of Transylvania, mysterious and mesmerizing, have always been shrouded in mystery. There are a lot of legends about vampires and about the great Count Dracula: frightening and attractive, bloody and dramatic. If you are interest in the story of Vlad Dracula, we invite you to visit amazing places and plunge into the incredible atmosphere of Medieval Transylvania in our new online game! DRACULA RICHES - ENIGMATIC ONLINE SLOT!Dracula Riches - a bewitching video slot with an original sound design and stylish graphics. Combinations with a win can fall out on 5 reels with 20 fied lines. The game has a joker Bat - he allows you to make the most successful combination. With him, the winnings even more. '
    WHERE identifier = 'belatra:DraculaRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A modern casino or a game club can not be imagined without a roulette. For its 200-year history, roulette has become the most popular gambling in the world, the most interesting and dynamic.The game Roulette, developed by BELATRA, has long won popularity among players, and the slot machines with this game compete with many slot machines. Today we are happy to present your beloved Roulette in a new format - now online!'
    WHERE identifier = 'belatra:EuropeanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fortune, luck... How much in life depends on them. Sometimes they accompany us, sometimes they turn away. And it is impossible to find out at what moment luck will smile... Although... Why not ask a powerful sorceress? She is ready to answer any question. To do this, she has a variety of magical artifacts, but the main one is a magic ball, inside which you can read a huge number of prophecies. For eample, if you ask: Will I be lucky in the new online slot Fortune Craft from BELATRA?, she will immediately answer! Want to check it out? Welcome!'
    WHERE identifier = 'belatra:FortuneCraft'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'No matter what the weather is outside - the scorching sun in the heart of summer, pouring autumn rain or cold snow in the middle of winter - at any of these moments we would like to find ourselves at a quiet and calm summer creek with its lovely inhabitants - butterflies, dragonflies, snails. And, of course, with its main local dwellers - huge frogs. You also wouldn''t mind, would you? Then welcome to the new online slot from BELATRA'
    WHERE identifier = 'belatra:FrogCreek'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A fresh-squeezed fruit cocktail - what could be tastier on a hot summer day? What are you saying? You don''t have any fruits or berries, do you? And you don''t want to go after them? Don''t worry! Belatra Games will take care of you! We have a bar serving fresh fruit cocktails, mixing the ripest and juiciest fruits. And an automatic bonus to such a cocktail will becomtasty win! Well, are you intrigued? Then be sure to check out our bar! Where is it? Wherever it suits you - anywhere you can use your smartphone, tablet or computer! After all, this is an online bar – a slot "Mix Fruits” from Belatra G'
    WHERE identifier = 'belatra:FruitMix'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Halloween is coming, the eve of All Saints Day. On this night life is boiling in the streets of many cities around the world: all dress up in eerie suits, collect sweets and have fun in bars. But if you don´t want to leave the house at all, we have something interesting for you in the online casino of BELATRA...The Ghost Walks! - a bright, cheerful and incredibly positive slot in the best traditions of Halloween. The action takes place in an old abandoned castle, where not a single dozen ghosts and spirits live. In the endless dark and gloomy rooms and corridors of the old castle is inhabited by the shadows of its former masters and servants who once worked in this house'
    WHERE identifier = 'belatra:GhostWalks'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you know what online slot machines most often get to the TOP popular slots among players? No, not slots with a variety of comple bonuses, and not even games with the most spectacular graphics. For many years online casino''s gambling guests have called the classical "fruit” slots to be the most favorite ones. Their history began more than a hundred years ago, when a ban on slot machines was declared in the USA, and they were disguised as gum machines. "Golden Lemon” is the symbol of those American traditions of the beginning of the past century. But instead of a chewing gum - big wins, '
    WHERE identifier = 'belatra:GoldenLemon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you know what online slot machines most often get to the TOP popular slots among players? No, not slots with a variety of complex bonuses, and not even games with the most spectacular graphics. For many years online casino''s gambling guests have called the classical "fruit” slots to be the most favorite ones. Their history began more than a hundred years ago, when a ban on slot machines was declared in the USA, and they were disguised as gum machines. Golden Lemon DeLuxe is the symbol of those American traditions of the beginning of the past century. But instead of a chewing gum - big wins, of co'
    WHERE identifier = 'belatra:GoldenLemonDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The company BELATRA - for a healthy lifestyle! And when is to start it, if not in the summer, when everywhere we are surrounded by ripe fruit, fresh vegetables and beautiful greens! But if you do not want to go far to the market for behind it this useful harvest, we have a simple solution! We suggest you go to the best greengrocer in his wonderful vegetable shop in the game Green Grocery. Here It is full of juicy fruits, vegetables for every taste and a sea of greenery (and not only edible)! Here you will get not only a charge of positive emotions, but also chic winnings in bonuses.'
    WHERE identifier = 'belatra:GreenGrocery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Halloween is a holiday that becomes more and more popular every year in many countries around the world. On October 31, on All Saints'' Eve, houses and apartments are decorated with cobwebs and ghosts, pumpkins with ominously burning candles and small spiders that are scattered around the house ... And little Frankensteins, witches and werewolves go trick-or-treating...'
    WHERE identifier = 'belatra:Halloween'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Remember our new friend - a funny and very hardworking digger? He works day and night underground, without days off and holidays, mining more and more crystals. And even on the eve of All Saints'' Day, he goes down to find the most beautiful crystals, the brilliance of which cannot be hidden even by a huge black web. Nothing can stop our digger from doing what he loves! Will you keep him company? Spend Halloween bright, fun and unforgettable - in the new online slot from Belatra Games Halloween Crystals! Go down to the dungeon and fear nothing!'
    WHERE identifier = 'belatra:HalloweenCrystals'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Halloween is one of the most atmospheric holidays in the world! On October 31, on the eve of All Saints Day, houses and apartments are decorated with cobwebs and ghosts, bright pumpkins with ominously burning candles in them and small spiders, which are scattered throughout the house ... And little Frankensteins, witches and werewolves wander the streets, collecting candy in buckets ... And of course, now is the time to start preparing for this holiday. Draw a scary ghost on the sheet, cut pumpkins and decorate your home with skulls and skeletons! But if you absolutely do not have time for all these comple preparations, and you want to feel the incredible atmosphere of Halloween, Belatra Games has a great solution! Welcome to the new online slot Halloween Jackpot!'
    WHERE identifier = 'belatra:HalloweenJackpot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hot Wild Pepper is a classic slot game with the most famous symbols in the history of slot machines. The game supports desktop and mobile versions.'
    WHERE identifier = 'belatra:HotWildPepper'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Far-far away, in the Ice Mountains...fruits live! Unexpected, right? And these heat-loving lemons and cherries, and oranges with watermelons live, frozen in ice. And only the warmth of your winnings can remove this icy curse from them. Are you ready to help tasty fruits, and at the same time earn a couple of lemons for yourself? Belatra Games invites you to an exciting journey to the Ice Mountains - to the new winter online slot Icy Fruits! Try our new Iced Fruit Cocktail and be convinced that it is simply impossible to tear yourself away from it!\r\n\r\nColorful and bright, saturated with frosty freshness, this online slot machine will not leave indifferent any player! 20 pay lines, intuitive rules and a user-friendly interface - what else is needed in order for the slot to take a confident place in your personal TOP of games? Each player can easily choose the optimal pace of the game, favorite take and even the language in which it is more convenient to play. And there really is plenty to choose from: the Icy Fruits online slot has been translated into 14 languages of the world, so it will be available to players of all continents. Traditionally, the new winter online slot BELATRA can be played in two ways: for free, directly on our website, or online for real money in an online casino. Look for the Icy Fruits slot on the sites of our casino partners!'
    WHERE identifier = 'belatra:IcyFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As you know the best girls friends are diamonds. And the best friends of all gambling fans are pearls. And rubies. And emeralds. Precious stones are always beautiful. And if they are getting together and bring great wins, it''s just perfect!The most precious slot is Jewels (Stones) - the online slot from Belatra. It''s incredibly easy to play for free and without registration in our online casino. Like all online slots BELATRA GAMES this game supports 11 languages ​​of the world, including English, Spanish, German, Russian and many others, and also has high quality HD graphics, original soundtrack and a whole set of interesting additional game'
    WHERE identifier = 'belatra:Jewels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monsters are unique creatures: everyone is afraid of them, but is there anyone who hasn''t ever dreamed of meeting such a creature? If the terrifying Yetis living in the most impassable places of snow-covered mountains do not attract you, if you are not going to Scotland to see the Loch Ness monster, if you are not eager to wait for the full moon to meet the Werewolf, then we''ve got a great, bright and absolutely not scary way for you to meet monsters! Welcome to the new BELATRA online slot J. Monsters'
    WHERE identifier = 'belatra:JMonsters'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Slots, poker, roulette - these kinds of gambling have become a real classic in online casinos long ago. Every day millions of bets are made in online slots, thousands of card deals give gains to poker fans, tens of thousands virtual balls fall on red in online casinos video-roulettes... But sometimes you want something new, original, unusual...'
    WHERE identifier = 'belatra:JustABingo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One of the most famous fairy tales in the world is the story of the Frog Princess. More than 20 years ago, it was this fairy tale that inspired the developers of the BELATRA company to create the Princess Of Swamp slot game, which instantly became incredibly popular among players and has not lost its position ever since. And now it was decided to create a sequel - a scratch game in a lottery format with simple rules, a favorite bonus and an intuitive interface. Welcome to King Of Jumping Scratch game!'
    WHERE identifier = 'belatra:KingOfJumpingScratch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Creating a new slot, the developers of the company BELATRA always study the interests of the players. Love crime stories - please! More adventurous? We have such slots! Adherents of classic fruits? A whole bar of our fruit cocktails is waiting for you! Do you like fairy tales? And we have enough of these games! And how can you surprise a player whose main passion is ... gambling? This is eactly the task our developers and game designers faced, and they successfully coped with it, creating a new bright slot - Lavish Joker!Lavish Joker is a colorful and vibrant online slot, the main character of which, of course, is the Joker. He is surrounded by many symbols of gambling. There are card suits, slot machine drums, and even poker chips! A simple, intuitive game available to players all over the world - it is translated into 14 languages of the world and is ready to captivate and enrich players from all countries and continents. Traditionally, you can try this slot in free mode - play without registration, download and SMS right on our website. And when you are convinced that the new BELATRA Lavish Joker slot is worthy to play for real money in this slot online, look for it on the sites of our casino partners.'
    WHERE identifier = 'belatra:LavishJoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'At first glance, it may seem that all monkeys are very active and mobile animals. But it is not so. Especially lazy monkeys, who are too lazy to get a banana and protect themselves from a snake, live in hot tropical jungles... We will tell you about one of such incredibly lazy monkeys in the new Belatra Games online slot - LAZY MONKEY. Welcome to the virtual tropics - here you can not only help the monkey, but also get a great win by chasing snakes and collecting bright and tasty bananas! And if you are lucky enough to collect a whole bag of them, your winnings will be incredible!'
    WHERE identifier = 'belatra:LazyMonkey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We added a new online slot!Love Magic is a bright, interesting game. Love, romance, magic - these words enchant and fascinate in all the languages ​​of the world. In this game so easy to feel this emotions again and magically become rich!10 lines, 5 reels with an unepected for the slots theme of the magic of love - an ecellent set for the game to become popular among the most diverse admirers of ecitement - from conservatives to fans of something original. In addition, in our online slot machines you can play for free in 5 languages: Russian, English, Spanish, Lithuanian and Belarusi'
    WHERE identifier = 'belatra:LoveMagic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you like cats? Meet Lucie - the main character of the new slot machine from BELATRA. Lucie loves cats! Lucie has 4 cats of different breeds and colors at home. However, sorry, of course, we were mistaken. Lucie lives in the cat''s house. Because they are the rightful owners of this big house. Here they are allowed everything: eat the most elite food and frolic with mice, drag fish from the table and innocently play with a ball, hide in boxes and even break aquariums! Do you want to see the most real cat paradise? Then welcome to this amazing home - Lucie''s Cats Online Slot.'
    WHERE identifier = 'belatra:Luciesats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bonnie and Clyde. Anyone who loves crime stories knows these names. This world-famous couple of robbers was quite successfully raiding banks, robbing large stores, and was completely wrapped up in the romance of the underworld. Bonnie and her beloved Clyde run their criminal business beautifully and professionally, and their love story was so romantic and unordinary, that later many books and films were based on it. Belatra Games offers you its own version of this romantic and crime plot – a slot machine "Lucky Bank Robber'
    WHERE identifier = 'belatra:LuckyBankRobbers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'All people love the continuation of something good! When we finish reading an interesting book, we really hope that there is a second volume. And after watching the eciting film, we look forward to the release of the second part. Continuation is always a pleasant meeting with your favorite heroes in a new environment. BELATRA Company has a great game, which is so fond of the players that it was decided to create a new unique modern slot for well-known characters.Lucky Drink in Egypt - a funny story about the adventures of the cunning Devil and another no less brilliant hero. This time the story takes place not in the usual pub, but in hot Egypt. Charming Cleopatra is walking here at every step, the Sphin cats sweetly lying on the sand, and behind each sand dune a sarcophagus with the treasures of the ancient Egyptian rulers is hidden. In general, what''s not going to happen after a couple of glasses of cold beer drunk under the scorching African sun'
    WHERE identifier = 'belatra:LuckyDrink'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We continue introdusing you with the most popular BELATRA´s games, which are available online now. Already there were reviews on the slot machine Piggy Bank (play online), Alcatraz online (play for free and without registration) and many others. And today we will speak about the game which is the main symbol of BELATRA GAMES. Meet the online version of the super popular slot - Lucky Drink! Cheerful, bright and incredibly charismatic Davil invites all lovers of excitement to look to him after a couple of beer glasses and check his fortune! To do this, the crafty devil prepared a lot of original games and bonuses for you'
    WHERE identifier = 'belatra:LuckyDrinkOld'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A modern casino or a game club can not be imagined without a roulette. For its 200-year history, roulette has become the most popular gambling in the world, the most interesting and dynamic.The game Roulette, developed by BELATRA, has long won popularity among players, and the slot machines with this game compete with many slot machines. Today we are happy to present your beloved Roulette in a new format - now online!'
    WHERE identifier = 'belatra:LuckyRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Admit it, which of you doesn''t dream of getting rich? You can work long and hard, become the president of a large company, make a lot of money - and finally lead the Forbes hundred! You can get a huge inheritance from your aunt from Brazil... You can win a big sum in the lottery... But it is much more fun and interesting to get tons of gold coins from the mysterious Master of Gold, a gray-haired old man who lives on the forest edge. If you are intoicated by the bewitching shine of gold and the mysterious play of light in the facets of diamonds and emeralds, then you have a direct road to the new BELATRA online slot - Master of Gold. A bit strange, but infinitely charming owner of gold gladly invites everyone to an eciting game, in which absolutely everyone can win!'
    WHERE identifier = 'belatra:MasterOfGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Main Features:\r\n- Large symbol in Free Games;\r\n- Bonus Game with the ability to win credits and \r\njackpots;\r\n- the minimum amount on the jackpots that remains \r\neven after the jackpot is drawn;\r\n- Purchase of Bonus or Free Games.'
    WHERE identifier = 'belatra:MasterofXmas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you know how many years have passed since the sensational Mayan Calendar predicted the end of the world? 10 years! The end of the world did not take place, but interest in the history of the most ancient civilization does not stop to this day. The books have been written, the films have been made, and the games are in progress. The collection of Belatra Games games already has a game in this style - #BuyBonus Of Maya - a bright online slot with the ability to buy bonus games at any time during the game. And now we offer you a new slot - MAYAN BOOK - original, colorful, modern, with unepected bonuses and a new special #CraftBonus option. Intrigued? Then welcome - Maya are waiting!'
    WHERE identifier = 'belatra:MayaMystery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you know how many years have passed since the sensational Mayan Calendar predicted the end of the world? 10 years! The end of the world did not take place, but interest in the history of the most ancient civilization does not stop to this day. The books have been written, the films have been made, and the games are in progress. The collection of Belatra Games games already has a game in this style - #BuyBonus Of Maya - a bright online slot with the ability to buy bonus games at any time during the game. And now we offer you a new slot - MAYAN BOOK - original, colorful, modern, with unexpected bonuses and a new special #CraftBonus option. Intrigued? Then welcome - Maya are waiting!'
    WHERE identifier = 'belatra:MayanBookMultiChoice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3 and more Scatters award Free Games.In Free Games 33 reels and 5 lines are used.The five biggest symbols on line in Free Games award one of the jackpots. For a series of Free Games it is possible to win all 5 jackpots . After the jackpot drawing there is a minimal sum remains.You can increase your winnings in risk game which you can choose in setup or switch it off.'
    WHERE identifier = 'belatra:MonkeyJackpot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever celebrated the New Year in the hot tropics? No? But in vain! It is very unusual! Hot yellow sand mixed with cold snow, not only vines but also icicles hang from the trees, and fluffy Christmas trees, decorated with all kinds of balls and garlands, live next to the palms. Isn''t it unusual? And you can arrange such a New Year for yourself anytime and anywhere! Launch the new BELATRA online slot New Year Monkey Jackpot, where toucans wrapped in tinsel and all kinds of monkeys in funny Santa hats are waiting for you. Happy and warm New Year in every sense!\r\n\r\nOnly pleasant surprises should happen in the New Year, so the monkeys are happy to invite you to spin the reels of this slot and try your luck. It has 5 classic reels with 25 classic lines - the golden mean for slot games. A funny joker - an orangutan with a Hollywood smile - will replace any symbols to make the most successful'
    WHERE identifier = 'belatra:NewYearMonkeyJackpot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3 scatter symbols on the reels award Free Games. In the Free Games, 1 large symbol on the 3 central reels replaces 9 small ones. If you get 6 or more special credit-symbols, a Bonus game is awarded, in which you can win credits and jackpots.'
    WHERE identifier = 'belatra:NorthernBoom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The bank robbery is one of the most interesting detective stories. A lot of books and films have been made about this. But you can be not only an outside observer, but also participate in the robbery process! And it''s absolutely legal... Meet the most famous and most loved detective slot by the players! Now BELATRA''s online game Piggy Bank in our online casino! Does the robbery of the century together with the crafty robber Jimmy, hide from the police and get a tidy sum in our classic slot Piggy B'
    WHERE identifier = 'belatra:PiggyBank'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Scratch games that resemble instant lotteries are not as widely known among online casino players as, for eample, slots, poker, roulette or bingo games. Although scratch games are very fun and always intuitive. And if you choose the right style and design, then the game will be simply doomed to success. This is how the new game from Belatra Games was created - PIGGY BANK SCRATCH. Combining all the best from the most popular Piggy Bank slot and an interesting idea of the lottery format, this game is ready to become a favorite of many players around the world!'
    WHERE identifier = 'belatra:PiggyBankScratch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prehistoric Story is modern video slot based on the most ancient theme of the prehistoric era. It combines successfully themed sound effects, colorful characters, classic number of lines and lots of free games and card risk games! An interactive bonus will attract anyone who wants to visit the primitive hunting or just check his intuition in risk games.'
    WHERE identifier = 'belatra:PrehistoricStory'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What could be more wonderful than being in a fairy tale? You have a chance to find yourself in the real fairy tale with the online game Princess of Swamp, at the end of the story the frog turns into a beautiful princess, and you into a rich man! Now you can play online slot Princess of Swamp for free and without registration. Try your luck!'
    WHERE identifier = 'belatra:PrincessOfSwamp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There is eternal classics everywhere – in music, movies and clothes. And even slot machines have their own timeless classics. What immediately comes to your mind when you imagine a slot machine? Of course, "fruits” and "sevens”. What started the history of the slot machine 100 years ago, eists to this day and has millions of fans around the world. But even the most "classical classics” can''t remain unchanged. It improves, changes and modernizes. That is how the new BELATRA "7 Fruits” online slot appeared. Meet the traditional fruit cocktail machine w'
    WHERE identifier = 'belatra:SevenFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There is a variety of games in BELATRA''s collection of online slot games - from classical to the most modern slots. The most traditional slot game iSevens. You can play this online slot machine for free and without registration on our website! "Sevens” is a classical slot game and its design reminds of the fione-armed bandits. It has 5 lines and the most famous symbols in the history of slot machines - sevens, cherries, oranges, bar and others. How long have you wanted to play "777” for free? The time has come'
    WHERE identifier = 'belatra:Sevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'SIC BOThe history of the game Sic Bo dates back to ancient China. In translation, the name of the game literally means a pair of cubes. It would seem that there is nothing easier than guessing that a pair of dice with numbers will decide the outcome of the game. But no! There are not two cubes in the game, but three. Otherwise, this game resembles the principles of roulette.The essence of the game is to guess the amount of points that fall on 6-sided dice with numbers. In each game, three dice are thrown, and the player preliminarily makes bets on the numbers that will appear in this game. In this case, the player places his chips on numerous sectors of the playing field. The sectors correspond to the different types of rates that we will now get to know.'
    WHERE identifier = 'belatra:SicBo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic style is always in trend – whether it''s films, clothes and even slot machines! In the online collection of BELATRA games the most traditional slot gaSeven appeared. You can play online for free and without registration on our site!Super Sevens is classic slot game, which resemblethe first slot machines because of their design. There are only 5 lines and the most famous symbols in the history of slot machines - seven, cherries, oranges, bar and others. Have you wanted to play for 777 for free? The time has come! SuperSevens has simple and intuitive interface, it''s suitable for players with any eperience in slot games. Just click oSTART - and the drums will spin, stopping at some point and making up the winning combinations.'
    WHERE identifier = 'belatra:SuperSevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Elusive Gonzales is a bright, colorful, dynamic online slot with colorful characters!The actions take place in the country of tequila, sombrero and cacti in a human growth. A Meican temperament slot game combines a classic slot with a lot of gangster bonuses and risk-games! You can play online on The Elusive Gonzales in many online casinos!'
    WHERE identifier = 'belatra:TheElusiveGonzales'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Everything should be according to Feng Shui: furniture in the apartment, books on the shelves and even games in slot machines. If you belong to the adherents of this Eastern practice and love classic slots, then you are in the right place and you will surely enjoy BELATRA''s online slot machine "88 The Golden 8'
    WHERE identifier = 'belatra:TheGolden88'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In God We Trust is written on every 1 dollar banknote of the United States of America. In Money We Trust – is a slogan of the new online slot from Belatra Games. This is a game with money, for money and about money. To be precise, it''s about the currency in which 80% of the world trade is calculated - the US Dollar. If coin ringing from the treasure hunting adventure games no longer attracts you, welcome to our online slot game "The Moneyma'
    WHERE identifier = 'belatra:TheMoneymania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The city falls asleep, wake up ... street racers! Night racing is its own special, absolutely amazing world, full of adrenaline, drive and romance. The roar of engines and the screeching of brakes, maimum speed on the speedometer and the smell of burned rubber, neon signs of the city and blinding headlights, fearless and charismatic racers, beautiful and charming queens of the race ... Admit it, for sure at least once in your life you wanted to eperience these vivid emotions and plunge headlong into the incredible atmosphere of night racing? Then welcome to the BELATRA online slot The Night Racing! Perfect detailing and maimum realism - this game is captivating and mesmerizing from the first seconds! Ready for the most amazing adventure of your life? 3… 2… 1… GO!'
    WHERE identifier = 'belatra:TheNightRacing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Very soon there will come a long-awaited summer - the time of leave, sun and heat. Someone heading off seaward to warm countries, but someone prefers a quiet cottage, surrounded by beautiful flowers and trees. And, of course, garden beds!If instead of the scorching sun and crowds of tourists you prefer the second option of rest, then you can start right now by playing a new slot machine BELATRA online The Smart Rabbit. You can play for free without registration on our website. Also we invite you to play this BELATRA slot machine for real money in the online casino of our partners.And so that you do not get bored in our virtual dacha, we offer you a fascinating adventure - to epel a smart Rabbit, who encroaches not only on the garden beds, but also on stocks in the warehouse...'
    WHERE identifier = 'belatra:TheSmartRabbit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Main Features:\r\n- Cascade Reels\r\n- Counting winnings by the number of \r\nsymbols\r\n- Purchase of Free Games\r\n- Multipliers in Free Games\r\n- Maximum number of Free Games is \r\n300\r\n'
    WHERE identifier = 'belatra:XmasGifts'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It was the most ordinary evening, nothing foreshadowed trouble... I left the house and noticed a strange movement nearby. A man passed by. I called out to him. He turned and I froze with horror. A deathly pale face, empty eye sockets ... Before me stood zombies... - this is how many stories about the zombie apocalypse begin. Having appeared more than 50 years ago, they do not give up their positions today. Books are published in hundreds of languages and printed in millions of copies. Movies one after another become blockbusters... It''s time to create a game where you can feel like a participant in the post-apocalypse events and fight with the real living dead! Welcome to Zombie Town!Zombie Town is an incredibly atmospheric BELATRA online slot. It has its own storyline and vivid characters, ecellent graphics and chilling sound effects. Having started playing the Zombie Town BELATRA slot machine online, it is impossible to stop. After all, this is a double passion - to escape from zombies and earn a good amount at the same time. Do you want to try Zombie slot for free without registration, SMS or download? Play directly on our official website free-slot.belatragames.com. Are you ready to take the risk and start playing big right now - play online for real money in Zombie Town? Nothing could be easier! Our partners - online casinos around the world - will easily provide you with this opportunity. The game has been translated into 14 languages of the world, so everyone can fight zombies!'
    WHERE identifier = 'belatra:ZombieTown'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to dust off the old magic carpet, as Booming Games goes classic with it''s upcoming release of Arabian Spins. This low volatility 3x3, 10 payline slot, showcases the best of old-school features. Join our protagonist and his monkey sidekick as they endeavour to collect as much gold and diamonds as possible. Catch the magic carpet to multiply your wins sevenfold\\\; or trigger 10 retriggerable 2-Way Pay spins by landing 3 Diamonds anywhere on the reels. And as if that wasn''t enough, any Diamonds you land will also act as wilds, again helping to make for the best possible player experience. Meanwhile, if you land the Genie''s Lamp, 3 instances in a screen result will trigger 10 Free Spins, while at any time you can land a magic carpet on the 2nd reel, awarding a 7x Multiplier on all wins. With a 96.55% RTP, this game has everything the classic slots player could want.'
    WHERE identifier = 'booming:ArabianSpins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Far East has got to be the king of neon. Experience the delightful treasures of the orient and spin the reels for a chance to claim them as your own.'
    WHERE identifier = 'booming:AsiaWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The search for a Mystery Jackpot has begun! Join these four pandas in their mission and you can get winnings straight from another galaxy.'
    WHERE identifier = 'booming:AstroPandas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aztec Palace is the best thing related to the Aztecs since they introduced chocolate to the Europeans. Booming Game latest offering, Aztec Palace, takes place around the palace of the late emperor Montezuma. His palace is believed to have been comprised of 5 interconnected buildings containing the emperor''s office, chambers for children and several wives, and even a zoo.The game begins outside the palace, centres on various Aztec gods, and features Bursting Wilds. Land 3 bonus symbols anywhere on the reels to enter the Bonus Portal where you can pick 1 of 4 skulls to win a cash prize or land 3 or more scatter symbols to activate a dynamic number of Major Free Spins.'
    WHERE identifier = 'booming:AztecPalace'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Make the most of the spring bonanza in Baby Bloomers. If you''re looking for a super cute slot with plenty of entertainment look no further than this lovable farmyard romp.'
    WHERE identifier = 'booming:BabyBloomers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get together with your best friends for the party of your life, be ready to create incredible memories on the last night as a single girl, let the wins and drinks keep coming!'
    WHERE identifier = 'booming:BacheloretteParty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reach for the sky! It''s time to prove your skills as the quickest hand in the west with Booming Games addictive new video slot, Bang Bang.Bang Bang is sure to be an instant classic for gunslingers and outlaws with a passion for slots! Old time western charm meets modern, innovative gameplay in a 5x3, 20-line video slot sure to keep you coming back to the old saloon for more. With a new twist on a timeless classic, symbols drop onto the screen instead of spinning on reels, bringing a whole new meaning to things falling right into place!Cascading reels help you make like a bandit and multiply your winnings. Watch winning symbols disappear to be replaced by new chances to win big! On a lucky streak? Multipliers stack up to x5, or up to x15 with Free Spins, meaning you''re only ever one lucky spin away from an early retirement on the ranch!Use your winnings to buy up to 20 Free Spins or trigger them by landing 3, 4, or 5 Scatters. Free Spins can even be re-triggered giving you more chances than ever for a Booming Win!Saddle up, sheriffs and bandits! Ready, set... Draw!'
    WHERE identifier = 'booming:BangBang'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Howdy! Welcome to our crazy barnyard, where double animals will make you twice as rich. But wait, that''s not all, watch out for the tornado triggering even more winnings!'
    WHERE identifier = 'booming:BarnyardTwister'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the city that never sleeps, the lights shine bright all night. If you can make it here, you can make it anywhere!'
    WHERE identifier = 'booming:BigAppleWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to venture down to the golden, ancient Egyptian burial place with promises of dusting off some hidden treasures. Booming Games brings to you Book of Tombs - a 5x3, 10-line video slot featuring Unlimited Free Spins and glowing Expanding Symbols. Alongside a Gamble feature for good measure. Join the brave explorer in unearthing major symbol combos. Including the ancient Book of Tombs - the Wild Scatter of the game, urns and pharaohs. Land 3 to 5 Scatters on the reels to trigger Free Spins with a symbol expanding over the reel throughout the entire round. The fact that you can keep triggering more Free Spins and activate up to 9 Expanding Symbols during these rounds makes this slot a gold mine more than a sacred tomb. If youre feeling extra daring, try doubling or quadrupling your win by correctly predicting the right colour or suit of a card.'
    WHERE identifier = 'booming:BookOfTombs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Day mate! Things are getting wild in the outback, explore the unknown and watch out for bonus rotations that could trigger a real winning bonanza!'
    WHERE identifier = 'booming:BoomerangBonanza'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive into the jungle to engage in some monkey business. Keep your eyes peeled for the x7 Multiplier to boost your winnings. This slot''s bananas!'
    WHERE identifier = 'booming:BoomingBananas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic like no other! If you''re a retro slot hound, you''ll certainly love Booming Bars. Experience the excitement of the casino floor and feel as if you''re at the centre of the action.'
    WHERE identifier = 'booming:BoomingBars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Better put on some sunglasses, because this golden game can either blind you with its shiny glittering bling, or open your eyes to a new world of wealth. Booming Gold is the perfect slot for those craving a taste of the high life. Dripping in opulence and hedonism, this slot entices players with eye-catching graphics and lavish displays of wealth. A glamourous Vegas cityscape backs an array of shiny symbols, from sports cars to twerking bikini-clad hotties, while classy jazz plays in the background.Players can lay down their bets on anywhere between 1 and 20 paylines, allowing anyone from curious fun seekers to gutsy risk takers to enjoy the action. The Wild Reel of golden smiles occupies the 4 th reel and is made up off all Wilds and one Scatter, and can turn those 3 in a row wins into 4. With 3 or more of the golden dollar chains 10 Free Spins are awarded. The autoplay feature is clearly designed and allows players to quickly and easily select the number of spins, paylines, and bet per line without having to leave the gameboard.'
    WHERE identifier = 'booming:BoomingGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Flashing lights, booming action, and lucky number 7s! They are lining up to make you a certified Vegas super star as you spin your way to the big time.'
    WHERE identifier = 'booming:BoomingSeven'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you enjoyed Booming Seven, you''re sure to love Booming Seven Deluxe. This super charged classic injects some stunning upgrades to the original. Packing diamond encrusted x7 multipliers.'
    WHERE identifier = 'booming:BoomingSevenDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This 25 line slot will have you hustling with the hip-cats, as you endeavor to trigger 1 of our 4 dynamic Quick-Hit Catpots awarding players up to 50 times their bet in the base game. Win 5, 10 or 15 Free Spins to activate the fourth Catpot, awarding 200 times your bet. With smooth animations and perpetual excitement, this medium volatility game will appeal to your entire player-base.'
    WHERE identifier = 'booming:Boomshakalaka'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This medium volatility 5x3 slot with 25 paylines brings you deep into the native American environment, populated by one of the most important animals in their culture. The Buffalo represents power, safety and strength. Call on the Buffalo as your Power Animal when spinning the reels of Buffalo Hold and Win to win big!Scatter combos can stomp onto reels 2-4 to trigger 8 Free Spins with only high value symbols, setting you up nicely for some potentially Booming Wins and the possibility of retriggering.The Hold and Win feature is triggered by 6 or many more winning coins. The player is awarded an initial 3 Re-Spins where the reels only feature winning coins and blanks. Each time a new winning coin lands, the spin counter is reset to 3 Re-Spins.As if this is not enough, you can win Quick Hit Bonuses! The Mini Bonus with a 30x multiplier, the Major Bonus with a 150x multiplier or land all 15 value symbols during Hold and Win to get the Grand Bonus - a whopping 1,000x your bet!Packed with features and the potential for some seriously big wins, this game is sure to be a winner!'
    WHERE identifier = 'booming:BuffaloHoldandWin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The bricks & mortar casinos may have had to brick-up their doors for the foreseeable future, but never fear, Booming Games'' upcoming release of Burning Classics has all the look & feel of an old-school physical Fruit Machine.Decked out with classic symbols, this 5x3 is also low volatility, making it especially appealing for your time on device'' players.In the tradition of classic slots, this game has been designed to be clean, intuitive and simple. But this doesn''t for one second mean you can''t win big. On the contrary all major and minor symbols and all Wilds are stacked, while Free Spins can be retriggered indefinitely. And as if that wasn''t enough of a recipe for booming wins, the gamble feature enables players to repeatedly double their winnings exponentially, up to 10 times!So sit back, relax, and get ready to play a real classic.'
    WHERE identifier = 'booming:BurningClassics'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to live the high life with Booming Games latest release, Cash Pig. This lavish high volatility game has a 5x4 grid with 30 paylines and a mind-blowing win factor of 8,000x! This will appeal to all levels of players.Jet planes, Ferraris, shiny watches, and rings are the major symbols, diamonds are the Wilds and the champagne glasses are the Scatters. Land three Scatters on reels 1, 3 and 5 to trigger the Free Spins where the Minor Elimination feature removes all winning minors from the reel to enable cascading tiles and high wins. Activate the Major Upgrade to turn Major Symbols gold and double their value, so each spin is sure to pack a punch!But thats not all! Fill up the screen with coin symbols - each with multipliers of 2x-500x - and land the Piggy Bank collector on reel 5 to represent the richest feature of the game! The Piggy Bank Collector will award the total value of all the coins on the screen leaving you laughing all the way to the bank.'
    WHERE identifier = 'booming:CashPig'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join our Cheeky Monkeys in the heart of the jungle to see what tricks they have in store for you. Booming Games'' latest and greatest medium volatility slot, Cheeky Monkeys, features among other things, a 6th reel in the base game comprised entirely of a selection of 5x Multipliers, Stacked Free Spin Scatters and Interacting Monkeys.You''ll go bananas for Free Spins, where all Free Spins winnings come with a guaranteed 5x multiplier, and extra spins can be triggered. So stop monkeying around and make the cheeky chimps high-five to win between 50 and 150 times your bet.'
    WHERE identifier = 'booming:CheekyMonkeys'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cherry Bomb Deluxe adds an explosive edge to the original, replacing fruit with fireworks to launch your winnings into the stratosphere. Light the fuse, stand back, and prepare for some explosive spins.'
    WHERE identifier = 'booming:CherryBombDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chicago, 1920s, where the jazz is hot, the girls are wild, and gangsters rule the land. Watch our for the rotating tommy gun that can fire up your fortune.'
    WHERE identifier = 'booming:ChicagoNights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With bars, sevens, bells and fruit, enjoy the classic sight and sounds of this retro slot. Spin back to the past and relive those nostalgic wins.'
    WHERE identifier = 'booming:Classico'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Journey north to where it''s c-c-cold. Entombed within the ice, it''s up to you to free your companions from the deep freeze and reap the inevitable rewards.'
    WHERE identifier = 'booming:ColdCash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Run for the hills, the Vikings are coming!!!Booming Games is feeling ten feet tall with the release of it''s latest game, Colossal Vikings. Packed with giant viking warriors, this graphically rich 5x3 slot is as highly volatile as the warriors within. Designed for both your entertainment and excitement players alike, this game is brimming with innovative features, such as our reveal wild multipliers which can multiply your line-wins tenfold, and our dynamic Free Spins, this game certainly packs a punch. So get raiding, and prepare to win bigwith Booming Games'' Colossal Vikings.'
    WHERE identifier = 'booming:ColossalVikings'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Go bananas with Booming Games'' latest High volatility 20 line slot. It''s all about the good bananas in the Banana Battle Bonus Game. Uncover the Golden bananas for extra spins but be sure to avoid slipping up on the rotten ones. With Stacked high-paying Bananas in the base game, this is sure appeal to your whole player base, while they''ll go wild for the 500x five wilds payout.'
    WHERE identifier = 'booming:CrazyBananas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s reels like you''ve never seen them before! Booming Games'' presents Crystal Classics.  With a 7x7 game grid, the possibilities are endless. Create a variety of winning combinations with 5 or more symbols in a cluster and guaranteed Wilds and Wild Multipliers to potentially create even more wins! You won''t get enough of Crystal Classics Wilds, Wild Multipliers and Free Spins.   Crystal Classics offers players massive winning potential, with each winning cluster dropping between 1-3 Wilds and, if you are lucky, even a Wild Multiplier. Crystal Classics offers up to 25 Free Spins, these Free Spins guarantee between 1-3 Wild Multipliers up to 100x in a winning cluster, leading up to your legendary win. You can buy Free Spins for 82x of your bet for instant excitement and maybe even trigger more Free Spins.  Crystal Classics boasts a variety of classic features with all new twists. What are you waiting for? Play now and see how many clusters you can create! '
    WHERE identifier = 'booming:CrystalClassics'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel to the heart of the revolution and win big. Drink, dance, and finally celebrate with one of their world-famous cigars.'
    WHERE identifier = 'booming:CubaCaliente'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Following on from the massive success of Gold Vein, Booming Games continues to get stuck-in, unearthing and polishing those diamonds in the rough. Danger Zone, with it''s minor symbols carved from the jagged rock-face, features some of the most precious gemstones known to man. Increase your hoard of valuable gems with Bursting Major Dynamites. All you need to mine is one gem to have a chance of it bursting into a max of 8 new symbol positions, creating massive wins from what perhaps initially seemed like nothing to write home about. This fantastic feature is available both in the base game and in Free Spins\\; while in Free Spins players will also discover the Bursting Wild Dynamites, again turning up to 8 new positions Wild. And as if that wasn''t enough, instances of 3, 4 or 5 Wilds on a payline pay the same as the highest paying symbol in the game. Danger Zone takes place on a 6x4 grid at the mine''s entrance. Equipped with a TNT detonator, this high volatility, 25 line slot is just raring to blow up some rock and uncover some real value.'
    WHERE identifier = 'booming:DangerZone'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Start up your engine, hit the gas and race to glory to win big. Watch out though the cops are in close pursuit!'
    WHERE identifier = 'booming:DesertDrag'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Things are heating up down below, and they''re having a hell of a party. Spin those sexy symbols for a chance at a night amidst the flames of passion and opulence.'
    WHERE identifier = 'booming:DevilsHeat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games goes classic with it''s upcoming release of Diamond Riches. This high volatility 3x3, 10 payline slot, showcases the best of classic features. Land the stunning Diamonds to win up to 2000x of your bet in the Diamond Payout feature.Meanwhile, if you land the golden Free Spin coin, 3 instances in a screen result will trigger 10 Free Spins, with an even higher chance to hit the Diamond Payouts.With a Double or Nothing Feature on top, this game has everything the classic slots player could want.'
    WHERE identifier = 'booming:DiamondRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put your dancing shoes on and join us for a retro party that will make you do The Hustleas you celebrate your winnings!'
    WHERE identifier = 'booming:DiscoBar7s'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Swim and gamble with these clever dolphins as they lead you to the oyster''s precious pearl.'
    WHERE identifier = 'booming:DolphinsLuckTwo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Top o''the mornin'' to ya! Use the unique symbol combinations and just maybe you''ll find that pot o''gold at the end of the rainbow.'
    WHERE identifier = 'booming:DoublinGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'My armor is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death!- J.R.R. Tolkien, The Hobbit Come not between the dragon and his wrath.- William Shakespeare, King LearFor as long as humans have been writing, we''ve been writing about Dragons. Booming Games brings these mythical creatures of lore and fairy tale to life with the upcoming release of Dragon''s ChestWith its base game reels set against the castle gates, land 3 Bonus Symbols to zoom down into the Dragon''s lair, where you can pick one of 3 Dragon eggs to uncover your reward. Win Free Spins, or better yet, Free Spins with a 2x multiplier. Test your skills with a bow & arrow, and win up to 50 times your bet. With 3 different Walking Wilds (baby dragons), this 20 line slot is as highly volatile as it is action-packed.'
    WHERE identifier = 'booming:DragonsChest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a stroll down the garden path and encounter the super-cute chibis and their favourite fruits. If you can resist their lovable charm you may just yield a bumper crop.'
    WHERE identifier = 'booming:ExoticFruit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Return to the garden under the cover of darkness and meet some of the Chibis you may have missed the first time around. If you''re lucky, they may let you feast upon their fruity haul.'
    WHERE identifier = 'booming:ExoticFruitDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Luck is spinning on your favor, with the energy flowing around you the lucky kitties will bring that multiplier to make you 8 times richer!'
    WHERE identifier = 'booming:FengShuiKitties'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games spices things up with it''s upcoming release of Flaming Chillies. \r\nThis high volatility 3x3, 10 payline slot, showcases the best of classic features. \r\nLand the extra hot chillies to win up to 2000x of your bet in the Chillie Payout feature.\r\nMeanwhile, if you land the golden Free Spin coin, 3 instances in a screen result will trigger 10 Free Spins, with an even higher chance to hit the Chillie Payouts.\r\nWith a Double or Nothing Feature on top, this game has everything the classic slots player could want.'
    WHERE identifier = 'booming:FlamingChilies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delve deep into the world of clandestine societies, where your winnings will uncover dark secrets and great riches'
    WHERE identifier = 'booming:FreemasonsFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In perfect time for Xmas and your promotional advent calendars, Booming Games is releasing a winterscaped version of the already hugely popular Burning Classics. Decked out with classic symbols, this 5x3 is also low volatility, making it especially appealing for your time on device players. In the tradition of classic slots, this game has been designed to be clean, intuitive and simple. But this doesn''t for one second mean you can''t win big. On the contrary\\; all Major and Minor symbols and all Wilds are stacked higher than the snowmen outside your house, while Free Spins can be retriggered indefinitely. And as if that wasn''t enough of a xmas recipe for booming wins, the Gamble feature enables players to repeatedly double their winnings exponentially, up to 10 times! So sit back, pull on your Xmas sweater, and get ready to play an ice-cool classic.'
    WHERE identifier = 'booming:FreezingClassics'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Exhortation, assassinations and of course tattoos, the clandestine world of the Yakuza is ready to reap the rewards with symbols expanding everywhere. Who said crime doesn''t pay?'
    WHERE identifier = 'booming:GangsterGamblers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel to an exciting land of treasure, mysticism, and beautiful princesses. Rub the lamp, release the genie, and make three wishes.'
    WHERE identifier = 'booming:GenieWishes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join Booming Games on the battlefield as Gladiator Arena is unleashed. Choose your opponent to go toe to toe with on the floor of the colosseum then choose your tactic. Will you be brave enough to go for maximum glory and gold by taking on the ferocious lion which can award up to one thousand times your bet, or will you play it safe and challenge the experienced but old and weathered veteran. Or maybe you like to hedge your bets, in which case you might want to challenge our retiarius gladiator. He may not have a sword, but he can be every bit as dangerous with his net and trident. Whatever you choose, remember, the tougher the opponent the bigger the reward for defeating him.  Land 3 Scatter symbols for the opportunity to pick one of 3 doors unveiling 8, 10 or 12 Free Spins, where youвЂ™ll enjoy walking wild reels and stacked majors. This 5x3, 20 line, medium volatility slot is sure to be a blockbuster with all of your players.'
    WHERE identifier = 'booming:GladiatorArena'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s game on in the world''s most popular sporting slot. But on this field, you can score in any one of 4 directions for up to 4 times the prize'
    WHERE identifier = 'booming:Goal'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enjoy the sun, sea and sand, not forgetting of course the sexy girls. Golden Girls is set to bring you a wave of lucrative wins.'
    WHERE identifier = 'booming:GoldenGirls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With the Chinese Year of the Pig upon us, it''s time to squeal with excitement as Booming Games release their latest medium volatility slot, Golden Lucky Pigs. This 5x3 twenty line slot features a Piggy Wheel of Fortune, awarding differing numbers of Free Spins. Once in Free Spins, the player can really cash-in with our Golden Pig Wild-Multipliers. Why wallow-around when you could be striking it rich with our Golden Lucky Pigs.'
    WHERE identifier = 'booming:GoldenLuckyPigs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will the Gods look favourably upon you? Take a spin for the chance to receive divine riches from above.'
    WHERE identifier = 'booming:GoldenProfits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare for a gold rush like you''ve never experienced before! This 5x3, 10-line video slot game has some dynamite features that will give you the Midas Touch in no time. With Gold Hunter, you''ll stick on your hard hat, grab your pickaxe, and dig for all the treasures and riches your heart could possibly desire.Trigger Major Free Spins by landing 3 or more Scatters and strike it lucky! During Major Free Spins, you can land even more Majors, Scatters and Wilds, giving you all the opportunities you need to make off like a bandit with your precious, glittering ore.With the Wild Multiplier Reel, made up of Wild Multiplier symbols, you can really hit gold and multiply your winnings by up to 10x, 20x, or even 50x. And best of all, 4-of-a-kind wins automatically become 5-of-a-kind wins due to the Wild Multipliers on Reel 5!Light your lanterns and prepare to be lowered into the mines! Are you ready to become the ultimate Gold Hunter?'
    WHERE identifier = 'booming:GoldHunter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your players are sure to dig Booming Games'' latest medium volatility release.Gold Vein is a 5x3 old-timey Gold Mining slot, with an innovative Random Bonus Reel where tram carts are lowered into the bonus pit to see what bounty they can unearth. Take a minecart trip into the innermost recesses of the mine to discover the Free Spins reels.With Locking Wilds in Free Spins, and a Bonus Reel with Multiplying Wilds, extra Free Spins and even a Double Gold Nugget symbol allowing you to win a 6 of a kind payout on the game''s highest paying symbol, this game is sure to see a gold rush unparalleled since California in the mid 1800s.'
    WHERE identifier = 'booming:GoldVein'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take your place among the pantheon of the Greek gods with Booming Games� exciting new twist on the classic video slot format, Greek Legends. Summon the power of Zeus, Athena, and Poseidon and win big!'
    WHERE identifier = 'booming:GreekLegends'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Flex your fingers, take ten steps, spin around and hit spin. Booming Games has done it again with their upcoming release, Gunspinner. Join their gun spinning outlaw as he endeavours to enrich himself by lightening the load of the wild west bank''s stagecoach. Help him to blast his way in to uncover three shelves stuffed with riches, from moneybags to gold bars. This medium volatility, 20 betline slot, from Booming Games has all the excitement and tension you''d expect. Each time the Gunspinner throws his dynamite at the bank''s stagecoach he tears open the back doors, giving the player the opportunity to land symbols otherwise unavailable. In the base game this Bank-Reel feature includes Wild Multipliers, Freespin Scatters, and Double Gold Bar symbols, opening up the opportunity to win 6 of a kind with the games highest paying symbol. In Freespins, +1 and +2 Freespins symbols are added to the reel. Couple that with the further addition of Locked Wilds and you''ve got the makings of a great haul. '
    WHERE identifier = 'booming:Gunspinner'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s the night of the full moon, let Change and the jade rabbit help you in your search for oriental riches.'
    WHERE identifier = 'booming:HarvestFest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As they say in fishing circles, the bigger the bait, the bigger the fish.The same applies for Booming Games'' upcoming release of Hooked.This is a game to really up the stake on. Once the player hits the Fish On Feature, they get to experience the thrill of high-stakes fishing. Our crew are only interested in netting one of our 3 types of fish per round, maximising the players chance for a full screen of the same major symbol where they win that symbol jackpot payoutThis gives the player the opportunity to land up to one thousand times their bet not to mention 15 juicy lobsters! Follow that with a platter of Free Spins, the max award being 15, and the table''s set for a very satisfying catch.The fishing theme has always proved to be a hit both in the land-based casinos of Vegas and in the online space and Hooked is set to continue this success.. This medium-high volatility slot should be an instant hit with any sports-fishing fans out there, not to mention your regular to high stakes players.So let''s push out the boat and reel in those winnings.'
    WHERE identifier = 'booming:Hooked'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you brave enough to enter Booming Games'' Horror House. This high volatility, graphically rich ways based game featuring our fantastic Expanding Ways feature is up for release on October 8th, in plenty of time for Halloween.The action takes place on an irregular grid, as an assortment of blood-chilling characters appear in various rooms. At this point the player can win on up to 45 different betways. However, once the player hits any win at all, 2 more windows on the house will open, revealing more symbols and more ways to win. This spin with increased betways is a free re-spin, and as long as the player keeps landing wins, the windows keep opening and the re-spins keep coming.Free Spins begins when the player hits 6 winning spins in a row, opening up all possible symbol spaces on the board and giving the player 3,125 different betways to play out their 8 Free Spins, on top of the 5 unpaid re-spins they''ve just completed.'
    WHERE identifier = 'booming:HorrorHouse'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'According to accepted practice, during a close encounter with a wolf, people should do the following:Stand tall and make themselves look larger.Calmly and slowly back away, always maintaining eye contact.Not so with Booming Games'' latest and greatest, Howling Wolves. Now when you scream Wolves! it will be a cry of excitement and anticipation as you wait to see how rich they''re about to make you.This medium volatility 5x3 slot brings you deep into the native American environment, populated by one of the most important animals in their culture. For native Americans, the wolf represents courage, strength and loyalty. Some of their cultures even believe these majestic creatures to be a part of the family, also believing that members of their clan can take on the appearance and attributes of a wolf.While Booming Games doesn''t suggest you should try this, we do suggest that instead you try spinning the reels of Howling Wolves to see if you have what it takes to be as successful a hunter as a wolf.And there''s good hunting to be had in Howling Wolves with a max win factor of 5,000 times your bet. Not surprising when you see how feature-rich the game is. In the Howling Wilds feature, superimposed wilds land on the the gameboard whilst the reels are in spin. There''s a real possibility of players having all 15 positions turned wild! Then we have the Alpha Wolf feature, where the more wolves howling in the middle of your screen, the more of the highest paying symbol will burst onto your screen, setting you up nicely for some potentially booming wins. Couple these features with retriggerable Free Spins and you''ve got a recipe for success.'
    WHERE identifier = 'booming:HowlingWolves'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Features:\r\nMegaways, Wolf Pack Multiplier, Howling Wilds, Alpha Wolf Spin, Free Spins.'
    WHERE identifier = 'booming:HowlingWolvesMegaways'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games returns to the classic style of game with Jesters Joy, a 3x3 low volatility, high RTP slot. Jesters Joy features retriggerable Free Spins, and a Gamble feature on any win which allows you to exponentially grow your winnings up to 10 times in a row ! It also has triggered 2-Way-Pay, effectively doubling all wins whilst active for an initial 10 spins, during which it can be continuously retriggered, awarding the player another 10 spins each time. This classic, clean and crisp game is sure to be a hit with all your players. '
    WHERE identifier = 'booming:JestersJoy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In a charming winter wonderland far away, Christmas is in full swing. Join in the festivities and unwrap this gift of a slot to see what magical features Santa has in store!'
    WHERE identifier = 'booming:JingleJingle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Follow Ana Clara to the estate of the wealthy Don Elario, where the forces of greed struggle against the power of romance, and a fabulous inheritance is up for grabs.'
    WHERE identifier = 'booming:LaRomantica'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s tiki time! Will the island spirits look favourably upon you? Ignite the torches, beat the bongos and just maybe the tiki gods will reward you handsomely.'
    WHERE identifier = 'booming:LavaLoca'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Drinks, drums and dragons! Oriental riches abound as dragon boats battle it out to win in this fun and exciting slot'
    WHERE identifier = 'booming:LedgendofQuYuan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s not often you happen upon a leprechaun but when you do, you know there are nearby riches to be had.Find out if you have the luck of the Irish in Booming Games'' latest release Leprechaun''s Lucky Barrel. Enter Free Spins to activate the Lucky Barrel Collection feature and activate up to 5 Locked Wild Reels at the same time.With Stacked symbols in both the base game and in Free Spins, this medium volatility, 20 line slot is sure to appeal to your up and coming VIPs.'
    WHERE identifier = 'booming:LeprechaunsLuckyBarrel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We cordially invite you to celebrate the romance of China''s happiest couple, where promises of wealth and eternal happiness abound in every red flower petal.'
    WHERE identifier = 'booming:LotusLove'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s nearly time! The much awaited Lucky Scarabs by Booming Games is about to be made available in all the best casinos. This game promises to be a wild ride\\; as scarab beetle after scarab beetle pour onto the reels creating wild wins everywhere you look. And it gets even wilder in Free Spins, with the addition of Sticky Scarab Wilds making for some huge wins.  This graphically rich 9 line Egyptian themed slot will appeal massively to your VIP players, as ranked as a very high volatility game it''s designed to keep the excitement bubbling and the win potential irresistible.  '
    WHERE identifier = 'booming:LuckyScarabs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unleash your wild side! Are you ready to venture through dense, tropical forests in the latest animal adventure brought to you by Booming Games? Introducing Majestic Safari, a 5x4, 50 fixed pay line online slot game that offers you tons of opportunities to hit it big and become king (or queen) of the jungle. Features such as Double Majors, double symbols that count as two of the same symbol on a single reel position and can award up to 10-of-a-kind wins, make it easy for you to make your way to the top of the food chain. Getting a full stack of the same kind of Majors and Double Majors on reel 1 triggers a Major Re-Spin, which locks your matching Majors and lets you spin again free of charge, helping your winnings rain down like a monsoon! While out on the savannah, you can trigger Free Spins by spinning 3 Scatters (10 Free Spins), 4 Scatters (15 Free Spins) or 5 Scatters (20 Free Spins). A treasure-filled trek awaits you in the animal kingdom of Majestic Safari. '
    WHERE identifier = 'booming:MajesticSafari'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Arriba, Arriba!Pop on your sombrero, grab your maracas, and head to Mexico where they know how to party. Just maybe you''ll be lucky enough to crack open that piata.'
    WHERE identifier = 'booming:MexicoWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When it comes to neon nowhere beats Miami. The glitzy glamour of the 80''s returns with plenty of palm trees and flamingos. Where better to try your luck than The Magic City?'
    WHERE identifier = 'booming:MiamiNights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Drops between 1 to 24 Wild symbols while the reels are spinning. Random Wild symbols can land in the base game and in Free Spins.The Wild symbol substitutes for all other symbols except the Scatter symbol.'
    WHERE identifier = 'booming:MightyGorilla'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to venture into the wilderness with Booming Games'' latest release, Money Moose. This bountiful high volatility game has a 5x4 grid with 30 paylines and a mind-blowing max win factor of 8,000x! This is sure to attract high rollers as well as time-on-device players.\r\nMeet moose, bears, wolves, and wild hogs as major symbols, while the beautiful mountain scenery is Wild. The Scatter symbol is a glorious dawn. Land three Scatters on reels 1, 3 and 5 to trigger Free Spins.\r\nIn Free Spins, the Minor Elimination feature removes all winning minors from the reels to enable cascading tiles and higher wins. Activate the Major Upgrade to turn Major Symbols gold and double their value, so each spin can lead to explosive payouts!\r\nBut wait… there''s more! Fill up the screen with coin symbols - each with multipliers of 2x-500x - and land the Collector symbol on reel 5 to trigger the greatest feature of the game - Shoot''n''Collect! The Collector symbol awards the total value of all the coins on the screen. \r\nGet ready to hunt for your prize in Money Moose!'
    WHERE identifier = 'booming:MoneyMoose'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The monsters are up to no good in the kitchen and thy''re making a terrible mess. Their beastly twins have come along to boost your winnings.'
    WHERE identifier = 'booming:MonsterMunchies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Land the Ocean Drive Bonus trigger symbol to get theaward which is shown above the corresponding reel.Awards can be Cash Payouts, Mini -, Major- and GrandBonuses, a Wild Reel or a Walking Wild Reel!The Wild symbol substitutes for all other symbolsexcept the Scatter and Bonus symbols.'
    WHERE identifier = 'booming:OceanDrive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put on your lederhosen, fill up your mass and spin for a chance to win big at Oktoberfest.'
    WHERE identifier = 'booming:Octoberfest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let the elegant and skeletal Catrina lure you into this colorful Mexican slot to honor the Day of the Dead.'
    WHERE identifier = 'booming:OhCatrina'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bienvenue Paris! Cobbled Streets, quaint cafs and a healthy dollop of romance. In the city of love, can you strike it lucky and light up the Eiffel Tower?'
    WHERE identifier = 'booming:ParisNights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ahoy mateys! Booming Games is proud to announce its latest game: Pirate Booty! Come and play now and experience high seas, barrels of rum and large chests of booty! This 5x3 twenty line slot offers a 4 Corner Pay, Stacked Wilds and Scatters that trigger Free Spins. Why walk the plank when you can jump aboard and plunder booming amounts of Pirate Booty.'
    WHERE identifier = 'booming:PirateBooty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Things are heating up and ready to explode! Welcome to Red Hot Volcano, a tropical paradise with lava-hot prizes. Play Booming Games latest slots in this 5x3, 20-line slot game with Wild Reel Collectors, Fiery Free Spins and a max win factor of 10,000x! Match turtles, monkeys and flamingos on a tropical island with awesome prizes. Look out for smoking-hot Fireballs, collect them to activate Wild Reels which are locked for two spins. Keep an eye out for Scatter Symbols too, if they land on reels 1, 3 or 5 you''ll win Fiery Free Spins with total multipliers and the more Wild Reels, the higher the total multiplier to amass big, booming wins. Think you can handle the heat? Then jump right into the Red Hot Volcano. '
    WHERE identifier = 'booming:RedHotVolcano'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A revolution is coming, and mankind''s once primitive ancestors have taken our technology. With every government building blown up, they are one rotation closer to world domination.'
    WHERE identifier = 'booming:Revolution'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time for an adventure through the African landscapes where the rhino plays a vital role in maintaining balance within the ecosystem. Introducing Rhino Hold and Win, a 5x3, 25 payline online slot game that takes you for a walk on the wild side. Yes, it''s wild out there and so is our game, coz it''s full of Stacked Wilds! And who knows what riches you''ll uncover in Free Spins and Hold and Win - only one way to find out! Land 3 Scatters on the reels to trigger Free Spins with only high value symbols, setting you up nicely for some potentially Booming Wins and the possibility of retriggering Free Spins as well as triggering Hold and Win while you are already on the road to riches. The Hold and Win feature can be triggered at any time by landing 6 or more gold coins. The player is awarded an initial 3 Re-Spins where the reels only feature gold coins and blanks. Each time a new gold coin lands, the spin counter is reset to 3 Re-Spins. And we saved the best for last - Quick Hit Bonuses! During Hold and Win, land the Mini Bonus to win 25x your bet, the Major Bonus to win 100x your bet or land any 15 gold coins to win the Grand Bonus - a whopping 1000x your bet! '
    WHERE identifier = 'booming:RhinoHoldandWin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Romance is in the air as the most famous star-crossed lovers meet. Spin the reels of love for the chance to acquire the alluring ruby heart for a stunning x7 multiplication.'
    WHERE identifier = 'booming:Romeo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'London''s calling! Big Ben chimes, the guards salute and all the iconic site of this world-renowned capital are on show. Just be sure not to forget your umbrella, after all this is London.'
    WHERE identifier = 'booming:RoyalWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Everyone''s favourite reindeer takes to the skies again in this Xmas epic, Rudolph''s Ride. Join Rudolph as he sets of in search of the different levels of Free Spins, each new level gifting its own multiplier. With Stacked Majors and triggered 2-Way Pay, this game is sure to be on everyone''s Xmas wish-list.'
    WHERE identifier = 'booming:RudolfsRide'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you been good this year? Take a spin and find out what''s in your stocking.'
    WHERE identifier = 'booming:SantasKiss'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Race for the gold with these deep sea killers, where 4 ways to win could mean up to 4 times the prize.'
    WHERE identifier = 'booming:SharkMeet'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games'' upcoming release of ShowMaster is not a release for the faint hearted.  This 5x3, 20 line slot is super volatile, with a max win factor of 5000 times your bet !!! And once you start spinning the reels you can immediately see why this game has such huge payouts. The ShowMaster''s wheel is chock-full of high-value features and immediate payouts.  With 8 different features up for grabs on the main wheel, and 6 different payouts available on the inner wheel, this game will be a huge hit with all of your players. Designed to keep players coming back time and time again, this game can play-out in so many different ways players will never lose the feeling of excitement and anticipation every time they play. Features include Variable Free Spins, Wild Multipliers, Major Upgrade where minor symbols burst into their major counterparts, Royal Upgrade turning all royal symbols into the highest paying royal, Bursting Wilds, Wild Reels, and a healthy selection of Instant Prizes.  So strap in and get ready for the spin of a lifetime.'
    WHERE identifier = 'booming:ShowMaster'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join our audacious adventurer on his quest for ancient riches. Show me the Mummy'', Booming Games'' latest & greatest 5x3 medium-high volatility slot, features a Multiplier Reel, and Major Free Spins with only 3 Majors, Scatters and the Multiplier Reel. With fun features and playful animations, this game is sure to bring out the inner trail-blazer in your players.'
    WHERE identifier = 'booming:ShowmetheMummy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ladies and gentlemen start your engines, and may the best snail win!If you''re not yet familiar with snail racing then you''re missing out. Starting out as a bit of fun between college students, snail racing is now an actual thing with tournaments being held all over the world, especially in the UK.But, if catching a flight to watch gastropods giving it their all on the track sounds like an ordeal, Booming Games is here to save the day. Snail Race is the latest addition to our slots portfolio complete with 3 Snail Racers, 3 Walking Wild Multipliers, and so much more.Arranged across a 6x3 grid, Snail Race brings this wacky practice to the screen, encouraging players to get those reels spinning, and those snails scooting.Complemented by an upbeat soundtrack and brightly designed graphics, this medium volatility slot is bound to be a winner, even with the most sluggish of players.'
    WHERE identifier = 'booming:SnailRace'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Harness the power of ancient Egypt to win great riches in Booming Games latest release, Sphinx Fortune! There are 576 ways to win in this high volatility game, which has a unique 3-4-4-4-3 grid, featuring Nudging Wild Multipliers and a Pyramid Hold and Win Bonus. The 4x1 Wild Pharaoh symbol nudges up or downwards until becoming completely visible increasing the multiplier by 1x with each nudge, whilst three Scatters trigger Free Spins with unlimited Nudging Wild Multipliers! Players landing two Pyramid symbols will enter the Hold and Win Bonus starting with three re-spins of the coin multiplier symbols and ending with a Wheel of Fortune where even greater riches await! So get spinning and reel in the riches.'
    WHERE identifier = 'booming:SphinxFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This time it''s Spinosaurs by Booming!'
    WHERE identifier = 'booming:Spinosaurus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games'' upcoming release, Stellar Spins, is out of this world. This atmospheric 5x3 medium-high volatility slot will truly engage your players of all levels. With triggered 2-Way Pay and Stacked Wilds in the base game and an Expanding Symbol feature with retriggering Free Spins, this game promises to be one for the aeons.'
    WHERE identifier = 'booming:StellarSpins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Day of the Dead has arrived with colourful skulls to greet you. Enjoy the big FIESTA when you trigger the Random Win!'
    WHERE identifier = 'booming:SugarSkulls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will the villain succeed in making off with all the bank''s loot, or will our superhero catch him and send him to jail? Super Boom, the new game from Booming Games takes place in front of the city bank. Our villain has laid 2 bombs at the entrance doors, but will he succeed in exploding them and turning the reels Wild? This 12 line, medium-high volatility game with an irregular grid promises to captivate all levels of players.'
    WHERE identifier = 'booming:SuperBoom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Booming Games invites you to ride the wave of success with their latest release: Surfin'' Reels. Surfin'' Reels takes us back in time to the glorious 1970''s where surfing was king and the beach was the place to be. This medium volatility slot is packed with features and huge wins. Instantly win up to 50 times your bet with our 4 dynamic Quick Hit Jackpots, while up to 10 times your bet can be won with our Wheel of Fortune.Meanwhile, our Free Spins portal allows players to choose from three levels of surfing skills, from beginner to VIP, each of the 3 Free Spins sessions offering different numbers of spins combined with varying multipliers.So pull on your wetsuit, wax that board, and hit those Surfin'' Reels.'
    WHERE identifier = 'booming:SurfinReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pop the trunk, crack open a beer, and get that grill sizzling as your winnings get you pumped for the big game.'
    WHERE identifier = 'booming:Tailgating'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The king is back, but he may look slightly different to how you remember him. With the iconic quiff and shades, this panda is king of the karaoke. Viva Las Vegas!'
    WHERE identifier = 'booming:TheKingPanda'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This August, Booming Games presents its take on an old favourite. Always a popular theme with players,Tiki Wins promises to be the hottest release of the summer. With 30 paylines, this fun and innovative slot is packed with character. With just the right balance of risk and reward, Tiki Wins will appeal to players across your portfolio. This medium volatility 5x3 slot is as rich with features as it is visually rich. Land our 3x1 Golden Wild Tikis on reels 2 & 4 to give yourself the chance of some massive 4 & 5 of a kinds. Your players are also bound to love the Nudging Tikis feature, affecting the high paying major symbols, all 3x1 tikis. This feature can randomly nudge partially landed tikis to ensure they cover the whole reel, increasing the possible number of wins. It''s worth noting that both the Golden Wild Tikis feature and the Nudging Tikis can occur in tandem, giving the player some of the game''s biggest wins. Add Free Spins to all of that and the summer''s already looking bright.'
    WHERE identifier = 'booming:TikiWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unravel the mysteries of the Egyptian pharaohs. Entombed, they await the lucky archaeologist who shall unearth them and their priceless treasures.'
    WHERE identifier = 'booming:ValleyofPharaohs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Las Vegas! Enjoy the luxury of getting showered with VIP Random Wins while the decadent lifestyle takes you through an experience you will never forget. What happens in Vegas stays in Vegas!'
    WHERE identifier = 'booming:VegasVIPGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head to the city of bright lights and long night with Vegas Wins. Just remember, what happens in Vegas, stays in Vegas.'
    WHERE identifier = 'booming:VegasWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to push the boat out with Booming Games latest release, VIP Filthy Riches. This lavish high volatility game, whilst aimed at all levels of players, will be of particular appeal to your VIPs. Featuring a 5th reel comprised entirely of multipliers of up to 50x, all spins have the potential to elevate your players as he sets off the filthy rich. While the number of Major Free Spins awarded is generally kept small, with minimal majors and no minors each spin is sure to pack a punch.'
    WHERE identifier = 'booming:VIPFilthyRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feeling lucky? Test your luck with Booming Games'' latest retro themed neon slot - Wild Bonus Re-Spins!  Wild Bonus Re-Spins is a slick new 3x3, 5-line, classic Lucky 7s slot game with a stunning retro wave style.   Lock in Wilds with multiple Re-Spin opportunities. Whenever you land a Wild, it sticks in place and awards a Re-Spin. Stack up Wilds within your Re-Spins and watch your prize pool grow, as payouts are awarded with each Re-Spin. Additionally, stacked symbols add to the potential of big wins.  Reach a full screen of Wilds to win a huge bonus of 2000x!  3 Scatters trigger an impressive 15 Free Spins with a higher chance to land Wilds. That means more Re-Spins, more payouts, and an even better shot at the 2000x bonus during Free Spins.  Bask in the neon lights and Re-Spin your way to a Wild payday! '
    WHERE identifier = 'booming:WildBonusReSpins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Plunge deep into the darkness of the forest to witness the enchanted fruit and bring back a great fruity haul.'
    WHERE identifier = 'booming:WildCherries'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When simple elegance meets classic slot design you have Wild Diamond 7x. This is a game that plays as good as it looks!'
    WHERE identifier = 'booming:WildDiamond7x'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the charge pulsing through your veins as you spin the reels in Booming Games latest stunning release of Wild Energy. This 25 payline 6x4 powerhouse of a game is as highly volatile as it looks, enabling players to win up to 5 thousand times their bet in one spin. Highly charged with wilds of every description, Wild Energy offers Wild Reels, where in the base game it''s possible to land Wild Reels on reels 2, 3, 4 and 5. Or even better, players can land Wild Reels with a 2x Multiplier. Random electric surges are liable to take over the game board at any moment, firing out Wilds across the grid\\; while Bursting Wild Reels can turn both of their neighbouring reels wild, giving the player 3 Wild Reels in a row. But the most electrifying feature has to be the Wild Respins, where the reels are torn apart to form a 7x4 grid, adding an additional Wild Reel, and guaranteeing Wild Reels on reels 1, 4 and 7. And to add to the fun\\; there''s literally no limit to the number of Respins which can be triggered\\; so plug in, turn on, and go wild with Booming Games Wild Energy.'
    WHERE identifier = 'booming:WildEnergy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Taking you back in time to the dark ages to partake in some medieval madness. Your cheeky companion, the Jester is along for the ride to keep your spirits high.'
    WHERE identifier = 'booming:WildJester'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Immerse yourself in Booming Games'' latest and greatest, Wild Ocean.This 5x3 medium volatility slot features Triggered 2-Way-Pay, the Octopus Wheel of Fortune, Swimming Wilds and Sticky Wilds. This game will hook all player groups, with our wildest Free Spins yet as our wild sharks swim their way across the reels to join the feeding frenzy.'
    WHERE identifier = 'booming:WildOcean'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head out onto the savannah to hunt with the pride and see if you can bring back a highly prized catch.'
    WHERE identifier = 'booming:WildPride'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Viva Las Vegas! Get ready for bright lights and wild nights on the world-famous Vegas strip. Big wins await you in Wild Wild Vegas, the latest video slot sensation from Booming Games.Wild Wild Vegas is a 5x3 20-payline video slot sure to thrill the reel high rollers out there. There are so many chances to win big in Wild Wild Vegas with a ton of fun special features that can allow you to double, triple, or even quadruple your chips or more!Not getting enough action on the tables? 3 Scatter symbols can trigger 3, 6, or 12 Free Spins while the Random Selection feature really adds some excitement for the thrill-seekers among you! You can also buy Free Spins to make your chances of hitting jackpot even higher.Wild Multipliers put the wild in Wild Wild Vegas! With multipliers substituting every symbol except the Scatter symbol, lucky players can win up to x3,024 Wild Multipliers.Don''t forget, this is Las Vegas, so there is even more excitement for the high rollers! With Wild Wild Vegas Gamble feature, you can take the house for all it''s worth.Who says the house always wins? Bring the excitement of Las Vegas to the comfort of your own home and get spinning!'
    WHERE identifier = 'booming:WildWildVegas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The whistle sounds and it''s kick-off. It''s time to raise the cup of the winner! Run, shoot and score ...... GOAL !!'
    WHERE identifier = 'booming:WinnersCup'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double, double toil and trouble Fire burn, and cauldron bubbleAre you brave enough to go spinning in the woods all alone?Booming Games has gone spooky with their latest game Witches Wild Brew. But all may not be as it seems smoking cauldron, far from bringing dread, brings reward, as it unleashes wilds across the reels. Sinister ravens bring choices to the player, empowering them with coin, while Bursting Wild Multipliers add to the rewards. Keep your wits about you though, as the woods get even creepier at night, while you play out your dynamic Free Spins willing them to go on as you win additional spins while every fibre of your body screams Ruuuunnn.This 5x4, medium high volatility slot, has a whopping 25 paylines. Coupled with a random Pick a Raven feature where you can win an immediate 30 times your bet the game is full of differing wilds to match the spirit of our 3 mages. Just be careful not to become bewitched.'
    WHERE identifier = 'booming:WitchesWildBrew'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Time to apparate into the wizarding world for a truly magical experience and spellbinding rewards in Booming Games Wizarding Wins. This is a 5x3 online slot game with 25 paylines and a famous wizarding theme. Including iconic round glasses, an owl, chest and magic broomstick as the major symbols.The Wild serpent replaces all symbols while the express steam train acts as the Scatter which triggers 5-15 free spins. However, the game''s most charming feature is the Quick Hit Bonus through three or more Sorting Hat bonus symbols. The more symbols you land on the reels, the bigger the multiplier grows on your particular spin. It starts from 20x your stake for three bonus symbols but rises to an enchanting 200x for six symbols. So get ready to start spinning and conjure up some real Wizarding Wins.'
    WHERE identifier = 'booming:WizardingWins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This time Booming Games has gone down-under for its upcoming release of Wombaroo. This medium-high volatility game is set to the background of Ayers Rock / Uluru\\; sacred to the aborigines, and giant tourist attraction to everyone else. While Regan the Roo and his friend and competitor Wombat Willie go toe to toe on the sides of the gameboard, the player can activate either of their bonus rounds by landing 3 Aussie Scatters with their faces on them. Regan wins you 8 Kangaroo Free Spins with Sticky Wilds, while Willie wins you the Wombat Wins feature, where your triggering Scatter symbols are turned to coins with a variety of monetary values of up to 100 times your bet. The player is awarded an initial 3 Wombat Spins where the reels only feature winning coins and blanks. Each time a new winning coin lands, the spin counter is reset to 3 spins. The Wombat Wins feature only ends when the player fills the entire screen with coins or when they win no more coins for 3 consecutive spins. But that''s not all\\; because anytime a player lands 2 Scatter symbols this goes towards the Super Feature Collector, where players are awarded 8 Free Spins with random gold coins which drop onto the reels, awarding the players their face-value, and then transforming into Sticky Wilds for the duration of the feature. Packed with features and the potential for some seriously big wins, this game is sure to be a winner with both your time-on-device players and your VIPs. '
    WHERE identifier = 'booming:Wombaroo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the excitement of the largest beer festival in the world. Buxom maids, big wins, and plenty of beers await.'
    WHERE identifier = 'booming:Wunderfest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A visit to the Oktoberfest will make your winnings enlarge as the symbols take over the reels, keep the beers coming! Prost!'
    WHERE identifier = 'booming:WunderfestDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multi Deck Blackjack game with Burn card functionality'
    WHERE identifier = 'bsg:21BurnBlackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Caveman themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:2MillionBC'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As time moves on and the seasons change, so too do we change and grow. Enter the gorgeous world of 4 SEASONS, based upon the ancient Chinese zodiac that has guided the steps of billions for years untold. From Horse to Snake, all the way around the wheel, each sign is present and ready to capture your heart. This game will leave you asking your friends: what''s your sign?'
    WHERE identifier = 'bsg:4Seasons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for big and plentiful wins in 7 FORTUNE FRENZY! This three standard reel, single payline slot\r\nfeatures a bonus reel with the potential for game-changing effects, making sure that each spin will have\r\nyour players on the edge of their seats.\r\nWith the majesty of space in the background, your players will enjoy the cool retro electronica theme as\r\nthey rack up wins. The game boasts a broad bouquet of bonuses, and any bonus is possible with each\r\nwinning spin — a 2x, 5x, or 8x multiplier on wins, an 8x or 18x boost to the player''s wager, or a free respin\r\nthat features its own multiplier on wins!\r\n7 FORTUNE FRENZY is the fast-paced, beautifully rendered slot your players have been looking '
    WHERE identifier = 'bsg:7FortuneFrenzy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic slot with great features! '
    WHERE identifier = 'bsg:7thHeaven'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for big and plentiful wins in 88 FRENZY FORTUNE! This three standard reel, single payline slotfeatures a bonus reel with the potential for game-changing effects, making sure that each spin will haveyour players on the edge of their seats.With the majesty of space in the background, your players will enjoy the cool retro electronica theme asthey rack up wins. The game boasts a broad bouquet of bonuses, and any bonus is possible with eachwinning spin a 2x, 5x, or 8x multiplier on wins, an 8x or 18x boost to the player''s wager, or a free respinthat features its own multiplier on wins!88 FRENZY FORTUNE is the fast-paced, beautifully rendered slot your players have been looking for!'
    WHERE identifier = 'bsg:88FrenzyFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cops and Robbers themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:AfterNightFalls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delve into the mysteries of the arcane with the wizard himself in Alkemor''s Tower. Seek the Astrology and Nature rooms. Cast magical spells featuring the four classic elements of Earth, Wind, Fire and Water. This brilliant and artfully crafted slot machine is another crowning achievement in the ever-expanding Slots game lineup.'
    WHERE identifier = 'bsg:AlkemorsTower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multideck Blackjack without sidebet'
    WHERE identifier = 'bsg:AmericanBlackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'American (Double Zero) Style Roulette Game'
    WHERE identifier = 'bsg:AmericanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cast your rod and reel in the wins with THE ANGLER! This five reel, twenty payline video slot features burly fisherman Otis and his endless quest for the perfect catch!\r\n\r\nJoin Otis as he fishes the tranquil lake on a pleasant afternoon. With Oyster Free Spins and Clingy Wilds, a frequently occurring Wild symbol and an innovative "Time To Fish!” bonus game, this fishing trip will be no ordinary day at the l'
    WHERE identifier = 'bsg:Angler'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Alien Invader themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:Arrival'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Salsa Dancing Themed 30 Line 5 Reel Slots3 Game with 3 Progressive Jackpots'
    WHERE identifier = 'bsg:AtTheCopa'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Movie Theater themed 25 Line 5 Reel Slots3 GamePart of the informal Slots 2.5 product line'
    WHERE identifier = 'bsg:AtTheMovies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Baccarat is a thrilling game played at major casinos all over the world. It''s up to you to wager that the player''s hand will win, the banker''s hand will win, or that the game will result in '
    WHERE identifier = 'bsg:Baccarat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Plant has returned and is prepared to take you BACK TO VENUS in this charming 5 reel, 20 payline video slot!Presenting two revolutionary Second Chance features, this delightful sequel will reach out andgrasp your players with its appealing alien plant theme. The Prickly Sticky and Respin feature willchoose a symbol at random, and continue respinning until there is a win with that symbol!The Plant can also exercise its alien power in the Flowering Wild Burst feature, awarding a FreeRespin and an increased chance for Asteroid WILDS to hit the reels!Frequent storms of Sticky Asteroid WILDS are possible with the Plant''s presence. A secondscreen Free Spins mode that takes you to Venus, with a chance for multiplier WILDS, awaits youin the Rocketship. Climb in and take off for flowering fun in space!'
    WHERE identifier = 'bsg:BackToVenus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Brush aside the bamboo stems, take the mountain path, and discover a secret garden filled with endless opportunities in BAMBOO RUSH - the new 5X4 slot game from Betsoft Gaming.BAMBOO RUSH boasts 40 paylines that pay from left to right. As well as standing in forany other symbol in the base game, wilds also award multipliers of 2X or 3X during free spins,with a combined maximum of 27X the winning value per payline. Wilds can only appear in reels2 to 4.Seek out the treasured Golden Panda scatter to trigger BAMBOO RUSH''s free spins feature,where you can win up to 20 free spins straight from the start, and the potential to uncover even more of them! All symbols are stacked during the base game and free spins except for the scatter, which can lead to wins of up to 53000x in a single spin!'
    WHERE identifier = 'bsg:BambooRush'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This is the REAL Captain Blackbeard and me ruthless band of Pirates, seadog! Climb up the aft and join me hearties as we pillage and plunder along the BARBARY COAST. Hijack ships, search for buried booty, pillage land lubbers gold, and of course kidnap the fair Maiden. Ahhh yes, Captain Blackbeard and me crew have NO mercy in our quest for riches, larceny, and debauchery. Yarrrrrrrr!\r\n\r\nFeatures:\r\nDestroy reel with cannon to turn it BARBARY WILD REEL! Win Free Spins with your trusty Parrot!\r\nDashing Pick Me Instant Wins and more instant bonus features!\r\nExperience the excitement of the high seas with the Find the Treasure and Sea Battle Bonus Rounds!'
    WHERE identifier = 'bsg:BarbaryCoast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get twitterpaited with BIRDS! This adorable new Slots title will have you soaring up to the heights with excitement! The revolutionary reels and lovable avian characters each with their own cute personalities!  is set to capture your heart as you play. BIRDS! offers you a chance for unlimited free spins as you while away the day in the company of these fine feathered friends!'
    WHERE identifier = 'bsg:Birds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to put on your cowboy hat and spurs when you play Black Gold! Join Ol'' Bill the Oil Tycoon and his faithful steed as they wander the Texas range in search of Oil. Help Bill find the right spot to place his oil pumps and find the gushers hidden deep beneath the earth. You''ll find yourself becoming filthy rich when you strike it big and fill your barrels with that Black Gold!'
    WHERE identifier = 'bsg:BlackGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sink your teeth into BLOOD ETERNAL, the latest video slot to join Betsoft''s expanding Classics collection. With an expanded six-reel arrangement and dramatic bonus features, you''ll fall in love at first bite!\r\n\r\nVampire stories originate from the European areas, and we expect this to aid in the popularity of this title in those markets. Origins aside, we feel that the strong playability of the game will allow BLOOD ETERNAL to thrive in other, growing mark'
    WHERE identifier = 'bsg:BloodEternal'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Uncover the secrets of dark magic in BOOK OF DARKNESS, the latest 10 fixed payline video slot by Betsoft.Look for the mystical books and choose the hero to fight for in the CLASH FOR POWER bonus rounds!When the HUNTRESS and DARK WIZARD symbols align next to a BOOK symbol, the CLASH FOR POWERbegins. Choose your fighter and fill up the HERO METER by receiving wins with your chosen hero. If yourfighter wins, you''ll be rewarded handsomely and start another bonus round.With the unique SHADOWFORM feature, get caught up in the action as the HUNTRESS and DARK WIZARDbattle to magnify your wins. If the DARK WIZARD won the CLASH FOR POWER, he will cause 5 symbols toexpand. If the HUNTRESS won the CLASH FOR POWER, she will award a 5x MULTIPLIER to any and all wins.Prepare yourself for a unique arcane fantasy, only to be found in the BOOK OF DARKNESS. '
    WHERE identifier = 'bsg:BookofDarkness'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fast Paced Fireworks themed 10 line 5 reel Slots3 GameNote: Has a cloned version called Gemscapades that''s 7RED exclusive, it''s the same exact game.'
    WHERE identifier = 'bsg:Boomanji'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover boundless wealth in the newest slots game by Betsoft Gaming  CAISHEN''S ARRIVAL!With the amazing blessings of Caishen, prepare to delve into a world of riches!CAISHEN''s ARRIVAL features fast-paced slots gameplay with amazing possibility. Featuringa multiplier of over 35000x, the wins can reach the skies. Look out for the CAISHEN symbolwhich serves as a wild for huge wins!Stack 3 portraits of Caishen on a reel to trigger a FULL REEL WILD and receive a FREERE-SPIN! Earn additional riches by seeking out the COIN PURSE SCATTER, with 3 or moresymbols anywhere on the reel triggering a reward.Venture into a world of fortune in CAISHEN''s ARRIVAL!'
    WHERE identifier = 'bsg:CaishensArrival'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Poker game'
    WHERE identifier = 'bsg:CaribbeanPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let the sound of the samba transport you to the streets of Rio de Janeiro with Carnaval Forever, the glittering new slot game that pulses to the open-air beat of the biggest show on earth. With millions of visitors every year, the Rio carnival (carnaval in the country''s native Portuguese) is the largest of its kind in the world.Carnaval Forever captures all that celebratory atmosphere in its audio-visual presentation, with beautiful people and ornate floats making up the symbols, backgrounds festooned with brightly coloured feathers, and a soundtrack that pounds to the rhythms of the procession.Float symbols are wild, and can stand in for any other non-special symbol. But the centre of attention is the stunning Carnaval Queen, who weaves her way through the crowds, with free spins and multipliers following in her wake. Three or more Queens appearing at once will multiply the total stake by between 5X and 9X, and the Queen also leads the troupe towards Carnaval Forever''s free spins feature, with anallocation of between 3 and 9 free spins.Like the festival itself, Carnaval Forever is an inclusive, triumphant game. Built around 10 straightforward paylines, the reels also feature a unique symbol that can reduce the cost of Betsoft''s signature featurebuy-in mechanic to zero if enough are visible at once.'
    WHERE identifier = 'bsg:CarnavalForever'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Somewhere, at the end of the rainbow, legendary treasure awaits you in a sylvan paradise. May the luck of the leprechaun be with you as you play CHARMS AND CLOVERS!\r\n\r\nFeaturing exciting features such as an added BONUS REEL for more fun & POTS OF GOLD filled to the brim with wealth, there''s never a dull moment in this clover-filled wonderland.\r\n\r\nTake your chances and find your fortune in CHARMS AND CLOVER'
    WHERE identifier = 'bsg:CharmsAndClovers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spice things up with Chillipop, the cluster-based, cascading slot game with a secret ingredient: an expanding grid offering explosive new ways to win.From the Mariachi soundtrack to the potent chilli symbols, Chillipop is suffused with the spirit and sizzle of Mexican cuisine. Players try to assemble the perfect salsa, matching symbols like tomatoes, onions, garlic, and red, yellow, and green peppers to create the tastiest (and top-paying) combinations.Like the sauce itself, things can heat up quickly in Chillipop any configuration of 3 or more adjacent symbols pays out, and as items are added to the pot, new symbols cascade down to replace them. Couple this with the wild symbol - which can substitute for any ingredient, as well as creating stackedmultipliers when several appear on-screen and players can create maximum flavour from a single spin.The fiesta gets into full swing with the Free Spins feature, triggered by 3 or more pack mule scatter symbols appearing at once. Over an allocation of between 5 and 26 free spins, Chillipop then uses Betsoft''s proprietary trail system to track the number of sombrero-sporting mules that players collect, with set milestones expanding the size of the cooking pot even further. From an initial 5x3 grid, the Free Spins feature can grow the playing area to a massive 8x8, with the new dimensions dramatically increasing the number of paylines.'
    WHERE identifier = 'bsg:ChilliPop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Relive an iconic piece of literature in this true 3D slot adaptation of Charles Dickens'' A CHRISTMAS CAROL! Cower under the covers with callous old Ebenezer Scrooge as he is visited by the howling Ghosts of Christmas Past, Present and Future. Each of the Ghosts bring their own special power to the reels, including the Reverse Reels of Christmas Past! With WILD symbols and Free Spins, A CHRISTMAS CAROL will enrich your players and bring them a warm sense of the holiday season.'
    WHERE identifier = 'bsg:ChristmasCarol'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Miles Bellhouse has invented the most Curious of Machines, one which can travel through space and time! Along with Gizmo, his trusty steam-powered robot, they will scour the past and protect their invention from the dastardly devious General Traytor, a stocky sort of man who suspects the machine has great military potential. So hop aboard for a trip through time and entertainment in MILES BELLHOUSE AND HIS CUROUS MACHINE!'
    WHERE identifier = 'bsg:CuriousMachinePlus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Single Hand Machine'
    WHERE identifier = 'bsg:DeucesWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feeling hungry? Come to the hottest food stand in town. The new Betsoft game DIM SUM PRIZE will keep you craving for more and more. Sit back, enjoy the teatime and get ready for hot buns, dumplings and exciting big wins!\r\n\r\nWith 5 reels and 10 lines of delicious prawns, steamed goodies and rice noodle rolls, your appetite will be more than satisfied. 3 Crimson Coupons award FREE SPINS! The Crimson Coupons transform into TEATIME WILDS that stay in place for the duration of the FREE SPINS round. The more TEATIME WILDS appear, the more respins will be triggered.\r\n\r\nA Bamboo Basket can appear anytime on the reels 2, 3 and 4. The Bamboo Basket surprises you with either a CRIMSON COUPON or a TEATIME WILD. Take it while it''s hot, get ready to spin and enjoy the spoils in DIM SUM PRI'
    WHERE identifier = 'bsg:DimSumPrize'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chinese myths come roaring to life in Dragon Kings, a modern take on a traditional tale, and a 3x5 slot game where the symbols are the real stars. Alongside Asian cornerstones like lucky coins and jade figurines, Dragon Kings reimagines the guardians of ancient China''s seas as four standout, scaly symbols- all of them wild, and each with their own powers and identities.The centre reel is reserved for the eye-catching and even more powerful Dragon King, who builds on the individual dragon''s blessings with his own 2x multiplier. The Dragon King also holds the keys to four tiered jackpots - from bronze to diamond.A special sixth reel contains a magical flaming pearl, which doubles the number of free spins awarded from scatter symbols (up to a possible 30). This symbol is essential for unlocking jackpots, in combination with the Dragon King and one or more of the other dragons.Line up all five dragons and receive a prize fit for a king: 2,000 coins!'
    WHERE identifier = 'bsg:DragonKings'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Draw Hi-Lo, an exciting, fast-paced card game.\r\n\r\nThe goal of the game is to guess whether the next card will be higher or lower than the previous card. If you guess correctly, you can keep playing to win even more or you can cashout at any time and collect your winnings'
    WHERE identifier = 'bsg:DrawHiLo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The delightful and sweet Dr. Jekyll hides a secret: a monstrous side of himself he keeps hidden away. Being a scientist, his only solution seems obvious: concoct a special potion he hopes will quell the monster within. But quiet the monster it does not, instead it had the opposite effect: THE MONSTER IS FREE!'
    WHERE identifier = 'bsg:DrJekyllAndMrHyde'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to multi-hand European Blackjack. Six (6) decks of cards are used to play this variant. Each player plays only against the dealer (i.e. the bank), independently of other players. Your goal as the player is to draw cards (i.e. hit) until your hand adds up to 21, or comes as close as possible without exceeding 21. If your first two cards total 21, you have Blackjack!'
    WHERE identifier = 'bsg:EuropeanBlackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Roulette is a simple game that gives players the chance to win big.\r\n\r\nOur Roulette is based on standard European Standard Single Zero Roulette, according to the standard rules of the Nevada Gaming Commission. An ivory ball circles in the rotating roulette wheel that consists of 36 numbers plus 0. Eventually, the ball stops randomly on one of the 37 random numbers. The player is to predict the outcome of each spin by placing bets in the fields of the Roulette table. Each player wagers against the bank, independently from other game participants.\r\n\r\nYour winnings will be based on how well you have predicted the ball''s final resting-place by placing your chips accordingl'
    WHERE identifier = 'bsg:EuropeanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s said that nothing can escape from an Event Horizon  not even light. Combine this dazzling Any Way Pays video slot with duplicating reels and you have a game with wins so massive, your players will never want to leave. Every spin gives a chance for two, three, four or all five reels to sync up, spinning at the same time with the same matching symbols. These synced reels greatly increase each spin''s chance of winning. With classic slot machine symbols (Cherries, Bells, Bars and 7s and gorgeous deep space graphics, this game unifies the new and the old in true Betsoft style.'
    WHERE identifier = 'bsg:EventHorizon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Alvin Goodman is a simple man with a simple job: Catching mischievous critters and getting rid of them. Whether it''s aggressive bears, or unruly squirrels, Alvin takes on all comers big and small. However, he''s about to meet his match! A wily raccoon has taken up residence in the neighborhood and is causing all sorts of havoc! No trash can is safe from his plundering, and now Alvin needs your help to catch the dastardly raccoon! Come along and see all the wacky hijinx for yourself when you play The Extermina'
    WHERE identifier = 'bsg:Exterminator'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Uncover the secrets of the undergrowth in Faerie Spells, the 3x5 videoslot where woodland spirits brew potions in the shadows, and any toadstool can hide a hoard of treasure.A traditional alternative to modern fairytales, the symbols in Faerie Spells paint the natural world as a place of uncharted wealth and wonder. Faeries and pixie princesses are joined by wild, green-bearded tree guardians, will the wisps, and glowing, magical trees. The ruler of the realm, the Faerie Queen, can conjure two different features: her aura causes toadstools to reveal their riches, in the form of multiples ofthe player''s bet and three or more of her royal symbols triggers the unique jackpot game.Taking place on a special playfield in the Faerie Queen''s hidden workshop, Betsoft''s signature shared jackpot feature challenges players to collect special potion phials over the course of 10, 15, or 25 free spins. Every drop of potion collected contributes to one of four tiered jackpot recipes being concocted by the queen: the Spells of Plenty, Luxury, Wealth, and Riches. When a symbol is collected, it''s removed fromthe reels and other special symbols cascade down in a magical shower. With Betsoft''s innovative Buy-In feature, players can pay to trigger the max number of free spins on demand as many times as they like.'
    WHERE identifier = 'bsg:FaerieSpells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double your money, double the fun! This delightful game offers 243 paylines that pay any way to dramatically increase your chances to win. And that''s not all! Guided by an adorable pair of identical twin sisters, FA FA TWINS features reels that can lock and sync with matching symbols on those reels, providing even more chances for huge wins!'
    WHERE identifier = 'bsg:FaFaTwins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grim-dark Fantasy (Think: Game of Thrones) themed slot with a 3-4-5-4-3 reel arrangement and a unique spreading wild feature that also ties into a free spins feature with clingy wilds. Backstory is:One nation, split by a war that has burned for centuries. Two noble Houses, mired deeply in that war. And an unexpected threat that no one could have anticipated the Coming of the Dragons. Watch as the Houses of the Shieldmaiden and the Swordsman unite to fight back against the aggressive draconic invaders using their combined War Cry that can flip icons to Wilds and greatly increase chances for winning!'
    WHERE identifier = 'bsg:FireandSteel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'IT''S ALIVE! Mad Dr. Frankenslot has finally done it - he has built a random collection of bits and organs into a terrifying creature  - Frankenslot''s Monster! In this hilarious retelling of the famous story, you will have the opportunity to control the monster yourself! What will you make it do? Win big with Scatter Pays and Wilds when you play FRANKENSLOT''S MONSTER!'
    WHERE identifier = 'bsg:Frankenslots'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A new slant on traditional slots, Fruitbat Crazy stars a cheeky bat who''s always on the prowl for food - looking to sink his fangs into clusters of melons, berries, citrus fruits and cherries.In Fruitbat Crazy, clusters of low-value symbols always pop first, allowing higher-paying stacks to mount up before splattering them in one big explosion. Unlike other cascading slots, Fruitbat Crazy''s roster of symbols also collapse on a combo-by-combo basis, with smaller wins resolving before triggering their own collapses creating the chance for some seriously succulent payouts.Beyond the 3X5, 243 ways to win base game, Fruitbat Crazy earns its name in the free spins feature: find 3 or more Fruitbat symbols and a whole flock will descend from the trees and gorge themselves over the course of 10 or more free spins.'
    WHERE identifier = 'bsg:FruitbatCrazy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Relax and enjoy the peaceful views of FRUIT ZEN, the newest release in Betsoft Gaming''s SLOTS3 ARCADE series. This fantastic slot machine features unparalleled 3D graphics, with lush moving water and incredible win effects. The gentle is sure to melt your stress away.Come, unwind and win with FRUIT ZEN.'
    WHERE identifier = 'bsg:FruitZen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Win with gems of ALL shapes and sizes in GEMMED, the latest slots game by Betsoft. Featuring 40503 ways to win and an innovative reel system, hunting for wins has never been this fun.The game uses a 9x9 grid with special reels that allow for symbols of different sizes. Payouts areawarded via contiguous symbols, which are symbols that touch each other, either adjacent or diagonally. Bigger symbols are worth more as they will pay out ALL payline combinations that pass through them and form a winning combination.There''s always action around the corner. With reels packed with symbols of all values and amazing wilds, you never know when the next win will come around! Look out for the GEM CLUSTERS to trigger the free spins round!Hunt for gems, make it shine and win big in GEMMED!'
    WHERE identifier = 'bsg:Gemmed'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Visit a land of magical enchantment, where kingdoms are the home to Kings and Queens, Jokers and an Ogre?!\r\nIn Betsoft''s newest smash hit OGRE EMPIRE, join the townspeople of a fantasy kingdom with a rather inconvenient Ogre problem! An innovative Day/Nigh'
    WHERE identifier = 'bsg:GiovannisGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gladiator themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:Gladiator'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Luxury/Glam themed 30 Line 5 Reel Slots3 Game with Progressive Jackpot'
    WHERE identifier = 'bsg:GlamLife'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Polish your spurs, saddle up and get ready for a pistol-shooting, treasure-hunting & reel-spinning action in Gold Canyon. A dynamite new take on traditional 5X3 video slots.The treasures of Gold Canyon are sure to provide super wins, but even better is theappearance of the MYSTERIOUS DRIFTER, when he spins into the arena, things will get a little more WILD!Watch out for the explosives in the canyon of riches, three or more pieces of DYNAMITE will trigger free spins.Will you be the one to find the treasures of the GOLD CANYON?'
    WHERE identifier = 'bsg:GoldCanyon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gold Miner themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:GoldDiggers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Celebrate the Year of the Ox and follow his enchanted path to unimaginable luck and copious treasure inGOLDEN HORNS! Rejoice in the newest addition to the Red Dragon line in the latest video slot by Betsoft Gaming.3 reels, a single payline, yet a max win of over 25000x your bet awaits.Seek out the magnificent money tree, the glorious fishes and the lavish frogs, all waiting on the reels. Collect 3symbols in a line for even greater wins! Prepare for glory in a pile of gold with the generous CHARGE OF THEWILD OX!Guardian lions and gleaming lanterns line the halls on your path to boundless wealth, but it is the WILD OXthat is sure to make you smile. Each OX can bring with it a hefty multiplier, amplifying your wins. Get ready fora festival of fun in GOLDEN HORNS!'
    WHERE identifier = 'bsg:GoldenHorns'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a journey into the high mountains in GOLD TIGER ASCENT, the latest video slot from Betsoft Gaming! This 3-reel, 3 row video slot, featuring an iconic golden tiger character, pays on 3 of a kind on any payline.\r\n\r\nInnovative functionality allows for MAGIC RED ENVELOPES to appear on the reels, and these ENVELOPES can reveal WILDS, instant cash wins, high value symbols, and even SCATTERS that pay and offer generous FREE SPINS!\r\n\r\nDuring FREE SPINS mode, the MAGIC RED ENVELOPES have even more power: there can be up to 5 ENVELOPES with SCATTERS, and up to 9 ENVELOPES with other symbols! This offers unprecedented chances to win!'
    WHERE identifier = 'bsg:GoldTigerAscent'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Innovative Multi-Model 3D Slot game. Players can choose between low volatility, high volatility, or both at the same time. 15 Line, 5 Reel Slot.'
    WHERE identifier = 'bsg:GoodGirlBadGirl'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The world of GREAT 88 presents opportunities to win like never before! This gorgeous game captures the essence of a peaceful evening, brimming with exquisite Asian-inspired detail and a novel bonus system that will keep your players searching for luck and good fortune with every spin!'
    WHERE identifier = 'bsg:Great88'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fantasy Themed 30 Line 5 Reel Slots 3 Game.Unofficial Sequel to Once Upon A Time'
    WHERE identifier = 'bsg:GreedyGoblins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A fortune teller themed slot, featuring 5-reels and 30-paylines.'
    WHERE identifier = 'bsg:GypsyRose'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Game on! Football season is here. Go for the POWER SHOT and score the winning goal for big prizes in HAT TRICK HERO! With 5 reels, 25 paylines and exciting features, the latest video slot from Betsoft Gaming will put you right in the spotlight of the football field.\r\n\r\nWatch out for the special POWER SHOT WILDS, which substitute for all other symbols. Find 3 or more of them on the reels to trigger the HAT TRICK HERO event! During these rounds, any POWER SHOT WILD symbols will move one reel to the left until they have left the reels, potentially stacking up for immense wins.\r\n\r\nGet ready for your moment of glory! Each time a POWER SHOT symbol exits the reels, it will raise the SCORE METER by one level. Collect more POWER SHOT symbols to trigger more respins. Collect 15 POWER SHOT symbols to fill the SCORE METER, awarding you with an instant 1000x win.'
    WHERE identifier = 'bsg:HatTrickHero'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bank Robber themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:Heist'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Haunted House themed 30 Line 5 Reel Slots3 Game'
    WHERE identifier = 'bsg:HouseOfFun'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Start hauling in the credits with Betsoft''s fresh, fun take on the classic fruit machine format - JUMBOJOKER!This fast paced, brightly-coloured traditional fruit machine will capture and keep your players'' attention as they go for big MYSTERY WINS in the JUMBO METER mode, which offers higher payouts. The JUMBO METER mode becomes active whenever a win of at least 20 coins occurs on the bottom reels. The winnings from the bottom reels are transferred to the JUMBO METER, where they can either be collected immediately, or used to play on the upper reels, which offer higher wagers and higher payouts.In the best fruit machine tradition, JUMBO JOKER offers a taste of classic fruit iconography and retro-styled audios that will be familiar and comfortable, while the exciting gameplay and high definition graphics brings this classic genre into the modern age.JUMBO JOKER offers players a level of control and strategy that sets it apart from other traditional slot games. By choosing when and how to use the JUMBO METER mode, and the higher payouts it offers, JUMBO JOKER rewards players with a compelling gaming experience and tantalizing wins.'
    WHERE identifier = 'bsg:JumboJoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get lost wandering through the lavish jungles in the latest video slot by Betsoft Gaming Jungle Stripes!Make the exotic flowers and leaves tango with exciting features including wilds, scatters and free spins! Theexcitement awaits as you go in search of the majestic Jungle King, who will expand and lock your reels intoplace for free respin action!This 5 reel, 10 fixed payline slot takes you deep inside the wilderness, where the claws of the tiger will bringforward amazing win potential! The thrilling jungle hides all sorts of mysteries, but the Jungle King is the oneyou are looking for. The rumbling growl of the wild animal will easily shake up the calming atmosphere of JungleStripes!While the vibrant nature of the tropical forest sets the mood, wait for the special Moonglow symbols, whichserve as scatters! With glowing lotus flowers and fluorescent mushrooms growing from crystal rocks the junglehas become the magical destination for amazing action and big wins!'
    WHERE identifier = 'bsg:JungleStripes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leap into the purr-fect pastel world of KAWAII KITTY! This innovative 3D video slot pays both ways for maximum chances to win, and features Wild Yarn balls that can expand to fill an entire reel! Join adorable Kitty as she plays with cute toys and wins your heart while you win credits!'
    WHERE identifier = 'bsg:KawaiiKitty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Things are about to get hot in LAVA GOLD – the latest 5×5 grid cluster-based game by Betsoft Gaming! With multiple features, including VOLCANO WILDS, FREE SPINS and CLUSTER WINS, the newest slot provides your players with a rich and vivid experience, both graphically and functionally.LAVA GOLD brings you to a volcanic island, a world of enormous and spine-chilling dinosaurs. Go on a dinosaur egg hunt across the steaming grounds of the archipelago and try not to get caught in the claws of the flying Pterodactyl or the frightening T-Rex! Let the tangles of twigs and leaves guide you to the VOLCANO, which is a WILD symbol!The ground shakes as the LAVA METER fills up and FREE SPINS are awarded. During FREE SPINS mode, the central column of the grid will be made up of an identical symbol, guaranteeing a win! Each FREE SPIN during FREE SPINS mode has a growing multiplier. The first FREE SPIN awards a 1x multiplier on wins, and it progresses from there up to a 10x multipli'
    WHERE identifier = 'bsg:LavaGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Explore the timeless myths of Egypt in LEGEND OF THE NILE, the latest Classic Slots release from Betsoft Gaming! This6x6 cascading slot features cluster pays and exploding wins to build anticipation for the new symbols that cascadein from above.LEGEND OF THE NILE invites players to walk the Trails of the Gods: Isis, Queen of Heaven, Ra of the Sun and Anubis ofthe Underworld. Each of these Gods is represented by a high-value symbol and each winning combination of symbolscontributes to the respective Gods'' trail, with each trail leading to thrilling payouts and features, such as free spins,massive 400x stake payouts, and even a progressive jackpot!'
    WHERE identifier = 'bsg:LegendOfTheNile'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indiana Jones/Egypt themed 30 Line 5 Reel Slot Machine Game'
    WHERE identifier = 'bsg:Lost'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Return to the mysterious pyramids of Egypt with world-renowned archaeologist Dr. Dakota Bones in LOST: MYSTERY CHESTS! In this fascinating sequel to the hit game LOST, your players will go deep beneath sand and stone to discover untold treasures hidden in MYSTERY CHESTS on the reels.\r\n\r\nThis 3-reel, 3-row video slot offers unique mechanics to allow for those MYSTERY CHESTS to open when they land on the reels, revealing what lies within, anything from an instant cash win, high value symbols, WILDS, or SCATTERS symbols that lead to generous FREE SPINS!\r\n\r\nAnd during those FREE SPINS bonus rounds, the MYSTERY CHESTS are guaranteed to appear, offering huge chances to win! Between 3 and 9 MYSTERY CHESTS are possible with each FREE SPIN.'
    WHERE identifier = 'bsg:LostMysteryChests'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Traditional 3 Reel 1 Line Slot Game'
    WHERE identifier = 'bsg:LuckySeven'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mad Scientist themed 30 Line 5 Reel Slots3 GameSequel to one of the original Slots3 Titles: Mad Scientist'
    WHERE identifier = 'bsg:MadderScientist'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As you walk down the dark and narrow alley, you are inexplicably drawn to the mysterious shop on the left. The door creaks and a curtain of old spider-webs parts as you enter THE MAGIC SHOPPE, well known for its occult offerings from places near and far. This new 5 reel, 25 payline true 3D video slot from Betsoft boasts a special feature that allows any free spin to win a prize!'
    WHERE identifier = 'bsg:MagicShoppe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Renowned chef Salvatore welcomes you to his kitchen in Mamma Mia! Take on the role of Salvatore''s Sous-Chef and help him to create wonderful works of culinary art, such as gourmet pizza and panna cotta. But watch out! The cold-hearted food critic, Alberto Ranbomzi, is rumored to visit the restaurant any day now! Will you be able to help Salvatore save the day by helping him to create his perfect dish? Buona Fortuna!'
    WHERE identifier = 'bsg:MammaMia'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What do you get when you mix a video slot machine theme, features everyone loves and the high-end 3D touch only found in Betsoft Gaming products? MEGA GEMS!\r\nMega Gems is five reels and ten lines of lusciously coloured gemstones against a smoothly futuristic backdrop where the lines pay both ways.'
    WHERE identifier = 'bsg:MegaGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'MEGA GLAM LIFE is a gorgeous five reel, twenty line true 3D video slot highlighting the finer things in the world: fast cars, sleek yachts and unimaginable wealth. Boasting three tiered Progressive Jackpots, MEGA GLAM LIFE is rich with features including Scatter Pays and Sticky Wilds. The Jackpots can be won via the exciting Money Wheel Bonus Round, and the Free Spins mode whisks the player away to a tranquil tropical island, with warm sunset hues'
    WHERE identifier = 'bsg:MegaGlamLife'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Miles Bellhouse has been experimenting with Time again! Take a trip of a lifetime and seek out timeless riches with him in this new uniquely crafted 5×5 grid slot by Betsoft where the Past, the Present and the Future provide a new and exciting gameplay experience!\r\n\r\nWith every spin, the game will randomly select 5 positions which may be covered by a winning Cluster at the end of each cascade. The more winning Clusters that cover selected positions, the greater chance to trigger one of the special Time Traveling features!\r\n\r\nJoin the suspense as Miles Bellhouse finds his way through Past, Present and Future, and magnify your wins with time charged wilds'
    WHERE identifier = 'bsg:MilesBellhouseAndtheGearsOftime'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Immerse yourself in the frantic world of MONSTER POP, the latest cluster pays slot by Betsoft Gaming.Collect stacks of monsters, enjoy a variety of features and expand your playing grid to burst your waythrough to AMAZING wins.Featuring eye-popping visuals, MONSTER POP brings fast-paced gameplay with exciting action. Start out your monster adventure with a 5x5 grid that expands with the MONSTER CLONER SYMBOL by duplicating a row, column, or both - and adds WILDS in the mix for extra chances to win!Watch out for special FLAMING SPHERE SYMBOLS, which grant you free spins to keep the action going,with a potential for even more respins. Don''t fret if you don''t get a winning spin, as MONSTER FURY cantrigger at the end of a cascade to create reactions that will spark off big wins!Don''t you dare stop, get ready to MONSTER POP!'
    WHERE identifier = 'bsg:MonsterPop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Those crazy miners are at it again in MORE GOLD DIGGIN'' Join Jeb and Cletus as they mine and blast their way to incredible riches! And it''s not just gold they''re after this time, now there''s Diamonds, Silver, Oil and much more to dig for! This 5 reel 25 line Cascading Reels slot game features gorgeous HD True 3D graphics and a pulse-pounding free spins mode that features up to a 15x mul'
    WHERE identifier = 'bsg:MoreGoldDiggin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the inimitable Mr. Macau for a night on the town in the Las Vegas of the East – Macau! The latest 5 reel, 20 payline video slot by Betsoft Gaming highlights the glitzy and glamorous elements of the entertainment capital of Asia, and encompasses the very essence of gaming.\r\n\r\nMr. Macau is rich with features. The ensemble includes STICKY WILDS, MR. MACAU''S WILD BOOST and TRIPLE 7 FREE SPINS! With every spin without a win, there is a possibility that a random symbol will become STICKY on the reels and award a respin!\r\n\r\nWith the murmur of the crowds under a smooth jazz soundtrack, Mr. Macau whisks the player away to a playground of neon and strobing lights. It''s time to win big and relive those memorable simmering nights spent at luxurious ca'
    WHERE identifier = 'bsg:MrMacau'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the inimitable Mr. Vegas and his beautiful starlet companions for a night on the town in the City of Second Chances! By incorporating the glitzy glamorous elements of the Entertainment Capital of the World into one very spectacular 3D slot game, the ground-breaking Mr. Vegas transcends all player genres and encompasses the very essence of gaming.\r\n\r\nMr. Vegas encompasses the same style that is the hallmark of Slots3 – visually stunning 3D graphics comparable to that of a studio feature film and a dynamic soundtrack all of which combine to provide the most immersive slots gaming experience to players.\r\n\r\nBonus rounds include classic Las Vegas casino games, such as Roulette, the thrilling Money Wheel and a Mini-Slot within a Slo'
    WHERE identifier = 'bsg:MrVegas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a breathtaking journey to the fabled City of Lights, straight into the Museum of Paris – where many priceless works of art are just waiting to be nabbed by the entertaining, yet hapless art thief Jacques.\r\n\r\nWorking to protect the museum from the thefts is the faithful security guard Jerome LaBaste. Accompanied by his trusty canine friend Pierre, they are bound and determined to stymie this villainous larceny and keep the art where it belongs – the mus'
    WHERE identifier = 'bsg:NightInParis'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Oasis Poker is a variant of the classic Caribbean Stud Poker. It holds similarities both to Blackjack and to Video Poker.\r\n\r\nThe player plays against the dealer, independently of other players. Your goal as the player is to beat the dealer''s han'
    WHERE identifier = 'bsg:OasisPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Visit a land of magical enchantment, where kingdoms are the home to Kings and Queens, Jokers and an Ogre?!\r\nIn Betsoft''s newest smash hit OGRE EMPIRE, join the townspeople of a fantasy kingdom with a rather inconvenient Ogre problem! An innovative Day/Night cycle switches up gameplay and allow players to experience what life is like for the people who live in the town.\r\nDuring the day, the Ogre is awake and active while the townsfolk sleep. And it'' no wonder, as the Ogre will occasionally smash stone symbols, offering extra rewards! Once night falls, the Ogre will drift to sleep and the townsfolk emerge from their stone homes. Only appearing on the reels during night mode, they bring with them royal rewards! Higher payouts aren''t the only benefit of night mode: the Joker emerges as well and brings with him merriment and 2x WILD WINS!\r\nThe Joker certainly isn''t the only wild find in this kingdom! Both Day and Night offer a special WILD flower blossom. Watch the magic grow and expand, as each flower blossoms and grows or shoots spores, turning other symbols on the reels WILD!\r\nIn OGRE EMPIRE the struggle is reel and the rewards are nothing short of mythical!'
    WHERE identifier = 'bsg:OgreEmpire'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Once upon a time, in a land far away… There was a 3D Slot Game like never before seen. Where sneaky goblins ran amok, stealing every valuable in sight. Where a brave knight sets off to rescue a beautiful maiden, and where a dangerous, menacing dragon stood in his way! You''re invited to a magical world of fantastic entertainment, when you play Once Upon A Time!\r\n\r\nFeatures\r\nTwo exciting full animation bonus rounds offer amusement and entertainment for the player\r\nWild reels and free spins modes feature exciting, full-screen animation\r\nSave the Princess and be a hero\r\n30 lines results in many ways for your player to'
    WHERE identifier = 'bsg:OnceUponATime'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In an old town south of the border, overrun with despair and depression… Only one man can set things right again. TIME FOR FIESTA!\r\n\r\nJoin Paco and his charming salsa friends in this fun and exciting cascading reels slot machin'
    WHERE identifier = 'bsg:PacoAndThePoppingPeppers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Table Poker'
    WHERE identifier = 'bsg:PaiGow'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'PINOCCHIO features multiple game levels offering unique features including: Fairy Re-Spins, Pinocchio Wandering Wilds and much more! Travel to School and find the Scatter Wild Books or to the Stage and discover the Dancing Wild reel. When in secondary worlds, all wins are doubled!'
    WHERE identifier = 'bsg:Pinocchio'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pirate 21 is an exciting multi-hand Blackjack that allows you to play up to 3 simultaneous hands of Blackjack.\r\n\r\nEach hand plays only against the dealer (i.e. the bank), independently of other hands. Six (6) Spanish decks of cards are used to play. A Spanish deck contains no 10s. Your goal as the player is to draw cards (i.e. hit) until your hand adds up to 21, or comes as close as possible without exceeding 21. If your first two cards total 21, you have Blackjack.'
    WHERE identifier = 'bsg:Pirate21'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pontoon is an exciting multi-hand Blackjack that allows you to play up to 3 simultaneous hands of Blackjack.\r\n\r\nEach hand plays only against the dealer (i.e. the bank), independently of other hands. Eight (8) decks of cards are used to play. Your goal as the player is to draw cards (i.e. hit) until your hand adds up to 21, or comes as close as possible without exceeding 21. If your first two cards total 21, you have Blackjack.\r\n\r\nAdditionally, if you get a "pontoon” which is a 5 card hand that has not busted, it will also count as a '
    WHERE identifier = 'bsg:Pontoon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With multiplying multipliers, Free Spins, and\r\nmore, Primal Hunt takes you back to the lands of\r\nthe ice age, when the Cave Lion ruled the earth.'
    WHERE identifier = 'bsg:PrimalHunt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Come on down to the Puppy Store and see what breed of dog will be the perfect pooch to make a part of your lucky family!\r\n\r\nThis video slot machine offers Free Spins, Wilds and Scatters! You can also browse and buy your perfect puppy in the Puppy Store Bonus Round.'
    WHERE identifier = 'bsg:PuppyLovePlus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for an adventure of a lifetime. Follow the path of the Monkey King as you journey to lands unknown to discover riches of the West. Enjoy a classic Eastern Asian themed video slot with 5-reels,\r\n\r\n25 paylines, plenty of WILDS, free respins and a chance to instantly win x1000!'
    WHERE identifier = 'bsg:QuesttotheWest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Red Dog, a simple but exciting, fast-paced card game. The dealer will deal 2 cards. If the 2 cards are of the same value, a 3rd cart is dealt. If the result is a tie, it results in a push. If the result is a 3 of a kind, you will win 11 to 1. Otherwise, you will be prompted to ride or stand, based on whether or not you believe the 3rd card will fall in between the values of the previous 2 cards.'
    WHERE identifier = 'bsg:RedDog'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cash in on one of the most exciting new BIG WIN games of 2018 with Reels of Wealth. In this jewel toned, multi-feature new gem from Betsoft Gaming, players try their luck to earn the payday of a lifetime with the innovative new Megastar Jackpot mini game.\r\n\r\nThe game itself is built on a "Rolling Wins” platform, awarding players a re-spin every time they win. Compounding the excitement of those free re-spins is the Rolling Wins multiplier, which can award up to three times the payout of a standard win, depending on the number of respins the player has already triggered. In addition to that, instead of a standard wild, Reels of Wealth uses an opulent multiplier wild, which will stack with other wilds for even BIGGER wins. Players also enjoy the luxury of not one but TWO scatter icons. One, the Vault of Wealth, pays immediately. The other – the MEGASTAR JACKPOT symbol -pays players in a much richer fashion.\r\n\r\nWhen 3 or more MEGASTAR JACKPOT symbols appear anywhere on the reels the Megastar Jackpot mini-game . The reels change to the special Megastar Jackpot symbols surrounding players with gold and jewels worthy of such a momentous event. Utilizing the proprietary new "Trail System”, the Megastar Jackpot Feature allows players to collect special Jackpot symbols during Free Spins in an attempt to earn one of FOUR incredible jackpots. As the special jackpot symbols fall into place they EXPLODE, allowing other symbols to cascade onto the reels, and advancing their specific Jackpot trail. The Jackpots vary in size, from HERO to STAR to LEGEND to MEGASTAR, each requiring a different number of symbols to reach the GRAND PRIZE. Reels of Wealth gives players so many ways to win, they can bet on a rewarding experience, one way or anot'
    WHERE identifier = 'bsg:ReelsofWealth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Paris, there is a museum that holds the world''s treasures. When night falls, these treasures becomevulnerable to the sticky fingers of a notorious Thief, who is crafty and makes off with a treasure each time he visits the museum. But the chase is on - the museum''s Cop is hot on the Thief''s trail!When the Thief and the Cop land adjacently on the reels, a Wild Explosion is triggered, turning all surroundingsymbols to WILDS!The clever game of cat and mouse is played out on the reels, in a constant cycle of steal and return betweenthe Thief and the Cop. When 3 MONA LISA SCATTERS occur on the reels, the open-ended FREE SPINS modebegins, and your players can experience up to 1000 FREE SPINS as the Cop chases the Thief all around thereels! The Cop is always one step closer to his clever quarry.This sequel to our smash hit A NIGHT IN PARIS will have your players glued to their devices, watching theantics of the wily Thief and dedicated Cop '
    WHERE identifier = 'bsg:ReturntoParis'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'I was born to rock\r\nEverybody knows that it''s true\r\nI hear people talk\r\nThey say that I rock, and I do!\r\n‘Cause I''m a rock star, baby\r\nI rule the world with my guitar\r\nAnd people love me\r\nOh, because I''m a r'
    WHERE identifier = 'bsg:RockStar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Everyone''s favorite Aztec Chief, Rook, is at it again in this amazing 5 reel, 25 line Cascading Reels slot machine. Journey into the heart of the rainforest and the hidden treasure vault in the Rook''s Revenge Free Spins Mode! Riches beyond imagination are waiting for you, with cascading wins that award up to a 15x multiplier during Free Sp'
    WHERE identifier = 'bsg:RooksRevenge'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'SAFARI SAM is a breathtaking five reel, thirty line video slot, bursting with exciting elements such as frequent free spins and a zany bonus round that will leave you thirsting for more adventure!'
    WHERE identifier = 'bsg:SafariSam'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Safari Sam is back! Get ready to go on a safari journey with Sam & Pam for stacked wins, wilds & more! SAFARI\r\nSAM 2 is the latest 5 reel, 50 payline video slot by Betsoft Gaming, bursting with exciting features that will leave\r\nyou craving more adventure!\r\nIt''s time to pack your bags and take a trip to the untamed lands of the savannah for a breathtaking expedition,\r\nwhere things can get a little WILD! Follow the compass to the CALL OF THE WILDS while sightseeing the majestic\r\nanimals in their natural habitat!\r\nAs Sam & Pam guide you through the sun-drenched African Savannah, watch out for ACACIA TREE symbols -\r\n3 or more acacia scatters will trigger FREE SPINS feature, where you can win up to 20 FREE SPINS straight from\r\nthe start! With the addition of SAFARI STACKS, there are some truly flaming wins to score'
    WHERE identifier = 'bsg:SafariSam2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Relive those memorable simmering nights spent in the City of Sin with SIN CITY NIGHTS!\r\nThe big bright lights of Las Vegas are brought to you under a pure funk soundtrack in this explosive cascading reels 3D video slot. All sinners welcome.\r\nIt''s time to win big and enjoy your time in SIN CITY NIGHT'
    WHERE identifier = 'bsg:SinCityNights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to multi-hand Single Deck Blackjack.\r\n\r\nThis variant is played with a single deck of cards, unlike standard Blackjack, which is played with 6 decks. Each player plays only against the dealer (i.e. the bank), independently of other players. Your goal as the player is to draw cards (i.e. hit) until your hand adds up to 21, or comes as close as possible without exceeding 21.\r\n\r\nIf your first two cards total 21, you have Blackjack!'
    WHERE identifier = 'bsg:SingleDeckBlackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'I''ll offer them a jackpot they can''t refuse… The Infamous words spoken by The Slotfather, the secret underworld Boss of all slots, big and small. The one man that holds all the strings, controlling an organized syndicate of slots stretching across the city and beyond… that man is The Sl'
    WHERE identifier = 'bsg:Slotfather'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Slotfather is back with all his henchmen – including Snake Eyes Sammy, Frankie "Knuckles” and Fat Tony – in this exciting, any-way-pays sequel to THE SLOTFATHER PART II! The dark and seedy crime underworld comes to life in gorgeous high definition animations and graphics. This is the Slotfather''s world, and you''re a part of his family now!\r\n\r\nWith Tall symbols, Gangster Respins for a second chance at the bonus round, Free Spins and the Big Boss Feature Bonus Round, this game will have you doing the rolling in the dough badda-bing,'
    WHERE identifier = 'bsg:Slotfather2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ridin'' down the highway, Feelin'' like a king, On my way to winnin''… Winnin'' everything. I can feel it inside me, I can feel it a lot, Very soon I''ll be playin'', Playin'' some slots!\r\nWere you Born to Spin? Then come join the notorious biker gang, the "Slots Angels” as they cruise the desert in search of the big Progressive Jackpot! As an honorary member, you''llÂ have the honor of hanging out with the rest of the gang at their favorite dive bar, and cheer them on as they race across'
    WHERE identifier = 'bsg:SlotsAngels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When crime plagues the streets of Metropolis, SPINFINITY MAN will answer the call! With the help of amazing wild symbols, an arsenal of superpowers and the evil Mr. X to fight against, SPINFINITY MAN is here to become the saviour of the city!A fun and frivolous take on the golden age of superhero comics, SPINFINITY MAN is a cluster-based, cascading game where groups of more than 4 of the same symbols explode to form winning combinations. SPINFINITY MAN''s randomly-chosen powers are drawn as animated 2×2 symbols – triggering new cascades and launching an avalanche of big wins. Laser eye beams burn away either a full column or a full row of symbols, or both if you find a double beam. Icy breath can freeze and shatter a small or large cluster of symbols. Telepathy will remove all symbols of a single type or colour.With his face on every newspaper in town, SPINFINITY MAN has more than his share of admirers. Everywhere he goes – from base game to free spins feature – his dedicated fangirl follows, hopipicture with her idol. When she snaps a photo, a cluster of symbols will pop and trigger an immediate cascade. The fangirl cluster count resets with every new spin – giving SPINFINITY MAN the chance to prove himself (and pose for more selfies) all over again.While solving street-level crime is all in a day''s work for SPINFINITY MAN, a more insidious evil is encroaching on the city! Super villain Mr. X is developing his next dastardly master plan. It''s up to our hero to follow the clues, fill a dedicated Mr. X meter, and catch him red-handed in a city-shaking bonus round! Here the two super humans go head-to-head, but Mr. X has an advantage: he''s replaced all SPINFINITY MAN''s power symbols with his own and increased the odds of them appearing. Get ready for the blockbuster of the summer in SPINF'
    WHERE identifier = 'bsg:SpinfinityMan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Celebrate the Year of the Rat in style and experience bountiful fun in SPRING TAILS, the new video slot from Betsoft Gaming. An adorable rat character will guide you through an experience that includes stacking multipliers & an exciting FREE SPINS MODE!A new year brings prosperity and luck, and there''s plenty to be found in SPRING TAILS. Enjoy theLUCKY RAT MULTIPLIER WILDS, which can appear on reels 2, 3, and 4. Put some spring in your step, as multipliers can stack, which can add up to a total multiplier of 60x, bringing you super wins.If that wasn''t enough, the GOLDEN KEY symbol can appear anywhere on the reels, which will triggera free spins mode. 12 free spins, MEGA potential, as all low-value symbols will be removed for theduration of the mode.Start off your new year right with the blessing of the rat in SPRING TAILS!'
    WHERE identifier = 'bsg:SpringTails'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Slip into the magic of the reels with Stacked, the latest 4 reel, 20 fixed payline video slot by Betsoft Gaming.The Magician has many tricks and secrets up his sleeve, so keep your eye on him! Featuring a variety offeatures and a dynamic free spins mode, there is plenty of fun to be had!Enjoy the show as the Magician fixes the reels in your favor and lets you look into the Mystery Boxes,which will reward you with FREE SPINS! The deck flips and all reel spots get turned upside down. Before theFREE SPINS mode begins, you will be able to choose your spots on the reels that award unique effects.Powerful magical effects are lurking beneath these spots, if you dare to explore them. Look out for the specialattributes that can enhance your FREE SPINS mode! These attributes can stack and occur together during FREESPINS. Don''t tell anyone. It''s a secret!'
    WHERE identifier = 'bsg:Stacked'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a trip to the sun-drenched African savannah with STAMPEDE, the newest Classic Slot brought to youby Betsoft Gaming.This all-ways-pay slot machine offers 1024 ways to win and a beautiful art style, that evoking the highgrasses and spreading acacia trees of the African plain. The warm palette suggests the heat of thesavannah in summer, where the majestic elephant herds rule supreme, accompanied by other icon Africanwildlife such as giraffes, gazelles and zebras.The top value Elephant symbols dominate the reels, and when they Stampede the players win big! With theaddition of x3 Wilds in Free Spins, there are some truly mammoth wins to excite your players.'
    WHERE identifier = 'bsg:Stampede'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Celebrate the holiday season with a warm mug of cocoa and STAY FROSTY! This 5-reel, 100 payline video slot is bursting with holiday cheer and innovative Sticky WILDS that stay Stickyw for 2 spins when part of a winning combination! The Snowman symbol is WILD and varies in size from small to tall!'
    WHERE identifier = 'bsg:StayFrosty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indulge in the reinvention of Sugar Pop, one of Betsoft''s most popular games. In this incredible sequel, embrace all that was beloved about the original, with cluster wins and candies that explode in a cascade, allowing for additional wins. Revisit the enticing bright colors and welcoming, fluffy, cloud-like dreamland that is the setting of Sugar Pop. But don''t get too comfortable, because things are about to change. In Sugar Pop 2: Double Dipped, everything has been reinvented, from leveling to the candies themselves.The difference is noticeable right away, as the special candies no longer just appear on the board, but instead come onto the board in a giant chocolate surprise egg! Some of the old favorites get a slight functional makeover, like the caramel chew that now removes all candies of a specific color from the board. But the real highlights to the special candies are the new additions. A Morphing Golden Wild candy will shift and change shape to match any candy near it. The Jelly Bean Cannon firelly Beans into the air, taking out any candies they land on, and the Sweet Hammer slams the board taking out all candies in its way.Beyond the special candies are new mechanics behind the cluster wins. Clusters of the special Free Spin candy now trigger Free Spins, while large clusters resolve leaving a WILD on the board to allow for further wins. When more than five clusters resolve in a turn, a Candy BOMB will be left behind to clear a large portion of the board, and result in massive wins.Sugar Pop 2 isn''t just about the individual spin, but, like the original, allows players to level up from spin to spin. Every few levels, a new candy is unlocked and adds to the player''s special candy list, while increasing player enjoyment. Unlike the original, each new level comes with rewards befitting the prestige of leveling up! Also, unlike the original, Sugar Pop 2 has no level cap! With this sweet sequel the fun never has to '
    WHERE identifier = 'bsg:SugarPop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indulge in the reinvention of Sugar Pop, one of Betsoft''s most popular games. In this incredible sequel, embrace all that was beloved about the original, with cluster wins and candies that explode in a cascade, allowing for additional wins. Revisit the enticing bright colors and welcoming, fluffy, cloud-like dreamland that is the setting of Sugar Pop. But don''t get too comfortable, because things are about to change. In Sugar Pop 2: Double Dipped, everything has been reinvented, from leveling to the candies themselves.'
    WHERE identifier = 'bsg:SugarPop2DoubleDipped'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Super 7 Blackjack is an exciting multi-hand Blackjack that allows you to play up to 3 simultaneous hands of Blackjack. Each hand plays only against the dealer (i.e. the bank), independently of other hands. Six (6) decks of cards are used to play. Your goal as the player is to draw cards (i.e. hit) until your hand adds up to 21, or comes as close as possible without exceeding 21. If your first two cards total 21, you have Blackjack.Sidebets: The Super 7 bonus side game gives you the chance to win up to an additional 5000.00 depending on what cards you receive.'
    WHERE identifier = 'bsg:Super7Blackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get your sweet tooth on and get ready for some big wins in SUPER SWEETS, the delicious video slot from Betsoft Gaming. Enjoy a scrumptious 5x3 experience with delightful visuals, sticky wild re-spins and an action-packed free spins mode.Sink your teeth in a variety of candies and chocolates as you spin your way to the top. Scoop up a serving of SUPER STICKY WILDS that appear on the reels and trigger a single free re-spin, chain them up, collect golden tickets & power your way to the GOLDEN TICKET FREE SPINS.A SUPER SWEETS CANDY SURPRISE can appear at any time on reels 2, 3 and 4, which can give youeither a re-spin or a ticket to the bonus rounds. Who knows what surprises await?Satisfy your sweet tooth and enjoy sweet, sweet wins on SUPER SWEETS!'
    WHERE identifier = 'bsg:SuperSweets'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare to face the ancient deities of Greece in TAKE OLYMPUS, the newest 5 reel, 50 payline video slot byBetsoft Gaming! This visually stunning game cycles through four Olympian Gods - Apollo, Aphrodite, Poseidon,and Hades. Each God has their own special powers, which will lead you to eternal rewards!Take on the powers of the other Gods alongside the Mighty King of the Gods - Zeus! The ruler of Mount Olympus,Zeus, in any configuration, is WILD. When he appears in a 4-symbol tall configuration, he will award the player10 FREE SPINS, if all 4 other Gods are also present on the reels!Join the Master of all Tides :Poseidon, the God of Light - Apollo, Lord of the Underworld - Hades and theGoddess of Love - Aphrodite, and get a taste of the cherished immortality. Every 10 spins, the endless cycle ofthe Gods turns, bringing new powers with each new God! Multipliers, wilds, and more await you on Olympus!'
    WHERE identifier = 'bsg:TakeOlympus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for holiday fun with Betsoft''s latest video slot Take Santa''s Shop! Are you ready to be the villain andhelp the Holiday Robber? With snowflakes falling across the reels, bells jingling and Ornament Bombs turninginto Wilds, the festive season has never been more exciting!This special progression game is played in rounds of 10 - with every spin, an Ornament Bomb Counter countsdown from 10 to 0, making all the bombs detonate for even larger possible wins! Buckle up for the biggest heistof the Christmas season and look out for Santa''s Sleigh symbols landing on the reels - that will award you 15Free Spins to escape with!'
    WHERE identifier = 'bsg:TakeSantasShop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you ready for the heist of a lifetime? Welcome to TAKE THE BANK, a fast-paced slot with big, big payouts. Rob the bank and run away with the goods in an exciting adventure with sticky wilds bonus rounds and superb potential!5 reels, 75 paylines, but unlimited is to be had. Watch out for the HEIST SPINS every spin brings you closer to a bomb explosion. Collect robbers on the reels and every 10 spins they will turn into a WILD symbol, busting the vaults wide open.Keep your eyes peeled for the police, as 3 bonus symbols will trigger the FREE SPINS. Catch the handful of wilds running around during the robbery and participate in the heist of a lifetime.TAKE THE BANK is fast, explosive, and ready to bring out the big wins.Break the vaults and win big in TAKE THE BANK!'
    WHERE identifier = 'bsg:TakeTheBank'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'TAKE THE KINGDOM is played in 7-spin increments and features a massive red dragon who breathes on the reels, leaving fireball bombs that count down over the 7 spins until they explode! All fireball positions are then converted into WILDS!'
    WHERE identifier = 'bsg:TakeTheKingdom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover a lush jungle paradise where the scent of fruit is heavy in the misty air. THAI BLOSSOMS, the latest Betsoft video slot, offers a gorgeous thematic backdrop of Southeast Asia. Luxuriate in a tropical wonderland as you play this exciting new game.\r\nThis 5-reel, 100 payline video slot features stacking WILDS that stay Sticky for 2 spins when occurring on a winning payline. The grand elephant, lord of the fragrant jungle, trumpets triumph in groups of 3 or more, granting access to a generous FREE SPINS mode where the stacking WILDS remain Sticky and persist until the end of the bonus round.'
    WHERE identifier = 'bsg:ThaiBlossoms'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Journey to ancient Greece and unlock the secret of great reward with the Golden Owl of Athena. In this visually stunning 3x5 classic slot, The Golden Owl is the key. Harnessing the wisdom of the ages, Athena''s Owl offers up to 20 Free Spins. However, as a wellspring of knowledge, the Golden Owl offers more thanjust Free Spins. This majestic creature also awards Scatter wins and acts as Wild for all other symbols on the reels.The will of Athena takes over during Free Spins and anoints a single symbol at random. Should that symbol be scattered along the reels during Free Spins, the symbols will expand to fill the reel, awarding bonus wins. Follow the Golden Owl and she will lead to eternal reward in The Golden Owl of Athena.'
    WHERE identifier = 'bsg:TheGoldenOwlofAthena'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the sweet world of The Hive, a unique hexagonal grid video slot by Betsoft. Kick off your summer with a fun cast of bee characters, each with their unique twist on the gameplay that will create fun and memorable playing sessions. Discover all the features and enjoy a buzzingly awesome free spins mode while you fly to the riches.'
    WHERE identifier = 'bsg:TheHive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get enchanted with the luminous wonders of the MYSTIC HIVE, the latest hexagonal grid video slot by Betsoft. Collect the magical nectar while fireflies dazzle around and help you by summoning storms and awarding multipliers!With every spin, the fireflies move clockwise around the grid, increasing the chances of filling the NECTAR METER. When the NECTAR METER is full, 5 FREE SPINS are awarded! Mystic fireflies of any type can spawn randomly with every spin.During FREE SPINS, 1, 2 or 3 Nectar Burst spreading WILDS will appear on the Mystic Hive Grid! WILDS will spread from their initial place on the grid to adjacent honeycomb cells after every spin, and will continue to spread to other cells until the end of the FREE SPINS!Delve into a world glimmering with tiny sparks of wondrous light and enjoy the MYSTIC HIVE!'
    WHERE identifier = 'bsg:TheMysticHive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to THREE CARD RUMMY!An exciting single deck poker variant table game based on hands consisting of three cards.All cards are ranked according to their poker value, except aces are always low.The object is to have fewer points than the dealer.'
    WHERE identifier = 'bsg:ThreeCardRummy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who doesn''t like a good Genie, especially one that grants you THREE WISHES? But what will you choose… and endless amount of Wealth and Fortune? Fame beyond your wildest dreams? Or is it true, undying and passionate Love you seek? Don''t fret; the good Genie will grant them all once you find him!\r\n\r\nFeatures:\r\n– Choose between Fame, Wealth and Love in the 3 Wishes bonus round!\r\n– Monkey Click Me features interactive monkey who helps win instant credits\r\n– Free Spins Chest and special Magic Carpet features add excitement to the main game\r\n– Amazing animation brings the Genie and his'
    WHERE identifier = 'bsg:ThreeWishes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get swept away in the mystical world of Tiger''s Claw. In this fantasy excursion players spin the reels of the popular 3, 4, 5, 4, 3 slot that pays both left to right and right to left. Spiritual Shaman guides appear across the reels leading\r\nplayers to scatter wins.\r\nIf the glorious Tiger''s Claw grasping a glowing orb can be found on every reel, Free Spins are triggered. For each combination of 5 Claws, more Free Spins are added, up to 98 in a single spin! Free Spins don''t only earn players big\r\nprizes, but more Free Spins as well. Retrigger with the golden Tiger''s Claw for up to 240 total Free Spins!\r\nWith 720 ways to win, the opportunity for numerous Free Spins, and a mystical appeal, Tiger''s Claw will reach out and grab players, while they grab fantastic rewards! '
    WHERE identifier = 'bsg:TigersClaw'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'THE TIPSY TOURIST brings you into the world of Gary, a hardworking fellow who sets off on a fabulous late summer holiday to beautiful Miami, Florida. Gary guides you on the reels through many exciting bonus features, such as the Double Up Mini Game, where you can increase any standard win when you choose the right card! The Free Spins mode and Scatter Pays offer many chances to win, and you can join Gary himself in a drinking contest in the interactive Bonus Round'
    WHERE identifier = 'bsg:TipsyTourist'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Top Card Trumps, an exciting fast paced card game much like the game you played as a child, only now you play against the dealer.\r\n\r\nThe game is very simple: Whoever has the highest card wins. All hands are played separately versus the Dealer.'
    WHERE identifier = 'bsg:TopCardTrumps'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ride a cool rush into a world of neon electronica with this 3 reel, 5 payline video slot. With fresh designs of cherries, bells, diamonds, bars, and 7s, this update of the classic fruit machine with awesome laser effects and a driving soundtrack is sure to inspire nostalgia.The heart of TOTAL OVERDRIVE is the Overdrive Multiplier. Every winning spin will increase themultiplier, and the multiplier will continue to increase with consecutive winning spins. Watch the electric filaments build in intensity with each multiplied win!But it doesn''t end there. The Overdrive Multiplier can also become Sticky. This means it will hold in place for a duration of spins, even if there are no more consecutive wins. The Overdrive Multiplier holdcan even re-trigger while active, pushing the multiplier level and win potential into real overdrive!'
    WHERE identifier = 'bsg:TotalOverdrive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the TOWER OF FORTUNA, where the Goddess of Luck, Fortuna, rules with a fair hand.\r\nThis 3-reel, 5 payline game features revolutionary tower-climbing mechanics, taking your player on\r\na journey up endless levels of the tower every time they lose a spin.\r\nBut because Fortuna is fair, she increases a multiplier with every losing spin that is then applied to\r\nthe player''s eventual winning spin, returning them to the first level of the tower again.\r\nFortuna gives and takes in a cycle that is beautifully represented in this unique slot, quite unlike any\r\ngame availabl'
    WHERE identifier = 'bsg:TowerofFortuna'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buried deep inside a cavern hundreds of years ago was gold, riches and wealth incomprehensible unless actually seen.Â It seems like miles and miles of treasure chests, gold bars, priceless coins, statues, rubies and emeralds are finally discovered, and now rightfully yours.\r\n\r\nFeatures:\r\n– 5 jackpot symbols on max bet wins the JACKPOT!\r\n– Sword and Shield instant bonus can award up to 550 credits!\r\n– 3 scattered bonus feature symbols awards second screen bonus round\r\n– Players can earn bonus prizes in the Rare Treasure bo'
    WHERE identifier = 'bsg:TreasureRoom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Triple Edge Poker, an exciting single deck poker table game based on hands consisting of three cards.In fact, Triple Edge Poker is two games in one!Pair Plus, Triple Edge Poker''s side bet, allows you to win even more money per han'
    WHERE identifier = 'bsg:TripleEdgePoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will your players take home the Large, Grand, or Massive Prize from TRIPLE JUICY DROPS? This 5×5 gridbased cascading reels video slot will have them collecting colorful symbols for a chance at one of the three PRIZE WHEELS in the game. With generous WILDS in standard play, TRIPLE JUICY DROPS is a fast paced game with the potential for huge rewards!'
    WHERE identifier = 'bsg:TripleJuicyDrops'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the world of magic, nothing is what it seems. You keep telling yourself it''s only a trick, but is it? There can only one explaination… it''s MAGIC!\r\nThe higher the risk, the more entertaining the show. Join our fearless magician and his beautiful assistant in TRUE ILLUSIONS.\r\n\r\n– Experience TRUE cinematic 3D with full screen camera animation!\r\n– Watch the credits fly during the cascading free spins feature\r\n– Enjoy the show with an interactive card trick '
    WHERE identifier = 'bsg:TrueIllusions'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Villainy has come to the quiet Old West town of High Noon. The people are afraid and the riches of the saloon are in the robber''s sights. Only one man can stand between them. Only one man can set the wrongs to rights and bring justice to the dangerous criminal – THE TRUE SHERIFF from BETSOFT GAM'
    WHERE identifier = 'bsg:TrueSheriff'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In a world reserved for the wealthiest of the wealthy, a world invisible to everyone but the highest echelon, they play a game where the stakes are infinitely high..Only members of the elite Billionaire''s Club are welcom'
    WHERE identifier = 'bsg:TycoonsPlus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jessie and Jane have been left home alone, in the dark. What monsters lurk there, in the deep shadows of the night? A rustle, a thump, a clank… there could be anything at all lurking UNDER THE BED. With an exciting new STICKING WILD feature, free spins mode and cinematic second screen bonus round, UNDER THE BED is another top-of-the-line slot machine from Betsoft Gami'
    WHERE identifier = 'bsg:UnderTheBed'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Far beneath the clear, shining sea is a coral reef wonderland, teeming with life. Framed by delicately undulating fronds of kelp, brilliantly coloured tropical fish dart about in attendance to the lovely mermaid who guards the treasures here. Will you discover that rarest of oysters, bearing a flawless pearl? The sea''s mysterious bounties are there for the taking when you dive down deep Under the Se'
    WHERE identifier = 'bsg:UnderTheSea'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join Amma as she explores the secrets held within the reels including instant free creates and cinematic camera movement IN GAME! Be part of the action with this exciting 5-Reel video slot.. Only from Betsoft Gaming.'
    WHERE identifier = 'bsg:VikingAge'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The soothsayers spoke of great riches across the sea, so the Golden King has gathered his most loyal warriors on their greatest expedition to date. Polish your axe, push out the longboats, and prepare to go looting when VIKING VOYAGE sets sail this spring! Steeped in Scandinavian lore, the reels of VIKING VOYAGE are loaded with royals, runes, and other symbols that spell good fortune for your band of intrepid adventurers: horned helmets, battle-worn axes, golden goblets plundered on past voyages, and god-sent guardians in the form of Odin''s watchful ravens. Joining the Golden King on his fateful voyage are a grizzled village elder, two hardened fighters, and a feisty\r\nshieldmaiden  all high-paying symbols, and all ready to follow their king to explore new shores in search of untold treasures.\r\nThe Golden King himself has descended from his throne to lead his people, and he stands proud on reels 1-4 in stacks of up to 3, using his warrior''s instincts to stand in for any other symbol  including the raven scatter. When the King appears in a full-height stack, he bellows a battle cry, freezing that reel in place and shaking the earth so that all other reels spin again. And if another full stack appears during that spin, the King will command that reel to lock, too, before a further respin.\r\nA special longboat symbol appears only on reels 1 and 5, with shields mounted along its sides, ready to take to the water. When one longboat appears, the drums begin to sound, and if another appears in the same spin, the Vikings being their raid over fifteen free spins!'
    WHERE identifier = 'bsg:VikingVoyage'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'VIP version of American Roulette. Same as base game, just fancier graphics and higher limits.'
    WHERE identifier = 'bsg:VipAmericanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'VIP variant of the standard European Roulette game. Features slightly different graphics, and higher limits. Base game is exactly the same.'
    WHERE identifier = 'bsg:VipEuropeanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join three unlucky companions as they travel the Nevada desert to Las Vegas, City of Second Chances!\r\n\r\nWith free spins, money wheels, reel re-spins for additional chances at the bonus round and a hot stop on the Vegas Strip for some good ol'' gambling, this true 3D cinematic video slot brings the bright lights of Vegas right to the comfort of your hom'
    WHERE identifier = 'bsg:WeekendInVegas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Far below the surface of the Earth, there is a prismatic fortune waiting to be found by an explorer bothbrave and bold. Welcome to Wild Drops, the latest video slot by Betsoft. An endless treasure trove ofsparkling gemstones in the mystical mines await you!This 5-reel, 16 fixed payline (8 rows which pay both ways) slot is a visual feast in the popular gemmatching genre. Appealing colours framed by the sweeping deep blues of the mine make every win pop.Winning gems match and disappear from the reels. Clear the entire board to multiply your wins!Drill deep, and match 3 or more identical gems in a horizontal line for a win. Five of a kind on any rowpays both ways! And as wins clear the board, players have a chance to uncover 5 hidden coins to earn5 FREE SPINS. The FREE SPINS mode will take players even deeper into the mines, where the central reel is guaranteed to be fully WILD!'
    WHERE identifier = 'bsg:WildDrops'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dream big, win big. Enter the mystical lands of Wolf Moon Rising and explore a slot filled to the brim with exciting action & a potential of up to 20000x, as well as a lucrative bonus game that pays both ways and DOUBLES your wins.Featuring classic Betsoft slots gameplay mixed up with the big win capability that players desire, Wolf Moon Rising has several exciting features. Collect the FEATHER TALISMANS to trigger 12 free spins them up for a chance at amazing wins.Watch for special symbols that will guide you to fortune. The WOLF MOON symbol can appear on any reel and will award an INSTANT WIN. More symbols equal more wins. The game also features a wild mechanic to make for some intense wins. Exciting ways to win in the newest release by Betsoft!Unleash your feral spirit in WOLF MOON RISING!'
    WHERE identifier = 'bsg:WolfMoonRising'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Built around Betsoft''s proprietary trail system, Yak, Yeti & Roll sees an eccentric Inuit inventor and his faithful yeti sidekick forging a steady path across the icy plains of the Arctic. But while the reels are packed with standard seasonal symbols like igloos and yetis, Yak the Eskimo has redesigned the traditional reindeer-driven sled to traverse the snow in style. From his perch he points the way, while his Yeti pal uses pedal power to propel them forwards.Every time a cascade triggers, the spiked wheels of the snowmobile gain traction, and the unlikely pair advance even further along the trail, unearthing frozen treasures as they go. These range from instant payouts to cumulative multipliers that apply to the next cascade win.Free spins is where the payouts really start to snowball\\; players can pile up huge reserves of free spins, add free-spin-specific multipliers to these, and then also apply cascade multipliers to quickly turn a small win into an earth-shaking avalanche!'
    WHERE identifier = 'bsg:YakYetiRoll'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Zoom Roulette is a simple game that gives players the chance to win big.Our roulette is based on standard European standard single zero roulette, according to the standard rules of the Nevada gaming commission.Zoom Roulette features a stunningly rendered presentation of this classic game in a modern, easy to play format with pre-configured popular betting templates such as Orphelins and Zero bets.'
    WHERE identifier = 'bsg:ZoomRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you ready for an eerie plot twist? The sun is shining and birds are chirping. Step into a joyful town to meet the lovely town folk who have no idea that 100 Zombies are about to disrupt their lives forever. Welcome to the beginning of the end – the zombie apocalypse. A world where local scientists wanted to cure people of their illnesses but instead, accidentally turned them into cunning and vicious zombies. This thrilling slot transports the players into a world of complete shock, adrenaline, and uncertainty as they must cling on to their shotguns to defend themselves and friends. These creatures of the living dead do not rest. They will not stop. And they are comin'
    WHERE identifier = 'endorphina:endorphina2_100Zombies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Streak 1 is the first game to be released from the planned sequel of these classic fruity games. Players can expect nothing less than a classic fruit theme with beautiful designs and a notable classic feel from this 5-reel, 4-row and 40-line game. All symbols are fine-tuned with a bright glossy finish, ready to ignite on fire for you once you hit that winning combination!'
    WHERE identifier = 'endorphina:endorphina2_1LuckyStreak'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This is the very first slot of our Lucky Dice series, made to encapsulate everything you''re familiar with about classic dice and a classic game. However, when the two classics are already untouchable, we decided to put a different spin on things – the addition of Chinese symbols to bring you additional luck right when you need it most. In our Lucky Dice game, you can come across lucky characters like the fierce dragon, bold tiger, and the experienced banker – all set to cater to your luck if you ha'
    WHERE identifier = 'endorphina:endorphina2_1LuckyStreakDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The main event of 2016, the Games took place in Rio de Janeiro. Not everyone could become part of the Games, as a participant or an audience but you can enjoy the atmosphere thanks to our slot game and maybe win yourself some money while waiting for the opening ceremony! Be prepared to run your race on the reels and enjoy your win with Endorphina! This slot´s symbols feature some of the most appealing olympic sports like Football, Basketball, Volleyball, Swimming etc'
    WHERE identifier = 'endorphina:endorphina2_2016Gladiators'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When was the last time you rewarded yourself with the taste of sweet victory? Have you been craving some glorious wins from a one-of-a-kind hit slot? Luckily for you, our 2020 HIT SLOT is nothing less than a game for champions. With some persistence, you can experience your daily hit of endorphins and huge wins as you quickly climb up the ranks towards ultimate success. As this slot is a total hit, use this chance to hold the prestigious golden cup in your hands while you can!'
    WHERE identifier = 'endorphina:endorphina2_2020HitSlot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dare to handle the heat in our NEW Hell Hot 100! It''s time to ignite flames of adventure as long as you can take the heat. Endorphina presents its fiery, new game Hell Hot 100 that''s sizzling with excitement and flair. This wicked slot will bring out the best and worst in every player who dares to get close enough to our fire. With a fine balance between diplomacy and intrigue among the demons in hell, a rush of twisted luck may rub off on you too! This radically new classic is polished in crisp designs to fuel our very own Hell Hot 100, featuring explosive graphics of hot and spicy fruit symb'
    WHERE identifier = 'endorphina:endorphina2_2021HitSlot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game has 5 reels, 3 rows, and 22 fixed pay lines, where every symbol is crafted to impress.'
    WHERE identifier = 'endorphina:endorphina2_2022HitSlot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'All players are invited for an intergalactic gambling experience, where one can encounter futuristic technologies, witness extraordinary sights, and take on the challenge of seeing what it''s like to live out of this world through its engaging space-themed sl'
    WHERE identifier = 'endorphina:endorphina2_2027ISS'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Streak 2 is the second game from the sequel of our three classic fruity games. After Lucky Streak 1, players can expect nothing less than a classic fruit theme with beautiful designs and even more fiery effects, making this slot even hotter than before. With Lucky Streak 2, you''ll soon be filling your pockets from this 5-reel, 3-row and 5-line game. All symbols are again fine-tuned with juicylicious fruits ready to ignite that huge fire within once you hit that winning combinati'
    WHERE identifier = 'endorphina:endorphina2_2LuckyStreak'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to level up in our second edition to our classic Lucky Dice slot series. This is a familiar and easy game play for all those who are in love with the old-school vibe. Lucky Dice 2 is letting you test and roll your luck with the additional ambiance, energy and fortune straight from China. Here you can encounter some red and fiery wins as well as the fantastic Chinese symbols that will determine your fate. It''s time to let these red dice help you pick up the spiciest win'
    WHERE identifier = 'endorphina:endorphina2_2LuckyStreakDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The third and final game inside our heated and classic fruity edition! 3-reels and 5-lines might sound too simple and easy with this game - it''s definitely not the case here. Hot flames will be flickering for you as the fiery symbol combinations dare to land on the reels and bring in some solid win'
    WHERE identifier = 'endorphina:endorphina2_3LuckyStreak'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put your fortune to the ultimate test in our third and final slot to our Lucky Dice series. At this stage, you''re already familiar with our spicy combo of the classic old-school feel with our fortune-filled dice. Roll your best hand and let''s see what awaits your future. Will it be the greatest win or will you have better luck next time? Roll for yourself and uncover what Chinese symbol is meant for '
    WHERE identifier = 'endorphina:endorphina2_3LuckyStreakDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The alarms are sounding as mother nature begins to show her true stormy wrath. With every explosion erupting in the skies, it''s soon followed by strikes of lightning, flashing on these reels\r\nfor those who will survive and experience a win of a lifetime. This thunderous slot will surely\r\nlight up the skies as bright as Zeus'' eager eyes with each lightning bolt and thunderous roar.\r\nAmong the symbols, you''ll be able to witness lightning bolts and your favorite flashy fruits - cherries, plums, lemons, watermelons, a golden bell, and those lucky number sevens.'
    WHERE identifier = 'endorphina:endorphina2_3Thunders'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a full bite from our classical and juicy fruit theme on 3 reels and 3 rows with 5 paylines and with its modern twist and sleek, polished design. Have your mouth water at the sight of our fruity symbols — our sweet strawberries, fresh lemons, ripe oranges, lush grapes, cherries and watermelons to put in your winning basket'
    WHERE identifier = 'endorphina:endorphina2_7up'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Here''s a story about a faraway place, where the wise emperor Akbar ruled his great kingdom with the help of his resourceful wazir Birbal. Two humorous friends always sought their best luck and unforgettable adventures, and actually found them all! Now, you are welcome to absorb some of their precious oriental wit and fortune, hopping into the legends of Endorphina''s slot - Akbar & Birbal. Ready to get your glorious experien'
    WHERE identifier = 'endorphina:endorphina2_AkbarBirbal'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our fierce Almighty Sparta slot tells the story of fearless warriors led by the king of Sparta to the battle against the Persian Empire. An outstanding amount of bravery was needed to conform the army that outnumbered them by thousands. Their remarkable story about the Battle of Thermopylae still remains strong and alive today. As we carry their memories throughout history, Endorphina will celebrate this historical event by dedicating this slot to pay tribute to the bravery and determination that humans can summon.'
    WHERE identifier = 'endorphina:endorphina2_AlmightySparta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spartans! Show your bravery and loyalty to the Fatherland! The enemy is already approaching our beloved Polis. We must protect it! In this 10-line, 5-reel, 3-row dice game, the players will take over the role of the king Leonidas, which warriors should stand in this unequal fight against the Persian Empire led by King Xerxes. The Oracle of Delphi has already predicted the future and the result of the battle of Thermopylae will be told by rolling the dice. It''s in the players power to change it, even with the outnumbered army of Greeks. Onwar'
    WHERE identifier = 'endorphina:endorphina2_AlmightySpartaDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'According to the tales of Homer, the myth about Troy is tied to end of a magnificent city due to foolish love and the intrigue of the gods. Mighty Hector fights the unbeatable Achilles while protecting the besieged Troy – they are the main heroes that you will meet inside this drama-filled slot, alongside Helen, who is said to be the most beautiful woman on Earth. And who knows, you may just discover one of the secrets to why she may have been the reason for the w'
    WHERE identifier = 'endorphina:endorphina2_AncientTroy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Find yourself and discover beautiful ancient relics in this remarkable 5-reel, 3-row and 25-payline slot game about Ancient Troy. This time however, you''ll have to roll your luck in the ancient city with these original stone dices – with each dice representing a main character or symbol from this famous city. Inside this new dicey themed Troy, you''ll be able to uncover the hidden plot between Helen – the most beautiful woman on Earth, Achilles – the unbeatable warrior, and Hector – the son of the king of Troy. Who will you roll with this '
    WHERE identifier = 'endorphina:endorphina2_AncientTroyDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The wind of wanderings blew… Your ecstatic round-the-world adventure starts now! This April, Endorphina uncovers the secrets of the Universe for chosen treasure hunters . Our new Around the World game takes players to the most famous jewels across the globe. You''ll soon come face to face with the majestic Sphinx, the dazzling Colosseum, the Mexican El Castillo, the Great Wall of China, the mystic Moai, and the dreamy Taj Mahal. In which country will you score the most luck? Grab your compass and join this expedition to find out. And don''t call it just a trip, because it''s really an adventure of a lifetime. Guided by the brave and beautiful Adventureress, you will admire the beauties of the world for as long as you can handle'
    WHERE identifier = 'endorphina:endorphina2_AroundTheWorld'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will you be able to live up to the expectations of the outstanding Norse Gods and Goddesses? You''re formally invited to step foot into the illustrious world of Asgard to join the adventure of outstanding Norse Gods and Goddesses – the wise Odin, the mighty Thor, the mischievous Loki, and the powerful and beautiful Freya. During this journey, your strength will be tested to see if you''re worthy enough to come along on their chase for celestial fortune. Will you be able to impress the Gods and earn their trust? Take your chances with the Asgardians in this powerful and adventurous '
    WHERE identifier = 'endorphina:endorphina2_Asgardians'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience a perfect dice-rolling adventure with outstanding Norse Gods and Goddesses. Join them in the marvelous journey to the legendary Asgard if they deem you worthy. This time however, you''ll try your luck with the help of our magical dice, which belonged to Odin himself. These dice represent our heroes themselves: the wise Odin, the mighty Thor, the mischievous Loki and the beautiful and powerful Freya. Roll the dice and let the famous rainbow bridge Bifröst take you on this noble que'
    WHERE identifier = 'endorphina:endorphina2_AsgardiansDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aus Dem Tal slot will let players explore the true depths of nature''s most beautiful rewards if they''re willing to master the art of patience, endurance and persistence. In the vast mines that hold the secrets of centuries, players will dig their way to find some brilliant treasures of the Earth. The story revolves around a brave digger with his fluffy helper who are mining precious materials to create the ultimate Thaler – the major coin in European history. Will they find what they are looking for? Will the mine, packed with its secrets and dangerous routes, be kind to the di'
    WHERE identifier = 'endorphina:endorphina2_AusDemTal'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Surrounded by all the golden beacons, this mighty treasure shines so bright, that the stars become dim. The Book symbol acts as Scatter and Wild, revealing the craziest wins of all time. Players also get hypnotised by the Oil Tycoon symbol and the stunningly bright symbols of Oil Derricks and Tanks which promptly dance on the reels. All together, they create an incredible upper-class feel within the Book of Oil game.\r\n\r\nWhen three Scatters land on the reels, they trigger 10 Free games with an expanding symbol. At the beginning of the feature, a special symbol is randomly selected. During the Free games, the Wild cannot substitute for the special symbol.'
    WHERE identifier = 'endorphina:endorphina2_BookOfOil'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Endorphina''s 5-reel, 3-row, 10-line online slot game called the Book of Santa, is about the most magical time of the year – Christmas! So you''d better sit down in a comfy sofa, snuggle up in your warmest blanket next to the fireplace and watch the colorful symbols dance on the reels to bring yourself some super festive'
    WHERE identifier = 'endorphina:endorphina2_BookOfSanta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The beauty and the risk, the danger and the calmness... You''ll find the complete atmosphere inside the wildest slot Buffalo 50 – filled to the brim with breathtaking adventures and North American wildlife. It''s time for you to take a deep breath and get lost in the beauty of the canyons and cliffs of a true American prairie. Meet the symbols of North America – the strong bison, the proud eagles, the quick cougars, and the noble wolves. Do your best to seek out the support of these proud animals in your march towards the '
    WHERE identifier = 'endorphina:endorphina2_Buffalo50'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Money, Wins and Diamonds – all brought to you by A GOLDEN CIGAR-SMOKING TANK! If you''ve been searching for your lucky break, this could be it. Look around you and you can''t miss those glistening jewels, stacks of cash and a tank made of real GOLD. When our cash tank deems you worthy, it will be your greatest ally - it will aim and shower you in cash, luck, and massive'
    WHERE identifier = 'endorphina:endorphina2_CashTank'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What can be better and more heartwarming than an absolute classic? It can only be a classic wrapped in quality HD graphics and polished up with a luxurious golden design. Chance Machine 100 will give players the feel and vibes of a true immortal classic with its ingeniously balanced mathematics, clear features, and the most well-known symbols as the Liberty Bell, bar, and card suits. For those who prefer nothing less than perfection and know what real gambling is about, Chance Machine 100 is the real treasure.'
    WHERE identifier = 'endorphina:endorphina2_ChanceMachine100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'They say diamonds are our best friends… And so is this Chance Machine 20 slot, one that will bring brilliant and pristine wins to only the luckiest of players. This is a luxurious slot that glistens, sparkles, dazzles, and disarms us with its classic simplicity. This shimmering slot will not leave players feeling indifferent if they''re seeking pure and classic excitement. Wrapped in brilliant graphics and splendid animation, this slot has a great potential for the new Chance Machine saga by Endorphin'
    WHERE identifier = 'endorphina:endorphina2_ChanceMachine20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There are many jewels when it comes to a crown of royalty. Each jewel glistens with outstanding individuality, uniqueness, and class. We''re here to bring you one of the most exquisite slot jewels of them all – Chance Machine 40 by Endorphina. Spend some time with this noble slot and you''ll feel like you belong amongst royalty like never b'
    WHERE identifier = 'endorphina:endorphina2_ChanceMachine40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This Christmas, all roads lead to a winter treasure hunt for players to find their perfect holiday gift. A gift that never expires, is full of magic and magnetic perfection – one of the finest jewels inside a festive new Endorphina slot – Chance Machine 5. Etched with ruby hearts and diamond stars, this online game warms up the Jingle Bells'' season with its refined zest of merry adventure for all pl'
    WHERE identifier = 'endorphina:endorphina2_ChanceMachine5'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you are looking for a visually mastered HD game featuring traditional Chinese symbols, joyful settings and exciting features, this slot has everything you need. The highlight of the game is the golden dragon flying graciously on the screen when 3 or more Scatters appear on the reels.'
    WHERE identifier = 'endorphina:endorphina2_Chunjie'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bonjour Ladies and Gentlemen! We are delighted to introduce you to the one and only Cupid by Endorphina. He is an ordinary guy, living his ordinary life. But just once a year everything changes and he becomes famous with his love arrows… Do you want to know more about this new game? On Saint Valentine''s day, Cupid has an important task: he brings true love to the people who need it. No one should ever know about his secret mission. Hiding and seeking, arrow by arrow, he grants all men and women the most unique chance of big wins! Although, not everyone can keep their love wins over the months or years... So, next February 14th, Cupid comes back with more hope for broken hearts to give them all another chance at love and happines'
    WHERE identifier = 'endorphina:endorphina2_Cupid'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dia De Los Muertos is a three day celebration in Mexico, where people share their love and pay their respects to their ancestors. Special altars are prepared and decorated for this day, full of family members'' photos, offering (such as favourite food and drinks) and traditional orange flowers that are said to attract the souls and bring them back into this world for this one special da'
    WHERE identifier = 'endorphina:endorphina2_DiaDeMuertos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'All the largest diamonds were found on our planet Earth. But let''s reveal a little secret… A secret that hasn''t been written about in history books. There are even more unique diamonds in outer space. Many centuries ago, a white dwarf star transformed into a diamond – as big as Earth itself. It wasn''t just any ancient gemstone hidden in space. It''s currently over 11 billion years old. And this Christmas, Endorphina brings this very diamond from out of space to all players inside the newest slot - Dia'
    WHERE identifier = 'endorphina:endorphina2_DiamondChance'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game features symbols connected to vaping and also fruit symbols which were given a surprising twist with enhancing smoke effects. The most important symbol in the game to look out for is the Vape Bar that acts as a Wild and a Scatter, as well with the Diamond with the Diamond Vapor logo on it – which is the highest paying symbol. Meet Jack and Mike, two cool guys who know how to keep up with the times. They''ll give you a chance to double your wins during the vape ba'
    WHERE identifier = 'endorphina:endorphina2_DiamondVapor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Goddess of War can be translated to "invincible” and is based on the Hindu warrior goddess, who is known for combating evil and demonic forces with her loyal lion by her side. She was created upon a wish of the Gods, who were terrorized by the evil demon Mahisha, to save them and to set the World into a harmony again. She is fierce and is gifted with mighty powers and weapons from each of the God who prayed for her to defeat the darkness. The colors of the slot are mainly red and gold to evoque the power and the en'
    WHERE identifier = 'endorphina:endorphina2_Durga'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever dreamt about living a lifestyle as a successful football player? Luxury goods, amazing locations, hyped-out clubs and pretty girls fighting for your attention. Experience these highs all inside the sporty new football game The Champion which gives you an insight into this world from a whole new level. But remember it''s not all fun and games, you''ll still have to work your ass off on the field as w'
    WHERE identifier = 'endorphina:endorphina2_FootballStar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a deep breath, get excited and count to three… Hear the whispers of the ocean waves and dive into the darkest aquatic azure inside of Endorphina''s newest game! This summer, the black-andred classics of French roulette will be left behind. The Fruletta slot is brought in, framed in royal blue, with the wheel touched by all colors of luck. Its alluring fruity design shimmers with a sunny gold, revealing a unique combination of cutting-edge math and exciting gaming challen'
    WHERE identifier = 'endorphina:endorphina2_Fruletta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The legends say that the Aurora Borealis used to be trapped inside rocks. But one day, a supernatural power released some of the majestic colors into the sky. Not all was released, as some remain tucked into the crevices as gems, waiting to be discovered. Now these special gems are featured in the newest Endorphina''s slot – Gem Blast! Let your players enjoy the beauty ofrozen flame,” as it catches the light and reflects an awe-inspiring range of colours. Each gemstone contains an entire night sky all on its own and if the players are persistent enough to touch the sky, they can expect a full blast of unforgettable emotions swirling on the reel'
    WHERE identifier = 'endorphina:endorphina2_GemBlast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The new game by Endorphina is framed in the most exotic gold of Asian traditions... This year, China puts the spotlight on the almighty Golden Ox of its own. The Golden Ox slot will reveal an authentic oriental world to the players, where Ox symbolises a grandiose wealth and a promising future ahead. Moreover, all mysterious luck is kept in ancient golden coins and hypnotizingly red envelopes etched with fragile flowers... Are you already dreaming about this game from Endorphina''s portfolio? If so, just follow the light of the magical lotus to be led to an exquisite collection of win'
    WHERE identifier = 'endorphina:endorphina2_GoldenOx'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dare to handle the heat in our NEW Hell Hot 100! It''s time to ignite flames of adventure as long as you can take the heat. Endorphina presents its fiery, new game Hell Hot 100 that''s sizzling with excitement and flair. This wicked slot will bring out the best and worst in every player who dares to get close enough to our fire. With a fine balance between diplomacy and intrigue among the demons in hell, a rush of twisted luck may rub off on you too! This radically new classic is polished in crisp designs to fuel our very own Hell Hot 100, featuring explosive graphics of hot and spicy fruit symb'
    WHERE identifier = 'endorphina:endorphina2_HellHot100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With crazier challenges and bigger wins this summer can get hotter than ever... And here we go, Endorphina introduces the new refreshing gem - Hell Hot 20! Summer dreams about refreshing fruits beckon the players with welcome coolness, but it can be deceiving, and conceal a hell of an excitement and luck for the players! The fiery game leaves no place for indifference and grants new turns and unpredictable discoveries. This August brings the opposite sensations onto the scene. Each and every player obtains a heavenly experience in the bright flames of the luxurious Hell Hot 20 game'
    WHERE identifier = 'endorphina:endorphina2_HellHot20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Summer dreams about refreshing fruits beckon the players with welcome coolness, but it can be deceiving, and conceal a hell of excitement and luck for the players! The fiery game leaves no place for indifference and grants new turns and unpredictable discoveries. This August brings the opposite sensations onto the scene. Each and every player obtains a heavenly experience in the bright flames of the luxurious Hell Hot 40 game. \r\n\r\nThis 5-reel, 3-row slot has 40 fixed pay lines. Topping up the thrill of the game combinations, all of its symbols embody genuine design excellence - from delicious cherries and grapes to bright stars... The Golden Wild symbol is set on fire and substitutes for all the symbols, except for Scatter. Scatter symbols count at any position on the reels.'
    WHERE identifier = 'endorphina:endorphina2_HellHot40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s 1930 in the very heart of Chicago, where backstreets and alleyways unwind and end up at the door of a famous club – the voice and soul of the people. Dim lights, smokey air, the clinking of glasses and a room full of hungry souls hanging onto each lyric and sound. As a beautiful singer takes the stage, her voice is able to calm the storms of the troubled, soothe the minds of the gangsters and mafia, ease the sorrows and fill the hearts of every person in the room. Through the sounds of jazz, a new chances of winning high emerge when the three main characters of the IN JAZZ game appear on the reels in bonus g'
    WHERE identifier = 'endorphina:endorphina2_InJazz'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ready to do what other people only dream of? The world deserves a better class of the challenge, where the winner goes ahead of the curb. Embraced by the fire sparks, it''s getting revealed to the players in the Joker Stoker game. This June is heating up, so let''s crack on the hottest upswing by Endorphin'
    WHERE identifier = 'endorphina:endorphina2_JokerStoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Trek your way through forbidden lands in Russia''s Far East to find the sacred ground Kamchatka where all four elements (water, land, fire, and ice) collide. The journey won''t be easy, as there will be many challenges to test your courage, strength and most of all – luck. Listen to nature''s calls as it tries to lead you to win one of the greatest treasures of '
    WHERE identifier = 'endorphina:endorphina2_Kamchatka'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'he King of ghosts appears as a WILD. The WILD substitutes for all symbols, except SCATTER. During the Free Games, expands over all positions on the reel (expanding is only triggered if a win can be gained). 3 or more SCATTER symbols trigger 12 Free Games with the EXPANDING WILD feature and random multipliers. After each winning, Free Spin ghosts are trying to steal your gain, but the King has hidden ghost bait in the cages with multipliers (x1, x2, x3, x5, x10). Once all ghosts are caged, the remaining multiplier is applied to the current winning combinations. Free Games are played with the same bets and lines as the initial game and can be won again during the feature. Random multipliers are not applicable to the number of additional Free Games won.\r\n'
    WHERE identifier = 'endorphina:endorphina2_KingOfGhosts'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Japanese wisdom and the brilliant mastery of fighting... The elite division of sumo wrestlers with tense and thrilling battles... Courage and determination unite all the five ranks of rikishi, who bode well for an epic season between top performers in our Legendary Sumo game. As breathtaking as the art of fighting is within the famous Makuuchi division, professional sumo wrestlers still continue to compete for superiority in one of the most hypnotising fights! And it wraps players inside an exclusively glorious and spectacularly dangerous show on the reels. '
    WHERE identifier = 'endorphina:endorphina2_LegendarySumo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep in the remote corner of China, there is a lush magical forest which protects a small sunken village. Once you''re inside the slot and within this little quaint village, you can come across plenty of cute and enchanted animals along the way — if you''re kind enough that is. The most sacred of the animals are the little panda bears that will bring you some big wins if you can make a good lasting impression! The slot is designed in '
    WHERE identifier = 'endorphina:endorphina2_LittlePanda'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A hidden little village in an enchanted forest tucked in a far corner of China holds many surprises. Including cute animals and a nice cuddly panda. The panda is an old symbol of good luck and positivity, and it will certainly help the players to gain some big wins while rolling the dice. Other inhabitants and flowers of this colourful dice slot won''t leave the players disappointed as well, but only if they''ll be able to make a good impression. Invite players to hop in a rolling wagon and visit this sacred place full of fort'
    WHERE identifier = 'endorphina:endorphina2_LittlePandaDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As the story goes, a cheeky leprechaun hid a pot full of golden coins deep within Lucky Cloverland''s enchanted forest. The forest was quick to grow its vines and magical flora around the treasure to keep it well hidden. Some say that the little leprechaun still guards the area and will lead only the luckiest player straight to the treasure trove. Just in time for St. Patrick''s Day, luck could be on your side more than ever.'
    WHERE identifier = 'endorphina:endorphina2_LuckyCloverland'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Allow yourself to wander through 4 different lands filled with big wins in this 5-reel, 3-row and 25- payline slot game called Lucky Lands. Decide which land attracts you the most according to its alluring design, atmosphere and the number of addicting free games. Big wins are waiting for you in these 4 Lucky Lands. How far will you go to win them all?'
    WHERE identifier = 'endorphina:endorphina2_LuckyLands'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Endorphina''s flashiest 5-reel, 3-row, 20-line online slot game #luxurylife is about surrounding you with the life you''ve always dreamed of, while being in the idolized spotlight for your loyal followers and admi'
    WHERE identifier = 'endorphina:endorphina2_LuxuryLife'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will you be able to uncover the mystery of the Golden Elixir?\r\nUse ancient magical practices to create the future and life you ultimately crave. The name Magnum Opus is tied to an artist''s greatest work or achievement – what will be yours?  Will luck be on your side so that you have what it takes to create your own elixir of life? Immerse yourself into the mystical world of alchemy and accept the challenge of creating something truly valuable with our newest slot!'
    WHERE identifier = 'endorphina:endorphina2_MagnumOpus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Mystery of Eldorado is a fantastic 10-line and 5-reel online slot game inspired by the real hunt for the magical golden city which was said to be hidden deep in the lush South American rainforest. Grab your gear and get ready to scout through the forest with an adventurous hunter to find the glorious treasure. Keep your eyes peeled for danger and avoid any pitfalls that will get in your way'
    WHERE identifier = 'endorphina:endorphina2_MysteryEldorado'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Once upon a time... In an enchanted era in which trees and animals could talk and wild fortunes lay hidden inside a magical forest, players can find themselves in a fairytale together with a young lady in a red cloak, a hungry wolf and the heroic huntsman. If players don''t wander and stay on the path in this enchanted forest, they''ll be lucky enough to get rewarded with the biggest wins inside Red Cap''s wicker basket that are as big as the eyes and ears of the Big Bad Wolf. Do your best to not be conned by the sly wolf, nor let him fool you. Play with your strengths, enter the woods, and follow the path to find the hidden treasures of this f'
    WHERE identifier = 'endorphina:endorphina2_RedCap'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you''re born to be a winner, the stars will fall for you from the sky in Endorphina''s newest game - Rooster Fury! Many years ago, world wrestling heroes were only starting to make it to the top, and not a single soul ever believed in their aspirations... But they knew it all about the fighting arts and skilfully mastered their own fury to win again and again, creating an ultimate entertainment for all fans. Combating techniques were becoming more and more complex and spectacular, while the wrestling shows were turning into unforgettably grandiose tournament'
    WHERE identifier = 'endorphina:endorphina2_RoosterFury'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'How much luxury can you handle this Christmas? The magical time of the year has come once again and we''re ready to escalate this atmosphere to a whole new level and treat our players like royalty. This lucky slot is bringing you the magic right into your homes just in time for the holidays. In this Christmas-themed slot machine, you have premium luck on your side with our little helper to score some of the biggest wins of the year. This slot is set to reward only the best, draped in exceptional and luxurious gold and red to make you feel like absolute royalty.'
    WHERE identifier = 'endorphina:endorphina2_RoyalXmass'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Emoji, emoticons, smileys, that´s all names for tiny colorful symbols we use to express ourselves. We decided to celebrate it with colorful slot Slotomoji'
    WHERE identifier = 'endorphina:endorphina2_Slotomoji'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When Sun and Moon both appear on the reels, the Moon covers the Sun, creating a new symbol – SOLAR ECLIPSE- and triggers 20 Free Games with a special expanding symbol. Expanded symbols pay for combinations of a kind in adjacent and non-adjacent positions and only on enabled paylines. SOLAR ECLIPSE is Wild and substitutes for all symbols. Appears on reels 1 & 3 and expands vertically to complete special expanding symbols combinations. When the SOLAR ECLIPSE symbols cover one reel, your wins are multiplied x2, when they cover both reels, the X5 multiplier is applied. SOLAR ECLIPSE symbols appearing simultaneously on reels 1 and 3 trigger 15 more Free Games with the same bets and lines as the initial game.\r\n'
    WHERE identifier = 'endorphina:endorphina2_SolarEclipse'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sugar Glider is a 5-reel, 3-row, 10-line playful game starring the cutest and most unique animal ever – "The Flying Squirrel” aka our daring Sugar Glider. This little creature will not only keep you company in the dark corners of the forest, but will also help you snatch some fruity wins into your po'
    WHERE identifier = 'endorphina:endorphina2_SugarGlider'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sugar Glider Dice is a 5-reel, 3-row, 10-line game starring "The Flying Squirrel” aka our daring Sugar Glider. In the new online slot, dices will roll instead of the classic fruits, as our little sugar glider juggles with them on the reels just for you. Discover a perfect dice-rolling online slot with the furry brave ninja who plays against the evil praying mantis to protect the woods. Those who support him will never regret it – as big wins are only a lucky spin away! So, you''ll want to stay close to our little hero, who''ll light your path towards nature''s hidden gems! Make sure you search for a symbol with the praying mantis on the reels. This symbol is the Wild and expands during the gameplay. When this happens, the real fun begins – so watch closely for what is about to happen! Roll the dice towards big wins with Suga'
    WHERE identifier = 'endorphina:endorphina2_SugarGliderDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you willing to play with some of your darkest secrets? In this hot and steamy game, we aim to take taboos to a higher and more exposed level so that you can experience a freedom unlike any other. We know you want to play, so don''t be afraid, we''ll be gentle and you''ll like it. Within this sexy dreamworld and daring atmosphere, this Taboo game will make you want to push past all your boundaries. If you can handle our wheel of pain, you will find yourself feeling a lot more joy. Are you ready to'
    WHERE identifier = 'endorphina:endorphina2_Taboo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s 2050 – and the world is under the mercy of AI. When the global pandemic happened, humanity wanted to seal themselves off from the danger and built AI X-50. But they didn''t expect the consequences, as the AI seized all power and robotized the world that we once knew. Because of this, most people lost their jobs, live under the poverty line, and are struggling to survive. To keep society afloat, the AI randomly gives away some money. Try on the role of a fearless hacker who wants to break the system and help more people – us humans. Can you survive in a world with only neon lights and holographic commercials brighter than the sun? A new world where techno beats replace your heartbeats and codes run down your veins? Don''t fear the future, make the future fea'
    WHERE identifier = 'endorphina:endorphina2_TheRiseOfAI'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The immersive atmosphere of wild nature and the belief in deities that represent natural phenomena will detach you from your current reality and let you enjoy something unique and fresh. Stunning 3D animations make certain symbols come to life in front of your eyes and intensify your gaming experience.'
    WHERE identifier = 'endorphina:endorphina2_Tribe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''ve all heard frightening stories about trolls who eat humans and turn to stone once they get exposed to sunlight. Now, however, you can forget about those and meet our gentle giant from our brand-new slot Troll Haven. Players will be left breathless as they make the trek across Scandinavia''s raw and beautiful landscapes with mountains, fjords, hidden caves and northern lights appearing on the reels with the Troll as a companion in this cozy haven. Along the way, players will encounter ancient runes, forest berries, and magical potions to give them energy and clues to the buried treasures. Will this fantastic Nordic creature step out of his haven to bring players the luck and wins they truly s'
    WHERE identifier = 'endorphina:endorphina2_TrollHaven'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try out the power of black magic with Endorphina''s video slot Voodoo. The game is shrouded in freakish natural phenomena and terrifying eyewitness appearances that are bound to captivate players. This is the case when you don''t need having spells casted that promise luck or money, the slot will do it all for '
    WHERE identifier = 'endorphina:endorphina2_Voodoo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let''s try to roll out the incredible and wicked power of black magic with Endorphina''s slot game Voodoo Dice. Inspired by Endorphina''s original Voodoo game, this slot plays with dice to ultimately seal your fate for better or for worse. It''s shrouded in freakish natural phenomena and terrifying sights that are bound to captivate even the most skeptical players. This slot can show you the true spirit of dark magic if you''re wiling to come and play. The magic of Voodoo is hidden within the dark symbols on the dices ready for your f'
    WHERE identifier = 'endorphina:endorphina2_VoodooDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you ready to spin the wheels to find Wild Love this February?\r\nJust in time for Valentine''s Day, we''re eager to help you on your quest for true love. We''ve got a sparkling love cocktail that will help lead you to the love you desire – will it be one of true \r\nlove, one of self-love, or an ultimate combination of them all?'
    WHERE identifier = 'endorphina:endorphina2_WildLove'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dance your way into the roaring 1930s, where flappers, mafias and cigars ruled the world. Walk among the incredible skyscrapers of Chicago and let its crisp wind fill your lungs. This new funky slot by Endorphina tells the story of a risky and dangerous love triangle happening on the streets of this Windy City between a ruthless mafia boss, his wife, and closest associate. Passion. Gangsters. Brutality. Are you brave enough to witness how the story ends? Let the streetlights illuminate your way to some gnarly wins.'
    WHERE identifier = 'endorphina:endorphina2_WindyCity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put on your tuxedo or evening dress and dive into the snazzy atmosphere of old school casinos. Jazzy music, elegant lights and a room full of energy will bring back the charm of the traditional way of luxurious casino gambling.'
    WHERE identifier = 'endorphina:endorphina_4OfAKing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Main symbol in the game is a lady worker who clears ash and soot from chimneys and this symbol acts as Wild and it doubles the line win when it substitutes any symbol on the winning line.'
    WHERE identifier = 'endorphina:endorphina_ChimneySweep'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Football, the most loved sport in the world deserves his own slot for sure. Green grass, the thrill of the game and football themed objects that were brought to life by our designers'
    WHERE identifier = 'endorphina:endorphina_Football'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fresh Fruits slot offers its players the classic feel of the original fruit slots style. The theme of the slot is depicted in the slot''s icons. It goes without saying that the symbols on the reels feature fresh fruits, such as lemons, apples, grapes, watermelons, coconuts, strawberries. While playing you will discover all of them. It is very colorful, jazzy and fascinati'
    WHERE identifier = 'endorphina:endorphina_FreshFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Geishas will take you to their mysterious and elegant world, where stakes high and the atmosphere is immersive. You will find traditional japanese symbols such as The Koi fish, money and temples on the reels'
    WHERE identifier = 'endorphina:endorphina_Geisha'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This simple game will lure you in luxurious environment of shiny precious stones and gold, where there are no complications, just wins. Among the symbols on the reels you can find a low paying Card symbols, higher paying gem symbols and Gem box symbol which act as Scatter.'
    WHERE identifier = 'endorphina:endorphina_GemsnStones'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Slot game, is based on the historical character of Gladiator, a professional fighter in the Ancient Rome. Without doubt, gladiator spectacles were one of the most watched forms of popular entertainment in the Roman world. Get ready to participate in Gladiators'' tournaments while playing Free Game'
    WHERE identifier = 'endorphina:endorphina_Gladiators'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever been dreaming about living a jet-set lifestyle? The life where you can afford whatever you want while travelling to the best places in the world? We bring this all in our game called Jetsetter. So get on the plane, jump in the car or pull the sails and get into Endorphina luxurious bar. There you can play some roulette, meet attractive girls or just chill and smoke your cigar. Whatever you decide to do, once the Blond girl, Scatter, appears, she won''t let you g'
    WHERE identifier = 'endorphina:endorphina_Jetsetter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Paris is known as the city of love. Indulge yourself in the atmosphere of this magical city and experience teh luxury and romance under the Eiffel Tower. While playing the macarons will dance on the reels all together with bottle of finest champagne and a couple of lovebirds.'
    WHERE identifier = 'endorphina:endorphina_Macaroons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The most feared creature in Greek mythology, the mighty Minotaurus is the main character in this game. Set in a labyrinth, the game carries remarkable animations and sounds that add a lot to the atmosphere and player experience.'
    WHERE identifier = 'endorphina:endorphina_Minotaur'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Proud land of Mongolia full of magnificent wild horses and tough people was inspiration for this slot. It gives a slight insight to their culture and traditions and lets our players discover this unique land'
    WHERE identifier = 'endorphina:endorphina_MongolTreasures'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Theme Eternal fruit slots are so far the most popular themes among the players. With this in mind, Endorphina continues in creation of a fruit game with a modern twist and sleek design.'
    WHERE identifier = 'endorphina:endorphina_MoreFreshFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Black ninja is just the hero you have been looking for.\r\nThe Ninja video slot is our companyвЂ™s tribute to the action movie heroes of 1980s which were a real inspiration for all men of that time.\r\nThe slotвЂ™s background settings and music will take you to the thrilling world of action movies where the ninja were practicing espionage, sabotage, infiltration and open combat techniques. The game incorporates a Free Games feature during which the full-sized animated Black Ninja makes his appearance, breaking the symbols on the reels and gifting the Player with Wild Symbols. The Ninja appearing in a 3D animated explosion is certainly a must-see.\r\nYou can learn about ninjas from folklore and legend, and as a result it is often difficult to separate historical fact from myth. Some legendary ninja abilities believed to include invisibility, walking on water, and control over the natural elements. Get fully penetrated into the thrilling atmosphere of the mysterious warriors with EndorphinaвЂ™s online slot The Ninja!\r\nTags: 20 lines, 3D, ORIENTAL, ETHNIC, Adventure, Wild, Free games, Scatter.'
    WHERE identifier = 'endorphina:endorphina_Ninja'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The symbols on the reels feature the retro atmosphere, among them you will find cameras, ghetto blasters, cassette tapes, vinyl records and more... While playing you will discover all of them. If you are a vinyl records and vintage style lover, the nostalgia will take you over!'
    WHERE identifier = 'endorphina:endorphina_Retromania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Amazing graphics and music add even greater flavor to the experience, awarding the player with unforgettable atmosphere and the true effect of presence at the top destinations of the African safari. Are you ready to get fully emerged into the African wilderness, spectacular nature and magnificent wildlife? If the answer is yes – welcome to Endorphina''s Saf'
    WHERE identifier = 'endorphina:endorphina_Safari'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s not just the Bitcoin topic but also the hackers Matrix-inspired environment that makes this game unique. It''s the first game out of all Endorphina''s slots that features both six reels and two bonus '
    WHERE identifier = 'endorphina:endorphina_SatoshisSecret'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit themed slots are very popular among players and never go out of fashion. Players will enjoy the fresh atmosphere of the game thanks to the bright and color-overflowing design of symbols that look like they were immersed in soda'
    WHERE identifier = 'endorphina:endorphina_SparklingFresh'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delicious sushi pieces spinning on the reels and traditional Japanese music in the background make this slot not only a brilliant game but also a virtual dining ritual.'
    WHERE identifier = 'endorphina:endorphina_Sushi'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In ancient times cats were considered as the symbol of fertility for Egyptians. Among the icons used in reels you can see sacred cats in pictured in different styles, an Egyptian sacrificer and colorful card symbols from ten to ace.'
    WHERE identifier = 'endorphina:endorphina_TempleCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You will experience the feel of prosperity and welfare of Middle East through the wild extravagance and power and even some luxury may fall into your hands if you hit the jackpot.'
    WHERE identifier = 'endorphina:endorphina_TheEmirate'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Medieval times, when men proved their bravery during wars and a lot of majestic castles were built is good to remember in our medieval themed slot The King. Atmospheric music and the icons used on the reels King, Archer, Treasure Chest, Coat of Arms, Lion, The Crown symbol and Playing Card symbols will create the perfect illusion of that time and bring you some solid wins.'
    WHERE identifier = 'endorphina:endorphina_TheKing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The theme will take you to the Vampire´s mansion in an old gothic castle where the main chamber is decorated with macabre ornament, human skulls and faceless sculptures lightly lit by the full moon effulgence'
    WHERE identifier = 'endorphina:endorphina_TheVampires'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Twerk dance is popular for its originality taht brings together African Amerian culture, booty shaking and wild feminity. In twerk slot, 7 cool girls meet to show their best. This all escalates during the Dance Battle which is a bonus feature. Learn the moves with our dancers who are bound to leave you slack-jawed!'
    WHERE identifier = 'endorphina:endorphina_Twerk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit games are favorite among players who enjoy easy and fast playing and this game is no different. It provides a refreshing twist to Fruit games with its bright colors, HD graphic and fast beat background music.'
    WHERE identifier = 'endorphina:endorphina_UltraFresh'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Soothing music, slowly moving seagrass, seahorses and crystal clear water makes the illusion of the underwater kingdom just perfect, the queen mermaid Undine will guide your way. Among the symbols on the reels you can find Seastar symbol, Seahorse symbol, Gold fish symbol, Jellyfish symbol, Seashell symbol and Playcard symbols.'
    WHERE identifier = 'endorphina:endorphina_UndinesDeep'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The lesser-known ancient Assyrian civilization with its many mysteries will fulfill player´s need of exploration of someting new and unknown. Discover the mysterious country Urartu, an ancient kingdom known from the Bible that can be nowadays found in modern Armenia'
    WHERE identifier = 'endorphina:endorphina_Urartu'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Players will enjoy the Wild West atmosphere thanks to symbols drawn on old dusty paper that burns down when the winning line is activated, Wild symbol with shot holes and Sheriff star acting as a Scatter.'
    WHERE identifier = 'endorphina:endorphina_WildFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'See the shining star in the night sky. In Blazing Star you reach for the stars and collect fruit to achieve the greatest possible success. You can achieve success with three or more identical symbols, and in the case of cherries two identical symbols are enough. If you are a fan of fruit games, Blazing Star is for you!'
    WHERE identifier = 'epicmedia:BlazingStar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Heat up the magic pot to boiling point in the magical and mystical world and reach free games to achieve higher wins.'
    WHERE identifier = 'epicmedia:ConvertusAurum'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:DashingDerby'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Refresh your luck with this perfect combination of classic symbols and modern features. With Double Triple Chance you can almost taste those delicious cherries, juicy oranges and sweet plums. With a little luck, the sun will shine for higher winnings!'
    WHERE identifier = 'epicmedia:DoubleTripleChance'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dragons, as you would guess, are not beasts that one would like to be cross with. Eyes that speak fire and tongue that spits napalm itself are not meant to be taken lightly, we can assure you. But if you possess indomitable spirit and incredulous courage, you might as well make the right call and step a foot on a secluded island in the middle of nowhere in Dragon''s Treasure – a place where dragons reign and fire is the currency. If it helps your cause, you have a veteran dragon slayer of hundreds of missions to assist you.'
    WHERE identifier = 'epicmedia:DragonsTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Win the hearts of the Senorita''s in this 10 line European casino style, high volatility slot.Our Torero hero takes on the ultimate battle against the raging bull to enter the Free Games round and win the prize!'
    WHERE identifier = 'epicmedia:ElTorero'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:EnglishFastLeagueFootballMatch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:EnglishFastLeagueFootballSingle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Crack the safe and get jewels, gold and diamonds. Here you can crack the safe legally and get the valuable contents. Can you resist the temptation? Get your personal treasure - legally!BASE GAME'
    WHERE identifier = 'epicmedia:ExtraWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The falcon Horus was one of the most important gods of ancient Egypt. He will upgrade upgrade your symbols on your way to the Golden Eye of Horus. Are you ready for an exciting expedition to ancient Egypt?'
    WHERE identifier = 'epicmedia:EyeOfHorus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you football crazy and slot machine mad? Well, this might just be the slot for you. Gold Cup by Merkur Gaming is a 5-reel game with 5 paylines, giving spinners the chance to line up a few shots on goal to win prizes worth up to 10,000 credits.'
    WHERE identifier = 'epicmedia:GoldCup'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:IceHockey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:ItalianFastLeagueFootballSingle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:Keno'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Whoever looks into the magic mirror in Magic Mirror Deluxe II might see a winner! The magic mirror with its very special properties is a special symbol and increases the chances of winning. The magic mirror also starts the exciting free spins. Are you ready to discover the game and its amazing features?'
    WHERE identifier = 'epicmedia:MagicMirrorDeluxeII'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:MaxCarMotorRacing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to fruit paradise! Multi Wild Red invites you to a fruity, fresh experience and cool gaming fun. Here you can achieve success on 81 win lines! Are you ready for it?'
    WHERE identifier = 'epicmedia:MultiWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:PlatinumHounds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:ProPongTableTennis'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our virtual games offer a comprehensive suite of virtual sports and numbers games for retail, online and mobile delivery. They offer the highest quality graphics available in the market as well as a comprehensive range of fixed odds betting markets to appeal to different customer segments and demographics.'
    WHERE identifier = 'epicmedia:SpanishFastLeagueFootballSingle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The original, remastered! One of our first games as a studio, and still a top performer, we decided to give ‘Book of Souls'' a big update with wonderful new graphics, much-improved symbols, cleaner UI and an awesome soundscape.Book Of SoulsTM Remastered is an action-packed, 5×3 videoslot that follows the famous archaeologist-turned-treasure hunter, Lara Jones, on her a quest to use the mystical Book Of Souls to unlock the fabled riches hidden inside a giant Mayan tomb, deep in the jungle.This is a high volatility game with exciting features such as Snake Spins, which drop random wilds onto the reels, and a special expanding symbol during the free spin mode.'
    WHERE identifier = 'everymatrix:BookOfSoulsRemastered'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This is a high-volatility 243-ways game that provides three compelling base game modifying features, three uniquely exciting bonus features, and a win potential of over 22,000x.'
    WHERE identifier = 'everymatrix:JohnDalySpinItAndWinIt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Knights of Fortune is a high volatility, 5X3 videoslot with a ways pays mechanic, cascading wins and a maximum win of over 24,800x.Sharpen your sword, ready your horse, and polish off your armour, it''s time to do medievalbattle in the quest for honour, glory and massive rewards!Every winning spin triggers a follow-on cascading re-spin, with unlimited sequences  win inthe re-spin, and trigger yet another. The only question how many will you get?'
    WHERE identifier = 'everymatrix:KnightsOfFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Royal Crown 2 Respins of Spearhead is a 5x3, 5-line videoslot with a colorful classic theme. The game has special scatters with cash prizes. Land five or more of these scatters, and the Respins of Spearhead feature will trigger, with the potential for wins of up to 2,100x. Players can opt to try to improve their wins with the card and gamble ladders feature.'
    WHERE identifier = 'everymatrix:RoyalCrown2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Winning becomes a truly magical experience in this beautiful, casual games-inspired cascading 6x5 videoslot where the symbols are crafted from sparkling precious gems, encrusted in silver and gold. Watch new symbols drop from above to replace winning symbols in endless sequences of wonderful, multicoloured cascading spins.Wins can balloon to wonderous levels before your eyes in the Sweet Free Spins bonus feature with special cascade multipliers. It can get even better if fortune favours you and you also land sticky multipliers which remain on screen for the remainder of the free spins.The optional Double Chance feature allows players to double their chances of triggering the bonus feature by increasing their s'
    WHERE identifier = 'everymatrix:SweetGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A veritable bounty of sun, food, wine, and an authentic Spanish cultural experiences await those who play in The Spanish Life videoslot from Spearhead Studios.'
    WHERE identifier = 'everymatrix:TheSpanishLife'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Xmas At The Cabin is a medium volatility, feature-rich 5X3 videoslot with Bonus Game, Free Spins and Wilds modes, offering a maximum potential win of around 250x.'
    WHERE identifier = 'everymatrix:XmasAtTheCabin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are there any Counter Strike fans here? Evoplay Entertainment proudly represents Ace Round slot. Inspired by classic shooter, game is here to amuse gamers'' mind and bring huge winnings.Flawless animation and sound effects accompany each winning streak, carrying users to a tense battle between terrorists and S.W.A.T.This 5-reel, 20-payline slot boasts unique Random Events: fire grenade, smoke grenade and High Explosive grenade. Other profitable features are Terrorist wilds and S.W.A.T. wilds that unlock corresponding free spins round.'
    WHERE identifier = 'evoplay:AceRound'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hidden under the cover of the night sky, the charming Madhu waits patiently for brave souls to join her in unravelling the mystery of cards in the Andar Night game. '
    WHERE identifier = 'evoplay:AndarNight'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fancy an action-packed adventure in a jungle crammed with treasure? If your answer is yes, then our new slot Animal Quest might just be what you need!Our story sees us join a band of adventurers searching for the lost city of Dinotitlan. Totalling four lovable personalities, firm friends Turtle, Rhino, Opussum and Red Panda  each appear on the reels as both a Double and a Big Symbol. In the main game, Big symbols take 6 positions on the reels and trigger respins, while our Free Spins mode is complete with shining Gold symbols that substitute regular symbols and increase winnings from x2 to x5!'
    WHERE identifier = 'evoplay:AnimalQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay Entertainment brings to your attention a new gambling game Bomb Squad, where players need to defuse the bomb by cutting the right wire! The game not only really keeps the users guessing what''s going to happen until the end, but also makes it possible to get a big win! There are three difficulty modes in Bomb Squad, each player can choose his own playing style and risks. Easy controls, nice interface, simple rules and fast first-person gameplay will make feel like real sappers. The atmosphere of the game is guaranteed to give a complete immersion in the world of Bomb Squad!'
    WHERE identifier = 'evoplay:BombSquad'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Instant GameBONANZA WHEELEvoplay invites your players to try their luck in its latest release, Bonanza Wheel - a true gold mine for traditional casino lovers!Two hosts, the charming Anastasia and her assistant Orland, will assist players through the sectors of the wheel that are filled with exciting multipliers that will increase the player���s bet and their total win. However, their ultimate mission is to help players reach the most desirable sector with a valuable scratch card that will lead them to a Bonus game, where all symbols are winning! Here, collecting three or more Jackpot symbols will grant players a 300x jackpot!Now, let���s spin the Bonanza Wheel and see what multipliers and jackpo'
    WHERE identifier = 'evoplay:BonanzaWheel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay Entertainment invites players to an all-inclusive slot Book of Rest. Crisp graphics let a player feel the heat of tropics through the screen of his PC or a smartphone. By the way, check out a main character of the game, animation of his reactions is proving a high-quality work performed by designers.Gaming excitement is assured as Book of Rest has 10 free spins bonus and a special Bonus symbol that triggers a re-spin.Any spin of the main game may bring unexpected feature ������� a random event. Book of Rest provides three kinds of ones: Sticky Line, Mixing, and Miracle reflection. These events come randomly and b'
    WHERE identifier = 'evoplay:BookofRest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Thought you knew all about Santa? Think again! He''s back this year and with a rock and roll twist. Crashing through a house''s wall near you soon, our Brutal Santa rides a motorbike, loves rock and has gifts galore for those who have been naughty instead of nice.A 3-reel 9 payline slot, players rack up their wins each time Santa takes a present from his sack. If you''re onto a win, you''ll see your present on the reels! If not, Santa will throw your present away.Complete with beautiful Christmas elves, respins, multipliers of up to x5 and free spins, make sure you join Evoplay Entertainment''s festive fun!'
    WHERE identifier = 'evoplay:BrutalSanta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One of the seven lucky Japanese gods, Budai, is waiting for players in Evoplay''s latest release. Responsible for wealth, prosperity and fun, he is ready to share his riches with those who aren''t afraid to play a game with him.Budai doesn''t like loneliness, as he is also the god of communication and often wanders the streets of China, giving bars of gold, pouches with coins and precious pearls to adventurous players.'
    WHERE identifier = 'evoplay:BudaiReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Christmas Reach is a story about how precious presents were stolen the night before Christmas! To return the Christmas treasures, an elf named Mini, along with her comrades-in-arms, decide to climb into the abode in search of the holiday thief.'
    WHERE identifier = 'evoplay:ChristmasReach'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Christmas Reach Bonus Buy allows players to immersethemselves in the Bonus game while not waitingfor a lucky combination of 3 Bonus symbols to land on the reels.'
    WHERE identifier = 'evoplay:ChristmasReachBonusBuy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay Entertainment presents you a new game Crown & Anchor. It is based on a game that appeared in the 18th century and was popular among sailors of the British Navy, hence the symbols used in the game and its name. Three dice are used for the game, but on dice faces are not numbers from 1 to 6, but images of four card suits (hearts, tambourines, clubs, spades), crowns and anchors. Are you ready to feel like a real sailor? We are sure that it is! And the rules are simple: bet on the symbol you like, or just three symbols at once, and roll the dice! Pleasant music, the surroundings of the game, will help you to fully plunge into the gameplay and forget about their affairs a land! Now, you are a sailor, or even the Captain of a ship himself, who enjoys spending leisure time with his comrades!'
    WHERE identifier = 'evoplay:CrownAnchor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay is excited to unveil its updated Curse of the Pharaoh game, now including a Bonus Buy feature!\r\nGive your players the thrilling opportunity to directly trigger one of the three Free Spins games with a single click!'
    WHERE identifier = 'evoplay:CurseofthePharaoh'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The skillful Chef prepares the mouthwatering meals and supplies it to the table, which is a 3x3 grid rich in pasta, burgers, meat and aromatic sauces.'
    WHERE identifier = 'evoplay:DragonsTavern'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Dragon''s Tavern Bonus Buy game transfers players to a cozy tavern, where a richly laid table lures with the smell of tasty food. Players will meet the chef Oliver who is always ready to treat visitors with exquisite cuisine as well as delight them with great wins.'
    WHERE identifier = 'evoplay:DragonsTavernBonusBuy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In another industry first, we are proud to release the first-ever RPG (role playing game) inspired slot. Designed to be HTML5 mobile-perfect for handheld gaming, the player takes the role of the game''s hero, with a third-person fully 3D camera tracking the player''s adventure throughout the game.Despite the RPG elements and truly immersive gameplay, Dungeon: Immortal Evil stays true to its slots-based origins all wins and losses are RNG-based, no skills or knowledge can help  it all comes down to the luck of the spin and the RNG algorithm.'
    WHERE identifier = 'evoplay:DungeonImmortalEvil'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With a stage set to mesmerising explosions of distant stars, our latest cosmic title fuses 27 pay ways to offer astronomical wins, with a whole Galaxy of Free Spins waiting to be visited!'
    WHERE identifier = 'evoplay:ExplodingFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Rule distinguishes our French Roulette Classic from other games of its kind, offering players a set of choices that increases RTP and your chances of winning.'
    WHERE identifier = 'evoplay:FrenchRouletteClassic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What could be more exciting than an invigorating fruit theme played out in an ultra-modern neon framework, all neatly tied together by Evoplay''s dedicated design team?Fruit Disco is not just your average fruit-inspired adventure, but a real fruit party utilizing a Match 3 style that triggers a unique Dance Pattern feature. The Dance Pattern feature transports lucky players to the tantalising atmosphere of a new, more up-beat dance floor with dynamic music, where they can form winning clusters of mammoth proportions, bringing players the huge potential for big wins!The dance floor is all yours in our brand new, neon-inspired adventure, Fruit Disco!'
    WHERE identifier = 'evoplay:FruitDisco'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Super Nova 40 is our latest addition to the Fruit Nova classic slots collection, catering specifically to admirers of vibrant, fiery themes and big wins! Our classic collection of time-honoured titles was first introduced to celebrate the original casino themes that we know RNG-gaming fans love to play - and we wanted to give them that little bit extra. Gathered on a set of reels inspired by classic fruit slots, the key difference between Fruit Super Nova 40 and its retro-based predecessors is that the game now has 40 paylines - granting players more unforgettable moments and even bigger wins!At the same time, the level of generosity and potential for big wins in the game remains consistently high, with a max win worth 5000x the player''s bet.Sound like fun? Check out Fruit Super Nova 40 and enjoy the game with a double number of pa'
    WHERE identifier = 'evoplay:FruitNovaSupe40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay is delighted to announce the newest ‘member'' to the massively popular Fruit Super Nova Collection with Fruit Super Nova 100, an exciting instalment to the series that now boasts 100 paylines!\r\n\r\nFeaturing 5 reels, 4 rows and 100 paylines, the new game will expand boundaries, exceed expectations, and provide countless unforgettable moments to anyone that engages with it.\r\n\r\nTry out Fruit Super Nova 100 and explore the full potential of Evoplay''s latest addition to a truly iconic series, with breathtaking opportunities and huge win potential hiding round every corner.'
    WHERE identifier = 'evoplay:FruitSuperNova100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There are never too many good games, that''s why we added another slot to our superb Fruit Super Nova collection – Fruit Super Nova 60. Like other games in the Collection, Fruit Super Nova 60 remains a truly generous slot - but now it offers 60 paylines with a max win of x5100! This difference is clearly felt at the level of game experience - the more paylines, the more bright moments and positive results players will get when playing. It''s really something super fruity!Enjoy the bounty and atmosphere of Fruit Super Nova 60'
    WHERE identifier = 'evoplay:FruitSuperNova60'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Fruit Nova collection would be incomplete without Fruit Super Nova 80! The superb release which now boasts 80 paylines, not the most traditional combination, however, it makes the cult game truly unique. Win lines draw incredible patterns over fruit symbols with the caressing sound of coins giving players the chance to revel in their slots success!Fruit Super Nova 80 is an enjoyable game for any slot lover, as the title offers a mouthwatering 5200x bet multiplier! Words are important, but they cannot replace a real experience. So, stop reading, it''s time to play!'
    WHERE identifier = 'evoplay:FruitSuperNova80'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We are pleased to invite you and your players to embark on a journey and dive into a mystical underwater world in our latest game, Gold of Sirens.Here, the bravest players will conquer the element of water and evade the grasp of the sirens to find a way to Poseidon''s treasure.Players will be impressed with the Free Spins and Jackpot game, which features the chance to win an Epic Ja'
    WHERE identifier = 'evoplay:GoldofSirens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gold of Sirens Bonus Buy allows players to immerse themselves in the jackpot game, while not having to wait for a lucky combination to open the door to Poseidon''s treasury in the underwater kingdom.'
    WHERE identifier = 'evoplay:GoldofSirensBonusBuy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The good old classics comes back to us in the new Hot Triple Sevens slot! During development of the game, the Evoplay Entertainment team was inspired by traditional slot machines from the best places of Las Vegas. 3 reels and 5 paylines wait for players. Observant people will notice immediately that on each reel can appear 2 and 3 symbols. This effect is achieved with using of empty symbols. It adds to the game a pleasant thrill inherent to proven classic.'
    WHERE identifier = 'evoplay:HotTripleSevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'While it''s the same beloved Hot Triple Sevens game with the fiery sevens symbols, the ‘special'' edition has far more to offer! Instead of the usual 10 Free Spins and x3 multiplier, players now have the opportunity to win 10, 15 or 20 Free Spins and generate the maximum reward worth x3035! Try out the game and discover how special the new Hot Triple Sevens is!'
    WHERE identifier = 'evoplay:HotTripleSevensSpecial'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our spookiest slot yet takes you into the darkest corners of the underworld where no light touches as the merciless struggle between the two rulers the night plays out.Complete with a 5-reel, 9 payline adventure chock full of wilds, scatters, bonus symbols and free spins, Hungry Night offers an immersively diverse range of gaming mechanics and visual themes to keep every player engaged. Two types of Free Spins are available, and when activated, offers the player one of two gaming scenarios, enabling the player to either take the side of the battle with the Queen of Bats or the Queen of Spiders in a terrifying shown down'
    WHERE identifier = 'evoplay:HungryNight'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feeling lucky? Your players certainly will with our latest Leprechaun-themed slot! Irish reels is a 3-reel, 3-row video slot played with 5 fixed paylines.With 8 regular symbols, along with scatters, wilds and free spins the aim of the game is a typical slot classic  with each spin of the reels looking to form a winning combination on existing paylines. The more expensive symbols in the winning combination, the greater the win, with winnings totalling up to x800 to keep things magical.If you''re feeling some of that Irish magic, give it a spin, and make sure you have your 4-leaf clover for good luck There''s a pot waiting at the end of the rain'
    WHERE identifier = 'evoplay:IrishReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The team of 4 small jellies, Blu, Gree, Yel and Pi are inviting you to their sweet universe of wobbly delights! Both the characters and players can win coveted prizes by finding Fruits Symbols on the reels, with another thrilling boost coming from the generous Multipliers in the Free Spins Game. Join the world of Jelly Boom, where you''ll enjoy the chance to win big, experience stunning visual designs, and get to know our charismatic jellies.'
    WHERE identifier = 'evoplay:JellyBoom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Step into an Aztec world and discover a mystical Central American world from centuries ago! Set in the heart of the jungle before the days of the conquistadors, the Legend of Kaan offers everything a legendary Aztec adventure should contain, with magic, mysticism and an immersive jungle atmosphere.The first slot of its type, the game offers a unique spiral reel totalling 91 symbols. With the reel taking the shape of a snake, the winning combinations increase the size of the reel equivalent to the number of win symbols unlocked.As players spin the reels winning combinations are achieved by lining up 4 symbols horizontally or diagonally, with new symbols unlocked and granted players respins, offering action-packed visuals to keep them coming back for another big win.Feeling adventurous? Join us in a journey to the unknown!'
    WHERE identifier = 'evoplay:LegendOfKaan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Crumbling is a multiplayer game designed in the stock style, where you need to try to predict when the stock graph will crash in exchange for the highest winnings. To do this, you need to carefully monitor what is happening on the gameplay screen and be brave to take advantage of the moment.Place one or even two bets and collect huge winnings! In the Lucky Crumbling game, there are several opportunities for you to win big'
    WHERE identifier = 'evoplay:LuckyCrumbling'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Wheel is an improved version of the famous gambling Wheel of Fortune. Its main feature is a three-level system with a huge variety of prizes. To get a super prize, a player needs to complete all three levels in one round! The rules are extremely simple you just need to bet and start the wheel. This is something that will create massive excitement! Evoplay Entertainment has developed a great game that perfectly combines a simple user-friendly interface design with a vivid playing field, and dynamic gameplay.'
    WHERE identifier = 'evoplay:MagicWheel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Maze: Desire for Power takes players on the journey of our epic Knight as he battles through a legendary maze.Battling monsters along the way, our latest slot is replete with wilds, bonuses and winning combinations. The quest begins at the click of the Spin button and drops continue as symbols move across the reels, with additional drops throughout the game with stacked, mirror and random wilds along the way. '
    WHERE identifier = 'evoplay:MazeDesireforPower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mehen is an ancient Egypt-themed instant roll-and-move table game styled around an ever-popular subject. It''s loads of fun and gives players the chance to win countless riches.During the game, players roll the dice to move their way across the map and awaken the serpent Mehen, protected by the evil god Apep. The bigger the number rolled, the closer the players move towards Mehen.However, players should try to avoid Apep. He disguises himself as a mummy and attempts to hinder adventurers with traps and misleading directions to prevent them from reaching their goal. With set in-map multipliers that immediately reward players, the mission is a captivating adventure through ancient Egypt!Choose a bet and start playing Mehen!'
    WHERE identifier = 'evoplay:Mehen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay Entertainment brings to your attention a new gambling game Bomb squad, where players need to defuse the bomb by cutting the right wire! The game not only really keeps the users guessing what''s going to happen until the end, but also makes it possible to get a big win! There are three difficulty modes in Bomb squad, each player can choose his own playing style and risks. Easy controls, nice interface, simple rules and fast first-person gameplay will make feel like real sappers. The atmosphere of the game is guaranteed to give a complete immersion in the world of Bo'
    WHERE identifier = 'evoplay:MineField'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mysteries Of The East is a roll-and-move board adventure featuring the charming Keiko, who is looking for the Orchid Temple filled with treasures and the secret knowledge of the Gods of Fortune.With the roll of the dice and a token, players will need to help Keiko reach the destination and acquire multipliers on the way without falling into traps prepared by dark forces. With luck on the player''s side, the path is favorable'
    WHERE identifier = 'evoplay:MysteriesoftheEast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A post-apocalyptic tale that is sure to get the pulses racing, our latest tale plays host to a set of amazing characters - each with their own radiation fuelled superpowers with which to do battle - offering an immersive dive into an alternative future with action packed consequences. A match-3, 7-reel slot with wilds, random events and bonus features galore, Nuke World is meticulously designed, fully-HD ready and developed with mobile gaming in mind.On our battlefield our main hero Captain Fox takes on his  enemies: Rhino, Rooster, Chameleon and Armadillo, and with each victory bringing its own unique reward.Rack up enough wins, beat the game''s enemies and with each winning combination, players attain an additional set of unique bonuses and rewards when victorious, leaving them sure to come back for more.Set to be one of our most unmissable slots this year, we challenge you to joi'
    WHERE identifier = 'evoplay:NukeWorld'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Penalty Series is a new instant football-themed game that is being added to Evoplay''s portfolio. However, this time, players are provided with an opportunity to attack \r\nthe opponent''s goal while having to keep eyes on their own. In order to do this and trigger rewards, players must guess the direction of the opponent''s shot by clicking on the highlighted area. '
    WHERE identifier = 'evoplay:PenaltySeries'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This slot takes you into the incredible fairy world of Dragons and their Tamers charming ladies, each of them representing an Earth Element Fire, Air, Water and Nature with a corresponding dragon of the same element.The games beautifully relaxing music combined with fantastic graphics create an atmosphere of a total immersion in the world of waterfalls, fire explosions.Adding to the fun of the slot is the cute animation of our dragons emotions, giving the player a chance to lean back, relax and enjoy an adorable story on screen while spinning.Our approach to flat UI in the slot makes sure you dont need extra clicks to spin or search for a secret code. We take care of your intuitional behaviour in the slot, as there are is hassle with extra clicks or pop up objects.'
    WHERE identifier = 'evoplay:ReignofDragons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''re keeping the classics timeless with our latest slot Rich Reels. With all of the main Vegas attributes that any gaming fan will instantly recognise, including 3 reels and 5 paylines with that all-familiar set of classic symbols, including Bars, fruits and bells, we''ve got something for everybody.However, as retro as it may be we promise each of your players will love its high-tech adaptation, offering a flawless gaming experience across any smartphone.Guaranteed to enrich every player''s experience with our juicy visual effects, showers of coins and bonus mechanics, Rich Reels comes with two types of Wild symbols in the game Crown and Star. Winning combinations from them are rewarded by generous coefficients of x100 and x250!Alongside, the bonus game Wheel of Fortune offers a fantastic list of special mechanics to keep things exciting. Activated when 3 Scatter symbols appear on the reels in the same round, players can unlock the bonus game to enjoy win multipliers of up to x50, or from pins!Fancy a step back into the world of gaming classics? Your journey starts here'
    WHERE identifier = 'evoplay:RichReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buried deep in the sand dunes of Ancient Egypt, The Temple of Horus rises above the desert, hiding a fortune fit for a Pharaoh for players lucky enough to find it.The 3x5 title is packed with a treasure trove of engaging features, including a Horus Gift bonus replacing three low paying symbols on the second, third and fourth reels with Wild symbols.The thrilling release also boasts a Respin Feature adding extra rows, as well as a Free Spins round where paylines rise to 16807 when one of nine regular symbols appear as a stack of three.'
    WHERE identifier = 'evoplay:RiseofHorus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The stars and outer space have beeninteresting themes for humans for a longperiod of time. The history of one of theautomatic stations on the distant starfound its embodiment in the slot producedby Evoplay Entertainment.'
    WHERE identifier = 'evoplay:Robots'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever wondered what it''s like in space?Our 5 Starmallows are building a supersonic rocket to see it for themselves! With each Scatter Symbol, the rocket prepares for the Free Spin Game, where the road to space begins.The more Scatter Symbols the team gets, the further it goes into space and the bigger the Multiplier becomes!Play Rocket Stars to become a Rocket Star and conquer space with our team of Starmallows!'
    WHERE identifier = 'evoplay:RocketStars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video SlotRUNES OF DESTINY! Very few reach this world with a real sense of destiny, but Ragnar the red-haired Viking is an exception. Equipped with the weapons and protection of two powerful Gods, Odin and Loki, Ragnar must embark on a long journey North in search of untold riches in order to lay his claim to the title of Konungr.In the main game, the Gods have different powers  Loki''s meanness can replace entire symbols, while Odin''s grace can provide multipliers that will increase your winnings.Landing anywhere from 3 to 5 Scatter symbols will take Ragnar to a Free Spins game with new challenges, while collecting 3 Runes from either God will unlock the special re'
    WHERE identifier = 'evoplay:RunesofDestiny'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Scratch Match is an instant lottery game in which you need to get a lucky ticket with winning numbers. The rules are simple: you need to erase the protective surface from the ticket cells, and compare the numbers with the winning ones. If at least one number matches the player receives a bonus. Evoplay Entertainment provides players with the opportunity to hit the Jackpot, namely, bet on the lucky number 777! Beautiful design, simple rules, and very fast gameplay will make Scratch Match favorite game for everyone who loves excitement.'
    WHERE identifier = 'evoplay:ScratchMatch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jump into a new virtual world with Sprinkle, Evoplay Entertainments latest exciting slot. The game is developed in Full 3D + VR technology. Use a virtual reality headset to take your adventure to another level of immersion.Players take a dive into a psychedelic world of luminescent mushrooms, enveloped by an accompaniment soundtrack of dreamy music serving to enhance the unique gaming experience even more.As well as boasting generous features that include wild substitutions and a range of free spins, a combination of neon graphics and smooth animation showcases Sprinkle as a thrilling, unforgettable slot powered by cutting-edge technology.'
    WHERE identifier = 'evoplay:Sprinkle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sweet Sugar isa luxurious partybythe outdoorpoolof a superclassymega-yacht!A must forallfun-loving creatures of thenight, twoof the game''s glamorous characters,Kamila andAleksa, are here to help playerstake their chance towin big. Those who find Scatter and Wild symbolsalong withhe right multipliers could take homea prizeworthx18,000 intotal!Winners could enjoya luxury fashionshoworganisedby Stella the style-queen, with winning betsfromtheMain andFree Spin games on showforall to see.Time to crack open the champagne and enjoy thehigh life with Sweet Sugar!'
    WHERE identifier = 'evoplay:SweetSugar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evoplay Entertainment introduces Syndicate  thrilling slot imbued with the spirit of gangster''s life. Player meets 3 dangerous gangs: bad girls, bad boys, and gangsters.'
    WHERE identifier = 'evoplay:Syndicate'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ancient civilizations'
    WHERE identifier = 'evoplay:TempleOfDead'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Texas Hold''em Poker 3D is a unique project from Evoplay Entertainment! Thanks to the new approach to the creation of the game, the player will be able not only to play Texas Hold''em against the dealer, but also to fully feel like a real cowboy, enjoy the atmosphere of a western, visit the Wild Wild West.For convenience, you can change position of the camera for watching the game from a convenient angle. And also, the player is given a greater freedom in choosing actions, which makes it possible to think over the strategy of the game well.Simple rules, classic combinations, and atmospheric gameplay that''s what you need to have a good leisure time.'
    WHERE identifier = 'evoplay:TexasHoldemPoker3D'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Triple Chili is an extraordinary classic slot from Evoplay - a game that challenges established views, offers players unprecedented scope, and a lot of hot experience. The slot machine and symbol design are inspired by the Mayan and Aztec cultures. The symbols are three peppers engulfed in flames, corn, strawberries, lime and other fruits brought from the New World. But the most important symbol is the pyramid with the Wild inscription, which can substitute for other symbols in winning combinations. There are 5 reels and as many as 8 rows in the game, which easily fit 60 paylines. Every spin is filled with fiery animations and magical sounds. It promises players a grand culmination in the form of the maximum win - x 6000! Connoisseurs of the classics should play Triple Chili. In this game, the chances of big winnings are as high as the local reels.'
    WHERE identifier = 'evoplay:TripleChili'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Meeting a Genie may grant players with only three wishes, but in our Unlimited Wishes video slot, your number of wishes will be unlimited!The game''s beautiful Oriental-style design features fruit symbols, a magic lamp, and a Genie, whose Wild-symbol magic can trigger Respins and big wins.However, the main power of Unlimited Wishes is hiding in the bonus game, Infinity Magic, which can bring a player the maximum prize of x2100.Have you already decided on your wishes? Build a long list and watch them come to life in our latest video slot, Unl'
    WHERE identifier = 'evoplay:UnlimitedWishes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The first slot machines may have turned into museum exhibits a long time ago, but that doesn''t mean you can''t play on them! Offering a fresh take on the golden age of casino slots, we''re delighted to introduce a new slot machine from our classic series, Western Reels.Combing two immersive themes from the Wild West and steampunk, clouds of steam can rise from the reels at any moment and are followed by a welcome fountain of coins. With incredible graphics perfectly optimised for HD and across all mobile devices, the game''s visuals are sure to transport you to a Vegas dreamland in no time.Western Reels is a slot with 3 reels and 5 fixed paylines. Its main feature is a combination of empty symbols and the Wheel of Fortune. The aim is to ensure your spin ends aligned with the Wheel of Fortune, with 12 segments featuring Multipliers and Respins.When 3 Scatter symbols appear on the reels the Wheel of Fortune locks and the lights dim. But in return, you will get 10 Free Spins with an improved We.In addition, the game�������s wild symbols offer a winning combination for 3 Wilds paying x200, and can be increased on a multiplie'
    WHERE identifier = 'evoplay:WesternReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mystery symbols, Wild symbols and Big symbols along with the generosity of local Respins and Free Spins can award players with the maximum win over x6100!'
    WHERE identifier = 'evoplay:WildOverlords'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the luxury and exclusivity that  provides – enjoy a  higher-limit game of Blackjack at a сompletely private table, surrounded by  an elite environment!'
    WHERE identifier = 'ezugi:BlackjackSalonPrive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let your players experience the highs and lows of one day teen patti in this three card poker card game. \r\nBack the favourite or choose to go for the outsider, this sensationally tense and exciting game provides \r\nthe full exhilaration and emotion of surprise wins and bad beats! \r\nLike our original teen patti version, players get to choose between Player A and Player B but this game \r\npacks a punch. \r\nEzugi have introduced the back and lay functionality made famous in betting exchanges. Before each \r\ncard is drawn, odds change based on the current favourite hand allowing players time to observe, bet \r\nagain, change their mind by backing or laying the other side! It is possible for players to trade their way \r\nto a winning position no matter what the outcome!'
    WHERE identifier = 'ezugi:OneDayTeenPattiClassic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Appear on reels 2,3 and 4 only. Substitute for all symbols except Scatters. Wilds expand over the entire reel every time they land on the screen.'
    WHERE identifier = 'gameart:20HotFruitDelights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The great beasts from the Chinese constellations, better known as the ''4 symbols'' are finally joining the ranks of our beautiful games. Get excited to win alongside these creatures of legend in this brand-new experience from GameArt! Step inside for mighty wins and let loose your wildest dreams.In this 5-reel game with 25 paylines balance is key, as the slot is packed with a fused ''freespin / bonus'' game that is guaranteed to bring you countless moments of excitement. As the wins are paid from the leftmost to the right wheel, be sure to keep an eye out for the scatter symbols! When Light and Dark compliment themselves, three Ying Yang symbols appear consecutively awarding freespins and triggering the bonus session. A new batch of four ''reel sets'' will appear, representing each of the four mighty beasts! In this amazing feature you will be able to win re-triggered spins and with fortune on your side a 200 (x) multiplier of your win if all the reel sets win simultaneously and balance out the power of the beasts of legend!Is there anything left to say? Let''s us not wait anymore, let us test the elements! From the Black Turtle in the North to the Azure Dragon in the East, the Vermillion Bird in the South and White Tiger to the West, be sure you are in good hands, as this game is GameArt and GameArt is the best! Good Luck!'
    WHERE identifier = 'gameart:4Symbols'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Indulge yourself in the all-powerful and mystical land of fire-breathing dragons if you darn, combined with the opulence from 88 RICHES. The 5 reel – 50 pay line slot game offers 10 free spins triggered by the three Jing Jang symbols landing on reels 1, 2 and 3 simultaneously. During the free spins, any GOLDEN DRAGONS appearing on reels stays locked in that position until the end of free spins and substitutes for all symbols except scatters. Bonus feature can be retriggered during the free spins awarding additional 5 free spins.'
    WHERE identifier = 'gameart:88Riches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Africa is a continent full of intrigue, with some of the most spellbinding, hypnotizing sunrises and sunsets. Welcome to the heart of Africa with the beautiful and bewitching AFRICAN SUNSET slot game. The African sounds in this 5 reel - 15 pay line game offer constant action together with its King of the Jungle wild Lion and scatter Tree symbols – both being the bonus feature triggers.'
    WHERE identifier = 'gameart:AfricanSunset'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get up close and personal with the world''s wildest animals, including zebras, giraffes, rhinos, and of course, the king of the jungle himself, the mighty lion. Watch as herds of magnificent elephants make their way to watering holes, and don''t forget to seek shade under the splendid acacia tree.'
    WHERE identifier = 'gameart:AfricanSunset2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Immerse yourself in a thrilling world of thieves, treachery and treasure, in Ali Baba''s Riches from GameArt!This unique retelling of the most famous of all the Arabian Nights tales gives everyone the chance to followin Ali Baba''s to riches footsteps.Bursting with jewelled splendour and neon hues, this highly volatile slot is rich with special features. Mediumand high-paying symbols can land as either 2x2 or 3x3 BLOCKS on any of the reels, with empty spacescreated by CASCADE WINS crushed by blocks to fill the voids. Each consecutive cascade in the base gameawards 1 lantern, and when at least 5 have been collected the BABA BONUS is triggered. In this specialfeature up to 12 lanterns can be selected, with purple lanterns awarding CASH PRIZES, blue lanternsincreasing the win MULTIPLIER - which multiplies any cash prizes won in the Baba Bonus, and is carried overto Free Spins - and red lanterns awarding FREE SPINS. During free spins, blocks will participate in multiplewins before being destroyed. WILDS take the form of a beautiful princess, with STACKED WILDS appearingas 1x3 symbols, and any sections that participate in wins being destroyed, while the remaining sectionbreaking into smaller Wilds.Are you ready for the ultimate Arabian adventure?'
    WHERE identifier = 'gameart:AliBabasRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the mystical entrapments of the Far East, with super cool amazing graphics design and attention to the detail for this Chinese themed slot game. ANCIENT GONG is a 5 reel – 243 win ways slot game and its 3, 4 or 5 scattered Gong symbols trigger the bonus feature in the search for enlightenment. In the 2nd bonus screen, you need to select the number of free spins by picking the gong symbols. '
    WHERE identifier = 'gameart:AncientGong'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A unique blend of steampunk and post-apocalyptic dystopian road warrior adventure, this fully-loaded game features heavily-armed battle buggies, badass bikes, and beastly big rigs! Run into six or more Hero symbols and you''ll trigger Apocalypse Respins. You''re not alone on the dusty highways though, because there''s a beautiful female road warrior. She can award you Free Spins, with all the minor symbols removed.'
    WHERE identifier = 'gameart:ApocalypseQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Atlantis, the fabled city under the sea, swim along with the golden dolphins in the mystical waters of ATLANTIS WORLD and discover all the sea of riches that they can win for you. Underwater ambiance surrounded by the Atlantis magnificent ruins, this 50 pay lines slot game offers frequent wild stacked symbols that can deliver exciting big wins. The bonus feature is triggered with three scattered Sphere symbols in any position on reels 2, 3 and 4 awarding 5 free spins, with additional stacked WILD GOLDEN DOLPHINS on bonus reels. If you''re lucky, you can also boost your bonus with an additional five free spins!'
    WHERE identifier = 'gameart:AtlantisWorld'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join Nidal as he embarks on a quest for riches and the beautiful Jaslyn, in a high-tech golden desert megalopolis, complete with skateboarding tigers, driving monkeys and a magic lamp containing Jinni!'
    WHERE identifier = 'gameart:AzrabahWishes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As you play Baccarat, your objective is to predict whose cards (the Dealer''s/Banker''s or the Player''s) will score the number of points closest to 9 using 2 or 3 cards.\r\nThe game comes with 3 deal modes: Normal, Fast, and Turbo.\r\nEnjoy the game, and good luck!'
    WHERE identifier = 'gameart:Baccarat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Immerse yourself in an epic ocean clash as cyberpunk meets ancient myth in Battle for Atlantis from GameArt! Many fathoms beneath the waves, legendary figures fight for control of the submerged city and the hand of the captivating Anomis. Experience intense aquatic action with 5-reels featuring titanic characters and a constant stream of surprises!'
    WHERE identifier = 'gameart:BattleforAtlantis'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'After the legendary undersea success of Battle for Atlantis, GameArt takes you to the far reaches of thegalaxy with Battle for Cosmos a thrilling anime-style, neon tinted, 5-reel, 30-payline slot bursting with starry wonders and other-worldly beauty.Harness the power of the mystical Wild Knights as you explore unknown constellations when anyKnight appears on the reels it will turn itself and selected adjacent symbols into special Wilds, with each Knight acting in its own unique way.The gorgeous goddess of the cosmos is a Scatter, and if you land 3 or more you''ll be rewarded by one of the four cosmic Wild Knights. Get 12 Free Spins with the Expanding Wild Red Knight, with all winsfeaturing a wild multiplied by 3. Get 15 Free Spins with the Connecting Wild Green Knight, again with allwins containing a wild x3. Get 9 Free Spins with the Walking Wild Pink Knight, and get 7 Free Spins withthe Collecting Wild Blue Knight. Pink Knight and Blue Knight Free Spins continue until all wilds areawarded.And, if you''re feeling lucky, you can double any win up to 5 times with an optional extra red or blackgamble feature. So, gear-up, and prepare for the truly epic Battle for Cosmos!'
    WHERE identifier = 'gameart:BattleforCosmos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blackjack is a standard table game that is played with six decks of 52 cards.\r\n\r\nYou can choose to play up to three Bet Places. To begin each round, place your bets in the Bet Places with the objective of winning money by creating card totals higher than those of the dealer''s hand but not exceeding 21 or by stopping at a total in the hope that the dealer will bust.'
    WHERE identifier = 'gameart:Blackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter a mysteriously mesmerising world of secret knowledge with the mighty magician Remlin, in Bookof Alchemy from GameArt! Discover lost potions and tomes of archaic wisdom amid the purple glow ofthe ancient mages fantastical laboratory.As you immerse yourself in forbidden knowledge, you''ll want to look out for the golden cauldron bubbling with a green mixture, because it''s the Wild, substituting for all symbols except the Scatter. While the Book of Alchemy itself is the Bonus, with three awarding 10 Free Spins.When the glass spheres to the left and right of the reels match, a magnificent array of magical featurescan be conjured up by Remlin potions\; during the base game and Free Spins Stacked Wilds or up to 50xmultipliers can be triggered. In the base game only, Locked Wilds and Respins can be set off, and in FreeSpins only, you can initiate Connect Wilds and additional Free Spins.And, if you''re curious about what wise old Remlin has brewing in his cauldron, you can help fate along byusing the new Buy Bonus feature just click on the cauldron overflowing with a purple potion!Are you ready to receive the knowledge?'
    WHERE identifier = 'gameart:BookofAlchemy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Look who''s going crazy in love this Valentine''s. It''s the Cupigs! They''re busy fluttering around with their bows, harps, violins, and roses, ready to shower you with soft, sweet-scented rose petals and gift you with huge wins.'
    WHERE identifier = 'gameart:BookofCupigs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience an awe-inspiring adventure under the stars, at the foot of the Great Pyramid and Sphinx, as you spin 5-reels adorned with stunning divine relics in this 25-payline slot. These reels will make you feel like a Pharaoh. Its time to game with the gods!'
    WHERE identifier = 'gameart:BookOziris'`);

    await queryRunner.query(`
    UPDATE game
    SET description = ' You''ll feel lighter than air as you float away to sweet, sweet wins with this medium volatile, 5-reel, 10-payline funfest! Sure, you''ve played plenty of fruit machines before, but you''ve never played one quite like this!Bubble Fruits definitely counts towards! '
    WHERE identifier = 'gameart:BubbleFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the heat, with lots of HOT action in store with the BURNING FLAME slots game. This 5 reel – 5 pay line game is rich with classic slot game symbols like various fruit and 7''s and provides constant fast spin & win action.'
    WHERE identifier = 'gameart:BurningFlame'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'CALIGULA was one of Rome''s most iconic and notorious Emperors and you are invited to a Roman-themed party with the CALIGULA slot game. This 5 reel – 10 pay line slot game will keep you in suspense during the free spins. Three scattered Roman Red Centurions will award you the bonus feature. Free spins start with the Blue Centurion appearing on the reel number 5 and revealing the Roman number that pushes you to advance on the multiplier scale where all the wins are multiplied up to the maximum of 12 times the win. The bonus feature ends when you reach the end mark at the end of the scale.'
    WHERE identifier = 'gameart:Caligula'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience a sugar-powered world of candy canes, gummy bears and hard boiled fruits, as your sweet-toothed superhero spins five wafer reels for delicious wins.'
    WHERE identifier = 'gameart:CaptainCandy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game begins with the player placing a bet (or ANTE) and receiving 5 cards, while the dealer receives an additional 5 cards. All player cards are face-up, one of the dealer''s cards is dealt face-up, but the others are hole cards.'
    WHERE identifier = 'gameart:CarribeanStudPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s dark, it''s full of twists and turns, so be ready to fight the vampires and werewolves in the blood-curdling CASTLE BLOOD slot game. The 5 reel – 25 pay line game keeps on entertaining you with its stacked symbols structure. Any 3, 4 or 5 Scatter symbols trigger 8, 12 or 20 Free Spins respectively. Any 2, 3, 4 or 5 Scatter symbols award additional 5, 8, 12 or 20 Free Spins respectively during the bonus feature. During Free Spins multipliers are added to wild symbols. Each multiplier that substitutes in a win it will multiply the win by x2, x3, x4, and x5 respectively. Let the wins begin!'
    WHERE identifier = 'gameart:CastleBlood'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab a tequila because it''s time for Chili Quest, from GameArt! If you like things spicy this is the game for you, packed with bright colours and Mexican charm. From a beautiful flamenco dancer and bright pinata to the local donkey, this 5-reel slot is a real fiesta! Meet a sombrero-wearing sugar skull Wild that substitutes for any symbol except the Spicy Pepper and Scatter which is a guitar-playing cactus, 3 of which will reward you with 6 Free Spins. In Free Spins reels 3, 4 and 5 can merge to spin together as one Gigantic Symbol, rewarding an additional 3 Free Spins, with no trigger limit!But all that''s just for starters, because 6 or more Spicy Pepper symbols trigger the Spicy Peppers Respins feature. After paying winning lines, other symbols fade away leaving empty spaces, with only the Spicy Peppers staying for the Respin. Each new Spicy Pepper resets the Respins at 3, and each symbol displays a value, Mini or Major Jackpot. If all the reels fill before Respins run out, a Mega Jackpot is awarded!And, of course there''s an all or nothing red or black card gamble feature, allowing you to double your winnings up to five times.Now that''s what we call a spicy slot!'
    WHERE identifier = 'gameart:ChiliQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you following us! What is your fortune symbol, what is your element of luck? Take a spin in an amazing 5-reel 25 pay lines, feature filled game of destiny! This is unlike any other game that you will ever play. We wanted your gameplay to be something special, so the features in this game are insanely fun. As the 12 creatures of the Chinese Zodiac are mixed in the pool of pay lines be sure to check out the SECOND CHANCE STACKS FEATURE and open the doors for the animal symbols wheel and let it spin! The dragon roams WILD on the pay lines, completing your combinations with insane wins. The tiger though is always watching, waiting to award your 9, 12 or 15 insane FREESPINS!Follow your fortune!'
    WHERE identifier = 'gameart:ChineseZodiac'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dare to enter the Circus of Horror, brand-new from GameArt? The very first slot to feature our immersive new player interface, take your seat in the blood-soaked big top of terror and bear witness to a macabre spectacle of surprises in this medium volatility, 243-payline, 5-reel freakishly featured-packed extravaganza.'
    WHERE identifier = 'gameart:CircusofHorror'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cleopatra, the Queen of Egypt during the 1st century B.C and famed for her beauty and being one of the world''s most powerful leaders, let''s play THE QUEEN OF RE-SPIN – in the CLEOPATRA JEWELS slot game. The 5 reel- 25 pay line game is surrounded by the ancient and exotic Egyptian jewellery that comes your way with every win.'
    WHERE identifier = 'gameart:Cleopatra'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the beautiful explorer in the mystery adventure chasing the alluring and magical crystal skulls. CRYSTAL MYSTERY is a 10 pay line slot game ready to provide you with big wins in this intriguing game. 3, 4 or 5 scattered CRYSTAL SKULL symbols trigger the bonus feature awarding 10 free spins wherein the bonus screen, the time-gate determines your mystery symbol.'
    WHERE identifier = 'gameart:CrystalMystery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ferocious, Powerful, the Lord of the Jungle and Savanah, it''s lion festival time with the DANCING LIONS roaring slot game. This 5 reel – 10 pay line slot game offers some excitement and unique features in the bonus feature game. Win 10 free spins with Red Pocket symbols landing on reels 1, 3 and 5 simultaneously. During free spins the Red Pocket symbol acts like wild and substitutes for all symbols except Lion. Bonus feature can be retriggered during the free spins.'
    WHERE identifier = 'gameart:DancingLion'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the dark and sometimes mysterious world of Leonardo DaVinci''s greatest inventions and unlock the cryptex to reveal the elusive secret code that will help you win big and conquer in the DAVINCI CODEX slot game. The 5 reel – 100 pay line game offers plenty of wins with the alluring Mona Lisa stacked symbols on a true renaissance cryptex. Enter the bonus feature by spelling VINCI across all 5 reels – you unlock the cryptex and you will be awarded 6 free spins where all the symbols involved in spelling VINCI will morph into Wax Seal symbol and turn WILD for the duration of the free spins bonus feature.'
    WHERE identifier = 'gameart:DaVinciCodex'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Venture onto the sacred mountain and walk among legendary gods from the world of ancient Greece in Dawn of Olympus, new from GameArt! Featuring legendary characters like Zeus, Athena, Gaia and Chronos, beautiful animated graphics, and packed with Free Spins and a Jackpot bonus game, this is an adventure you''ll never forget.'
    WHERE identifier = 'gameart:DawnofOlympus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sparkle your way through Diamond Magic, a luxurious 5x3 reel slot game with 10 paylines where a large array of special gems awaits. Although with a classic feel to it, this slot has a pinch of extravagance due to the EXPANDING MULTIPLE WILDS symbols and its RESPIN functionality.'
    WHERE identifier = 'gameart:DiamondMagic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive deep into a fluorescent dreamworld of oceanic wonders in Dolphin''s Dream, an undersea experience that will captivate and thrill in equal measure. Explore vibrant coral reefs and swim with dolphins and turtles as you spin and win in a mesmerising aquatic adventure. The stunning aquamarine colours will have you slipping into your diving suit in no time.'
    WHERE identifier = 'gameart:DolphinsDream'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the mighty Chinese Kingdom of the powerful and awe-inspiring land of the DRAGON KING. This game is ready to keep you fully immersed and excited during every spin with its brilliant design, 50 pay lines and frequent wild stacked symbols awarding big wins. The DRAGON KING Bonus feature is triggered with three scattered mystical Coin symbols in any position on reels 2, 3 and 4 awarding 5 free spins, with additional stacked Dragons on bonus reels. Bonus feature can be retriggered during free spins.'
    WHERE identifier = 'gameart:DragonKing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Everyone wants to own and tame the dragons and with the help of DRAGON LADY, you can feel the power and excitement. The 5 reel – 10 pay line game takes you in the dragon''s era and provides a lot of excitement with the Dragon Lady stacked wild symbols awarding big winnings. RESPIN feature: When a stack of WILD symbols appears covering entire reel 2, 3 or 4 the RESPIN feature is triggered.'
    WHERE identifier = 'gameart:DragonLady'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter a world of fearsome flying beasts in Dragon Whisperer from GameArt! This 5-reel, 25-payline slot is sure to captivate! Meet the brave Dragon Whisperer as she spins as a Scatter, with 3, 4, or 5 triggering 10 Free Spins in which you can win up to 5,000 times your bet! There are 3 types of Free Spin, with the one used decided with the special Free Spins Wheel. Earth Dragon flies over the reels, collecting Wilds вЂ" which are the dragon eggs symbol. If he gets 3 or more, he''ll randomly drop them back on the reels during the next spin! Fire Dragon flies over the reels, burning Wilds so they move one symbol higher for the next spin. Ice Dragon flies over the reels freezing Wilds in place for the remaining spins. Every spin also features a Bonus Reel. Wins from each spin are subject to the multiplier on the Bonus Reel from 1 to 10 in the base game, from 1 to 10 with 20x in the Free Spins. The Wild symbol is also on the Bonus Reel during the base game - dragons awarding 1 to 3 random Wilds, and a 3x multiplier to the total win. Of course, thereвЂ™s also a red or black card gamble feature, allowing winnings to be gambled up to 5 times.'
    WHERE identifier = 'gameart:DragonWhisperer'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for an explosion of fruits in Dynamite Fruits, a classic 5x4-reel slot with 40 paylines in which fruits burst into flames when a win occurs. To win, players must match symbols on the paylines.'
    WHERE identifier = 'gameart:DynamiteFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The gentle sound of the Spanish guitar is heard by the audience and a fragrant smell of roses is present in the air. The tension is building, as the raging bull looks at you in the eye. The crowd goes crazy as you almost get hit, but here you are "El Toreo”!'
    WHERE identifier = 'gameart:ElToreo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Greetings fellow nobleman of the court, you have been formally invited to the emperors'' court! Join him in the Central Kingdom to complete the everlasting quest for infinite wealth. In this 5 REEL, 9 PAYLINEs game, you are will be given the chance to play like a legend of the celestial empire, while having fun and most importantly winning an infinite amount of credits. Keep an eye out for WILD and WILD EXPANDING symbols that will take you to infinity, as on your search for wealth you will be welcomed by fortune bringers, the legendary dragons! The dragons being the symbols of strength and auspicious powers will be granting you the in-game feature awarding 10, 20 or 50 FREESPINS!!!.'
    WHERE identifier = 'gameart:EmperorsWealth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gold Rush Fever has struck as you become the gold prospector ready find the mother-lode to blow up entire reels to dig out and strike massive wins. EXPLOSIVE REELS is a 10 pay line slot game with funny characters ready to provide you with gold bonanza big wins.'
    WHERE identifier = 'gameart:ExplosiveReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Live life in the fast lane and indulge with luxuriant excesses in the life of rich and famous by becoming one yourself! You can live the dream and do so by playing 5 STAR LUXURY, with its 5 reel - 243 win ways there are big winnings waiting for you. Win 10 free spins with 3, 4 or 5 champagne symbols starting from the leftmost reel. During the free spins, luxury items such as jet, yacht, car, watch and diamond symbols wins are multiplied by their respective multipliers shown on the top of the reels.'
    WHERE identifier = 'gameart:FiveStarLuxury'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the fire station! Today you are faced with a 25 Payline Inferno that needs to be put out! This brand-new slot from GameArt is packed with features such as FREESPINS,triggered by the BONUS symbol and awarding9, 12 or 15 FREESPIN!!! If two reels from reel 1, 2 or 3 have stacked symbols, you will trigger the SECOND CHANCE feature and the reels will become engulfed in flames!Worry not! As the reels are burning a chopper will extinguish them and grant you more possibilities to win amazing payouts as the reel is transformed into a random stack of symbols available in the game. With lady fortune onyour side you will be able to stack all 5 reels with the same symbol for they will all burn and trigger the payout across all reels for the given stacked symbol! The Slot is subject to Wild symbols as well of course, so keep aneye out for those HOT combinations.'
    WHERE identifier = 'gameart:FlamingReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Roar if you dare and celebrate wins with FORTUNE LIONS in this state of the art 50 pay line slot game, with stacked Lions as top pay and wild symbols galore. Three lantern symbols on reels 1, 2 and 3 triggers unlock the bonus feature awarding 10 free spins for players.'
    WHERE identifier = 'gameart:FortuneLions'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who doesn''t love the Panda, one of the cutest and cuddliest bears of Mother Nature and in the case of FORTUNE PANDA slot game also the luckiest animals around. The 5 reel – 50 pay line slot game offers 10 free spins triggered by the three Jing Jang symbols landing on reels 1, 2 and 3 simultaneously. During the free spins any gorgeous Panda appearing on reels stays locked in that position until the end of free spins and substitutes for all symbols except scatters. And just for added measure, an additional five free spins can be won during the free spins bonus round, simply by landing another set of scatter symbols!'
    WHERE identifier = 'gameart:FortunePanda'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The supreme, majestic, benevolent GOLDEN DRAGON is ready to offer lots of ripping fire breathing fun with every spin with on its 50 pay lines and frequent wild stacked symbols awarding fiery big wins. The bonus feature is triggered with three scattered Ingot symbols in any position on reels 2, 3 and 4 awarding 5 free spins, with additional stacked dragons on bonus reels. The Dragon Bonus feature can be retriggered during free spins.'
    WHERE identifier = 'gameart:GoldenDragon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the mysterious and ancient Egyptian world of GOLD OF RA. RA is a powerful deity and Sun God and this game provides a powerful 5 reel - 25 pay line slot game with astonishing mystical graphics and sounds that are ready to engage you with its frequent bonus, where 3, 4 or 5 scattered Golden Chest symbols lead you to the desired path of enlightenment, the bonus feature. During the engaging bonus screen, the Golden Chest will determine and bestow the number of free spins and symbols that will turn gold and act as wild during the free spins feature. The Bonus feature can be retriggered during further free spins.'
    WHERE identifier = 'gameart:GoldOfRa'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dreaming of a white Christmas? Well, you''ve never seen one quite like this! Join Tiki on the beach for aHawaiian Christmas, any time of the year, with GameArt.The coconuts, dragon fruits, guavas, pineapples and lychees might be frozen, but they''re still delicious, andwhen you match at least 5 adjacent symbols, horizontally or vertically, the winning CLUSTERS will explodeallowing the remaining symbols to cascade into the spaces, creating plenty of chances to win. Look out forthe Christmas wreath WILDS, because they substitute for all symbols, and contribute to winning clusters.When a WILD has contributed to a win, it will move to a random adjacent vacant position before thefollowing collapse, and its multiplier is increased by 1x. Tiki will also add to the fun by randomly poppingpineapples, coconuts and lychees in the base game, leading to even more cascades and wins'
    WHERE identifier = 'gameart:HawaiianChristmas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab your boardshorts or bikini and hit the beach with Hawaiian Fruits, GameArt''s debut cluster-style game.'
    WHERE identifier = 'gameart:HawaiianFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Revel in the glamourous world of Hollywoof''s famous dog personalities. Figure out who''s who while taking\r\nadvantage of Hollywoof''s prized dog bone wild multiplier treats and diamond collar scatters.\r\nHollywoof is a 5x3 reel slot with 10 paylines. In the base game, WILDS carry multipliers of up to 5x and\r\nadd when part of the same win line. They substitute all symbols except Scatters. Your aim is to land three\r\nSCATTERS and over to trigger up to 15 FREE SPINS.\r\nBut that''s not all! Additional Scatters in Free Spins award even more re-spins up to a woofing 100 Free\r\nSpins. And for that extra something special, we''ve added a RANDOM SYMBOL SUPER STACKS feature in\r\nFree Spins to propel you on your road to stardom.\r\nPick your best pup and hold on tight to those diamond collar scatters. You''ll see that these pups aren''t\r\nyour regular sidekick. They''re the iconic stars of Hollywoof, here to pimp up your ride to fame. So, rev up\r\nyour Cadillacs and Bentleys and get set for a fun ride. '
    WHERE identifier = 'gameart:Hollywoof'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hot Fruit Delights is a classic 5x3 reel slot with 5 paylines in which fruits burst into flames when a win occurs. To win, players must match symbols on the paylines'
    WHERE identifier = 'gameart:HotFruitDelights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unlock the vibrant imperial jade and its mystic power with JADE TREASURE and peruse the spiritual greatness of this Oriental mineral. A 5 reel - 25 pay line slot game with astonishing graphics and sounds is ready to engage you with its frequent bonus feature, where 3, 4 or 5 scattered Bat symbols lead you to the bonus feature. During the bonus screen, the jade chamber will determine the number of free spins and symbols that will turn into jade and act as wild during the free spins feature. Bonus feature can be retriggered during free spins.'
    WHERE identifier = 'gameart:JadeTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We have a helpless romantic attitude towards our past. As history unfolded across the globe, heroes rose and fell. Some to be remembered and some to be forgotten by the violent waves of passing ages and citizens of the cultures in the world. We do remember her! She was martyr and a fierce warrior and most certainly, one of the most awe inspiring characters to have ever walked the earth. We humbly present to you Joan of Arc.Be sure to fight your way in the ranks of The Maid of Orleans in this 243 way historical game of honour and luck! We present to you our newest system of Expand & split. This feature will randomly replace and split symbols on the wheels as the symbols with arrow borders will expand when triggered by scatter symbols. Note that the Scatters are triggered by 3 or more scattering arrows of fire on any position, awarding 10 freespins that can of course be retriggered with holy fury! If you feel like fighting for a higher win with our heroine, be sure to enabled the gamble feature to have the possibility to double your wins!Aim high with those flaming arrows!This is a game of historical magnitude that is going to give you countless hours of lucky wins and charging free spins. Join the ranks of the Maid of Orleans and lay a siege of success and glory in the game of Joan of Arc, never to be forgotten!'
    WHERE identifier = 'gameart:JoanofArc'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Trip the light fantastic with the Luck of the Irish and catch your personal and sometimes naughty Irish Leprechaun that helps you find a JUMPIN'' POT that''s rich beyond your wildest dreams and full of gold. This 5 reel – 25 pay line slot game offers plenty of excitement during its bonus feature. 10 free spins are won with any 5, 4 or 3 scattered Clover symbols.'
    WHERE identifier = 'gameart:JumpinPot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'From the mountain of flowers and fruit to the distant lands of Gandara we invite you to join the mighty king of monkeys Sun Wukong and his companions Tang Sanzang, ZhuWuneng and Shā Wùjìng on their quest for the sacred scrolls!'
    WHERE identifier = 'gameart:KingOfMonkeys'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The adventure of the King of Monkeys Sun Wukong and his companions Tang Sanzang, Zhu Wuneng and Shā Wùjìng continues in the slot game King of Monkeys 2.'
    WHERE identifier = 'gameart:KingofMonkeys2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The amazing and luxuriant graphical design and the finest attention to detail for this Chinese themed slot game will ensure the highest player engagement and experience. KING OF WEALTH is a 5 reel – 243 win ways slot game and its 3, 4 or 5 scattered Coin symbols trigger the bonus feature. In the 2nd bonus screen, you need to select the number of free spins by picking the Coin symbols. During the free spins KING OF WEALTH wild symbol awards additional bonus prizes when substituting. It''s also possible to trigger additional free spins during the bonus round, simply by landing the required scatter symbols in any positions on the reels!'
    WHERE identifier = 'gameart:KingOfWealth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'They''re cute, loveable, fluffy and purring with big wins, so let''s play some cute kitty love in the form of big wins in the KITTY TWINS slot game. The 5 reels – 20 pay line game offers a lot of fun with its kitty characters combined with the Magic Paw symbol that appears on 2nd reel and reveals randomly a symbol. Win 50, 20, 10 or 5 free spins with 5, 4, 3, 2 Kitty symbols appear, beginning from the leftmost reel, from left to right on adjacent reels.'
    WHERE identifier = 'gameart:KittyTwins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever met a fortune teller, reading your palms or looking into a Crystal Ball? Then look no further, this beautiful game is full of rich predictions from LADY LUCK! A 5 reel - 20 pay line games, enriched with original gypsy sounds and enchanting music which offers the bonus feature that is triggered by 3, 4 or 5 scattered Crystal Ball symbols awarding 15 free spins.'
    WHERE identifier = 'gameart:LadyLuck'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Party alert! Lilly Palmer is now live in London, behind the decks for multiple evenings in a row. This tour promises insanely spectacular evenings with some of her biggest hits, so gear up for some powerful, impulsive tech sounds with electrifying basslines'
    WHERE identifier = 'gameart:LillyPalmerLondon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get in the festival of winning celebrations with fireworks in this amazing mystic Asian themed LUCKY BABIES 5 reel – 20 pay line slot game. You can win 8 free spins when 3, 4 or 5 Fireworks symbols land beginning on the first leftmost reel, from left to right on adjacent reels. During the free spins the four LUCKY BABIES symbol turn WILD and substitute for Temple symbol in winning combinations. Bonus feature can be retriggered during the free spins.'
    WHERE identifier = 'gameart:LuckyBabies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You''ll be captivated by this exotic 5-reel, 25-payline slot, adorned with glorious oriental treasures and exciting surprises! Expect the fearsome serpent water dragon to appear as a Wild, Lucky Coins and Scatter - which is koi fish in the shape of yin and yang.During Free Spins, reels 2, 3 and 4 spin together as Gigantic symbols! Hit a Gigantic Scatter and you''ll get an additional 3 Free Spins, with no limits to retriggers!YouвЂ™ll also meet mystically exotic symbols like Fu dogs, lucky cats, turtles and three-legged frogs.Prepare for an eastern adventure you''ll never forget!'
    WHERE identifier = 'gameart:LuckyCoins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chase fame and fortune in form of the wildest of wild dragons which is the key symbol for the exhilarating MAGIC DRAGON slot game. With its 5 reel – 243 win ways and a player selectable bonus feature it is a player satisfaction guarantee of magical dragon proportions. Win the bonus feature with any three of more Coin symbols from the leftmost reel to right.'
    WHERE identifier = 'gameart:MagicDragon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the enchanted world of the MAGIC UNICORN with the power of its wild multipliers during free spins. A 5 reels – 243 win ways slot game offers the player the bonus feature where 20, 15 or 10 free spins are awarded with 5, 4 or 3 Moon symbols on adjacent reels from the leftmost reel. During free spins if a Unicorn substitutes in a win on reel 2, the win is multiplied x3 or on reel 4 the win is multiplied x5. If a Unicorn substitutes in a win on both reels 2 and 4, the win is multiplied x15. And as always, landing a series of bonus symbols during the free spins round will land you another set of free spins to play with!'
    WHERE identifier = 'gameart:MagicUnicorn'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to party Mexican-style in Mariachi Fiesta, from GameArt! So, grab your maracas, don your sombrero and get ready to win!'
    WHERE identifier = 'gameart:MariachiFiesta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who says money doesn''t grow on trees? Own your private MONEY FARM by playing this exciting HIGH ROLLER game! HUGE WINS are being cultivated in this money fest for you when you play this 5 reel – 5 pay line slot game with the CHICKEN nesting GOLDEN EGGS all over the reels.'
    WHERE identifier = 'gameart:MoneyFarm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The wild and crazy chicken is back in more animal winning fun with MONEY FARM 2 slot game. The 5 reel – 25 pay line game it''s bringing lots of wild farm filled action during its unique bonus feature where you can play on up to four reel sets simultaneously. Win the bonus feature with three or more Egg symbols or just randomly after every spin. You are awarded 12 free spins that start playing on two reel sets simultaneously.'
    WHERE identifier = 'gameart:MoneyFarmTwo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to take to the high seas with a motley crew of primates in Monkey Pirates from GameArt! Enjoy swashbuckling spinning as you find your sea legs among messages in bottles, compasses, treasure maps and pistols, as the orangutan captain and crew of mandrills and squirrel monkeys keep the boat shipshape.'
    WHERE identifier = 'gameart:MonkeyPirates'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to a true HIGH ROLLER GAME! Cash is King in this adrenalin pumping game and More Cash provides BIG WINS like no other game on its 15 pay lines! WILD WIN MULTIPLIER RULE: If a wild symbol participates in a winning combination (WILD WIN) anywhere on reels 2, 3 or 4, the WILD WIN is multiplied by its respective wild win reel multiplier. If more than one wild symbol on reels 2, 3 or 4 participates in a win, the respective wild win multipliers are summed and all wins with at least one wild symbol substituting are multiplied by the total multiplier shown in the top right corner. The WILD WIN multiplier is reset to zero after every spin. During the free spins the WILD WIN Multiplier is NOT reset to zero but it keeps incrementing with every spin if the WILD WIN Multiplier rule apply. The free spins can be retriggered during the feature with two adjacent WILD symbols on reels 2, 3 and 4 awarding additionally 5 free spins or with three WILD symbols on reels 2, 3 and 4 awarding additionally 10 free spins!'
    WHERE identifier = 'gameart:MoreCash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Journey through the sands of time to ancient Egypt''s 18th Dynasty in Nefertiti''s Nile, from GameArt! Join the beautiful queen on the banks of the mighty river as she battles to rid the land of the deceitful gods of old, and unite the people under the one true Sun god.'
    WHERE identifier = 'gameart:NefertitisNile'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'GameArt is thrilled to introduce Night at KTV - a sexy new karaoke-themed slot. A richly atmospheric slot complete with glamorous hostesses, bright lights and top-line drinks, it sees players leaving their inhibitions at the door as they take centre stage for a night of singing and dancing. Featuring stunning visuals, engaging gameplay and a great soundtrack, Night at KTV is sure to be a hit with players! With 5 reels, 15 paylines, and extra features like exploding winnings symbols, cascading combos, and a bonus One & Six dice game, this slot is something special. DonвЂ™t miss this opportunity tap into one of AsiaвЂ™s most popular forms of entertainment and offer your players one of the most glamorous games on the market.'
    WHERE identifier = 'gameart:NightatKTV'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dare you seek the wisdom of the most powerful beings in the Viking world? Norns'' Fate from GameArt is a 6-reel, 30-payline slot that will transport you to a mythical world of Nordic legends and runes, where your fate will be decided by the beautiful, all-knowing Norns. Are you ready to discover your fate?'
    WHERE identifier = 'gameart:NornsFate'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The beautiful princess and the mighty power of the phoenix''s flame will regenerate and boost your wins in this amazing oriental PHOENIX PRINCESS 5 reel – 20 pay line slot game. You can win 8 free spins when 3, 4 or 5 Phoenix symbols land beginning on the first leftmost reel, from left to right on adjacent reels. During the free spins Princess, Palace, Vase and Flower symbol turn WILD and substitute for Jing-Jang symbol in winning combinations. Land the required scatter bonus symbols while your free spins lay out and you''ll score yourself another batch of free spins to play with!'
    WHERE identifier = 'gameart:PhoenixPrincess'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab your arms ‘n'' armour and enter the era of Vikings with Piggy Bjorn. Then help him battle it out with the Fire Giant Surtr in the fiery realm of Muspelheim where you can claim huge multipliers and be the richest of all in the land!'
    WHERE identifier = 'gameart:PiggyBjornMuspelheimsTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover who''s been lying with Piggy Holmes, the debut game in the Piggy Who! series from GameArt.'
    WHERE identifier = 'gameart:PiggyHolmes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dragons bestow good fortune and combined with the lucky number 8 in form of the wild dragon is the key mystical power symbol for the POWER DRAGON slot game. With its 5 reel – 243 win ways and a player selectable feature it is a player satisfaction guarantee. Win the bonus feature with any three of more Coin symbols from the leftmost reel to right. In the bonus, screen select the number of free spins and its three different multipliers. During free spins, Red Pockets symbols appearing simultaneously anywhere on reel 1 and 5 pay an extra bonus prize of 2, 5, 10, 15 or 20 times total bet. It''s also possible to add more free spins to your tally, simply by landing the required number of scatter symbols while the bonus round plays out.'
    WHERE identifier = 'gameart:PowerDragon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you have what it takes to join the heroine of heroines on an epic seafaring adventure? The QUEEN OF THE SEAS bids you welcome to this 5 reel – 20 payline treasure hunt. Ahoy me hearties! Plunder the seven seas in this swashbuckler action packed game! Remember to look for the treasure as all pirates do! You may get 3, 4 or 5 Treasure chests on your adventures!'
    WHERE identifier = 'gameart:QueenofTheSeas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the mysterious Egyptian world of RAMSES TREASURE. A 5 reel - 10 pay line slot game with astonishing graphics and sounds is ready to engage you with its frequent bonus, where 3, 4 or 5 scattered Golden Chest symbols lead you to the bonus feature. During the bonus screen, the Golden Chest will determine the number of free spins and symbols that will turn gold and act as wild during the free spins feature. Bonus feature can be retriggered during free spins.'
    WHERE identifier = 'gameart:RamsesTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for brutal combat and insane wins in Rosh Immortality Cube Megaway - a dark journey toanother world, from GameArt.With an incredible 117,649 potential Megaways  to win, cascading symbols, and fully-loaded with extrasthis is our most explosive game yet. So, sharpen your blade and enter a world of forbidden magic, beautifulprincesses, fearsome dwarfs, vicious orcs, and unholy abominations.'
    WHERE identifier = 'gameart:RoshImmortality'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'European Roulette is a classic Roulette game with 37 slots numbered 0-36. Players can bet directly on the Classic Table Layout or else opt for the Track Layout.'
    WHERE identifier = 'gameart:Roulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Kings, Queens and Princes and Princess themselves would covet ROYAL GEMS to be their favourite Royalty game of the nobility. The 5 reel – 10 pay line games is full of stacked precious gold and gems symbols making the stage for the royal crown. The symbols pay on played line in the adjacent pays form - left to right, right to left or in the middle of the reel set. Any combination of a kind (3, 4 or 5) awards big wins.'
    WHERE identifier = 'gameart:RoyalGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'SANTA''S FACTORY is a 7x7 cascading reel slot game with lots of visual effects and exciting festive features, including four SANTA''S BOX FEATURES, SANTA''S BONUS, TOTAL WIN MULTIPLIERS, SUPER SIZED SYMBOLS, RANDOM GIFTS, and a GIFT RETURN.'
    WHERE identifier = 'gameart:SantasFactory'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Win 5 free spins for each line where the CHICKEN substitutes a winning combination, and each GOLDEN EGG that appears during the free spins repeats the wild win that triggered the bonus features. The repeat wild win amount is displayed in the banner above the reels during the free spins and can be multiplied by up to 5 times for every free spin. Bonus feature can be retriggered during free spins.SANTAвЂ™S FARM is positively bursting with Christmas decorations and lights, the brightest colours and a feel-good cosy spirit thatвЂ™s sure to brighten even the darkest of winter evenings, making it an irresistible choice this festive season.'
    WHERE identifier = 'gameart:SantasFarm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Some people try to lead an easy life in the comfort of their home and in the conformity of the mundane! But if you are not one of these people and want to lead a life of excitementand glamour, filled with adventure, shocking beauty and blissful glasses of the finest wine, follow the man himself to get rich in the SLOT OF MONEY!'
    WHERE identifier = 'gameart:SlotofMoney'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There was once a band of fierce warriors known from the Aegan to the Ionian sea. Their skill unmatched by any foe, their tactics flawless and their spirit unscathed. Now their legacy is known worldwide, now you can join them!'
    WHERE identifier = 'gameart:SpartansLegacy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The mist is rising, the smell of blood thickening. Vampires are emerging from their graves, ready to feast on human blood.\r\n\r\nWe''re celebrating this Halloween with a spooky party in this 5x3-reel slot game with 25 paylines where landing 3+ SCATTERS (Bonus symbols) in the base game triggers the GRAVE DIGGER BONUS round. Many Halloween treats await you here.\r\n\r\nYou can expect rewards such as +1 FREE SPINS up to a maximum of 10 and up to three symbols that act as WILDS in Free Spins. The Wilds display at the top right of the game shows which symbols are acting as Wilds so there''s no mystery surrounding that. Wilds substitute all symbols except Bonus Game symbols (Scatters).\r\n\r\nOnce you''re in Free Spins, landing 3+ Bonus Game symbols awards a retrigger of the Grave Digger Bonus game. Each Grave Digger Bonus retrigger is played after the current Free Spin has been completed.\r\n\r\nSpooky Graves also comes with a GAMBLE FEATURE in which winnings can be gambled up to five times.\r\n\r\nA spooky party is unfolding in the graveyard, with all kinds of zombies in attendance. Will you dare to join?'
    WHERE identifier = 'gameart:SpookyGraves'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reach for the celestial bodies with the universes starry of stars. Play STAR CASH, a 5 reel – 10 pay line game where new universal riches are waiting to be discovered! The pursuit of the unknown will reward you with lots of stacked money symbols and the excitement of the revealing the WILD STAR symbol. The WILD STAR symbol is WILD and substitutes for all symbols. If the STAR lands on the reels 2, 3 or 4 it expands on the entire reel and triggers the RE-SPIN. All reels containing STAR are held and all other reels are re-spinned once, up to a maximum of 3 re-spins. The game plays both ways; left to right and right to left.'
    WHERE identifier = 'gameart:StarCash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Storm the light fantastic, with one of Mother Nature''s most powerful elementary forces, awaits players looking for lots of LIGHTING action in the STORMING FLAME game. This 5 reel – 5 pay line game is rich with classic slot game symbols like various fruit and 7''s and provides constant and lighting fast spin & storming win action. To fire up the action, four feature symbols (CHERRY, GRAPES, LEMONS and PLUM) pay extra: 15 of a kind on reels 1,2,3,4 and 5 multiplies total game win by 5, 12 of a kind on reels 1,2,3 and 4 multiplies total game win by 4, 9 of a kind on reels 1,2 and 3 multiplies total game win by 3!'
    WHERE identifier = 'gameart:StormingFlame'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put on your best party wear, grab some drinks, and dance the night away to blood-pumping, summer beats in GameArt''s SUMMER JAM.'
    WHERE identifier = 'gameart:SummerJam'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Super Heated Sevens is a classic 5x3 reel slot\r\nwith 20 paylines that burst into flames when a\r\nwin occurs. To win, players must match symbols\r\non the paylines'
    WHERE identifier = 'gameart:SuperHeatedSevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sushi lovers, get ready to indulge! Take your seats at the sushi bar and marvel at the tempting choice of nigiri and sashimi.'
    WHERE identifier = 'gameart:SushiYatta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Use the advantage of Nikola Tesla''s genius to help you score accelerating wins in the TESLA - SPARK OF GENIUS slot game. Test your genius and skill with this 5 reel – 243 win ways and a player selectable feature it is a player satisfaction guarantee. Win the bonus feature with any three of more AC Motor symbols from the leftmost reel to right. In the bonus, screen select the number of free spins and its three different multipliers.'
    WHERE identifier = 'gameart:Tesla'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get your daily dose of rootin-tootin Cowboy Wild West action and adventure by playing TEXAS RANGER''S REWARD slot game. The 5 reel – 20 pay line game is all about wild experience chasing stacked wild symbols that can award big prizes. 10 Free Spins are triggered by any 3 or more scatter symbols. During the Free Spins when Gols Star wild symbol substitutes in a line win on reel 2, the win is multiplied by X2 or X4 as displayed on the reel.'
    WHERE identifier = 'gameart:TexasRangersReward'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Traditional Chinese empire welcomes you with the 3 KINGS slot game. The 5 reel - 15 pay line game offers constant and exhilarating action together with its wild Dragon and scatter rich Pearl symbols – both being the bonus feature triggers to heighten player engagement. The bonus feature is triggered if the Dragon symbol and/or a Pearl symbol appear on reels 1 and 5 simultaneously, awarding 15 free spins. During free spins a random multiplier (x2, x3, x5 or x10) is selected for each win. Bonus feature can be retriggered during the free spins.'
    WHERE identifier = 'gameart:ThreeKings'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Face your fears with the mystic Native American spirits with THUNDER BIRD slot game. The 5 reel – 20 pay line game will keep you on thrills with is frequent flying and soaring WILD Eagle stack wins. Get three or more Thunder Bird feature scatter symbols in any position and you will be awarded 10 free spins where all the WILD Eagle symbols on reels 3, 4 and 5 become sticky and remain like that for the whole duration of free spins.'
    WHERE identifier = 'gameart:ThunderBird'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The tiger is of nature''s most powerful cats. Hear and feel the beat of TIGER HEART to pump up your daily dose of adrenaline is this heart-stopping slot. The 5 reel – 10 pay line game delivers lots of big heart pumping wins with its stacked symbols feature. Win 8, 10 or 15 free spins with 3, 4 or 5 Tiger Heart symbols on any pay line with a maximum of 150 free spins. All wins during free spins are doubled. Bonus feature can be re-triggered during free spins. Welcome to one of the most powerful slots in the jungle!'
    WHERE identifier = 'gameart:TigerHeart'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This beautiful, unique city of Northern Italian with its unique history and fashion takes you into the romantic and nostalgic world of VENETIA. The game provides a 5 reel - 20 pay line games offers the bonus feature that is triggered by 3, 4 or 5 scattered Venetian Mask symbols awarding 15 free spins. All wins during the free spins are multiplied THREE times. Bonus feature can be retriggered during the free spins with big probability of bonus feature retrigger.'
    WHERE identifier = 'gameart:Venetia'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Poker (Jacks or Better) is played with the aim of forming a winning combination with a five-card poker hand. The higher the player hand, the more winnings paid. The player can replace the cards once per round to try to get a better hand.'
    WHERE identifier = 'gameart:VideoPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One of nature''s most intelligent mammals'', the Dolphin, take a deep dive into this beautifully designed waterscape environment with encaptivating graphics and immersive sounds takes you into the submarine world of WILD DOLPHIN. A 5 reel - 10 pay line game offers the bonus feature that is triggered by 3, 4 or 5 scattered Pearl symbols awarding 15 free spins. All wins during the free spins are multiplied THREE times. Bonus feature can be retriggered during the free spins – big probability of bonus feature retrigger.'
    WHERE identifier = 'gameart:WildDolphin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for gunslinging action in Wild Wild Quest from GameArt! The Bandit has swaggered into town, and he''s got a bounty on his head – can you help the Sheriff put him behind bars?'
    WHERE identifier = 'gameart:WildWildQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Venture into the uncharted wilds of the old American northwest with Wolf Hunt from GameArt! This5-reel, 25-payline slot is set in a vast mountainous land, home to native tribes and all kinds of wildlifeincluding deer, beavers, eagles, snakes, and of course, wolves вЂ" packs of snarling grey wolves!Come face-to-face with the Wolf Wild, substituting for all symbols except the Scatter and GoldenFootprint, and meet the beautiful native girl in a feathered headdress bearer of great gifts as theScatter\; land 3 and you''ll be given 6 Free Spins.In such big, wide-open country it''s fitting that, during Free Spins, reels 2, 3 and 4 spins together as oneGigantic symbol! And, when you land a Gigantic Scatter, you''ll be awarded 3 extra Free Spins with no limit to the number of retriggers.As a tracker on the trail of the wolfpack, youвЂ™ll want to see 6 or more Golden Footprint symbols, becausetheyвЂ™ll trigger the Wolf Respins feature. During these, each Golden Footprint symbol displays either aMINI, MINOR or MAJOR JACKPOT. Starting after all win combos are paid, normal symbols disappear andonly Golden Footprints remain. Wolf Respins use Special reels, featuring only Golden Footprints andempty spaces. You''ll start with 3 Respins and each Golden Footprint will remain on the reels and triggermore Respins. Fill all 15 positions and you''ll win the MEGA JACKPOT!And, if you''re feeling lucky, there''s a red or black вЂall or nothing gamble feature, allowing you to doubleyour winnings up to five times. Just don''t forget to keep your rifle handy, because these wolves arecunning.'
    WHERE identifier = 'gameart:WolfHunt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Explore one of nature''s top predators and start your WOLF QUEST journey with twists and turns in this state of the art 50 pay line slot game, with stacked Wolves and wild Moon symbols to heighten your Quest as it unfolds in front of you. Three Shamanic symbols on reels 1, 2 and 3 triggers the bonus feature awarding 10 free spins. During the free spins an extra wild Moon symbol is added to reels 2, 3, 4 and 5 after every completed spin increasing the number of wild symbols for an enhanced chance of big wins. The Bonus feature can be retriggered during the free spins throughout the Quest. WOLF QUEST brings to life the most captivating and mysterious Native American rituals, transporting players to a world of ancient tradition and folklore. The full moon with the howling wolf is the wild symbol, taking the place of any other symbol in the game with the exception of the wolf''s paw. Hit three wolf paws at the same time and you''ll be transported to the free spins bonus round, with 10 free spins to play with and a bunch of additional wilds! Land another three wolf paw scatters during the bonus round and you''ll be handed another five free spins! A symbol of power and luck for many cultures worldwide, the wolf could be your ticket to an impressive payout! In WOLF QUEST, it''s a case of pitting your wits against the great outdoors and seeing what the spirits have in store! Sign up and get started today!'
    WHERE identifier = 'gameart:WolfQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s no chance of cooling down in Xtreme Hot, a classic 5x3 reel slot with 5 paylines in which fruits burst into flames when a win occurs. All wins are for combinations of adjacent symbols of a kind on played lines'
    WHERE identifier = 'gameart:XtremeHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you love games with simple mathematic which can give you biggest wins this game for you! There''s two options to take a lot of money. First - to catch 5 Chilli Scatters. And if you are the real fan of fruit slots you need the second option - to feel all reels with sevens and to take win 5000 bigger then your bet. Enjoy the game!'
    WHERE identifier = 'gamzix:40ChilliFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you miss the summer Sun, the feeling of sand under your feet and a couple of cocktails in your hands, Banana Bar gives you a chance!'
    WHERE identifier = 'gamzix:BananaBar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The main plot of the Book of Symbols slot is a search for treasures in the pyramids of Ancient Egypt. The game is filled with sacred symbols, hieroglyphs and scarabs, following which the player goes the way to the divine light. Overcoming all trials, you gain eternal youth of the soul, living beyond space and time.'
    WHERE identifier = 'gamzix:BookOfSymbols'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Burning Power is a perfect mix of the fruity slots,\r\n elegant design and the classic feel of gambling.\r\nThe juicy fruits are mixed with red hot chilly pepper!'
    WHERE identifier = 'gamzix:BurningPower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the dark times of ancient China and hot breeze of dragon. Dragon''s secret slot gives you a chance to belive that 5 blessing symbol brings luck and riches! Be sure that you will enjoy free spins with a lot of wild symbols there'
    WHERE identifier = 'gamzix:DragonsSecret'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The new Gold of Maya game will plunge into the misterious and majestic atmosphere of ancient civilization. You will feel the presence of Mesoamerican Gods, experience the power of Mexican Highland and be filled with wonder by the spirits of nature.\r\nGold of Maya offers players to dive into the atmosphere of ceremonies and rituals collecting symbols and free spins. The playing field of new video slot invites you to go on an unforgattable trip full of mystical adventures, and music on the background only multiplies the effect of presence.\r\nThe game consist of the classic number of 5x3 reels, 12 lines, with RTP 96.19％. The main feature of the game Gap Feature in case of the winning combination increases the multiplier by winning in each step (maximum multiplier is 4). Multipliers also increase in free spins and in the first step all winnings have already been multiplied by 3, in step 2 by 6, 3-9, 4-12. The maximum winning is 7000 times more than bet which gurantees success even at the smallest expenses and 4 prograssive jackpots only strenghten this opportunity.\r\nGold of Maya isn''t just a game. It allows to dive into the shadow area of the soul and get acquainted with the ancient inhabitants of those places.'
    WHERE identifier = 'gamzix:GoldOfMaya'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Stay calm and go wild! Yes, this two actions possible with Go Wild slot game! We specially made art and sounds which will help you to stay calm when you will hit 3 respins with expanding wilds! '
    WHERE identifier = 'gamzix:GoWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The perfect blend of magic jungle forest full of mystic totems,\r\ndancing flamingos, unbelievable fruits and flowers mixed up with special features such as Boost Wild, Dual Symbols, \r\nRun-On Reels, Scatter. '
    WHERE identifier = 'gamzix:HoongaBoonga'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive into the criminal streets of the city and take a deep breath preparing for the real gangster adventures. \r\nThe city is full of brave gangsters, honest cops, fierce fights, guns and stylish lowriders.\r\nThe game will show you what HOT LIFE is.\r\nThe feeling of danger and the right music will take you into the\r\nstreets full of risky deals, temptation  and jackpots you can certainly try to win.'
    WHERE identifier = 'gamzix:HotLifeBuyBonus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try to catch Joker and take the win! Joker appears on 2,3,4 reels and expands for all neighboring positions. The maximum win you can take when Joker will appear on middle line of 2,3,4 lines and will epand for all layout. And also don''t forget about opportunity to win progressive jackpot and become millioner '
    WHERE identifier = 'gamzix:JokerSplash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic slot with fresh skin! 3*3 reels and doubling the win when fill whole layout with fruits. This game can''t give you millions, but it could give you good wins quite  often. While other game providers trying to do hot games we offer you really hot game!'
    WHERE identifier = 'gamzix:ReallyHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'HOT BET FEATURE\r\nWhen the HOT BET mode is activated, the player turns on an alternative set of reels, where the ability of complete fill of the reels with fruit becomes much higher. Those fruits that give X2 in the main game when fully filled will give x6. In this case, the player''s bet becomes 2 times more with the same payments for winnings.\r\nSUPER HOT BET FEATURE\r\nWhen the SUPER HOT BET mode is activated, the player gets the HOT BET mode + the RUN ON REELS ™ function (during the game, one or more reels may randomly start to respin to get additional winnings, when the RUN ON REELS ™ function is started, the win is guaranteed). In this case, the player''s bet becomes 3 times bigger with the same payments for winnings. Symbols in this mode are mainly stacked.\r\nThe symbols of fruits, chilly pepper and bells have a very classic and old fashioned design and when the winning comes the symbols activate and move with flames! The animation of the fire is something hot and makes the player feel the strong will to play and win more.'
    WHERE identifier = 'gamzix:ReallyHotFlamingEdition'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Egyptian mysticism has always attracted with its mystery, and the riches of the pharaohs are legendary. Gamzix presents a new slot Sunny Coin:Hold the Spin which captivates with its unique mathematics and interesting bonuses inside the game: Free Spins with levels, Bonus Game, Buying Free Spins.'
    WHERE identifier = 'gamzix:SnowCoinHoldTheSpin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive into the criminal streets of the city and take a deep breath preparing for the real gangster adventures. \r\nThe city is full of brave gangsters, honest cops, fierce fights, guns and stylish lowriders.\r\nThe game will show you what HOT LIFE is.\r\nThe feeling of danger and the right music will take you into the\r\nstreets full of risky deals, temptation  and jackpots you can certainly try to win.'
    WHERE identifier = 'gamzix:SunnyCoinHoldTheSpin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Flames and fruits are the perfect match for the classic slot game. We tried our best to give players the opportunity to have a very familiar interface but with a hot twist. The Star Scatter and Wild 7 areready to give more wins on the bets!'
    WHERE identifier = 'gamzix:TheHottestGame'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'After adventures in the deep came a step back to our childhoods, resulting in a revival of all things retro, and so 40 Pixels was born. Loaded with blocky fruits, stars and 7s, this chunky slot sports simplicity as its signature and goes 8-bit crazy with blippy music and sounds.'
    WHERE identifier = 'groove:40Pixels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Chinese inspired treasure hunting continued with a bamboo-bordered, lily-laiden pond of Amazing Yu fish. The wild Yu washes players with respins with up to 25x multipliers, whether through the Buy Yu feature or appearing naturally, while filling the 3x3 grid with the same symbol triples wins.'
    WHERE identifier = 'groove:AmazingYu'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Anime-themed is not so popular in the world of slot games, however, Fugaso studio continues to create unusual themed slots, tracking current market trends to make all users happy.'
    WHERE identifier = 'groove:BookOfAnime'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Passion for play attracted ancient Sumerian gods and the Book of Anunnaki was unearthed. Serving as a key to the fate of humanity, the mysterious book plays wild and unlocks free games with randomly selected expanding symbols adding a touch of destiny.'
    WHERE identifier = 'groove:BookofAnunnaki'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover the Book of Tattoo 2'' by Fugaso. Compared to the first part the new slot is more colorful and interesting. Detailed symbols of dragons, tigers, sharks and scary skulls come to life on reels and give impressive wins. A sense of pleasant excitement provokes a Mystery symbol with Mystery Respin feature appearing randomly in the base game. And that''s not it! Collect 3 Bonus symbols of the Tattoo Book on the reels and get 10 Free Spins with the sticky Mystery symbol on the reel 3.'
    WHERE identifier = 'groove:BookOfTattooII'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Golden sunshine led to golden treasures courtesy of the Chinese god of wealth himself. The precious yellow metal leads to multiple winning ways with golden bowled Koi triggering free games with x6, x8 or x9 win multipliers, while gold coins unlock the choicest picks.'
    WHERE identifier = 'groove:CaiShen689'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'New game worthed your Halloween attention'
    WHERE identifier = 'groove:Cazombie'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Slots ''Clash of Gods'' from the software provider Fugaso is a 5x3 game with 243 betways. Slot has RTP=96.5% and high level variance.  Main game features are: Wild, FreeSpins, Jackpot, Scatter symbols, Mystery symbol.'
    WHERE identifier = 'groove:ClashofGods'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Swapping sweet for salty, we dived into the Deep Blue in search of hidden treasure. Glinting amidst the glowing sea life are rich remnants of swashbuckling adventures, with mysterious bottled scrolls and gold coin multipliers burning down the fuses to four Jackbomb jackpots.'
    WHERE identifier = 'groove:DeepBlue'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fоrtunе Сіrсuѕ ѕlоt іѕ а brаnd nеw саѕіnо ѕlоt thаt wіll саtеr fоr уоur nееdѕ оf ultіmаtе еntеrtаіnmеnt. Тhе Сіrсuѕ hаѕ аrrіvеd іn tоwn, ѕо рrераrе уоurѕеlf tо gаthеr уоur Fоrtunе іn thіѕ 5-rееl, 3-rоw, 20-lіnе сlаѕѕіс ѕlоt, fеаturіng Wіld Ѕubѕtіtutіоnѕ, Ѕсаttеr Wіnѕ аnd Dау 2 Dау Јасkроtѕ fеаturе. Fоrtunе Ѕlоt іѕ а саѕіnо ѕlоt thаt hаѕ bееn dеѕіgnеd wіth аttеntіоn tо dеtаіl. Fugаѕо hаѕ іnvеѕtеd mаѕѕіvе еffоrtѕ іntо сrеаtіng thіѕ ѕlоt, ѕо whу nоt асknоwlеdgе thе соmраnу''ѕ еffоrtѕ.'
    WHERE identifier = 'groove:FortuneCircus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dreaming of summer? Don''t waste your days away - just play this tropical slot from Felix Gaming to enjoy those warm, relaxing days right now!Across these five reels and 20 paylines, you''ll find plenty of wilds buried in mounds of delicious fruit - the perfect combination to take home some truly sweet wins.'
    WHERE identifier = 'groove:FruityMania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the mood for all the fun of the fair? Then maybe don''t choose this one, as there''s a pretty creepy clown lying in wait in this five-payline slot from Felix Gaming, just itching for the chance to ensnare you. Having said that, if you are brave enough to face him, there are wilds, multipliers of up to x25 on every win and the chance to win up to five extra spins on every single spin here... and you could get your hands on all of it. The only question that remains is this: do you really have the courage?'
    WHERE identifier = 'groove:Joker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s just never enough juice so we squeezed in some more with Juicy Wilds. The game''s epic Hyper Jump feature fast-forwards through no-win spins and skips straight to the juicy bits: the Pick Me Bonus and Free Games Feat'
    WHERE identifier = 'groove:JuicyWilds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'After the fifth sun came the darkness and out crept the Kukers. Bulgarian man-beasts adorned with loud bells designed to chase away evil spirits, these colourful creatures transform into additional wilds if they land on the centre portal for shock wins.'
    WHERE identifier = 'groove:Kukers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''re in the mood for dancing... are you? If so, you''ve come to the right place: Felix Gaming are about to transport you into the party of a lifetime in this five reel, 243 ways to win slot, which has wilds, free spins, multipliers, magic reels and even more to give you a truly lit experience. Get out onto the dance floor!'
    WHERE identifier = 'groove:LightDance'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lit only by candles and the sparkle of jewels, Felix Gaming''s most dazzling magician is hard at work in this five reel, 20-payline slot. We''ve never seen a magician''s lair made up of such a kaleidoscope of colours, and we can''t help wondering what treasures may lie withinEnter the magician''s hideaway, making your way carefully around the potions, skulls, books and jewels littering the floor. The electrifying soundtrack and hypnotising sound effectswill put you under just the right kind of spell, getting you in the mood to explore the features of this vibrant slot. Collect three scatters to trigger up to ten free spins, which are accompanied by a x2 multiplier, or use the green potion to fill the tubes either side of the reels - when they''re full, you''ll unlock the bonus feature, which is an epic party of respins and stacked wilds.'
    WHERE identifier = 'groove:LinesOfMagic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A delightful combination between Magic, Fruits and Spinners is what will bring your excitement to the next level and beyond!'
    WHERE identifier = 'groove:MagicSpinners'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fancy living the high life for a while? Then this 20-payline slot from Felix Gaming is exactly the place for you. Monaco''s winding roads, beautiful buildings and expensive vehicles are hiding plenty of exciting riches that you can get your hands on - like instant wins, extra spins, pick your prize bonuses - and if you''re lucky enough to spot the red car whizzing past after a win, your payout will be multiplied by between x3 and x25.It''s time to find out how the other half live... good luck!'
    WHERE identifier = 'groove:MonacoFever'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In need of a little luck? Why don''t you take a trip to visit the mischievous pixies, elves and leprechauns of Ireland and see if they can help you out?This five reel, ten payline slot from Felix Gaming has an abundance of pots of gold for you to claim, and with wilds that hold the reels and trigger a free respin, plus plenty of beer and that impish Irish spirit, we''re pretty sure you''ll have fun doing it.'
    WHERE identifier = 'groove:MrLuck'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for a new adventure? Search no more, brave explorer: this five reel slot from Felix Gaming has everything you''re looking for! Journey deep into the temples of Ancient Egypt and discover twenty golden paylines and plenty of expanding wilds to give you as many opportunities to win as possible. Sounds like an expedition worth taking to us!'
    WHERE identifier = 'groove:PharaohsTemple'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ever been to outer space? No? Then prepare for the journey of a lifetime, as you venture into the heart of this five reel, ten payline slot from Felix Gaming. Who knows what kind of extraterrestrial elements you may find out here? We don''t know, but we hear wilds, extra spins and the chance to win up to 218x your bet might come into it somewhere.'
    WHERE identifier = 'groove:PlanetRocks'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let the rich colours of an Asian village captivate you in this beautiful five reel, 20-payline slot from Felix Gaming, where you can get your hands on expanding wilds, unlimited extra spins, a pick-me bonus and multipliers of up to 20,000x your bet. If you''ve been waiting for an opportunity to embark on a new adventure, it looks like the time has come... good luck!'
    WHERE identifier = 'groove:RedLion'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Evil spirits vanquished, the warm Mexican sunshine illuminated a tasty feast of tortillas and tequila with upbeat rhythms from mariachi maracas. Colourful piñatas hide the delightful treat of free games with sombrero and poncho clad Mexican wilds stacked and wins tripled'
    WHERE identifier = 'groove:Spinachos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spinbox is an online slot developed by Felix Gaming and it''s built around the classic 3X3 layout. The game theme is completely classic in the slot there are such symbols as diamonds, sevens, stars, BARs, game chips. The number of bet lines is fixed - 9 lines. This slot has only 1 game feature - The chip prize feature. This feature can contain chip prizes of 100, 50, 20, 15, 5, 4, 3, 2, or 1 multiplied by the total bet. Play the Spinbox slot demo for free, read a review, and claim a bonus.'
    WHERE identifier = 'groove:Spinbox'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Slot ''Stoned Joker'' from the game provider Fugaso is a 5x4 game with 40 betways. Slot has RTP=95.05% and MED  level variance. Main game features are: Wild, Jackpot, Risk (Double) game, Gamble.'
    WHERE identifier = 'groove:StonedJoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Slot ''Stoned Joker 5'' from the game provider Fugaso is a 5x3 game with 5 betways. Slot has RTP=95.66% and MED level variance. Main game features are: Jackpot, Scatter symbols, Gamble.'
    WHERE identifier = 'groove:StonedJoker5'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'All that destiny worked up an appetite for sweetness and so SugarLand was born. Chock full of syrupy fruits, crunchy candy canes and swizzly stars, this fantasyland satisfies every sweet tooth with expanding iced donut wilds and fabulous free games making it sweeter still.'
    WHERE identifier = 'groove:SugarLand'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There is something quite mysterious about Ancient Egypt that keeps iGaming developers occupied constantly. Fugaso might have figured out a thing or two about mummification in The Mummy Win Hunters online slot.'
    WHERE identifier = 'groove:TheMummyWinHunters'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video slot The Mummy Win Hunters Epicways is an Egyptian-style game with a 6x5 reelset. You can win up to 50,000X bets. RTP - 95.82%. The game has the following features: Multiway (+1024), wild, Scatter symbols, FreeSpins, Buy Feature, Expanding Symbols.'
    WHERE identifier = 'groove:TheMummyWinHuntersEPICWAYS'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'uiced up and ready to go, things got a bit wild, and the result was a Greek and beast mashup. The wild beast appears on the reels and stomps out respins if he lands on a winning line, while the 3 gold coins trigger an equally fast and fierce free spins game.'
    WHERE identifier = 'groove:TheWildBeastofCrete'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Expanded oriental wins were next in our destiny with the super-sized 6-reel layout of Three Kingdoms Romance. 729 ways to find fortune await players in the base game, with rich opportunities multiplied by the 2,025 ways of the free games feature, unveiling up to 50 free spins with additional expanding wild power.'
    WHERE identifier = 'groove:ThreeKingdomsRomance'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Anyone who is interested in a serious topic of politics will also be interested to relax and try the new slot from Fugaso. Trump It Deluxe Epicways is the third slot in the Trump It series by Fugaso. The game is framed in the same comic funny style as the slot predecessor Trump It Deluxe. This slot will definitely make you smile, regardless of your political views.'
    WHERE identifier = 'groove:TrumpItDeluxeEpicways'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A step back led to a jump back and so dawned the golden Aztec inspiration Under the Fifth Sun. Upbeat yet mystical exploration awaits, with the gold snake''s head descending the pyramid steps and the shimmering wheel both offering grand reward'
    WHERE identifier = 'groove:UndertheFifthSun'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Witcher Cave slot reviewLast Update: 30.06.2021. Author: SlotCatalog.Felix Gaming studio constantly pleases its fans with a variety of slot machines on various topics. This time they created the Witcher Cave slot with a magic theme. The slot has a 3-4-5-4-3 layout and 720 betways. Among the symbols, there are various magic scrolls, potions, candles, and other ingredients for creating witcher magic. The Wild symbol can only appear on reels 2-4. The scatter symbol activates Free Spins. During the Free Spins mode, you can get Additional spins up to 180. The slot machine can be launched from any modern device.'
    WHERE identifier = 'groove:WitcherCave'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel back to the 1960s and meet the intrepid Agent 51 as he investigates all manner of unusual goings on in this mystery adventure. Complete with HyperBonus, and K-Loops (the new name for LuckyLoops), chase aliens and huge wins in this amazing new thriller.'
    WHERE identifier = 'kalamba:Agent51_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Age of Dragons is a 5-reel, 3-4-3-4-3 game with 40 paylines. There is an accumulation feature whereby symbols are accumulated to a counter for each column over multiple spins, and when a sufficient number is collected for a given column then the column becomes wild for a number of spins. Additionally, there is a free spinsbonus.'
    WHERE identifier = 'kalamba:AgeofDragons_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the Age of Huracan! Our 50th game sees players exploring the Mayan temple in search of thrills and big potential wins. Packed with epic features, this trip into history delivers a truly legendary gaming experience.Can your players raid Huracan''s treasure? There''s only one way to find out - make sure Age of Huracan is in your lobby from from launch day!'
    WHERE identifier = 'kalamba:AgeOfHuracan_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Age of Ice Dragons! Another seasonal entry in our always growing library of games. Showcasing the flexibility of custom game assets to meet promotional, brand and seasonal requirements of our operator partners and adding a seasonal twist to our monstrously successful Age of Dragons. This 5-reel, 3-4-3-4-3 game with 40 paylines and a 2000x bet max win gives and extra level of excitement by combining Kalamba''s unique Missions mechanic (with bronze, silver, gold and platinum levels), accumulating wild symbols & super-volatile Free Spins Bonus effectively maximizing players engagement over time. Ice Dragon Throne awaits! Set the reels on fire and conquer it!'
    WHERE identifier = 'kalamba:AgeofIceDragons_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Atlantis Thunder is a 6 reels, 3-4-5-5-4-3 rows, 3600 pay ways game with free spins, hyper bonus, progressive jackpots and multiplier wild symbols. A Free Spins Bonus is triggered when 3 or more special symbols appear during the base game. The volatile free spins mechanic comes with high potential for retriggers. Wild symbols act as multipliers, raising excitement for a well-known feature. The Personal Progressive Jackpots is a proven engagement and retention mechanic from previous game releases and targets high-value players. Players rewarded with higher jackpots for extended play or higher bets. Hyper Bonus  monetization mechanic  targeting all player demographics. Used highly successfully in land-based casinos, now available online in Kalamba Games giving a player option to go directly to free spins. Intuitive win feedback with ways pays well suited to retention and engagement. Frequent retrigger in frees pins rounds with multipliers encouraging engagement.'
    WHERE identifier = 'kalamba:AtlantisThunder_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Showcasing the flexibility of custom game assets to meet promotional, brand and seasonal requirements of our operator partners, celebrate St. Patrick''s day with a seasonal twist to a player favourite Atlantis Thunder. Atlantis Thunder is a 6 reels, 3-4-5-5-4-3 rows, 3600 pay ways game with free spins, hyper bonus, progressive jackpots and multiplier wild symbols. A Free Spins Bonus is triggered when 3 or more special symbols appear during the base game. The volatile free spins mechanic comes with high potential for retriggers. Wild symbols act as multipliers, raising excitement for a well-known feature. The Personal Progressive Jackpots is a proven engagement and retention mechanic from previous game releases and targets high-value players. Players rewarded with higher jackpots for extended play or higher bets. Hyper Bonus  monetization mechanic  targeting all player demographics. Used highly successfully in land-based casinos, now available online in Kalamba Games giving a player option to go directly to free spins. Intuitive win feedback with ways pays well suited to retention and engagement. Frequent retrigger in frees pins rounds with multipliers encouraging engagement.'
    WHERE identifier = 'kalamba:AtlantisThunderStPatricksDay_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bangkok Dreams is a 5 reels, 4 rows, 40 paylines game with free spins, symbol accumulation & wild symbol multipliers. High-rollers can play the game at the most volatile of 4 game play choices, and can even make a special bet to enter the free spins bonus directly! Newer players will be engaged by the easy-to-understand retention mechanic and can be brought on board at one of the lower volatility settings. Operators can offer free rounds with any bet option in order to engage players at the right spot, giving a plethora of retention marketing options around a single game.'
    WHERE identifier = 'kalamba:BangkokDreams_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join Big Bounty Bill on his journey to the Badlands in dogged pursuit of a gallery of original villains to reel in big prizes in this Retro-futurist slots adventure.  Packed with Kalamba signature features that let you play your own way, Big Bounty Bill lives up to his name with a maximum win of 5000x bet, allowing truly intrepid gunslingers out there to chase really big wins.Persistent Hyperspins add an extra layer of fun - collect expansion symbols to raise column height then collect 3 symbols to trigger HyperSpins.Can''t wait to to land some prizes? Use our signature HyperBonus feature to shortcut to the bonus round 16807 ways pays and a maximum win of 5000x bet make Big Bounty Bill an essential addition to your collection. Bounty huntin'' has never been more fun!'
    WHERE identifier = 'kalamba:BigBountyBill_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This bigger and even better sequel to last year''s smash hit is sure to be a resounding hit among key target demographics.Featuring K-Boost, where players fill two meters with each base game spin to get a higher number of starting free spins, Two different Free Spins games, K-Split, and HyperBonus, Blazing Bull 2 truly takes the visuals and excitement to the next level!'
    WHERE identifier = 'kalamba:BlazingBull2_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get close to nature and track Blazing Bull across this 6-reel, 4-row video slot where 4096 ways pays. Trekkers can collect silver and gold bonus symbols to trigger free spins with multipliers. Bears, Eagles, Wolves cougars are your spirit guides on the quest to find the Blazing Bull!'
    WHERE identifier = 'kalamba:BlazingBull_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Burning Diamonds delivers the fiery volatility our players love. Use HyperBet to set the level of wild multipliers in the reels to chase those bigger wins and additional free spins or shortcut directly to the free spins rounds with a HyperBonus special bet. With luck on your side you could land one of four accumulating Bonus Jackpots and win big.'
    WHERE identifier = 'kalamba:BurningDiamonds_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Shiver me jackpots! Get ready to sail the seven seas with Caribbean Anne. High volatility and persistent player features make this one not to be missed!Hyperbonus, Hyperbet, Locking Multiplier Wilds and 4 level Bonus Jackpots all add to the fun and excitement as you get aboard and sail off on your pirate adventure.'
    WHERE identifier = 'kalamba:CaribbeanAnne_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Crystal Cavern is a place to seek precious stones, relaxing fun - and big potential wins! Atmospheric sounds and sparkling symbols allow players to get engaged and enjoy chilling out whilst having a huge amount of fun. Proven monetisation and retention features make this game sure to charm players from all backgrounds.'
    WHERE identifier = 'kalamba:CrystalCavern_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Set in a desert landscape, the game offers a treasure trove of exciting in-game features taking players on a quest for hidden gems, additional free spins and wild multipliers. This 4x5 video slot incorporates the popular HyperBet feature enabling players to adjust game volatility and win potential by setting the number of gold symbols in the reels. Selecting more gold symbols increases the probability of hitting bonus jackpots and increases pay line pay-outs. Multi-layered symbol collection mechanics enable players to decide whether to play bonus rounds at bronze, silver gold and platinum levels for ever increasing win potential and match their play style with risk appetite.'
    WHERE identifier = 'kalamba:DesertGem_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dino Odyssey combines sharp, high production quality graphics, a unique and volatile maths model that will keep players excited and playing for a long time.The missions collection feature also has a reward of locking bonus spins, that will entertain players for a long duration.The free spins feature symbols can be collected to lock wilds in up to 3 of the center columns at the same time. The missions collection feature provides an intuitive and simple engagement funnel that will provide excellent short and long term retention. Players are able to choose to play the bonus respins at any of the 4 levels, or to keep playing for a far higher reward. With the increasing levels of the bonus providing more volatility and higher rewards, Dino Odyssey offers lasting engagement for players. At the same time, the nature of the volatility profile, combined with the missions mechanic, offers excellent opportunities for redeposit promotions.'
    WHERE identifier = 'kalamba:DinoOdyssey_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Doctor Electo introduces a unique layer of player engagement with column expansion collection meters and the all new Hyperspins feature. Upping the bar again with art, animation and audio, Dr. Electro is a 5-column, 4-row base game with expanding reels, increasing to 7 rows and a huge 16807 ways pays. Collect column expansion symbols in the base game, trigger the all new Hyperspins feature to unlock the reels, then continue collection to further expand the reels and up the win potential. Enter free spins with Bonus scatter symbols or even immediately with a HyperBonus special bet. Expansion symbol collection in free spins extends reels directly and awards freespin retriggers. Progressive Platinum and Gold Bonus jackpots are back by popular demand and with expanded reels the opportunity to win big just increases. Packed with engagement, monetisation and retention - the classic Kalamba Games calling card!'
    WHERE identifier = 'kalamba:DoctorElectro_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double Joker is a flashy classic style game with novel features on a 3x3 reel grid. Joker symbols are wild and can have up to a 3x multiplier, so any win can be multiplied up to 27x. The respins feature is triggered whenever 2 or more joker symbols appear, and joker symbols are locked in place wild the reels respin. This exciting feature gives players the volatility they crave, with the chance to lock jokers in all positions on the reels for even greater awards. Double Joker features Kalamba''s missions mechanic, where players can choose what symbols to collect over 30, 50, 75, or 100 spins, and get paid out for the final number collected. This compelling retention feature adds a new layer of excitement to the game, and is sure to keep players coming back for more.'
    WHERE identifier = 'kalamba:DoubleJoker_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Roll up roll up!  Come to the spooky fairground at twilight where you can try your luck at shooting ducks and scoring massive potential wins!  Get more free spins with our SpinBoost feature or go straight to the bonus feature with HyperBonus in this chilling and exciting adventure, where anything is possible if you can survive...from Ducks till Dawn.'
    WHERE identifier = 'kalamba:DucksTillDawn_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you have a problem and no one else can help, and you live in 19th Century California, who do you call? El Vigilante of course! Our latest good guy helps other good guys catch bad guys - whilst of course looking for massive potential wins in his own inimitable style. Featuring three game modes; the Base game, Free Spins, and K-Cash spins; El Vigilante is a true swashbuckling adventure!'
    WHERE identifier = 'kalamba:ElVigilante_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Finnegan the lucky leprechaun has lost his pot of gold and been tricked into joining a group of 19th century banditos to try and get it back! Can you stop him and go for huge potential wins? Featuring three game modes; the Base game, Free Spins, and K-Cash Spins; Finnegan''s Banditos is an unmissable leprechaun fighting adventure!'
    WHERE identifier = 'kalamba:FinnegansBanditos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Can you defeat the Firedrakes and raid their treasure?  This epic title features 6 reels and 40 lines and sees players join a team of Vikings in hot pursuit of mythical beasts and magical riches.Kalamba''s signature features, HyperBonus, HyperBet, LuckyLoops and more are present to help players on their journey.'
    WHERE identifier = 'kalamba:FiredrakesFortune_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fire Eagle has a unique reel layout with glossy high-res graphics that will instantly impress players. Already proving popular with players, it now comes with Kalamba''s Missions. Players will have fun collecting different symbols for loads of different prizes and can choose between bronze and platinum missions for massive payouts of 1000x+ or even higher when promotions are running! The random stacked wilds, super exciting free spins rounds and the popular missions features, will quickly engage players for lasting entertainment. Missions provide an extra layer of player engagement and retention with attractive and variable rewards for completing objectives. Players can select their own level, helping the early engagement funnel while offering different pay-outs that drive long-term entertainment. The free spins offers visible potential for huge wins providing a high level of excitement The random stacked wilds give quick feedback that will further help player engagement.'
    WHERE identifier = 'kalamba:FireEagle_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gates of Babylon is a 40-line 5x4 game with a novel accumulation mechanic to win multiple spins with stacked wilds. During the base game, when gold coin symbols land, they award a ruby for the reel on which they landed. When there are 3 rubies collected for any reel, the full reel becomes wild for 3 spins, with a chance to retrigger for more! The free spins features this same collection mechanic, but once a stacked wild is awarded it remains locked for all remaining spins, giving a chance to win one massive payout after another.'
    WHERE identifier = 'kalamba:GatesofBabylon_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Challenge your players to unlock the Goblin Treasure Vault! This all-new title features THREE new unique mechanics designed for massive volatility and huge win potential. HyperBonus allows players to go straight to their choice of any of these features in this unmissable fantasy crime caper.'
    WHERE identifier = 'kalamba:GoblinsGemstones_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Goldfire 7s is a classic style slot with an exciting respins feature and locking wild multipliers, which offers the player attractive and visibly huge potential wins. Coming with Kalamba''s awesome missions feature and all the revolutionary promo tools, they provide an extra layer for increasing player engagement and retention. Players can select their own level, helping the early engagement funnel, while offering different rewards for long-term entertainment.'
    WHERE identifier = 'kalamba:GoldFire7s_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Battle mythological creatures in the search for the Mighty Griffin in our latest slot title. Journey up Mount Olympus and encounter Manticores and even the evil Goddess Medusa in an epic quest for big potential wins.'
    WHERE identifier = 'kalamba:GriffinsQuest_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the world''s greatest detectives, Holmes and Watson on a spectacular clue chase through Victorian London! Featuring K-Boost, K-Cash with a maximum 200x multiplier, 2 types of Free Spins and HyperBonus, the magic is indubitably the mystery in this extraordinarily compelling slots adventure.'
    WHERE identifier = 'kalamba:HOLMESReelDetective_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Random Walking Wilds is an all new engagement feature in this 4-row, 5 reel slot. Wild multipliers are set by players using the trusted Hyperbet mechanic, raising the minimum bet levels, driving monetisation and of course upping win potential and volatility. An excellent funneling mechanic for players transitioning from beginner-intermediate-VIP and testing the waters with higher volatility and payouts. 3 bonus symbols award Free spins and the random multiplier theme continues with locking wilds defined by the player selected HyberBet level. Symbol collection progression mechanics that extend session length open the Bonus Game which can be played at bronze, silver, gold and platinum levels. Extended game play rewards the higher Bonus Games levels and greater payout potential. Back by popular demand is HyperBonus to buy-in directly to free spins and raise average bet per round. Another fun and successful monetisation feature.'
    WHERE identifier = 'kalamba:HongBao_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a relaxing walk through ancient Rome! Jewels of Jupiter features a unique reel layout, 10c minimum bet, Random Reel Wilds, HyperBonus and four levels of persistent Missions. Make sure your players get the chance to revel in this fantastic, engaging classical world, with truly legendary potential wins!'
    WHERE identifier = 'kalamba:JewelsofJupiter_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We are delighted to present you with yet another exceptional slot experience with a brand new Kalamba Games title: Joker 3600! This is a 6-column, 5/4/3/3/4/5 row game with ways pays. It includes the most wanted features like our signature Hyper Bonus (a shortcut to Free Spins which you can activate on demand) or Progressive Jackpots. Collecting bonus symbols in regular gameplay will also give you access to Free Spins. We re-designed the graphics and made this Joker experience more unique and up to date for the players. Let''s enjoy this classic slot experience together!'
    WHERE identifier = 'kalamba:Joker3600_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Joker Lanterns is a classic Vegas style slot theme with a Halloween twist. Jackpots, extra free spins and our signature HyperBonus feature are all there to make sure you have a super fun Halloween with massive potential wins!'
    WHERE identifier = 'kalamba:JokerLanterns_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What could be better than the luck of the Irish? The extreme volatility of a Joker game you say? Well, we have great news. We''ve wrapped both up all in one St Patrick''s day extravaganza. Four levels of jackpots and HyperBonus and HyperBet round out this great seasonal, classic Vegas-style slot.'
    WHERE identifier = 'kalamba:JokerLeprechauns_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Building on the smash hit Joker Supreme, Joker Max captures the classic Vegas style slot theme but now with even greater win potential.  Higher multipliers and and all-new graphics and animations make this a game not to be missed.'
    WHERE identifier = 'kalamba:JokerMax_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Joker Supreme captures a classic slot theme beautifully with clean, slick graphics and animations that will resonate with players across multiple markets. Hyper Bonus, player selected multipliers, bonus jackpots and a free spin collection mechanic are just a few in-game features giving an added twist to this masterpiece. Delivering top end volatility and potential returns, Joker Supreme is sure to wow and entertain our ever expanding fan base.'
    WHERE identifier = 'kalamba:JokerSupreme_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have Yourself a Merry Little Christmas, with Joker Supreme: Christmas Edition!  Based on the smash hit earlier in the year, Joker Supreme: Christmas edition retains all the great features of the original game, with added Christmas sparkle.  HyperBonus, Selectable Wild Multipliers and Bonus Jackpots are present and special Santa Jokers have been added to make Christmas go with a swing in this highly volatile, classic-themed game.'
    WHERE identifier = 'kalamba:JokerSupremeXmasEdition_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Special Easter edition for the player favorite Mammoth Chase. A volatile ride with mammoth payout potential. A 4096-ways game that is designed from beginning to end to give players a volatile experience. It features stacked mammoth symbols that combine to award huge wins, and a free spins bonus with a frequent retrigger and where wild symbols act as multipliers, giving excitement to a well-known feature. As a final layer of volatility, Mammoth Chase has three levels of Bonus Jackpot that are awarded for scattered Mammoth symbols. The highest level jackpot starts from 1000x bet, giving an obvious chance to win big!'
    WHERE identifier = 'kalamba:MammothChaseEasterEdition_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mammoth Chase is a 4096-ways game that is designed from beginning to end to give players a volatile experience. It features stacked mammoth symbols that combine to award huge wins, and a free spins bonus with a frequent retrigger and where wild symbols act as multipliers, giving excitement to a well-known feature. As a final layer of volatility, Mammoth Chase has three levels of personal progressive jackpots that are awarded for scattered Mammoth symbols. The highest level jackpot starts from 1000x bet, giving an obvious chance to win big!'
    WHERE identifier = 'kalamba:MammothChase_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Mermaids Galore! A beautifully crafted environment and a lighter approach towards the slots experience which combines the best of several Kalamba features, all driven towards giving players a choice of how they want to play the game. Players have a choice to select and play the main with up to 5 gold symbols, with each gold symbol having increased pay to offer much higher volatility for larger bets. Additionally, players can choose to enter the free spins directly with 1-5 gold symbols, via Kalamba''s HyperBonus signature feature.'
    WHERE identifier = 'kalamba:MermaidsGalore_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Miami Bonus Wheel where a great 3x3 game with 10 paylines awaits.  The wheel bonus is triggered by a symbol combination, and the wheel can award a cash prize or trigger a free spins bonus!  Another chance for players to chase great potential wins and for operators to engage and retain players.'
    WHERE identifier = 'kalamba:MiamiBonusWheel_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Midas Treasure! This 5-column, 4-row game with 5 reels and 40 lines slot is bringing back our signature and most wanted features based on popularity within the playerbase. Hyper Bonus allows players to play free spins instantly by choosing one of four bets. Selected Hyper Bet determines the number of initial free spins and wild multiplier. You can trigger the Free Spins by collecting 3 Bonus Symbols during which you can collect Extra Spins Symbols to extend your bonus round time as well as Convert Symbols into gold ones which will open the possibility of even bigger wins! And last but not least our Symbol Collection feature where by collecting silver coins you can trigger Bonus Game and win extra rewards on four different levels (bronze, silver, gold and platinum). We are confident that Midas Treasure is packed with features and volatility your players will love and it will be a great addition to your slots collection!'
    WHERE identifier = 'kalamba:MidasTreasure_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monkey God Buy Feature is a fresh take on a classic Kalamba title that allows the player to choose their preferred volatility level by enabling up to 4 Gold Symbols. Featuring an all-new UI, HyperBonus and other key tweaks, Monkey God Buy Feature is a great addition to any lobby.'
    WHERE identifier = 'kalamba:MonkeyGodBuyFeature_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monkey God combines the pure excitement of choosing volatility from 4 different types of game play, with a collection mechanic that has been proven to drive player engagement. It features an accumulation meter to win bonus spins, 243 ways pays, a personal jackpot, and different betting levels to enable a different number of higher-paying Golden symbols. Retention mechanic features symbol accumulation and bonus spins, which is our best-proven feature so far to drive engagement. An exceptionally engaging high-monetization game for your high-rollers and new players alike. Players can make 4 different bets, going from 38 coins to 88 coins, to enable a different number of Golden symbols that have higher payouts and volatility. The free spins features a super-frequent retrigger, with 3 extra spins awarded for any 2 bonus symbols. Jackpot is more probable with more golden symbols enabled and features a free spins with frequent retriggers and 2x and 3x wild multipliers.'
    WHERE identifier = 'kalamba:MonkeyGod_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take the role of a secret agent in the hunt for Diamonds in this brand new slots game that might just send you to Double-O Heaven!The Casino beckons as players search for Diamonds to trigger the Bonus round, sports cars, watches and other secret agents in the quest for big wins.There are 6-reels in a 3-4-5-5-4-3 layout and 3600 ways pays. Go straight for the kill with HyperBonus to access the bonus round instantly. Up the ante with our signature HyperBet feature.Make your choice of up to three symbols gold to increase potential wins. Diamonds are for free spins: collect diamonds in the bonus game to win free spins and chase Wild Multipliers to have a chance for even bigger prizes. Individual Bonus Jackpots on three levels - Silver, Gold and Platinum round out the action. Action packed with a pulsating sound track, this highly volatile espionage game has a license to thrill.'
    WHERE identifier = 'kalamba:OperationDiamondHunt_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter the magical realm of Purrsia, where legendary cats rule and players can chase huge potential wins via the Mythical Wheel of Dreams. Incorporating the Kalamba signature feature\; HyperBonus, Sticky Wilds and Multiplier Wilds, PawPrints of Purrsia is sure to have players purring with excitement!'
    WHERE identifier = 'kalamba:PawprintsofPurrsia_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get immersed in the wonderful underwater world of Aphrodite!  Complete with Ocean Respins, Locking and Expanding Multiplier Wilds, HyperBet and HyperBonus, Pearls of Aphrodite is an engaging, enjoyable blend of captivating visuals and great features.'
    WHERE identifier = 'kalamba:PearlsofAphrodite_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a truly wild ride into antiquity with Pharaoh''s Reign! Featuring Multiplied Prizes, Free Spins, Morphing Wilds, Cashpots and our classic feature, HyperBonus, make sure your players have the chance to take a trip of a lifetime in this classic Egyptian-themed slots adventure.'
    WHERE identifier = 'kalamba:Pharoah''sReign_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic and mystery are sure to be found in the Enchanted Forest where the Pyro Pixie waits to make someone''s day!  Imps and fauns are among the creatures players will be seeking in this 6 reel fantasy-themed slot which includes our signature features Lucky Loops, HyperBet and HyperBonus.  When the Pyro Pixie appears, fun and big potential wins are near!'
    WHERE identifier = 'kalamba:PyroPixie_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ruby Hunter captures the essence of adventure in this expedition themed 6-column, 5-row game and stunning art, animation and audio. Wilds lurk round every corner as players immerse themselves in a quest for Rubies in this highly volatile, 3600 ways pays adventure. 3 or more Temple Symbols trigger Free Spins and open the gates to a wealth of possibility and an added layer of engagement in the all new Free spins Bonus Feature. 3 or more Ruby Jackpot symbols lock and trigger a respin in the Free Spins Bonus Feature in the pursuit of Gold, Silver or Platinum Jackpots and 3608x bet max payout. Free spins continue to be awarded with any combination of 3 or more Temple Symbols for extended gameplay in the reward filled Bonus Feature. HyperBonus is back by popular demand with 4 levels of the special bet buy-in feature to shortcut players into the opportunity filled Free Spins rounds.'
    WHERE identifier = 'kalamba:RubyHunter_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One hero - TWO great adventures! The industry''s first game co-developed with streamer CasinoTest24 is one for the ages. Join our intrepid adventurer, Sadie Swift, as she speeds between two classic slot locations in search of great treasure, and of course, huge potential wins. Players can choose between two different Free Spins games, each with their own unique mechanic, as well as shortcut straight to the Free Spins game via HyperBonus, or choose their own level of volatility with HyperBet!'
    WHERE identifier = 'kalamba:SadieSwiftGunsandGlyphs_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the Sky Hunters crew on an epic chase for bounty and big wins! This 5x3 game is packed with Kalamba signature features including HyperBonus, HyperBet and LuckyLoops which will both monetise and engage players from wide demographics and from casual players to VIPs.'
    WHERE identifier = 'kalamba:SkyHunters_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The 1920s roared, now let''s make the 2020s roar too with Speakeasy Boost! Complete with Kalamba signature features, HyperBonus, HyperBet and K-Boost, this music-themed title is sure to entertain and engage.'
    WHERE identifier = 'kalamba:SpeakeasyBoost'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Venture into the Temple of Heroes and search for treasures beyond your wildest imagination!  Collect Great Pyramids to trigger free spins, or access free spins instantly via the HyperBonus feature.  Our  signature HyperBet mechanic allows players to expand the reel set to 6 and access multipliers at the highest level for even bigger potential wins.  Built from the ground up, this Eyptian-tech themed slot is sure to resonate with players from all backgrounds and play styles.'
    WHERE identifier = 'kalamba:TempleOfHeroes_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It is a 243-ways game, that is designed from beginning to end to give players a rollercoaster ride. When they appear, each of the four types of tiger symbols get doubled, giving players an awesome chance for massive payouts. To add to the ever-increasing excitement, there is also a frequently triggered free spins round, where the wild symbols act as multipliers! As the final layer of volatility, Tiger Claws also has three levels of personal progressive jackpots, that are awarded for any scattered white tiger symbols. The highest level jackpot starts from 1000x bet, giving the players every opportunity to win really big!'
    WHERE identifier = 'kalamba:TigerClaws_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tree of Gold features a glossy Asian art package with a unique reel layout and features geared toward volatility and retention. Already proving popular with players, it now comes with Kalamba''s Missions. Players will have fun collecting different symbols for loads of different prizes and can choose between bronze and platinum missions for massive payouts of 1000x+ or even higher when promotions are running. The random stacked wilds, super exciting free spins rounds and the popular missions features, will quickly engage players for lasting entertainment. Missions provide an extra layer of player engagement and retention with attractive and variable rewards for completing objectives. Players can select their own level, helping the early engagement funnel while offering different payouts that drive long-term entertainment. The free spins offers visible potential for huge wins providing a high level of excitement The random stacked wilds give quick feedback that will further help player engagement.'
    WHERE identifier = 'kalamba:TreeofGold_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s all about instant wins with Vegas Blast - a classic fruit game with a twist! Featuring 5 levels of Cashpot with K-Cash Symbols all rolled into one, a crazy Free Spins game with K-Cash Symbols and Multipliers; and HyperBonus, Vegas Blast is an old school thrill ride with state-of-the-art game mechanics.'
    WHERE identifier = 'kalamba:VegasBlast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Venture into the world of Wizards, Orcs and Assassins with this brand new fantasy-themed slots game from Kalamba games.Collect magic amulets to lock whole reels wild and embark on your choice of four missions where you could win up to 1000x your bet! Reels chase: Collecting three magic amulets locks any or all of columns 1, 3 and 5 to Wild, a regularly recurring achievement, which increases win potential for even more excitement. Missions: Make your choice of four missions where you could win up to 1000x bet.Collecting a tiered number of spell books within 100 spins triggers a win, giving an almost guaranteed winning experience for everyone! What''s more, both features are persistent so you can pick up right from where you left off. With some of the most advanced features around in slots, great artwork and a super-slick user interface, Wildcraft is, quite simply, magic!'
    WHERE identifier = 'kalamba:Wildcraft_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This September, enter the haunted churchyard with the spook-tacular Zombie Queen!The game has 6 reels, 4 rows and 50 pay lines and is packed with fun features. She may seem scary at first, but she brings good news - when the Zombie Queen appears you know your day''s going well!HyperBonus allows you to enter the free spins game directly and HyperBet allows you to adjust the value of the wild multipliers in the reels, generating the chance for really exciting wins. If you see the Zombie Queen''s face creeping the reels, don''t run away -these Walking Multiplier Wilds give you even more chances to win. In addition, you can also collect special accumulation brain symbols that can be cashed in at 40, 60, 80 or 120 and play the Bonus game - you can also return to the game later and your non-redeemed symbols will still be there! A strong theme that will appeal to everyone, the Zombie Queen is sure to entice players who are seeking extra ghoulish thrills from their play. Get ready for the Zombie Queen to rise!'
    WHERE identifier = 'kalamba:ZombieQueen_k'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive deep into a fluorescent dreamworld of oceanic wonders in Bubble Dreams, an undersea experience that will captivate and thrill in equal measure. Explore vibrant coral reefs and swim with dolphins and turtles as you spin and win in a mesmerising aquatic adventure. The stunning aquamarine colours will have you slipping into your diving suit in no time.'
    WHERE identifier = 'lucky:BubbleDreams'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to head back out on safari into the vast, untamed savannah in Kakadu Sunset - a 15 payline beast of a slot.'
    WHERE identifier = 'lucky:KakaduSunset'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'They''re cute, loveable, fluffy and purring with big wins, so let''s play some cute kitty love in the form of big wins in the KITTY CATS slot game.'
    WHERE identifier = 'lucky:KittyCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to swing down to the quaint old farmyard and meet Wild Mega Bunny. So get your country boots tapping and grab your egg baskets to collect some eggs made from silver, gold, and diamonds!'
    WHERE identifier = 'lucky:WildMegaBunny'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The air is heavy with anticipation of the next attack. What was once a family home is now a strategic hideaway, a safehouse where you will meet the heroes of this slot. In the gloomy days after the zombie virus outbreak, they have lost count of how many zombies they have defeated, and how many of their friends have turned into braindead enemies. \r\n\r\nThe seasoned zombie hunters have been awaiting the next wave of the brain-hungry creatures for days on end. Today, they will fight back against the undead, and they want YOU to join their ranks. Do you have what it takes to defeat the zombies and collect the rewards while saving the world?'
    WHERE identifier = 'mancala:Braindead'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the new and exciting world of glossy fruit symbols, but don''t let the retro machine trick you into believing that you are about to play an ordinary fruit slot!\r\n\r\nThree exciting levels with a different type of gameplay and insane big wins in the third level. All this together with polished blueberry, orange, grape, watermelon symbols in a Cherry Bombs slot!'
    WHERE identifier = 'mancala:CherryBombs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Learn the chilled way of living with a charming tiki character who is the star of this slot. Burning sun, smooth sand, the palms moving with the sea breeze, and waves washing the shore create an impeccable atmosphere of this game.\r\n\r\nWith each wave that hits the shore a new set of symbols appear, a tropical fish, a crab, a starfish, or a jellyfish are the cute sea inhabitants you will see on the reels in this game.\r\n\r\nCoco tiki is a 3-reel, 3-row, and 5-line slot game with Wild and special X and O symbols, free spins, and multiplier. The three of a kind symbols pay both ways and once the Wild symbol pictured as a bottle appears, the Coco tiki feature starts.'
    WHERE identifier = 'mancala:CocoTiki'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your next great adventure and big win are tucked inside an ancient ruin within a mystical, cursed forest. Be warned, that a strong group of dwarf miners tirelessly guard their magical crystals and treasures. On top of the forest''s mad curse, no one has yet to discover the ancient mine or catch a glimpse of the slightest treasure. Will luck be on your side this time? Will you be able to release the curse, persuade the dwarves, and take home the treasures of the forest? '
    WHERE identifier = 'mancala:CrystalMine'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild, Bonus Mix, Money Box, Connecting Wilds.'
    WHERE identifier = 'mancala:FruitFactory'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your adventure begins under the strong summer rays in the African Savannah. Not just that – but one filled with mysterious treasures and hidden artifacts buried just beneath the surface. An ancient civilization has once prospered here, and legends say that there are handfuls of lost treasures still waiting to be found. And as Carl and Lisa have already traveled to every corner of the globe for hidden treasures, this has got to be where it sits. With bags and tools in hand, will you manage to uncover them all with them? Will the sandstorms get in your way? Find out if luck will be on your side in this adventurous quest of a lifetime.'
    WHERE identifier = 'mancala:MancalaQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monster Thieves are mischievous creatures of the night and also the stars of this new slot game. There is a great suspicion that they are the reason for some of your belongings go missing with you not knowing why.\r\nAccording to the research, there are different kinds who lust for different items. Are your keys, headphones, socks, or even a toilet paper roll be gone? Now you know where to look for and who is to be blamed. One thing is for sure, though, you cannot be mad at them, because of how cute they are!'
    WHERE identifier = 'mancala:MonsterThieves'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to experience different realms, waiting to be discovered with our fierce Portal Master. Powerful spheres of energy surround the gates, with different animals guarding unique crystals and treasures that every man seeks to witness for himself. Our beautiful Portal Master commands the energy, allowing you to walk through the elements without harm – but only if you win her heart. Will you enchant her enough to open the gates and grant you access to entirely new dimensions of big wins? Enter our portal to find out.'
    WHERE identifier = 'mancala:PortalMaster'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reel Reel Hot is the result of blurring the line between the modern and traditional. This game offers everything that a classic fruit slot should, with a side of dynamic elements, special symbols, bonus games, and a clean design enhance the thrill of gambling. \r\nThanks to the thoughtful combination of visuals and sound effects that will take you straight to the bustling night atmosphere of Las Vegas with bu innovative bonus features and enhanced game mechanics, this game is guaranteed to draw you in. \r\nOn top of that, the thrill of the game will be pumping in your veins as you discover the bonus features, including Bonus Reels, Nudge & Hold feature, and Bonus Prize Wheels in which you can land your biggest casino win yet with endless prizes and\r\nrewards.'
    WHERE identifier = 'mancala:ReelReelHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If the walls of this cursed mansion could speak,\r\nwould they reveal the truth? Behind the ornate\r\nwindows and intricate gates of this family home lies\r\na haunting mystery. The once-happy family has\r\nbeen torn apart by a dark secret tied to the\r\nunsolved murder of Alfred Vale, who disappeared\r\nwithout a trace. The rumour has it that the\r\nmurderer could be someone from the family itself.'
    WHERE identifier = 'mancala:TheTwinWinsMystery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The streets of this city are bustling with all kinds of people reflecting the facets of the new society, hanging in there, trying to stay alive for one more day. The sun is burning, but not for you as you will be taken to the city''s underground. \r\n\r\nAbandoned yet alive, being the home to renegades and outlaws. This is where you meet the heroes of this slot, samurai Tokameda, the monk Bunan, the graffiti girl Dee and the most dangerous shooter Bones.'
    WHERE identifier = 'mancala:ZeroDay'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fair winds and following seas! Find the treasure map together with courageous corsairs, ahoy!'
    WHERE identifier = 'mascot:3_corsairs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game''s mechanic is as simple as it is attractive - the Mascot team has taken one of their\r\nmost popular games, Fruit Vegas, and updated it just the way the players wanted. The new\r\ngame offers six reels instead of the usual 5 and 3600 pay ways for even more winning\r\nopportunities.'
    WHERE identifier = 'mascot:aloha_tiki_bar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Beautiful queen Anksunamun, Nefertiti daughter, will help you unravel the mystery of pharaoh''s tomb. Are you ready for a thrilling adventure? Great treasures, severe gods, pharaohs and pyramids - enjoy the breathtaking world of Ancient Egypt!'
    WHERE identifier = 'mascot:AnksunamunTQoE'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Baccarat historically was the favorite entertainment of aristocratic high society, in the original version secret agent 007 James Bond played exactly this game. Try your luck not wearing a tuxedo – you are invited to our virtual table!'
    WHERE identifier = 'mascot:baccarat_mg'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The smooth rustle of bamboo stalks, the murmur of a cool mountain stream... Tranquility and peace reign in the Chinese garden. Like Yin and Yang, game excitement and spiritual balance inevitably meet each other. Find your harmony with a bamboo bear!'
    WHERE identifier = 'mascot:bamboo_bear'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Endless golden sands, pyramids and… cats. It''s time to go to Ancient Egypt! Bastet, the goddess of joy, fun and richness will bring you luck. Meow!'
    WHERE identifier = 'mascot:BastetAndCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to try our amusing video slot with juicy cartoon graphics and exciting features. Multiply your winnings with Benny''s Shoot Me bonus and catch Elephant''s free spins game with up to x125 multiplier Wilds. Thrilling jungle adventure has never been so funny!'
    WHERE identifier = 'mascot:bennys_the_biggest_game'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What''s the first thing that comes to your mind when you think about casino? Of course, it''s Blackjack – a classic card game, popular all over the world. We made it as accessible as possible – sit at the virtual table, enjoy good music and play!'
    WHERE identifier = 'mascot:blackjack_mg'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The great goddes of the Sun Amaterasu is shining in the sky. Look, she''s opened her book in front of you! Now your fate is in your hands.'
    WHERE identifier = 'mascot:book_of_amaterasu'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We are going straight to the Wild Wild West: hey cowboy, do not pass by our wild saloon! Keep your wits sharp, your heart open, and your gun loaded. Hot girls and desperado guys wanted!'
    WHERE identifier = 'mascot:cancan_saloon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Doughnuts, biscuits, and marshmallows in the brand new colorful video slot by Mascot Gaming. Please, welcome - The Candy Crush!'
    WHERE identifier = 'mascot:candy_crush'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In a faraway castle a Great Dragon guards his precious eggs like the apple of an eye. Try to grab this treasured trophy from him!'
    WHERE identifier = 'mascot:dragons_nest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'FAIRYTALE COVEN is based on a magic forest theme that serves as home to the coven of powerful fairies. It boasts a unique Risk&Buy feature that allows players to make decisions that impact the result of the game and the size of their win.'
    WHERE identifier = 'mascot:fairytale_coven'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The battle for a magical realm is on the rise in the universe of the new slot game by Mascot Gaming. The fantasy theme, loved by many, looks especially sharp thanks to the 3D character symbols. The developer has already stablished its reputation as the creator of online casino games with stunning graphics, but what else can the\r\nplayers expect from the new game?\r\nThe famous Risk&Buy feature is available after every spin, regardless of whether the player wins or loses. The game can increase the player''s win at any time if they are ready to take the risk - what a smart way to spice up the game, especially when it comes to big wins.'
    WHERE identifier = 'mascot:for_the_realm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Nobody loves fruits as much as slot lovers. Our superhit fruits started their opulent voyage in Vegas. Ready, steady... and we are in fabulous Macau! Juicy fruits, immersive music, plenty of new thrilling features – open the second chapter of Mascot Gaming Fruit Trilogy. The next stop is Monaco!'
    WHERE identifier = 'mascot:fruit_macau'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'From Vegas to Macau, from Macau to Monaco: our fruit tour of casino capitals is making a real blast. Feel the royal vibe, play like a king, enjoy your juicy victory in a classic fruit game!'
    WHERE identifier = 'mascot:fruit_monaco'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Juicy splash in the sands of the Ancient World. Enjoy a fresh adventure to marvelous Luxor!'
    WHERE identifier = 'mascot:FruitsofLuxor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We all love the atmosphere of the good old Vegas. A bright cocktail made of colourful fruits, funny music and favourite features is waiting for you. Let yourself drain into a fresh, juicy world!'
    WHERE identifier = 'mascot:fruit_vegas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The enchanting melody sounds in the mountains. This is a magical place where the sun shines and gems are hidden. Immerse yourself in this atmosphere and take your gems!'
    WHERE identifier = 'mascot:gemz_grow'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Noble Gryphon guards a castle full of treasures. Will you dare to take them? Your bravery deserves a great reward!'
    WHERE identifier = 'mascot:gryphons_castle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the Las Vegas vibe and try your luck against the casino! Enjoy our classical interpretation of Texas Casino Hold''em – the most popular sort of poker game.'
    WHERE identifier = 'mascot:holdem_mg'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Once again the Emperor sends his legions to conquer new lands. Will the great Roman Empire be even more powerful? Join the Legioner for the sake of immortal victory!'
    WHERE identifier = 'mascot:legioner'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Since the beginning of time wild animal world was lead by a strong lion and his pride. What role will you choose - predator or prey? Hear the roar of animal king!'
    WHERE identifier = 'mascot:lions_pride'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Far far away in the woods stands the Tower. White-haired wizard Merlin is doing his miracles here. Magic potion brings luck to everyone who comes here. Let''s go for a wonders and treasures!'
    WHERE identifier = 'mascot:merlins_tower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The magical underwater world hides incredible treasures, but only the most courageous will get them. Beautiful mermaids will reveal the secret of the deep sea to you!'
    WHERE identifier = 'mascot:mermaids_bay'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ho Ho Ho Christmas is coming! It''s a most wonderful time of the year… but wait, who stole all the gifts? Bad Santa wants to ruin the celebration – don''t let him take your winnings! It''s gonna be Scary Merry Christmas!'
    WHERE identifier = 'mascot:merry_scary_christmas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Frosty, freezy, cool! It''s time to explore the spectacular Northern Pole. Follow the footsteps of gorgeous arctic animals and find a big winning!'
    WHERE identifier = 'mascot:northen_heat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s getting hot in here! Meet gorgeous ladies and take your prizes at our pin up cafe!'
    WHERE identifier = 'mascot:pinup_dolls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Badass dinosaurs await you with the most exciting game mechanics in the new slot game by Mascot Gaming - PRIMAL BET. ROCKWAYS. Hear the roar!'
    WHERE identifier = 'mascot:primal_bet_rockways'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Oh, the marvelous and mysterious East, the land of fairy–tales, rich in gold and gems… Let''s take an adventure together with Prince of Persia and hunt the legendary treasures!'
    WHERE identifier = 'mascot:prince_of_persia_tgop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you bored? We have a remedy for you! Without a doctor''s prescription.'
    WHERE identifier = 'mascot:purple_pills'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cards never lie, are you ready to risk to know your fate? Queen of Spades is waiting for you in her castle!'
    WHERE identifier = 'mascot:queen_of_spades'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Red goblin horde attacks! Protect your village from nasty creatures and get a gold reward! Secrets hidden in trunks gonna help you increase the winning.'
    WHERE identifier = 'mascot:red_horde'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you really think it''s not possible? Look around, they are here! Zombie apocalypse has come and only the strongest will survive. If you brave enough try to stay alive...or say good bye to some of your body parts. Yummy!'
    WHERE identifier = 'mascot:re_kill'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dystopian end of the world theme and unique Risk and Buy feature deliver excitement, anticipation and trills. Are you ready for the Riot?'
    WHERE identifier = 'mascot:riot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get your bow and arrows ready! Go on the great adventure with a legendary and heroic outlaw Robin of Loxley!'
    WHERE identifier = 'mascot:robin_of_loxley'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bloody hell! Somewhere in the woods sinister creatures are up to crawl out the ground and make some noise. It''s time to treat them with an old good chainsaw!'
    WHERE identifier = 'mascot:the_evil_bet'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you believe in myths of dragon''s treasures? Go on an adventure trip with powerful vikings then!'
    WHERE identifier = 'mascot:the_myth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Voodoo doll can protect from evil or destroy your enemies - what side do you choose? Mystery rites came here from Africa. Shaman hits the drum, performing his ritual...Spooky!'
    WHERE identifier = 'mascot:the_rite'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bewitched by a sorceress, ruthless Chinese Dragon Emperor has no mercy. His countless army turned into terracotta warriors. Who is brave enough to face the immortal army and unravel the riddle of Emperors'' tomb? The adventure full of danger awaits you on the road to the treasure!'
    WHERE identifier = 'mascot:the_tomb_det'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Olympus mountain is all covered with divine fruits. What are the gods up to? Take your chance and grab all the godsents in a new slot game!'
    WHERE identifier = 'mascot:TwinFruitsofOlympus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Elegant women and gentlemen in masks, endless canals and songs of gondoliers - join the magnificent Venice carnival! Oh, Bella Italia!'
    WHERE identifier = 'mascot:venetian_magic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever heard the wolf singing to the moon? Open your mind to the wild spirit of beautiful savage lands.'
    WHERE identifier = 'mascot:wild_spirit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you hear the thunder? Now your destiny is in the hands of the Greatest Olympic Gods! Beautiful Aphrodite, powerful Zeus and mysterious Hades are waiting for you in the new outstanding game.'
    WHERE identifier = 'mascot:zeus_the_thunderer'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aloha to an unforgettable journey of the great winnings and excitement. Let the power of the Hula take you to an amazing adventure. Embrace the magic and feel the mysterious charms of the islands. Enjoy Hawaiian dance and win incredible awards. Welcome to Hawaii.'
    WHERE identifier = 'mrslotty:AlohaCharm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chilli Hunter is Mexican-themed slot, which comes with 25 paylines, a bonus round full of free spins, and the potential for completely wild reels if player can hunt down the chillies. This 5x5 slot is a colourful and exciting journey into the world of Mexico. Free spins and bonus features available.'
    WHERE identifier = 'mrslotty:ChilliHunter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'None standard cross layout with 5 reels, 5 rows15 paylines7 regular symbols, with high multipliers which pay off from 4 or more symbols on a payline.1 Wild symbol1 scattered Free Spin symbol (30 freespins for the 5 anywhere on the reels, 30 free spins can be re-triggered during the free spins play)Gamble bonus game becomes active when the Wild symbol is involved'
    WHERE identifier = 'mrslotty:gemstower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hold ''n'' Link — 6 Hold ‘n'' Link Sphere symbols (fire spheres) falling on the screen trigger the Hold ‘n'' Link bonus feature. The player will get 3 spins. Every appearing Hold ‘n'' Link Sphere renews 3 spins. The game is finished when the player runs out of spins or fills all 15 cells with paying symbols. If all 15 cells are filled, the player wins the Grand Jackpot x1000.'
    WHERE identifier = 'netgame:AfricanKingHoldnLink'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The excitement will rise through the roof once you land three magicbook symbols, which trigger 10 free games! Before the bonus gamebegins, the player can pick one or more among 9 symbols, whichtransform into a special expanded symbol. Set off on a breathtakingexpedition over five reels with up to ten winning lines and a set ofimpressive features.Let the expanding madness begin by activating up to 9 expandedsymbols in one bonus game.'
    WHERE identifier = 'netgame:BookofNileMagicChoice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'MONEY, MONEY, MONEY… COLLECT LOTS OF MONIES WHILE PLAYING B.U.C.K.S. SLOT! IT IS A GAME FULL OF BONUS FEATURES, SO IT''S GAMEPLAY IS DEFINITELY AS RICH AS POSSIBLE. GET AN ABILITY TO MEET BENJAMIN FRANKLIN AND HIT A HUGE GRAND JACKPOT!'
    WHERE identifier = 'netgame:BUCKS'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Dolphin Queen slot is here to deliver the treasures of the seas and oceans right to the players'' homes. '
    WHERE identifier = 'netgame:DolphinQueen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hot Cash: Hold ‘n'' Link was created for everyone who loves the classic atmosphere of fruity slots. But the game, of course, is heated, as seen even from its name. The main feature of the slot is the classic Hold ‘n'' Link as well as the new Multiplier Feature. Please, take a look at the new game and see whether it is as hot as we claim or even hotter.'
    WHERE identifier = 'netgame:HotCashHoldnLink'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Just Gems: Hold ‘n'' Link slot comes with 5 reels and 10 win lines. All masterfully drawn symbols are closely connected with the rich theme. Gold Bars, Crown, and Cash are waiting only for their owners to join them. Moreover, for those who appreciate the classics, card symbols bring the desired comfort and nostalgic vibes. But, of course, they are also stylized. '
    WHERE identifier = 'netgame:JustGemsHoldnLink'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The new Luxor Relics slot was greatly inspired by the power of Egypt and is sure to impress the players with its unique features and setting.'
    WHERE identifier = 'netgame:LuxorRelics'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Squid Slot got its inspiration from popular culture, a top-rated TV show in particular. There is little to no chance that the players have not seen it or at least the excitement around it. So they will be nothing less than impressed with all the easter eggs and references.'
    WHERE identifier = 'netgame:SquidSlot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There are no slots without money. Netgame''s brand new The Big Game Hold ‘n'' Link slot is full of money and it will definitely please you just like a hundred dollar bill! Be sure that it''s gameplay is really rich, so just wait for top money prizes and lovely jackpots.\r\nFirst of all, the game starts with a 5X3 field of reels. There are 10 paylines in the slot, where combinations of thematic or card symbols are formed. The best of your base game wins will be brought by Money Bag, Money Hood, Stack of Money, Money Clip and Golden Coin symbols. Standard card symbols are here to bring you more wins while playing.\r\nSphere symbols are for big wins, and it will be enough to land 6+ of them to trigger Hold ‘n'' Link Bonus Feature. When the bonus is triggered, you have already fallen Spheres held on reels, while other positions are respun. Each respin costs you 1 of 3 lifes, but each new Sphere fallen resets lifes amount to the max of 3.\r\nDuring the Feature, The Big Game Hold ‘n'' Link slot reveals not only regular Spheres with some cash prizes, but also Pay, Collect, Jackpot and Last Chance Spheres. Pay Sphere adds some points to amounts of all other Spheres already landed. Collect Sphere comes with a random prize amount and adds to it''s amount the sum of already landed Spheres amounts. There are also Spheres with Mini and Minor Jackpots, as well as to fill all the Hold ‘n'' Link fields with any Spheres means that you hit the Major Jackpot!\r\nDiscover the game full of riches! Try The Big Game Hold ‘n'' Link slot by Netgame Entertainment.'
    WHERE identifier = 'netgame:TheBigGameHoldNLink'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Candy Themed Cascading Reel All-Ways-Pays Slot Game with video game like features such as levels and special candy icons that have unique functionality/bonuses.'
    WHERE identifier = 'nucleus:30000'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Candy Themed Cascading Reel All-Ways-Pays Slot Game with video game like features such as levels and special candy icons that have unique functionality/bonuses.'
    WHERE identifier = 'nucleus:30001'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fast Paced Fireworks themed 10 line 5 reel Slots3 Game.Note: Has a cloned version called Gemscapades that''s 7RED exclusive, it''s the same exact game.'
    WHERE identifier = 'nucleus:30004'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fast Paced Fireworks themed 10 line 5 reel Slots3 Game.Note: Has a cloned version called Gemscapades that''s 7RED exclusive, it''s the same exact game.'
    WHERE identifier = 'nucleus:30005'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fantasy Themed 30 Line 5 Reel Slots 3 Game.Unofficial Sequel to Once Upon A Time.'
    WHERE identifier = 'nucleus:30008'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fantasy Themed 30 Line 5 Reel Slots 3 Game.Unofficial Sequel to Once Upon A Time.'
    WHERE identifier = 'nucleus:30009'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Considered the sequel to an earlier game, Gold Diggers. Features the same characters as its predecessor, but completely different gameplay.Model is derived from Rook''s Revenge model.'
    WHERE identifier = 'nucleus:30012'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Movie Theater themed 25 Line 5 Reel Slots3 Game.Part of the informal Slots 2.5 product line.'
    WHERE identifier = 'nucleus:30013'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sushi themed 25 line 5 reel Slots3 Game. Internally referred to as our Slots 2.5 product line, as the game is much simpler compared to a Slots3 Game.'
    WHERE identifier = 'nucleus:30014'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sushi themed 25 line 5 reel Slots3 Game. Internally referred to as our Slots 2.5 product line, as the game is much simpler compared to a Slots3 Game.'
    WHERE identifier = 'nucleus:30015'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Considered the sequel to an earlier game, Gold Diggers. Features the same characters as its predecessor, but completely different gameplay.Model is derived from Rook''s Revenge model.'
    WHERE identifier = 'nucleus:30024'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '25 Line 5 Reel Cascading Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30031'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '25 Line 5 Reel Cascading Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30032'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic slot with great features! 5-Reel, 18-Lines.'
    WHERE identifier = 'nucleus:30042'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Genie/Arabian themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30054'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Billionaire Themed 30 Line 5 Reel Slots3 Game with Progressive Jackpot. In a world reserved for the wealthiest of the wealthy, a world invisible to everyone but he highest echelon, they play a game where the stakes are infinitely high.Only members of the elite Billionaire''s Club are welcome. It is a playground for Tycoons, and the Winner. Takes. All. Find out if you have what it takes to hang with the best of the best, when you play The Moguls.'
    WHERE identifier = 'nucleus:30060'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monsters and Children themed 30 line 5 reel Slots 3 Game.'
    WHERE identifier = 'nucleus:30061'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Safari Themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30062'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Billionaire Themed 30 Line 5 Reel Slots3 Game with Progressive Jackpot. In a world reserved for the wealthiest of the wealthy, a world invisible to everyone but he highest echelon, they play a game where the stakes are infinitely high.Only members of the elite Billionaire''s Club are welcome. It is a playground for Tycoons, and the Winner. Takes. All. Find out if you have what it takes to hang with the best of the best, when you play The Moguls.'
    WHERE identifier = 'nucleus:30063'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mobster Themed, 30 Line 5 Reel Slots3 Game - Jackpot VersionI''l offer them a jackpot hey can''t refuse! Infamous words spoken by the Slotfather, the secret underworld Boss of all slots, big and small. The one man that holds al the strings, controlling an organized syndicate of slots stretching across the city and beyond. that man is the Slotfather. This updated version features an exciting PROGRESSIVE JACKPOT to further increase your chances'
    WHERE identifier = 'nucleus:30072'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mobster Themed, 30 Line 5 Reel Slots3 Game - Jackpot VersionI''l offer them a jackpot hey can''t refuse! Infamous words spoken by the Slotfather, the secret underworld Boss of all slots, big and small. The one man that holds al the strings, controlling an organized syndicate of slots stretching across the city and beyond. that man is the Slotfather. This updated version features an exciting PROGRESSIVE JACKPOT to further increase your chances'
    WHERE identifier = 'nucleus:30074'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Safari Themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30091'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monsters and Children themed 30 line 5 reel Slots 3 Game.'
    WHERE identifier = 'nucleus:30095'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Relax and enjoy the peaceful views of FRUIT SERENITY, the newest release in Betsoft Gaming''s **SLOTS3 ARCADE** series. This fantastic slot machine features unparalleled 3D graphics, with lush moving water and incredible win effects.The gentle is sure to melt your stress away.  **Come, unwind and win with FRUIT SERENITY.**'
    WHERE identifier = 'nucleus:30102'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Underwater themed 25 Line 5 Reel Slots3 Game.Part of the informal '
    WHERE identifier = 'nucleus:30103'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Genie/Arabian themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30106'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Salsa Dancing Themed 30 Line 5 Reel Slots3 Game with 3 Progressive Jackpots.'
    WHERE identifier = 'nucleus:30117'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Salsa Dancing Themed 30 Line 5 Reel Slots3 Game with 3 Progressive Jackpots.'
    WHERE identifier = 'nucleus:30118'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Underwater themed 25 Line 5 Reel Slots3 Game.Part of the informal '
    WHERE identifier = 'nucleus:30126'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Relax and enjoy the peaceful views of FRUIT SERENITY, the newest release in Betsoft Gaming''s **SLOTS3 ARCADE** series. This fantastic slot machine features unparalleled 3D graphics, with lush moving water and incredible win effects.The gentle is sure to melt your stress away.  **Come, unwind and win with FRUIT SERENITY.**'
    WHERE identifier = 'nucleus:30130'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Mad Genius themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30138'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Mad Genius themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30139'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bank Robber themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30142'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic slot with great features! 5-Reel, 18-Lines.'
    WHERE identifier = 'nucleus:30146'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A fortune teller themed slot, featuring 5-reels and 30-paylines.'
    WHERE identifier = 'nucleus:30156'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A fortune teller themed slot, featuring 5-reels and 30-paylines.'
    WHERE identifier = 'nucleus:30157'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Biker Themed 30 Line 5 Reel Slots3 Game with Progressive Jackpot.'
    WHERE identifier = 'nucleus:30160'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Biker Themed 30 Line 5 Reel Slots3 Game with Progressive Jackpot.'
    WHERE identifier = 'nucleus:30161'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bank Robber themed 30 Line 5 Reel Slots3 Game.'
    WHERE identifier = 'nucleus:30171'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What do you get when you mix a classic slot machine theme, features everyone loves and the high-end 3D touch only found in Betsoft Gaming products? SUPER CRYSTALS! Super Crystals is five reels and ten lines of lusciously coloured gemstones against a smoothly futuristic backdrop where the lines pay both ways.'
    WHERE identifier = 'nucleus:30184'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What do you get when you mix a classic slot machine theme, features everyone loves and the high-end 3D touch only found in Betsoft Gaming products? SUPER CRYSTALS! Super Crystals is five reels and ten lines of lusciously coloured gemstones against a smoothly futuristic backdrop where the lines pay both ways.'
    WHERE identifier = 'nucleus:30185'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic story in a classic setting, but do not expect a classic slot machine!Pinocchio features multiple game levels offering unique features including: Fairy Re-Spins, Pinocchio Wandering Wilds and so much more!'
    WHERE identifier = 'nucleus:30188'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic story in a classic setting, but do not expect a classic slot machine!Pinocchio features multiple game levels offering unique features including: Fairy Re-Spins, Pinocchio Wandering Wilds and so much more!'
    WHERE identifier = 'nucleus:30189'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '5 Reel 30 Line 3D Slot Game with Sheriff/Cowboy Theme'
    WHERE identifier = 'nucleus:30192'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '5 Reel 30 Line 3D Slot Game with Sheriff/Cowboy Theme'
    WHERE identifier = 'nucleus:30193'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Movie Theater themed 25 Line 5 Reel Slots3 Game.Part of the informal Slots 2.5 product line.'
    WHERE identifier = 'nucleus:30196'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join three unlucky companions as they travel the Nevada desert to Las Vegas, City of Second Chances! With free spins, money wheels, reel re-spins for additional chances at the bonus round and a hot stop on the Vegas Strip for some good old  gambling, this true 3D cinematic video slot brings the bright lights of Vegas right to the comfort'
    WHERE identifier = 'nucleus:30207'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join three unlucky companions as they travel the Nevada desert to Las Vegas, City of Second Chances! With free spins, money wheels, reel re-spins for additional chances at the bonus round and a hot stop on the Vegas Strip for some good old gambling, this true 3D cinematic video slot brings the bright lights of Vegas right to the comfort'
    WHERE identifier = 'nucleus:30208'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get away from the office and into the sun this Summer with THE PARTY GUY! Join Gary as he takes a flight to Miami Beach and enjoys the sun, sand and lovely ladies as he unwinds with a cold drink in hand. This will surely be a vacation to remember!'
    WHERE identifier = 'nucleus:30217'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get away from the office and into the sun this Summer with THE PARTY GUY! Join Gary as he takes a flight to Miami Beach and enjoys the sun, sand and lovely ladies as he unwinds with a cold drink in hand. This will surely be a vacation to remember!'
    WHERE identifier = 'nucleus:30218'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As time moves on and the seasons change, so too do we change and grow. Enter the gorgeous world of 4 SEASONS, based upon the ancient Chinese zodiac that has guided the steps of billions for years untold. From Horse to Snake, all the way around the wheel, each sign is present and ready to capture your heart. This game will leave you asking your friends: what''s your sign?'
    WHERE identifier = 'nucleus:30227'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As time moves on and the seasons change, so too do we change and grow. Enter the gorgeous world of 4 SEASONS, based upon the ancient Chinese zodiac that has guided the steps of billions for years untold. From Horse to Snake, all the way around the wheel, each sign is present and ready to capture your heart. This game will leave you asking your friends: what''s your sign?'
    WHERE identifier = 'nucleus:30228'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multideck Blackjack without sidebet.'
    WHERE identifier = 'nucleus:30235'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multideck Blackjack without sidebet.'
    WHERE identifier = 'nucleus:30236'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic Baccarat Game.'
    WHERE identifier = 'nucleus:30239'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'high or low game.'
    WHERE identifier = 'nucleus:30240'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pai Gow style Poker.'
    WHERE identifier = 'nucleus:30241'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Red Dog Game.'
    WHERE identifier = 'nucleus:30242'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3 Card Rummy Game.'
    WHERE identifier = 'nucleus:30244'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multi Deck Blackjack game with Burn card functionality.'
    WHERE identifier = 'nucleus:30245'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'European Style Blackjack.'
    WHERE identifier = 'nucleus:30246'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Single Deck style Blackjack with optional sidebet.'
    WHERE identifier = 'nucleus:30247'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Single Deck style Blackjack with optional sidebet.'
    WHERE identifier = 'nucleus:30248'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Caribbean Stud Poker Game.'
    WHERE identifier = 'nucleus:30251'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Caribbean Stud Poker Game.'
    WHERE identifier = 'nucleus:30252'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Oasis Stud Poker Game.'
    WHERE identifier = 'nucleus:30255'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spanish Rules Blackjack Game with Sidebet.'
    WHERE identifier = 'nucleus:30256'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pontoon rules style 21 (Blackjack) Game with optional sidebet.'
    WHERE identifier = 'nucleus:30257'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3 Card Poker style game. Note: Due to a dumb lawsuit we had to change the name from Three Card Poker to Triple Edge Poker.'
    WHERE identifier = 'nucleus:30258'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'US Style Multihand Blackjack with optional sidebet.'
    WHERE identifier = 'nucleus:30259'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Casino War style game. Note: Due to a stupid lawsuit we had to change the name from Casino War to Top Card Trumps.'
    WHERE identifier = 'nucleus:30260'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'European (Single Zero) Roulette with Hamburg rules.'
    WHERE identifier = 'nucleus:30261'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'European (Single Zero) Roulette with Hamburg rules.'
    WHERE identifier = 'nucleus:30262'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'American (Double Zero) Style Roulette Game.'
    WHERE identifier = 'nucleus:30266'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Poker with Deuces are Wild rules.'
    WHERE identifier = 'nucleus:30272'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Video Poker with Deuces are Wild rules.'
    WHERE identifier = 'nucleus:30273'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delve into the mysteries of the arcane with the wizard himself in Merlin''s Elements. Seek the Astrology and Nature rooms. Cast magical spells featuring the four classic elements of Earth, Wind, Fire and Water. This brilliant and artfully crafted slot machine is another crowning achievement in the ever-expanding  game lineup.'
    WHERE identifier = 'nucleus:30298'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delve into the mysteries of the arcane with the wizard himself in Merlin''s Elements. Seek the Astrology and Nature rooms. Cast magical spells featuring the four classic elements of Earth, Wind, Fire and Water. This brilliant and artfully crafted slot machine is another crowning achievement in the ever-expanding  game lineup.'
    WHERE identifier = 'nucleus:30299'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leap into the purr-fect pastel world of KITTY CUTIE! This innovative 3D video slot pays both ways for maximum chances to win, and features Wild Yarn balls that can expand to fill an entire reel! Join adorable Kitty as she plays with cute toys and wins your heart while you win credits!'
    WHERE identifier = 'nucleus:30302'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leap into the purr-fect pastel world of KITTY CUTIE! This innovative 3D video slot pays both ways for maximum chances to win, and features Wild Yarn balls that can expand to fill an entire reel! Join adorable Kitty as she plays with cute toys and wins your heart while you win credits!'
    WHERE identifier = 'nucleus:30303'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'European Roulette with enhanced graphics.'
    WHERE identifier = 'nucleus:30308'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double your money, double the fun! This delightful game offers 243 paylines that pay any way to dramatically increase your chances to win. And that''s not all! Guided by an adorable pair of identical twin sisters, Sister of Luck features reels that can lock and sync with matching symbols on those reels, providing even more chances for huge wins!'
    WHERE identifier = 'nucleus:30309'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double your money, double the fun! This delightful game offers 243 paylines that pay any way to dramatically increase your chances to win. And that''s not all! Guided by an adorable pair of identical twin sisters, Sister of Luck features reels that can lock and sync with matching symbols on those reels, providing even more chances for huge wins!'
    WHERE identifier = 'nucleus:30310'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Family is back with all his henchmen in this exciting sequel to THE FAMILY. Experience life as a wily gangster as you run to do the the families bidding. This is his world, and you are just a guest in it! Play sharp, play smart, and you may take home your very own cut of the Gang''s take! Featuring Tall symbols, THE FAMILY PART II features impressive bonus rounds and other thrilling elements to create the sinister mood surroundi'
    WHERE identifier = 'nucleus:30313'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Family is back with all his henchmen in this exciting sequel to THE FAMILY. Experience life as a wily gangster as you run to do the the families bidding. This is his world, and you are just a guest in it! Play sharp, play smart, and you may take home your very own cut of the Gang''s take! Featuring Tall symbols, THE FAMILY PART II features impressive bonus rounds and other thrilling elements to create the sinister mood surroundi'
    WHERE identifier = 'nucleus:30314'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to reel in the wins with Catch & Release This exciting new video slot features an innovative bonus round where the player can fish up extra credits with trusty, dependable fisherman Otis as he plies the gorgeous freshwater lake for its great treasures.'
    WHERE identifier = 'nucleus:30317'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to reel in the wins with Catch & Release This exciting new video slot features an innovative bonus round where the player can fish up extra credits with trusty, dependable fisherman Otis as he plies the gorgeous freshwater lake for its great treasures.'
    WHERE identifier = 'nucleus:30318'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Somewhere, at the end of the rainbow, legendary treasure awaits you in a sylvan paradise. May the Luck of the Leprechaun be with you as you play LUCKY CLOVERS!'
    WHERE identifier = 'nucleus:30329'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Somewhere, at the end of the rainbow, legendary treasure awaits you in a sylvan paradise. May the Luck of the Leprechaun be with you as you play LUCKY CLOVERS!'
    WHERE identifier = 'nucleus:30330'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grim-dark Fantasy (Think: Game of Thrones) themed slot with a 3-4-5-4-3 reel arrangement and a unique spreading wild feature that also ties into a free spins feature with clingy wilds. Backstory is:One nation, split by a war that has burned for centuries. Two noble Houses, mired deeply in that war. And an unexpected threat that no one could have anticipated the Coming of the Dragons. Watch as the Houses of the Shieldmaiden and the Swordsman unite to fight back against then aggressive draconic invaders using their combined War Cry that can flip icons to Wilds and greatly increase chances for winning!'
    WHERE identifier = 'nucleus:30337'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grim-dark Fantasy (Think: Game of Thrones) themed slot with a 3-4-5-4-3 reel arrangement and a unique spreading wild feature that also ties into a free spins feature with clingy wilds. Backstory is:One nation, split by a war that has burned for centuries. Two noble Houses, mired deeply in that war. And an unexpected threat that no one could have anticipated the Coming of the Dragons. Watch as the Houses of the Shieldmaiden and the Swordsman unite to fight back against then aggressive draconic invaders using their combined War Cry that can flip icons to Wilds and greatly increase chances for winning!'
    WHERE identifier = 'nucleus:30338'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As you walk down the dark and narrow alley, you are inexplicably drawn to the mysterious shop on the left. The door creaks and a curtain of old spider-webs parts as you enter SLEIGHT OF HAND, well known for its occult offerings from places near and far. This new 5 reel, 25 payline true 3D video slot from Betsoft boasts a special feature that allows any free spin to win a prize!'
    WHERE identifier = 'nucleus:30341'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As you walk down the dark and narrow alley, you are inexplicably drawn to the mysterious shop on the left. The door creaks and a curtain of old spider-webs parts as you enter SLEIGHT OF HAND, well known for its occult offerings from places near and far. This new 5 reel, 25 payline true 3D video slot from Betsoft boasts a special feature that allows any free spin to win a prize!'
    WHERE identifier = 'nucleus:30342'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a trip to the sun-drenched African savannah, the newest Classic Slot brought to you by Nucleus Gaming. This all-ways-pay slot machine offers 1024 ways to win and a beautiful art style, that evoking the high grasses and spreading acacia trees of the African plain. The warm palette suggests the heat of the savannah in summer, where the majestic elephant herds rule supreme, accompanied by other icon African wildlife such as giraffes, gazelles and zebras.The top value Elephant symbols dominate the reels, and when they stampede the players win big! With the addition of x3 Wilds in Free Spins, there are some truly mammoth wins to excite you players.'
    WHERE identifier = 'nucleus:30349'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a trip to the sun-drenched African savannah, the newest Classic Slot brought to you by Nucleus Gaming. This all-ways-pay slot machine offers 1024 ways to win and a beautiful art style, that evoking the high grasses and spreading acacia trees of the African plain. The warm palette suggests the heat of the savannah in summer, where the majestic elephant herds rule supreme, accompanied by other icon African wildlife such as giraffes, gazelles and zebras.The top value Elephant symbols dominate the reels, and when they stampede the players win big! With the addition of x3 Wilds in Free Spins, there are some truly mammoth wins to excite you players.'
    WHERE identifier = 'nucleus:30350'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You are invited on an unforgettable adventure with Ruby Jade, the Gem Hunter in this fast-paced, vibrant 7x7 grid video slot!Explore a hidden cave in a deep forest and discover a dazzling rainbow of raw, uncut gems. Match five or more identical symbols in a cluster for an explosive win on cascading reels, giving you limitless opportunities for big wins! Any coal symbols adjacent to a winning cluster will be transformed into Diamonds, the highest paying symbol in the game!'
    WHERE identifier = 'nucleus:30353'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You are invited on an unforgettable adventure with Ruby Jade, the Gem Hunter in this fast-paced, vibrant 7x7 grid video slot!Explore a hidden cave in a deep forest and discover a dazzling rainbow of raw, uncut gems. Match five or more identical symbols in a cluster for an explosive win on cascading reels, giving you limitless opportunities for big wins! Any coal symbols adjacent to a winning cluster will be transformed into Diamonds, the highest paying symbol in'
    WHERE identifier = 'nucleus:30354'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3-4-5-4-3 Both Ways And Center Out Pays Video Slot with Scatter Pays and Free Spins Features.'
    WHERE identifier = 'nucleus:30357'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '3-4-5-4-3 Both Ways And Center Out Pays Video Slot with Scatter Pays and Free Spins Features.'
    WHERE identifier = 'nucleus:30358'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sequel to Sweet Treats, featuring 7x7 cascading reels with cluster pays, numerous special candy features, and free spins.'
    WHERE identifier = 'nucleus:30361'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sequel to Sweet Treats, featuring 7x7 cascading reels with cluster pays, numerous special candy features, and free spins.'
    WHERE identifier = 'nucleus:30362'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '6 x 6 Reel Cluster Pays Slot with Exploding Wins and Progressive Jackpot.'
    WHERE identifier = 'nucleus:30365'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '6 x 6 Reel Cluster Pays Slot with Exploding Wins and Progressive Jackpot.'
    WHERE identifier = 'nucleus:30366'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '5 Reel 10 Line Video Slot with Free Spins (with special symbol function), Wild Symbols, and Scatter Pays. Greek Mythology theme.'
    WHERE identifier = 'nucleus:30373'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '10 Line Riches themed Video Slot with 4 Progressive Jackpots.'
    WHERE identifier = 'nucleus:30374'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '5+1 reel, 10 Line Asian Themed (Dragons) Video Slot with multiple wild features, 4 progressive jackpots (info in Product/Demosheet) and free spins. 6th reel is special, containing only the Magic Pearl symbol.'
    WHERE identifier = 'nucleus:30380'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Collect the Runes of Odin to earn the Fortune of the Fates in Nucleus Games newest cluster-win blockbuster. In this mystical adventure Runes of Power unleash forces of nature that engulf the reels, and award massive prizes, from torrents of water tobursts of flame! Gain understanding and overflow the Well of Knowledge to win even more or set sail on Free Spins with the magic of Odin''s mighty Spear! This Epic Adventure is one for the ages and the mythological treasures of time can be yours when you cast the Runes of Odin.'
    WHERE identifier = 'nucleus:30385'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'END ZONE RICHES is a traditional 5x3, 25payline slot featuring explosive potential anda variety ways to win to keep you entertainedthroughout your slot gameplay. WILD FANDOM - Wilds can appear on the reelsto substitute for any symbol except BIG LEAGUEBONUS or TROPHY symbols BIG LEAGUE BONUS FREE SPINS - Seek out 3or more of the BIG LEAGUE BADGES to trigger12 special free spin rounds. They pay both waysand DOUBLE your win!  CHAMPION WORTHY WINS - Watch out forthe special TROPHY symbols that can appearanywhere on the reels. Each symbol will awardyou with an INSTANT WIN proportional to yourbet size!'
    WHERE identifier = 'nucleus:30392'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare for a furnace of fun in this featurepacked five-reel classic slot. Feel the burn ofthe Fire Joker who will consume entire reelswith the blazing force of his flame and turn upthe heat in the GEMFERNO and FRUIT WHEELbonus rounds. With scorching rewards aplentyand sweltering enjoyment at every spin there''s no fooling around that slots do not get anyhotter than J'
    WHERE identifier = 'nucleus:30394'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Navigate a futuristic world of flashy lasers andpriceless jewels in this unique 7x7 cluster-win slot featuring a revolutionary leveling system and a full spectrum of dazzling GEMSTONES.Maximize your winnings as you unlock powerfulsymbols that obliterate their surroundings for truly epic COMBO WINS and seek out the cluster charged MEGA GEM BOMB for ultimate destruction as you smash your way to riches in GLORIOUS GEMS.'
    WHERE identifier = 'nucleus:30395'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'WILD CHERRY BLAST is an innovative video slotplayed in rounds of 10. Drink in the refreshingflavor of this unique functionality with the Juicer Machine symbol. With every spin, it releases Cherry Bombs onto the reels that remain in place until the Countdown Controller meter reaches full! The Cherry Bombs will explode after 10 spins and turn WILD, staying in place for a free re-spin as the meter resets!The Berry Bonus grants a generous amount of Free Spins where the WILDS will change places after every spin to grant multiple chances at big wins during Free Spins Mode.'
    WHERE identifier = 'nucleus:30396'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Play JINGLE SLOTS this holiday season to find that the gifts under the tree are plentiful and the mood is merry and bright! In this adorable video slot, Santa is 2x WILD, and generously expands to fill an entire reel to double any win amount. Santa''s Sleigh is set todouble your Free Spins on Reel VI when 3 or more Snowmen visit. Four of Santa''s beloved Reindeer have accompanied him on his travels and are all WILD with their own special feature to make thi'
    WHERE identifier = 'nucleus:30397'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Summon the powerful genie with the touch of your hand, and he can bless you with everything your heart desires in BOTTLED WISHES. Watch him come out of his lamp in a swirl of magical smoke and take over an entire reel, turning it WILD! Anything is possible  free spins, big wins  when you make your wishes in this gorgeous new slot.'
    WHERE identifier = 'nucleus:30398'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Toss the stones and read the runes for signs ofenormous fortunes and great prizes in MYSTICRIFT. This innovative slot is played on a largegrid, featuring glowing runes that can combineand form larger runes crackling with the powerto attract good luck and exciting wins!'
    WHERE identifier = 'nucleus:30399'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take on your secret agent alter-ego and dive deep into a ruthless world of danger, fast cars, and fine cocktails in A TIME TO WIN. Master the art of spying and intrigue with Free Spins, Secret Agent Wilds, and surprise safecracking.Apprehend your target and save the world fromgreat dangers in this exciting new slot.'
    WHERE identifier = 'nucleus:30400'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This fresh rendition of the classic fruit machine video slot is updated with an exciting multiplier feature that increases with every winning spin. The multiplier is potentially limitless and can become Sticky, ensuring no limit wins and no end to the fun!'
    WHERE identifier = 'nucleus:30401'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Put on your lei and prepare for the luau of yourdreams in this thrilling trip to the beautifulislands of Hawaii. Tiki torches line the trailleading to tropical treasures told of in ancienttales, lighting your way'
    WHERE identifier = 'nucleus:30402'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Go for the Gold and make your way into the Winner''s Circle in this thrilling new video slotfrom Nucleus, with up to a 60x WILD multiplier!Run the races and soar over the hurdles as youplay, earning free spins, scatter '
    WHERE identifier = 'nucleus:30404'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Witches, Ghosts, and Bats rule the night inthis novel 3-4-5-4-3 hexagonal grid videoslot! Unique mechanics, like the grid andspreading Ectoplasm WILDS, make this game anunforgettable Halloween party!'
    WHERE identifier = 'nucleus:30405'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Magical Snowman headlines the WinterCelebration this year, and he''s brought richwinnings along with festive gifts, snow showers,and Father Christmas himself! Enjoy this classicholida'
    WHERE identifier = 'nucleus:30408'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get into your fastest car and drive to enormouswins and generous FREE SPINS in ALL REEL DRIVE!Take the thrill to the next level with explodingwinning symbols and WILD racing flags that willpush you over the finish line in this cascading,all-ways-pay video slot!'
    WHERE identifier = 'nucleus:AllReelDrive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Follow the thrilling tale of a Wild West Sheriff and his nemesis the Bandit in BANDITS AND BOUNTIES, the latest adventure brought to you by Nucleus Gaming! With Sticky symbols that grant respins until a win is secured and massive chances for FREE SPINS with Sticky symbols that persist for the entirety of the bonus round, this is one showdown you will not want to miss!'
    WHERE identifier = 'nucleus:BanditsandBounties'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Follow the reindeer to big holiday wins on your CHRISTMAS JOURNEY! Watch as matched symbols disappear and other symbols grow in to take their places. Earning matching symbols in a specific order will trigger a FREE SPINS Christmas treat!'
    WHERE identifier = 'nucleus:ChristmasJourney'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to one of the most exciting table games in the history of gaming  Craps! Our version of this casino classic is streamlined to give your players the most rewarding experience possible. With a huge variety of bets and playing styles, this beloved game is certain to captivate your players. All it takes is a roll of the dice and good luck!'
    WHERE identifier = 'nucleus:Craps1'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Searching for that traditional, land-basedcasino experience that is loved and recognizedacross the world? Look no further than CLASSICVEGAS, a 3 reel, 1 line video slot with exciting,multiplicative WILDS!'
    WHERE identifier = 'nucleus:DiamondStrip'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enter a world where dragons rule over the reelswith unique powers that can improve yourchances of winning! Special Golden Egg WILDScontain thrilling magical features for Free Spinsthat you won''t want to miss!'
    WHERE identifier = 'nucleus:DragonWatch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel deep into the mysterious land of the Aztecs, where sacred treasure abounds in this unique 5-reel, 16 payline collapsing reel slot. Win big during FREE SPINS where the middle column of gems is transformed into guaranteed WILDS!'
    WHERE identifier = 'nucleus:LegendofAzteca'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Southwest/Mexican themed cluster pay cascading slot with expanding grid in free spins mode and stacking wild multipliers.'
    WHERE identifier = 'nucleus:SalsaPoppers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive deep into the cool blue waters of the ocean and swim with a host of adorable water dwellers when you play SHARK SPIN! With expanding, locking Great White WILDS that offer FREE RESPINS and a generous FREE SPINS mode, there are plenty of fish in this sea!'
    WHERE identifier = 'nucleus:SharkSpin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Honor the Queen of the Nile herself, the LEGENDARY CLEOPATRA, and her spirit will forever grant you untold riches from her endless vaults. This Egyptian-themed slot will take you on an exciting journey to the ancient lands of papyrus, pyramids, and palm trees.Collect shimmering SCARAB AMULETS to unlock bountiful FREE SPINS and acquire glistening treasures on your journey through SPIRIT OF THE NILE.'
    WHERE identifier = 'nucleus:SpiritoftheNile'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Venture into the deepest, darkest, most ancient pyramid in all of Egypt to discover massive riches in THE FORBIDDEN TOMB! Mystic Compasses guide the way in this video slot, turning to WILDS after 10 spins. Feel your excitement build as the Mystic Compass Device counts down to huge wins'
    WHERE identifier = 'nucleus:TheForbiddenTomb'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join Pumpkinhead and his zany cast of spooky characters in THE HAUNTED CARNIVAL, a 10-round progression video slot with a wide array of features! Each member of the Halloween gang has their own special power during their 10-spin round, including FREE SPINS, RESPINS, huge multipliers, WILDS, and more.'
    WHERE identifier = 'nucleus:TheHauntedCarnival'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This exciting new format for the classic, belovedfruit machine slot offers fifty paylines andstacking identical symbols that fall away to allownew symbols to drop in! Stuffed full with plentifulWILDS, this game is a tasty treat!'
    WHERE identifier = 'nucleus:TropicalSplash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to sail the high seas and face off against pirates in WINS AHOY! Watch as the Admiral of \r\nthe Royal Navy moves to block the depredations of pirates who want nothing more than to steal \r\nall of the valuable booty that rightfully belongs to the Navy. The innovative chase and catch \r\nmechanic will have you wrapped up in the drama of who will be triumphant - the Admiral or the \r\nPirate Captain!'
    WHERE identifier = 'nucleus:WinsAhoy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you have what it takes to earn the Gold Medal? In WINTER CHAMPS, find yourself in a fascinating game that offers 3 standard reels and 1 special reel that affects your wins. With respins, multipliers, and wager boosts, you''ll be a champion in no time!'
    WHERE identifier = 'nucleus:WinterChamps'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ancient Egypt has always fascinated people with its mysterious secrets, culture and fascinating mythology. Book of Eye will plunge you into the Ancient Egyptian atmosphere and give you a real journey back in time — thousands of years ago!\r\n\r\nThis exciting 3x5 Video Slot is created to impress and give unforgettable emotions and real winnings. And Free spins session as well as Buy Bonus feature only increase your chances of winning!'
    WHERE identifier = 'onlyplay:BookofEye'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Catch your luck by the tail as the flaming fire rages around you! Hot & Spicy slot will give you the brightest emotions and thrill, especially if you manage to hit a big score by getting the desired jackpot!\r\n'
    WHERE identifier = 'onlyplay:HotandSpicyJackpot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Features: FreeSpins, Progress Bonus, Jackpot Bonus Game.'
    WHERE identifier = 'onlyplay:JackPotterDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'FreeSpins, Bonus Game, Jackpot Bonus Game.'
    WHERE identifier = 'onlyplay:JokerCoins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Game features: FreeSpins, Bonus Game, Jackpot Bonus Game.'
    WHERE identifier = 'onlyplay:JokerCoinsXMAS'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Juicy Crush is a new exciting 6x6 fruit-themed slot based on cascade mechanics with a bright and juicy design, high-quality animation, appropriate sound effects and real big payouts. But the main thing in this slot is by no means this. In Juicy Crush, Onlyplay first implemented a skill-based feature TNT Booster, with which a player can explode all the symbols in the playing field, thereby increasing his chances of dropping a winning combination. In addition, free spins are also available in Juicy Crush, as well as the ability to increase player''s winnings up to x100 while playing free spins mode.'
    WHERE identifier = 'onlyplay:JuicyCrush'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Meet professional boxers in the new hit from Onlyplay — Lucky Punch!\r\n\r\nTake part in real battles that can bring you big money! The rules of the game are as simple as possible, it won''t be difficult to understand the interface. The bright and colorful design will definitely not leave you indifferent: impudent pumped-up boxers, an admiring crowd and camera flashes.\r\n\r\nFeel like a rising boxing star with Lucky Punch! And cool bonuses will only strengthen your desire to win and become the main winner of the show!\r\n'
    WHERE identifier = 'onlyplay:luckypunch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Never have you been this close to unraveling the secrets of an ancient civilization. The Aztecs have hidden the most precious treasure in a magic cave for you. Discover it in our new Aztec Coins which takes you deep into the heart of these mysteries, presenting a set of reels which are covered with powerful striking symbols and 50 win lines. When 3 or more Aztec pyramids appear on the reels the Free spins feature gets triggered. Depending on the number of Extra Wilds appearing during the Free Spins round, you get awarded 1 of 3 kinds of Jackpots: MAJOR, MINOR and MINI.Hit at least 6 Bonus symbols to trigger the Respin feature. but the biggest surprise the Aztecs have in store for you is the GRAND JACKPOT which can be won when all positions display Bo'
    WHERE identifier = 'platipus:azteccoins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join our mission to solve the great mysteries of the Aztec Temple. Dive into the ancient culture and become part of it with this 5x3 reels and 20 lines video slot! Enjoy the main and bonus game with Avalanche Multiplier, which increases after every successive avalanche, containing at least one bet line win. Once on board at this game mission, quitting is not an option!'
    WHERE identifier = 'platipus:aztectemple'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bison Trail is a 4x5 reel video slot. The first fabulous feature players will notice playing the Bison Trail slot, is the absence of pay lines. There are 1024 ways to hit a win in this game. Catch 3, 4 or 5 Scatter symbols anywhere on the reels and get awarded with 8, 15 or 20 Free Spins respectively. The wild symbol adds a multiplier to any win hit during the free spin rounds. The Bison Trail slot can make your day spectacular!'
    WHERE identifier = 'platipus:bisontrail'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chinese Tigers is a 5x3 reels and 30 lines video slot bringing you great graphics to enjoy. Mesmerizing animations, and real big wins. During the main game, if all 6 symbol positions on reel 1 and reel 2 are covered by any Tiger symbol, the player hits either the MINOR, MAJOR or GRAND JACKPOT.To enjoy the Free spins feature, you just need to hit 3 Scatter symbols which will trigger this feature. During the Free Spins round, White Tiger, Orange Tiger and Black Tiger symbols will transform into Wild symbols depending on the option selected.'
    WHERE identifier = 'platipus:chinesetigers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Everything new is actually well known from old times. Get acquainted with our new 5x4 reels and 40 linesvideo Cinderella slot! Juno into the fairy tale, feel the magic of our main game with double Wild symbols.Trigger the Bonus game and spin the Bonus Wheel to win Free Spins with reels gone Wild during thisfeature. Don''t miss the chance to be part of a fairy tale!'
    WHERE identifier = 'platipus:cinderella'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hot and wild. This game is set in African surroundings!Try out Crocoman, a 5x4 reels and 50 lines video slot which never ceases to amaze and delight you.Experience the true spirit of Africa after catching at least 3 Wilds on the reels to start Free Spins with a randomly selected special Expanding symbol. Are you still here? Start spinning for gold and do it now!!!'
    WHERE identifier = 'platipus:crocoman'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the magic of the number seven in a bright a 5x3 reels and 50 lines Crystal Sevens video slot!Catch Wild symbols and special bonus symbol on a reels and play one of three bonus games.'
    WHERE identifier = 'platipus:crystalsevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The year is slowly coming to an end, the snow is slowly descending on the rooftops covering the\r\nworld in white… A perfect time to travel to the hot jungles of Africa with Platipus newest game –\r\nDiamond Hunt! From what we heard, volcanologists predict that a great diamond volcano eruption is\r\nabout to happen. So, grab your shovels, fireproof gear, and prepare to set out for beautiful crystals.\r\nAll you need to do is to make your way through capricious jungle where danger lies behind every\r\ncorner. Profit too, as winning combinations in this game form both from left to right and from right to\r\nleft. '
    WHERE identifier = 'platipus:diamondhunt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Imagine a journey to the Far East where you can explore the old myths and folktales of this region. Discoverthe land where you can encounter mystical beasts and enjoy the luck and wealth to be taken from theDragons.Prepare to start your journey with our brand new game, Dragon''s Element.This slot consists of 6 reels of 4 rows. Dragon''s Element offers 50 fixed pay lines.When playing this game, you can hit two or more, not necessarily connected, Wilds which need to be on thesame row. All symbols in between these Wilds will turn into Wild symbols as well. If a combination of three ormore Scatters is hit, 10 to 50 Free Spins get activated.Three different kind of Jackpots will bring even more excitement and make wins grow much bigger in thisgame.The biggest GRAND Jackpot can be won with a full screen of Wilds.don''t hesitate and go try this ama'
    WHERE identifier = 'platipus:dragonselement'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hurry to unravel the mysteries of ancient Egypt and find real treasures in Cleo''s Gold, a 5x3 reels and 20 lines video slot. This game is amazing and Free Spins are even better. Sticky, Stacked and Expanding Wilds appearing in the Free Spins feature will not keep you go'
    WHERE identifier = 'platipus:egyptiangold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A wonderful and magical place, a paradise where all stress disappears in oblivion. You will forget about everything once plunging into this world of beauty!The exotic melodies of birds bring harmony and peace to the soul!Come on in dear friend. Welcome to the marvelous realm of the Princess of Birds, a 5x3 reels and 20 lines video slot!Here any 3 symbols in a stack will bring you 3 Respins with these symbols sticking to the reels during the whole Respin round! Even more fun will get triggered when the Princess of Birds decides to award you a round of Free Spins. Just catch Scatters on the reels and enjoy every moment of it! '
    WHERE identifier = 'platipus:fairyforest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you hear the voices of legendary heroes coming from faraway lands? They call upon the brave and adventurous spirits to step into a World of Frozen Mirror where the power of the great Frozen Queen reigns supreme! Accept this mysterious invitation and compete with Her Majesty for her kingdom''s wealth. But be careful not to get your blood frozen from a range of thrilling features she keeps in her possessions for you. Pay attention to the castle symbols, which also play as Scatters - 5 and more of them will trigger Free Spin Feature. The amount of free spins won will correspond to the amount of Scatters hit. And should you form a winning combination with a Wild symbol during these Free Spins, you will that payline payout doubled. And\r\nwhat''s more - you''ll notice that Queen''s castle is full of magical Mirrors - and those are no mere pieces of glass. Collecting at least 5 of them in the reels will trigger a Mirror Reflection Feature! That''s where magic comes into full effect! 3 Magical frames will appear randomly on the reels, and you will be awarded with 6 Extra Spins. If one of the mirrors appears below the frame - the prize reflected in the mirror will be yours! There are three types\r\nof reflections a mirror can contain- monetary prize, one of the four Jackpots, or the Frozen Queen itself. Hitting the Queen would mean additional Extra Spin, and additional Magical Frame. The Mirror Reflection Feature can be triggered during regular game, as well as during Free Spin round.\r\nThis adventure promises to be full of excitement! Do you already feel a chill running down your spine?! If so, it can only mean one thing - it''s high time to\r\nput on your woolly hat and jumper and start this arduous but rewarding journey through a fantastic world of Frozen Mirror!'
    WHERE identifier = 'platipus:frozenmirror'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game which pays excellent makes the day of a devoted player! This is what Fruity Sevens, a 5x3 reels and 25 lines video slot, does! Get lucky and hit a winning combination with 3 or more symbols to trigger a Respin for a better combination! With 5 Scatters on the reels you will feel even more excited as it is how you get the Free Spins activated. Hurry up! The fruitful game is waiting for you!'
    WHERE identifier = 'platipus:fruitysevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gather round, mere mortals, gather round. For today you shall hear a different story. One that chills blood inthe veins and grasps the hearts with the cold claws of terror. The story about the most savage of creaturesand the most relentless hunters - the vampires. Led by the mighty Dracula, they took hold in the localcastle. The voyager bats have already started moving their numerous belongings there. And therein lies theopportunity, for these bats act as wild symbols as they fly upwards towards the castle. But should they landon Dracula on their way, and you will witness the legendary Shifting Guises feature, for the great vampirehimself will join them, filling all nearby positions with Wild symbols. Of course, after such an encounter a poorbat will drop anything that it was carrying in its clutches, which will be liable to be picked by you. This plunderincludes cash prizes, Free Spins, multipliers and of course one of the four Jackpots.And so you have been warned. Do you have what it takes to dare and trespass into vampire''s territory? Thenthis game is just for you. Take a bite of the gothic atmosphere with Platipus'' new slot - Guises of Dr'
    WHERE identifier = 'platipus:guisesofdracula'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tired? Overworked and exhausted? Take a break from the winter rush, and enjoy a calm Hawaiian Night withPlatipus. Explore the exotic island or lean back on the warm Mediterranean sand with a glass of pinna colada.You deserved that break.But it would rather boring to do nothing all day, so why not go pearl hunting? Especially if collecting threelucky pearls will award you with 8 Free Spins! And it does not stop there, not only you can retrigger the FreeSpins by collecting more pearls, the main symbols: the Hook, the Canoe and the Hut, will be replaced by a WildSymbol for all the Free Spins!Jackpots are also featured in this game. At any time, if manage to line up consecutively 3 or more WildSymbols on the first line, starting from left outermost reel, you will be rewarded by Major, Minor or MiniJackpot.So what are you waiting for? Brush off snow off your winter boots, pack up your swimsuits and dive intomagical atmosphere of Hawaiian Night!'
    WHERE identifier = 'platipus:hawaiiannight'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the Jackpot Lab where a mix of science and magic results in a real potion of luck.This exciting, full of magic new game has 5-reels and boasts some big bonus features like Bonus Reel, Free Spins, and Jackpots.A hit of 3 Scatter symbols gets awarded with 8 Free Spins which can get re-triggered during the feature.Additionally to the regular 5 reels, this game has a sixth Bonus Reel which rotates slowly during the main game. 3 Bonus symbols activate the Bonus Reel resulting in wins of a cash prize or 1 of 4 Jackpots - Mini, Minor, Major or Grand! If you believe in magic or in science, in Jackpot Lab wins are available for everyone!'
    WHERE identifier = 'platipus:jackpotlab'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jade Valley is a 5X3 reels and 50 lines video slot about a beautiful princess and brave warrior who comes to her rescue. When the Wild symbols appear, a peach tree starts growing but the real magic begins when at least 6 Bonus symbols appear on the reels and the Respin feature will get triggered. During the Respin feature 4 kinds of Jackpots can be won: GRAND, MAJOR, MINOR and MINI. The main goal is hitting the GRAND Jackpot so make sure to keep an eye on the Bonus symbol. When all symbol positions get hit, the biggest prize gets awarded.'
    WHERE identifier = 'platipus:jadevalley'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit mix on the reels: tasty, shiny and, most importantly, profitable!Allow your mind some healthy pleasure by starting to play Juicy Spins, a 5x3 reels and 25 lines video slot.Trigger Free Spins and enjoy the delicious taste of winnings. Even more prizes await you after hitting Wild x2 applying to any winning combination. You''ll receive double the money  '
    WHERE identifier = 'platipus:juicyspins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What happens at the bottom of the sea? Which creatures live at the bottom of the oceans? Dive into the wonderful underwater world of Lucky Dolphin, a 5x3 reels and 15 lines video slot, and eyewitness the wonders that occur down there! You will love the 5-level Bonus game as you never leave it without a prizewhich can reach an impressive amount of 220 total bets! Start your fascinating journey immediately and get ready for pleasant discoveries!'
    WHERE identifier = 'platipus:luckydolphin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mirror, mirror on the wall, who is the luckiest of all?Today you have an opportunity to use the magic mirror in order to win even more in fancy 5x3 reels 15 fixed lines video slot. Collect 3 apples, launch a bonus game and joy the free spins.'
    WHERE identifier = 'platipus:magicalmirror'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Nothing can be compared with the feeling of magic happening! Start Magical Wolf, a 5x3 reels and 20 lines video slot and get this experience hunting for wins with the king of the wood as your loyal companion! The game is amazing, Free Spins are even better. Sticky, Stacked and Expanding Wilds appearing in the Free Spins feature will not let you go for hours! Hunt for wins with our Magical Wolf by your side!'
    WHERE identifier = 'platipus:magicalwolf'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'They say once you see the Dragon, it will bring you luck for the rest of your life. Prepare for mega luck with our 5x3 and 30 lines video Mega Drago slot. The Mega symbol feature will make your game way more exciting! Catch the Scatter as a mega symbol and play the bonus game with free spins. Play it now and getmega lucky!'
    WHERE identifier = 'platipus:megadrago'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classics never lose their appeal. Feel welcomed in the old fashioned way by our Neon Classic slot which always presents its players a set of at least two united reels which can get even more exciting by expansion of reels towards triplets, quadruplets or even quintuplets! The unique feature as well as the 243 ways to win, ensure a maximum level of excitement during each and every spin.'
    WHERE identifier = 'platipus:neonclassic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Can you feel the trace of magic in the air? Can you notice the mystical shimmering of reels? The Lucky Gems are calling\r\nout for those who dare to embark on the journey through Platipus'' newest game - 9 Gems! These shining stones are\r\nknown as gamblers'' best friends due to their ability to attract good luck. And so, should you hit any non-matching\r\nsymbols of the same kind, such as sevens and bars you will still get a payout from the Mixed Symbols feature! And that''s\r\nnot all, as true wonders happen when the gems themselves come into play! Collect from 4 to 9 jewels anywhere on the\r\nreels and win the MINI, MINOR, MAJOR, MAXI, MEGA or GRAND Jackpot!\r\nAre you already attracted by the sparkling beauty of shining jewels? Then it''s high time to start your adventure with the\r\nnew classic hit from Platipus - 9 Gems!'
    WHERE identifier = 'platipus:ninegems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild symbols may only appear on a 3rd reel, and when they do, they award the player with 2 Free Spins and will roll to the next reel on each spin. If during the Free Spins Feature another Wild symbol lands on 3rd reel the remaining number of Free Spins will be reset to 2. Each Wild symbol that resets the Free Spin feature also increases the Free Spins win multiplier by one until the end of the feature.'
    WHERE identifier = 'platipus:poshcats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A wonderful and magical place, a paradise where all stress disappears in oblivion. You will forget about everything once plunging into this world of beauty!The exotic melodies of birds bring harmony and peace to your soul!Come on in dear friend. Welcome to the marvelous realm of the Princess of Birds, a 5x3 reels and 20 lines video slot!Here any 3 symbols in a stack will bring you 3 Respins with these symbols sticking to the reels during the whole Respin round! Even more fun triggered when the Princess of Birds decides to award you a round of Free Spins. Just catch Scatters on the reels and enjoy every moment of it! '
    WHERE identifier = 'platipus:princessofbirds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bored? Pack your bags and get prepared for an exciting safari weekend in Africa! A great collection of wild animals await you in Safari Adventures, a 5x4 reels and 50 lines video slot! The game will surprise you with a great variety of colors and amazing Free Spins with Sticky Wilds on the reels. Don''t wait, wild adventures are just what you need!'
    WHERE identifier = 'platipus:safariadventure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you dreamt of seeing sakura blossoms? Now it is possible at any time. Be welcome to the amazingland of the Sakura Wind, a 5x3 reels and 20 lines video slot! Here any 3 symbols in a stack will bring you2 Respins with these symbols sticking to the reels during the whole Respin round! Even more fun getstriggered when the Sakura wind awards you a round of Free Spins. Just catch Scatters on the reels andenjoy every moment! '
    WHERE identifier = 'platipus:sakuragarden'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Start conquering the immeasurable universe, millions of light years from the endless galaxies! Absorb all beauty of the universe and become one with it in Fiery Planet, a 5x3 reels and 25 lines video slot! After hitting a winning combination with 3 or more symbols, experience how it feels when the universe gives you a generous Respin gift! With 5 Scatters on the reels you will feel even better as this is how you get Free Spins activated. Hurry up! Fiery Planet is waiting for you!'
    WHERE identifier = 'platipus:spacequest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Ancient Four provides protection to all who play this amazing game!The dragon, phoenix, tiger and turtle have always been considered symbols of prosperity and wealth. Now these myths come to life in our slot where The Ancient Four will bring you an overflow of luck.The slot consists of 5 reels with 4 rows and 50 pay  lines. All you need to hit is 3 Scatter symbols on the first 3 reels and you will enjoy the Free Spins feature with Extra Wild. Stay cool when you face the dragon''s fire because it means you are winning!'
    WHERE identifier = 'platipus:theancientfour'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A slot game that will excite even the sultan himself!Welcome, travelers, today Platipus is inviting you to a mystical world of Arabian Nights. Become a hero or heroine of alegendary tale narrated by the beautiful Scheherazade! During it you will experience numerous wonders, meet enigmaticcreatures and find unfathomable riches.Traverse the world on a flying carpet ang get to know the mysterious genies. Have you collect three of their mysticallamps on the same spin, you will be awarded with 8 Free Spins. But the biggest treasures Shaherezada keeps hiddenare the Bonus symbols. By hitting 6 or more of them, you will be rewarded with three magical respins that will keeprepeating as long as you will be getting more Bonus symbols. It is during this time, when the moon is its closest, that theall four Jackpots can be won.So don''t delay! Magical adventure awaits! Dive headfirst into the world of mystery and make the ne'
    WHERE identifier = 'platipus:thousandonespins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Strength, wisdom, energy and luck are things the magic dragon brings.Triple dragon is a 6x4 reels and 50 lines video slot. Plunge into the world of luck and adventures. Collect 3 special coins to start the Bonus game which brings you 3 rounds to enjoy! Win your number of Free Spins and your type of Free Spins feature. During Free Spins, Wilds will expand and slide across the reels. May luck be with you all the way, brave traveler!'
    WHERE identifier = 'platipus:tripledragon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The sun is setting down and the darkness settles in. With grave chill and rattle of bones theskeletons approach... But it''s totally fine because they are just here to party!Welcome to Platipus��� newest game Un Dia De Muertos which will take you to one of the mostunusual places in the world, Night Carnival!Celebrated by all kinds of unliving creatures this is truly a night to remember. Apart from musiciansthis carnival packs a lot of pleasant bonuses: Free Spins, Jackpots, and most importantly - BonusExtra Wild feature!While certainly having a colorful name, this feature is quite simple but nonetheless exciting. Onlyduring Free Spins, you may witness the rare romantic skeleton, Luis. This mystical symbol mayappear only on the 1st and 5th reels. But should you get both of them, not only you will get threeFree Spins, but all the symbols between them, will transform into Wild symbols!And since hitting 6 or more Wilds will trigger a Jackpot, this is almost a guaranteed one!So don''t waste any time and be the to start dance at the Night Carnival in Platipus'' newestgame Un Dia De Muertos.'
    WHERE identifier = 'platipus:undiademuertos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Webby Heroes is a 5x3 reels and 30 lines video slot with a Bonus game feature and Expanding Wilds. This slot takes you to the atmosphere of rugby and puts you in the shoes of a real rugby player on his way to win the championship and big prizes that come along with it. Hit and enjoy the bonus game with Free Spins and Multiplier by catching at least 3 scatters anywhere on the reels. The feature can get re-triggered during the Bonus game with the same multiplier to bring even more wins. The superior quality of graphics coupled with extensive and easy gameplay makes Webby Heroes a must play and a potentially very rewarding experience for all players to enjoy.'
    WHERE identifier = 'platipus:webbyheroes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This glamourous game will take you on an unforgettable adventure through the neon filled casinos of Las Vegas. It features classic five reels, three lines and 25 paylines, offers extra wild freespins and rocks the Jackpot Wheel. To trigger the Jackpot Wheel, fill the payline with five identical symbols and let it take you for a bountiful spin. This spin will award you with one of the jackpots, a jackpot with multiplier or a combination of jackpots. There are 42 different combinations that you can get for some truly colossal payouts! If you will manage to land three or more scatters, an extra game with up to 25 free spins will start. To provide you with extra wild experience, the whole fifth reel will be filled with Wilds throughout the extra game. So, what are you waiting for? Dive right into the world of dazzling light and alluring profits with this fascinating game.'
    WHERE identifier = 'platipus:wildspin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Time to go hunting for some bling our June release is a treasure box filled with diamonds, jewels and other valuables!This is a super fun and easy to play slot with high definition 3D graphics that pop! Your goal is to fill the screen with valuable objects  and if you lock a full column along the way, you''ll unlock the multiplier (get up to 14x in the base game!).In addition to the awesome multiplier, this game also boasts free Respins when you get a winning combo, plus the chance to win up to 5625x your bet if you get a full screen with the same symbol!And what will happen if you manage to lock all symbols on the screen? That''s our little secret you''ll have to play to find out.'
    WHERE identifier = 'quickspin:ArcaneGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ark of Mystery is an adventure-packed slot where Hollywood action heroes meet their match!\r\n\r\nJoin the heroine Anna as she navigates her way through an ancient Egyptian legend, taking on the curses of ancient Pharaohs to unlock lost treasures of the ancient kingdom.\r\n\r\nAs you venture through this exciting game in true Indiana Jones style, there''s tons of awesome features along the way!\r\n\r\nThe special multiplier symbol on the 5th reel dramatically boosts your chances of winning big, with rewards of up to x22! And the wild symbol works as a substitute for all other symbols, except for the Multiplier Booster symbol that can appear anywhere on reels 2-4.'
    WHERE identifier = 'quickspin:ArkofMystery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'What happens when you pair the Greek goddess Artemis with legendary monsters, the harpy, minotaur�s, and griffons, and will she, in the end, be able to conquer the Gorgon Medusa? The suspense is real.\r\n\r\nWill Artemis be able to slay the last monsters or will the monsters overwhelm her. If Medusa is slain a potentially huge win can be won, as every Medusa symbol added to the battlefield increases the �Medusa Bounty�. Artemis vs Medusa is a medium volatile, 5?4, 1024 ways game with a chance to win 5286x and an unlimited amount of battle free'
    WHERE identifier = 'quickspin:ArtemisvsMedusa'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch out little pigs, the Big Bad Wolf is here and he will huff and puff until he''s blown all your houses down!\r\n\r\nReleased in 2013, Big Bad Wolf is one of our very first slots and it''s still one of our most popular and successful games across all markets.\r\n\r\nAnd we�re not surprised. Paying homage to the famous fable The Three Little Pigs, this slot boasts high volatility, charming graphics, and exciting features!\r\n\r\nSwooping Reels combined with the Pigs turn Wild feature can make the game rounds go on, and on, and on continuously adding more of those sweet coins to your account. And the Free Spins Bonus is where the real magic happens! Collect Moon symbols to help the Wolf blow down all three houses and get rewards along the way.\r\n\r\nWith all it has to offer, it''s no wonder Big Bad Wolf snagged the prestigious Game of the Year award at the EGR Operator Award'
    WHERE identifier = 'quickspin:BigBadWolf'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch out little pigs, the Big Bad Wolf is here and he will huff and puff until he''s blown all your houses down!\r\n\r\nThis release is based on a true Quickspin classic, but this time in Christmas clothing! Since its release in 2013 (one of our first), Big Bad Wolf has been a huge hit and is still immensely popular to this day.\r\n\r\nIn this version, the wolf re-enters the stage to offer you a fun-filled gaming experience with all the holiday feels. But is he naughty or nice? He''ll treat you well for sure, but the three little piggies might want to watch out!\r\n\r\nThis game combines a magical winter wonderland with a proven math model, and the Swooping reels combined with the Wild feature mean the game rounds can go on, and on, and on� for a very long tim'
    WHERE identifier = 'quickspin:BigBadWolfChristmasSpecial'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Big Bad Wolf Megaways will blow your mind with its top-notch graphics, Tumble Mechanics, a Multiplier that climbs in the Free Spins Bonus (it increases with each tumble), up to 117,649 paylines. This game is one of our big highlights of 2021, merging one of our most iconic IPs and best-performing games ever with the Megaways version.'
    WHERE identifier = 'quickspin:BigBadWolfMegaways'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In BigBot Crew, a bunch of techy teens are building the robots of the future!\r\n\r\nJoin this disparate gang in the outskirts of a sprawling metropolis, and enter a parallel universe of fast-moving, high-impact graphics and a ton of action in an extremely volatile 4?5 reel slot with 40 paylines.\r\n\r\nBut don�t worry, you won�t get lost in this futuristic maze, as a cast of helpful robots help guide you through the game with special symbols. These include the BigBot Wild and the Bonus Scatter symbols, which trigger respins and initiates free spins.\r\n\r\nSo, it�s time to get tech savvy and venture into this robotic adve'
    WHERE identifier = 'quickspin:BigBotCrew'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Based on the proven game design in our hit game Northern Sky, Blue Treasure will take you on an exciting underwater safari with a bunch of pirates!\r\n\r\nGet your scuba gear on and descend into the depths of the ocean  it''s a truly fascinating world down there. Explore the sunken ship under the watchful eye of a giant octopus and other curious creatures. Will you find the hidden treasure at the bottom of the sea?\r\n\r\nBlue Treasure is a 3?5 slot with 9 bet lines, high volatility, Respins on every win, and a Free Spins Bonus that only includes the highest paying symbols!'
    WHERE identifier = 'quickspin:BlueFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One day she''s battling enraged T-Rex mamas, the next she''s taking on some rather demonic (and very much alive) Pharaohs – our adrenaline-hungry heroine Anna the Explorer is back!'
    WHERE identifier = 'quickspin:BookofDuat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One day she''s battling enraged T-Rex mamas, the next she''s taking on some rather demonic (and very much alive) Pharaohs – our adrenaline-hungry heroine Anna the Explorer is back!'
    WHERE identifier = 'quickspin:BookofDuat90'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'One day she''s battling enraged T-Rex mamas, the next she''s taking on some rather demonic (and very much alive) Pharaohs – our adrenaline-hungry heroine Anna the Explorer is back!'
    WHERE identifier = 'quickspin:BookofDuat94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Nothing but fresh air, bird song, and the odd moose peeking through the pine trees – get ready for a low-key weekend in the beautiful Appalachian Mountains.\r\n\r\nWith the nearest person being miles away, this rickety old cottage is an introvert''s dream. Take a deep breath, relax, and kick back in your rocking chair. Your only concern for the next few days is keeping the lager cold and the fireplace w'
    WHERE identifier = 'quickspin:CabinCrashers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cash Truck is a 5-reel, 4-to-7-high ways game, featuring tumbling reels and a grid that expands with every win. We''ve also included a bonus game that''s completely new to our portfolio: the Truck Raider Bonus game, you get 3 spins to start with, and for every symbol you land the free spins counter reset to 3 spins.'
    WHERE identifier = 'quickspin:CashTruck'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cash Truck is a 5-reel, 4-to-7-high ways game, featuring tumbling reels and a grid that expands with every win. We''ve also included a bonus game that''s completely new to our portfolio: the Truck Raider Bonus game, you get 3 spins to start with, and for every symbol you land the free spins counter reset to 3 spins.'
    WHERE identifier = 'quickspin:CashTruck90'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cash Truck is a 5-reel, 4-to-7-high ways game, featuring tumbling reels and a grid that expands with every win. We''ve also included a bonus game that''s completely new to our portfolio: the Truck Raider Bonus game, you get 3 spins to start with, and for every symbol you land the free spins counter reset to 3 spins.'
    WHERE identifier = 'quickspin:CashTruck94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Burning rocks hurled at castle walls and knights armed with heavy battle axes and siege weapons  welcome to the Dark Ages.\r\n\r\nWe''re throwing you smack-bang into the middle of an intense castle siege. Will you be able to get through the gates to get your hands on the treasures on the other side?\r\n\r\nCrown of Valor is an extremely volatile 5x5 cluster game with clusters of five or more symbols, plus a max exposure of around 15,000x bet!\r\nThe features include tumble mechanics, progressive Multipliers, a Free Spins Bonus, and a Bonus Buy feature! \r\n\r\nWith gorgeous state-of-the-art graphics made with the same 3D engine as Nero''s Fortune, this blockbuster release packs a punch.'
    WHERE identifier = 'quickspin:CrownofValor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Forget Santa''s Lapland this winter and come visit the Crystal Prince instead! The star of this show is a charming and generous guy who takes good care of his visitors  you can win up to 11,500 x your bet!\r\n\r\nWhen the Crystal Prince swings his magic wand around, he can create Golden Wilds and Multipliers. And sometimes he even flies into the Northern Lights and spreads his wealth over the people of his land, so make sure to be around when that happens.'
    WHERE identifier = 'quickspin:CrystalPrince'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Crystal Queen is based on the HC Andersen story about the Snow Queen, and is an innovative slot which is loads of fun.\r\n\r\nThe game features swooping reels, spreading wild symbols, win multipliers, and up to 6 rows!\r\n\r\nIn the Free Spins bonus all 6 rows are unlocked, and the game pays both ways! With the addition of a fantastic soundtrack, and an extremely well balance math, Crystal Queen is truly one of our flagship games.'
    WHERE identifier = 'quickspin:CrystalQueen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic diamonds, sevens and cherries  Diamond Duke is a real nostalgia trip!With a look and feel inspired by 1950s jukeboxes, this game will transport you to the heyday of American diners and classic cars with chrome and wings. Why not cruise to the diner for some pancakes and milkshake?Instead of the usual reels filling the screen, this game has an actual slot machine inside the game! And the symbols, the animations, and the music really make it feel like you''re playing an old-school slot.This 5-line, 3-reel slot boasts high volatility, a super valuable diamond symbol, two bonus wheels, and a Pick & Click bonus for players who like great highs and lows and you can win up to 8,000 x your bet!'
    WHERE identifier = 'quickspin:DiamondDuke'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Anna the Explorer is back from The Ark of Mystery and this time she''s battling a bunch of enraged dinosaurs.\r\n\r\nDinosaur Rage is a 4?5 slot with 1,024 ways, high volatility, and the chance to win up to 17,000 x your bet! This game expands our range of high maximum exposure games and combines proven game mechanics with completely new ones.\r\n\r\nThe features include a Pay Anywhere feature, a Dinosaur Rage! Free Spins bonus (up to 25 spins), a Free Spins Re-trigger, growing symbols, and a Bonus Buy feature with two modes pay 75x or 150x your bet and get instant entry to the Dinosaur Rage! Free Spins bonus!\r\n\r\nIn the Free Spins bonus, at least one of the dinosaurs will grow to 4 symbols high and always include the Pay Anywhere feature (all dinosaurs can get this feature at the same time!).'
    WHERE identifier = 'quickspin:DinosaurRage'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Divine Dreams, the Goddess of Wealth and Prosperity welcomes you deep inside a dreamy rainforest, where you''ll find calming visuals and serene music. It''s like a little moment of mindfulness in your busy day!\r\n\r\nThe game is set within the rainforests of an Indonesian island, where the Goddess of Wealth and Prosperity lives. The people of the island create beautiful artefacts that worship her and the nature around her, and she''s believed to bring successful harvest to them.\r\n\r\nThese valuable artefacts, the connection with nature, and the spirituality of this setting, is what we''ve designed the symbols around in this slot. It''s a very peaceful game, but it''s still highly volatile and packed with tons of cool features  like the Mystical Multiplier that multiplies each win!\r\n\r\nStep into this dreamy rainforest today to find out what the Goddess has in store for you.'
    WHERE identifier = 'quickspin:DivineDreams'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This long-anticipated 3x5 reel slot with 20 bet lines boasts a stunning Asian theme with lots of red, gold and traditional symbols all to the tunes of beautiful music!With a fiery dragon that breathes Wildfires onto the reels, a Free Spins Bonus, and a Dragon Pearl Respin feature with 4 jackpot levels, this slot is guaranteed to give you a fun, unique and thrilling gaming experience! And the larger your bet, the greater your chances of winning the GRAND jackpot!Dragon Chase is so much more than your standard slot game, as it''s both a great slot game and a jackpot game. And that''s not all. We''ve also made TWO versions of the game, which is completely unique  so you get two for the price of one!Operators can choose to run one version or both, which lets you target a wider range of players at the same time. The game will have multijurisdictional support and it will use an operator specific/local jackpot.This slot will appeal to all types of players, as seasoned players will love the traditional theme and casual players will love the clear message and fun features!'
    WHERE identifier = 'quickspin:DragonChase'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Dragon Shrine, a colourful and exciting 40 betlines game, featuring the Dragon Stack Respin feature.\r\n\r\nThe excitement is turned up in Free Spins with a double stack feature, filling both the left and right reels with Dragons.\r\n\r\nThe artwork gives a modern twist to a classic theme.'
    WHERE identifier = 'quickspin:DragonShrine'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Durian Dynamite is a classic fruit game in a modern package, combining stunning 3D graphics with unique features and highly volatile gameplay! '
    WHERE identifier = 'quickspin:DurianDynamite'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Dwarfs Gone Wild, join Snow White and the Seven Dwarfs as they dig for hidden underground treasures!\r\n\r\nThe game is set deep inside a mine shaft, and each of the seven dwarfs possess unique powers that help create an explosive gameplay filled with bonus features and free spins!\r\n\r\nThe Golden minecarts unlock special Dwarf features when the free spins bonus is triggered, and every win that includes a Dwarf symbol is added to the Golden Minecart Bonus meter. The famous beauty''s mirror is also a key feature in this slot, and when triggered, it will reward 300 additional symbols and two free spins!\r\n\r\nPaying homage to the classic fairy tale, Dwarfs Gone Wild features Hollywood style animations and a folksy soundtrack that adds authenticity to this exciting game!'
    WHERE identifier = 'quickspin:DwarfsGoneWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Eastern Emeralds is set in the heart of the Asian wilderness, against a beautiful backdrop of steep mountains. This extremely volatile game is jam-packed with golden opportunities!'
    WHERE identifier = 'quickspin:EasternEmeralds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep down in the woods there is a fairy tale adventure waiting to happen thanks to our latest release, the Fairy Gate.\r\n\r\nThis enchanted encounter begins its flight of fancy when the magical tree opens up to reveal fairy orbs lighting up the screen to award wild symbols\r\n\r\nThe 3?5 slot features all kinds of fairies, with three bonus symbols triggering the free spins feature.'
    WHERE identifier = 'quickspin:FairyGate'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The touch of the Genie is something to behold as she uses her powers to change symbols.\r\n\r\n \r\n\r\nThree or more magic lamp symbols triggers the Genie''s Touch feature as she appears out of each lamp and turns adjacent symbols into matching symbols, always picking the best win combination!\r\nIf that''s not enough, there is a Free Spins game with extra magic lamp symbols to keep the fun coming.\r\n'
    WHERE identifier = 'quickspin:GeniesTouch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Just in time for Halloween, we welcome you to an old haunted house. Hidden underneath the grounds ghosts have a life of their own, each with its own unique ability, quirkiness and characteristics.\r\n\r\nGhost Glyph is a well-balanced cluster game with medium volatility, a 31% hit rate in the base game and up to 2,200x in exposure. The charming poltergeists are just the cherry on the top! Expect a spooky gaming experience with a splash of colour.'
    WHERE identifier = 'quickspin:GhostGlyph'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Channel your inner Indiana Jones and get ready to embark on an epic adventure in the land of the Pharaohs. Spin the reels, wait for the dust to settle, and let the hieroglyphs reveal your fortune.This stunning and feature-rich slot boasts a 7x7 layout that''s perfect for our new portrait mode! The features include Tumble Mechanics, a Power Wild feature, and a Power-Up feature with four magical Power-Ups: Golden Scarab, Eye of Horus, Blaze of Fire, and a Free Spins Bonus.'
    WHERE identifier = 'quickspin:GoldenGlyph'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Every great game deserves a sequel, wouldn''t you agree? Get ready to return to the land of the Pharaohs, we''re taking you on another unforgettable trip to Egypt with Golden Glyph 2.\r\n\r\nThe original title was our first ever cluster game and now we''ve revamped everything and given it an extra boost  enjoy improved game design, higher hit rates, and even smoother gameplay!\r\nIn addition to our new Bonus Buy feature (pay to get instant entry to the Free Spins bonus), this game boasts great Respins and a even more exciting power-ups!'
    WHERE identifier = 'quickspin:GoldenGlyph2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who''s been eating my porridge? It''s Goldilocks of course – the world''s most famous breakfast thief is back!\r\n\r\nBut don''t be fooled by her sweet and innocent exterior, this troublesome golden girl is naughtier than ever before in this fabulous and feature-rich slot.\r\n\r\nIf she''s feeling nice though, she might lead you into the Free Spins Bonus game where you can win big! And while you''re there, let her tease the bears to tu'
    WHERE identifier = 'quickspin:Goldilocks'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gold Lab is a bright and fun game, featuring our little scientist and his quest to make gold.\r\n\r\nThe main feature of the game is trigger symbols, which turn ordinary low paying symbols into wilds, for 4 or more respins.'
    WHERE identifier = 'quickspin:GoldLab'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Pack your toga and travel to ancient Greece with Guardian of Athens – you''ll fit right in. Immerse yourself in history and marvel at the magnificent architecture and grand statues. And there''s something else to marvel at: the reels are full of gold. Lots of gold.\r\n\r\nThis 3×5 slot with 20 bet lines boasts high volatility and a max exposure of 16,000x bet, together with proven and popular game mechanics like Multiplier Wilds and an exciting Free Spins Bonus!\r\n\r\nEnter the building to the bonus game and float above the clouds, where you''ll be asked to choose your fate. Feeling brave? There are four options to choose from – the higher the risk, the higher the reward.\r\n\r\nThis game design is a proven concept based on player data from one of our biggest hit games: Eastern Emeralds. The Free Spins mode in particular has been extremely appreciated by players, as they really like the option to choose their own '
    WHERE identifier = 'quickspin:GuardianofAthens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hammer of Vulcan is a volatile volcano! Deeply buried under Mount Etna, on the east coast of Sicily, the God of Fire is creating weapons and jewellery for the Gods of Olympus.\r\n\r\nWhen his mighty forge lights up, Etna comes to life and when his hammer strikes the mighty anvil, a concoction of molten steel, lava and gold will transform into a coveted artefact. Does it belong to the Gods, or are you perhaps worthy of such a treasure? Find out if you are in the Vulcan�s grac'
    WHERE identifier = 'quickspin:HammerofVulcan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hidden Valley is based on the fictional story of Shangri-La, a mystical valley and an earthly paradise  an eternal happy land, hidden from the world!\r\n\r\nIn this game, two travelers in Tibet have found the secret entrance to this valley, and they''re heading towards it with their Sherpa. Join these adventurers on their quest, and discover a gorgeous Tibetan landscape filled with exciting features all to the tunes of beautiful music.\r\n\r\nThe main feature in this beautiful game is the Stacked Wilds, and there''s also a Random Wild multiplier that can multiply up to x10! The Free Spins give you a chance to win extra spins, or to turn regular symbols into Wilds for an opportunity to win BIG!\r\n'
    WHERE identifier = 'quickspin:HiddenValley120'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hot Sync takes classic symbols and transports them to a fun and funky environment with bright colours and bold backgrounds.\r\n\r\nThe 3?5 reel, 20-line video slot boasts an exciting respin feature and freespins. The game has been developed in HTML5, and is available on both desktop and mobile. It includes autoplay and fast play options.'
    WHERE identifier = 'quickspin:HotSync'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Illuminous means bright, and bright is what this game is\r\n\r\nThe animations, and feedback of the game are astonishing. It has a respin feature that initiates two or more reels with about 50% wilds on the reel strips.\r\n\r\nIn free spins you have at least three of the reels with extra wilds.'
    WHERE identifier = 'quickspin:Illuminous'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ivan and the Immortal King is based on an old classic Russian fairy tale, so this game will take you on a one-of-a-kind adventure!\r\n\r\nYour mission is the slay the immortal Kind Koschey, but there''s just one problem: his soul is hidden inside a needle, which is in an egg, which is in a duck, which is in a hare, which is in a chest. So, all you have to do is find the chest, kill the hare, capture the duck, open the egg, and break the needle! Easy, right?\r\n\r\nGet your sword, strap your boots on, and go find out if you have what it takes to defeat the king and cease all his gold!\r\n\r\nWith an extremely volatile gameplay and tons of exciting features, like Super High Paying Symbols, the Baba Yaga Mystery Surprise, and Free Spins with increasing Multipliers, this game is a fairy tale come true!'
    WHERE identifier = 'quickspin:IvanandtheImmortalKing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Joker Strike is a game that''s bound to put a smile on your face!\r\n\r\nBut don''t be fooled by its fun appearance, this game is built on the very same mechanics that made our Second Strike such a smash hit, so it''s no joke.\r\n\r\nThis highly volatile slot boasts a Joker Strike feature, which is triggered by any win, and an awesome Hi Roller feature that offers you a chance of even higher wins and more thrills  bet big to win BIG!\r\n\r\nMake sure you''re there when this joker strikes!'
    WHERE identifier = 'quickspin:JokerStrike'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This wealth themed slot is a very straight forward game with stacked King Colossus symbols, and stacked Wild symbols\r\n\r\nIt''s in the free spins where the magic happens. The King Colossus symbol turns into a massive symbol that covers the whole three middle reels. With guaranteed wilds on reel 1, and possibly reel 5 for each spin you will get mega large wins combined withthe massive King Colossus symbol. Chase the bonus and see for yourself!'
    WHERE identifier = 'quickspin:KingColossus'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Make mischief with the leprechauns in this 4?5 reel, 40-line video slot featuring lucky respins and rainbow free spins. The game celebrates all things Irish, with symbols including a pint of the country''s famous stout, leprechauns and magic fungi.'
    WHERE identifier = 'quickspin:LeprechaunHills'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ever wondered what it would be like to be a monkey for a day? Here''s your chance!\r\n\r\nThis junglelicious adventure will take you to a special place where Loco (the monkey) lives. It''s a green haven full of exotic plants and clean air, plus an abundance of yummy pineapples, bananas, mangos, and blueberries. A feast for the eyes as well as the belly.\r\n\r\nAnd Loco isn''t the only ape in town, there''s also a special golden monkey to befriend… get three on the reels to trigger the Free Spins bonus.\r\n\r\nThis fun-filled 4×5 slot with 50 lines include a Monkey Frenzy! Free Spins bonus and a More Monkeys! Respin feature – and the chance to win ove'
    WHERE identifier = 'quickspin:LocotheMonkey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The legends tell of Mayan gold and there are riches galore to be had in this super sticky game, with its innovative new functionality.\r\n\r\nWhat starts as a 3x3 game which respins on any win, expands into a 3?5 one as the respins keep on coming. Any 3 or more connected symbols will stick, whether in the middle, on the left, or to the right.\r\nThere are also multipliers for the respin wins, and a randomly-triggered Mucha Mayana feature, which can add up to a 20 x multiplier to the last golden win!'
    WHERE identifier = 'quickspin:Mayana'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who said all that glitters is not gold? They must not have played Midas Coins.\r\n\r\nWelcome to ancient Greece and the land of King Midas. As legend has it, everything this king touches turns to gold. Slightly annoying for him perhaps, but great for you.\r\n\r\nThere''s an abundance of bling on these reels: rings, necklaces, earrings, and more. All in that sweet glittering gold.\r\n\r\nIn this 5x3 slot with 25 lines, the game mechanics include a Coin Collect feature (collect coins to grow your stack), an All is Golden Free Spins bonus where you can grow your stack even more, plus a Bonus Buy feature (pay to get instant entry to the Free Spins bonus)!'
    WHERE identifier = 'quickspin:MidasCoins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'King Arthur and his sorcerer Merlin are the stuff of fantasy, but this pair are very real  being full reel wild symbols with different powers.\r\n\r\nWatch Merlin summon his magic to scatter the reels with wild symbols. Hit his royal master and he will expand to cover three reels and create a massive wild symbol with guaranteed massive wins.'
    WHERE identifier = 'quickspin:MightyArthur'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This game was inspired by the famous classical music piece! In the Hall of the Mountain King by Edvard Grieg, which plays a central part in the slot.Any win can be multiplied by landing wilds (up to 15x in the Free Spins Bonus!), and there''s a massive 3-stage bonus with an escalating win potential as you progress through the stages.And watch out when the Troll King swings his hammer  the more blocks he smashes up, the higher the win! Reach your maximum win potential by upgrading all your symbols, increase the multipliers to the max, collect all 6 whirling wilds, and watch it all play out in the last 3 spins!Hall of the Mountain King is one of our biggest and most exciting releases of the year you''ll definitely need to catch your breath after this thrilling gaming experience!'
    WHERE identifier = 'quickspin:MountainKing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ready to travel back in time for an epic adventure? Take a trip to ancient Rome with Nero''s Fortune!'
    WHERE identifier = 'quickspin:NerosFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Northern Sky, you gaze upon the stunning sky to catch a glimpse of the prizes on offer, as they glisten in the bright, colourful polar light.\r\n\r\nSet in the heart of a fictional rural landscape in northern Scandinavia, the animal-shaped symbols are made out of crystals that light up the sky and offer an avalanche of wins.\r\n\r\nThe highest paying symbols are shaped like the animals of this northern forest, such as owls, wolves and bears and the more majestic they are, the more valuable they are. The golden dear is the most majestic of them all, so this is what you want to chase!\r\n\r\nThis highly volatile 5?3 slot with nine paylines features respins on all wins, plus a Free Spins Bonus game that includes only the highest paying animal symbols!'
    WHERE identifier = 'quickspin:NorthernSky'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the jungle! Panther''s Reign will take you on a once-in-a-lifetime adventure to the Amazon, a lush and vibrant paradise.Spin your way through this tropical forest and soak up the sounds of the flowing river, exotic birds and gentle breeze. Keep an eye out for colourful parrots, cheeky monkeys and shiny gemstones along the way. And the king of the jungle the elusive black panther.This colourful 50 line 4x5 slot boasts high volatility and thrilling game mechanics! The Wild Spray feature places 3-10 random wilds on the reels, and the lock-on-win Respin feature in the Free Spins bonus makes the gaming experience even more exciting.'
    WHERE identifier = 'quickspin:PanthersReign'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Phoenix Sun is based on the ancient legends of the Phoenix bird. This mythological creature is said to live for thousands of years, eventually bursting into flames and being reborn from the ashes.\r\n\r\nIn similar fashion, our Phoenix Wild will trigger reels to open up for respins and more bet ways. The game shifts between 3 and 6 rows in height, and 243 to 7776 bet ways.\r\n\r\nGather 5 Phoenix Wilds during respins and watch them set the reels ablaze, only to rise again along with the sun and a round of 8 Freespins.'
    WHERE identifier = 'quickspin:PhoenixSun'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The legendary Pied Piper is back! But instead of chasing the mice away, everyone''s invited to this joyous celebration where players can win BIG!\r\n\r\nSet in the city of Hamelin, this man in colourful clothing has brought his pipe along to give you a really exciting gaming experience.\r\n\r\nThe central aim in this game is triggering the walking feature, where all the mice follow the Pied Piper as the game respins.\r\n\r\nAnd just when you think the game is over, the Piper might return for more respins! Triggering the Free Spins will create an enhanced bonus experience as well, because as night falls over the city of Hamelin, there''s even more mice to catch!\r\n\r\nThis game is jam-packed with exciting gameplay and awesome features, all to the tunes of joyful music and beautiful graphics that will rival any animation studio!'
    WHERE identifier = 'quickspin:PiedPiper'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Pirate''s Charm, you join the brave buccaneers as they venture out on stormy seas in search of golden charms! These charms are packed with mystical powers that transform your wins.\r\n\r\nThe adventure begins as the sturdy ship slips anchor, but as the storm clouds gather, it''s far from pain sailing towards the land of the buried treasure.\r\n\r\nFor those of you who are brave enough to embrace the wild weather, this extremely volatile game offers plenty of charms with respins and free spins galore!'
    WHERE identifier = 'quickspin:PiratesCharm'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''re releasing our first Christmas game just in time for the holiday season!With a beautiful winter wonderland inhabited by cute polar bears and a generous elf who loves to throw sweets around, Polar Paws will get you into the Christmas spirit before Santa Clause has even left the North Pole.This fun-filled character game combines the happy holiday theme with modern game mechanics, like an exciting Free Spins Bonus and Wilds galore: there''s Regular Wilds, Multiplier Wilds, and a Polar Bears Turn Wild feature.So if you''re not already wild about Christmas, you will be now!'
    WHERE identifier = 'quickspin:PolarPaws'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'If you''re a fan of classic casino games, you''re gonna love this one! We''ve made this slot for the true casino fans, to appeal to their gambler souls and give them something truly special.Picture a Las Vegas casino at night, with silhouettes of palm trees against the purple sky. In walks the legendary Rat Pack, Frank Sinatra, Dean Martin, and Sammy Davis Jr. Ok, maybe not, but it certainly feels like they could!This stunning 3-5 reel slot with 10 betlines combines a classic look with exciting features, like Multiplier Wilds that can multiply a win by up to 5x, and a Free Spins Bonus that lets you to pick your own volatility with the pre-bonus picker! And on top of that, we''ve also added a mystery (I''m Feeling Lucky) free spin mode to the mix.Mark your calendars and get ready to get in the zone!'
    WHERE identifier = 'quickspin:PrimeZone'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The classic fairy tale has been given a makeover thanks to HTML5 technology, including the princess''s long locks of blonde hair, which look better than ever.\r\n\r\nThis 3×5 20-line slot provides massive wins with the stacked Rapunzel wilds, while the "Bonus Wilds stick until you win” feature means players are given a greater opportunity of wins, as The Bonus Wild symbols are locked in place and the game re-spins until a winning combination is triggered.\r\n\r\nAnd make sure you hit the Free Spins bonus and make the Prince save Rapunzel from the Tower.\r\n\r\nThe reengineered slot offers stunning graphics and immersive sound across desktop, mobile, and tablet. But be quick to try out the game, as the princess is waiting for you'
    WHERE identifier = 'quickspin:RapunzelsTower'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Razortooth is a pre-historic game starring some of the coolest animals from the last ice age.\r\n\r\nThe game is the first 243 ways game produced by us, and has two major features with fantastic payout.\r\nIn the base game you can get a random triggered sequence where the Razortooth tiger leaps across the screen to leave multiple wilds behind. In the Free Spins bonus at least one reel is wild each spin.'
    WHERE identifier = 'quickspin:Razortooth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who doesn''t have a road trip in the US on their bucket list? Imagine you''ve invited your best friends along for the trip of a lifetime. As you''re cruising down the highway together, wind in your faces and the landscape of Nevada rolling out around you, there''s nothing but blue skies and free time ahead.'
    WHERE identifier = 'quickspin:Reno7s'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In Sakura Fortune, you step into an enchanted world of cherry blossoms and golden dragons to join the heroine on her journey.\r\n\r\nThis extremely volatile 4x5, 40-line slot follows a beautiful Japanese princess as she battles evil emperors on her way to untold riches!\r\n\r\nThe game boasts exciting features like Sakura Fortune Respins, Free Spins, and a Mystery Nudge.\r\n\r\nWith it''s action-packed, feature-rich gameplay, stunning graphics and lucrative wins, it''s no wonder this game is one of our biggest hits!'
    WHERE identifier = 'quickspin:SakuraFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Second Strike is our first volatile 10 line game. Our inspiration has been the classic fruit machines with their simple but elegant game mechanics.\r\n\r\n Second Strike is a far cry from the old classic games though, as we have added an exciting twist, the Second Strike feature!\r\nAny symbol win initiates the Second Strike feature. Players hitting a matching symbol on the outer wheel, will be rewarded with 6-10 additional symbols for a second massive win!'
    WHERE identifier = 'quickspin:SecondStrike'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic slot style symbols combined with contemporary club music, and staggering visual presentation makes it feel fresh and familiar at the same time.\r\n\r\nThe Progressive Wild feature has been well proven in Big Bad Wolf. In Sevens High we take the feature to another level with stacked symbols, and a Free Spin bonus where any symbols\r\nturned wild stay that way until the bonus round is over.\r\n'
    WHERE identifier = 'quickspin:Sevenshigh'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tough day? Come have a good time and unwind with Seven''s High Ultra. Grab a drink and a bite to eat while you put your feet up and spin the reels.\r\n\r\nJust like the original game, classic meets contemporary for a fresh and familiar experience. Timeless slot symbols like cherries and other fruits are matched by modern club music and exciting features – now with extra heat!\r\n\r\nThe Progressive Wild feature has been a proven success in both the original Seven''s High and Big Bad Wolf, but we''re taking it to a whole new level in Seven''s High Ultra. The stacked symbols and mechanics are the same, but the Free Spins Bonus has been given a big boost as you can retrigger even more free spins and your scatters can land on '
    WHERE identifier = 'quickspin:SevensHighUltra'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Superb graphics and animations will be the first impression of Sinbad, but the glory of the game lies within the gameplay.\r\n\r\nThe randomly stacked symbols ensures interesting wins in main game, but really comes to play in the wild frequent free spins features. There are three different free spin bonuses to choose between, each representing one of Sinbad''s adventures.'
    WHERE identifier = 'quickspin:Sinbad1'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dream of escaping someplace warm? Skulls UP! is just what you need. Set sail for riches and join the pirates, parrots and playful monkeys on this tropical island!This fun and quirky 5-reel slot will keep you entertained for hours. Hunt for hidden treasures amongst the palm trees and feel the heat from the high volatility and flaming hot features, like Flaming Free Spins, Flaming Respins, and Flaming Skull Wilds!And to turn up the heat even more, the reels can grow (up to 6 symbols in height!). Every Wild symbol you get during a Flaming Respin will open up a new position above the reelsincreasing the number of bet ways from 243 all the way up to 1,944! Arr matey, time to sail ship and discover what treasures await!'
    WHERE identifier = 'quickspin:SkullsUP!'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spinions is a fun-filled 25 lines game with cute and lively characters who enjoy a great summer party.\r\n\r\nThe Spinions love good times, and great company, and the game''s respin feature gives them plenty of reasons to celebrate. Two Spinion Wilds trigger a respin with the Wilds stickying on the reels, and additional Spinions keep it respinning.\r\n\r\nIn the Free Spins the Spinions continue their party at the night club where all wilds are sticky and remain on the reels for the rest of the bonus.\r\n\r\nYou don''t want to miss this beach party!\r\n'
    WHERE identifier = 'quickspin:Spinions'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your favourite orange dudes and dudettes are back and they sure know how to have a good time. Expect an all-you-can-eat buffet, delicious drinks, and dancing on the tables (there might even be karaoke if you stay long enough).\r\n\r\nAnd it wouldn''t be a Quickspin bash without the brilliant features, which include Sticky Wild Respins and Sticky Wilds in the Free Spins Bonus, so grab your ugliest Christmas sweater and get ready for some seriously festive gameplay!'
    WHERE identifier = 'quickspin:SpinionsXmasParty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Plunge into the wicked Wild West and join a couple of bad-ass bandits as they attempt to rob a runaway train!\r\n\r\nSticky Bandits is a thrill-a-minute rollercoaster of a ride, featuring desperadoes, dynamite, and a killer western soundtrack.\r\n\r\nWith high volatility, Massive Wild symbols, Bonus symbols, and a Free Spins Bonus, this slot is guaranteed to give you an exciting gaming experience!\r\n\r\nOne of our most popular and highest performing slots to date, Sticky Bandits has been so popular that we decided to release a sequel in 2019 Sticky Bandits: Wild Return!'
    WHERE identifier = 'quickspin:StickyBandits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dynamite, guns, cacti, and whisky the wicked Wild West is back! The first two Sticky Bandit slots are two extremely popular Quickspin games, so who are we to deny you a third one?This time around, the bad-ass bandits are five fierce women and they''ve only got one thing on their mind: to get inside that locked safe and run away with bags full of cash. Will you be able to get your hands on some of it? Sticky Bandits 3 Most Wanted is a 3x5 slot loaded with exciting Wilds and Free Spins, plus the Sticky feature that everyone loves. And you don''t even have to wait around for the Free Spins bonus  pay 60x bet and get instant entry with the Bonus Buy feature!'
    WHERE identifier = 'quickspin:StickyBandits3MostWanted'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The old bandits are back in town, meaner and leaner. And they say all good things come in three, so we''ve added a new bad-ass bandit to the gang. This trio of desperadoes is ready to cause some serious havoc in a dingy saloon that''s packed with whiskey, cigars, guns, and skulls just as you''d expect in the wicked Wild West!This gaming experience is every bit as thrilling as the first Sticky Bandits! The three bandits show up as both normal and massive symbols on the reels (up to 3x3!), and there''s an extremely exciting shootout in the Free Spins Bonus where all the bandits can turn into Sticky Wilds!'
    WHERE identifier = 'quickspin:StickyBanditsWildReturn'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tales of Dr. Dolittle combines one of the most beloved characters of all time with fun features, beautiful design, and modern game mechanics! Based on the series of classic novels from 1920, this slot pays homage to the world''s most famous animal whisper.In this animal adventure, you get to hang out with the famous Dr. Dolittle and all his pets  a dog, a horse, and a parrot! This slot expands our portfolio of character games, which already includes popular games like Big Bad Wolf and Goldilocks.'
    WHERE identifier = 'quickspin:TalesofDrDolittle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Glitz, glamour and a touch of The Great Gatsby what''s not to like? This game is something truly special, with an Art Deco style that takes you back to the roaring 20s and the Golden Age of Hollywood.'
    WHERE identifier = 'quickspin:TheGrand'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jump into the fast-paced action of the Wild Chase, where you and your fellow team of thieves are planning one last heist!\r\n\r\nSet in a glamorous resort town on the Riviera, the kind of place where the top 1% hang out, this game boasts stunning scenery, super slick graphics and a really exciting gameplay!\r\n\r\nThis slot is not only full of jewelry and expensive watches, it''s also full of awesome features. Any win is rewarded with respins, and they continue as long as new wins are added! On top of that, the multiplier Wilds will multiply any win in which they are included.\r\n\r\nIf you''re a fan of heist films, you''re going to love this game!'
    WHERE identifier = 'quickspin:TheWildChase'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for something a bit different for your vacation this year? Ticket to the Stars is just the ticket (pun intended)! It will take you on an exciting space adventure, filled with relaxation, romance, and wealth.\r\n\r\nSo, pack your bags and take a seat onboard this space craft – we''ll help you travel the solar system in style! Enjoy the gorgeous vintage design, inspired by vintage Work Projects Administration (WPA) posters, as well as beautiful audio compositions that are some of the best this side of Jupiter.\r\n\r\nWith tons of exciting features and a 243 way evaluation over 3×5 reels, we''ll make sure this extremely volatile game takes you on a trip you''ll never forget! They say space travel is the future, so be the first to try'
    WHERE identifier = 'quickspin:Tickettothestars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tiger''s Glory is the most epic gladiator battle in the history of slot gaming! So, get your armor on, step into the colosseum of ancient Rome, and get ready to face some seriously fierce tigers!\r\n\r\nOur most action-packed showdown yet pits tigers against gladiators in an epic fight worthy of history books. In this extremely volatile 4×6 reel slot with 40 paylines, the action is non-stop and it''s guaranteed to keep you on your toes every step of the way!\r\n\r\nMake sure you keep an eye out for the Enraged Tiger – this Free Spins bonus game is triggered when three or more Bonus Scatter symbols lock into place. Free spins are available whenever the tiger wins a battle, and you can get as much as 20 free spins if you''re lucky.\r\n\r\nIt''s time to channel your inner gladiator and have a roaring'
    WHERE identifier = 'quickspin:TigersGlory'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Titan Thunder Wrath of Hades boasts gorgeous graphics and tons of exciting features, including 3 fixed jackpots a Bonus Buy Feature and the chance to win up to 15,000x! '
    WHERE identifier = 'quickspin:TitanThunderWrathOfHades'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Titan Thunder Wrath of Hades boasts gorgeous graphics and tons of exciting features, including 3 fixed jackpots a Bonus Buy Feature and the chance to win up to 15,000x! '
    WHERE identifier = 'quickspin:TitanThunderWrathOfHades2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Treasure Island is our most feature rich video slot to date, filled with adventure, excitement and massive wins.\r\n\r\nThe bonus chasers will really get what they are after with the Pirate Attack Bonus, Treasure Hunt Bonus, and a multi-feature Free Spin Bonus. These features combined with the\r\nStacked Wilds will ensure some massive wins and great entertainment value.'
    WHERE identifier = 'quickspin:TreasureIsland'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get whisked away to a colourful and prosperous world filled with hopping vampires. You heard right! Our July release is inspired by Chinese folklore, where undead creatures, known as the Jiangshi, appear with outstretched arms and stiff posture, preying on humans to absorb their life force.\r\n\r\nWe''ve placed a more comedic tone on this traditionally dark theme and packed it with plenty of suspense and anticipation. Included is a base game mystery feature, randomly creating 3-9 additional Talisman Wilds, and it doesn''t stop there. The game gets even darker in Free Spins. After landing one or more Vampire Wilds, the Jiangshi will hop around, sinking their teeth into any Medium human symbol that appears next to them, creating more wilds! Appearing on a 5x5 layout, Vampire Sempai boasts invigorating colour combinations, rich graphics, and eye-catching effects that will leave the player thirsty for more!'
    WHERE identifier = 'quickspin:VampireSenpai'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Volcano Riches takes you inside an active volcano where Pele, the goddess of volcanoes and fire (and creator of the Hawaiian Islands), might reward you generously with BIG wins!\r\n\r\nThis highly volatile 5x4 slot with 40 paylines is a fiery little number that makes you wish for a hot streak, and it''s got tons of exciting features too!\r\n\r\nIf a Wild symbol lands on the third reel, it will explode and generate two to five additional Wild symbols in adjacent positions. These volcanoes also explode, leaving you to bask in the warm glow of your winnings  if you''re lucky!\r\n\r\nTime to feel the heat!'
    WHERE identifier = 'quickspin:VolcanoRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'On a planet far, far away, the world''s top scientists are fighting against the clock to develop robots for the next ‘astrocalypse''. The biggest and most important project is constructing The Destroyer, but it''s not quite finished.'
    WHERE identifier = 'quickspin:WarpWreckersPowerGlyph'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'On a planet far, far away, the world''s top scientists are fighting against the clock to develop robots for the next ‘astrocalypse''. The biggest and most important project is constructing The Destroyer, but it''s not quite finished.'
    WHERE identifier = 'quickspin:WarpWreckersPowerGlyph90'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'On a planet far, far away, the world''s top scientists are fighting against the clock to develop robots for the next ‘astrocalypse''. The biggest and most important project is constructing The Destroyer, but it''s not quite finished.'
    WHERE identifier = 'quickspin:WarpWreckersPowerGlyph94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Step into a witc''s lair with our February release! A mysterious concoction is brewing, and it''s filled with colourful monsters, magic potions and high volatility.This super-fun slot boasts locked symbols, expanding reels, a Multiplier, Tumble mechanics, Respins, and a Free Spins Bonus. The game starts off with a 4-6 grid and 4,096 bet ways which can grow all the way up to 8-6 with 262,144 bet ways!'
    WHERE identifier = 'quickspin:WildCauldron'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you enjoy the thrill of The Wild Chase? Then you''ll love Wild Chase: Tokyo Go. This high-octane adventure puts you right in the middle of an action-filled heist in the Japanese capital!'
    WHERE identifier = 'quickspin:WildChaseTokyoGo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the smoky back tent of an independent circus, where a talented magician owns the stage. But is she really alone up there? Or does she have a twin…?\r\n\r\nIt''s all smoke and mirrors in this show. Nothing is what it seems, and everything turns out to be even more fantastical than the card tricks being performed.\r\n\r\nCatch this travelling circus while you can, because once this sneaky lady has moved on with her entourage there''s no trace to be seen. Not even a dent in the field. Makes you wonder if it was all a dream…\r\n\r\nWild Harlequin is a 5×3 slot with 10 paylines, featuring Wild Harlequin symbols that always nudge to cover the entire reel, plus a Free Spins Bonus with Multiplier magic – and if you hit the BIG win, you''ll know it rea'
    WHERE identifier = 'quickspin:WildHarlequin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the smoky back tent of an independent circus, where a talented magician owns the stage. But is she really alone up there? Or does she have a twin? It''s all smoke and mirrors in this show. Nothing is what it seems, and everything turns out to be even more fantastical than the card tricks being performed.Catch this travelling circus while you can, because once this sneaky lady has moved on with her entourage there'' no trace to be seen. Not even a dent in the field. Makes you wonder if it was all a dream'
    WHERE identifier = 'quickspin:WildHarlequinbasic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cactus plants, hot chillies, and some seriously strong tequila – can you guess where we are? Mexico!\r\n\r\nJoin a talented luchador and try your hands at professional wrestling. Enter the ring, soak up the sound of your fans cheering you on, and wrestle your way to the big win.\r\n\r\nWild Luchador is a 5 reels wide, 3 symbols high, 243 ways slot with extremely high volatility and a max exposure of 40,000x bet!\r\n\r\nThe exciting features include Luchador Wilds and Dead Slam Free Spins. The Death Clocks will send you into the Dead Slam Free Spins bonus, where you''ll enter the Land of the dead and the Luchador Wilds will strike in almost every spin (up to 5 at the same time).\r\n\r\nAnd why wait for the Free Spins? Pay 70x bet and get instant entry to the bonus game with the Bonus Buy featu'
    WHERE identifier = 'quickspin:WildLuchador'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Whittlewood Forest is a former medieval hunting ground in Northamptonshire, England, where a reclusive wizard named Tom lives. But his friends call him Middy (short for Midas) due to his life-long obsession of trying to turn things into gold. So far, he''s failed.Instead, after years of having gold-related spells written into it, his Wild Tome has started to turn random things around it into gold! This causes all kinds of problems, so the wizard and his friends: the half frog/half newt Crikey, the fox Sylvester the 3rd (nicknamed Sly for obvious reasons), and the posh owl from Oxford named Eleanor, are trying to put a stop to it. But before they do, why not take advantage of the situation and grab some gold for yourself?This fun-filled 4x6 slot with 26 bet lines includes exciting features, like the Wild Tome feature that will turn other symbols into Wilds or new Wild Tomes, creating truly magical amounts of Wilds. And for the chance to win BIG, fill the entire grid with Wilds to get the All Wilds Win!This September, go green and step into this forest for a one-of-a-kind adventure!'
    WHERE identifier = 'quickspin:WildTomeoftheWoods'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Set in a picturesque valley in the heart of Asia, players head into battle with mythical characters of old quest stories to win big in our slot, Wins of Fortune.\r\n\r\nThe 3,3,4,4,5 reel slot boasts respins on any win, and features a Super Respin mode where the game re-spins until there are no additional winning symbols on the grid.'
    WHERE identifier = 'quickspin:WinsofFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blackjack with 3 hands, double on any 2 cards, dealer checks for BJ, only one split/hand allowed, insurance, even money, only 2 cards on split aces'
    WHERE identifier = 'reevo:Blackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic European Roulette with track bets and bets presets'
    WHERE identifier = 'reevo:EuropeanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your blood will rush through your veins whilst you will be shooting targets to uncover bags of gold and avoid TNT explosions.'
    WHERE identifier = 'reevo:GoldRushShooter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Next level of gaming experience is presented in slot All Lucky Clovers. The game includes fourmodes which can be played anytime: play with 5, 20, 40 or 100 lines. The layout of the reelsfor 5 and 20 lines is 5x3. The layout for 40 and 100 line-game is 5x4. The game features 2Scatters, Expanding Wilds, Gamble Round and a lot of action in general. All Lucky Clovers isexciting to play and enlarge the winnings.'
    WHERE identifier = 'softswiss:AllLuckyClover'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Next level of gaming experience is presented in slot All Lucky Clovers. The game includes fourmodes which can be played anytime: play with 5, 20, 40 or 100 lines. The layout of the reelsfor 5 and 20 lines is 5x3. The layout for 40 and 100 line-game is 5x4. The game features 2Scatters, Expanding Wilds, Gamble Round and a lot of action in general. All Lucky Clovers isexciting to play and enlarge the winnings.'
    WHERE identifier = 'softswiss:AllLuckyClover100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Next level of gaming experience is presented in slot All Lucky Clovers. The game includes fourmodes which can be played anytime: play with 5, 20, 40 or 100 lines. The layout of the reelsfor 5 and 20 lines is 5x3. The layout for 40 and 100 line-game is 5x4. The game features 2Scatters, Expanding Wilds, Gamble Round and a lot of action in general. All Lucky Clovers isexciting to play and enlarge the winnings.'
    WHERE identifier = 'softswiss:AllLuckyClover20'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Next level of gaming experience is presented in slot All Lucky Clovers. The game includes fourmodes which can be played anytime: play with 5, 20, 40 or 100 lines. The layout of the reelsfor 5 and 20 lines is 5x3. The layout for 40 and 100 line-game is 5x4. The game features 2Scatters, Expanding Wilds, Gamble Round and a lot of action in general. All Lucky Clovers isexciting to play and enlarge the winnings.'
    WHERE identifier = 'softswiss:AllLuckyClover40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Next level of gaming experience is presented in slot All Lucky Clovers. The game includes fourmodes which can be played anytime: play with 5, 20, 40 or 100 lines. The layout of the reelsfor 5 and 20 lines is 5x3. The layout for 40 and 100 line-game is 5x4. The game features 2Scatters, Expanding Wilds, Gamble Round and a lot of action in general. All Lucky Clovers isexciting to play and enlarge the winnings.'
    WHERE identifier = 'softswiss:AllLuckyClover5'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you met a charismatic Elvis Frog performing in Las Vegas? We''re sure, you have! The Elvis Frog in Vegas slot, released in May 2020, is a true hit and favourite game for many players worldwide. BGaming is going to release a sequel of its most popular title! The slot called Aloha King Elvis! will be launched in July!\r\n\r\nThis time the cute Elvis Frog will pack the luggage, leave noisy Las Vegas and go to Hawaii! Tropical islands are full of relaxing summer vibes, melodic guitar rhythms and breathtaking views. Isn''t it a perfect place for a great beach party with Elvis Frog as a headliner?'
    WHERE identifier = 'softswiss:AlohaKingElvis'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'American Roulette features a ball, a wheel and numbers colored black and red and marked from 1to 36. There is also one green slot numbered 0. This variation of roulette features two zeropockets: 0 and 00 (as opposed to the European variant with only 0) which increases the house'' sadvantage on even money bets. A player can bet on any single number or the range or numbers,segments of the field like columns and dozens and also odd/even, black/red and low/high numbersthat are called even money bets.'
    WHERE identifier = 'softswiss:AmericanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Medieval adventures on a magic island far away await you in Avalon:The Lost Kingdom. Thegame is a 5 reels and 20 paylines slot full of action entertainment, packed with opportunitiesfor winning, and immersing the player deeply into the mysterious atmosphere. There is aplethora of features that guarantee exciting gaming and winnings galore: Free Spins,Multipliers, Additional Wilds and even Fateful Wild. Visit the mysterious kingdom of Avalon,which can disclose its big treasures.'
    WHERE identifier = 'softswiss:Avalon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aztec Magic is 5-reel 15-payline slot which is devoted tothe ancient civilization of South American Indians. It''s all about the nature and culture of the powerful tribe: stonecut reels, forests and mountains of Mexico in thebackground, and Indian masks depicting gods andwarriors. All symbols are designed in the cave paintingstyle to create the authentic atmosphere of Aztec living.Aztec warrior as a Wild symbol triples all winnings andIndian priestess as a Scatter brings a number of free spins bonus features which bring additionalfun to playing.'
    WHERE identifier = 'softswiss:AztecMagic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Behold everyone''s favorite slot now seasoned with some Aztec style and magic vibes. BGaming introduces a magnificent transformation of best games and their mechanics into a single game - Aztec Magic Bonanza! This extraordinary slot will surprise you with new gaming experience and catch you for many hours. Test your luck and win great prizes.\r\nAztec Magic Bonanza is a 6х5 slot with a group payout system. All great features, Scatter symbols, free spins and other cool stuff together with addictive gameplay awaits you inside this wonderful slot. Take a step to new adventures and find the ancient treasures!'
    WHERE identifier = 'softswiss:AztecMagicBonanza'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Aztec were a Mesoamerican civilization that flourishedduring the 14th, 15th centuries in the region of Mexico. Theirinfluence stretched throughout most of the northernMesoamerica. This unique society left a significant footprinton the map of Mesoamerican civilizations and built anempire with its own culture and political system.Aztec Magic is devoted to the ancient civilization of SouthAmerican Indians. It''s all about the nature and culture of the powerful tribe: stone cut reels, forestsand mountains of Mexico in the background, and Indian masks depicting gods and warriors. Allsymbols are designed in the cave painting style to create the authentic atmosphere of Aztec living.'
    WHERE identifier = 'softswiss:AztecMagicDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blackjack Pro is a variation of Blackjack with increased payout ratio and one of the lowest houseedges for any casino game. It originates from the Las Vegas Strip set of rules from in Las Vegascasinos back in the 1970s.This one is played with 6 decks, each with a card count of 52. The player can make a prior bonusbet before any cards are dealt. Should any of the cards be a Jack, the player can significantlymultiply their Bet winnings, regardless of the outcome of the regular game. Look out for acombination of Two Jacks of Spades to get a Bet multiplier of x100.Worth mentioning are the Double and Split features. You can split your hand up to 3 hands. Dealeralways stands on soft or hard 17. A tie results in a Push and your hand is returned.This Las Vegas version of the game definitely deserves the attention of savvy players or just thoseseeking additional thrills from more bets per round!'
    WHERE identifier = 'softswiss:BlackjackPro'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bob''s Coffee Shop is a slot with 5 reels and 10 paylines. The main character of this game is Bob,who knows all the pleasures of life, just cheerful and funny guy, a big fun of Bob Marley by the way.Playing this game you never get bored! Relaxing background music, bright colors, smiling Bob andhis best friend Lion, continuous joy, and what''s more, great opportunities to play and win! Embracethe atmosphere of Amsterdam with the game Bob''s Coffee Shop!'
    WHERE identifier = 'softswiss:BobsCoffeeShop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Christmas is coming and it''s high time to get ready for the most magical holiday in a year! What is the best way to convey the atmosphere of Christmas? That''s right, by bringing the holiday''s mood into the good old classics. Gather around a lovely Bonanza game, this time Xmas edition and feel the vibe of the upcoming holiday!\r\n'
    WHERE identifier = 'softswiss:BonanzaBillion'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The slot Book of Cats will take the player back through ages when gods and goddesses stillwalked the earth. BGaming has created an opulent and luxurious feel in the slot with golden,treasure-like symbols and graphics. The greatest characters of the mystical history have beenillustrated in the Book of Cats slot, for example: The Cat Queen, Bastet and the magic Mask, whichcomes alive. In addition, the player meets the Golden Book in the role of Scatter and Wild symbolin the game. This symbol gives enormous opportunities to win big, as it starts free spins that canbe re-triggered. We can''t but mention the surprisingly pleasant feature of the main game, wherethe 6th reel is waiting to be wide opened. So let''s start spinning the reels and open up a world ofgolden treasure that will bring glory and gold.'
    WHERE identifier = 'softswiss:BookOfCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Book of Pyramids is a full HD 5-reel non-progressive 9 payline slot devoted toAncient Egypt and featuring its traditional characters and symbols.Tutankhamen, Bastet the Goddess of Cats, the Eye of Ra, and Ankh, Symbolof eternal life, accompany the player into the world of Gods and Pharaohs.Scarab standing for a Special symbol activates the bonus feature of freespins.'
    WHERE identifier = 'softswiss:BookOfPyramids'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Brave Viking is a Nordic fantasy type of slot displaying Vikings andall attributes of this history period: brutal warrior as a Wild, Rune as aScatter, as well as read-haired beauty and crossed axes toaccomplish the theme. The most exciting bonus game in which youneed to guess which of the three ships is coming first won''t leavereal gamblers indifferent. The game is now available in HTML5 andcan be played on any mobile device!'
    WHERE identifier = 'softswiss:BraveViking'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Less spooky moments, more sweet gifts! BGaming is going to celebrate Halloween all year long! Candy Monsta, the new slot in the brand''s lineup, shares festive vibes with players. Collect all sweets with a cute Candy Monsta!\r\n\r\nColorful candy is the Wild symbol in the game. It transforms into any symbol to complete your winning combination! We know what you think… No Halloween party is complete without carving pumpkins! BGaming didn''t forget about that. Moreover, we made the tradition more intriguing. Pumpkins-bombs dropped on the reels explode and trigger Free spins! Don''t be afraid to burn yourself with hot winnings!'
    WHERE identifier = 'softswiss:CandyMonsta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cherry Fiesta is a fruit-themed video slot game with 5 reels and 9 paylines which involves 13 different symbols. In addition to glittering fruits,the slot also features a gorgeous Cherry Girl as Scatter and Cherrybasket as a Wild. The game offers a variety of bonus features such as30, 40 and 50 free spins triggered by 3, 4 and 5 Scatter symbolsrespectively, an advanced autospin option and a gambling round toincrease the win up to 5 times by guessing the color and suit of theface-down card.'
    WHERE identifier = 'softswiss:CherryFiesta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Clover Bonanza - is an entertaining slot that can boast of a row of amazing bonuses and marvelous features. Free spins, Scatter symbols, refilling and many more exciting features won''t leave any player indifferent. Bright color and spectacular graphics all-in-all a perfect match for any fortune-tempter!'
    WHERE identifier = 'softswiss:CloverBonanza'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Crazy Starter is a fruit and vegetable-themed 5-reel non-progressive 25 payline slot. The reels arepacked with a variety of fruit and vegetables, each having its one character and mood. The gameboasts a special Free Spin button featuring a happy worm to activate 15 free spins.'
    WHERE identifier = 'softswiss:CrazyStarter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Meet a superbly crafted video slot from BGaming - Deep Sea, standingout from the crowd and giving an exceptional psychedelic feel. It ispacked with muted neon colours, dancing on the waves underwatercreatures and deep dark features in the inky, black stillness. All worktogether to create an immersive, relaxing effect. This 5-reel slot with 15paylines has brilliant features: free spins, scatters and additional wilds,that might interest a slots'' enthusiast who is looking for a traditional game that looks special and gives big wins.'
    WHERE identifier = 'softswiss:DeepSea'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Desert Treasure is a full HD 5-reel 9-payline slot based onthe theme of the Middle Eastern folk tale of Aladdin. Theregular symbols that appear on the reels are all related toAncient Arabs lifestyle: crossed swords, ancient coins,Arab letters, and the enchanted oil lamp. Accompanied byauthentic music, they create a feeling that you are one ofthe tale protagonists. The game offers unusual bonusfeatures, such as triple wins in free spins triggered by theArab Warrior Scatter symbol.'
    WHERE identifier = 'softswiss:DesertTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It is said that the golden sands of the Egyptian deserts still hide the treasures of the ancient civilization. Only brave and… lucky can find them! BGaming goes in search of riches in the Dig Dig Digger slot! Join the crazy archeologist looking for wealth in the heart of Egypt! The charismatic and hilarious character will help you to grab all the gold!'
    WHERE identifier = 'softswiss:DigDigDigger'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This 9 paylines slot Domnitors slot game draws inspiration from Romanian medieval history. Thesymbols of the reels are connected with the historical background of the slot. They depict medievalweapons, execution tools, historical Romanian castles and, most importantly, the three mostoutstanding rulers of the period: John Hunyadi of Transylvania, Stephen the Great of Moldavia, and Vlad the Impaler of Walachia.'
    WHERE identifier = 'softswiss:Domnitors'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Domnitors Deluxe slot takes players to the brutal Medieval times where the main charactersrepresented by John Hunyadi, Stephen the Great and Vlad the Impaler use their military strategiesto survive and conquer new territories. This graphically updated, animated 5-reel, 3-row video slotwith Vlad as Wild Symbol and the map as a Scatter gives a particular excitement, an overwhelmingdesire to spin the reels and feel the spirit of this mysterious historical period more and more.'
    WHERE identifier = 'softswiss:DomnitorsDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'BGaming invites players on a journey to the mysterious East! Brand''s new slot called Dragon''s gold 100 received into itself the most recognizable and unique attributes which Asia famous for! Eastern Dragon, also known as Loong, is a legendary creature in Asian mythology. Being the key figure in the game, the symbol of power and luck shares fortune with players! Moreover, you will find Chinese lanterns, golden coins, and even imperial palaces. Colorful graphics and traditional music create a magic atmosphere!The online slot is fully packed with lavish features! Wild and Scatters Symbols convert into one hundred pay lines giving players more and more chances to have a winning combination! Furthermore, Wild symbols can expand on the whole reel, occupying the upper and lower tiles. The maximum exposure of the slot goes as high as x3000 to bring terrific moments!'
    WHERE identifier = 'softswiss:DragonsGold100'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Elvis Frog in Vegas is a slot that associates with plenty of marvelous music and rock and roll. Thegame has five reels, three rows and 25 paylines with free spins, respins and a special bonus roundwhere a player can hit a Major and Mega Jackpots with a Tutti-Frutti Feature. In addition to theamazing assets of the game, the cartoonish style and positive general thrust, the enhanced soundpresentation will make the game especially delightful, because enjoying Elvis''s motives is apleasure no one would resist. Welcome to the slot full of fun and perfect gaming experiencecombined with legendary musical hits.'
    WHERE identifier = 'softswiss:ElvisFroginVegas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Roulette''s simple but highly attractive gameplay won its deserved popularity among gamblinghouses and saloons which later on transformed into land-based casinos as we know them today.Just try to think up one without a roulette table instantly popping up in the mind. Impossible!Increased chances of winning are what makes the European version of the game stand out fromthe rest of its versions worldwide. Here comes the diversity: unlike its American distant relative,European roulette has only one green pocket marked 0. The numbers layout on the wheel is alsodifferent. What is more to notice, there is a huge space for racetrack bets to add to the generalinside and outside bets: Vousins du Zero, Black Splites, Red Splites and Tiers du Cylindre. Therules are always at hand within the game. Spin the wheel indefinitely  thus a believable theory ofthe roulette''s invention during the searches of perpetuum mobile will be proved!'
    WHERE identifier = 'softswiss:EuropeanRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fantasy Park is a slot game recreating the atmosphereof an amusement park with its roller coasters, ferriswheels and cotton candy. The slot has 5 reels and 9paylines. A special bonus feature is the Expanding Wildsubstituting any Scatter and awarding you with 10 freespins if you trigger two Expanding Wilds at once.'
    WHERE identifier = 'softswiss:FantasyPark'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fire Lightning is a full HD 5 reel non-progressive 20payline slot. The theme of the slot is based on themotives of ancient Greek mythology. Figures from Greekmythology, such as Zeus, Themis, Ares and Hephaestusare represented in the game. The gameplay takes placeon the background of Olympus - the sacred mountain,the place of the gods'' residence, headed by Zeus. Inancient Greek mythology Zeus is the god of lightning, thunder and heaven. Lightning is the mainweapon and the main attribute of the supreme god.Game is packed with special features which make the game more attractive to the users: scatterswhich multiply winnings by total bets, wild symbols, bonuses, free spins with frozen wild symbols and a gambling round.'
    WHERE identifier = 'softswiss:FireLightning'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Four Lucky Clover is a slot inspired by a classy Irish vibes. The game has five reels,three rows and 10 paylines with bonus round and features that are both entertainingand engaging for players. The highlights of the game are the lucky spins, stacked wildfeatures and like a cherry on top - the 4 reels bonus game where the player canconsiderably increase the winnings. In addition to the amazing assets of the game, thegraphics, vibrant symbols and animations are kept captivating as well as charming.Welcome to the slot, which is truly old-school and perfect for players who like to keep itsimple.'
    WHERE identifier = 'softswiss:FourLuckyClover'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '"Diamonds are a girl''s best friend…” You''ve probably heard the famous saying before. It''s time to dispel the stereotype! Four Lucky Diamonds by BGaming is created to make every player happy. The 5х3 scheme video slot is a mix of colourful gems and classical gambling symbols such as bells, stars, and the number 7. Collect the entire set of diamonds to feel the magic of luxury and richness!'
    WHERE identifier = 'softswiss:FourLuckyDiamonds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The French roulette rules have a distinguishing feature of La Partage which stands for returning the bets of even value in case the winning number is 0. The relaxing soundtrack mixed with soft crowd chatter in the background will immerse you into the atmosphere of a real brick-and-mortar casino. Select the value of a chip for a bet and enjoy the experience!'
    WHERE identifier = 'softswiss:FrenchRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classics is always a trend, - thought BGaming''s team and decided to create one more fascinating traditional-style slot�� A few weeks and here it is! BGaming invites you to the Fruit Million slot! One hundred paylines and millions of chances to win are hidden in this game. Try to catch them all! On your way to impressive winnings you will find recognizable slot symbols such as fruits, diamonds, horseshoes, and of course 4-leaf clovers which are going to bring a lot of luck for both newcomers and experienced players. The game also attracts casino lovers with its pleasant features and convenient interface!Plunge into the atmosphere of pure entertainment and joy! Spin and win a Fruit Mill'
    WHERE identifier = 'softswiss:FruitMillion'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hawaii Cocktails is another colorful slot game from the chill out series. It steals you away from the routine to put on hot sand by theOcean with tropical sun high above and warm breeze in your hair. Feelthe sunshine on your face and grab one of those famous cocktails toenjoy the vacation. You deserved it!The symbols on the reels are exotic cocktails known for theirextraordinary taste and style. A Calibri  the smallest and the cutes birdin the world, introduces Scatter symbol here. This little symbol ofbeauty and elegance can bring 10 free spins if 3 or more Calibri pop upon the reels. Winning combinations with 3, 4 and 5 Scatters are multiplied x10, x100 and x1000accordingly.Coconut is a Wild and can replace any other symbol on the reels except Scatter. The more Wilds the better: 5 Wilds carry a flabbergasting multiplier of x50000!'
    WHERE identifier = 'softswiss:HawaiiCocktails'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you a little on the tired side after having to wrap you headaround Paylines, Scatters, Wilds and Free Rounds? Then settle infor a game that does not stress you with any of that and brings yousheer fun as easy as 1,2... and that''s it, there really is no thirdoption.Heads and Tails is pretty self-explanatory: a simple coin flip basedon a game perhaps centuries old. The Heads side of the coin isrepresented by the minted Bitcoin sign, while the Tails sideresembles an ASIC chip on a printed circuit board. Both call backthe origins of Bgaming as pioneers in Bitcoin gaming.Bet amounts can be configured in the settings, therefore the screenis left uncluttered and free of buttons, save for the Heads betbutton on the left-hand side and the Tails bet button respectivelyon the right-hand side.It really does not get simpler that this. The chances are 50/50 here, and each win pays out 1.98Xmaking the house edge as little as 1%. So just toss the coin for big easy wins and tons of fun!'
    WHERE identifier = 'softswiss:HeadsTails'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hello Easter video game will get anyone in the Easter spirit, obviously. This is another classic5-reel slot with 9 paylines, which never fails to keep the player interested when it comes to lovelygraphics and playability. While playing Hello Easter, a gamer can grab a nice Easter treat in theform of a bonus game with quite generous cash prizes. It has never been so simple to win extramoney, as chances are 50/50, just try to guess a card. The reels in this game include suitablyEaster themed symbols such as a bunny rabbit, a chicken, and candy-sweet letters. Time to havefun has come, but just remember, don''t spend all the winnings on more chocolate!'
    WHERE identifier = 'softswiss:HelloEaster'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Colorful billboards, retro cars and thousands of miles to make dreams come true! It''s all about our new journey. We invite you to hit the legendary Route 66. The main street of America - that''s what the road was called decades ago - is full of adventures. Connecting stylish Chicago with sunny Los-Angeles, the route passes through the geographical heart of the U.S. BGaming wants you to feel the authentical vibe of the old west.Our new 5x4 machine with free spins and impressive bonuses is going to be your ticket to an unforgettable trip. Don''t hesitate and always remember that the main rule of the traveler is to enjoy every moment! So, start the engine, turn up the music and let your passion go! Big winnings aren''t far behind!'
    WHERE identifier = 'softswiss:HitTheRoute'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Never the process of guessing the draw has been so exciting: welcome to Jogo DoBicho, the lottery created exclusively by BGaming to show a fragment of Brazilian culture online.The lottery game escaped right from the Zoo in Rio De Janeiro to its streets a long time ago andnow it can be played, with a little help from us, in each corner of the planet. The game is basedaround the 25 different animals, with each of them representing 4 numbers from 00 to 99. So,for example, the ostrich was 01/02/03/04, the elephant 45/46/47/48, and so on. Whencustomers entered the zoo they purchased a ticket, and the last two digits of the ticketcorresponded to a particular animal. The game rules remained the same to this day, we''ve made this lottery likable and adrenaline rushing keeping the spirit of the past and present. So,make a bet on a favorite lucky animal or number and feel all the emotion of the draw.'
    WHERE identifier = 'softswiss:JogoDoBicho'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'While the wind is blowing a tumbleweed out of the window, another fight is breaking out in the saloon where whiskey and tequila never stop flowing. Johnny Cash won''t miss a win, whatever it takes! This is the hero of our new slot - a daring adventurer searching for bags full of money and gold. The name of the crazy cowboy speaks for itself! There are many obstacles on his way to the cherished riches, but he knows how to get through them all! And he invites you to join him on an exciting journey through the Wild West! BGaming''s brand new slot is inspired by the times of the gold rush. So, we know exactly where to go for wealth! The game is a 5x3 scheme machine with impressive features giving you more and more chances to line your own pockets! If you are as fearless as Johnny Cash, you will definitely fin'
    WHERE identifier = 'softswiss:JohnnyCash'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Journey Flirt is the online slot of BGaming beautifully rendered,superbly designed for maximum entertainment. Besides its greatlooks, the game can also yield spectacular winnings especiallythanks to its remarkable features. Having a 5x3 scheme with 243winning lines, the slot provides a huge amount of chances to win.The bonus rounds are represented by 4 cities. On the reels, playerswill come across traditional lower-valued symbols andhigher-valued symbols like the boy and the girl, who not only travelaround the world, but tell a fine love story. All players, interested invirtual exploring of the world''s unique cities will definitely have agreat time on this online journey.'
    WHERE identifier = 'softswiss:JourneyFlirt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Inspired by real-world snorkeling and deep sea gold hunting, Lucky Blue submerges you into anunderwater adventure. Many a diver have tried to uncover the sunken treasures of the deep, butnot all have succeeded. Now is your chance to dive into the depths to try your luck at striking gold!Bet on 9 paylines in this 5-reel video slot. Gold Bars serve as the Wild symbol that can take theplace of any other symbol in the game, while doubling your winnings. Accumulate 2, 3, 4 and 5Wilds in order to x50, x200, x1000 and x5000 respectively.Should the gold bars prove to be a scarce treat, look out for the Shark, the game''s freespin-triggering Scatter symbol. Put 3, 4 and 5 Scatter symbols into your nets and enjoy a x10,x50 and x 200 multiplier as well.Encounter the lovely marine life in this underwater swim through the sea as you search for richesand big wins!'
    WHERE identifier = 'softswiss:LuckyBlue'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky Dama Muerta brings the dead to life (in this 5x3 slot)! Fun and vibrant symbols, music that sets the scene and features such as unlimited Free Spins, Wild Multipliers and Gamble rounds promises rewards that will make all turn in their graves! \r\n\r\nIn this 5x3 slot game more than just the deceased return from the afterlife, it''s packed with colourful characters, features and exciting rewards. Celebrating death can''t be a more spectacular affair with piñatas, calaveras, vihuelas and the Lucky Dama Muerta herself.\r\n\r\nThe beautiful Dama Muerta is your lucky and WILD symbol, substituting any symbols in a line except the Scatter to complete a winning combination. All winnings obtained from the WILD symbols are multiplied by 2x.\r\nThe piñata is the Scatter Symbol, catch 3, 4 or 5 of these and it will rain sweet rewards by triggering 15 Free Spins. Free spins can be endless, retrigger more with as little as 3 Scatter symbols on any position. You are in for a sweet treat, all Free Spin winnings are tripled!\r\n \r\nThe Gamble round offers players an opportunity to double the fun and their winnings by guessing the colour or suite of the cards.\r\n \r\nCome celebrate life with Mexican-flair in this 10-payline game packed with exciting winning chances!'
    WHERE identifier = 'softswiss:LuckyDamaMuerta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky lady clover is a slot with 5 reels and 9 paylines based on the theme of magic symbols.Alongside with standard letters and numbers, it depicts four - leaved clover, golden coin, rainbow,lucky horseshoe, pot with golden coins, magician hat, and fairy. It offers a variety of bonusesincluding 15 free spins triggered by 3 or more Scatters and Wilds doubling the winnings.'
    WHERE identifier = 'softswiss:LuckyLadyClover'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When the sun goes below the horizon and the dark comes around, the majestic moon becomes the lady of the night. Have you ever heard that it has a special energy and magic power? Lucky Lady Moon is here to prove it!A 5x3 slot machine with alluring graphics and music creates a world hiding a lot of surprises. The game includes unlimited Free Spins, Wild Multiplier and a Gamble round to increase your winnings! Catch the magnetic vibes of the night and find all the treasures of Lucky Lady Moon!'
    WHERE identifier = 'softswiss:LuckyLadyMoon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you ever dream of a freshly baked tiramisu or a glazed sweet roll? We know you do. Perhapsyour appetite is yearning for a cupcake and a French brioche, too? Well, now you can have themall at the same time as part of an entertaining and user-friendly Lucky Sweets video slot.Take in the simple pleasures of life and its sweet treats while basking in the sun by the Seine.Designed to be a purely relaxing experience, Lucky Sweets is meant for the gastro-connoisseursand bon vivants alike. The 5-reel non-progressive slot with 5 payout combinations comes sansScatters and Wilds. It is as scrumptious as it is simple.The icing on the cake is a Simple card-guessing Gamble Round that amplifies your taste buds andanticipation with a mouth-watering chance to double your winnings up.Enjoy the luscious taste of victory with Lucky Sweets!'
    WHERE identifier = 'softswiss:LuckySweets'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Could you imagine modern devices powered by steam? Weird, right? Futuristic, yet retro at the same time, steampunk is truly one of a kind. Created about 30 years ago, it was inspired by the Victorian era and turned into an alternate reality where technological progress is based not on electricity, but on steam. The unique elements of the steampunk can be found in literature, fashion, cinema, and, of course, games! You''ve probably already guessed… BGaming takes on the steampunk style!'
    WHERE identifier = 'softswiss:MechanicalClover'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Mechanical Orange with its retro elements will take you to the alternative world of great beauty:quaint, old, nostalgic in combination with surprisingly bright colors. With anachronistic invention as thecentral symbol of the game players can totally get into the steampunk fantasy, along with finely craftedand visually appealing details and characters of the game - professor and his daughter. The slot ispresented in the form of the orange slice, has 3 reels and 1 payline, available to play on any deviceseven with a portrait mode on. It''s not just magic with symbols appearing out of the slot, it is ultimatelyfantastical to actually make spins. Escape and enjoy the alternate story filled with excitement andeccentric characters!'
    WHERE identifier = 'softswiss:MechanicalOrange'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Walk softly could be the motto of Minesweeper, a casual game by Bgaming. In fact it is a variationof a well-known timekiller-procrastinator computer game but this one can really bring some benefitsto an experienced sapper. Recollect all your skills and tune up the sensors! No reels, no cards thistime. Just a lined green field hovering over the abyss and bombs distributed all over somewhere inthe grass. Each step leads either to an explosion or to a clear block marked with a red flag. Makeyour way through the field step-by-step, maneuvering around the hidden bombs and multiply yourwinnings with each safe move. The game can be adjusted to your personal luck levels: field sizesvary from tiny 2X3 to big 6X15. Bet amounts are configurable as well. The gameplay is simple yetabsorbing: proceed to the opposite end of the playfield and try not to blow yourself up. However, thedesign and the sounds are so cool that even losing is fun here! Check out the juicy BOOM and thelight smoke going up should you land on a mine. Minesweeper definitely stands out in Bgaming''s portfolio of slots and card games and is absolutely worth trying if you are nostalgic about thosehours spent in vain playing the original version. Choose the winning path, but remember: sappernever makes two mistakes!'
    WHERE identifier = 'softswiss:Minesweeper'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Well-designed fruit slots are never enough! BGaming is delighted to add one more traditional-style game to its collection! The brand''s new title Miss Cherry Fruits surprises players with fresh gorgeous graphics and impressive features!\r\n\r\n20 lines hidden in the slot are paid both from left to right and from right to left! At the same time, Wild symbols dropped on the reels always expand occupying upper and lower spots and gifting one respin which can be re-triggered up to 3 times!'
    WHERE identifier = 'softswiss:MissCherryFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blackjack is by far the most popular casino card game also known as twenty-one. Regardless ofthe simplicity of the game rules it boasts high winning chances and a great deal of excitement.With 6 decks, 52 cards each, this game is played against the House, with one of the Dealer''s cardsface down at the start.Players are able to split their hand upon initial dealing, provided they receive the same card value.This gives them the chance to make a foray with up to three hands playable. Should the total valueof the initial cards be equal to 9, 10 or 11, the player will be prompted to double their bet for achance to shoot for an even higher win. In any scenario the Dealer will stand on either a soft orhard 17.Playing against the House grants a 1:1 chance of winning and a 3:2 pay on Blackjack. Push ordraw returns the original bet.The subtle tones, smooth card and chip animations, and relaxing music make this the go-to cardgame for all blackjack aficionados.'
    WHERE identifier = 'softswiss:MultihandBlackjack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This 25 paylines slot features figures from theAncient Greek mythology and is packed withspecial features which make the game moreattractive to the users: scatters which multiplywinnings by total bets, wild symbols, bonuses,free spins and a gambling round.Grab hold of the all-powerful Zeus LightningScatter. A combination of 3, 4 and 5 Boltsmultiply winnings by x7, x77 and x777 inascending order. Sail the high winds with theGreek galley, an ancient ship, that is the Wild. AWild can substitute any symbol, but for theScatter, amplifying wins by the x88, x888 and x8888 as well. The Minotaur is a ferocious sticky reelbonus that, when appearing on reels 1 and 5, triggers 10 free spins.Borrowing from the Ancient and recent folklore of Greece, the games catchy Sirtaki music is boundto stay with you long after you stop playing. Enjoy meeting the Pantheon of Gods and Heroes aswell as the gifts they have to offer with Platinum Lightning!'
    WHERE identifier = 'softswiss:PlatinumLightning'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The slot game is based on the motifs of ancient Greek mythology.The main heroes of the game are heroes and gods of Greece -Hercules, Themis, Medusa and others.Greek mythology has had an extensive influence on the culture,arts, and literature of Western civilization and remains part ofEuropean heritage and language. From ancient times to thepresent numerous poets and artists have been seekinginspiration in Greek mythology and bringing it to theirmasterpieces of today.'
    WHERE identifier = 'softswiss:PlatinumLightningDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to Plinko - BGaming version of the casual game with high winning odds. Plinko is a mix ofarcade games and online gaming: resembles pinball or the Japanese pachinko game, the basicprinciple has much in common with these ones. The player receives the payouts with thecorresponding coefficients. The size of the win depends on the hole the ball falls into. The game isincredibly simple and does not require special skills. During the game Plinko, the trajectory of theball can''t be affected, there are no strategies for this game.'
    WHERE identifier = 'softswiss:Plinko'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Princess of Sky is a full HD 5-reel 9 payline slot based on thetraditional tale of princess and her fairy kingdom. With the fabpalace behind the reels and white pigeons in the sky, the slotcreates a true atmosphere of the medieval fairy tale. It ispacked with the glittering symbols of jewels, diamond rings,roses, gift boxes, golden crowns, and magic keys. It alsobrings a lot of magic to the scene: the blond Scatter princesstriggering bonus free spins and the Wild ruby heartsubstituting any symbol to complete the winning combination.'
    WHERE identifier = 'softswiss:PrincessOfSky'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Princess Royal is a slot with 5 reels and 9 paylines based on the theme of luxury lifestyle of royalty.Alongside with standard letters and numbers, it depicts four - leaved clover ring, gold withdiamantes horseshoe, ruby heart, luxury car, smart hotel, gold crown, and a gorgeous princess. Itoffers a variety of bonuses including 15 free spins triggered by 3, 4 or 5 Scatters and Wildsdoubling the winnings.'
    WHERE identifier = 'softswiss:PrincessRoyal'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Full of adventures, sometimes dangerous, but still alluring, Route 66 invites you to start your journey to riches! The main street of America, leading to full life Chicago, has always attracted travelers who are looking for vivid impressions and, of course, big money. Inspired by the legend, BGaming presents its brand newRoad2Riches slot!The HD graphics of the slot along with energetic music brings excitement and lead to great winnings! With a 5x4 scheme and 50 winning lines, Road2Riches surprises players with a set of features such as three kinds of Jackpots, suddenly appearing Mystery Wilds, and Free Spins that can be retriggered! Moreover, you can manage your luck with the Buy Bonus feature! If you are daring enough, join the breathtaking adventure with BGaming!'
    WHERE identifier = 'softswiss:Road2Riches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dice is one of the famous and ancient games. It appeared long time ago, the principle of the gamestayed almost unchanged. The tools of the game are the dices (bones). The dice has six playingfaces, which are numbered from 1 to 6. During the game the dices are rolled, then the points arecalculated, which determine the winner.The goal of the game Rocket dice - to guess if the number that will drop is bigger or smaller the onechosen by the player. Two dices are used in the game. The player makes a bet, chooses over or under and the desired number, after he makes a throw. If the player guessed well, he wins.'
    WHERE identifier = 'softswiss:RocketDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Scratch Dice is a mobile-first game of luck by Bgaming. A fusion of dice and instant lottery, thisgame has been designed to deliver a bit of elegant simplicity into the gambling process.The rules are simple enough to get you in the game immediately. There are lottery tickets withscratch zone and dice symbols under it. Clear the scratch zone to reveal the dice.A combination of 3 identical symbols (1-1-1 to 6-6-6) brings instant winnings, while a consequent setof symbols (1-2-3 to 4-5-6) is called Street and opens a Golden Ticket. This special one introduceshigher multipliers in case of a winning combination.The game is all about how it feels. The HD graphics, matching music and sounds, bright colors andvery natural scratching process all make gameplay really enjoyable.We recommend playing Scratch Dice on your mobile touchscreen device and clear the scratch zonewith your finger  just the way you would do with a real instant lottery. If tired of scratching, there is aReveal feature that clears the ticket for you. The funny thing is that it imitates your own scratchingstyle!Try it. It''s fun. We guarantee!'
    WHERE identifier = 'softswiss:ScratchDice'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Scroll of Adventure is a slot with 5 reels and 5 paylines based on the traditional Egyptian theme ofPharaohs treasure hunting. Alongside standard slot symbols which are all presented in anauthentic Egyptian font, the game also depicts mask of Tutankhamun''s mummy, ancient papyrusscroll, winged goddess Isis, dung beetles and treasure thief. It offers a variety of bonuses including10 free spins triggered by 3 or more Scatters.'
    WHERE identifier = 'softswiss:ScrollOfAdventure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Slotomon Go is a slot with fun take on your beloved pocket monsters with vivid animations andmemorable characters. You don''t have to walk for miles to catch your favourite Slotomon, here youjust spin the reels to discover each one''s unique personality and animation. Each little monstercarries its own multiplier and is ready to reward your playing experience with fun and wins.'
    WHERE identifier = 'softswiss:SlotomonGo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'BGaming inspired by the spookiest night of the year created a special video slot - Spin and Spell.The game has with 5x3 scheme and 20 paylines. This Halloween themed slot features all thosefamous symbols related to Halloween such as pumpkins, bats and black cats, witches and hauntedcastles, while there are lots of features to enjoy such as free spins, expanding wild, special bonusgames to award plenty of winning opportunities while you make the most of ghostly night. Thegraphics, music and effects will really make anyone feel like it is all hallows eve.'
    WHERE identifier = 'softswiss:SpinAndSpell'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'BGaming strives to bring sport-themed slots to the next level of entertainment! We launch the new slot in association with the World Boxing Council! Meet WBC Ring of Riches!'
    WHERE identifier = 'softswiss:WbcRingOfRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'West Town is a traditional western-themed slot. It gets the players to the most iconic times in theAmerican history. The game depicts different Wild West symbols, like sheriff''s badge, guns, boxeswith gold coins, glass of whiskey, Wanted-sticker, bandit, Joker and playing card symbols. Unlikein many slot games, the card symbols make a lot of sense here, as poker is a common theme inwesterns'
    WHERE identifier = 'softswiss:WestTown'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buy Feature, Free Spins\r\n\r\n'
    WHERE identifier = 'spadegaming:BookofMyth'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hidden Symbol, Free Spins\r\n'
    WHERE identifier = 'spadegaming:BrothersKingdom'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cluster Pays, Cascading, Leveling & Upgrading, Collectibles\r\n'
    WHERE identifier = 'spadegaming:CandyCandy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cluster Pays, Cascading, Leveling, Hold & Re-spin\r\n\r\n'
    WHERE identifier = 'spadegaming:CandyPop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cluster Pays, Expanding Reel, Special WILD, Collectibles \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:CrazyBomber'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Accumulative Multiplier\r\n'
    WHERE identifier = 'spadegaming:DancingFever'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fast Hit & Fire Shot, Free Spins, Bonus Round\r\n'
    WHERE identifier = 'spadegaming:DoubleFlame'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cluster Pays, Expanding Reel, Special WILD, Collectibles \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:FierySevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cascading, Free Spins, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:FirstLove'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Bonus WILD, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:GoldenChicken'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dual Reel, Random WILD, Bonus Round\r\n'
    WHERE identifier = 'spadegaming:GoldenFist'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cascading, Free Spins, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:GoldenMonkey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bonus Multiplier, SCATTER Overlay symbols, Buy Feature\r\n'
    WHERE identifier = 'spadegaming:GoldRushCowboys'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Random Collectibles, Free Spins\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:Heroes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Bonus WILD, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:HoYeahMonkey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Avalanche Win,  Cascading\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:HugonQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Bonus WILD, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:IcelandSA'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'MaxWays, Cascading, Infinite Free Spins\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:KungfuDragon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Shifting WILD\r\n'
    WHERE identifier = 'spadegaming:LoveIdol'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Hold & Spin Bonus\r\n\r\n'
    WHERE identifier = 'spadegaming:MagicalLamp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sticky WILD in Free Game\r\n\r\n'
    WHERE identifier = 'spadegaming:MagicKitty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Stacked WILD, Multiplier Reel\r\n\r\n\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:MayanGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cluster Pays, Expanding Reel, Special WILD, Collectibles \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:Mega7'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buy Feature, Free Spins\r\n\r\n'
    WHERE identifier = 'spadegaming:MoneyMouse'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hidden Symbol, Free Spins\r\n'
    WHERE identifier = 'spadegaming:MrChuTycoon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Moving To WILD, Free Spin Battle Feature, Cascading, Bonus Multiplier\r\n\r\n'
    WHERE identifier = 'spadegaming:MuayThaiFighter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cascading, Golden Symbol, Bonus Multiplier\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:PokerWays'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hidden Symbol, Free Spins\r\n'
    WHERE identifier = 'spadegaming:ProsperityGods'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Moving To WILD, Top Cart Reel, Cascading, Bonus Multiplier\r\n'
    WHERE identifier = 'spadegaming:RichCaishen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buy Feature, Free Spins, Expanding Symbol\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:RiseOfWerewolves'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Moving To WILD, Top Cart Reel, Cascading, Bonus Multiplier\r\n'
    WHERE identifier = 'spadegaming:RoyalKatt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Expand And Split\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:RubyHood'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Win Both Ways, Expanding Wild\r\n\r\n\r\n\r\n\r\n\r\n'
    WHERE identifier = 'spadegaming:SweetBakery'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Moving To WILD, Cascading, Bonus Multiplier in Free Game\r\n'
    WHERE identifier = 'spadegaming:WildWetWin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Sticky WILD\r\n'
    WHERE identifier = 'spadegaming:WowProsperity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Free Spins, Bonus WILD, Stacked WILD\r\n'
    WHERE identifier = 'spadegaming:ZEUS'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Juicy fruits, special symbols and vast opportunities for winnings are on offer with the new exciting slot game. There is a steady flow of awards with Wild, Scatter, Free Games that avail triggering even more Free Games and the Champagne symbol that leads to a thrilling bonus. Champagne is associated with holidays, celebrations and victory, its playful taste tunes for a pleasant pastime. When five symbols of the exquisite French drink appear on the screen during the game, it''s time to celebrate. Select two of the bottles and get ready for the reward – 10, 20 or150 x bet per line.'
    WHERE identifier = 'technology:ChampagneandFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Chinese themed slots are popular with their good luck symbols and beautiful graphics. The bold and colourful Fortune Pig with good luck symbols on every reel offers all needed for an exciting experience. The game icons of the paytable are all Chinese fortune symbols and, of course, the Fortune Pig himself that represents luck, overall good fortune, wealth. The Pig culturally is considered an auspicious creature at birth. The scatter symbol in the game is intertwined golden koi fishes which lead everyone who dares to follow them straight to wealth and abundance.The gameplay is relatively simple and clear. There are five reels and three rows with 25 paylines on them with Wild and Scatter to spice things up.'
    WHERE identifier = 'technology:FortunePig'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Тhе festive-thеmеd slоt is hеrе. With the favourite juicy symbols, the game is attractive and appeals to the players'' expectations for great fun in the holiday season. The beautiful symbols are complemented with attractive winnings of 1000 x line bet, Wild symbol and Scatter winnings.This 5-reel is a beautifully designed game paying across 20 lines. Spin the reels of the slot game while enjoying the beautiful graphics and the great mood it induces.'
    WHERE identifier = 'technology:FruitsandBells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Symbols of luck are on display over the five reels of the game. There are multiple ways to win across the reels, and the Gods of fortune will reward everyone who keeps playing. The game has a traditional Chinese culture theme, five fixed paylines, and the volatility rate is medium.Players get the chance to search for amazing treasures. Along the way, they may well come across expanding wild, two scatters, and many winning opportunities.Lord of Fortune is a visually powerful slot with traditional Chinese good luck and protective symbols that guard against evil spirits. The nicely drawn characters featured in the slot provide a real visual treat for players to enjoy. The gamble feature adds much to the delight of online slots players that like to up the stakes. '
    WHERE identifier = 'technology:LordofFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Inspired by traditional Irish folklore on the occasion of the approaching St. Patrick''s Day, CT Interactive brings to your attention a fantastic Irish fairy tale themed slot game, Lord of Luck The Wheel.'
    WHERE identifier = 'technology:LordofLuckTheWheel'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cosmic Voyager is a video slot with 5 reels and 10 pay lines. The game featuresWild Scatters, an Expanding symbols feature and a Bonus game with free spinsand retriggers. The theoretical return to player is 96.14%'
    WHERE identifier = 'thunderkick:CosmicVoyager_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Summon your players up to the Dragon-Islands to behold the ritual of the Divine Lotus and explore a BONUS GAME that awards you with retriggable free spins! Experience the Mystery Lotus symbols turn into Little Dragons and watch the Symbol Meter count all the transformations towards the Elder Dragon and your BIG WIN!'
    WHERE identifier = 'thunderkick:DivineLotus_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Embark on a mysterious journey along with knights, elves and orcs in our upcoming slot - Dragon Horn. With  243 ways to win (pay ways) and a highly volatile bonus game consisting of 5 different levels for those who dare.Get ready to meet the Dragon!'
    WHERE identifier = 'thunderkick:DragonHorn_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'AY AY AY! Gear up for the day of dead celebrations and lose yourself to the mariachi rhythms!'
    WHERE identifier = 'thunderkick:EsqueletoExplosivo2_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fortune Cats Golden Stacks is a video slot with 5 reels and 40 pay lines in the Base  game and up to 120 pay lines in the Bonus game. The game features a Mystery  symbol, Golden stacks and a Bonus game with free spins and additional game  areas. The theoretical return to player is 96,14%'
    WHERE identifier = 'thunderkick:FortuneCatsGoldenStacks'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fortune Cats Golden Stacks is a video slot with 5 reels and 40 pay lines in the Base  game and up to 120 pay lines in the Bonus game. The game features a Mystery  symbol, Golden stacks and a Bonus game with free spins and additional game  areas. The theoretical return to player is 92,14%'
    WHERE identifier = 'thunderkick:FortuneCatsGoldenStacks92'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fortune Cats Golden Stacks is a video slot with 5 reels and 40 pay lines in the Base  game and up to 120 pay lines in the Bonus game. The game features a Mystery  symbol, Golden stacks and a Bonus game with free spins and additional game  areas. The theoretical return to player is 94,14%'
    WHERE identifier = 'thunderkick:FortuneCatsGoldenStacks94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this high voltage rock game, the gods have descended to shake the earth with their thunder riffs. So, throw your hands in the air, put your tongues out and get ready to rock out like never before!'
    WHERE identifier = 'thunderkick:GodsofRock_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jin Chan''s Pond of Riches is a 3x5 video slot with 15 fixed pay lines, multiplier Wilds and a Bonus game with a Sticky win feature.'
    WHERE identifier = 'thunderkick:JinChansPondofRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'BEAT THE EIGHT-ARMED KRAKEN TO RESURRECT GREAT TREASURES LOST TO THE DEPTHS.'
    WHERE identifier = 'thunderkick:KrakensLair_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a scorching hot adventure in this 3x5 video slot erupting with win potential. With features like Multiplier Wilds, an Avalanche and Scatter explosions, enter the realm of the volcano goddess and play for your fortune.'
    WHERE identifier = 'thunderkick:LavaLava_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this 4x6 video slot set against a backdrop of Norse mythology, you find yourself at the roots of Yggdrasil, closing in on the entrance to the shrine of Mimir''s Well. With Wild multipliers and a Bonus game with Sticky Wins and Roaming Wild Stack, Odin''s gamble is crammed with win potential!'
    WHERE identifier = 'thunderkick:OdinsGamble92_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this 4x6 video slot set against a backdrop of Norse mythology, you find yourself at the roots of Yggdrasil, closing in on the entrance to the shrine of Mimir''s Well. With Wild multipliers and a Bonus game with Sticky Wins and Roaming Wild Stack, Odin''s gamble is crammed with win potential!'
    WHERE identifier = 'thunderkick:OdinsGamble94_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this 4x6 video slot set against a backdrop of Norse mythology, you find yourself at the roots of Yggdrasil, closing in on the entrance to the shrine of Mimir''s Well. With Wild multipliers and a Bonus game with Sticky Wins and Roaming Wild Stack, Odin''s gamble is crammed with win potential!'
    WHERE identifier = 'thunderkick:OdinsGamble_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Uncover the secret bound between the mysterious Druid and her hallowed Raven. With 30 Pay Lines and a Mystery Feature only your imagination sets the limit in the enchanted Bonus Game.The power lays within the Ravens Eye!'
    WHERE identifier = 'thunderkick:RavensEye_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a wild expedition among gigantic eels and thunder! The Riders of the Storm promise wealth among the dark clouds, to those who play with 243 ways to win, a Mystery Feature, Walking Wilds and a Wild Multiplier!'
    WHERE identifier = 'thunderkick:RidersoftheStorm_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Climb the treacherous Mongolian mountains in search of adventure and absolute command in Sword of Khans! Proof yourself worthy to unleash the powers of the sword in a thrilling Bonus Game that escalate with expanding wins and increasing multipliers!'
    WHERE identifier = 'thunderkick:SwordofKhans_tk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The fruits of old have grown tired and have put on shiny new crystal skins. Not only have they changed their look, but a 243 WILD symbol has also been a revolution, changing the game''s 5 paylines into 243 when it appears on the 2nd, 3rd or 4th reel! Keeping in line with this new look, any winning paylines will also shatter and give way to new crystal fruits to form new winning combinations!'
    WHERE identifier = 'tomhornnative:243_Crystal_Fruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The fruits of old have grown tired and have put on shiny new crystal skins. Not only have they changed their look, but a 243 WILD symbol has also been a revolution, changing the game''s 5 paylines into 243 when it appears on the 2nd, 3rd or 4th reel! Keeping in line with this new look, any winning paylines will also shatter and give way to new crystal fruits to form new winning combinations!'
    WHERE identifier = 'tomhornnative:243_Crystal_Fruits_Reversed'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Whether it''s big, small, green or brown. Coins or bills. Shinning or rustling. Money is the anthem of success. Grab your pennies, ponies, monkeys and spin the reels to ring the the sound of big wins in this money-making game. The more you bet, the more you earn as your winnings increase with each respin up to 5x multiplier.Can you hear it ring? Ka-ching!'
    WHERE identifier = 'tomhornnative:Beastie_Bux'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Meet the frightening pirate Blackbeard on his new quest to a treasure island! When Blackbeard goes Wild, extra winning combinations are formed on the 9 win lines. 3 Treasure Chests, appearing on the 1st, 3rd, and 5th reel, trigger re-triggerable Free Spins. During Free Spins, these Chests become Wild and substitute for all symbols except Blackbeard.'
    WHERE identifier = 'tomhornnative:Blackbeards_Quest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the land of witchcraft, potions, and magic, the Book of Spells will turn its own pages to help players win. Book of Spells is a Wild Symbol and substitutes for all other symbols spinning around 5 reels to increase the number of winning combinations formed on the 9 win lines of the game. When 3 or more Books of Spells are scattered on the reels, they trigger 10 re-triggerable Free Spins with a special expanding symbol for bigger wins.'
    WHERE identifier = 'tomhornnative:Book_Of_Spells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The adrenaline goes through the roof as teams gather to compete in the greatest of cricket tournaments. With no small degree of luck, skill and discipline, the best comes on a great run and hope is lifted to even greater heights with each spin as the bat hits the winning ball.  Underdogs or favourites? Who will stand up in those pressure moments when the big wins are up for grabs?'
    WHERE identifier = 'tomhornnative:Cricket_Mania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Diamond Hill takes you on winning paths across the enchanted kingdom and its ancient woodlands, packed full with magical ingredients that spark winning streak and guide players up the steep slopes of big wins to the summit where the eye-watering wealth resides.'
    WHERE identifier = 'tomhornnative:Diamond_Hill'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don Juan''s ranch produces the most wanted pepper pods in Southern Mexico. The Sun will shine as a Wild symbol to help you get the hottest combinations. 3 or more Red Chili Peppers trigger up to 25 Free Spins, and every time one lands during the feature, it awards you an extra Free Spin and transforms into a Sticky Scatter Wild symbol for the remainder of Free Spins, making your win even spicier.'
    WHERE identifier = 'tomhornnative:Don_Juans_Peppers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The eggs laid by these dragons are the key to winning in this game. Its 9 win lines are the perfect environment for the Wild Winged Dragon to unfold its wings and double your wins when substituting for other symbols. The Scatter Eggs trigger a Bonus Feature. Here, when the player reveals three eggs of one dragon, 10 to 30 Free Spins with 3x to 5x multiplier are triggered.'
    WHERE identifier = 'tomhornnative:Dragon_Egg'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dragon Riches is a jackpot game that does not require players to contribute to the jackpot. Players can win a higher jackpot amount based on the level of Gold symbols they play and the amounts do not accumulate and climb up until the player wins as is the case of its bigger twin sisters'' Dragon Riches Progressive. The game features an abundance of high paying symbols, four jackpot levels, 243 paylines and even the classic gamble feature to help double players'' money.'
    WHERE identifier = 'tomhornnative:Dragon_Riches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With its rich features and lavishly rendered 3D wheel this Announced bets European Roulette variant promises a unique thrill of the live game experience players can enjoy whenever they feel like hitting the casino floor.'
    WHERE identifier = 'tomhornnative:EuropeanRoulette_AnnouncedBets'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The game combines the Feng Shui philosophy symbols with the power of Fu, fortune in Chinese, to keep luck on your side. The symbols land over five reels where 9 win lines cross the stunning Great Wall background. 3+ Chi symbols anywhere on the reels grant you 10 re-triggerable Free Spins, featuring a Special Expanding Wild Dragon, which lands on all three rows at once and doubles your winline win.'
    WHERE identifier = 'tomhornnative:Feng_Fu'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don''t get burnt by big wins that the lucky 7 WILD will provide! Watch out also for the Shining Star Scatters. If you are lucky to get three of them, they will whisk you away into the bonus game. Turn one of the stars and the rest of them will change into the same uncovered symbol.'
    WHERE identifier = 'tomhornnative:Fire_n_Hot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fancy a vintage fruit machine experience? Then this 3-reel slot is exactly what you''re looking for. Try to gather the right combination of juicy fruit, and you will be awarded with big wins.'
    WHERE identifier = 'tomhornnative:Flaming_Fruit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In a kingdom trapped in perpetual winter, magic hides at every turn, with myriads of fantastic creatures bringing icy wins as players push their way towards its hidden treasures. Look for two magic crystals as they open the realm of magnificent fortune. Unlock the frozen reels and meet the mighty Queen. During her reign 4 reels expand to 5 and 81 paths to frosty wins change to 243 as players are snowed with abundance of chilling riches.'
    WHERE identifier = 'tomhornnative:Frozen_Queen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The crazy fruits have descended on the reels to kick-start the party of a lifetime. Popping up cheerfully across 5 winlines, which in free spins change to 27, the fruits join forces with symbols 77WILD and Stars to bring even more fun and excitement in this delightfully colourful game.'
    WHERE identifier = 'tomhornnative:Fruits_Go_Pop'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the far corners of space the Fruit city of Frutopia emerges from the depths, unleashing the mystic powers of its five strata. Only those with perfect qualities and impeccable skills can enter and draw the power of the mighty Frutopia energy cores to stand tall and claim the crystalline riches of the highest stratum of Frutopia.'
    WHERE identifier = 'tomhornnative:Frutopia1'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ethereal light is falling through sakura flowers on subtle Geisha''s face, half-hidden under her Umbrella. She is languidly waving her Fan, a Wild Symbol that teases you with bigger wins. When you see 3 or more Hand Fans scattered on the reels, get ready to win big as they trigger 10 re-triggerable Free Spins with special expanding symbol for more winning combinations.'
    WHERE identifier = 'tomhornnative:Geishas_Fan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Snatch those gold bars up!Time to succumb to the golden lure hiding in the vaults. It''s true that gold bars and coins are in short supply, but the lucky ones are sure to stumble upon them. Wild X and Bonus icons are the symbols to watch out  for to step up your game and take home whopping wins in Free Spins and Gold Vault Bonus Game. Time to snatch at the chance to scoop up some life-changing picks.'
    WHERE identifier = 'tomhornnative:Gold_X'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The ice cold symbol substitutes for all symbols except the Lucky Star Scatter. That won''t be an issue, since all wins during Free Spins will be multiplied by 3! You can win from 10 to 30 Free Spins.'
    WHERE identifier = 'tomhornnative:Hot_Blizzard'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch the winning blaze explode!A huge fruity fire blazes in this 5-reel slot with an exotic flavours combo waiting to be squeezed to get truly mouth-watering wins. Every new winning combination exploding in the blaze makes it harder to put out a fire so brace up for a really fiery adventure.'
    WHERE identifier = 'tomhornnative:Hot_n_Fruity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'High in the Andes Mountains, the mighty Inca warriors reside in the mysterious Empire of the Sun, safeguarding precious treasures and worshipping their bloodthirsty deities. Their ruthless gods are hard to please. However, those who believe in success and are bold enough to embark on a dangerous journey to conquer the riches of the Lost City, will be rewarded in the end. Inti, the Sun God is the one to watch out for as he guards the door to the Inca''s Treasure Bonus Game where plenty of Free Spins and multipliers to boost the winnings are up for grabs.'
    WHERE identifier = 'tomhornnative:Incas_Treasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for rocking the reels with a wild Joker that brings wins galore in this enjoyable twist on a classic video slot theme. Towering neon lights swamped in swirling colourful mist of iconic disco visuals set the stage for the Joker to play his game.The lucky players are sure to scoop up whopping wins with exciting features like the Towering reel and Joker Free Spins Game. Curtain is up! Time to try your luck.'
    WHERE identifier = 'tomhornnative:Joker_Reelz'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the deep of the Banana Jungle, Kongo Bongo the Monkey is the boss, safeguarding the riches hiding in the mist. The craic and enjoyable wins are guaranteed when the reels start spinning and the anticipation of big wins begins to fizz through players'' veins. Those who take their betting seriously, should make sure they take Kongo Bongo''s advice on where to place their bets to heart, as he is the one who knows the secret combinations of symbols that definitely hit the spot.'
    WHERE identifier = 'tomhornnative:Kongo_Bongo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the forces with two rascals, Sergio and Fernando and discover the unique Spanish party spirit and a host of exciting features that will help you amass not only piles of squashed tomatoes but also juicy wins.'
    WHERE identifier = 'tomhornnative:La_Tomatina'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gold diggers, have your mining gear at the ready! A maze of mine tunnels opens up, offering riches galore to those who are courageous enough to face and withstand the perils of the arduous journey across 9×8 reels in a race to collect all the gold and gems of the mine.'
    WHERE identifier = 'tomhornnative:Mine_Mine_Quest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spin the fruit on this 3-reel slot to squeeze out big wins. Look out for the Monkey symbol, which is a Wild card and substitutes for any other symbol, but the Scatter. Crazy Monkeys bring crazy wins.'
    WHERE identifier = 'tomhornnative:Monkey_27'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join this futuristic madness and meet some adorable Monsters, Drones and Holograms! 3 Scatter Eye Drones trigger 5 Free Spins. For each extra Scatter, landing during the feature, you get an extra Free Spin. During Free Spins the Eye Drone transforms into 3 Targets that double or triple your wins or give you an extra Free Spin, and their multipliers can be combined!'
    WHERE identifier = 'tomhornnative:Monster_Madness'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the bamboo forest''s green mist thoughtful Pandas with their cubs are peacefully chewing the bamboo leaves. Wild Golden Turtle acts as a joker and substitutes for all symbols except the Scatter. Silent Pagodas rise above the trees, tempting with Big Wins. When grouped in 3, they trigger 5 re-triggerable Free Spins with total bet multiplied by 2.'
    WHERE identifier = 'tomhornnative:Pandas_Run'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the far corners of Antarctica a happy penguin family resides. The PengWins love toexplore and have fun. Accompanied by a cheeky octopus and a lazy shrimp, they embarkon a journey across the floe dotted sea to fish out some crisp and cool riches. Jumping onand off the floes the kids go wild and get lost only to be saved in a wild family reunionthat rocks the reels and showers players with splashes of big wins.'
    WHERE identifier = 'tomhornnative:PengWins1'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Let your fantasies unwind and submerge into the exciting neon world of the Red Light District, full of sexy ladies and big wins. As the girls strip off and the heat is on, players go crazy exploring mesmerizing features of this seductive game вЂ" girls change into Sticky Expanding Wild symbols, awarding players with 5 re-triggerable Free Spins. The thrill of winning even bigger intensifies in the Strip Gamble feature. Peel off items of lingerie from either the sexy Blonde or Brunette, and by each piece you get closer to the Naked Girl Joker that saves you your gamble winnings. Don''t hold back, give yourself up to the fever of the night and brace up for this spicy adventure!'
    WHERE identifier = 'tomhornnative:Red_Lights'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The African Savannah lends its beautiful landscapes and imagery to this video slot game for you to experience the wilderness in all its glory. Be amazed by the superb graphics and the high paying combinations, that will form over its five reels and 15 win lines.'
    WHERE identifier = 'tomhornnative:Savannah_King'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Every morning in the Shaolin Monastery, fearless Kung Fu Fighters start their training. If 3 Fighters appear on the 1st, 3rd and 5th reel, you can start counting your wins as they trigger re-triggerable Free Spins. Don''t forget, that Fighters go Extra Wild during Free Spins and substitute for all symbols except the Golden Tiger.'
    WHERE identifier = 'tomhornnative:Shaolins_Tiger'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sherlock Holmes and his loyal partner Dr Watson reunite to engage in a battle against all the odds as they try to get hold of a compromising photograph that once belonged to the King of Bohemia. Helping Holmes chase Irene Adler, players are showered with high paying symbols and awarded with two Bonus Games where they pick a win round to maximise the potential to multiply their bets. Chances for Free Spins intensify with every spin as players progress through this all-new take on Sir Arthur Conan Doyle''s classic detective story.'
    WHERE identifier = 'tomhornnative:Sherlock_A_Scandal_in_Bohemia'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'High paying symbols are scattered across this reel full of classic fruit symbols that will brighten up your day. And we have''t started talking money yet ! A high-paying 7 symbol and a Scatter Star, that can pay up to 400 times your bet, are just two amazing symbols paving your way to big wins.'
    WHERE identifier = 'tomhornnative:Sizable_Win'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the Red Baron and the Jasta 11 on this fantastic mission! The Wild Nurse symbol can disguise itself as any other symbol, except the Scatter Pilot and the Medal, and appears only after the Pilot has triggered Free Spins. Victories in combat are rewarded with the Medal this symbol increases the Free Spins multiplier by ONE and goes as high as 13x.'
    WHERE identifier = 'tomhornnative:Sky_Barons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'From the far reaches of the galaxy, the unlikely heroes emerge to battle relentless intergalactic criminals who stole a precious chest in an epic heist. To ensure the universe''s fragile peace doesn''t break apart and to find the stolen object, a motley group of space pirates, humanoids and cyborgs must join forces to shatter the evil opponent and to hunt down big wins with increasing multipliers.'
    WHERE identifier = 'tomhornnative:Space_Jammers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This fresh take on a classic arcade game is packed full of exciting features that guarantee myriads of ways to win big. Bouncers make sure players hit it big with every spin and no one leaves empty-handed. Left Ramp Booster is the best spot to secure large payouts. When the ball flies high in the Free Spins Path, players are awarded with a smashingly big number of Free Spins. Spinball takes pinball visuals, combines them with sharp sound effects and crisp, clear graphics and video slot rhythm to provide an ultimate, well-rounded escapade all punters will love.'
    WHERE identifier = 'tomhornnative:Spinball1'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A delicious, decadent, mouth-watering adventure that not only satisfies your sweet tooth but awards also lusciously huge wins, opens its door to all sweets lovers and lucky players. Once you start playing, Sweet Crush will definitely have you craving for more wins and sweets. The magical world of crunchy hazelnuts, smooth chocolate, marshmallow trifles, brownies, jelly beans, cup cakes, candies hides a delightful stash of big wins so prepare for a hilarious quest to claim the candied trophies.'
    WHERE identifier = 'tomhornnative:Sweet_Crush'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience all the excitement of a live soccer match and win The Cup full of prizes this game has for you. 11 win lines cross the five-reel field and the Football is the Wild to help you score many more times. If the Emblem, the special Bonus symbol, lands on the reels during Free Spins, it will increase a Free Spins multiplier by one, up to 12x.'
    WHERE identifier = 'tomhornnative:The_Cup'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Follow the Ba between the worlds of the dead and the living to find your fortune!The netherworld opens its dark gates, inviting the brave ones to step in and follow the Ba between the worlds of the dead and the living.  Those who are lucky and find the Secret of Ba will be guided through the darkness of the infernal realm, where the immortal riches are guarded by the souls of the dead.'
    WHERE identifier = 'tomhornnative:The_Secret_of_BA'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this game, the ancient Babylonian civilisation will tease you with an abundance of amazing rewards. The game features Cyrus the Great as a Wild symbol, that substitutes for any other symbol in the game, except the Scatter, which pays Scatter Wins, multiplying your Total Bet. It also awards 5 Free Spins and triggers a Ziggurat of Babylon Bonus Game where you can win extra Free Spins with higher multipliers.'
    WHERE identifier = 'tomhornnative:Thrones_of_Persia'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Triple Joker teams up with juicy fruit and 7s to bring you amazing wins. It is no longer only a substitute and plays its own game with plenty of surprises to give away. Find the right combination and your wins are secured!'
    WHERE identifier = 'tomhornnative:Triple_Joker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Calling all adventure lovers. Get your motor running and enjoy the ride through theaction-packed neon world of the city that never sleeps. The nail-biting excitement startswith Free Spins and Hold&Win Respin which guard the doors to the ultimate action - TheWheel of Luck. Only the boldest can unlock its three levels to reach the reward of 1000xtheir bet. Are you the chosen one?'
    WHERE identifier = 'tomhornnative:Wheel_of_Luck_Hold_Win'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild temperature swings, rattling thunder, pouring rain and scorching skies reside in this 5-reel, dramatically changing video slot. Two special Wilds the Tornado becoming a Vertically Expanding Wild in the base game and the Sun being an Expanding Mega Wild in Free Spins, bring you smashing wins. Don''t forget to bring a proper gear to experience extreme weather with staggering wins.'
    WHERE identifier = 'tomhornnative:Wild_Weather'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tame the Wild Sierra Wolf to walk out with big richesRavaged by the elements and wild mythical spirits,  the Wild Sierra is no place for weaklings. To gain the protective charms of dreamcatchers and take away big wins, players must first tame the mighty and stubborn wolves that guard the paths to riches. The great Wolf  leads the pack that at times turns into Wild clusters and  helps players sweep the board. Dreamcatchers open the gate to Free Spins where the ultimate battle against the spirits of nature will decide whether players are worth a hidden fortune.'
    WHERE identifier = 'tomhornnative:Wolf_Sierra'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sitting at the top of a mystic mountain is the temple devoted to 9 Lions – ancient gods that bring luck to their true followers. Together with other deities of fortune and their special bonuses, these beasts create an extraordinary experience that has garnered exceptional popularity amongst the crowds!'
    WHERE identifier = 'wazdan:9Lions'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sitting at the top of a mystic mountain is the temple devoted to 9 Lions – ancient gods that bring luck to their true followers. Together with other deities of fortune and their special bonuses, these beasts create an extraordinary experience that has garnered exceptional popularity amongst the crowds!'
    WHERE identifier = 'wazdan:9Lions94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '9 Lions Xmas Edition\r\nThis award-winning slot has been one of our top-performing titles since its launch. Featuring entertaining Lions and Dragons bonuses, and prizes up to 1,000x player''s bet, 9 Lions Xmas Edition might just be the game your players are looking for this Christmas!'
    WHERE identifier = 'wazdan:9LionsXmasEdition'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'From the very beginning, the Yin and Yang forces embrace the players who enter the oriental world of 9 Tigers™. This slot triggers an irresistible desire to maintain internal balance. Two elements – fire and water – represented by two tiger symbols awaken the player''s divine power that is necessary to control them and bring natural harmony.'
    WHERE identifier = 'wazdan:9Tigers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'From the very beginning, the Yin and Yang forces embrace the players who enter the oriental world of 9 Tigers™. This slot triggers an irresistible desire to maintain internal balance. Two elements – fire and water – represented by two tiger symbols awaken the player''s divine power that is necessary to control them and bring natural harmony.'
    WHERE identifier = 'wazdan:9Tigers94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This time the popular card game comes straight from the land of freedom and opportunities – opportunities to win big!\r\n\r\nIn terms of design, this game is American to the core. The magnificent bald eagle appears above the paytable with stars hovering around it. In the background, you can see the American presidents'' faces carved into the Mount Rushmore as well as the American flag blowing in the wind.'
    WHERE identifier = 'wazdan:AmericanPokerGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This time the popular card game comes straight from the land of freedom and opportunities – opportunities to win big!In terms of design, this game is American to the core. The magnificent bald eagle appears above the paytable with stars hovering around it. In the background, you can see the American presidents'' faces carved into the Mount Rushmore as well as the American flag blowing in the wind.'
    WHERE identifier = 'wazdan:AmericanPokerGold94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for some old-school fun with the classic poker game American Poker V – a nice surprise that will makes your winning easier awaits!\r\n\r\nThere''s nothing like some old-school vibes! Add to this a classic American car with a beautiful girl behind the wheel and you''ll get the appeal of American Poker V. '
    WHERE identifier = 'wazdan:AmericanPokerV'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for some old-school fun with the classic poker game American Poker V – a nice surprise that will makes your winning easier awaits!There''s nothing like some old-school vibes! Add to this a classic American car with a beautiful girl behind the wheel and you''ll get the appeal of American Poker V. '
    WHERE identifier = 'wazdan:AmericanPokerV94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who doesn''t love fruity slots? It seems basically impossible not to as you watch tasty fruits spinning on the reels – especially if they provide you with great prizes!\r\n\r\nArcade is a classic 3-reel online game with a retro vibe – a perfect choice for traditional slot enthusiasts. The whole old-school feeling is enhanced by the fact that Arcade features one active payline in the middle line.'
    WHERE identifier = 'wazdan:Arcade'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who doesn''t love fruity slots? It seems basically impossible not to as you watch tasty fruits spinning on the reels – especially if they provide you with great prizes!Arcade is a classic 3-reel online game with a retro vibe – a perfect choice for traditional slot enthusiasts. The whole old-school feeling is enhanced by the fact that Arcade features one active payline in the middle line.'
    WHERE identifier = 'wazdan:Arcade94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''re jetting you back in time when everything looked amazing, with flairs and 5” heels, and it was groovy to be cool!\r\n\r\nGet your groove on and play Back to the 70''s – a funky 5-reel 20-payline online slot that offers colourful, cartoonish graphics that perfectly reflect the atmosphere of nightlife in the 70''s. You''ll find a disco dance floor and bright disco lights behind the reels which contribute to a fantastic feel of the game.'
    WHERE identifier = 'wazdan:Backto70s'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We''re jetting you back in time when everything looked amazing, with flairs and 5” heels, and it was groovy to be cool!Get your groove on and play Back to the 70''s – a funky 5-reel 20-payline online slot that offers colourful, cartoonish graphics that perfectly reflect the atmosphere of nightlife in the 70''s. You''ll find a disco dance floor and bright disco lights behind the reels which contribute to a fantastic feel of the game.'
    WHERE identifier = 'wazdan:Backto70s94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gearwheels, steam, electricity and lots of power – you''ll find all of that and more in BARs&7s!\r\n\r\nBARs&7s is all about a great design coupled with minimalistic and engaging gameplay. This 3-reel online slot is equipped with 8 paylines that go horizontally, vertically and diagonally which means that there are loads of ways to form winning combinations. The action of the game takes place in a dark room filled with moving mechanisms that power this stunning, state-of-the-art online slot. As its name suggests, the only symbols featured in the game are BARs and sevens, so playing this slot is pretty straightforward. That''s a real treat for those of you who enjoy classic old-school slots. However, the game''s enthralling graphics guarantee a great time for everyone playing BARs&7s.'
    WHERE identifier = 'wazdan:BARs&7s'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gearwheels, steam, electricity and lots of power – you''ll find all of that and more in BARs&7s!BARs&7s is all about a great design coupled with minimalistic and engaging gameplay. This 3-reel online slot is equipped with 8 paylines that go horizontally, vertically and diagonally which means that there are loads of ways to form winning combinations. The action of the game takes place in a dark room filled with moving mechanisms that power this stunning, state-of-the-art online slot. As its name suggests, the only symbols featured in the game are BARs and sevens, so playing this slot is pretty straightforward. That''s a real treat for those of you who enjoy classic old-school slots. However, the game''s enthralling graphics guarantee a great time for everyone playing BARs&7s.'
    WHERE identifier = 'wazdan:BARs&7s94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the never-ending summer as this slot warms you up with hot bonuses and big wins!\r\n\r\nLay comfortably on a beach, take a sip of your drink and enjoy the hot sun with our fantastic Beach Party. This 5-reel online slot will have you missing summertime but even if you can''t go on tropical holidays just yet, don''t worry! '
    WHERE identifier = 'wazdan:BeachParty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the never-ending summer as this slot warms you up with hot bonuses and big wins!Lay comfortably on a beach, take a sip of your drink and enjoy the hot sun with our fantastic Beach Party. This 5-reel online slot will have you missing summertime but even if you can''t go on tropical holidays just yet, don''t worry! '
    WHERE identifier = 'wazdan:BeachParty94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There are places on Earth where the weather makes you feel as if summer was endless. You can also find such a place in Beach Party Hot, where shining sun, beautiful skies, and crystal clear sea will let you relax on a beach and enjoy various summer activities.\r\n\r\nThe 5-reel online slot with 20 paylines Beach Party Hot is all about fun and will give you the feeling of being on a beach during a beautiful sunny day.'
    WHERE identifier = 'wazdan:BeachPartyHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There are places on Earth where the weather makes you feel as if summer was endless. You can also find such a place in Beach Party Hot, where shining sun, beautiful skies, and crystal clear sea will let you relax on a beach and enjoy various summer activities.The 5-reel online slot with 20 paylines Beach Party Hot is all about fun and will give you the feeling of being on a beach during a beautiful sunny day.'
    WHERE identifier = 'wazdan:BeachPartyHot94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Close your eyes and imagine a beautiful sandy beach on a tropical island. The waves are gently sweeping the shore and there''s absolutely nobody around to break the silence. How relaxing is that? If you''re looking for an online slot that''ll help you chill, Beauty Fruity™ is the answer!'
    WHERE identifier = 'wazdan:BeautyFruity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Close your eyes and imagine a beautiful sandy beach on a tropical island. The waves are gently sweeping the shore and there''s absolutely nobody around to break the silence. How relaxing is that? If you''re looking for an online slot that''ll help you chill, Beauty Fruity™ is the answer!'
    WHERE identifier = 'wazdan:BeautyFruity94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you believe in magic? Bell Wizard will leave you speechless once you experience its otherworldly special features!\r\n\r\nBewitching 5-reel online slot Bell Wizard is equipped with 20 paylines to give you many magical opportunities to draw a winning combination. The game''s theme gives this retro slot a marvelous twist. Old-school enthusiasts will surely appreciate a set of classic symbols such as mouth-watering juicy fruits or BARs as well as simple gameplay. Enchanting graphics additionally enhance the whole experience. Animation complements the slot''s magical theme as it''s attractive and fun. In fact, it''s so eye-pleasing that it really is difficult to look away – you might feel like you''re under the slot''s spell!'
    WHERE identifier = 'wazdan:BellWizard'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you believe in magic? Bell Wizard will leave you speechless once you experience its otherworldly special features!Bewitching 5-reel online slot Bell Wizard is equipped with 20 paylines to give you many magical opportunities to draw a winning combination. The game''s theme gives this retro slot a marvelous twist. Old-school enthusiasts will surely appreciate a set of classic symbols such as mouth-watering juicy fruits or BARs as well as simple gameplay. Enchanting graphics additionally enhance the whole experience. Animation complements the slot''s magical theme as it''s attractive and fun. In fact, it''s so eye-pleasing that it really is difficult to look away – you might feel like you''re under the slot''s spell!'
    WHERE identifier = 'wazdan:BellWizard94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don''t let your fear prevent you from entering this ominous castle – the brave will be rewarded with real treasures!\r\n\r\nThis 4-reel online slot is an ideal choice for magic and fantasy enthusiasts! The game offers its players multiple chances to win as it is equipped with as much as 54 paylines. Black Hawk''s dark and gloomy mood is enhanced by gorgeous animation that makes your experience with this slot extraordinary. Dark colours and realistic symbols add to the sinister atmosphere. '
    WHERE identifier = 'wazdan:BlackHawk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don''t let your fear prevent you from entering this ominous castle – the brave will be rewarded with real treasures!This 4-reel online slot is an ideal choice for magic and fantasy enthusiasts! The game offers its players multiple chances to win as it is equipped with as much as 54 paylines. Black Hawk''s dark and gloomy mood is enhanced by gorgeous animation that makes your experience with this slot extraordinary. Dark colours and realistic symbols add to the sinister atmosphere. '
    WHERE identifier = 'wazdan:BlackHawk94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The castle is being invaded by a legion of the undead. Can you save the innocent?\r\n\r\nBlack Hawk Deluxe is a gloomy 4-reel, 54-payline online slot which is based on the player-favourite Black Hawk. With its updated and upgraded graphics, animations and sound effects, Black Hawk Deluxe delivers even more fun and enjoyment to players. The slot takes you to a dark and mystic realm where an army of undead skeletons is on its way to penetrate the castle''s defenses. '
    WHERE identifier = 'wazdan:BlackHawkDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The castle is being invaded by a legion of the undead. Can you save the innocent?\r\n\r\nBlack Hawk Deluxe is a gloomy 4-reel, 54-payline online slot which is based on the player-favourite Black Hawk. With its updated and upgraded graphics, animations and sound effects, Black Hawk Deluxe delivers even more fun and enjoyment to players. The slot takes you to a dark and mystic realm where an army of undead skeletons is on its way to penetrate the castle''s defenses. '
    WHERE identifier = 'wazdan:BlackHawkDeluxertp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch the magnificent black stallion gallop across the desert to bring you fantastic bonuses and wins!A setting sun, hot desert and the sound of horse''s neigh… With Black Horse™ you''ll feel like you really were riding off into the sunset! This classic 3-reel online game equipped with 5 winning lines offers genuine retro vibes thanks to its old-school symbols.'
    WHERE identifier = 'wazdan:BlackHorse'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch the magnificent black stallion gallop across the desert to bring you fantastic bonuses and wins!A setting sun, hot desert and the sound of horse''s neigh… With Black Horse™ you''ll feel like you really were riding off into the sunset! This classic 3-reel online game equipped with 5 winning lines offers genuine retro vibes thanks to its old-school symbols.'
    WHERE identifier = 'wazdan:BlackHorse94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Black Horse™ Deluxe unleashes the secrets and true beauty of the Wild West. This compelling online slot is filled to the brim with stunning landscapes of a desert located in the heart of the Old West. Black Horse™ Deluxe features a magnificent black stallion, a cowboy and a cowgirl who support the players and invite them to have fun together. This engaging game will surely captivate even the most demanding players.'
    WHERE identifier = 'wazdan:BlackHorseDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Black Horse™ Deluxe unleashes the secrets and true beauty of the Wild West. This compelling online slot is filled to the brim with stunning landscapes of a desert located in the heart of the Old West. Black Horse™ Deluxe features a magnificent black stallion, a cowboy and a cowgirl who support the players and invite them to have fun together. This engaging game will surely captivate even the most demanding players.'
    WHERE identifier = 'wazdan:BlackHorseDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A game of classic blackjack with real-life casino atmosphere guarantee a great time – place your bet and see who gets 21!\r\n\r\nThe classic Black Jack will surely appeal to fans of table games. Following traditional blackjack rules, this game is suitable for beginners and experienced players as well. Minimalism definitely proves to be an advantage here as simple rules of this well-known game and attractive wins are all you really need to have a good time with Black Jack. Compelling graphics additionally enhance the gameplay experience. Vibrant colours and swift animation make the game eye-pleasing and enjoyable. And since the game is set on a classic green table, you''ll feel as if you were playing in a real-life casino – while you''re in the comfort of your own home. Chips are placed comfortably right above the play button to make sure every aspect of the game is as pleasant as possible.'
    WHERE identifier = 'wazdan:BlackJack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The forests are burning! It''s time to jump in the firetruck and join the firefighters in the fight to save the trees. Our Burning Reels video slot will reward you handsomely for such a courageous act!\r\n\r\nBurning Reels is a 5-reel, 20-payline video slot with a unique theme – players join a team of brave firefighters that are trying to stop a huge fire from spreading in a forest.'
    WHERE identifier = 'wazdan:BurningReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The forests are burning! It''s time to jump in the firetruck and join the firefighters in the fight to save the trees. Our Burning Reels video slot will reward you handsomely for such a courageous act!Burning Reels is a 5-reel, 20-payline video slot with a unique theme – players join a team of brave firefighters that are trying to stop a huge fire from spreading in a forest.'
    WHERE identifier = 'wazdan:BurningReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab a telescope and look up to the stars to see mesmerizing wins unfold before your eyes! Spin the reels and let Burning Stars shower you with great prizes!\r\n\r\nIf you enjoy stargazing, you will definitely find our online slot Burning Stars to your liking. The game is equipped with 5 reels and as much as 20 paylines to give you more chances to win. The slot features some classic card symbols – 9s, 10s, Jacks, Queens, Kings and Aces – as well as burning sevens that fans of traditional old-school slots will surely appreciate. '
    WHERE identifier = 'wazdan:BurningStars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This scorching hot slot successfully ignites players'' imagination with a unique blend of classic and pleasantly familiar fruity symbols, explosive theme, and innovative mechanics. With 9 reels on a 3 x 3 grid, a Wild symbol that substitutes other symbols (apart from the Bonus symbol), and a chance to Hold the Jackpot – the temperature in Burning Stars 3™ never drops!'
    WHERE identifier = 'wazdan:BurningStars3'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This scorching hot slot successfully ignites players'' imagination with a unique blend of classic and pleasantly familiar fruity symbols, explosive theme, and innovative mechanics. With 9 reels on a 3 x 3 grid, a Wild symbol that substitutes other symbols (apart from the Bonus symbol), and a chance to Hold the Jackpot – the temperature in Burning Stars 3™ never drops!'
    WHERE identifier = 'wazdan:BurningStars394'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Burning Stars 3™ Xmas Edition\r\n''Tis the season to be spinning and winning with Burning Stars 3™ Xmas Edition! This hot slot gets players into the holiday spirit with high-paced gameplay, classic fruit machine graphics, and huge Jackpots up for grabs in the thrilling Hold the Jackpot bonus round.'
    WHERE identifier = 'wazdan:BurningStars3XmasEdition'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab a telescope and look up to the stars to see mesmerizing wins unfold before your eyes! Spin the reels and let Burning Stars shower you with great prizes!If you enjoy stargazing, you will definitely find our online slot Burning Stars to your liking. The game is equipped with 5 reels and as much as 20 paylines to give you more chances to win. The slot features some classic card symbols – 9s, 10s, Jacks, Queens, Kings and Aces – as well as burning sevens that fans of traditional old-school slots will surely appreciate. '
    WHERE identifier = 'wazdan:BurningStars94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Liang Shanbo and Zhu Yingtai present you their beautiful – yet heartbreaking – story. Accept their pleas and give the couple a happy ending!'
    WHERE identifier = 'wazdan:ButterflyLovers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Liang Shanbo and Zhu Yingtai present you their beautiful – yet heartbreaking – story. Accept their pleas and give the couple a happy ending!'
    WHERE identifier = 'wazdan:ButterflyLovers94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the waters known as the Ocean of Fortune, where prosperity and merriment await anyone that visits, thanks to the prosperous rule of Captain SharkTM, the friendliest shark you''ll ever meet. Will you accept the invitation to his domain?'
    WHERE identifier = 'wazdan:CaptainShark'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the waters known as the Ocean of Fortune, where prosperity and merriment await anyone that visits, thanks to the prosperous rule of Captain SharkTM, the friendliest shark you''ll ever meet. Will you accept the invitation to his domain?'
    WHERE identifier = 'wazdan:CaptainShark94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic poker with a hot twist! This time you can enjoy the popular table game on a tropical island!\r\n\r\nCan you imagine anything better than playing your favourite table game? How about playing it on one of the Caribbean islands! With Caribbean Beach Poker you''ll get the feeling that you''re playing this classic card game in a beachside casino where you can step outside to feel a warm breeze on your face and enjoy a sunny day. The animation with azure waves and palms trees that appears at the beginning of this game will surely catch your attention and leave you dreaming of summer. However, it''s not the blazing sun but the excitement caused by this game that''ll really make you hot!'
    WHERE identifier = 'wazdan:CaribbeanBeachPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Red or black, even or odd? Choose your bets and spin the wheel – wait until the ball lands and collect the prize!\r\n\r\nSurely you''ve heard about this classic casino game many times. If – by any chance – you haven''t played it yet, don''t wait any longer and try your luck in Casino Roulette.'
    WHERE identifier = 'wazdan:CasinoRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delicious milk chocolate will awaken not only players'' taste buds but also their imagination. Choco Reels™, a slot that''s dripping with sweetness, will become everyone''s favourite treat. The baking syringe filled with chocolate cream takes the player to a chocolate land where a Multiplier that can reach up to x6 awaits.'
    WHERE identifier = 'wazdan:ChocoReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Delicious milk chocolate will awaken not only players'' taste buds but also their imagination. Choco Reels™, a slot that''s dripping with sweetness, will become everyone''s favourite treat. The baking syringe filled with chocolate cream takes the player to a chocolate land where a Multiplier that can reach up to x6 awaits.'
    WHERE identifier = 'wazdan:ChocoReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep in the forest, a mysterious woodswoman and her loyal Direwolf await in the 6-reel, 10-payline hit Clover Lady™.\r\n\r\nThe Clover Lady™ herself appears on the Bonus symbol, with 3 or more of them triggering the magical Clover Jackpot Bonus, during which you collect Bonus symbols to Hold the Jackpot and Direwolf symbols to multiply it! The bonus round starts with 3 re-spins, their number resetting with every special symbol that lands on the reels.'
    WHERE identifier = 'wazdan:CloverLady'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep in the forest, a mysterious woodswoman and her loyal Direwolf await in the 6-reel, 10-payline hit Clover Lady™.The Clover Lady™ herself appears on the Bonus symbol, with 3 or more of them triggering the magical Clover Jackpot Bonus, during which you collect Bonus symbols to Hold the Jackpot and Direwolf symbols to multiply it! The bonus round starts with 3 re-spins, their number resetting with every special symbol that lands on the reels.'
    WHERE identifier = 'wazdan:CloverLady94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for a purrfect online slot? Well, stop your searching – it''s here!\r\n\r\nColin the Cat™ – a 4-reel, 10-payline online slot where cats are in charge. Accompany the friendly bunch of felines and surround yourself with cute kittens which are up to no good! It seems that the cats are having way too much fun because their house is demolished! Colin the Cat™ has a cartoon-like feel and its reels are filled to the brim with mischievous cats that will do anything to let you have as much fun as possible!'
    WHERE identifier = 'wazdan:ColinTheCat'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for a purrfect online slot? Well, stop your searching – it''s here!Colin the Cat™ – a 4-reel, 10-payline online slot where cats are in charge. Accompany the friendly bunch of felines and surround yourself with cute kittens which are up to no good! It seems that the cats are having way too much fun because their house is demolished! Colin the Cat™ has a cartoon-like feel and its reels are filled to the brim with mischievous cats that will do anything to let you have as much fun as possible!'
    WHERE identifier = 'wazdan:ColinTheCat94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blood-boiling fights, passionate love and hot wins – all in one slot! Check out Corrida Romance and get lost in the hot gameplay.\r\n\r\nFeel the atmosphere of a real Spanish corrida from the comfort of your own home with this wild slot! Set in a traditional Spanish bullfighting ring, where the handsome matador attempts to win the heart of a stunning señorita, the game will fascinate the player with its vibrant colours and distinctive theme! Corrida Romance is a 5-reel online slot equipped with 20 paylines to give you more chances to win. Vivid graphics additionally enhance your experience and make it really difficult to look away from this slot.'
    WHERE identifier = 'wazdan:CorridaRomance'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Blood-boiling fights, passionate love and hot wins – all in one slot! Check out Corrida Romance and get lost in the hot gameplay.Feel the atmosphere of a real Spanish corrida from the comfort of your own home with this wild slot! Set in a traditional Spanish bullfighting ring, where the handsome matador attempts to win the heart of a stunning señorita, the game will fascinate the player with its vibrant colours and distinctive theme! Corrida Romance is a 5-reel online slot equipped with 20 paylines to give you more chances to win. Vivid graphics additionally enhance your experience and make it really difficult to look away from this slot.'
    WHERE identifier = 'wazdan:CorridaRomance94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you think you have the guts to face a fearsome bull? Head to the arena and confront the animal to win the crowd!\r\n\r\nCorrida Romance Deluxe is an updated version of the classic and popular Corrida Romance. The game is set at a Spanish bullring where a charming matador does his best to gain the favour of the stunning señorita'
    WHERE identifier = 'wazdan:CorridaRomanceDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you think you have the guts to face a fearsome bull? Head to the arena and confront the animal to win the crowd!Corrida Romance Deluxe is an updated version of the classic and popular Corrida Romance. The game is set at a Spanish bullring where a charming matador does his best to gain the favour of the stunning señorita'
    WHERE identifier = 'wazdan:CorridaRomanceDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '*Sniff, sniff* Do you feel the smell of burning tires? Fasten your seatbelts and hold tight because you''re in for a rough ride!\r\n\r\nCrazy Cars is an exciting, high-speed online slot designed for those players who love an adrenaline rush. Each element included in the game is theme-related which lets you feel the atmosphere of a racetrack and the cartoon-style graphics and perfectly executed animations make it a real pleasure to the eye. The slot''s symbols consist of classic card signs as well as other icons such as car body elements, tires, race flag, blue car, red car, trophy and champagne. Crazy Cars is an HTML5-based game so you can enjoy playing it any time, anywhere, on any device you want!'
    WHERE identifier = 'wazdan:CrazyCars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '*Sniff, sniff* Do you feel the smell of burning tires? Fasten your seatbelts and hold tight because you''re in for a rough ride!Crazy Cars is an exciting, high-speed online slot designed for those players who love an adrenaline rush. Each element included in the game is theme-related which lets you feel the atmosphere of a racetrack and the cartoon-style graphics and perfectly executed animations make it a real pleasure to the eye. The slot''s symbols consist of classic card signs as well as other icons such as car body elements, tires, race flag, blue car, red car, trophy and champagne. Crazy Cars is an HTML5-based game so you can enjoy playing it any time, anywhere, on any device you want!'
    WHERE identifier = 'wazdan:CrazyCars94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic slot with retro symbols and appealing special features will prove that sometimes less is more. Spin the reels of Criss Cross 81 and enjoy fantastic bonuses!\r\n\r\nCriss Cross 81 offers simple gameplay and classic old-school theme – with a few twists for the lucky players. This traditional online slot features 4 reels and as many as 81 paylines to increase your chances of forming a winning combination. The reels are filled with retro symbols, such as juicy fruits, BARs and sevens, which fans of classic slots will surely appreciate. Vibrant colours and smooth, attractive animation make the gameplay very enjoyable and eye-pleasing while further enhancing the retro vibe of Criss Cross 81. You won''t be able to shake off the feeling of playing some old-school slot machine!'
    WHERE identifier = 'wazdan:CrissCross81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic slot with retro symbols and appealing special features will prove that sometimes less is more. Spin the reels of Criss Cross 81 and enjoy fantastic bonuses!Criss Cross 81 offers simple gameplay and classic old-school theme – with a few twists for the lucky players. This traditional online slot features 4 reels and as many as 81 paylines to increase your chances of forming a winning combination. The reels are filled with retro symbols, such as juicy fruits, BARs and sevens, which fans of classic slots will surely appreciate. Vibrant colours and smooth, attractive animation make the gameplay very enjoyable and eye-pleasing while further enhancing the retro vibe of Criss Cross 81. You won''t be able to shake off the feeling of playing some old-school slot machine!'
    WHERE identifier = 'wazdan:CrissCross8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Maybe hell isn''t as bad as they say? Play this demonic slot and find out for yourself that the infernal abyss is full of great prizes!\r\n\r\nNo need to sell your soul to win in this classic 3-reel slot! Demon Jack 27 is equipped with 27 paylines and diabolical special features to increase your chances of winning. Don''t get frightened by the dark, ominous theme – this time, hell is a place where you have great fun and win big! Vibrant colours, attractive animation and symbols related to the game''s theme are definitely the strengths of the hellish online slot Demon Jack 27. All these burning symbols designed with great attention to detail will leave you speechless. While playing the game, you can admire the devilish beauty of bells, roses, crows or pentagrams. And you will surely feel hot when you see the prizes they bring to you!'
    WHERE identifier = 'wazdan:DemonJack27'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Maybe hell isn''t as bad as they say? Play this demonic slot and find out for yourself that the infernal abyss is full of great prizes!No need to sell your soul to win in this classic 3-reel slot! Demon Jack 27 is equipped with 27 paylines and diabolical special features to increase your chances of winning. Don''t get frightened by the dark, ominous theme – this time, hell is a place where you have great fun and win big! Vibrant colours, attractive animation and symbols related to the game''s theme are definitely the strengths of the hellish online slot Demon Jack 27. All these burning symbols designed with great attention to detail will leave you speechless. While playing the game, you can admire the devilish beauty of bells, roses, crows or pentagrams. And you will surely feel hot when you see the prizes they bring to you!'
    WHERE identifier = 'wazdan:DemonJack2794'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unravel the world of prehistory and go back to the times when dinosaurs roamed the Earth! Hear the T-Rex''s mighty roar but don''t tremble in fear – big wins are waiting!'
    WHERE identifier = 'wazdan:DinoReels81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unravel the world of prehistory and go back to the times when dinosaurs roamed the Earth! Hear the T-Rex''s mighty roar but don''t tremble in fear – big wins are waiting!'
    WHERE identifier = 'wazdan:DinoReels8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try to maintain balance between the elements of fire and water and tame the fearsome spirit animals to find harmony on the reels of Double Tigers. Hear the tigers'' mighty roar and feel their majestic presence!\r\n\r\nDouble Tigers is an orient-themed 3-reel, 8-payline online slot that takes place somewhere outside an ancient temple. There''s a stunning view in the background of the reels which perfectly fits the atmosphere and theme of this online slot and makes whole gameplay experience very pleasurable. The active paylines go horizontally, vertically and diagonally and there are only two symbols included in the game – a blue tiger that represents the water element and a red, fiery tiger. The online slot''s concept of yin and yang is perfectly executed which should suit those who enjoy playing casino games based on the Asian culture.'
    WHERE identifier = 'wazdan:DoubleTigers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try to maintain balance between the elements of fire and water and tame the fearsome spirit animals to find harmony on the reels of Double Tigers. Hear the tigers'' mighty roar and feel their majestic presence!Double Tigers is an orient-themed 3-reel, 8-payline online slot that takes place somewhere outside an ancient temple. There''s a stunning view in the background of the reels which perfectly fits the atmosphere and theme of this online slot and makes whole gameplay experience very pleasurable. The active paylines go horizontally, vertically and diagonally and there are only two symbols included in the game – a blue tiger that represents the water element and a red, fiery tiger. The online slot''s concept of yin and yang is perfectly executed which should suit those who enjoy playing casino games based on the Asian culture.'
    WHERE identifier = 'wazdan:DoubleTigers94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The gates to Dracula''s Castle stand wide open. Those courageous enough to enter should be prepared for a blood-chilling adventure, but their bravery will be rewarded handsomely by the lord of the castle himself!'
    WHERE identifier = 'wazdan:DraculasCastle'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The gates to Dracula''s Castle stand wide open. Those courageous enough to enter should be prepared for a blood-chilling adventure, but their bravery will be rewarded handsomely by the lord of the castle himself!'
    WHERE identifier = 'wazdan:DraculasCastle94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s no need to fear the majestic dragon as its legendary powers will help you gain access to ancient riches. Give yourself a one-of-a-kid opportunity to gain favour of the powerful creature and the noble dragon will shower you with good fortune!'
    WHERE identifier = 'wazdan:DragonsLucky8'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s no need to fear the majestic dragon as its legendary powers will help you gain access to ancient riches. Give yourself a one-of-a-kid opportunity to gain favour of the powerful creature and the noble dragon will shower you with good fortune!'
    WHERE identifier = 'wazdan:DragonsLucky894'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Triggered by 6 Bonus symbols of any type, the Hold the Jackpot bonus round takes players deep into the mines on a rollercoaster ride to riches, allowing them to collect\r\nBonus symbols and big wins along the way. Cash symbols offer prizes up to 15x player''s bet, while the value of new Increasing Value Cash symbols increases to infinity\r\nwith every Re-Spin. There are also Special Bonus symbols that can only appear on the top row of the reels. Jackpot symbols award corresponding Mini, Minor, and Major Jackpots.\r\nMystery symbols can transform into any other Bonus symbol, while Dwarfs Mystery symbols guarantee a Jackpot win. Finally, innovative Collector symbols accumulate all values \r\nfrom Cash and Increasing Value Cash symbols drawn on the reels below up to 9 times. Filling that golden minecart to the brim with golden diamonds brings huge prizes\r\nthat can increase to infinity. If players manage to collect 20 Bonus symbols, their hard work is rewarded with the Grand Jackpot of 2,500x their bet!'
    WHERE identifier = 'wazdan:DwarfsFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Triggered by 6 Bonus symbols of any type, the Hold the Jackpot bonus round takes players deep into the mines on a rollercoaster ride to riches, allowing them to collectBonus symbols and big wins along the way. Cash symbols offer prizes up to 15x player''s bet, while the value of new Increasing Value Cash symbols increases to infinitywith every Re-Spin. There are also Special Bonus symbols that can only appear on the top row of the reels. Jackpot symbols award corresponding Mini, Minor, and Major Jackpots.Mystery symbols can transform into any other Bonus symbol, while Dwarfs Mystery symbols guarantee a Jackpot win. Finally, innovative Collector symbols accumulate all values from Cash and Increasing Value Cash symbols drawn on the reels below up to 9 times. Filling that golden minecart to the brim with golden diamonds brings huge prizesthat can increase to infinity. If players manage to collect 20 Bonus symbols, their hard work is rewarded with the Grand Jackpot of 2,500x their bet!'
    WHERE identifier = 'wazdan:DwarfsFortune94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You''re certainly familiar with this game! The classic game Extra Bingo offers you great fun – score all the numbers to win big!\r\n\r\nExtra Bingo shows that minimalistic entertainment is still valued by many players. This classic bingo game is simple yet amusing with its traditional rules and appealing looks. One of the game''s advantages is simple interface with attractive and colourful animation. Extra Bingo is extremely user-friendly and its appearance alone is enough to draw player''s attention. Bright and vivid colours easily put you in a good mood – and the possibility of gaining attractive prizes will make you smile even more!'
    WHERE identifier = 'wazdan:ExtraBingo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You''re certainly familiar with this game! The classic game Extra Bingo offers you great fun – score all the numbers to win big!Extra Bingo shows that minimalistic entertainment is still valued by many players. This classic bingo game is simple yet amusing with its traditional rules and appealing looks. One of the game''s advantages is simple interface with attractive and colourful animation. Extra Bingo is extremely user-friendly and its appearance alone is enough to draw player''s attention. Bright and vivid colours easily put you in a good mood – and the possibility of gaining attractive prizes will make you smile even more!'
    WHERE identifier = 'wazdan:ExtraBingo94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the power of the mythological bird and watch it rise from the ashes as you try your luck in this fiery slot!\r\n\r\nFenix Play is a perfect proof that many players value simplicity and minimalism when it comes to slots as it developed into a very popular series. It has all you would expect from a classic slot – 3 reels and 5 paylines that give off the nostalgic vibes of old-school slot machines, simple rules, minimalistic design as well as traditional, well-known symbols.'
    WHERE identifier = 'wazdan:FenixPlay'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The mythological bird is back in an updated version of a classic fiery slot to offer you more chances to win!\r\n\r\nThe new version of the 3-reel online slot is equipped with as much as 27 paylines to help you increase your chances of winning. Fans of traditional slots will surely be pleased with Fenix Play 27 as when you spin the reels, you can land many old-school symbols. Collect cherries, lemons, oranges, plums, strawberries, raspberries, grapes or watermelons as well as bells and sevens and watch your counter increase! Their cartoonish design further enhances the retro vibe of Fenix Play 27 so every player who feels a bit nostalgic thinking about traditional slot machines is bound to enjoy this game.'
    WHERE identifier = 'wazdan:FenixPlay27'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The mythological bird is back in an updated version of a classic fiery slot to offer you more chances to win!The new version of the 3-reel online slot is equipped with as much as 27 paylines to help you increase your chances of winning. Fans of traditional slots will surely be pleased with Fenix Play 27 as when you spin the reels, you can land many old-school symbols. Collect cherries, lemons, oranges, plums, strawberries, raspberries, grapes or watermelons as well as bells and sevens and watch your counter increase! Their cartoonish design further enhances the retro vibe of Fenix Play 27 so every player who feels a bit nostalgic thinking about traditional slot machines is bound to enjoy this game.'
    WHERE identifier = 'wazdan:FenixPlay2794'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tame the legendary phoenix and discover treasures hidden somewhere on the top of a massive mountain!\r\n\r\nWitness the rebirth of the mighty ancient firebird on the reels of Fenix Play 27 Deluxe. This online slot is equipped with 3 reels that feature a hefty amount of 27 paylines and its gameplay is based on the classic Fenix Play 27 slot.'
    WHERE identifier = 'wazdan:FenixPlay27Deluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Tame the legendary phoenix and discover treasures hidden somewhere on the top of a massive mountain!Witness the rebirth of the mighty ancient firebird on the reels of Fenix Play 27 Deluxe. This online slot is equipped with 3 reels that feature a hefty amount of 27 paylines and its gameplay is based on the classic Fenix Play 27 slot.'
    WHERE identifier = 'wazdan:FenixPlay27Deluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Experience the power of the mythological bird and watch it rise from the ashes as you try your luck in this fiery slot!Fenix Play is a perfect proof that many players value simplicity and minimalism when it comes to slots as it developed into a very popular series. It has all you would expect from a classic slot – 3 reels and 5 paylines that give off the nostalgic vibes of old-school slot machines, simple rules, minimalistic design as well as traditional, well-known symbols.'
    WHERE identifier = 'wazdan:FenixPlay94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Finish the sacred ritual and help the ancient fiery bird rise again from the ashes with Fenix Play Deluxe!\r\n\r\nThis 3-reel online slot equipped with 5 paylines is a new exciting version of a fan-favourite Fenix Play. It proves that even simple gameplay mechanics can become a hit among players if delivered in a clean and charming packing.'
    WHERE identifier = 'wazdan:FenixPlayDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Finish the sacred ritual and help the ancient fiery bird rise again from the ashes with Fenix Play Deluxe!This 3-reel online slot equipped with 5 paylines is a new exciting version of a fan-favourite Fenix Play. It proves that even simple gameplay mechanics can become a hit among players if delivered in a clean and charming packing.'
    WHERE identifier = 'wazdan:FenixPlayDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch as magnificent fiery bird lands on the reels to bring you unforgettable experience and hot wins!\r\n\r\nPlaying this slot can make you really hot! Fire Bird is a classic 3-reel online slot that old-school enthusiasts will love but its blazing setting surely may win over the hearts of more demanding players as well. The game features 5 paylines and retro symbols, such as cherries, oranges, lemons, plums, grapes, watermelons as well as bells and sevens. '
    WHERE identifier = 'wazdan:FireBird'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Watch as magnificent fiery bird lands on the reels to bring you unforgettable experience and hot wins!Playing this slot can make you really hot! Fire Bird is a classic 3-reel online slot that old-school enthusiasts will love but its blazing setting surely may win over the hearts of more demanding players as well. The game features 5 paylines and retro symbols, such as cherries, oranges, lemons, plums, grapes, watermelons as well as bells and sevens. '
    WHERE identifier = 'wazdan:FireBird94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Football fans will find everything they need as fantastic bonuses trigger big wins!\r\n\r\nFootball Mania is a fantastic 9-reel online slot that is a perfect choice for sport enthusiasts thanks to its classic football theme. The symbols featured in the game are surely familiar to anyone interested in football – a whistle, players, bronze, silver and golden cups and some more as well! No need to sweat when you see a referee with a yellow card, it''s just another winning symbol – there are no penalties for you in Football Mania! Look out especially for the football symbol, which is the highest paying one in the slot.'
    WHERE identifier = 'wazdan:FootballMania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Football fans will find everything they need as fantastic bonuses trigger big wins!Football Mania is a fantastic 9-reel online slot that is a perfect choice for sport enthusiasts thanks to its classic football theme. The symbols featured in the game are surely familiar to anyone interested in football – a whistle, players, bronze, silver and golden cups and some more as well! No need to sweat when you see a referee with a yellow card, it''s just another winning symbol – there are no penalties for you in Football Mania! Look out especially for the football symbol, which is the highest paying one in the slot.'
    WHERE identifier = 'wazdan:FootballMania94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Intercept the pass, tackle your opponents, aim... shoot... and… GOOAAAL!\r\n\r\nFootball Mania Deluxe delivers thrills and excitement levels reaching far beyond those which you can experience while watching a match of your favourite team. Unsurprisingly, the slot''s action takes place on a football pitch, so you''ll be supported by hundreds if not thousands of football fans cheering in the crowd.'
    WHERE identifier = 'wazdan:FootballManiaDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Intercept the pass, tackle your opponents, aim... shoot... and… GOOAAAL!Football Mania Deluxe delivers thrills and excitement levels reaching far beyond those which you can experience while watching a match of your favourite team. Unsurprisingly, the slot''s action takes place on a football pitch, so you''ll be supported by hundreds if not thousands of football fans cheering in the crowd.'
    WHERE identifier = 'wazdan:FootballManiaDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Celebrate the Chinese Year of the Ox with Fortune Reels and Hold the Jackpot!\r\n\r\nFortune Reels is a mesmerising oriental 6-reel slot with an impressive 46,656 ways to win and Cascading Reels, increasing your chances of hitting a massive win. It is the seventh instalment of the Hold the Jackpot family and is perfect for players who seek the thrill of the big win.'
    WHERE identifier = 'wazdan:FortuneReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Celebrate the Chinese Year of the Ox with Fortune Reels and Hold the Jackpot!Fortune Reels is a mesmerising oriental 6-reel slot with an impressive 46,656 ways to win and Cascading Reels, increasing your chances of hitting a massive win. It is the seventh instalment of the Hold the Jackpot family and is perfect for players who seek the thrill of the big win.'
    WHERE identifier = 'wazdan:FortuneReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spicier than the hottest pepper, Fruit Fiesta is bound to raise the temperature faster than you could imagine! Tune your guitar, pack your maracas and get wild with Fruit Fiesta!\r\n\r\nFruit Fiesta is a 5-reel, 20-payline game which features a perfectly-executed Mexican-theme.'
    WHERE identifier = 'wazdan:FruitFiesta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spicier than the hottest pepper, Fruit Fiesta is bound to raise the temperature faster than you could imagine! Tune your guitar, pack your maracas and get wild with Fruit Fiesta!Fruit Fiesta is a 5-reel, 20-payline game which features a perfectly-executed Mexican-theme.'
    WHERE identifier = 'wazdan:FruitFiesta94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Mania has all you need and more – colourful retro symbols and attractive special features that will help you win big! Spin the reels and let these fruits shower you with big prizes!\r\n\r\nEnthusiasts of old-school slots will surely find Fruit Mania enjoyable. Colourful cartoon-like symbols and minimalistic design give this 9-reel slot a retro vibe that will remind you of traditional slot machines.'
    WHERE identifier = 'wazdan:FruitMania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Mania has all you need and more – colourful retro symbols and attractive special features that will help you win big! Spin the reels and let these fruits shower you with big prizes!Enthusiasts of old-school slots will surely find Fruit Mania enjoyable. Colourful cartoon-like symbols and minimalistic design give this 9-reel slot a retro vibe that will remind you of traditional slot machines.'
    WHERE identifier = 'wazdan:FruitMania94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Did you enjoy playing Fruit Mania? If the answer is yes, then you''re bound to have loads of fun while playing its upgraded and even more engaging version!\r\n\r\nAt first, Fruit Mania Deluxe looks like a classic 3-reel video slot, however, it actually features 9 reels. There are no paylines in the game, so instead of creating regular winning betlines, you have to draw a set of symbols anywhere on the reels. The action of this online slot takes place on a big scene highlighted by spotlights and the featured symbols consist of lotto tickets, cherries, oranges, plums, bells, stars, watermelons, three kinds of Vegas tickets and a red diamond.'
    WHERE identifier = 'wazdan:FruitManiaDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Did you enjoy playing Fruit Mania? If the answer is yes, then you''re bound to have loads of fun while playing its upgraded and even more engaging version!At first, Fruit Mania Deluxe looks like a classic 3-reel video slot, however, it actually features 9 reels. There are no paylines in the game, so instead of creating regular winning betlines, you have to draw a set of symbols anywhere on the reels. The action of this online slot takes place on a big scene highlighted by spotlights and the featured symbols consist of lotto tickets, cherries, oranges, plums, bells, stars, watermelons, three kinds of Vegas tickets and a red diamond.'
    WHERE identifier = 'wazdan:FruitManiaDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get aboard the luxury cruise ship and find yourself surrounded by a bunch of wacky fruity characters with Fruits go Bananas™.\r\n\r\nThere can be only one destination for that one-of-a-kind ship – a sunny, tropical island. Become a member of the crew and enjoy the trip! Fruits go Bananas™ will make your travel very entertaining thanks to the loony characters included in the game.'
    WHERE identifier = 'wazdan:FruitsGoBananas'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get aboard the luxury cruise ship and find yourself surrounded by a bunch of wacky fruity characters with Fruits go Bananas™.There can be only one destination for that one-of-a-kind ship – a sunny, tropical island. Become a member of the crew and enjoy the trip! Fruits go Bananas™ will make your travel very entertaining thanks to the loony characters included in the game.'
    WHERE identifier = 'wazdan:FruitsGoBananas94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gem Splitter™ is a 5-reel slot where you can shine like a diamond and enjoy a unique opportunity to find unthinkable treasures and well-designed features – if you just give it a try!\r\n\r\nA real jewel in the crown of Gem Splitter™ is the Symbol Splitter feature, which guarantees that with every spin a randomly selected symbol can split into one of 5 possible combinations. Courtesy of this feature and the innovative Multiways mechanics, Gem Splitter™ offers up to stunning 59049 ways to win. Therefore, the number of symbols in the winning combination can increase from 5 up to 15!'
    WHERE identifier = 'wazdan:GemSplitter'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gem Splitter™ is a 5-reel slot where you can shine like a diamond and enjoy a unique opportunity to find unthinkable treasures and well-designed features – if you just give it a try!A real jewel in the crown of Gem Splitter™ is the Symbol Splitter feature, which guarantees that with every spin a randomly selected symbol can split into one of 5 possible combinations. Courtesy of this feature and the innovative Multiways mechanics, Gem Splitter™ offers up to stunning 59049 ways to win. Therefore, the number of symbols in the winning combination can increase from 5 up to 15!'
    WHERE identifier = 'wazdan:GemSplitter94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When you think of Ancient Egypt, the Sphinx, pyramids, ancient relics, pharaohs and their immeasurable treasures come to mind. You''ll find all that and more in our Golden Sphinx video slot!'
    WHERE identifier = 'wazdan:GoldenSphinx'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'When you think of Ancient Egypt, the Sphinx, pyramids, ancient relics, pharaohs and their immeasurable treasures come to mind. You''ll find all that and more in our Golden Sphinx video slot!'
    WHERE identifier = 'wazdan:GoldenSphinx94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The classic roulette game offers you a great time so spin the wheel of fortune and see if it''s your lucky day – big wins are waiting!\r\n\r\nGold Roulette will undoubtedly appeal to enthusiasts of traditional casino games. It follows simple rules of a classic roulette which are surely well-known to seasoned players but even beginners will have it easy to get their heads around it. Simplicity is the key! Moreover, the graphics of Gold Roulette ensure the best gameplay experience. The game''s look accurately conveys a real land-based casino atmosphere thanks to a realistic table and a spinning wheel. Also vivid and lively colours and attractive animation add to the enjoyment making your time with Gold Roulette very exciting.'
    WHERE identifier = 'wazdan:GoldRoulette'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Draw lucky symbols, complete winning combos and aim for big wins!\r\n\r\nGood Luck 40 is quite a unique addition to our portfolio. As its name suggests, the online slot is equipped with 40 paylines.'
    WHERE identifier = 'wazdan:GoodLuck40'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Draw lucky symbols, complete winning combos and aim for big wins!Good Luck 40 is quite a unique addition to our portfolio. As its name suggests, the online slot is equipped with 40 paylines.'
    WHERE identifier = 'wazdan:GoodLuck4094'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Open the ancient tome and cast a spell, what comes next – no one can tell! So gather around and have no fright, read the passages and feel the Great Book of Magic''s might!'
    WHERE identifier = 'wazdan:GreatBookofMagic'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Open the ancient tome and cast a spell, what comes next – no one can tell! So gather around and have no fright, read the passages and feel the Great Book of Magic''s might!'
    WHERE identifier = 'wazdan:GreatBookofMagic94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A dusty magical tome awaits for you to conjure riches beyond this world! Turn its pages and find your perfect spell!\r\n\r\nGreat Book of Magic Deluxe is a new take on one of the most recognizable titles in our portfolio – Great Book of Magic. The upgraded version of the classic game includes the same special features, however, the online slot''s audiovisuals are improved to let players enjoy the game even more!'
    WHERE identifier = 'wazdan:GreatBookofMagicDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A dusty magical tome awaits for you to conjure riches beyond this world! Turn its pages and find your perfect spell!Great Book of Magic Deluxe is a new take on one of the most recognizable titles in our portfolio – Great Book of Magic. The upgraded version of the classic game includes the same special features, however, the online slot''s audiovisuals are improved to let players enjoy the game even more!'
    WHERE identifier = 'wazdan:GreatBookofMagicDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wander the halls of an abandoned hospital and prepare yourself for a spine-chilling experience!\r\n\r\nScarier than a true horror story, Haunted Hospital will keep you on the edge of your seat for sure! The theme of the game is perfectly executed thanks to the beautiful graphics, high-quality sound effects and innovative ideas pumped into the reels of the game.'
    WHERE identifier = 'wazdan:HauntedHospital'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wander the halls of an abandoned hospital and prepare yourself for a spine-chilling experience!Scarier than a true horror story, Haunted Hospital will keep you on the edge of your seat for sure! The theme of the game is perfectly executed thanks to the beautiful graphics, high-quality sound effects and innovative ideas pumped into the reels of the game.'
    WHERE identifier = 'wazdan:HauntedHospital94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Step into the world of high school love affairs, dramas and secrets wrapped in a manga theme!\r\n\r\nHighschool Manga – a colourful 3-reel, 5-payline online slot which action takes place in a classroom. '
    WHERE identifier = 'wazdan:HighschoolManga'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Step into the world of high school love affairs, dramas and secrets wrapped in a manga theme!Highschool Manga – a colourful 3-reel, 5-payline online slot which action takes place in a classroom. '
    WHERE identifier = 'wazdan:HighschoolManga94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You won''t find this destination on any navigation system. Take advantage of your one-of-a-kind opportunity and head straight to the fiery pits of hell!\r\n\r\nHighway to Hell combines a classic video slot feel with great bonuses and convenient features that together create an unparalleled experience'
    WHERE identifier = 'wazdan:HighwayToHell'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You won''t find this destination on any navigation system. Take advantage of your one-of-a-kind opportunity and head straight to the fiery pits of hell!Highway to Hell combines a classic video slot feel with great bonuses and convenient features that together create an unparalleled experience'
    WHERE identifier = 'wazdan:HighwayToHell94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare yourself for an experience out of this world and get into a truck straight out of hell!\r\n\r\nHighway to Hell Deluxe has 5 reels with 5 fixed paylines. The slot will take you on an unforgettable road trip to the depths of hell, so hop in the devilish truck and get ready for a hot adventure! The fiery slot is accompanied by three gorgeous ladies – a stunning brunette, a seductive redhead and a hellish she-devil. '
    WHERE identifier = 'wazdan:HighwaytoHellDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare yourself for an experience out of this world and get into a truck straight out of hell!Highway to Hell Deluxe has 5 reels with 5 fixed paylines. The slot will take you on an unforgettable road trip to the depths of hell, so hop in the devilish truck and get ready for a hot adventure! The fiery slot is accompanied by three gorgeous ladies – a stunning brunette, a seductive redhead and a hellish she-devil. '
    WHERE identifier = 'wazdan:HighwaytoHellDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don''t be afraid to play with fire – with Hot 777™ it only brings you great bonuses and hot wins!Hot 777™ proves that even old-school slots will leave you feeling on fire. This game will surely appeal to fans of traditional slot machines with its retro cartoon-like fruit symbols and sevens. '
    WHERE identifier = 'wazdan:Hot777'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Don''t be afraid to play with fire – with Hot 777™ it only brings you great bonuses and hot wins!Hot 777™ proves that even old-school slots will leave you feeling on fire. This game will surely appeal to fans of traditional slot machines with its retro cartoon-like fruit symbols and sevens. '
    WHERE identifier = 'wazdan:Hot77794'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Did you enjoy playing Hot 777™? Then its upgraded version should let you experience a totally different level of fun! With Hot 777™ Deluxe you''re bound to have a rootin tootin good time!'
    WHERE identifier = 'wazdan:Hot777Deluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Did you enjoy playing Hot 777™? Then its upgraded version should let you experience a totally different level of fun! With Hot 777™ Deluxe you''re bound to have a rootin tootin good time!'
    WHERE identifier = 'wazdan:Hot777Deluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the summer vibes as you spin the reels in Hot Party – this slot will leave you wanting to cool off!\r\n\r\nSummer never ends with this hot game! With Hot Party you can feel the warm rays of sunshine all year long. This online slot featuring 5-reels and 20 paylines will make you feel the atmosphere of a wild party on a sandy beach – umbrella drinks, blazing sun, the feeling of waves hitting your feet lightly… There''s no need to go on tropical holidays if you can just play Hot Party!'
    WHERE identifier = 'wazdan:HotParty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the summer vibes as you spin the reels in Hot Party – this slot will leave you wanting to cool off!Summer never ends with this hot game! With Hot Party you can feel the warm rays of sunshine all year long. This online slot featuring 5-reels and 20 paylines will make you feel the atmosphere of a wild party on a sandy beach – umbrella drinks, blazing sun, the feeling of waves hitting your feet lightly… There''s no need to go on tropical holidays if you can just play Hot Party!'
    WHERE identifier = 'wazdan:HotParty94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s about time to hit the beach! No matter the weather, Hot Party Deluxe is always here to let you feel the summer vibes!\r\n\r\nPrepare your suntan lotion, get in the party mood and hit the beach with Hot Party Deluxe – a holiday-themed 5-reel, 20-payline online slot which action takes place on a tropical island where the party never stops! '
    WHERE identifier = 'wazdan:HotPartyDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s about time to hit the beach! No matter the weather, Hot Party Deluxe is always here to let you feel the summer vibes!Prepare your suntan lotion, get in the party mood and hit the beach with Hot Party Deluxe – a holiday-themed 5-reel, 20-payline online slot which action takes place on a tropical island where the party never stops! '
    WHERE identifier = 'wazdan:HotPartyDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This 5-reel, 20-payline slot combines the design of old-fashioned slots with\r\nbig wins and customisable features, including adjustable Volatility Levels.'
    WHERE identifier = 'wazdan:HotSlot777Crown'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This 5-reel, 20-payline slot combines the design of old-fashioned slots withbig wins and customisable features, including adjustable Volatility Levels.'
    WHERE identifier = 'wazdan:HotSlot777Crown94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you think you have the drive to swim your way to survival? It''s either eat or become dinner! Find out how lucky your are with Hungry Shark!\r\n\r\nSee what you''re made of with Hungry Shark – a thrilling 5-reel, 20-payline online slot which theme is based on surviving a shipwreck. Find yourself in the middle of the sea where a ferocious shark is watching you and waiting for your slightest mistake.'
    WHERE identifier = 'wazdan:HungryShark'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you think you have the drive to swim your way to survival? It''s either eat or become dinner! Find out how lucky your are with Hungry Shark!See what you''re made of with Hungry Shark – a thrilling 5-reel, 20-payline online slot which theme is based on surviving a shipwreck. Find yourself in the middle of the sea where a ferocious shark is watching you and waiting for your slightest mistake.'
    WHERE identifier = 'wazdan:HungryShark94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have no fear, Infinity Hero™ is here! Where exactly, you may ask? The answer is – in Slot Town, where he keeps himself busy doing everything in his comic power to protect his people. And believe us, the danger is lurking around every corner…'
    WHERE identifier = 'wazdan:InfinityHero'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have no fear, Infinity Hero™ is here! Where exactly, you may ask? The answer is – in Slot Town, where he keeps himself busy doing everything in his comic power to protect his people. And believe us, the danger is lurking around every corner…'
    WHERE identifier = 'wazdan:InfinityHero94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Imagine yourself in the middle of a big, dark forest with only a backpack, compass and a few other items that could be useful to survive in the wild. Think you''d have the guts to stay in such a place for a whole night?'
    WHERE identifier = 'wazdan:InTheForest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Imagine yourself in the middle of a big, dark forest with only a backpack, compass and a few other items that could be useful to survive in the wild. Think you''d have the guts to stay in such a place for a whole night?'
    WHERE identifier = 'wazdan:InTheForest94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for some shooting fun in a western style with an old-school 3-reel slot Jack on Hold!\r\n\r\nJack on Hold is a classic 3-reel game with 5 paylines that fans of traditional slots will love. Juicy fruits and a western theme – that''s all you really need to have some old-school fun!'
    WHERE identifier = 'wazdan:JackonHold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for some shooting fun in a western style with an old-school 3-reel slot Jack on Hold!Jack on Hold is a classic 3-reel game with 5 paylines that fans of traditional slots will love. Juicy fruits and a western theme – that''s all you really need to have some old-school fun!'
    WHERE identifier = 'wazdan:JackonHold94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab your hard hat and get ready for some explosive entertainment! Jackpot Builders is an online slot that will let you try your hand at demolishing and building skyscrapers, all while aiming to hit the biggest wins!'
    WHERE identifier = 'wazdan:JackpotBuilders'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Grab your hard hat and get ready for some explosive entertainment! Jackpot Builders is an online slot that will let you try your hand at demolishing and building skyscrapers, all while aiming to hit the biggest wins!'
    WHERE identifier = 'wazdan:JackpotBuilders94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jump in Jack''s car on the spur of the moment and head to a place where anything can happen! No matter where Jack''s heading, good luck will follow!\r\n\r\nJack''s Ride will take you on a car trip of your life with its action-packed 3 reels equipped with 27 paylines. The game is set on an empty highway, so there''s no telling what you can expect! The online slot will let you feel like you were really driving across the US with its perfectly executed theme supported by state-of-the-art audiovisuals, innovative features and engaging gameplay.'
    WHERE identifier = 'wazdan:JacksRide'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jump in Jack''s car on the spur of the moment and head to a place where anything can happen! No matter where Jack''s heading, good luck will follow!Jack''s Ride will take you on a car trip of your life with its action-packed 3 reels equipped with 27 paylines. The game is set on an empty highway, so there''s no telling what you can expect! The online slot will let you feel like you were really driving across the US with its perfectly executed theme supported by state-of-the-art audiovisuals, innovative features and engaging gameplay.'
    WHERE identifier = 'wazdan:JacksRide94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jelly Reels is Wazdan''s latest candy slot sensation. This tasty-looking game offers 8 reels and a massive 16,777,216 ways to win. The fun doesn''t stop there though! With Colossal symbols, Wilds and huge Jackpots up for grabs in the Hold the Jackpot bonus round, this stunning slot allows players to spin their way to sweet wins and provides loads of fun.'
    WHERE identifier = 'wazdan:JellyReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jelly Reels is Wazdan''s latest candy slot sensation. This tasty-looking game offers 8 reels and a massive 16,777,216 ways to win. The fun doesn''t stop there though! With Colossal symbols, Wilds and huge Jackpots up for grabs in the Hold the Jackpot bonus round, this stunning slot allows players to spin their way to sweet wins and provides loads of fun.'
    WHERE identifier = 'wazdan:JellyReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jelly Reels™ Xmas Edition is the perfect way to kick off the Christmas adventures! Featuring 16,777,216 ways to win, Mega symbols, Cascading Wins, and jelly-tastic Jackpots up for grabs in the Hold the Jackpot bonus round, it''s the sweetest Christmas game in town.'
    WHERE identifier = 'wazdan:JellyReelsXmasEdition'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic slot that brings some explosive fun – Joker Explosion is a real dynamite!\r\n\r\nJoker Explosion may appear to be a conventional online slot at the first glance. Old-school vibes, minimalistic design, retro-looking symbols… sounds familiar? But don''t let this get you fooled – this game is a real BOMB! '
    WHERE identifier = 'wazdan:JokerExplosion'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A classic slot that brings some explosive fun – Joker Explosion is a real dynamite!Joker Explosion may appear to be a conventional online slot at the first glance. Old-school vibes, minimalistic design, retro-looking symbols… sounds familiar? But don''t let this get you fooled – this game is a real BOMB! '
    WHERE identifier = 'wazdan:JokerExplosion94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The tricky jester is here to bring smile on your face as you win big with the classic card game Joker Poker!\r\n\r\nJoker Poker is a colourful variation of a popular card game that anyone can enjoy. It''s an ideal choice for people who are fond of simplicity and minimalism. The rules are easy to grasp so both beginners and more experienced players can have a good time with this game. The paytable is displayed on the main screen what''s very comfortable for the player – you can see how much each combination pays as you play. Moreover, Joker Poker offers vibrant and lively graphics that make the experience very pleasurable and attractive. Swift animation enhances the gameplay as well.'
    WHERE identifier = 'wazdan:JokerPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The tricky jester is here to bring smile on your face as you win big with the classic card game Joker Poker!Joker Poker is a colourful variation of a popular card game that anyone can enjoy. It''s an ideal choice for people who are fond of simplicity and minimalism. The rules are easy to grasp so both beginners and more experienced players can have a good time with this game. The paytable is displayed on the main screen what''s very comfortable for the player – you can see how much each combination pays as you play. Moreover, Joker Poker offers vibrant and lively graphics that make the experience very pleasurable and attractive. Swift animation enhances the gameplay as well.'
    WHERE identifier = 'wazdan:JokerPoker94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sink your teeth in mouthwatering fruits and get ready for a juicy blast of the sweetest winnings with Juicy Reels!\r\n\r\nJuicy Reels combines a popular theme relating to classic fruit machines with some fantastic bonus features. The online slot is packed with bright colours that suit its vibrant theme and additionally enhance the gameplay experience. '
    WHERE identifier = 'wazdan:JuicyReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sink your teeth in mouthwatering fruits and get ready for a juicy blast of the sweetest winnings with Juicy Reels!Juicy Reels combines a popular theme relating to classic fruit machines with some fantastic bonus features. The online slot is packed with bright colours that suit its vibrant theme and additionally enhance the gameplay experience. '
    WHERE identifier = 'wazdan:JuicyReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A seductive lemon, an athletic orange, an anxious strawberry and a whole bunch of other wacky fruits are waiting for you to spin the juicy reels of Jumping Fruits!'
    WHERE identifier = 'wazdan:JumpingFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A seductive lemon, an athletic orange, an anxious strawberry and a whole bunch of other wacky fruits are waiting for you to spin the juicy reels of Jumping Fruits!'
    WHERE identifier = 'wazdan:JumpingFruits94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cheer with the crowd and become a part of the winning team with Kick Off – one of the most distinctive online slots in our portfolio!\r\n\r\nThe widely popular football theme is coupled with a unique approach to gameplay. Unsurprisingly, the action of this online slot takes place at a football pitch, so you can feel like watching a match from the comfort of your own home'
    WHERE identifier = 'wazdan:KickOff'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cheer with the crowd and become a part of the winning team with Kick Off – one of the most distinctive online slots in our portfolio!The widely popular football theme is coupled with a unique approach to gameplay. Unsurprisingly, the action of this online slot takes place at a football pitch, so you can feel like watching a match from the comfort of your own home'
    WHERE identifier = 'wazdan:KickOff94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leprechauns can be real pranksters, but what they''re known for even more are their hidden pots of gold! Larry the Leprechaun is one such creature, whose antics will definitely keep players occupied while spinning the reels of this game.'
    WHERE identifier = 'wazdan:LarrytheLeprechaun'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leprechauns can be real pranksters, but what they''re known for even more are their hidden pots of gold! Larry the Leprechaun is one such creature, whose antics will definitely keep players occupied while spinning the reels of this game.'
    WHERE identifier = 'wazdan:LarrytheLeprechaun94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With Los Muertos™ you can celebrate the Day of the Dead any time you want! Paint your face, join the joyful mariachi band and discover an online slot full of surprises!\r\n\r\nLos Muertos™ features 5 reels equipped with 4 rows and 40 paylines. The online slot takes you to a gloomy cemetery where everything can happen! '
    WHERE identifier = 'wazdan:LosMuertos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With Los Muertos™ you can celebrate the Day of the Dead any time you want! Paint your face, join the joyful mariachi band and discover an online slot full of surprises!Los Muertos™ features 5 reels equipped with 4 rows and 40 paylines. The online slot takes you to a gloomy cemetery where everything can happen! '
    WHERE identifier = 'wazdan:LosMuertos94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s an ancient pyramid hidden in the deepest part of a dense jungle and rumours say that there''s a secret room with a chest full of gold inside. We''re launching an expedition to claim those riches and we''re inviting you to join us by playing Lost Treasure!'
    WHERE identifier = 'wazdan:LostTreasure'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s an ancient pyramid hidden in the deepest part of a dense jungle and rumours say that there''s a secret room with a chest full of gold inside. We''re launching an expedition to claim those riches and we''re inviting you to join us by playing Lost Treasure!'
    WHERE identifier = 'wazdan:LostTreasure94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky 9™ introduces players to a colourful, retro world where single pixels can take on huge proportions, allowing them to reminisce about the good old days of the first arcade slot machines in the company of juicy fruits.'
    WHERE identifier = 'wazdan:Lucky9'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lucky 9™ introduces players to a colourful, retro world where single pixels can take on huge proportions, allowing them to reminisce about the good old days of the first arcade slot machines in the company of juicy fruits.'
    WHERE identifier = 'wazdan:Lucky994'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive in and explore what''s hidden in the depths of the ocean with the friendliest bunch of fish that are waiting to share their treasures with you!\r\n\r\nThe action of this 5-reel slot equipped with 243 ways to win takes place deep underwater. The gameplay is based on its Cascading Reels feature – drawing a winning combination makes the winning symbols pop and disappear and icons from above take their place to enable completing new winning paylines.'
    WHERE identifier = 'wazdan:LuckyFish'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Dive in and explore what''s hidden in the depths of the ocean with the friendliest bunch of fish that are waiting to share their treasures with you!The action of this 5-reel slot equipped with 243 ways to win takes place deep underwater. The gameplay is based on its Cascading Reels feature – drawing a winning combination makes the winning symbols pop and disappear and icons from above take their place to enable completing new winning paylines.'
    WHERE identifier = 'wazdan:LuckyFish94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try your luck and fill your pockets with real gold in this fantastic slot! Try your luck in Lucky Fortune and remember – fortune favours the brave!\r\n\r\nPiles of gold await for the lucky players in the enchanting online slot Lucky Fortune.'
    WHERE identifier = 'wazdan:LuckyFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Try your luck and fill your pockets with real gold in this fantastic slot! Try your luck in Lucky Fortune and remember – fortune favours the brave!Piles of gold await for the lucky players in the enchanting online slot Lucky Fortune.'
    WHERE identifier = 'wazdan:LuckyFortune94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep inside the Amazonian forest lies a hidden temple where a beautiful queen sits atop her throne, ruling over the animal kingdom. She''s known as the Lucky Queen and many visitors come before her to try and win over her favour as well as some of the fortune.'
    WHERE identifier = 'wazdan:LuckyQueen'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep inside the Amazonian forest lies a hidden temple where a beautiful queen sits atop her throne, ruling over the animal kingdom. She''s known as the Lucky Queen and many visitors come before her to try and win over her favour as well as some of the fortune.'
    WHERE identifier = 'wazdan:LuckyQueen94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multiply your luck with Lucky Reels™ and discover a slot that combines engaging special features that can be found in modern online slots with the old school feel of classic fruit machines.'
    WHERE identifier = 'wazdan:LuckyReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Multiply your luck with Lucky Reels™ and discover a slot that combines engaging special features that can be found in modern online slots with the old school feel of classic fruit machines.'
    WHERE identifier = 'wazdan:LuckyReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spring is upon us, and what better way to celebrate it than with an epic egg hunt in Magic Eggs?\r\nMagic Eggs is a cute spring-themed slot that will help players start the new season off with a bang. While this joyful 3-reel slot may seem simple at first glance, it is filled with egg-citement and sweet wins.'
    WHERE identifier = 'wazdan:MagicEggs'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spring is upon us, and what better way to celebrate it than with an epic egg hunt in Magic Eggs?Magic Eggs is a cute spring-themed slot that will help players start the new season off with a bang. While this joyful 3-reel slot may seem simple at first glance, it is filled with egg-citement and sweet wins.'
    WHERE identifier = 'wazdan:MagicEggs94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spin the reels and watch as magic fruits are forming winning combinations to shower you with juicy wins!\r\n\r\nMagic Fruits proves that simple solutions are the best. This classic 3-reel online slot equipped with 5 paylines has all it takes to make you feel nostalgic reminiscing about good old times with traditional slot machines.'
    WHERE identifier = 'wazdan:MagicFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reach out for the juiciest wins as the Magic Fruits 27 showers you with fruity symbols and fantastic bonuses!\r\n\r\nAnother take on the popular Magic Fruits series is equipped with 3-reels and as much as 27 paylines to bring you even more chances to win. Magic Fruits 27 is a classic fruity slot featuring many retro symbols that players appreciate – juicy fruits, bells, stars and sevens.'
    WHERE identifier = 'wazdan:MagicFruits27'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reach out for the juiciest wins as the Magic Fruits 27 showers you with fruity symbols and fantastic bonuses!Another take on the popular Magic Fruits series is equipped with 3-reels and as much as 27 paylines to bring you even more chances to win. Magic Fruits 27 is a classic fruity slot featuring many retro symbols that players appreciate – juicy fruits, bells, stars and sevens.'
    WHERE identifier = 'wazdan:MagicFruits2794'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your favourite magic fruits are back to bring you colourful and juicy fun with big wins and mouth-watering bonus!\r\n\r\nA new take on popular Magic Fruits series – this time with 4 reels! This online slot provides you with well-known fruity theme that so many players love. '
    WHERE identifier = 'wazdan:MagicFruits4'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Your favourite magic fruits are back to bring you colourful and juicy fun with big wins and mouth-watering bonus!A new take on popular Magic Fruits series – this time with 4 reels! This online slot provides you with well-known fruity theme that so many players love. '
    WHERE identifier = 'wazdan:MagicFruits494'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Fruits 4 Deluxe – a new take on the retro-style classic video slot that brings brighter and juicier fruits to catch!\r\n\r\nMagic Fruits 4 Deluxe features 4 reels equipped with 10 paylines. This online slot bursts with vibrant colours and smooth animations which contribute to a cheerful and fun atmosphere. '
    WHERE identifier = 'wazdan:MagicFruits4Deluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Fruits 4 Deluxe – a new take on the retro-style classic video slot that brings brighter and juicier fruits to catch!Magic Fruits 4 Deluxe features 4 reels equipped with 10 paylines. This online slot bursts with vibrant colours and smooth animations which contribute to a cheerful and fun atmosphere. '
    WHERE identifier = 'wazdan:MagicFruits4Deluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Many fruity symbols are waiting for you to spin the reels in this classic slot to offer you some juicy wins and an increasing number of paylines!\r\n\r\nAnother take on a successful series brings you even more chances to win big! A classic 4-reel slot Magic Fruits 81 is a continuation of Magic Star series that proved to be very popular among players. It shows just how appealing old-school slots are.'
    WHERE identifier = 'wazdan:MagicFruits81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Many fruity symbols are waiting for you to spin the reels in this classic slot to offer you some juicy wins and an increasing number of paylines!Another take on a successful series brings you even more chances to win big! A classic 4-reel slot Magic Fruits 81 is a continuation of Magic Star series that proved to be very popular among players. It shows just how appealing old-school slots are.'
    WHERE identifier = 'wazdan:MagicFruits8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spin the reels and watch as magic fruits are forming winning combinations to shower you with juicy wins!Magic Fruits proves that simple solutions are the best. This classic 3-reel online slot equipped with 5 paylines has all it takes to make you feel nostalgic reminiscing about good old times with traditional slot machines.'
    WHERE identifier = 'wazdan:MagicFruits94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Fruits Deluxe – an updated version of a classic slot overflowing with juicy fruits brings more chances to win!\r\n\r\nAnother take on a successful series Magic Fruits Deluxe is a perfect choice for the fans of classic, old-school slots. Vibrant colours and a retro vibe of this 3-reel online slot equipped with 5 paylines ensure a fantastic gaming experience.'
    WHERE identifier = 'wazdan:MagicFruitsDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Fruits Deluxe – an updated version of a classic slot overflowing with juicy fruits brings more chances to win!Another take on a successful series Magic Fruits Deluxe is a perfect choice for the fans of classic, old-school slots. Vibrant colours and a retro vibe of this 3-reel online slot equipped with 5 paylines ensure a fantastic gaming experience.'
    WHERE identifier = 'wazdan:MagicFruitsDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for the elusive vintage feel? Stop your search and enjoy the online slot Magic Hot! No-frills classic fruit machine experience is the essence of Magic Hot as its simplicity and charm create a perfect combination for those who seek retro-styled gameplay.'
    WHERE identifier = 'wazdan:MagicHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a step inside the magnificent castle to experience real wonders as the wizard magically increases your wins!\r\n\r\nThe classic online slot has been updated and now Magic Hot 4 has 4 reels to increase your chances of winning! This old-school game features 10 paylines and various retro symbols such as oranges, plums, pears, bells, raspberries, watermelons, grapes and sevens.'
    WHERE identifier = 'wazdan:MagicHot4'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a step inside the magnificent castle to experience real wonders as the wizard magically increases your wins!The classic online slot has been updated and now Magic Hot 4 has 4 reels to increase your chances of winning! This old-school game features 10 paylines and various retro symbols such as oranges, plums, pears, bells, raspberries, watermelons, grapes and sevens.'
    WHERE identifier = 'wazdan:MagicHot494'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Hot 4 Deluxe – an upgraded classic that will take you to a land full of dark magic!\r\n\r\nJust as the online slot''s name suggests, Magic Hot 4 Deluxe offers a set of 4 reels with 18 paylines.'
    WHERE identifier = 'wazdan:MagicHot4Deluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Hot 4 Deluxe – an upgraded classic that will take you to a land full of dark magic!Just as the online slot''s name suggests, Magic Hot 4 Deluxe offers a set of 4 reels with 18 paylines.'
    WHERE identifier = 'wazdan:MagicHot4Deluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Looking for the elusive vintage feel? Stop your search and enjoy the online slot Magic Hot! No-frills classic fruit machine experience is the essence of Magic Hot as its simplicity and charm create a perfect combination for those who seek retro-styled gameplay.'
    WHERE identifier = 'wazdan:MagicHot94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unearthly power of the magic ring is seeping out onto the reels of Magic of the Ring! Discover the true power of the enchanted ring and use it to your benefit and gain access to unearthly riches!\r\n\r\nMagic of the Ring is a significant game in our portfolio that has time and again proved to be one of the favourite choices among players. '
    WHERE identifier = 'wazdan:MagicOfTheRing'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Unearthly power of the magic ring is seeping out onto the reels of Magic of the Ring! Discover the true power of the enchanted ring and use it to your benefit and gain access to unearthly riches!Magic of the Ring is a significant game in our portfolio that has time and again proved to be one of the favourite choices among players. '
    WHERE identifier = 'wazdan:MagicOfTheRing94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A few drops of Unique Wazdan Features, a pinch of magic, a handful of bonus features and… BOOM! We''ve just created a potion for a perfect online slot!'
    WHERE identifier = 'wazdan:MagicoftheRingDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A few drops of Unique Wazdan Features, a pinch of magic, a handful of bonus features and… BOOM! We''ve just created a potion for a perfect online slot!'
    WHERE identifier = 'wazdan:MagicOfTheRingDeluxertp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Poker can do real wonders with its marvellous special features – play the game and see how the magic works when your wins increase!\r\n\r\nFans of poker – and surely there are many of them – will certainly enjoy playing Magic Poker as well. It''s a variation of an all-time favourite card game that follows traditional rules but is additionally equipped with a marvellous twist to make the gameplay more exciting and increase your wins. Attractive animation with its vivid colours adds to the enjoyment and render this game eye-catching and enchanting. What''s more, graphics create unique magical atmosphere that differentiates Magic Poker from other video poker games. Waste no more time and place your bets!'
    WHERE identifier = 'wazdan:MagicPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Magic Poker can do real wonders with its marvellous special features – play the game and see how the magic works when your wins increase!Fans of poker – and surely there are many of them – will certainly enjoy playing Magic Poker as well. It''s a variation of an all-time favourite card game that follows traditional rules but is additionally equipped with a marvellous twist to make the gameplay more exciting and increase your wins. Attractive animation with its vivid colours adds to the enjoyment and render this game eye-catching and enchanting. What''s more, graphics create unique magical atmosphere that differentiates Magic Poker from other video poker games. Waste no more time and place your bets!'
    WHERE identifier = 'wazdan:MagicPoker94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spin the reels of this colourful retro slot and find the star symbol and experience the magic – great fun and big win guaranteed!\r\n\r\nA beginning of a highly successful series, Magic Stars is a retro 3-reel online slot with 5 paylines that proves just how well-liked classic slots are'
    WHERE identifier = 'wazdan:MagicStars'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you enjoy playing any of your online slots featured in the Magic Stars series? If so, Magic Stars 3 is a perfect choice!\r\n\r\nMagic Stars 3 is equipped with 3 reels and 5 fixed paylines. This online slot takes you on a beautiful journey far into outer space. The balanced colours of the game, smooth animations and a catchy tune playing in the background make your time with Magic Stars 3 a wonderful experience.'
    WHERE identifier = 'wazdan:MagicStars3'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Do you enjoy playing any of your online slots featured in the Magic Stars series? If so, Magic Stars 3 is a perfect choice!Magic Stars 3 is equipped with 3 reels and 5 fixed paylines. This online slot takes you on a beautiful journey far into outer space. The balanced colours of the game, smooth animations and a catchy tune playing in the background make your time with Magic Stars 3 a wonderful experience.'
    WHERE identifier = 'wazdan:MagicStars394'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sit back and enjoy the spectacular view as Magic Stars 5 takes you on an unparalleled trip to a distant universe filled to the brim with valuable crystals.\r\n\r\nMagic Stars 5 will keep you on the edge of your seat as you spin its 5 reels equipped with 20 paylines. '
    WHERE identifier = 'wazdan:MagicStars5'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sit back and enjoy the spectacular view as Magic Stars 5 takes you on an unparalleled trip to a distant universe filled to the brim with valuable crystals.Magic Stars 5 will keep you on the edge of your seat as you spin its 5 reels equipped with 20 paylines. '
    WHERE identifier = 'wazdan:MagicStars594'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever dreamt of going way beyond the sky and observing the magnificent universe? With Magic Stars 6, you can do it from the comfort of your home!\r\n\r\nMagic Stars 6 will take you on a trip of your life with its 6 reels and 20 action-packed paylines and colourful symbols.'
    WHERE identifier = 'wazdan:MagicStars6'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Have you ever dreamt of going way beyond the sky and observing the magnificent universe? With Magic Stars 6, you can do it from the comfort of your home!Magic Stars 6 will take you on a trip of your life with its 6 reels and 20 action-packed paylines and colourful symbols.'
    WHERE identifier = 'wazdan:MagicStars694'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You simply cannot resist our Magic Stars series so Magic Stars 9 has quickly gained popularity among both casino operators and devoted players. Discover what it has to offer and join the fanbase – an endless adventure awaits!'
    WHERE identifier = 'wazdan:MagicStars9'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Spin the reels of this colourful retro slot and find the star symbol and experience the magic – great fun and big win guaranteed!A beginning of a highly successful series, Magic Stars is a retro 3-reel online slot with 5 paylines that proves just how well-liked classic slots are'
    WHERE identifier = 'wazdan:MagicStars94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You simply cannot resist our Magic Stars series so Magic Stars 9 has quickly gained popularity among both casino operators and devoted players. Discover what it has to offer and join the fanbase – an endless adventure awaits!'
    WHERE identifier = 'wazdan:MagicStars9rtp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take aim and fire to get fantastic special features and increase your wins with Magic Target!\r\n\r\nThis 5-reel online slot is a real bomb! Magic Target features 20 paylines and traditional cartoon-like symbols that enhance the game''s retro atmosphere. Juicy fruits, golden crowns, bells, bombs, sevens and jokers are waiting to help you win so spin the reels! Colourful graphics make Magic Target very aesthetically-pleasing with the golden stars hovering on the warm red background.'
    WHERE identifier = 'wazdan:MagicTarget'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take aim and fire to get fantastic special features and increase your wins with Magic Target!This 5-reel online slot is a real bomb! Magic Target features 20 paylines and traditional cartoon-like symbols that enhance the game''s retro atmosphere. Juicy fruits, golden crowns, bells, bombs, sevens and jokers are waiting to help you win so spin the reels! Colourful graphics make Magic Target very aesthetically-pleasing with the golden stars hovering on the warm red background.'
    WHERE identifier = 'wazdan:MagicTarget94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feature-packed classic is back – now with updated audiovisuals that take Magic Target Deluxe to the next level! Ready, aim, fire!\r\n\r\nMagic Target Deluxe is a reimagination of the popular explosive online slot from our portfolio. The familiar gameplay and special features have been left untouched, but everything else is fresh and new! Lively animations, vibrant colours, updated theme and a pleasant soundtrack make it hard to resist the lure of this game. Take advantage of the Wild Symbol represented by a mischievous jester to complete more winning combinations and land at least three bomb icons acting as the Scatter Symbol to trigger 10 Free Spins.'
    WHERE identifier = 'wazdan:MagicTargetDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feature-packed classic is back – now with updated audiovisuals that take Magic Target Deluxe to the next level! Ready, aim, fire!Magic Target Deluxe is a reimagination of the popular explosive online slot from our portfolio. The familiar gameplay and special features have been left untouched, but everything else is fresh and new! Lively animations, vibrant colours, updated theme and a pleasant soundtrack make it hard to resist the lure of this game. Take advantage of the Wild Symbol represented by a mischievous jester to complete more winning combinations and land at least three bomb icons acting as the Scatter Symbol to trigger 10 Free Spins.'
    WHERE identifier = 'wazdan:MagicTargetDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ancient pyramids, bloody sacrificial rituals and mountains of gold – these are some of the things often associated with the Mayan culture. Our casino game Mayan RitualTM gives players an opportunity to summon the power of gods of fortune and ask them to make it rain gold!'
    WHERE identifier = 'wazdan:MayanRitual'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ancient pyramids, bloody sacrificial rituals and mountains of gold – these are some of the things often associated with the Mayan culture. Our casino game Mayan RitualTM gives players an opportunity to summon the power of gods of fortune and ask them to make it rain gold!'
    WHERE identifier = 'wazdan:MayanRitual94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With Miami Beach summer can last all year long! Imagine sandy beaches, blazing sun, tasty drinks, beautiful girls… and some hot special bonuses to top it all!'
    WHERE identifier = 'wazdan:MiamiBeach'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'With Miami Beach summer can last all year long! Imagine sandy beaches, blazing sun, tasty drinks, beautiful girls… and some hot special bonuses to top it all!'
    WHERE identifier = 'wazdan:MiamiBeach94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Midnight in Tokyo is an action-packed slot game with 5 reels and 243+ ways to win that invites you to join a group of cat warriors as they hit the streets of Tokyo!\r\n\r\nWhile enjoying the reels spinning among the skyscraper-filled skyline of this lively cat city, you can Hold the Jackpot by collecting Geisha and Moon symbols, awarding Jackpots and cash prizes. With a bit of luck you can win both Major and Grand Jackpots! How claw-some is that?'
    WHERE identifier = 'wazdan:MidnightinTokyo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Midnight in Tokyo is an action-packed slot game with 5 reels and 243+ ways to win that invites you to join a group of cat warriors as they hit the streets of Tokyo!While enjoying the reels spinning among the skyscraper-filled skyline of this lively cat city, you can Hold the Jackpot by collecting Geisha and Moon symbols, awarding Jackpots and cash prizes. With a bit of luck you can win both Major and Grand Jackpots! How claw-some is that?'
    WHERE identifier = 'wazdan:MidnightinTokyo94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hop on the train and go on an adventure in the Wild West with Mystery Jack and fill your pockets with mystery wins!'
    WHERE identifier = 'wazdan:MysteryJack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hop on the train and go on an adventure in the Wild West with Mystery Jack and fill your pockets with mystery wins!'
    WHERE identifier = 'wazdan:MysteryJack94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head to the Old West where train heists, bank robberies and wild parties at saloons were as common as dirt!\r\n\r\nThe action of the popular Mystery Jack Deluxe takes place in a hot desert where you''ll find the slot''s 3 reels equipped with 27 action-packed paylines. The game looks great and its audiovisuals perfectly match the theme. Give it a spin and land fruit symbols accompanied by bells, sevens, sheriff''s badges, red bulls, BARs, Jacks as well as Scatter and Mystery Symbols. As opposed to most 3-reel online slots, Mystery Jack Deluxe offers a variety of bonus features. Draw 3 Mystery Symbols scattered on the reels and you''ll trigger the Mystery Bonus that awards a random cash prize that ranges 1-500x stake. You can also activate 9 Free Spins by landing 3 Scatter Symbols anywhere on the reels. Jack himself acts as a Wild Symbol that replaces other symbols included in the game apart from the Mystery and Scatter Symbol.'
    WHERE identifier = 'wazdan:MysteryJackDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head to the Old West where train heists, bank robberies and wild parties at saloons were as common as dirt!The action of the popular Mystery Jack Deluxe takes place in a hot desert where you''ll find the slot''s 3 reels equipped with 27 action-packed paylines. The game looks great and its audiovisuals perfectly match the theme. Give it a spin and land fruit symbols accompanied by bells, sevens, sheriff''s badges, red bulls, BARs, Jacks as well as Scatter and Mystery Symbols. As opposed to most 3-reel online slots, Mystery Jack Deluxe offers a variety of bonus features. Draw 3 Mystery Symbols scattered on the reels and you''ll trigger the Mystery Bonus that awards a random cash prize that ranges 1-500x stake. You can also activate 9 Free Spins by landing 3 Scatter Symbols anywhere on the reels. Jack himself acts as a Wild Symbol that replaces other symbols included in the game apart from the Mystery and Scatter Symbol.'
    WHERE identifier = 'wazdan:MysteryJackDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This incredible slot invites you on a futuristic neon-lit adventure where neon lights shine brightly on the busy streets. Neon City™ – a place where boundaries don''t exist!'
    WHERE identifier = 'wazdan:NeonCity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This incredible slot invites you on a futuristic neon-lit adventure where neon lights shine brightly on the busy streets. Neon City™ – a place where boundaries don''t exist!'
    WHERE identifier = 'wazdan:NeonCity94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild party in a night club awaits – bright neons will light up the way to some crazy wins so spin the reels and get wild!'
    WHERE identifier = 'wazdan:NightClub81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild party in a night club awaits – bright neons will light up the way to some crazy wins so spin the reels and get wild!'
    WHERE identifier = 'wazdan:NightClub8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Power of Gods™: Egypt invites players to step into a mythical world of Ancient Egypt with a plethora of powerful gods, and even more precious gold. A world of 243 ways to win, generous bonuses, and incredible adventures, where fate is decided by Ra, Sobek, Isis and Bastet…'
    WHERE identifier = 'wazdan:PowerofGodsEgypt'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Power of Gods™: Egypt invites players to step into a mythical world of Ancient Egypt with a plethora of powerful gods, and even more precious gold. A world of 243 ways to win, generous bonuses, and incredible adventures, where fate is decided by Ra, Sobek, Isis and Bastet…'
    WHERE identifier = 'wazdan:PowerofGodsEgypt94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Power of Gods™: Hades invites players to cross the Styx river and enter the underworld in the thrilling Hold the Jackpot bonus round, where the mighty God of the Dead helps players collect massive wins up to a whopping 5000x player''s bet!'
    WHERE identifier = 'wazdan:PowerofGodsHades'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Power of Gods™: Hades invites players to cross the Styx river and enter the underworld in the thrilling Hold the Jackpot bonus round, where the mighty God of the Dead helps players collect massive wins up to a whopping 5000x player''s bet!'
    WHERE identifier = 'wazdan:PowerofGodsHades94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Hold the Jackpot bonus is triggeered by 6 Bonus symbols, however, Sticky Bonus symbols can be used to increase players'' chances of activating the bonus round. Once players enter the lair of the snake-haired Gorgon, they have to collect various Bonus symbols. To avoid being turned into stone by Medusa''s gaze, players have to use mirror-like shields acting as Standard Bonus symbols, awarding prizes ranging from 1x-10x, 12x, and 15x their bet. Special Bonus symbols include Jackpot symbols awarding corresponding Mini, Minor, and Major Jackpots, Medusa symbols accumulating all values from Standard Bonus symbols and Medusa symbols, Mystery symbols transforming into any other Bonus symbol, and Medusa Mystery symbols that guarantee a Jackpot win, as they can only transform into one of the Jackpot symbols. Collecting all 15 Bonus symbols of any type awards the Grand Jackpot of 2000x player''s bet and all prizes are summed up at the end of the bonus round for a massive total win.\r\n'
    WHERE identifier = 'wazdan:PowerofGodsMedusa'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Hold the Jackpot bonus is triggeered by 6 Bonus symbols, however, Sticky Bonus symbols can be used to increase players'' chances of activating the bonus round. Once players enter the lair of the snake-haired Gorgon, they have to collect various Bonus symbols. To avoid being turned into stone by Medusa''s gaze, players have to use mirror-like shields acting as Standard Bonus symbols, awarding prizes ranging from 1x-10x, 12x, and 15x their bet. Special Bonus symbols include Jackpot symbols awarding corresponding Mini, Minor, and Major Jackpots, Medusa symbols accumulating all values from Standard Bonus symbols and Medusa symbols, Mystery symbols transforming into any other Bonus symbol, and Medusa Mystery symbols that guarantee a Jackpot win, as they can only transform into one of the Jackpot symbols. Collecting all 15 Bonus symbols of any type awards the Grand Jackpot of 2000x player''s bet and all prizes are summed up at the end of the bonus round for a massive total win.'
    WHERE identifier = 'wazdan:PowerofGodsMedusa94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The most powerful members of the Greek pantheon invite you to their great hall on Mount Olympus. Witness their true potential and experience the full glory of Power of Gods™: The Pantheon!'
    WHERE identifier = 'wazdan:PowerofGodsThePantheon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The most powerful members of the Greek pantheon invite you to their great hall on Mount Olympus. Witness their true potential and experience the full glory of Power of Gods™: The Pantheon!'
    WHERE identifier = 'wazdan:PowerofGodsThePantheon94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Set off on a journey to find precious pearls, protected by the Dragon King and Hold the Jackpot in Prosperity Pearls!\r\n\r\nProsperity Pearls is a visually striking 25-reel oriental slot, featuring the popular Hold the Jackpot bonus round with new, thrilling features and four jackpots up for grabs. According to Chinese mythology, pearls are a secret weapon hidden on the bottom of the ocean and protected by the Dragon King. In fact, these precious pearls can be found in the thrilling Hold the Jackpot bonus round!'
    WHERE identifier = 'wazdan:ProsperityPearls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Set off on a journey to find precious pearls, protected by the Dragon King and Hold the Jackpot in Prosperity Pearls!Prosperity Pearls is a visually striking 25-reel oriental slot, featuring the popular Hold the Jackpot bonus round with new, thrilling features and four jackpots up for grabs. According to Chinese mythology, pearls are a secret weapon hidden on the bottom of the ocean and protected by the Dragon King. In fact, these precious pearls can be found in the thrilling Hold the Jackpot bonus round!'
    WHERE identifier = 'wazdan:ProsperityPearls94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reel Hero™ is here, offering players a one-of-a-kind opportunity to feel like one of the superheroes. Players can enter the futuristic world of this 5-reel, 20-payline online slot and travel to another planet to join these four brave heroes and save the universe.'
    WHERE identifier = 'wazdan:ReelHero'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Reel Hero™ is here, offering players a one-of-a-kind opportunity to feel like one of the superheroes. Players can enter the futuristic world of this 5-reel, 20-payline online slot and travel to another planet to join these four brave heroes and save the universe.'
    WHERE identifier = 'wazdan:ReelHero94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the wonderful world of Reel Joke™! Get ready to be filled with joy, say hello to your new friend, a jester named Joke, and celebrate wins in a way we all love… with fireworks!\r\n\r\nSome slots offer complex bonus systems and multi-layered features that at times might seem a bit confusing, especially when you just want to get a bit of well-deserved entertainment. That''s why in Reel Joke™ simplicity is key. 6 reels, 20 paylines, a classic theme, a couple of well-designed bonuses, and a funny Joke is more than enough to maximize the enjoyment and minimize complications.'
    WHERE identifier = 'wazdan:ReelJoke'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the wonderful world of Reel Joke™! Get ready to be filled with joy, say hello to your new friend, a jester named Joke, and celebrate wins in a way we all love… with fireworks!Some slots offer complex bonus systems and multi-layered features that at times might seem a bit confusing, especially when you just want to get a bit of well-deserved entertainment. That''s why in Reel Joke™ simplicity is key. 6 reels, 20 paylines, a classic theme, a couple of well-designed bonuses, and a funny Joke is more than enough to maximize the enjoyment and minimize complications.'
    WHERE identifier = 'wazdan:ReelJoke94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sarah and Will invite everyone to experience an archaeological adventure of a lifetime with their Relic Hunters and the Book of Faith™ slot!A truly thrilling experience awaits in the depths of an ancient Egyptian pyramid, where unimaginable riches of a dead pharaoh lie guarded by an army of mummies. Relic Hunters™ and the Book of Faith is a 6-reel, 3-row and 20-payline video slot packed to the brim with a selection of special features: two Wild Symbols, Bastet Spins Bonus and Pyramid Exploration Bonus – both of these bonuses are activated with special accumulating symbols – as well as Free Spins with an Expanding Bonus Symbol and Walking Wilds. Each of these bonuses brings its own flavour to the game and enhances the gameplay experience with various rules and unique functionality. Exploring dark corridors while avoiding hidden traps has never been so engaging!'
    WHERE identifier = 'wazdan:RelicHuntersBookofFaith'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sarah and Will invite everyone to experience an archaeological adventure of a lifetime with their Relic Hunters and the Book of Faith™ slot!A truly thrilling experience awaits in the depths of an ancient Egyptian pyramid, where unimaginable riches of a dead pharaoh lie guarded by an army of mummies. Relic Hunters™ and the Book of Faith is a 6-reel, 3-row and 20-payline video slot packed to the brim with a selection of special features: two Wild Symbols, Bastet Spins Bonus and Pyramid Exploration Bonus – both of these bonuses are activated with special accumulating symbols – as well as Free Spins with an Expanding Bonus Symbol and Walking Wilds. Each of these bonuses brings its own flavour to the game and enhances the gameplay experience with various rules and unique functionality. Exploring dark corridors while avoiding hidden traps has never been so engaging!'
    WHERE identifier = 'wazdan:RelicHuntersBookofFaith94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'As bets are placed and dice are rolled, two golden beasts are writhing on the table of Sic Bo Dragons. These magnificent dragons, creatures associated with power and fortune, await to grant players good luck and big wins.'
    WHERE identifier = 'wazdan:SicBoDragons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic looks, juicy fruits, stars and sevens along with retro atmosphere – fans of traditional slots will love Sizzling 777!'
    WHERE identifier = 'wazdan:Sizzling777'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Classic looks, juicy fruits, stars and sevens along with retro atmosphere – fans of traditional slots will love Sizzling 777!'
    WHERE identifier = 'wazdan:Sizzling77794'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sizzling 777 Deluxe – give it a spin and discover the excellent combination of an old-school video slot and state-of-the-art technology. Ouch! Be careful not to burn yourself!'
    WHERE identifier = 'wazdan:Sizzling777Deluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sizzling 777 Deluxe – give it a spin and discover the excellent combination of an old-school video slot and state-of-the-art technology. Ouch! Be careful not to burn yourself!'
    WHERE identifier = 'wazdan:Sizzling777Deluxertp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sizzling Bells™ is a modern take on classic slot machines, featuring stunning bells, lucky stars, juicy fruits, and huge Jackpots.'
    WHERE identifier = 'wazdan:SIzzlingBells'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sizzling Bells™ is a modern take on classic slot machines, featuring stunning bells, lucky stars, juicy fruits, and huge Jackpots.'
    WHERE identifier = 'wazdan:SIzzlingBells94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take your players on an intergalactic journey to Sizzling Moon™. This new adventure offers huge prizes, exciting gameplay, Sticky Bonus symbols, and the thrilling Hold the Jackpot bonus round, where lucky players can win the massive Moon Jackpot. What a sizzling hot slot!'
    WHERE identifier = 'wazdan:SizzlingMoon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take your players on an intergalactic journey to Sizzling Moon™. This new adventure offers huge prizes, exciting gameplay, Sticky Bonus symbols, and the thrilling Hold the Jackpot bonus round, where lucky players can win the massive Moon Jackpot. What a sizzling hot slot!'
    WHERE identifier = 'wazdan:SizzlingMoon94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head downstairs to a basement filled to the brim with sweet and mouthwatering preserves and launch Slot Jam for some tasty wins! With Slot Jam, there''s no way you''ll walk away hungry!\r\n\r\nSlot Jam is a one-of-a-kind 4-reel, 9-payline online slot that offers a unique theme combined with excellent graphics and a wide range of special features. The action of the game takes place in a cellar that holds a variety of delightful preserves. Each and every symbol included in this online slot relates to the theme as they consist of strawberry, orange, watermelon, grapes, plum, pear, basket, jam and pie icons. Beneath the reels, you''ll find a user-friendly control panel that allows you to spin the reels, adjust the speed of the game, set the coin value and more.'
    WHERE identifier = 'wazdan:SlotJam'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head downstairs to a basement filled to the brim with sweet and mouthwatering preserves and launch Slot Jam for some tasty wins! With Slot Jam, there''s no way you''ll walk away hungry!Slot Jam is a one-of-a-kind 4-reel, 9-payline online slot that offers a unique theme combined with excellent graphics and a wide range of special features. The action of the game takes place in a cellar that holds a variety of delightful preserves. Each and every symbol included in this online slot relates to the theme as they consist of strawberry, orange, watermelon, grapes, plum, pear, basket, jam and pie icons. Beneath the reels, you''ll find a user-friendly control panel that allows you to spin the reels, adjust the speed of the game, set the coin value and more.'
    WHERE identifier = 'wazdan:SlotJam94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'An original and exceptional slot that embraces what''s best in the retro style. It will appeal to those players who appreciate innovative audiovisual solutions. During the game, players have the generous number of 729 ways to win at their disposal. Incredible bonuses activated by pumpkin-speakers give the player – who gets to observe the process of collecting the accumulator symbols – maximum satisfaction. Those tasty pumpkin-speakers grow to a huge size to inform the players that they''ve activated a fantastic bonus. '
    WHERE identifier = 'wazdan:SonicReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'An original and exceptional slot that embraces what''s best in the retro style. It will appeal to those players who appreciate innovative audiovisual solutions. During the game, players have the generous number of 729 ways to win at their disposal. Incredible bonuses activated by pumpkin-speakers give the player – who gets to observe the process of collecting the accumulator symbols – maximum satisfaction. Those tasty pumpkin-speakers grow to a huge size to inform the players that they''ve activated a fantastic bonus. '
    WHERE identifier = 'wazdan:SonicReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Since the universe is infinite, these crystals can take an infinite number of shapes and sizes! Discover the most unique ones and collect them on the colourful reels of Space Gem™!'
    WHERE identifier = 'wazdan:SpaceGem'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Since the universe is infinite, these crystals can take an infinite number of shapes and sizes! Discover the most unique ones and collect them on the colourful reels of Space Gem™!'
    WHERE identifier = 'wazdan:SpaceGem94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get your gear ready and fasten your seatbelts because you''re about to travel with the speed of light to a distant galaxy that holds unknown riches!\r\n\r\nSpace Spins unfolds a new universe packed with minerals out of this world. This 6-reel online slot features a hefty amount of 40 paylines. The action of the game takes place in a spaceship that drifts in the outer space where you''ll find a variety of precious crystals. Take the reels of this immersive online slot for a spin and use its Space Pile Feature to your advantage. With each spin, a Space Pile Symbol is drawn and a random number of reels feature a stack of the drawn symbol. Space Spins also gives you the chance to activate up to 25 Free Spins by drawing a minimum of 3 Scatter Symbols anywhere on the reels. Before the Free Spins round begins, a Space Pile Symbol is drawn and it''s active during the whole duration of the feature. Are you ready for such an out-of-this-world experience?'
    WHERE identifier = 'wazdan:SpaceSpins'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get your gear ready and fasten your seatbelts because you''re about to travel with the speed of light to a distant galaxy that holds unknown riches!Space Spins unfolds a new universe packed with minerals out of this world. This 6-reel online slot features a hefty amount of 40 paylines. The action of the game takes place in a spaceship that drifts in the outer space where you''ll find a variety of precious crystals. Take the reels of this immersive online slot for a spin and use its Space Pile Feature to your advantage. With each spin, a Space Pile Symbol is drawn and a random number of reels feature a stack of the drawn symbol. Space Spins also gives you the chance to activate up to 25 Free Spins by drawing a minimum of 3 Scatter Symbols anywhere on the reels. Before the Free Spins round begins, a Space Pile Symbol is drawn and it''s active during the whole duration of the feature. Are you ready for such an out-of-this-world experience?'
    WHERE identifier = 'wazdan:SpaceSpins94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ladies and gentleman, get ready for an unforgettable experience with colourful rubies, emeralds, sapphires and other precious jewels! Spectrum is a gem of an slot that delivers a full spectacle of wonderful thrills!'
    WHERE identifier = 'wazdan:Spectrum'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Ladies and gentleman, get ready for an unforgettable experience with colourful rubies, emeralds, sapphires and other precious jewels! Spectrum is a gem of an slot that delivers a full spectacle of wonderful thrills!'
    WHERE identifier = 'wazdan:Spectrum94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the heat of the Sun of Fortune and warm up to the popular Hold the Jackpot bonus!\r\n\r\nThis innovative slot, featuring 16 independent reels on a 4x4 matrix grid offers a dynamic experience spiced with oriental themed symbols of majestic dragons, remarkable dragon turtles, colorful koi fish, one-of-a-kind Chinese phoenixes, useful Wilds, and a true shining star of the game – the golden sun Bonus symbol itself.\r\n\r\nSo, would you like to know, how to activate the Hold the Jackpot bonus that makes waves among our fans across the globe?'
    WHERE identifier = 'wazdan:SunofFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Feel the heat of the Sun of Fortune and warm up to the popular Hold the Jackpot bonus!This innovative slot, featuring 16 independent reels on a 4x4 matrix grid offers a dynamic experience spiced with oriental themed symbols of majestic dragons, remarkable dragon turtles, colorful koi fish, one-of-a-kind Chinese phoenixes, useful Wilds, and a true shining star of the game – the golden sun Bonus symbol itself.So, would you like to know, how to activate the Hold the Jackpot bonus that makes waves among our fans across the globe?'
    WHERE identifier = 'wazdan:SunofFortune94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sun of Fortune is one of the most popular slots in our Hold the Jackpot collection and it has been given a makeover in time for the Christmas season. There''s no better way to get into the festive spirit than playing Sun of Fortune Xmas Edition, offering wins up to 1450x player''s bet!'
    WHERE identifier = 'wazdan:SunOfFortuneXmasEdition'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This slot is full of scorching heat and blazing flames, but don''t worry – you won''t get burned! Instead, you have a chance to gain some hot prizes!'
    WHERE identifier = 'wazdan:SuperHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This slot is full of scorching heat and blazing flames, but don''t worry – you won''t get burned! Instead, you have a chance to gain some hot prizes!'
    WHERE identifier = 'wazdan:SuperHot94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel back in time with Telly Reels™ and step inside a retro world of old-school TVs where the multitude of colours and bonuses will make your head spin! These colourful reels are filled with fruits and other classic symbols which bring the juiciest wins as well as a little bit of nostalgia. Reminisce about the good old days and experience a unique thrill.'
    WHERE identifier = 'wazdan:TellyReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel back in time with Telly Reels™ and step inside a retro world of old-school TVs where the multitude of colours and bonuses will make your head spin! These colourful reels are filled with fruits and other classic symbols which bring the juiciest wins as well as a little bit of nostalgia. Reminisce about the good old days and experience a unique thrill.'
    WHERE identifier = 'wazdan:TellyReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this online slot, you will find yourself in a world full of colourful blocks, explosions, golden coins and more! Spin the reels and activate fantastic bonuses to win big!\r\n\r\nCube Mania comes with simple, yet nicely executed audiovisuals and a selection of engaging special features that will keep you entertained for a long time! This 4-reel online slot features classic card symbols – from 9s to Aces – that elevate the retro feel adored by many players. Vibrant graphics make the game very eye-pleasing and fun to play, while 9 winning lines increase your chances of landing a winning combination. However, fantastic special bonuses are what really distinguishes this slot.'
    WHERE identifier = 'wazdan:TetriMania'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In this online slot, you will find yourself in a world full of colourful blocks, explosions, golden coins and more! Spin the reels and activate fantastic bonuses to win big!Cube Mania comes with simple, yet nicely executed audiovisuals and a selection of engaging special features that will keep you entertained for a long time! This 4-reel online slot features classic card symbols – from 9s to Aces – that elevate the retro feel adored by many players. Vibrant graphics make the game very eye-pleasing and fun to play, while 9 winning lines increase your chances of landing a winning combination. However, fantastic special bonuses are what really distinguishes this slot.'
    WHERE identifier = 'wazdan:TetriMania94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you into retro gaming? Does forming a solid horizontal line without gaps using blocks of cubes sound familiar? If the answer is yes, then Cube Mania Deluxe™ is an absolute must!'
    WHERE identifier = 'wazdan:TetriManiaDeluxe'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Are you into retro gaming? Does forming a solid horizontal line without gaps using blocks of cubes sound familiar? If the answer is yes, then Cube Mania Deluxe™ is an absolute must!'
    WHERE identifier = 'wazdan:TetriManiaDeluxe94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Three Cards is an interesting variant of a classic poker game – you''re dealt only 3 cards. So if you enjoy playing traditional poker, you should also give it a chance!'
    WHERE identifier = 'wazdan:ThreeCards'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Three Cards is an interesting variant of a classic poker game – you''re dealt only 3 cards. So if you enjoy playing traditional poker, you should also give it a chance!'
    WHERE identifier = 'wazdan:ThreeCards94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'No need to learn magic spells to increase your chances of winning – Triple Star is there for you with spellbinding special features!\r\n\r\nTake a classic slot with retro symbols, add a bit of magic and what you''ll get is Triple Star. This 5-reel online slot with 20 paylines will surely enchant every player – just don''t get startled by a spider sneaking around!'
    WHERE identifier = 'wazdan:TripleStar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'No need to learn magic spells to increase your chances of winning – Triple Star is there for you with spellbinding special features!Take a classic slot with retro symbols, add a bit of magic and what you''ll get is Triple Star. This 5-reel online slot with 20 paylines will surely enchant every player – just don''t get startled by a spider sneaking around!'
    WHERE identifier = 'wazdan:TripleStar94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Attractive prizes are waiting for you to spin the reels of the classic fruity slot! Minimalism and simplicity of this game ensure that nothing distracts you from watching your counter increase.'
    WHERE identifier = 'wazdan:TurboPlay'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Attractive prizes are waiting for you to spin the reels of the classic fruity slot! Minimalism and simplicity of this game ensure that nothing distracts you from watching your counter increase.'
    WHERE identifier = 'wazdan:TurboPlay94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Turbo Poker will have leave on fire as you get to experience easy and fun gameplay along with hot wins!\r\n\r\nEvery fan of online card games will surely enjoy Turbo Poker thanks to its simple rules and appealing look. This fast-paced and intuitive game promises great fun. There''s no place for boredom here! It''s easy to grasp the rules as they are quite straightforward to make sure both novice and seasoned players can enjoy Turbo Poker. And the animation is bound to make you feel hot as fiery graphics with blazing flames and warm colours additionally enhance the whole experience and make your time with Turbo Poker even more exciting. So don''t wait any longer and place your bets and get ready to win very fast!'
    WHERE identifier = 'wazdan:TurboPoker'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Turbo Poker will have leave on fire as you get to experience easy and fun gameplay along with hot wins!Every fan of online card games will surely enjoy Turbo Poker thanks to its simple rules and appealing look. This fast-paced and intuitive game promises great fun. There''s no place for boredom here! It''s easy to grasp the rules as they are quite straightforward to make sure both novice and seasoned players can enjoy Turbo Poker. And the animation is bound to make you feel hot as fiery graphics with blazing flames and warm colours additionally enhance the whole experience and make your time with Turbo Poker even more exciting. So don''t wait any longer and place your bets and get ready to win very fast!'
    WHERE identifier = 'wazdan:TurboPoker94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover treasures hidden deep inside the enchanted forest, collect magical unicorns and Hold the Jackpot with Unicorn Reels, a 5-reel, 10-payline slot that''s as unique as a unicorn itself!\r\n\r\nLet the search for Jackpots begin! Catch at least 5 Unicorn symbols to trigger the Unicorn Jackpot Game and find as many Unicorns as possible for the biggest wins. Played on a 5x5 grid featuring 25 separate fields, the bonus round starts with 3 re-spins, and with each new Unicorn that lands on the reels their number resets to 3. Also, each collected Unicorn takes you to a higher reward, with Minor and Major Jackpots available along the way. The magnificent Grand Jackpot of 1000x your stake is also up for grabs for those who collect all 25 Unicorns!'
    WHERE identifier = 'wazdan:UnicornReels'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Discover treasures hidden deep inside the enchanted forest, collect magical unicorns and Hold the Jackpot with Unicorn Reels, a 5-reel, 10-payline slot that''s as unique as a unicorn itself!Let the search for Jackpots begin! Catch at least 5 Unicorn symbols to trigger the Unicorn Jackpot Game and find as many Unicorns as possible for the biggest wins. Played on a 5x5 grid featuring 25 separate fields, the bonus round starts with 3 re-spins, and with each new Unicorn that lands on the reels their number resets to 3. Also, each collected Unicorn takes you to a higher reward, with Minor and Major Jackpots available along the way. The magnificent Grand Jackpot of 1000x your stake is also up for grabs for those who collect all 25 Unicorns!'
    WHERE identifier = 'wazdan:UnicornReels94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Find yourself at the gates of the mythical Vikings'' heaven and gain the favour of the Norse gods to feast with the bravest warriors!\r\n\r\nLet the valkyries guide you to unimaginable treasures hidden in the corridors of Valhalla! This exceptional online slot features 4 reels equipped with 54 fixed bet lines. '
    WHERE identifier = 'wazdan:Valhalla'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Find yourself at the gates of the mythical Vikings'' heaven and gain the favour of the Norse gods to feast with the bravest warriors!\r\n\r\nLet the valkyries guide you to unimaginable treasures hidden in the corridors of Valhalla! This exceptional online slot features 4 reels equipped with 54 fixed bet lines. '
    WHERE identifier = 'wazdan:Valhallartp'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a wild night in a Vegas casino! Vegas Hot is here to provide a real casino experience with hot fun and big wins – all of that illuminated by striking neon lights. You won''t forget this slot!'
    WHERE identifier = 'wazdan:VegasHot'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Vegas Hot 81 invites everyone on an exciting neon-powered adventure where bright lights and flashing colours emulate a true Las Vegas experience and entice players to enjoy themselves to the fullest anywhere they decide to launch the game.'
    WHERE identifier = 'wazdan:VegasHot81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Vegas Hot 81 invites everyone on an exciting neon-powered adventure where bright lights and flashing colours emulate a true Las Vegas experience and entice players to enjoy themselves to the fullest anywhere they decide to launch the game.'
    WHERE identifier = 'wazdan:VegasHot8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a wild night in a Vegas casino! Vegas Hot is here to provide a real casino experience with hot fun and big wins – all of that illuminated by striking neon lights. You won''t forget this slot!'
    WHERE identifier = 'wazdan:VegasHot94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Neon lights, Vegas vibe and retro looks – with Vegas Reels II you''ll feel like you''re inside a real casino!\r\n\r\nA real treat for classic slots enthusiasts! Vegas Reels II is a minimalistic retro online slot that will leave you feeling like you were in a real-life casino somewhere in Vegas having fun with traditional slot machines. Vibrant neon lights in the background significantly add to the whole experience! What''s more, this 3-reel slot features old-school cartoon-like symbols – colourful and juicy cherries, watermelons, lemons as well as sevens, BARs, diamonds, Vegas icons, crown symbols and a joker. And to enhance this retro vibe even further, Vegas Reels II features one payline in the middle line and, just as in classic slot machines, sometimes the reels stop halfway giving you the blank win line.'
    WHERE identifier = 'wazdan:VegasReelsII'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Neon lights, Vegas vibe and retro looks – with Vegas Reels II you''ll feel like you''re inside a real casino!A real treat for classic slots enthusiasts! Vegas Reels II is a minimalistic retro online slot that will leave you feeling like you were in a real-life casino somewhere in Vegas having fun with traditional slot machines. Vibrant neon lights in the background significantly add to the whole experience! What''s more, this 3-reel slot features old-school cartoon-like symbols – colourful and juicy cherries, watermelons, lemons as well as sevens, BARs, diamonds, Vegas icons, crown symbols and a joker. And to enhance this retro vibe even further, Vegas Reels II features one payline in the middle line and, just as in classic slot machines, sometimes the reels stop halfway giving you the blank win line.'
    WHERE identifier = 'wazdan:VegasReelsII94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who says a trip to hell has to be a bad experience! With this slot, a pact with the devil might lead to some pretty favourable results!'
    WHERE identifier = 'wazdan:WelcomeToHell81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who says a trip to hell has to be a bad experience! With this slot, a pact with the devil might lead to some pretty favourable results!'
    WHERE identifier = 'wazdan:WelcomeToHell8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Rev up your engines and join these two wild biker beauties on their journey to find mysterious prizes – it might get hot!'
    WHERE identifier = 'wazdan:WildGirls'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Rev up your engines and join these two wild biker beauties on their journey to find mysterious prizes – it might get hot!'
    WHERE identifier = 'wazdan:WildGirls94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'An adventure in the Wild West is calling! Face the bandits and determine once and for all who''s the best gunslinger in town!'
    WHERE identifier = 'wazdan:WildGuns'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'An adventure in the Wild West is calling! Face the bandits and determine once and for all who''s the best gunslinger in town!'
    WHERE identifier = 'wazdan:WildGuns94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buckle up, cowboy, Wild Jack is taking us on a rodeo ride with some pretty hefty prizes on the line. Don''t let the angry red bull intimidate you, we guarantee that it''s all in good fun and you have nothing to worry about!'
    WHERE identifier = 'wazdan:WildJack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a wild rodeo with Wild Jack and catch additional paylines with his lasso!'
    WHERE identifier = 'wazdan:WildJack81'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready for a wild rodeo with Wild Jack and catch additional paylines with his lasso!'
    WHERE identifier = 'wazdan:WildJack8194'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Buckle up, cowboy, Wild Jack is taking us on a rodeo ride with some pretty hefty prizes on the line. Don''t let the angry red bull intimidate you, we guarantee that it''s all in good fun and you have nothing to worry about!'
    WHERE identifier = 'wazdan:WildJack94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This classic 3-reel slot, BARs and sevens create a perfect choice for fans of traditional slots who want bigger wins!\r\n\r\nRetro atmosphere, traditional-looking symbols and attractive features are all you need to have a great time with this classic 3-reel 5-payline online slot. Symbols such as Xs, BARs and sevens give this traditional slot machine old-school vibes that will make you fell a little bit nostalgic and prove that simple looks can be an advantage.'
    WHERE identifier = 'wazdan:Win&Replay'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This classic 3-reel slot, BARs and sevens create a perfect choice for fans of traditional slots who want bigger wins!Retro atmosphere, traditional-looking symbols and attractive features are all you need to have a great time with this classic 3-reel 5-payline online slot. Symbols such as Xs, BARs and sevens give this traditional slot machine old-school vibes that will make you fell a little bit nostalgic and prove that simple looks can be an advantage.'
    WHERE identifier = 'wazdan:Win&Replay94'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The eternal feud of good vs evil takes place in Age of Asgard, with dual 5x3 machines acting as the battlefield.Players see a fiery female-dominated cast cross swords as the reels collide. All high-pay symbols and Wilds are 1x3 long. Wilds can nudge to occupy a full reel in battle triggering a Respin and remaining sticky for all future Respins. When rival wilds meet on opposing sides of the same reel, they CLASH! This feature spawns 2 to 4 smaller Wilds.Landing 3 Free Spins symbols takes players to Free Spins, where two machines become one of 5x6 and wilds get even bigger! The machine with the Free Spins symbols invades the game screen for the duration of the round, leaving no room for the opposing characters. These rounds bring 10 Free Spins to start, while long 1x6 Wilds can nudge and clash every time spawning up to 4 random wilds and bringing an eruption of Respins!6 Free Spins symbols in the Base Game take players down into Ragnarok Free Spins where the ultimate battle ensues! If only 5 Free Spins symbols land, then the Randomiser is activated which will either take the player to Ragnarok or grant them a consolation prize of 1000 coins.Only high pay symbols can withstand the heat of Ragnarok in this round. The inferno brings a rush of 20 Free Spins and Wilds with guaranteed nudge power bringing Clashes and Respins. When 3x5 or 5x6 machines are taken over by sticky Wilds, players earn a Ragnarok Big Win. Boasting rewards with a force strong enough to smash computer screens!An eternal fray with enormous rewards awaits. Do your players have what it takes to enter the fiery battle of Ragnarok?'
    WHERE identifier = 'yggdrasil:AgeofAsgard'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to conjure up some cash with our January release Alchymedes! Play as an alchemist mixing up the balance between getting a larger multiplier or a larger spreading wild pattern.'
    WHERE identifier = 'yggdrasil:Alchymedes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Players are on the move with a travelling merchant in Aldo''s Journey video slot. There are 4 different cities and cultures to explore, wheeling and dealing gold along the way. Aldo is hugely motivated by money and can''t seem to keep still, acting as a Journey Wild and taking steps in all directions with every spin. When the reels stop, he acts as a Wild on the space he occupies.What''s an escapade without some Wild Times!? Each time Aldo moves to the centre of the reels, this feature is triggered. Our traveller dishes out random wilds and adds a multiplier on current wins!When Aldo''s journey leads him to a country with 3 FS symbols players get their passport to City Free Spins. From Italy to China, Persia and Mongolia, Aldo takes players across the globe in search of gold and riches! Each country has its own unique benefits and City Free Spins are no different, find higher multipliers, symbol removal, random sticky wilds, and random wild lines stashed in these countries.When Aldo lands in the centre with 3 Free Spins symbols, then the real voyage begins! Players prepare to go around the world in 7 spins because Journey Free Spins brings all the 4 City FS together and activates their benefits! This creates some bonus combinations that will make for a trip of a lifetime!That''s not all though, Wild Times! are never too far from Aldo and his merchant players, when he lands in the centre, he brings more random wilds and multipliers that last for the entire Journey Free Spins.Are your players ready to get down to business with our worldly traveller? '
    WHERE identifier = 'yggdrasil:AldosJourney'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the knights of the round table in their quest for gold. If you like Medieval themes you will love this slot packed with beautiful graphics and winning possibilities. Included in this game is a true wheel of fortune that will determine the fate of your Wilds.'
    WHERE identifier = 'yggdrasil:ArthursFortune'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Deep underwater, ancient city of Atlantis holds immesurable treasures! Dive and rise together with reels, for up to 32 768 ways to win, mystical free spins sessions and bonus games with Jackpots!Rising the reels with each bonus symbol increases the ways to win and awards bonus games!'
    WHERE identifier = 'yggdrasil:AtlanteanGigaRise'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Avatars'' Gateway has been barred off to earthlings since the beginning of time, now it''s up to our players to find the winning combination that will set these extra-terrestrials free!Four guardians stand before the Avatar kingdom, bringing hypnotizing wins on the ancient wheels each time their pieces align. Should they match inside the base game''s glowing hotspot, the multiplier dial is triggered.'
    WHERE identifier = 'yggdrasil:AvatarsGatewayGuardians'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Beauty & the Beast (BAB), themed on the legendary French fairy tale, is the newest addition to Yggdrasil''s repertoire of fantastic games. This slot boasts lavish visuals and and an enchanting soundscape. BAB features random wilds, nudge reels and synced reels. The crown jewel of this tragically romantic slot is the Golden Bet feature, which increases the player''s chance to land Free Spins and/or increases the win potential in Free Spin mode.'
    WHERE identifier = 'yggdrasil:BeautyAndTheBeast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Bicicleta is a football-themed medium volatility game with a Free Spins mode and the Trophy bonus feature.Surrender yourself to football fever and watch players execute acrobatic bicicleta kicks in Free Spins mode that turn them into sticky wild symbols when scoring on the goalie.The crowd reacts dynamically to what''s happening on the pitch, turning this slot into an incredible game experience.'
    WHERE identifier = 'yggdrasil:Bicicleta'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Big Blox is a simple and fast arcade game with a focus on the excitement and huge win potential directly in the base game.The Big Blox feature lands symbols that cover more of the game area, up to all 15 symbol positions of the screen can be covered by a big block!'
    WHERE identifier = 'yggdrasil:BigBlox'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Strange things happen when the sun sets on New Orleans in this Victorian video slot. Humans under the daylight, these grim heroes turn into gold-hungry Werewolves when a full moon rises! Once transformed they go completely Wild, gaining extraordinary supernatural abilities controlled by lunar energy.'
    WHERE identifier = 'yggdrasil:BloodMoonWilds'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'There''s no party like the carnival in Rio de Janeiro. Players join in the fun with our avalanche gameBrazil Bomba where symbols cascade down the reels and every 6 symbol diagonal cluster brings awin. Anything can happen in this magical place!'
    WHERE identifier = 'yggdrasil:BrazilBomba'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome aboard Cazino Cosmos, Yggdrasil''s out-of-this-world January release! Cazino Cosmos,under the strict rule of its formidable matriarch Stella, floats through space and is the place wherethe Universe''s biggest high-rollers go head-to-head for some cosmic wins. The game follows up onone of Yggdrasil''s long-term performers, Cazino Zeppelin. But Cazino Cosmos takes the originalgame''s core mechanics of Sticky Wilds in Free Spins and sends it to hyperspace with addedcollections. Each reel has its own collectable wild symbols and completing any of the collections willtake you to separate Free Spins with either added wilds, extra free spins, wild nudges, stacked wildsor wild conversions. Get lucky with the reels and you can hit unearthly wins of over 10 000x yourbet! So, if you want to get a glimpse of the best game on this side of Milky Way, then step right intoCazino Cosmos.'
    WHERE identifier = 'yggdrasil:CazinoCosmos'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The new game Cazino Zeppelin provides a world class gaming experience with energetic graphics, exciting animations and intuitive game play. The game features Free Spins with Sticky Wilds and Wild Transfers. Sound artists created the in-play ambiance sounds and music to generate the best player experience.'
    WHERE identifier = 'yggdrasil:CazinoZeppelin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Take a flight and play for big stakes in the remake of Yggdrasil steampunk classic - Cazino Zeppelin Reloaded! Cazino Dealer wids are back, this time with multipliers. Each Wild has a chance for a random multiplier. Spin to get into Free Spins, where wilds stay sticky until end of round, and each new wild landnig will increase the multipliers! Cazino will reward you with 5 extra free spins if you catch a wild on each reel.'
    WHERE identifier = 'yggdrasil:CazinoZeppelinReloaded'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'he stands hold their breath as the scorching sun bounces off the unsheathed blades, shining on the blood-soaked sands of the Colosseum. The mightiest gladiators of the known world are preparing for the ultimate battle in Yggdrasil''s February release, Champions of Rome! The game is all about getting extra wilds on screen, as swords, tridents, and maces fly through the air, giving you smashing wins. Whenever you trigger a feature, a gladiator is picked to fight for your cause with its specific wild formation that adds 4 wilds to the screen.Getting two scatters triggers a random feature and getting three scatters starts the Free Spins with one feature hitting the reels every single time plus extra chances of getting additional spins. Free Spins also allow you to choose your own risk level - you can either play it safe or risk it all for the chance to get up to 4x multiplier on all of your winnings. For battle-hardened slot-berserkers, we''ve also added the Buy Bonus feature that can take you right into Free Spins at any time.Now it''s time to let the steel do the talking - pick your champion and let the fighting commence!'
    WHERE identifier = 'yggdrasil:ChampionsofRome'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Yggdrasil welcomes you to the daily life of CHIBEASTIES, the whimsical creatures in a magical forest! The freespin mode is activated with one randomly chosen expanding symbol and wild feature can become expanding. The game offers high quality graphics & exciting animations!The game pays from left to right and with its as-tonishing animations and sounds the player is in for one exciting ride in the land of the Chibeasties.A medium to high volatility game with focus on the extraordinary free spin round that can be won.'
    WHERE identifier = 'yggdrasil:Chibeasties'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Answer the Call of Cthulhu and step into a world where great danger - and great wealth - are to be found! Sharpen your swords and your wits in preparation for this 5 x 3, 10 payline adventure. Keep a watchful eye out for Cthulhu bonus symbols. Three of these monsters on the reels unlock The Craze of Cthulhu bonus game, which takes players on an epic journey of bonus round battles where adventurers can transform into sticky wilds and the chance of unlimited bonus retriggers. Cthulhu awaits, if you dare…'
    WHERE identifier = 'yggdrasil:Cthulhu'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Dark Vortex has been activated by evil forces and is about to open up a portal to a realm full of all things dark and wretched! This monster of a game is Win All Ways so has some terrific win potential with 3125 ways running from both left and right. Collect at least two cursed symbols on adjacent reels to open up the vortex to the interdimensional netherworld  this will increase the reel height from 3 to 5 symbols and fill the vortex with high pays, wilds and Free Spins enhancements.Hitting cursed relic symbols adjacent to the vortex will make the passage expand, and if it grows to cover all reels, Free Spins with Stacked Wilds are awarded! Here all of the Free Spins features collected from the vortex spins become active, destined to guarantee some monstrous wins! So prepare to be drawn in by these primordial powers and succumb to the Dark Vortex.'
    WHERE identifier = 'yggdrasil:DarkVortex'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Double Dragons is a feature packed game with tall stacks of wilds combined with dropdown symbols.The game offers big win potential directly in the base game via the stacked wilds and the double dragons feature. While hunting the big wins, the player collects dragon heads that will award a free spin mode when 9 of them are collected.'
    WHERE identifier = 'yggdrasil:DoubleDragons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This Easter, Easter Island will be re-discovered by thousands of adventurous slots players around the world! Two towering moai statues welcome explorers to our Pacific paradise, where every win triggers a respin with the winning symbol replacing either all high or low pay symbols. Hit a win line with either 4 or 5 symbols and your reels will grow up to 4 rows taller! To top it off - the sticky wilds on reels 2 and 4 always expand to cover the whole reel. You can expect your players to extend their stay on this mirthful and mana-filled mystery island!'
    WHERE identifier = 'yggdrasil:EasterIsland'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join our Moai duo ...on their own holidays! Together with their favourite bird sidekick, go wild at theVenice Beach and take a spin for MASSIVE wins! Expanding reels and colossal block respins cometogether for fantastic win opportunities. Hit any win to get a re-spin - the longer the winningcombination, the better the re-spin gets!'
    WHERE identifier = 'yggdrasil:EasterIsland2'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to make some room in your game lobby for a glorious game which has travelled through time and space to become better than ever! Fruitoids is our early classic which has now been ported from Flash to HTML5 and given the full Yggdrasil treatment in the process with revamped sound and visual effects. The game''s beautifully rendered graphics and hypnotizing soundtrack are guaranteed to whisk you away to the furthest part of the galaxy. The mechanics are tried and tested crowd favourites - freeze re-spins combined with column multipliers loved by all species across the Milky Way. So be sure to take a big bite out of these otherworldly frozen fruitoids!'
    WHERE identifier = 'yggdrasil:Fruitoids'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Gator Gold Deluxe is an upgraded take on a modern Yggdrasil Classic. It features everything that made Gator Gold great and MORE! Introducing an upgrade mechanic in Free Spins allowing the player to potentially upgrade ALL high symbol into the Super High Pay - the mighty Golden Gator. Together with Gigablox this feature offers the potential of landing truly awe inspiring wins!'
    WHERE identifier = 'yggdrasil:GatorGoldDeluxeGigablox'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The ground shifts and mountains move when this tremendous tribe of gentle gem-hearted giants decide it''s time for you to rack up some wins in our February release Gem Rocks! The true beauty of this diamond in the rough lies in the way the combination of cascading wins, cluster symbols and win-all-ways give you the chance to end every spin with a monstrous. Add to that the fact that consecutive wins add a cluster of up to 4x4 symbols with a guaranteed win on the reels, and you know you have a real gem in your hands!'
    WHERE identifier = 'yggdrasil:GemRocks'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the exciting and action packed adventure with the fish that live and prosper in Golden Fishtank.In Golden Fishtank the players will participate in an experience that revolves around the exciting and adrenaline packed Free Spins. When the player manages to enter free spins 18 objects from the bottom of the tank come to life for the player to pick from. Inside each of the objects there is a feature hidden which the player will keep for the entire duration of Free Spins.Play Golden Bet feature to get 1 additional feature pick if you would enter the free spin mode. A Golden Bet spin cost 25 cost instead of 20.'
    WHERE identifier = 'yggdrasil:GoldenFishtank'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'A sequel to poular Golden Fish Tank, new installation brigs what''s best about part 1 while adding Yggdrasil''s Gigablox to the mix for even more amazing feature combos. Game is set in the same environment as the original (aquarium), and features the core Free Spins with special features chosen in Pick and Click game, with new possible bonuses. New addition - bonus chest - gets players even more surprise wins.'
    WHERE identifier = 'yggdrasil:GoldenFishtTank2Gigablox'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Travel to ancient Greece and face the legendary Golden Gorgon! Use her Golden Gaze to trigger respins after every win and fill those rows with winning symbols to get those multipliers!'
    WHERE identifier = 'yggdrasil:GoldenGorgon'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'HANZO''S DOJO is the ultimate training ground for the fiercest of fighters from the Land of the Rising Sun! Two kinds of Free Spins, Colossal Symbols, and Expanding Wild reels are just some of the weapons you can call to your aid to prove yourself to the legendary sensei, Hattori Hanzo! The game''s most outstanding feature is its Sensei Sector - a mini-slot which can help the player score wild reels or free spins with a colossal symbol of one of the fighters. So join the samurai, ninja, sumo and the fan fighter in their battle to become the greatest warrior alive!'
    WHERE identifier = 'yggdrasil:HanzosDojo'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Five Jackpots are up for grabs in this action packed adventure with Mr Holmes. Follow him to search for the missing stones and enter the warehouse bonus game to collect stones to increase your chances in the Free Spin jackpot game.A low to medium variance game which focuses on Frequent jackpot wins and a Shard collection feature. You are never far away from the next Jackpot Free spins.'
    WHERE identifier = 'yggdrasil:Holmes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Visit a tropical island, where an ancient Volcano is bursting with riches! Wins as hot as lava awaits in this game,where each win awards you a re-spin, and the reels keep expanding!Each progressive re-spin will expand a reel until you reach a Giga reel of 4x4 symbols and enter Hyper Mode, inwhich win multipliers keep rising to x10! The combined power of Wild symbols, Giga 4x4 reel, and re-spins canbring you up to 12000x bet wins!'
    WHERE identifier = 'yggdrasil:HyperBurst'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the world of junk and space debris, where you control the biggest incinerator in the known universe.With Incinerator you will always be close to your next super big win thanks to the wild pattern Feature that occurs after three consecutive drops.'
    WHERE identifier = 'yggdrasil:Incinerator'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Our travellers will stop at nothing to locate the treasures of the legendary Sunken City. Follow their action-packed journey as they cross exotic terrain in a multi-b Bonus Game with an interactive pick-and-click feature, and more valuable collections. Choose your character and choose your route, every game is a new adventure. The Base Game begins aboard their trusty boat and each Jackpot Free Spin transports you to one of five remote locations, each concealing their own unimaginable wealth. Navigate your way to the Bonus Game in search of treasures and keys to the Sunken City. Once all the keys have been collected, the final location can be reveale a trove of riches with higher chances of hitting jackpots and a whopping multiplier of x10 on every win.Embark on this daring escapade with our Jackpot Rai'
    WHERE identifier = 'yggdrasil:JackpotRaiders'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'okerizer is a high-variance video slot where the player hunts for the 6000 coins max win.The big wins in this game come from the mystery wins. 3 jokers landing anywhere always give a mystery win between 1000 and 6000. If they are aligned horizontally or diagonally, the mystery win is always 6000.Any win in the base game activates the Jokerizer mode where the win can be used to pay for jokerizer mode spins that cost 20 coins each. In jokerizer mode, only 2 jokers are required to get a mystery win between 20 and 6000 coins.'
    WHERE identifier = 'yggdrasil:Jokerizer'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Jumbo Jellies is a big ''n bouncy 6x3 slot set in a sugary fantasy land to rival even those owned by other notable chocolate factory owners! In Jumbo Jellies, matching pairs on a win line trigger the JUMBO POP where the trigger pair will turn WILD, the entire row will go colossal and more win lines are added. This starts a WIN STREAK landing more win pairs pops more JUMBO ROWS - when all 3 rows are jumbo then each new win in the streak gets +1 win multiplier, which can result in some super-long streaks and crazy win potential! Win up to 18 free spins via the SCATTER GAME, then play JELLY FREE SPINS where the JUMBO ROWS are not reset for the duration of the bonus! This can see our sweetie machine crank out whopping wins of up to the x5432 max win! Get ready for the sugar rush!'
    WHERE identifier = 'yggdrasil:JumboJellies'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the feature packed Legend of the Golden Monkey Video Slot with Win all Ways, sticky wilds, count down wilds, the treasure chest symbol, the Golden Monkey feature and three Free Spin modes.Legend of the Golden Monkey is a Video Slot with 5 reels and Win all Ways. Win all Ways means that there are no paylines, but any combination of 3 or more subsequent symbols from left or right will give a win.The game has 10 regular symbols, 1 Free Spin symbol, 1 sticky wild symbol, 1 count-down wild symbol and 1 treasure chest symbol.'
    WHERE identifier = 'yggdrasil:LegendOfTheGoldenMonkey'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Under the watchful eye of Ozwin, his trusty apprentice weaves spells in an effort to lift the ancient curse and restore the mighty magician to his human shape and bestow players with wondrous winnings. Collect the crystals to restore the orbs of power and take a shot at 5 different jackpots in the game, or open the Spellbook Bonus Game to get extra crystals and other bewitching bounties.'
    WHERE identifier = 'yggdrasil:OzwinsJackpots'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'It''s time to help some flightless fellows escape Penguin City, where the mighty Penguin Emperor is keeping his minuscule underlings as slaves in his dastardly food emporium! The game''s standout feature is the Penguin Escape Mode, which is triggered as soon a Wild appears on 2nd or 4th reel during a winning spin. This wild stays Sticky for the duration of the Escape mode, which respins until a winless spin. During the Escape Mode, Penguins on every spin can award the player an additional Sticky Wild on 2nd or 4th reel, or a winning symbol on the 3rd reel. As an additional bonus one can hit a stacked Emperor Stacked Wild, which moves down one row per spin and basically guarantees respins until it''s off the reels! So come on and hit the reels to help the penguins spread their wings, as you rack up big wins!'
    WHERE identifier = 'yggdrasil:PenguinCity'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join the brave pirate crew, sailing the exotic waters! With dropdown wins and multipliers, gold can be found anywhere on the treacherous seas. Any winning combination will remove non-winning symbols and drop new ones with a chance to increase your win. Fill the reels with winning symbols to fill your pockets with coins! Help the Pirates put together the pieces of a Map, and discover treasures in three Free Spins locations each location will welcome you with a special feature. Hellfire Island, Skull Cave and Paradise Cove are waiting for you to uncover their secrets!'
    WHERE identifier = 'yggdrasil:PiratesSmugglersParadise'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Landing a Wild in the base game will start a respin, landing second will trigger another respin, and landing a third Wild will trigger Bonus Game. Collecting 10 Bonus Symbols during the Base Game triggers the Bonus Game.  In addition, each collected symbol discounts the price of Buy Bonus by 10%  Bonus Game features a global multiplier applied to every win which is increased by +1 for each win. During the Bonus Game,  before every spin, each wild will randomly move to one of the neighboring positions. The Bonus Game continues until all Wild symbols are gone. Wild will disappear when it walks on the vortex and will be instantly moved back to its original position when it moves on the bouncer. Bouncers will award with different rewards (multipliers, coins, extra Wilds, bonus game levels).'
    WHERE identifier = 'yggdrasil:PushyCats'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Get ready to rock with our rebellious new slot Rainbow Ryan! Our pint-sized superstar jams perfectly in tune with the reels and bestows you the luck of the Irish with the game''s main feature - synced reels. Ryan shreds some riffs any time in base game to make up to 6 reels synced. Even sweeter tunes wait for you in Free Spins, where you will have at least 2 synced reels every spin, with the chance to get more reels synced with every consecutive spin. So join us for this power-chord-heavy raid across the rainbow.'
    WHERE identifier = 'yggdrasil:RainbowRyan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In a lost land before time, creatures roam the earth, contesting for supremacy. As these great lizards clash, it''s time for you to reach the top of the Jurassic foodchain in Raptor Doublemax. Reptiles roam the Cascading Reels, where after each win, all winning symbols are removed and new symbols fill the empty spaces to create even more chances to win. True to Raptor Doublemax''s ferocious nature, following each cascade, an additional Wild will be added. But the hunt of these bipedal beasts doesn''t stop there. The game''s Doubling Multiplier feature means that each consecutive win doubles the multiplier with no limit. The rage of these Jurassic giants knows no end.'
    WHERE identifier = 'yggdrasil:RaptorDoublemax'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Wild animals are the stars of this African-themed game. In the dust and rising heat of the savanna only intrepid adventurers dare to take on the awesome beasts and claim the rewards on offer. In the land of big game, the fight for survival and supremacy is determined by the spin of a reel. Will you reign supreme in your quest to be king of the savanna?'
    WHERE identifier = 'yggdrasil:SavannaRoar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Seasons is a video slot with 5 reels and 20 paylines paying from left to right. The game has nine regular symbols that win if three or more are lined up in sequence on a payline, beginning in the leftmost position.There are four game modes: Winter, Spring, Summer and Autumn. After 10 spins have been played in a season, the season can change into a new randomly chosen season when a bet is made.Seasons has four game modes and four wild features! The modes are represented by the four seasons and the game will transition seamlessly between them while playing. This gives an everlasting dynamic playing experience with many features to experience.Each season also has a free spin mode where the current seasonal wild is more common.'
    WHERE identifier = 'yggdrasil:Seasons'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Sunny Shores will be the feel-good hit slot of this summer! So find a place to lounge back and enjoy the way this 5x5 slot mixes simple and colorful graphics with captivating gameplay. You''ll get the best of both social gaming and real-money slot worlds in this bright little package!The main feature of this game is the Sunny Wild, that can expand up to 2 positions in all directions when landed and triggers sticky wild re-spins. Wilds that expand outside the reels wrap around the other side of the reelset, giving players more chances at wins in this Win-Both-Ways slot!'
    WHERE identifier = 'yggdrasil:SunnyShores'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Dark Joker Rizes Video Slot is designed to provide a world class gaming experience with energetic graphics, exciting animations and an intuitive game play. The exciting animations and audio provide an in-game feel and signal important events in the game such as when the Joker symbols appear on the reels and when the Jokerizer Mode is activated. To play, the player can select his preferred coin denomination and presses the Spin button.'
    WHERE identifier = 'yggdrasil:TheDarkJokerRizes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'We cordially invite you the regal reels of The Royal Family! This stately game has an imposing amount of magnificent features - regular free spins with sticky wilds, additional 5 collectable free spins with a choice of 12 bonus features, and a bonus chest which will offer princely prizes in all game modes. Mirth and merriment await all your players who give this majestic slot a spin.'
    WHERE identifier = 'yggdrasil:TheRoyalFamily'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Yggdrasil''s new slot Time Travel Tigers rips the fabric of time-space continuum and takes the players on the trip of a lifetime! Step into Dr Tigerstein''s time machine and get whisked away to prehistoric era, Ancient Egypt, medieval Europe, or far-far into the future in one of the Free Spins modes. Each mode randomly takes you to one of the four eras, each with its different number of free spins, win multipliers and wild patterns with 1-20 wilds guaranteed every spin. The game''s visuals and soundscape changes together with Dr Tigerstein as you travel through time, so you''re guaranteed to never have a dull moment. So be sure to join this great adventure right away - it''s time!'
    WHERE identifier = 'yggdrasil:TimeTravelTigers'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Time to cross over to Trolls Bridge, a game where our monster hordes help you hoard some giant wins! The highlight of the game are the ferociously fun Free Spins, before which you have up to 5 picks from a selection of ranging from extra Free Spins to added wilds, multipliers and stacks! Play with the Golden Bet and you''ll even get one extra pick - a feature that is always worth its weight in gold. The base play is no bore either, as you can hit the Bonus Pot to get extra Free Spins and coins or have the Bonus Stone smash the reels with win multipliers or coin wins!'
    WHERE identifier = 'yggdrasil:TrollsBridge'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The peace of King Tut has been disturbed and now he''s risen from his tomb, wreaking havoc across the reels in Tut''s Twister! Hit two wilds and Tut will transform one into a wild sandstorm, creating a reel-tall column of wilds! This wild vortex will continue to consume wilds on the reels, awarding respins and a multiplier as it grows out of control. After finally disintegrating, King Tut will unleash all absorbed wilds back on the reels for epic win potential! Use single wilds to collect ancient hieroglyphics, unlocking Tut''s hidden curses and unleashing twisters of overwhelming power! Let this ancient ruler''s anger pave your way to legendary riches and join the army of King Tut''s win-hungy zealots!'
    WHERE identifier = 'yggdrasil:TutsTwister'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Prepare for glory in this ultra-epic Viking series like no other! The Valhalla Saga incorporates three of the most famous Vikings: Thor, Loki and Odin and give each their own flavour, incorporating its own unique elements, varying volatility while keeping core elements of game play similar. Thunder of Thor is the first of the three part epic, and with it sees the launch of the POWERLINKS TM game mechanic. POWERLINKS creates prize zones that can be upgraded as the Free Games bonus round plays out. The game also features the Thunder of Thor modifier, which can award wild multipliers of up to 100x to tantalise the potential for huge wins!'
    WHERE identifier = 'yggdrasil:ValhallaSagaThunderofThor'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Valkyries gather at the gates of Valhalla to welcome the fallen heroes. As they sing their battle cry, they lead their souls to the hall of the slain, where the rewards await. This is a 5x3 video slot with 10 paylines, featuring Dropping and Locking Wilds with random Multipliers, Wild Overlap Multipliers, a Power Reel that triggers Re-spins until no more Dropping Wilds appear on the panel and a Free Spins bonus game with Power Reel, Wild Overlaps and Re-triggers for each Locking Wild that appears!'
    WHERE identifier = 'yggdrasil:Valkyries'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Great gods Horus and Anubis welcome you to ancient Egypt''s best kept secret - Valley Of The Gods. In this mysterious game you re-spin with every win and hit winning combinations to expand your game area while discovering ancient mysteries. Clear the whole area and you invoke ancient incantations, which grant you huge treasures and near immortality in the form of huge multipliers and extra lives. Are you ready for riches beyond the imagination of mortals? Then follow us to Valley Of The Gods!'
    WHERE identifier = 'yggdrasil:ValleyOfTheGods'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Vikings are back in a feature packed sequel. The core mechanics are untouched - the Vikings go Wild in the free spin mode, this time by defeating mythological siren creatures.The Vikings can go Berzerk, meaning they will ALWAYS defeat the siren and turn into a wild. By filling the rage collections in the base game, the player is awarded with a Free Spin sessions where 1 Viking is Berzerk.In the  Free Spin Mode, all 4 vikings go berzerk and will reward the player legendary wins!'
    WHERE identifier = 'yggdrasil:VikingsGoBerzerk'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The fearless Vikings are back for their biggest battle yet, as they take on the flaming demon hordes of the underworld! The third instalment of our legendary Vikings series builds on the previous games to bring even more action to the reels - fights for sticky wilds will now also happen in base game, the treasure chests will appear more frequently, and two levels of Free Spins with multipliers allow for truly monstrous wins. Our enraged Nordic warriors invite you to join them on their latest adventure!'
    WHERE identifier = 'yggdrasil:VikingsgotoHell'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Will the Hall of Heroes fall, or will the warriors prevail? Vikings Go To Valhalla brings the enraged generals back together in their fourth outing where the ruthless snake king, Jörmungandr looms near, hellbent on destruction. Join Gunnar and his army to protect Asgard with respins and Free Spins where all high paying symbols battle Jörmungandr on every spin. If they win, they turn into Sticky Wilds! Their onslaught continues into the fabled Ragnarök Free Spins where the warriors always win their battles! Collect Rage from high pay wins to fill the Rage meter for up to 20 respins with any one Viking always winning their battle with the beast. The treasury of the kings is on players'' side too with a Treasure chest that can land on the 5th reel to award an array of exciting prizes!'
    WHERE identifier = 'yggdrasil:VikingsGoToValhalla'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join The Vikings on a mysterious adventure across the dark blue ocean and slay the sea monster in Free Spin mode, which turns the victorious vikings into sticky wilds!Players will enjoy joining The Vikings on their adventure across the raging ocean, slaying the sea monster in Free Spin mode and turning the victorious heroes into sticky wilds.The treasure chest offers a mystery win and a chance to trigger even more Free Spins.A medium to high volatility game which focuses on the extraordinary opportunity to Get sticky wilds for the entire Free Spin round.'
    WHERE identifier = 'yggdrasil:VikingsGoWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Save the day in Yggdrasil''s new release Wilhelm Tell, where you go after legendary wins, whiletrying to free both your son and the nation from the clutches of an evil tyrant! The stand-out featureof the game is Stacked Wilds, which nudge to cover the whole reel whenever there''s a win in sight.Free Spins come with a truly epic choice as you can either go for 10 or 5 free spins with a lowermultiplier or risk it all with one spin, which comes with a 50x multiplier on whatever you win. Hittingfive Free Spins scatters also grants you an additional bounty of 500x your bet size. There''s no timeto waste  draw your crossbow, take a deep breath and take a shot at the highest prizes in WilhelmTell!'
    WHERE identifier = 'yggdrasil:WilhelmTell'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '\r\nThere are several classic slot machine experiences in the world, and Fruit 5 lines is definitely one of them.'
    WHERE identifier = 'zillion:FruitsFive'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Under the blue northern sky there is a golden city, with translucent gates, and the stars shining above. This is Valhalla, the home of gods and heroes, filled with untold riches. It is protected by animal-looking spirits of nature.'
    WHERE identifier = 'zillion:GuardiansOfValhalla'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Leprechauns, castles, good luck and laughter. Lullabies, dreams and love ever after. Poems and songs with pipes and drums. A thousand welcomes when anyone comes... That''s the Irish for you.'
    WHERE identifier = 'zillion:LeprechaunsGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'In the depths of the jungle, entangled in vines, there is a stepped pyramid that rises to the skies. A beautiful hostess is waiting for you at its top. The chosen ones who can get to her will take part in the solar ritual and receive the hidden treasures of the Aztec gods. So fearlessly climb the steps, and riches will spill over you as a waterfall.'
    WHERE identifier = 'zillion:mistressOfPyramid'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Under the sea surface, hundreds of colourful little sea creatures inhabit the oceans. They maneuver between Bizarre corals and algae . But the bottom beneath them is full of crashed ships full of mysterious treasures they transported in the past. Reach your hand out and these treasures will be yours! Just be aware of the octopus.'
    WHERE identifier = 'zillion:OceansTreasures'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Yee-haw! Get the horses saddled, partner, we''re riding to the wild west! There''s a plan that''s going to fill our pockets with cash! So, first, we ride for towards the sunset, past the Devil''s mountain and The Grand Canyon, then we find the last valley of the Indians, where the legendary Totems of Gold are located. We will have to shoot fellas all along the way, stray bullets and Indian tomahawks will fly over our heads, but no way it will stop us on the way to wealth!'
    WHERE identifier = 'zillion:TotemsOfGold'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'This old-school Christmas slot is just the thing for the annual holiday season. Get merry, break the ice, and start the PARTY with prizes under the Xmas tree!'
    WHERE identifier = 'zillion:XMasParty'`);

    await queryRunner.query(`
    UPDATE game
    SET description = '100 monkeys is a classic 4X5 slot. The jungle and its inhabitants are the basis for the game''s design. Bright, funny, interesting characters will not leave a single player indifferent.'
    WHERE identifier = 'infin:100Monkeys'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Aliens Attack is a classic slot on the space theme. The game is stylized in the 1980s. with the use of modern graphics capabilities. This determines the direction of design and sound effects of the slot. The design was made using such space elements as the inhabited planet, various types of aliens and their spaceships. At the core of the game design is a dynamic 2d animation including 3d animated elements. Individual animations are made using Spine technology.'
    WHERE identifier = 'infin:AlienAttack'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Head across ancient Egypt with the Book of Sand slot, a text that contains the secrets to this desert''s treasures. The Egyptian gods are on hand as you seek out the Book Scatters to score the Bonus Spins with a special expanding symbol.'
    WHERE identifier = 'infin:BookofSand'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Candy mix is a slot with a fairly rare cluster mechanic. The game scene is stylized as a candy shop. The main elements are taken from classic films and cartoons: chocolate and caramel, jelly and glazed sweets.'
    WHERE identifier = 'infin:CandyMix'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fishing weekend is a classic 3X5 slot. The main theme of the slot is river fishing. Therefore, the main elements are fishing tackle items: funny hooks, baits, floats, coils, fishes. The main character of the game is a fisherman who dumps dynamite off his boat to increase the catch.'
    WHERE identifier = 'infin:FishingWeekend'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Strike: 20 Multi Win is a modern fruit 3x5 slot with an Multiplier feature. Collect nine same symbols on reels 1, 2, 3 and get a win Multiplier x3. For 12 same symbols on reels 1, 2, 3 and 4 you will receive a win Multiplier x4, for 15 same symbols – Multiplier x5. Wild symbols can appear anywhere on the reels 2, 3, 4, 5. Wild symbols replace any symbol, and they can take part in the formation of Multiplie'
    WHERE identifier = 'infin:FruitStrike20Multiwin'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Strike: Drive Wild is a modern fruit 3x5 slot with a Re-Spin feature. If Wild appears on the reels, Re-spin starts. With every Re-Spin, Wild Symbol shifts down one position. The Re-Spin series continues until the last Wild Symbol disappears from the reels.'
    WHERE identifier = 'infin:FruitStrikeDriveWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Strike: Extra 6 is a modern fruit 3*5 slot with an extra reel opportunity. Bright and juicy symbols of the Bet2Tech''s fruit series and classic soundtrack will delight the players.'
    WHERE identifier = 'infin:FruitStrikeExtra6'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fruit Strike: Hot Staxxx is a modern version of the classic 3x3 slot. Enjoy these juicy, fruity wins on a classic pay grid with high-pay diamond symbols, Bars, and more.'
    WHERE identifier = 'infin:FruitStrikeHotStaxxx'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Lu Ban is a classic 4*5 slot dedicated to Master Lu Ban, the patron of Chinese artisans and builders. The game is filled with Chinese motifs and traditional instruments of labor of ancient China.'
    WHERE identifier = 'infin:LuBan'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Journey forth on Merlin''s Quest and accompany the fabled sorcerer through these magic reels. Merlin may Re-Spin a reel on a losing screen to try to form a win or he can use the Sequel Spins feature to cascade away winning symbols and increase the multiplier.'
    WHERE identifier = 'infin:MerlinsQuest'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Monkey Bar is a modern summer 3x5 slot full of different features. Doubled Symbols can hit when the symbols of the same kind fill the whole reel. The symbols on this reel count as 2 instead of 1 when calculating wins for this spin. In the main game, Wild can appear anywhere on reels 2, 3 and 4. In the Bonus Spins, Wild can appear anywhere on reels 1, 2, 3, 4 and 5. Two or more Wild symbols in the Main game or during Bonus Spins activate Re-Spins. An additional Re-Spin is awarded if one or more visible Wilds appear on the reels during Re-Spin. Scatter symbols can appear anywhere on reels 1, 3 and 5, with 3 Scatter symbols activating 12 Bonus Spins.'
    WHERE identifier = 'infin:MonkeyBar'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Stellar Gems is a modern 3x5 slot full of different features. The Wild symbol can appear anywhere on reels 2, 3 and 4. The Wild symbol moves over the reel and activates Re-Spins. The maximum number of Re-Spins is 3. Each Wild Symbol appearing on the reel can increase winnings by 2 or 3x, with a maximum of 27.'
    WHERE identifier = 'infin:StellarGems'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'TVBET is a global live TV-games provider that offers some of the most exciting live betting products for sportsbooks and casinos in the form of software integration. What we do is provide the igaming market players, both operators and suppliers, with efficient alternative betting solutions for their sustainable growth. TV games are in our DNA. Over the last few years, our products impressed bettors and casino players all over the world. The well-known games have been reinvented by TVBET to provide partners'' clients with the immersive gaming experience 24/'
    WHERE identifier = 'infin:TVBETGames'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Who needs a track to indulge in the world of dog racing? Nobody! With our system, you can have races taking place every few minutes. We bring players exclusively licensed videos of dog races, and we bring businesses the chance of an excellent, affordable setup for their betting shops, whether online or not.\r\n\r\nA series of greyhound sprint races in live-action video format where six dogs are picked from a pool. The first, second and third ranking positions are determined by the system, and bets can be placed on markets depending on that information.'
    WHERE identifier = 'infin:Dog6'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Simple, time-tested, and loved around the world. Pick up to 8 numbers from a board of 80, the system randomly draws 20. The more hits, the more you win.\r\n\r\nWe offer Keno in its purest digital form. The chances of hitting a number diminishes with each number hit, but the payouts keep growing!'
    WHERE identifier = 'infin:Keno'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'To bring users closer to the virtual events, GoldenRace uses the ultimate virtual sports improvements such as amazing realistic 3D graphics, professional voice-overs in every major language and authentic camera angles from real soccer cameramen, in the case of soccer.'
    WHERE identifier = 'infin:Motorbikes'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'To bring users closer to the virtual events, GoldenRace uses the ultimate virtual sports improvements such as amazing realistic 3D graphics, professional voice-overs in every major language and authentic camera angles from real soccer cameramen, in the case of soccer.'
    WHERE identifier = 'infin:Speedway'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Place your bets and Spin 2 Win! A fast-paced modern take on Roulette, with built-in player engagement features and frequent wins – your players will love the spin! Spin 2 Win is simple, appealing, and easy to play!The visuals are colourful, clean, and eye-catching.\r\n\r\nBet counters show the frenzy of betting activity in real time – with various modes available to build excitement and encourage players. Players can try to predict the result of the spin by betting on individual numbers between one and thirty-six, one of three colours, groups of dozens, and odd/even. The wins keep coming with Spin 2 Win – games are fast and prizes are fre'
    WHERE identifier = 'infin:Spin2Win'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Once a Wild Symbol lands on reels 2, 3 and 4, it expands on the whole reel and Wild Fox Feature begins. The Wild reel sticks anda new free spin is triggered, which can happen up to 3 times. And the biggest win, 1000 x bet, is rewarded when the Full Tableof 7s is triggered. '
    WHERE identifier = 'swntt:7FreshFruits'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Escape this winter to the Hawaiian paradise with Aloha Spirit XtraLock, Swintt''s latest 5x3 video slot with 50 pay lines and multiple jackpots. This game with cheerful music and colourful design offer 2 features. Either trigger 3 or more Scatter Symbols and get 12 Free Spins or land 6 and more Tiki Symbols and get into Tiki XtraLock Feature with Locked Wilds and huge wins! XtraLock Feature locks wilds either in a vertical or horizontal position and after the feature finishes, the extended Locked Wilds reveal a reel with massive wins and potential jackpots. Aloha, may your wish come true with Aloha Spirit XtraLock!'
    WHERE identifier = 'swntt:AlohaSpiritXtraLock'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Swintt''s next premium release Bloxx Fruit takes your players to a tropical paradise full of exotic entertainment and fruitful wins! This 5x3 video slot with 30 fixed paylines brings excitement to the game when either Free Spins or Bloxx Win can be triggered.Land 3 Scatters and win 10 Free Spins or land 3 Dollar Symbols and be rewarded with Bloxx Prices and sky high wins. There are up to 15 Bloxx Prizes to be won for each Bloxx Win to make sure the entertainment is on a high level.Get ready for a ride with Bloxx Fruit!'
    WHERE identifier = 'swntt:BloxxFruit'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Join our explorer on his journey to amazing features and huge wins in Swintt''s Premium Game Book of Dino Unlimited! This 5x3, 10 lines video slot takes you to the deep jungle with dinosaurs, classic Book Free Spins and expanding Lucky Symbols.Land 3 or more Scatters and get 10 Free Spins with one selected Lucky Symbol, which will expand on the reels as long as the minimum number of combinations is hit. If you want to enjoy the Free Spins right away, you can buy this feature without the need of triggering 3 or more Book Symbols. The Free Spins can be retriggered, and another Lucky symbol gets selected to ensure high wins. Enjoy this adventure and explore the huge wins Book of Dino Unlimited has to offer! '
    WHERE identifier = 'swntt:BookofDinoUnlimited'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Book Of The East is Swintt''s first game with Buy Feature mechanic. This beautifully designed 5x3 video slot with 10 lines to win takes you to the Far East to the times of boat battles and brave warriors.Landing 3 Book Symbols trigger 8 Free Spins with Expanding Symbol that is selected randomly at thebeginning of the Free Spins. Free Spins can be re-triggered and you can be rewarded with extra 8 spins. Tocreate more excitement in the game, by collecting 3 Key Symbols the Book Feature is launched, randomExpanding Symbol is selected and chances for winning up to 4,434 x your bet are increased.Embark on the Book Of The East adventure now, we are ready to set the sail! '
    WHERE identifier = 'swntt:BookOfTheEast'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Roman emperors lived the life of luxury hoarding the finest treasuresin the land. Calliga takes you back in time to let you grab a piece ofthe pie!'
    WHERE identifier = 'swntt:Calliga'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Cocktail Book, the new Premium Game from Swintt, hides amazing recipes for huge wins! Escape this winter to a tropicalisland with delicious cocktails and summer vibes. Enjoy this cheerful 5x3 video slot with 5 lines and wins up to5,500 x your bet'
    WHERE identifier = 'swntt:CoctailBook'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Enjoy this carnival season with Continental Princess, the Latino-themed Premium Game from Swintt. This 5x3 video slot with 10 paylines transfers you to a South American jungle with a princess acting as a Wild Symbol on reels 2, 3 and 4 and expandinge on the whole reel to bring you magical wins!'
    WHERE identifier = 'swntt:ContinentalPrincess'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Make your dreams come true in Dishes To Riches! Enjoy our 5 Line 5Reel game filled with extravagant riches and live a life of luxury withWilds multiplying wins and re-triggerable free games!'
    WHERE identifier = 'swntt:DishesToRiches'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Swintt presents Bloxx Zeus, a new game that takes your players to ancient Greece when Zeus ruled as king of the gods of Mount Olympus. This 5x3 video slot with 30 fixed paylines brings excitement to the game when either Free Spins or Bloxx Win can be triggered. Land 3 Scatters and win 10 Free Spins or land 3 Dollar Symbols and be rewarded with Bloxx Prices and sky high wins. There are up to 15 Bloxx Prizes to be won for each Bloxx Win to make sure the entertainment is on a high level. May Zeus be with you to win big!'
    WHERE identifier = 'swntt:EGIGame'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Land 3 horses that represent Scatter Symbols and get rewarded with 12 Free Spins.In the Free Spin mode, all Wild Symbols become Sticky and bring huge wins.'
    WHERE identifier = 'swntt:ElAndaluz'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Search for the Princess Rapunzel and the great treasures she holds inEndless Hair. The mystical mirror can grant fantastic prizes for thoselucky enough to find it.'
    WHERE identifier = 'swntt:EndlessHair'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Extra Win X lives true to its name by energising the traditional 3x3 slot with a bonus wheel that triggers Extra Wins!This Premium Game from Swintt offers 5 lines to win and great entertainment with wins up to 800 x bet. Full Table feature does not only ensure fruity wins, but it also triggers the Extra Win Feature Wheel with 20-fold win.Spin that wheel and get Extra Win X!'
    WHERE identifier = 'swntt:ExtraWinX'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Can you stand the heat of Flaming Seven! Play with our fiery hot 10 line 5 reel classic styled game with scatters and increase your odds of winning as you can win from multiple directions!'
    WHERE identifier = 'swntt:FlamingSevens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Hawaiian Fantasy is a 3x3 Pachislot game using traditional math and audio in an authentic design to evoke the experience of the land-based machines popular across Japan. Keep an eye on the giant hibiscus flowers which not only look pretty, but light up when the Big Hawaiian Bonus is imminent.'
    WHERE identifier = 'swntt:HawaiianFantasy'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the kitchen of the master chef, full of tasty ingredients, delicious combinations, and great recipes for huge wins! Kochbuch is Swintt''s premium game with 5 lines and wins up to 5,000 x your bet. The main feature in this game is a 10 Free Spins round, which is triggered either by landing 3 books or by collecting 10 spins with landing 2 books on the ladder on the top of the reel. Once you get to the Free Spins mode, one Lucky Symbol gets randomly selected and it expands on the reels during the feature. Buon Appetito, we hope you enjoy delicious wins with Kochbuch!'
    WHERE identifier = 'swntt:Kochbuch'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Fantasy, Dinosaurs, Adventure'
    WHERE identifier = 'swntt:LostWorld'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'The Wizard is back and ready to grant even more exciting wins inMaster of Books Unlimited!Let him cast his magic in a more volatile bonus round as extra luckysymbols can expand and deliver spellbounding wins!'
    WHERE identifier = 'swntt:MasterOfBooksUnlimited'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Rich Lady, Swintt''s next premium release, is another exciting game packed with features. This 5x3 video slot will take you on a luxury journey full of Pearl Features,Wilds and 5 fixed pay lines. Land 3 Pearl Symbols on the reel and enjoy Pearl Re-Spin Feature, where all sums from the Pearl Symbols add up and multiply your bet. Every Pearl Symbol landed during the Pearl Feature resets the number of spins to 3 and increases your chances of big winnings. The Pearl Symbols have values from 1 to 4 but you can also multiply your bet by Minor, Major and Maxi Pearls and win up to 150 x bet. Rich Lady Symbol is a Wild Symbol and substitutes for allsymbols except the Pearls.Feel glamourous and get ready for a ride to the high wins!'
    WHERE identifier = 'swntt:RichLady'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Swintt takes your players on a rock and roll ride with its another XtraWays™ hit Rock n''Ways XtraWays™. This 6x3 video slot offers up to 262,144 ways to win and increases the winning potential to up to 25,000 x your bet.'
    WHERE identifier = 'swntt:RockNWaysXtraWays'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Royal Rumble XtraGachaTM is a new 5x4 video slot from Swintt that takes you to a Manga world where comicscome to life and new features come your way. Trigger the XtraGachaTM to reveal super symbols thatsupercharge your wins!Royal Rumble XtraGachaTM offers your players 50 lines to win and introduces our brand new featureXtraGacha. When you land the XtraGachaTM symbol during the base game it reveals one of three supersymbols, each of which has a superpower. The Crown represents a Wild symbol, the Bomb acts like a Scatterand the Horseshoe accumulates a number of Free Spins that will be won once the Bomb symbols aretriggered.Welcome to the world of Japanese comics, welcome to Royal Rumble XtraGachaTM!'
    WHERE identifier = 'swntt:RoyalRumble'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Santa doesn''t let anyone ruin Christmas! Aliens are trying to take Christmas from everyone this year, but Santa is strongly standing in the middle of the reel, acting as a Wild Symbol, and protecting the festive season by randomly changing other symbols to Wilds.Santa Vs Aliens is Swintt''s video slot that celebrates Christmas in a bit untraditional way. This 5x3 game with 20 paylines, Santa Wilds and Alien Scatters is an ideal way how to enjoy this part of the year.Ho ho ho, we wish you fun with Santa Vs Aliens!'
    WHERE identifier = 'swntt:SantaVSAliens'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Seven Books Unlimited is ideal for players that like classic games because of their mechanics, which they love. This 5x3 classic book slot with 10 pay lines and Book Free Spin feature offers great fun and huge wins up to 5,000 x your bet. '
    WHERE identifier = 'swntt:SevenBooksUnlimited'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'Welcome to the times of Norse warriors, welcome to Viking Honour XtraWild™! This new 5x3 video slot with 30 lines and a max win of 6,261 x your bet takes you on a journey full of Free Spins, Wilds and huge wins.The Wild Selector on the left hand side of the reel indicates, which symbol becomes Wild on your next spin. Land 3, 4 or 5 Scatter Symbols and trigger 8, 15 and 25 Free Spins with Expanding Wilds and enjoy this raid to the sky high wins. May Odin grant you strength, courage and huge wins with Viking Honour XtraWild'
    WHERE identifier = 'swntt:VikingHonourXtraWild'`);

    await queryRunner.query(`
    UPDATE game
    SET description = 'You''re transported to the Giza Plateau in the fertile Nile River Valley.The ruins of an ancient empire lay before you. Triggering the bonusfeature transports you back in time to the glory of the Egyptian Empireduring the time of Cleopatra. The God Ra looms large, and treasuresabound'
    WHERE identifier = 'swntt:WildPharaoh'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('UPDATE game SET description = null');
  }
}
