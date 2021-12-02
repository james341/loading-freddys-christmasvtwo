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
	"image38.jpg",
	"image39.jpg",
	"image40.jpg",
	"image41.jpg",
	"image42.jpg",
	"image43.jpg",
	"image44.jpg",
	"image45.jpg",
	"image46.jpg",
	"image47.jpg",
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
	{ogg: "theresnochristmaslikeahome.ogg", name: "Nations - Installation Music"},
	{ogg: "rockinaroungchristmastrees.ogg", name: "Nations - Installation Music"},
	{ogg: "herecomesanta.ogg", name: "Nations - Installation Music"},
	{ogg: "whamlastchristmas.ogg", name: "Nations - Installation Music"},
	{ogg: "whatifdsafcharactersxmas", name: "Nations - Installation Music"},
	{ogg: "jinglebellrock.ogg", name: "Nations - Installation Music"},
	{ogg: "nationallampoonschristmasvacation.ogg", name: "Nations - Installation Music"},
	{ogg: "whatifdsafcharactersxmas.ogg", name: "Nations - Installation Music"},
	{ogg: "LetItsnowstered.ogg", name: "Nations - Installation Music"},
	{ogg: "davethemeend3.ogg", name: "Nations - Installation Music"},
	{ogg: "hollyjollychristmas.ogg", name: "Nations - Installation Music"},
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
	"RP 1. Respect your higher-ups. Staff's decision on punishment!",
	"Animatronics cannot exit the restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the Restaurant!",
	"Evading a Punishment by using an alternative account is not allowed. If caught, you will be kicked. If your original account was banned, your alternative account will be also!",
        "This is an English-only server. If you speak other languages, the rest of the chat cannot participate in the discussion, so your messages are like spam. Also, the moderators cannot do their job effectively if they don't understand the language you're speaking!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "Advertising a platform/service can risk in punishment if done too much (ie: continuos attempts to advertise any service/platform which you own and/or are a high-ranking member!",
        "Golden Freddy Plush, Freddy Plush, Plushtrap. They are obliged to sit in the pizzeria / in the basement during the day (For example: On the table, without moving on the floor. Minor movements are not considered a violation). [Punishment: warn / Ban 10-20min] They can escape to the sewers, but cannot surface. [Punishment: warn / Ban 10-20min] They can attack people at night. [Punishment: warn / Ban 10-20min!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "It's forbidden to stay in the back rooms of the pizzeria during the day (Excl. Broken animatronics and plush toys in the basement) [Punishment: warn / Ban 10-20min]!",
        "Users who are permanently banned or exiled may also be refused service by our various partners at their own discretion. If you believe that you have been banned by mistake, unjustly, or just regretful for being banned, appeals can be made and should be Directed!",
        "Animatronics such as the Withered once and the Golden once have to stay in the Basement UNLESS the basement door is open. - Asking an Admin to open the Door will not help !! - Changing jobs to open the door and then changing jobs back to an Animatronic count as Failrp and will result in a warning!",
        "Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!",
        "Fear RP is in Effect - respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "RP is acting out the role of your character within the game. Behave as you would in your character's place in the context of the situation!",
        "Do not edit or build your base during a raid. Aka Coming back after getting raided and then No-Colliding into the Base!",
        "NLR - After your death, you forget everything: those who killed you, whom you knew, the orders that were given to you and where you were. After you have died in a certain location, you can return there after 3 minutes. It is FORBIDDEN to return to the raid / capture / robbery after death. [Punishment: warn / Ban 10-20min]!",
        "Parties may advert PARTY then the action they are making ie( RAID, MUG, KIDNAP, ETC ) letting all party members participate in that action together. Anyone involved is Placed under cooldown for said Action!",
        "All jobs (except children and co.)  can own a defense firearm (1 handed) to protect their property, not to be used as an attacking weapon, and not be drawn when not (RP) threatened.!",
        "It Is forbidden to attack with a splash through props, walls, outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "No concentration camps or inappropriate structures. (Racist/Pornographic/Bashing of religions etc are not tolerated) Stick figures are allowed, Maybe penis statues in the Forest!",
        "It is forbidden to Prop Abuse, Fly on a prop / object, or to Lift, push someone, spam with a prop / object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Punishment: warn / Ban 10-20min!",
        "You cannot take over places. If you raid a place, you must leave after you have accomplished your goal. Do NOT stay to prevent people from returning for an extended period of time!",
        "If you are handcuffed, you must comply with the officer. Not doing so can be considered FailRP. If the police officer gets distracted and leaves you alone, you may attempt an escape!",
        "If somebody is wanted you may AOS/KOS the person. In order to KOS, you must warn the criminal at least 3 times to stop Moving. If they comply, you must arrest them instead!",
        "Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Do not build on rooftops that used for admin sits (shown by text screens). If building on a rooftop a solid staircase or ramp is needed!"

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
