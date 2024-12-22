//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
	"image14.jpg",
	"image15.jpg",
	"image16.jpg",
	"image17.jpg",
	"image18.jpg",
	"image19.jpg",
	"image20.jpg",
	"image21.jpg",
	"image22.jpg",
	"image23.jpg",
	"image24.jpg",
	"image25.jpg",
	"image26.jpg",
	"image27.jpg",
	"image28.jpg",
	"image29.jpg",
	"image30.jpg",
	"image31.jpg",
	"image32.jpg",
	"image33.jpg",
	"image34.jpg",
	"image35.jpg",
	"image36.jpg",
	"image37.jpg",
	"image39.jpg",
	"image40.jpg",
	"image41.jpg",
	"image42.jpg",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "arianagrandesantatellmeinstrumental.ogg", name: "{AN} - Installation Music"},
	{ogg: "christmasvillage.ogg", name: "{AN} - Installation Music"},
	{ogg: "royaltyfreebackgroundmusicvideos.ogg", name: "{AN} - Installation Music"},
	{ogg: "workatapizzaplacechristmas.ogg", name: "{AN} - Installation Music"},
	{ogg: "noclopyrightchristmasbackgroundmusic.ogg", name: "{AN} - Installation Music"},
	{ogg: "christmas.ogg", name: "{AN} - Installation Music"},
	{ogg: "happychristmasbackground.ogg", name: "{AN} - Installation Music"},
	{ogg: "thepizzeria.ogg", name: "{AN} - Installation Music"},
	{ogg: "lastchristmas.ogg", name: "{AN} - Installation Music"},
	{ogg: "happychristmasbackground.ogg", name: "{AN} - Installation Music"},
	{ogg: "twinmusicomchristmas.ogg", name: "{AN} - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"No GIFs or offensive material on text signs and keep your signs in role-playing. (no random signs) (Racist/Pornographic/Bashing of religions etc are not tolerated!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "ERP (Erotic Roleplay) is strictly prohibited. Engaging in ERP violates server rules and will result in an immediate ban. We kindly ask you to respect the community guidelines!",
	"Respect Everyone - Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech!",
	"We don’t condone racism, homophobia, transphobia, or sexism in any form. No targeted harassment in general. Get that shit outta here. For the love of god no rape jokes and no hateful language or jokes. Use of hateful imagery (such as swastikas, black sun, confederate flag etc.) will also be punished!",
	"No porn, no gore, there are kids here. Lengthy discussions of inappropriate topics or jokes in poor taste will get you warned so go be horny somewhere else!",
	"If you have an argument with another member(s) of this server, please contact a moderator or admin immediately so we can dispute the matter. This is supposed to be a fun place, so if you have to have an argument, please do it in PM!",
	"Discussing raids or participating in the raids of other servers will not be tolerated here. Raiding another server may result in a permanent ban from this one!",
	"Promoting your own company or organization outside of the server is not allowed unless you have permission from the founders. However, in-game businesses are permitted!",
	"Listen to Staff - Respect the decisions of our moderators and staff!",
	"Within our community, the discussion or active involvement in raids on other servers is not endorsed. Participation in such activities may result in a permanent ban from our server!",
	"Please refrain from metagaming. Actions such as issuing warrants based solely on auditory cues like money printers or meth labs through walls, or relying on information derived from the killfeed, are not permissible!",
	"Do not degrade or harass a person based on gender, age, race, sexuality, or religious preference. -- This is 2018. Not the 1940s and 50s. Do not disclose the personal information of another person, such as an address, phone number, geographical location, photos, or other personally identifying information, without explicit consent from the person. In the event of a player or staff member breaking a rule associated with our Discord server, we will operate according to the guidelines set below when it comes to resolution and infraction consequences based on the severity of the infraction. The consequences below are in order of severity, and the staff has sole discretion to skip a lesser punishment if they deem the infraction to be more severe than what the consequence calls for. The individual(s) must be issued a written or verbal warning!",
	"Our community management reserves the right to modify the rules at any time without prior notice. Please ensure you stay informed about the latest updates!",
	"I am a player, and I respectfully disagree with the actions taken by the administration on this server. However, if you find yourself in disagreement with the reason for a kick or ban, you are always free to explore and play on other servers. Please remember that all Garry's Mod servers are community-hosted, and access to them is ultimately at the discretion of their respective administrations!",
	"Any posted content that the admins or moderators find suggestively offensive in the channels, depending on the situation, will result in anything from a warning to a possible ban!",
	"Do not arrange, encourage, or take part in any unlawful or hazardous activity. such as sexual solicitation, human trafficking, and selling or facilitating the sale of prohibited or potentially dangerous goods (firearms, ammunition, drugs and controlled substances). These will probably get you banned from the community and may get you reported to law enforcement!",
	"Be Respectful Discrimination, slurs, or offensive remarks about race, gender, sexuality, religion, or any personal characteristics are prohibited. While light swearing is acceptable, excessive use should be avoided. Harassment in any form will not be tolerated!",
	"It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications!",
	"Be Respectful Discrimination, slurs, or offense to any race, gender, sexuality, religion, or personal characteristics of any kind will not be tolerated. Light swearing may be used but excessive usage is discouraged. Harassment in any form will not be tolerated!",
	"Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay!",
	"We do not allow users to advertise their own products, services, or servers, including in private messages. Do not use our server to spam or advertise to other Discord users!",
	"Finally, have fun! We want you to have fun and enjoy our finest community, as well as talk to other members and shit! Thanks for reading this set of rules, and please be sure to follow them to keep this server an enjoyable environment! Thanks, and enjoy your stay!",
	"Treat everyone here with respect and kindness. Avoid any behavior or remarks that could be perceived as rude or hurtful, as everyone deserves to feel comfortable and welcome!",
	"It is your responsibility to read and abide by our server rules. These may change over time. Failure to follow will result in punishment. This is a simple list. Follow, and you'll do great!",
	"Be Respectful: Racism, homophobia, transphobia, sexism, and any form of targeted harassment have no place here. Keep that out of any Discord, GMod server, or ETA-related spaces. Absolutely no rape jokes, hateful language, or hate symbols (e.g., swastikas, Black Sun, Confederate flag). Violations will result in strict consequences!",
	"No Self-Promotion: Please don’t spam your mixtape we're begging you! Jokes aside, feel free to share your work, but if that’s all you’re here for, trust us, we’ll notice!",
	"Nazism Display of swastikas, the nazi salute, or other glorification of nazism is prohibited, even for roleplay purposes Server information!",
	"Please do not talk about killing yourself, being worthless, venting your struggles, etc. on this public server. Moderators and other members of the server are not therapists and may not offer the best advice. If you're struggling, we recommend talking to close friends and/or family in a private setting or reaching out for professional medical help. A public discord is not best suited to discussing these issues!",
	"Fail RP is defined as performing an action or behaving in a way which breaks or inhibits roleplay in any manner. This can include, but is not limited to, bunnyhopping, using /advert OOCly, having an invalid name, necksnapping EOD/OSS, making callouts after you die, prop killing with anything other than rollermines/manhacks, acting conversely to the implied role of a specialized class (such as not attempting to blend in as a disguised SU or kill farming as a pushback class), and/or disrupting the gameplay of others (such as by micspamming!",
	"If what you're doing or are about to do isn't listed here and you're curious, ask a staff member. If one is not available, use common sense. If you can't find an answer, contact a Head Admin+. Server management has the final say over IC situations!",
	"Exploiting bugs, glitches, map features (such as going out of bounds or standing on the very edges of a map), or loopholes in the rules is prohibited. Abusing an exploit for any reason is punishable!",
	"If someone is bullying or harassing you or breaking any server rules, you should report them to a staff member or moderator of the server. Giving us as much information as possible will speed up our response time!",
	"Animatronics are permitted to KOS (Kill on Sight) from 12:00 AM to 5:00 AM in-game time. During these hours, as the restaurant is closed, they are allowed to eliminate you if you're inside!",
        "We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Our community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "Unless the voice channel owner specifically allows it, There is to be no use of soundboards in the voice channels. If you have been given permission, please don't spam noises, as others may not want to hear them all the time!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Breaking the NLR constitutes returning to the place of your death within or before five minutes of your death. This can also mean returning to and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a verbal warning, a written warning, or a ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR. Don’t do it!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
