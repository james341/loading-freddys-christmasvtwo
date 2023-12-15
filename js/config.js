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
	{ogg: "arianagrandesantatellmeinstrumental.ogg", name: "Nations - Installation Music"},
	{ogg: "workatapizzaplacechristmas.ogg", name: "Nations - Installation Music"},
	{ogg: "genbellsch.ogg", name: "Nations - Installation Music"},
	{ogg: "noclopyrightchristmasbackgroundmusic.ogg", name: "Nations - Installation Music"},
	{ogg: "jinglebellslnstrumental.ogg", name: "Nations - Installation Music"},
	{ogg: "happychristmasbackground.ogg", name: "Nations - Installation Music"},
	{ogg: "twinmusicomchristmas.ogg", name: "Nations - Installation Music"},
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
        "Nazism Display of swastikas, the nazi salute, or other glorification of nazism is prohibited, even for roleplay purposes Server information!",
	"Random death match: when you kill someone for reasons that are not on the KOS list and do not have enough cause to suspect they are a T. Things like “he looked at me”, “I felt like it”, and “lol fuk u fag!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they’re afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatantly RDMing a D. (except Pao, fuck that guy, always RDM Pao when you see him!",
	"The base entrance rules change depending on how many players are part of your base. Keypads must always be placed at eye level and entrances have to be a minimum width of a storefront prop in length. Fading doors must have enough room between them to fit 2 players between!",
	"No harassing users We all have different opinions! That means we all have different ships, character options, etc. Healthy discussion is one thing; asking questions is normal, but getting mad at someone for their likes is unacceptable!",
	"When Raiding the PD - You must advert "PD raid". You need an RP reason, and you need to be just outside the entrance, or in the PD (don't snipe from down the road). If there are less than 6 PD on, you can't raid the PD vault. There is a global cooldown of 15 minutes on PD raids!",
	"Where can I ask questions regarding technical help, gameplay, etc.? A: Feel free to ask in the appropriate channels in the discord our staff can still help you with that!",
	"Porn Sprays. Pretty self-explanatory. I’m saying that boobs are okay until I hear back from Tim, but absolutely no genitalia, whether it be anime, black and white “art”, animals, or whatever the hell else you freakin weirdos want to share with the world. This also applies to gore or “shock images” and things that look like porn sprays but really aren’t. For instance, three pigs were photographed and framed in such a way as to look like a man’s taint. It should be clear what is not allowed, and if you have to ask, the answer is probably no. Kids frequent this server. Keep that in mind!",
	"You may weapon check players providing you have a valid RP reason, an RP reason isn't required inside the PD!",
	"Overhang - Bases can not have an overhanging section that allows the defenders to shoot past the first door at the incoming raiders, you are only allowed to shoot past the first door if both parties (raider and defender) have clear lines of sight on each other!",
	"Prop floors must be no-collided with collided props beneath any printers. For other props, you need a sign if they are no-collided. No-collided entrances aren't allowed!",
	"Be kind and keep things polite. Harassment, sexism, racism, homophobia, transphobia, or hate speech of any kind will not be tolerated (username and pfp included). If you are being harassed or feel unsafe, direct message the Moderators or ModMail!",
	"Do not send a lot of small messages right after each other. These disrupt chat and make it hard to scroll through the server!",
	"Do not no-clip to get around quicker while in RP. If you're in your base and need to go to the ATM, then walk there. Do not !goto or !bring without the other person's permission. Make sure you are both not in RP (e.g., mid-raid or running from police) when you do this!",
	"Bunnyhopping is prohibited in an RP scenario. Cheating in any form is prohibited; this includes scripts or exploiting server plugins!",
	"No-colliding - Prop floors must be no-collided with collided props beneath any printers. For other props, you need a sign if they are no-collided. No-collided entrances aren't allowed!",
	"All Bank accounts which have an interest rate greater than 0 have to be available to all players to open. Banks are required to advertise all available bank accounts which provide interest. e.g. No Staff/Owner/gang only accounts!",
	"Punishments for violating the rules stated below are based on a staff member's judgement. Judgements made by staff are final. If you feel your punishment was unfair, you can contact an administrator. Do not bother moderators about a punishment, as you may be muted for it!",
	"No discrimination. Anything that brings hate towards sexuality or race is strictly prohibited!",
	"Gangs or raiding parties may have the following: 1 Covert Thief, 2 Thieves (Master/Normal), 1 Marauder/Skullbreaker, 1 Gun Dealer (who must have a public shop), and 1 Bank Manager (who must have a public printer bank!",
	"You may not build above or block the NPCS in any way this includes building near it to restrict movement, building above it to limit your risk of selling it, or making a tunnel to the NPC to gain easy access for transactions. However, you may base near it!",
	"All KOS Rules Apply will be allowed, but only under the default KOS rules for that section. You can use this, or you can manually do your KOS Rules!",
	"For most minor offenses like holding an illegal weapon out, discharging a weapon in public, illegal parking, or possession of contraband, CP might choose to ticket a user rather than arrest them!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics cannot exit the restaurant. They cannot chase players outside the restaurant, but they can grab the child before they leave the restaurant!",
        "If someone is bullying or harassing you or breaking any server rules, you should report them to a staff member or moderator of the server. Giving us as much information as possible will speed up our response time!",
	"Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
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
